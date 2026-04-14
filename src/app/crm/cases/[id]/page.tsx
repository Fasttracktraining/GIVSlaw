import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CaseStageManager from "./CaseStageManager";
import DocumentReview from "./DocumentReview";
import CaseMessages from "./CaseMessages";

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
      activities: { orderBy: { createdAt: "desc" }, take: 15 },
      documents: { orderBy: { createdAt: "desc" }, include: { uploadedBy: true } },
      messages: { orderBy: { createdAt: "asc" }, include: { sender: true } },
    },
  });

  if (!caseRecord) notFound();

  const serializedMessages = caseRecord.messages.map((m) => ({
    id: m.id,
    content: m.content,
    createdAt: m.createdAt.toISOString(),
    senderName: `${m.sender.firstName} ${m.sender.lastName}`,
    senderRole: m.sender.role,
  }));

  return (
    <div>
      <Link href="/crm/cases" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#6B7280", textDecoration: "none", fontSize: "0.875rem", marginBottom: "1rem" }}>
        <ArrowLeft style={{ width: "1rem", height: "1rem" }} /> Back to Cases
      </Link>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D" }}>{caseRecord.caseRef}</h1>
          <p style={{ color: "#6B7280", fontSize: "0.875rem", marginTop: "0.25rem" }}>
            {caseRecord.client.firstName} {caseRecord.client.lastName} · {caseRecord.type.replace(/-/g, " ")}
          </p>
        </div>
        <CaseStageManager caseId={caseRecord.id} currentStage={caseRecord.stage} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.5rem" }}>
        {/* Left */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Documents */}
          <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
            <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid #E5E7EB" }}>
              Documents ({caseRecord.documents.length})
            </h2>
            {caseRecord.documents.length === 0 ? (
              <p style={{ color: "#9CA3AF", fontSize: "0.875rem" }}>No documents uploaded yet.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {caseRecord.documents.map((doc) => (
                  <DocumentReview key={doc.id} document={{
                    id: doc.id,
                    name: doc.name,
                    category: doc.category,
                    status: doc.status,
                    feedback: doc.feedback,
                    fileUrl: doc.fileUrl,
                    uploadedBy: `${doc.uploadedBy.firstName} ${doc.uploadedBy.lastName}`,
                    createdAt: doc.createdAt.toISOString(),
                  }} />
                ))}
              </div>
            )}
          </div>

          {/* Messages */}
          <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
            <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid #E5E7EB" }}>
              Messages ({caseRecord.messages.length})
            </h2>
            <CaseMessages messages={serializedMessages} caseId={caseRecord.id} />
          </div>
        </div>

        {/* Right */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Case Info */}
          <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
            <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid #E5E7EB" }}>Case Info</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <InfoItem label="Client" value={`${caseRecord.client.firstName} ${caseRecord.client.lastName}`} />
              <InfoItem label="Email" value={caseRecord.client.email} />
              <InfoItem label="Advisor" value={`${caseRecord.assignedAdvisor.firstName} ${caseRecord.assignedAdvisor.lastName}`} />
              <InfoItem label="Priority" value={caseRecord.priority} />
              <InfoItem label="Payment" value={`${caseRecord.paymentStatus} — £${caseRecord.amountPaid || 0} / £${caseRecord.totalFee || "TBD"}`} />
            </div>
          </div>

          {/* Timeline */}
          <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
            <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid #E5E7EB" }}>Timeline</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {caseRecord.activities.map((a) => (
                <div key={a.id} style={{ padding: "0.5rem 0", borderBottom: "1px solid #F3F4F6", fontSize: "0.8125rem" }}>
                  <p style={{ color: "#111827" }}>{a.description}</p>
                  <p style={{ color: "#9CA3AF", fontSize: "0.6875rem", marginTop: "0.125rem" }}>
                    {a.createdAt.toLocaleDateString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              ))}
            </div>
          </div>
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
