import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CaseSummaryBar from "./CaseSummaryBar";
import CaseNextActionPanel from "./CaseNextActionPanel";
import CaseStageTracker from "./CaseStageTracker";
import CaseDocumentPanel from "./CaseDocumentPanel";
import CaseChecklistPanel from "./CaseChecklistPanel";
import CaseCompliancePanel from "./CaseCompliancePanel";
import CaseNotesPanel from "./CaseNotesPanel";
import CaseActivityTimeline from "./CaseActivityTimeline";
import CaseMessages from "./CaseMessages";
import CaseTypeSelector from "./CaseTypeSelector";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function CaseDetailPage({ params }: Props) {
  const { id } = await params;

  const caseRecord = await prisma.case.findUnique({
    where: { id },
    include: {
      client: true,
      assignedAdvisor: true,
      activities: { orderBy: { createdAt: "desc" }, take: 30, include: { user: true } },
      documents: { orderBy: { createdAt: "desc" }, include: { uploadedBy: true } },
      messages: { orderBy: { createdAt: "asc" }, include: { sender: true } },
      notes: { orderBy: { createdAt: "desc" }, include: { author: true } },
      checklists: { orderBy: { sortOrder: "asc" }, include: { completedBy: true } },
      docRequirements: { orderBy: { sortOrder: "asc" }, include: { verifiedBy: true } },
    },
  });

  if (!caseRecord) notFound();

  // TODO: Replace with real session-based permission check
  const canModify = true;

  const serializedMessages = caseRecord.messages.map((m) => ({
    id: m.id,
    content: m.content,
    createdAt: m.createdAt.toISOString(),
    senderName: `${m.sender.firstName} ${m.sender.lastName}`,
    senderRole: m.sender.role,
  }));

  const serializedNotes = caseRecord.notes.map((n) => ({
    id: n.id,
    content: n.content,
    isInternal: n.isInternal,
    authorName: `${n.author.firstName} ${n.author.lastName}`,
    createdAt: n.createdAt.toISOString(),
  }));

  const serializedActivities = caseRecord.activities.map((a) => ({
    id: a.id,
    action: a.action,
    description: a.description,
    userName: a.user ? `${a.user.firstName} ${a.user.lastName}` : null,
    createdAt: a.createdAt.toISOString(),
  }));

  const serializedChecklists = caseRecord.checklists.map((c) => ({
    id: c.id,
    label: c.label,
    description: c.description,
    category: c.category,
    isRequired: c.isRequired,
    isCompleted: c.isCompleted,
    completedBy: c.completedBy ? `${c.completedBy.firstName} ${c.completedBy.lastName}` : null,
    completedAt: c.completedAt?.toISOString() ?? null,
    forStage: c.forStage,
    notes: c.notes,
  }));

  const serializedDocRequirements = caseRecord.docRequirements.map((d) => ({
    id: d.id,
    label: d.label,
    description: d.description,
    category: d.category,
    isRequired: d.isRequired,
    status: d.status,
    forStage: d.forStage,
    feedback: d.feedback,
    documentId: d.documentId,
    verifiedBy: d.verifiedBy ? `${d.verifiedBy.firstName} ${d.verifiedBy.lastName}` : null,
    verifiedAt: d.verifiedAt?.toISOString() ?? null,
  }));

  const uploadedDocs = caseRecord.documents.map((d) => ({
    id: d.id,
    name: d.name,
    category: d.category,
    fileUrl: d.fileUrl,
  }));

  return (
    <div>
      <Link href="/crm/cases" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#6B7280", textDecoration: "none", fontSize: "0.875rem", marginBottom: "1rem" }}>
        <ArrowLeft style={{ width: "1rem", height: "1rem" }} /> Back to Cases
      </Link>

      {/* ═══ SUMMARY BAR ═══ */}
      <div style={{ marginBottom: "1rem" }}>
        <CaseSummaryBar
          caseRef={caseRecord.caseRef}
          caseType={caseRecord.caseType}
          clientName={`${caseRecord.client.firstName} ${caseRecord.client.lastName}`}
          advisorName={`${caseRecord.assignedAdvisor.firstName} ${caseRecord.assignedAdvisor.lastName}`}
          workflowStage={caseRecord.workflowStage}
          priority={caseRecord.priority}
          paymentStatus={caseRecord.paymentStatus}
          deadline={caseRecord.deadline?.toISOString() ?? null}
          riskLevel={caseRecord.riskLevel}
        />
      </div>

      {/* ═══ CASE TYPE SELECTOR (if not set) ═══ */}
      {!caseRecord.caseType && (
        <div style={{ marginBottom: "1rem" }}>
          <CaseTypeSelector caseId={caseRecord.id} />
        </div>
      )}

      {/* ═══ NEXT ACTION ═══ */}
      <div style={{ marginBottom: "1rem" }}>
        <CaseNextActionPanel
          label={caseRecord.nextActionLabel}
          priority={caseRecord.nextActionPriority}
        />
      </div>

      {/* ═══ STAGE TRACKER ═══ */}
      <div style={{ marginBottom: "1.5rem" }}>
        <CaseStageTracker
          caseId={caseRecord.id}
          currentStage={caseRecord.workflowStage}
          canModify={canModify}
        />
      </div>

      {/* ═══ MAIN CONTENT: 2-COLUMN ═══ */}
      <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "1.5rem" }}>
        {/* Left column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Document Requirements */}
          <CaseDocumentPanel
            requirements={serializedDocRequirements}
            uploadedDocuments={uploadedDocs}
            canModify={canModify}
          />

          {/* Checklists */}
          <CaseChecklistPanel
            items={serializedChecklists}
            canModify={canModify}
          />

          {/* Notes */}
          <CaseNotesPanel
            caseId={caseRecord.id}
            notes={serializedNotes}
            canModify={canModify}
          />

          {/* Messages */}
          <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.25rem 1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
            <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid #E5E7EB" }}>
              Messages ({caseRecord.messages.length})
            </h2>
            <CaseMessages messages={serializedMessages} caseId={caseRecord.id} />
          </div>
        </div>

        {/* Right column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Case Info */}
          <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.25rem 1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
            <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid #E5E7EB" }}>
              Case Info
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <InfoItem label="Client" value={`${caseRecord.client.firstName} ${caseRecord.client.lastName}`} />
              <InfoItem label="Email" value={caseRecord.client.email} />
              <InfoItem label="Phone" value={caseRecord.client.phone || "—"} />
              <InfoItem label="Advisor" value={`${caseRecord.assignedAdvisor.firstName} ${caseRecord.assignedAdvisor.lastName}`} />
              <InfoItem label="Priority" value={caseRecord.priority} />
              <InfoItem label="Risk Level" value={caseRecord.riskLevel || "Not assessed"} />
              <InfoItem label="Payment" value={`${caseRecord.paymentStatus} — £${caseRecord.amountPaid || 0} / £${caseRecord.totalFee || "TBD"}`} />
              {caseRecord.deadline && (
                <InfoItem label="Deadline" value={caseRecord.deadline.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} />
              )}
              <InfoItem label="Created" value={caseRecord.createdAt.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} />
            </div>
          </div>

          {/* Compliance */}
          <CaseCompliancePanel
            caseId={caseRecord.id}
            complianceAmlDone={caseRecord.complianceAmlDone}
            complianceConfidentialitySigned={caseRecord.complianceConfidentialitySigned}
            complianceConflictCheckDone={caseRecord.complianceConflictCheckDone}
            canModify={canModify}
          />

          {/* Activity Timeline */}
          <CaseActivityTimeline activities={serializedActivities} />
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase" }}>{label}</p>
      <p style={{ fontSize: "0.875rem", color: "#111827", marginTop: "0.125rem" }}>{value}</p>
    </div>
  );
}
