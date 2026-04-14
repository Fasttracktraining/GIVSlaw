import { prisma } from "@/lib/db";

export interface TimeSlot {
  time: string; // "09:00"
  available: boolean;
}

export async function getAvailableSlots(advisorId: string, date: Date): Promise<TimeSlot[]> {
  const dayOfWeek = date.getDay(); // 0=Sun, 1=Mon...
  const dateStr = date.toISOString().split("T")[0];
  const dateStart = new Date(dateStr + "T00:00:00.000Z");
  const dateEnd = new Date(dateStr + "T23:59:59.999Z");

  // Get advisor's availability for this day of week
  const availability = await prisma.advisorAvailability.findUnique({
    where: { advisorId_dayOfWeek: { advisorId, dayOfWeek } },
  });

  if (!availability) return []; // No availability set for this day

  // Check if date is blocked
  const blocked = await prisma.blockedDate.findUnique({
    where: { advisorId_date: { advisorId, date: dateStart } },
  });

  if (blocked) return []; // Day is blocked

  // Get existing consultations for this date
  const existingBookings = await prisma.consultation.findMany({
    where: {
      advisorId,
      scheduledAt: { gte: dateStart, lte: dateEnd },
      status: { in: ["PENDING", "CONFIRMED"] },
    },
  });

  const bookedTimes = new Set(
    existingBookings.map((b) => {
      const h = b.scheduledAt.getUTCHours().toString().padStart(2, "0");
      const m = b.scheduledAt.getUTCMinutes().toString().padStart(2, "0");
      return `${h}:${m}`;
    })
  );

  // Generate time slots
  const slots: TimeSlot[] = [];
  const [startH, startM] = availability.startTime.split(":").map(Number);
  const [endH, endM] = availability.endTime.split(":").map(Number);
  const startMinutes = startH * 60 + startM;
  const endMinutes = endH * 60 + endM;
  const slotDuration = availability.slotMinutes;

  // Don't show past slots for today
  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();

  for (let m = startMinutes; m + slotDuration <= endMinutes; m += slotDuration) {
    const h = Math.floor(m / 60);
    const min = m % 60;
    const time = `${h.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`;

    let available = !bookedTimes.has(time);

    // Filter out past times for today
    if (isToday) {
      const slotDate = new Date(date);
      slotDate.setHours(h, min, 0, 0);
      if (slotDate <= now) available = false;
    }

    slots.push({ time, available });
  }

  return slots;
}

export async function getAvailableDates(advisorId: string, weeksAhead: number = 4): Promise<string[]> {
  const dates: string[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Get availability schedule
  const availability = await prisma.advisorAvailability.findMany({
    where: { advisorId },
  });

  const availableDays = new Set(availability.map((a) => a.dayOfWeek));

  // Get blocked dates
  const endDate = new Date(today);
  endDate.setDate(endDate.getDate() + weeksAhead * 7);

  const blockedDates = await prisma.blockedDate.findMany({
    where: { advisorId, date: { gte: today, lte: endDate } },
  });

  const blockedSet = new Set(blockedDates.map((b) => b.date.toISOString().split("T")[0]));

  // Generate available dates
  for (let d = new Date(today); d <= endDate; d.setDate(d.getDate() + 1)) {
    const dow = d.getDay();
    const dateStr = d.toISOString().split("T")[0];

    if (availableDays.has(dow) && !blockedSet.has(dateStr)) {
      dates.push(dateStr);
    }
  }

  return dates;
}
