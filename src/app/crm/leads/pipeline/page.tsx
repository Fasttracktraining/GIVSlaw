import { prisma } from "@/lib/db";
import Link from "next/link";
import { List, Zap } from "lucide-react";
import { getNextAction } from "@/lib/next-action";
import { ToastProvider } from "@/components/shared/Toast";
import PipelineBoard from "./PipelineBoard";

const COLUMNS = ["NEW", "CONTACTED", "QUALIFIED", "CONVERTED", "LOST"] as const;

export default async function PipelinePage() {
  const leads = await prisma.lead.findMany({
    orderBy: { updatedAt: "desc" },
    include: { assignedAdvisor: true },
  });

  const columns = COLUMNS.map((status) => ({
    status,
    leads: leads
      .filter((l) => l.status === status)
      .map((l) => {
        const na = getNextAction(l);
        return {
          id: l.id,
          firstName: l.firstName,
          lastName: l.lastName,
          phone: l.phone,
          temperature: l.temperature,
          nextAction: { label: na.label, color: na.color, bg: na.bg },
          nextFollowUpAt: l.nextFollowUpAt?.toISOString() || null,
          advisorName: l.assignedAdvisor ? `${l.assignedAdvisor.firstName}` : null,
        };
      }),
  }));

  return (
    <ToastProvider>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D" }}>Pipeline</h1>
            <p style={{ color: "#6B7280", fontSize: "0.875rem", marginTop: "0.25rem" }}>{leads.length} total leads</p>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Link href="/crm/leads" style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", padding: "0.5rem 1rem", background: "#F3F4F6", borderRadius: "0.375rem", textDecoration: "none", color: "#374151", fontSize: "0.8125rem", fontWeight: 500 }}>
              <List style={{ width: "0.875rem", height: "0.875rem" }} /> List View
            </Link>
            <Link href="/crm/leads/work" style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", padding: "0.5rem 1rem", background: "#F3F4F6", borderRadius: "0.375rem", textDecoration: "none", color: "#374151", fontSize: "0.8125rem", fontWeight: 500 }}>
              <Zap style={{ width: "0.875rem", height: "0.875rem" }} /> Work Mode
            </Link>
          </div>
        </div>

        <PipelineBoard columns={columns} />
      </div>
    </ToastProvider>
  );
}
