"use server";

import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function saveAvailability(formData: FormData) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");
  const user = session.user as Record<string, unknown>;
  const advisorId = user.id as string;

  const slotMinutes = parseInt(formData.get("slotMinutes") as string) || 30;

  // Process each day
  for (let day = 0; day <= 6; day++) {
    const enabled = formData.get(`day_${day}_enabled`) === "on";
    const start = formData.get(`day_${day}_start`) as string;
    const end = formData.get(`day_${day}_end`) as string;

    if (enabled && start && end) {
      await prisma.advisorAvailability.upsert({
        where: { advisorId_dayOfWeek: { advisorId, dayOfWeek: day } },
        create: { advisorId, dayOfWeek: day, startTime: start, endTime: end, slotMinutes },
        update: { startTime: start, endTime: end, slotMinutes },
      });
    } else {
      await prisma.advisorAvailability.deleteMany({
        where: { advisorId, dayOfWeek: day },
      });
    }
  }

  revalidatePath("/crm/settings/availability");
}

export async function addBlockedDate(formData: FormData) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");
  const user = session.user as Record<string, unknown>;
  const advisorId = user.id as string;

  const dateStr = formData.get("date") as string;
  const reason = formData.get("reason") as string;

  if (!dateStr) return;

  const date = new Date(dateStr + "T00:00:00.000Z");

  await prisma.blockedDate.upsert({
    where: { advisorId_date: { advisorId, date } },
    create: { advisorId, date, reason: reason || null },
    update: { reason: reason || null },
  });

  revalidatePath("/crm/settings/availability");
}

export async function removeBlockedDate(id: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  await prisma.blockedDate.delete({ where: { id } });
  revalidatePath("/crm/settings/availability");
}
