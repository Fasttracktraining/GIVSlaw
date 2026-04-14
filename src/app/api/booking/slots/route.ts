import { NextRequest, NextResponse } from "next/server";
import { getAvailableSlots, getAvailableDates } from "@/lib/booking";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const advisorId = searchParams.get("advisorId");
  const date = searchParams.get("date");

  if (!advisorId) {
    return NextResponse.json({ error: "advisorId required" }, { status: 400 });
  }

  // If date provided, return slots for that date
  if (date) {
    const slots = await getAvailableSlots(advisorId, new Date(date));
    return NextResponse.json({ slots });
  }

  // Otherwise return available dates
  const dates = await getAvailableDates(advisorId);
  return NextResponse.json({ dates });
}
