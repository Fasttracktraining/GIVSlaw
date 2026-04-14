import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import Link from "next/link";

export default async function PortalCasePage() {
  const session = await auth();
  const user = session?.user as Record<string, unknown>;

  const activeCase = await prisma.case.findFirst({
    where: { clientId: user.id as string },
    orderBy: { createdAt: "desc" },
    include: {
      assignedAdvisor: true,
      activities: { orderBy: { createdAt: "desc" }, take: 20 },
    },
  });

  if (!activeCase) {
    return (
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1rem" }}>My Case</h1>
        <div style={{ background: "white", borderRadius: "0.75rem", padding: "3rem", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <p style={{ color: "#6B7280" }}>No active case yet.</p>
        </div>
      </div>
    );
  }

  const actionIcons: Record<string, { emoji: string; color: string }> = {
    case_created: { emoji: "📋", color: "#10B981" },
    document_uploaded: { emoji: "📄", color: "#3B82F6" },
    document_reviewed: { emoji: "✅", color: "#8B5CF6" },
    stage_changed: { emoji: "🔄", color: "#F59E0B" },
    message_sent: { emoji: "💬", color: "#6366F1" },
    note_added: { emoji: "📝", color: "#6B7280" },
  };

  return (
    <div>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.25rem" }}>My Case</h1>
      <p style={{ color: "#6B7280", fontSize: "0.875rem", marginBottom: "2rem" }}>{activeCase.caseRef} · {activeCase.type.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase())}</p>

      {/* Case Info */}
      <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid #E5E7EB" }}>Case Details</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase" }}>Status</p>
            <p style={{ fontSize: "1rem", fontWeight: 700, color: "#0B1B3D", marginTop: "0.25rem" }}>{activeCase.stage.replace(/_/g, " ")}</p>
          </div>
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase" }}>Advisor</p>
            <p style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D", marginTop: "0.25rem" }}>{activeCase.assignedAdvisor.firstName} {activeCase.assignedAdvisor.lastName}</p>
          </div>
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase" }}>Priority</p>
            <p style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D", marginTop: "0.25rem" }}>{activeCase.priority}</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "1.25rem", paddingBottom: "0.75rem", borderBottom: "1px solid #E5E7EB" }}>Case Timeline</h2>

        {activeCase.activities.length === 0 ? (
          <p style={{ color: "#9CA3AF", fontSize: "0.875rem" }}>No activity yet.</p>
        ) : (
          <div style={{ position: "relative", paddingLeft: "2rem" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: "0.5625rem", top: "0.5rem", bottom: "0.5rem", width: "2px", background: "#E5E7EB" }} />

            {activeCase.activities.map((activity, i) => {
              const ai = actionIcons[activity.action] || actionIcons.note_added;
              return (
                <div key={activity.id} style={{ position: "relative", paddingBottom: i < activeCase.activities.length - 1 ? "1.5rem" : 0 }}>
                  {/* Dot */}
                  <div style={{ position: "absolute", left: "-1.625rem", top: "0.25rem", width: "1.25rem", height: "1.25rem", borderRadius: "50%", background: "white", border: `2px solid ${ai.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.5rem" }}>
                    {ai.emoji}
                  </div>
                  <div>
                    <p style={{ fontSize: "0.875rem", color: "#111827" }}>{activity.description}</p>
                    <p style={{ fontSize: "0.75rem", color: "#9CA3AF", marginTop: "0.25rem" }}>
                      {activity.createdAt.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
