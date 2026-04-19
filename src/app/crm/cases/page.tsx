import { prisma } from "@/lib/db";
import Link from "next/link";
import { Plus, AlertCircle, AlertTriangle, Info, CheckCircle2 } from "lucide-react";

const CASE_TYPE_LABELS: Record<string, string> = {
  SPOUSE_VISA_ENTRY_CLEARANCE: "Spouse Visa — Entry",
  SPOUSE_VISA_EXTENSION_ILR: "Spouse Visa — Ext/ILR",
  SKILLED_WORKER_ENTRY: "Skilled Worker — Entry",
  SKILLED_WORKER_EXTENSION: "Skilled Worker — Ext",
  ILR_10YR_LONG_RESIDENCE: "ILR 10yr",
  BRITISH_CITIZENSHIP_NATURALISATION: "Citizenship",
};

const STAGE_LABELS: Record<string, string> = {
  ENQUIRY: "Enquiry",
  DOCUMENT_COLLECTION: "Doc Collection",
  CASE_REVIEW: "Case Review",
  SUBMISSION: "Submission",
  DECISION_TRACKING: "Decision",
};

const STAGE_COLOURS: Record<string, { bg: string; text: string }> = {
  ENQUIRY: { bg: "#F3F4F6", text: "#374151" },
  DOCUMENT_COLLECTION: { bg: "#DBEAFE", text: "#1D4ED8" },
  CASE_REVIEW: { bg: "#FEF3C7", text: "#92400E" },
  SUBMISSION: { bg: "#EDE9FE", text: "#5B21B6" },
  DECISION_TRACKING: { bg: "#D1FAE5", text: "#065F46" },
};

const PRIORITY_ICONS: Record<string, { colour: string }> = {
  URGENT: { colour: "#DC2626" },
  HIGH: { colour: "#F59E0B" },
};

const NEXT_ACTION_ICONS: Record<string, typeof AlertCircle> = {
  urgent: AlertCircle,
  warning: AlertTriangle,
  info: Info,
  success: CheckCircle2,
};

const NEXT_ACTION_COLOURS: Record<string, string> = {
  urgent: "#DC2626",
  warning: "#F59E0B",
  info: "#3B82F6",
  success: "#10B981",
};

interface Props {
  searchParams: Promise<{ stage?: string; type?: string }>;
}

export default async function CasesListPage({ searchParams }: Props) {
  const sp = await searchParams;

  const where: Record<string, unknown> = {};
  if (sp.stage) where.workflowStage = sp.stage;
  if (sp.type) where.caseType = sp.type;

  const cases = await prisma.case.findMany({
    where,
    orderBy: { createdAt: "desc" },
    include: { client: true, assignedAdvisor: true },
  });

  // Counts by stage
  const allCases = await prisma.case.groupBy({
    by: ["workflowStage"],
    _count: true,
  });
  const stageCountMap = Object.fromEntries(allCases.map((g) => [g.workflowStage, g._count]));
  const totalCount = allCases.reduce((sum, g) => sum + g._count, 0);

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D" }}>Cases</h1>
          <p style={{ color: "#6B7280", fontSize: "0.875rem", marginTop: "0.25rem" }}>{totalCount} total cases</p>
        </div>
        <Link
          href="/crm/cases/new"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.375rem",
            padding: "0.625rem 1.25rem",
            background: "#C5963A",
            color: "white",
            fontWeight: 600,
            fontSize: "0.875rem",
            borderRadius: "0.375rem",
            textDecoration: "none",
          }}
        >
          <Plus style={{ width: "1rem", height: "1rem" }} />
          New Case
        </Link>
      </div>

      {/* Stage filter pills */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
        <Link
          href="/crm/cases"
          style={{
            padding: "0.375rem 0.875rem",
            borderRadius: "1rem",
            fontSize: "0.8125rem",
            fontWeight: !sp.stage ? 700 : 500,
            background: !sp.stage ? "#0B1B3D" : "#F3F4F6",
            color: !sp.stage ? "white" : "#374151",
            textDecoration: "none",
          }}
        >
          All ({totalCount})
        </Link>
        {Object.entries(STAGE_LABELS).map(([key, label]) => {
          const count = stageCountMap[key] || 0;
          const isActive = sp.stage === key;
          const colours = STAGE_COLOURS[key] || STAGE_COLOURS.ENQUIRY;
          return (
            <Link
              key={key}
              href={`/crm/cases?stage=${key}`}
              style={{
                padding: "0.375rem 0.875rem",
                borderRadius: "1rem",
                fontSize: "0.8125rem",
                fontWeight: isActive ? 700 : 500,
                background: isActive ? colours.text : "#F3F4F6",
                color: isActive ? "white" : "#374151",
                textDecoration: "none",
              }}
            >
              {label} ({count})
            </Link>
          );
        })}
      </div>

      {/* Table */}
      <div style={{ background: "white", borderRadius: "0.75rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", overflow: "hidden" }}>
        {cases.length === 0 ? (
          <div style={{ padding: "3rem", textAlign: "center", color: "#9CA3AF" }}>
            No cases found. {sp.stage ? "Try a different filter or " : ""}
            <Link href="/crm/cases/new" style={{ color: "#C5963A", textDecoration: "underline" }}>create a new case</Link>.
          </div>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #E5E7EB", background: "#F9FAFB" }}>
                {["Case Ref", "Client", "Type", "Stage", "Next Action", "Priority", "Advisor", "Created"].map((h) => (
                  <th key={h} style={{ textAlign: "left", padding: "0.75rem 1rem", fontSize: "0.6875rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.05em" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cases.map((c) => {
                const stageColours = STAGE_COLOURS[c.workflowStage] || STAGE_COLOURS.ENQUIRY;
                const typeLabel = c.caseType ? (CASE_TYPE_LABELS[c.caseType] || c.caseType) : c.type;
                const NAIcon = c.nextActionPriority ? NEXT_ACTION_ICONS[c.nextActionPriority] : null;
                const naColour = c.nextActionPriority ? NEXT_ACTION_COLOURS[c.nextActionPriority] : "#6B7280";

                return (
                  <tr key={c.id} style={{ borderBottom: "1px solid #F3F4F6" }}>
                    <td style={{ padding: "0.75rem 1rem" }}>
                      <Link href={`/crm/cases/${c.id}`} style={{ color: "#0B1B3D", fontWeight: 600, textDecoration: "none", fontSize: "0.875rem" }}>
                        {c.caseRef}
                      </Link>
                    </td>
                    <td style={{ padding: "0.75rem 1rem", fontSize: "0.875rem", color: "#374151" }}>
                      {c.client.firstName} {c.client.lastName}
                    </td>
                    <td style={{ padding: "0.75rem 1rem", fontSize: "0.8125rem", color: "#6B7280" }}>
                      {typeLabel}
                    </td>
                    <td style={{ padding: "0.75rem 1rem" }}>
                      <span style={{
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        background: stageColours.bg,
                        color: stageColours.text,
                      }}>
                        {STAGE_LABELS[c.workflowStage] || c.workflowStage}
                      </span>
                    </td>
                    <td style={{ padding: "0.75rem 1rem" }}>
                      {c.nextActionLabel ? (
                        <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.8125rem", color: naColour }}>
                          {NAIcon && <NAIcon style={{ width: "0.75rem", height: "0.75rem", flexShrink: 0 }} />}
                          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "14rem" }}>
                            {c.nextActionLabel}
                          </span>
                        </div>
                      ) : (
                        <span style={{ fontSize: "0.8125rem", color: "#D1D5DB" }}>—</span>
                      )}
                    </td>
                    <td style={{ padding: "0.75rem 1rem", fontSize: "0.875rem", color: PRIORITY_ICONS[c.priority]?.colour || "#6B7280" }}>
                      {c.priority}
                    </td>
                    <td style={{ padding: "0.75rem 1rem", fontSize: "0.875rem", color: "#6B7280" }}>
                      {c.assignedAdvisor.firstName} {c.assignedAdvisor.lastName}
                    </td>
                    <td style={{ padding: "0.75rem 1rem", fontSize: "0.8125rem", color: "#9CA3AF" }}>
                      {c.createdAt.toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
