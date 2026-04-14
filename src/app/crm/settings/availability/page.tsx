import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { saveAvailability, addBlockedDate, removeBlockedDate } from "./actions";
import BlockedDateManager from "./BlockedDateManager";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default async function AvailabilityPage() {
  const session = await auth();
  const user = session?.user as Record<string, unknown>;
  const advisorId = user?.id as string;

  const availability = await prisma.advisorAvailability.findMany({
    where: { advisorId },
    orderBy: { dayOfWeek: "asc" },
  });

  const blockedDates = await prisma.blockedDate.findMany({
    where: { advisorId, date: { gte: new Date() } },
    orderBy: { date: "asc" },
  });

  const availMap: Record<number, { start: string; end: string; slot: number }> = {};
  availability.forEach((a) => {
    availMap[a.dayOfWeek] = { start: a.startTime, end: a.endTime, slot: a.slotMinutes };
  });

  const currentSlot = availability.length > 0 ? availability[0].slotMinutes : 30;

  return (
    <div>
      <Link href="/crm/settings" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#6B7280", textDecoration: "none", fontSize: "0.875rem", marginBottom: "1rem" }}>
        <ArrowLeft style={{ width: "1rem", height: "1rem" }} /> Back to Settings
      </Link>

      <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.25rem" }}>Availability</h1>
      <p style={{ color: "#6B7280", fontSize: "0.875rem", marginBottom: "2rem" }}>
        Set your weekly schedule and booking link: <code style={{ background: "#F3F4F6", padding: "0.125rem 0.375rem", borderRadius: "0.25rem" }}>/book/{advisorId}</code>
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.5rem" }}>
        {/* Weekly Schedule */}
        <form action={saveAvailability} style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid #E5E7EB" }}>Weekly Schedule</h2>

          <div style={{ marginBottom: "1rem" }}>
            <label style={{ fontSize: "0.875rem", fontWeight: 600, color: "#0B1B3D", marginRight: "0.5rem" }}>Slot Duration:</label>
            <select name="slotMinutes" defaultValue={currentSlot} style={{ padding: "0.375rem 0.5rem", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.875rem" }}>
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="60">60 minutes</option>
            </select>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {DAYS.map((day, i) => {
              const a = availMap[i];
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.5rem 0", borderBottom: "1px solid #F3F4F6" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", width: "8rem" }}>
                    <input type="checkbox" name={`day_${i}_enabled`} defaultChecked={!!a} />
                    <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>{day}</span>
                  </label>
                  <input type="time" name={`day_${i}_start`} defaultValue={a?.start || "09:00"} style={{ padding: "0.375rem", border: "1px solid #D1D5DB", borderRadius: "0.25rem", fontSize: "0.875rem" }} />
                  <span style={{ color: "#6B7280" }}>to</span>
                  <input type="time" name={`day_${i}_end`} defaultValue={a?.end || "17:00"} style={{ padding: "0.375rem", border: "1px solid #D1D5DB", borderRadius: "0.25rem", fontSize: "0.875rem" }} />
                </div>
              );
            })}
          </div>

          <button type="submit" style={{ marginTop: "1rem", padding: "0.625rem 1.5rem", background: "#0B1B3D", color: "white", border: "none", borderRadius: "0.375rem", fontWeight: 600, fontSize: "0.875rem", cursor: "pointer" }}>
            Save Schedule
          </button>
        </form>

        {/* Blocked Dates */}
        <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", alignSelf: "start" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid #E5E7EB" }}>Blocked Dates</h2>

          <form action={addBlockedDate} style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
            <input type="date" name="date" required min={new Date().toISOString().split("T")[0]} style={{ padding: "0.5rem", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.875rem" }} />
            <input type="text" name="reason" placeholder="Reason (optional)" style={{ padding: "0.5rem", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.875rem" }} />
            <button type="submit" style={{ padding: "0.5rem", background: "#EF4444", color: "white", border: "none", borderRadius: "0.375rem", fontWeight: 600, fontSize: "0.8125rem", cursor: "pointer" }}>Block Date</button>
          </form>

          <BlockedDateManager dates={blockedDates.map((d) => ({
            id: d.id,
            date: d.date.toISOString(),
            reason: d.reason,
          }))} />
        </div>
      </div>
    </div>
  );
}
