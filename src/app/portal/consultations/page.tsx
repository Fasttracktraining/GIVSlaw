import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { Calendar, Clock, Video } from "lucide-react";

export default async function PortalConsultationsPage() {
  const session = await auth();
  const user = session?.user as Record<string, unknown>;

  const now = new Date();

  const consultations = await prisma.consultation.findMany({
    where: { clientId: user.id as string },
    orderBy: { scheduledAt: "desc" },
    include: { advisor: true },
  });

  const upcoming = consultations.filter((c) => c.scheduledAt >= now && c.status !== "CANCELLED");
  const past = consultations.filter((c) => c.scheduledAt < now || c.status === "CANCELLED");

  return (
    <div>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.25rem" }}>Consultations</h1>
      <p style={{ color: "#6B7280", fontSize: "0.875rem", marginBottom: "2rem" }}>Your upcoming and past consultations.</p>

      {/* Upcoming */}
      <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "1rem" }}>Upcoming</h2>
      {upcoming.length === 0 ? (
        <div style={{ background: "white", borderRadius: "0.75rem", padding: "2rem", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", marginBottom: "2rem" }}>
          <Calendar style={{ width: "2.5rem", height: "2.5rem", color: "#D1D5DB", margin: "0 auto 0.75rem" }} />
          <p style={{ color: "#6B7280", fontSize: "0.875rem" }}>No upcoming consultations scheduled.</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
          {upcoming.map((c) => (
            <div key={c.id} style={{ background: "white", borderRadius: "0.75rem", padding: "1.25rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", borderLeft: "4px solid #10B981" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <p style={{ fontWeight: 600, color: "#0B1B3D", marginBottom: "0.375rem" }}>{c.service}</p>
                  <div style={{ display: "flex", gap: "1rem", fontSize: "0.8125rem", color: "#6B7280" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                      <Calendar style={{ width: "0.875rem", height: "0.875rem" }} />
                      {c.scheduledAt.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                      <Clock style={{ width: "0.875rem", height: "0.875rem" }} />
                      {c.scheduledAt.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })} · {c.duration}min
                    </span>
                  </div>
                  {c.advisor && (
                    <p style={{ fontSize: "0.8125rem", color: "#6B7280", marginTop: "0.375rem" }}>
                      With {c.advisor.firstName} {c.advisor.lastName}
                    </p>
                  )}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ padding: "0.25rem 0.75rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 600, background: c.status === "CONFIRMED" ? "#D1FAE5" : "#FEF3C7", color: c.status === "CONFIRMED" ? "#065F46" : "#B45309" }}>
                    {c.status}
                  </span>
                  {c.meetingLink && (
                    <a href={c.meetingLink} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.375rem", padding: "0.375rem 0.75rem", background: "#0B1B3D", color: "white", borderRadius: "0.375rem", textDecoration: "none", fontSize: "0.75rem", fontWeight: 600 }}>
                      <Video style={{ width: "0.875rem", height: "0.875rem" }} /> Join
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Past */}
      {past.length > 0 && (
        <>
          <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "1rem" }}>Past Consultations</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {past.map((c) => (
              <div key={c.id} style={{ background: "white", borderRadius: "0.75rem", padding: "1.25rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", opacity: 0.7 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <p style={{ fontWeight: 600, color: "#0B1B3D", fontSize: "0.875rem" }}>{c.service}</p>
                    <p style={{ fontSize: "0.8125rem", color: "#6B7280", marginTop: "0.25rem" }}>
                      {c.scheduledAt.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                      {c.advisor && ` · ${c.advisor.firstName} ${c.advisor.lastName}`}
                    </p>
                  </div>
                  <span style={{ padding: "0.25rem 0.75rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 600, background: "#F3F4F6", color: "#6B7280" }}>
                    {c.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
