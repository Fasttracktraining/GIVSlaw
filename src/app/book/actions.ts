"use server";

import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { emailConsultationBooked } from "@/lib/email";

export async function bookConsultation(formData: FormData) {
  const advisorId = formData.get("advisorId") as string;
  const date = formData.get("date") as string;
  const time = formData.get("time") as string;
  const service = formData.get("service") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const isPortal = formData.get("isPortal") === "true";

  if (!advisorId || !date || !time) throw new Error("Missing required fields");

  // Build scheduled datetime
  const [h, m] = time.split(":").map(Number);
  const scheduledAt = new Date(date);
  scheduledAt.setUTCHours(h, m, 0, 0);

  // Check for auth (portal users)
  const session = await auth();
  let clientId: string | null = null;
  let leadId: string | null = null;

  if (session?.user) {
    const user = session.user as Record<string, unknown>;
    clientId = user.id as string;
  }

  // If public booking, create/find lead
  if (!isPortal && email) {
    const existingLead = await prisma.lead.findFirst({ where: { email } });

    if (existingLead) {
      leadId = existingLead.id;
    } else {
      const newLead = await prisma.lead.create({
        data: {
          firstName: firstName || "Unknown",
          lastName: lastName || "Unknown",
          email,
          phone: phone || null,
          source: "WEBSITE",
          primaryService: service || null,
          assignedAdvisorId: advisorId,
          status: "NEW",
        },
      });
      leadId = newLead.id;
    }
  }

  // Get advisor's slot duration
  const dayOfWeek = scheduledAt.getDay();
  const availability = await prisma.advisorAvailability.findUnique({
    where: { advisorId_dayOfWeek: { advisorId, dayOfWeek } },
  });

  const consultation = await prisma.consultation.create({
    data: {
      service: service || "General Consultation",
      type: "FREE_INTRO",
      status: "CONFIRMED",
      scheduledAt,
      duration: availability?.slotMinutes || 30,
      advisorId,
      clientId,
      leadId,
    },
  });

  // Send confirmation email
  const advisor = await prisma.user.findUnique({ where: { id: advisorId } });
  const clientEmail = email || (clientId ? (await prisma.user.findUnique({ where: { id: clientId } }))?.email : null);
  if (clientEmail && advisor) {
    emailConsultationBooked(clientEmail, {
      clientName: firstName || "Client",
      advisorName: `${advisor.firstName} ${advisor.lastName}`,
      date: scheduledAt.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" }),
      time: time,
      service: service || "General Consultation",
    }).catch(() => {}); // fire and forget
  }

  revalidatePath("/crm/consultations");
  revalidatePath("/portal/consultations");

  // Redirect to confirmation
  const params = new URLSearchParams({
    id: consultation.id,
    advisor: advisorId,
    date: date,
    time: time,
  });
  redirect(`/book/confirm?${params.toString()}`);
}
