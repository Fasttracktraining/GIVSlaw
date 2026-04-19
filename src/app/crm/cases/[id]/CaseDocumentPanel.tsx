"use client";

import { useState } from "react";
import { FileText, CheckCircle2, Clock, XCircle, Upload, Eye } from "lucide-react";
import { verifyDocRequirement, linkDocumentToRequirement } from "./actions";

interface DocRequirementData {
  id: string;
  label: string;
  description: string | null;
  category: string;
  isRequired: boolean;
  status: string;
  forStage: string | null;
  feedback: string | null;
  documentId: string | null;
  verifiedBy: string | null;
  verifiedAt: string | null;
}

interface UploadedDoc {
  id: string;
  name: string;
  category: string;
  fileUrl: string;
}

interface Props {
  requirements: DocRequirementData[];
  uploadedDocuments: UploadedDoc[];
  canModify: boolean;
}

const STATUS_CONFIG: Record<string, { bg: string; text: string; label: string; icon: typeof Clock }> = {
  PENDING:  { bg: "#F3F4F6", text: "#6B7280", label: "Pending",  icon: Clock },
  UPLOADED: { bg: "#DBEAFE", text: "#1E40AF", label: "Uploaded", icon: Upload },
  VERIFIED: { bg: "#D1FAE5", text: "#065F46", label: "Verified", icon: CheckCircle2 },
  REJECTED: { bg: "#FEE2E2", text: "#991B1B", label: "Rejected", icon: XCircle },
};

const STAGE_LABELS: Record<string, string> = {
  ENQUIRY: "Enquiry",
  DOCUMENT_COLLECTION: "Document Collection",
  CASE_REVIEW: "Case Review",
  SUBMISSION: "Submission",
  DECISION_TRACKING: "Decision Tracking",
};

export default function CaseDocumentPanel({ requirements, uploadedDocuments, canModify }: Props) {
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [feedbackInput, setFeedbackInput] = useState<Record<string, string>>({});

  const totalRequired = requirements.filter((r) => r.isRequired).length;
  const verifiedRequired = requirements.filter((r) => r.isRequired && r.status === "VERIFIED").length;

  // Group by stage
  const byStage = new Map<string, DocRequirementData[]>();
  for (const req of requirements) {
    const key = req.forStage || "GENERAL";
    if (!byStage.has(key)) byStage.set(key, []);
    byStage.get(key)!.push(req);
  }

  async function handleVerify(id: string) {
    setActionLoading(id);
    try { await verifyDocRequirement(id, "VERIFIED"); } finally { setActionLoading(null); }
  }

  async function handleReject(id: string) {
    const fb = feedbackInput[id] || "";
    setActionLoading(id);
    try { await verifyDocRequirement(id, "REJECTED", fb || undefined); } finally { setActionLoading(null); }
  }

  async function handleLink(reqId: string, docId: string) {
    setActionLoading(reqId);
    try { await linkDocumentToRequirement(reqId, docId); } finally { setActionLoading(null); }
  }

  // Unlinked uploaded docs (available to assign)
  const linkedDocIds = new Set(requirements.map((r) => r.documentId).filter(Boolean));
  const unlinkedDocs = uploadedDocuments.filter((d) => !linkedDocIds.has(d.id));

  return (
    <div style={{ background: "white", borderRadius: "0.75rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", padding: "1.25rem 1.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid #E5E7EB" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D" }}>
          Documents
        </h2>
        {/* Progress */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ width: "6rem", height: "6px", background: "#E5E7EB", borderRadius: "3px", overflow: "hidden" }}>
            <div style={{
              width: `${totalRequired > 0 ? (verifiedRequired / totalRequired) * 100 : 0}%`,
              height: "100%",
              background: verifiedRequired === totalRequired ? "#10B981" : "#C5963A",
              borderRadius: "3px",
              transition: "width 0.3s",
            }} />
          </div>
          <span style={{ fontSize: "0.75rem", color: "#6B7280" }}>
            {verifiedRequired}/{totalRequired} verified
          </span>
        </div>
      </div>

      {Array.from(byStage.entries()).map(([stage, reqs]) => (
        <div key={stage} style={{ marginBottom: "1.25rem" }}>
          <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
            {STAGE_LABELS[stage] || "General"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {reqs.map((req) => {
              const sc = STATUS_CONFIG[req.status] || STATUS_CONFIG.PENDING;
              const Icon = sc.icon;
              const isLoading = actionLoading === req.id;

              return (
                <div key={req.id} style={{
                  padding: "0.75rem 0.875rem",
                  border: "1px solid #E5E7EB",
                  borderRadius: "0.5rem",
                  background: req.status === "REJECTED" ? "#FEF2F2" : "white",
                }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flex: 1, minWidth: 0 }}>
                      <FileText style={{ width: "1rem", height: "1rem", color: "#9CA3AF", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.8125rem", color: "#374151", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {req.label}
                        {req.isRequired && (
                          <span style={{ color: "#DC2626", marginLeft: "0.25rem", fontSize: "0.625rem" }}>●</span>
                        )}
                      </span>
                    </div>

                    {/* Status badge */}
                    <span style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      padding: "0.25rem 0.625rem",
                      borderRadius: "1rem",
                      background: sc.bg,
                      color: sc.text,
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      flexShrink: 0,
                    }}>
                      <Icon style={{ width: "0.6875rem", height: "0.6875rem" }} />
                      {sc.label}
                    </span>
                  </div>

                  {/* Feedback */}
                  {req.feedback && (
                    <p style={{ fontSize: "0.75rem", color: "#991B1B", marginTop: "0.375rem", paddingLeft: "1.5rem" }}>
                      {req.feedback}
                    </p>
                  )}

                  {/* Actions */}
                  {canModify && (
                    <div style={{ marginTop: "0.5rem", paddingLeft: "1.5rem", display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
                      {/* Link unlinked doc */}
                      {req.status === "PENDING" && unlinkedDocs.length > 0 && (
                        <select
                          onChange={(e) => { if (e.target.value) handleLink(req.id, e.target.value); }}
                          disabled={isLoading}
                          defaultValue=""
                          style={{ fontSize: "0.75rem", padding: "0.25rem 0.5rem", border: "1px solid #D1D5DB", borderRadius: "0.25rem" }}
                        >
                          <option value="" disabled>Link uploaded doc...</option>
                          {unlinkedDocs.map((d) => (
                            <option key={d.id} value={d.id}>{d.name}</option>
                          ))}
                        </select>
                      )}

                      {/* Verify / Reject buttons */}
                      {req.status === "UPLOADED" && (
                        <>
                          <button
                            onClick={() => handleVerify(req.id)}
                            disabled={isLoading}
                            style={{
                              padding: "0.25rem 0.625rem",
                              background: "#10B981",
                              color: "white",
                              border: "none",
                              borderRadius: "0.25rem",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              cursor: "pointer",
                            }}
                          >
                            Verify
                          </button>
                          <input
                            placeholder="Feedback (optional)"
                            value={feedbackInput[req.id] || ""}
                            onChange={(e) => setFeedbackInput({ ...feedbackInput, [req.id]: e.target.value })}
                            style={{ fontSize: "0.75rem", padding: "0.25rem 0.5rem", border: "1px solid #D1D5DB", borderRadius: "0.25rem", flex: 1, minWidth: "8rem" }}
                          />
                          <button
                            onClick={() => handleReject(req.id)}
                            disabled={isLoading}
                            style={{
                              padding: "0.25rem 0.625rem",
                              background: "#DC2626",
                              color: "white",
                              border: "none",
                              borderRadius: "0.25rem",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              cursor: "pointer",
                            }}
                          >
                            Reject
                          </button>
                        </>
                      )}

                      {/* View linked doc */}
                      {req.documentId && (
                        <a
                          href={uploadedDocuments.find((d) => d.id === req.documentId)?.fileUrl || "#"}
                          target="_blank"
                          rel="noopener"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.25rem",
                            fontSize: "0.75rem",
                            color: "#2563EB",
                            textDecoration: "none",
                          }}
                        >
                          <Eye style={{ width: "0.75rem", height: "0.75rem" }} />
                          View
                        </a>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {requirements.length === 0 && (
        <p style={{ color: "#9CA3AF", fontSize: "0.875rem", textAlign: "center", padding: "2rem 0" }}>
          No document requirements. Set a case type to generate the checklist.
        </p>
      )}
    </div>
  );
}
