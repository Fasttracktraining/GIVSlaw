import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import Link from "next/link";
import ConsultationActions from "./ConsultationActions";

export default async function CRMConsultationsPage() {
  const session = await auth();
  const user = session?.user as Record<string, unknown>;
  const role = user?.role as string;

  const now = new Date();

  const consultations = await prisma.consultation.findMany({
    orderBy: { scheduledAt: "desc" },
    include: { advisor: true, client: true, lead: true },
  });

  const upcoming = consultations.filter((c) => c.scheduledAt >= now && !["CANCELLED", "COMPLETED", "NO_SHOW"].includes(c.status));
  const past = consultations.filter((c) => c.scheduledAt < now || ["CANCELLED", "COMPLETED", "NO_SHOW"].includes(c.status));

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D" }}>Consultations</h1>
          <p style={{ color: "#6B7280", fontSize: "0.875rem", marginTop: "0.25rem" }}>{consultations.length} total</p>
        </div>
        <Link href="/crm/settings/availability" style={{ padding: "0.625rem 1rem", background: "#F3F4F6", borderRadius: "0.375rem", textDecoration: "none", color: "#374151", fontSize: "0.875rem", fontWeight: 500 }}>
          Manage Availability
        </Link>
      </div>

      {/* Upcoming */}
      <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "1rem" }}>Upcoming ({upcoming.length})</h2>
      {upcoming.length === 0 ? (
        <div style={{ background: "white", borderRadius: "0.75rem", padding: "2rem", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", marginBottom: "2rem" }}>
          <p style={{ color: "#9CA3AF" }}>No upcoming consultations.</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
          {upcoming.map((c) => (
            <div key={c.id} style={{ background: "white", borderRadius: "0.75rem", padding: "1.25rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", borderLeft: "4px solid #10B981" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <p style={{ fontWeight: 600, color: "#0B1B3D", marginBottom: "0.25rem" }}>
                    {c.client ? `${c.client.firstName} ${c.client.lastName}` : c.lead ? `${c.lead.firstName} ${c.lead.lastName}` : "Unknown"}
                  </p>
                  <p style={{ fontSize: "0.8125rem", color: "#6B7280" }}>
                    {c.scheduledAt.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })} at {c.scheduledAt.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })} · {c.duration}min
                  </p>
                  <p style={{ fontSize: "0.8125rem", color: "#6B7280", marginTop: "0.125rem" }}>
                    {c.service} · Advisor: {c.advisor?.firstName || "Unassigned"}
                  </p>
                  {c.lead && !c.client && (
                    <Link href={`/crm/leads/${c.lead.id}`} style={{ fontSize: "0.75rem", color: "#3B82F6", textDecoration: "none" }}>View Lead →</Link>
                  )}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ padding: "0.25rem 0.625rem", borderRadius: "9999px", fontSize: "0.6875rem", fontWeight: 600, background: c.status === "CONFIRMED" ? "#D1FAE5" : "#FEF3C7", color: c.status === "CONFIRMED" ? "#065F46" : "#B45309" }}>
                    {c.status}
                  </span>
                  <ConsultationActions id={c.id} status={c.status} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Past */}
      {past.length > 0 && (
        <>
          <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "1rem" }}>Past ({past.length})</h2>
          <div style={{ background: "white", borderRadius: "0.75rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #E5E7EB", background: "#F9FAFB" }}>
                  {["Client", "Date", "Service", "Advisor", "Status"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "0.625rem 1rem", fontSize: "0.6875rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {past.slice(0, 20).map((c) => (
                  <tr key={c.id} style={{ borderBottom: "1px solid #F3F4F6" }}>
                    <td style={{ padding: "0.625rem 1rem", fontSize: "0.875rem", color: "#111827" }}>
                      {c.client ? `${c.client.firstName} ${c.client.lastName}` : c.lead ? `${c.lead.firstName} ${c.lead.lastName}` : "—"}
                    </td>
                    <td style={{ padding: "0.625rem 1rem", fontSize: "0.8125rem", color: "#6B7280" }}>
                      {c.scheduledAt.toLocaleDateString("en-GB")} {c.scheduledAt.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}
                    </td>
                    <td style={{ padding: "0.625rem 1rem", fontSize: "0.8125rem", color: "#6B7280" }}>{c.service}</td>
                    <td style={{ padding: "0.625rem 1rem", fontSize: "0.8125rem", color: "#6B7280" }}>{c.advisor?.firstName || "—"}</td>
                    <td style={{ padding: "0.625rem 1rem" }}>
                      <span style={{ padding: "0.125rem 0.5rem", borderRadius: "9999px", fontSize: "0.6875rem", fontWeight: 600, background: "#F3F4F6", color: "#6B7280" }}>{c.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
