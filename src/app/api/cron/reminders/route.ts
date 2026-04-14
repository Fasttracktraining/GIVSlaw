import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { emailConsultationReminder } from "@/lib/email";

// This endpoint should be called every hour (via cron, Vercel cron, or external scheduler).
// GET /api/cron/reminders?key=YOUR_CRON_SECRET

export async function GET(request: NextRequest) {
  // Simple auth for cron - in production, use a proper secret
  const key = request.nextUrl.searchParams.get("key");
  if (key !== process.env.CRON_SECRET && process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const now = new Date();
  const oneHourFromNow = new Date(now.getTime() + 60 * 60 * 1000);
  const twentyFourHoursFromNow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  const twentyFiveHoursFromNow = new Date(now.getTime() + 25 * 60 * 60 * 1000);

  let sent = 0;

  // 1-hour reminders: consultations between now+55min and now+65min
  const soonConsultations = await prisma.consultation.findMany({
    where: {
      scheduledAt: { gte: new Date(now.getTime() + 55 * 60 * 1000), lte: new Date(now.getTime() + 65 * 60 * 1000) },
      status: { in: ["PENDING", "CONFIRMED"] },
    },
    include: { advisor: true, client: true, lead: true },
  });

  for (const c of soonConsultations) {
    const email = c.client?.email || c.lead?.email;
    const name = c.client?.firstName || c.lead?.firstName || "Client";
    if (email) {
      await emailConsultationReminder(email, {
        clientName: name,
        advisorName: c.advisor ? `${c.advisor.firstName} ${c.advisor.lastName}` : "Your advisor",
        date: c.scheduledAt.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" }),
        time: c.scheduledAt.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
        hoursUntil: 1,
      });
      sent++;
    }
  }

  // 24-hour reminders: consultations between now+23h and now+25h
  const tomorrowConsultations = await prisma.consultation.findMany({
    where: {
      scheduledAt: { gte: new Date(now.getTime() + 23 * 60 * 60 * 1000), lte: twentyFiveHoursFromNow },
      status: { in: ["PENDING", "CONFIRMED"] },
    },
    include: { advisor: true, client: true, lead: true },
  });

  for (const c of tomorrowConsultations) {
    const email = c.client?.email || c.lead?.email;
    const name = c.client?.firstName || c.lead?.firstName || "Client";
    if (email) {
      await emailConsultationReminder(email, {
        clientName: name,
        advisorName: c.advisor ? `${c.advisor.firstName} ${c.advisor.lastName}` : "Your advisor",
        date: c.scheduledAt.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" }),
        time: c.scheduledAt.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
        hoursUntil: 24,
      });
      sent++;
    }
  }

  console.log(`⏰ Reminder cron: ${sent} reminders sent`);
  return NextResponse.json({ ok: true, sent, timestamp: now.toISOString() });
}
