"use client";

import { useState } from "react";
import { reviewDocument } from "./actions";
import { FileText, CheckCircle, XCircle, ExternalLink } from "lucide-react";

interface Doc {
  id: string;
  name: string;
  category: string;
  status: string;
  feedback: string | null;
  fileUrl: string;
  uploadedBy: string;
  createdAt: string;
}

const statusColors: Record<string, { bg: string; text: string }> = {
  UPLOADED: { bg: "#FEF3C7", text: "#B45309" },
  UNDER_REVIEW: { bg: "#DBEAFE", text: "#1D4ED8" },
  APPROVED: { bg: "#D1FAE5", text: "#065F46" },
  NEEDS_CORRECTION: { bg: "#FEE2E2", text: "#991B1B" },
  INVALID: { bg: "#FEE2E2", text: "#991B1B" },
};

export default function DocumentReview({ document: doc }: { document: Doc }) {
  const [showReview, setShowReview] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [saving, setSaving] = useState(false);

  const handleReview = async (status: string) => {
    setSaving(true);
    await reviewDocument(doc.id, status, feedback);
    setShowReview(false);
    setFeedback("");
    setSaving(false);
  };

  const sc = statusColors[doc.status] || statusColors.UPLOADED;

  return (
    <div style={{ padding: "0.75rem", background: "#F9FAFB", borderRadius: "0.5rem", borderLeft: `3px solid ${sc.text}` }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <FileText style={{ width: "1.25rem", height: "1.25rem", color: "#6B7280", flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontWeight: 600, fontSize: "0.8125rem", color: "#0B1B3D" }}>{doc.name}</p>
            <span style={{ padding: "0.125rem 0.5rem", borderRadius: "9999px", fontSize: "0.6875rem", fontWeight: 600, background: sc.bg, color: sc.text }}>{doc.status.replace(/_/g, " ")}</span>
          </div>
          <p style={{ fontSize: "0.6875rem", color: "#9CA3AF" }}>{doc.category.replace(/_/g, " ")} · {doc.uploadedBy} · {new Date(doc.createdAt).toLocaleDateString("en-GB")}</p>
          {doc.feedback && <p style={{ fontSize: "0.75rem", color: "#DC2626", marginTop: "0.25rem" }}>Feedback: {doc.feedback}</p>}
        </div>
        <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#3B82F6" }}>
          <ExternalLink style={{ width: "1rem", height: "1rem" }} />
        </a>
      </div>

      {/* Review actions */}
      {(doc.status === "UPLOADED" || doc.status === "UNDER_REVIEW") && !showReview && (
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.625rem", paddingLeft: "2rem" }}>
          <button onClick={() => handleReview("APPROVED")} disabled={saving} style={{ display: "flex", alignItems: "center", gap: "0.25rem", padding: "0.25rem 0.625rem", background: "white", border: "1px solid #10B981", borderRadius: "0.25rem", color: "#10B981", fontSize: "0.6875rem", fontWeight: 600, cursor: "pointer" }}>
            <CheckCircle style={{ width: "0.75rem", height: "0.75rem" }} /> Approve
          </button>
          <button onClick={() => setShowReview(true)} style={{ display: "flex", alignItems: "center", gap: "0.25rem", padding: "0.25rem 0.625rem", background: "white", border: "1px solid #EF4444", borderRadius: "0.25rem", color: "#EF4444", fontSize: "0.6875rem", fontWeight: 600, cursor: "pointer" }}>
            <XCircle style={{ width: "0.75rem", height: "0.75rem" }} /> Request Correction
          </button>
        </div>
      )}

      {showReview && (
        <div style={{ marginTop: "0.625rem", paddingLeft: "2rem" }}>
          <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Explain what needs to be corrected..." rows={2} style={{ width: "100%", padding: "0.5rem", border: "1px solid #D1D5DB", borderRadius: "0.25rem", fontSize: "0.8125rem", marginBottom: "0.375rem", resize: "none" }} />
          <div style={{ display: "flex", gap: "0.375rem" }}>
            <button onClick={() => handleReview("NEEDS_CORRECTION")} disabled={saving} style={{ padding: "0.25rem 0.625rem", background: "#EF4444", color: "white", border: "none", borderRadius: "0.25rem", fontSize: "0.6875rem", fontWeight: 600, cursor: "pointer" }}>
              {saving ? "Saving..." : "Send Correction"}
            </button>
            <button onClick={() => { setShowReview(false); setFeedback(""); }} style={{ padding: "0.25rem 0.625rem", background: "white", border: "1px solid #D1D5DB", borderRadius: "0.25rem", fontSize: "0.6875rem", cursor: "pointer" }}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
