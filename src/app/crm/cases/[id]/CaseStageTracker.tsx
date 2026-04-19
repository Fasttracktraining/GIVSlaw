"use client";

import { useState } from "react";
import { CheckCircle2, Lock, ArrowRight, AlertTriangle } from "lucide-react";
import { advanceWorkflowStage } from "./actions";

const STAGES = [
  { key: "ENQUIRY", label: "Enquiry" },
  { key: "DOCUMENT_COLLECTION", label: "Document Collection" },
  { key: "CASE_REVIEW", label: "Case Review" },
  { key: "SUBMISSION", label: "Submission" },
  { key: "DECISION_TRACKING", label: "Decision Tracking" },
];

interface Props {
  caseId: string;
  currentStage: string;
  canModify: boolean;
}

export default function CaseStageTracker({ caseId, currentStage, canModify }: Props) {
  const [advancing, setAdvancing] = useState(false);
  const [blockers, setBlockers] = useState<string[]>([]);
  const [showBlockers, setShowBlockers] = useState(false);

  const currentIdx = STAGES.findIndex((s) => s.key === currentStage);
  const isLastStage = currentIdx === STAGES.length - 1;

  async function handleAdvance() {
    setAdvancing(true);
    setBlockers([]);
    setShowBlockers(false);
    try {
      const result = await advanceWorkflowStage(caseId);
      if (!result.success) {
        setBlockers(result.blockers);
        setShowBlockers(true);
      }
    } finally {
      setAdvancing(false);
    }
  }

  async function handleOverride() {
    const reason = prompt("Director override — enter reason:");
    if (!reason) return;
    setAdvancing(true);
    try {
      await advanceWorkflowStage(caseId, reason);
      setShowBlockers(false);
      setBlockers([]);
    } finally {
      setAdvancing(false);
    }
  }

  return (
    <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.25rem 1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
        <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Workflow Stage
        </p>
        {canModify && !isLastStage && (
          <button
            onClick={handleAdvance}
            disabled={advancing}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.5rem 1rem",
              background: "#0B1B3D",
              color: "white",
              border: "none",
              borderRadius: "0.375rem",
              fontSize: "0.8125rem",
              fontWeight: 600,
              cursor: advancing ? "wait" : "pointer",
              opacity: advancing ? 0.6 : 1,
            }}
          >
            <ArrowRight style={{ width: "0.875rem", height: "0.875rem" }} />
            {advancing ? "Checking..." : "Advance Stage"}
          </button>
        )}
      </div>

      {/* Stage steps */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
        {STAGES.map((stage, idx) => {
          const isComplete = idx < currentIdx;
          const isCurrent = idx === currentIdx;
          const isFuture = idx > currentIdx;

          return (
            <div key={stage.key} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
              {/* Connector + Circle */}
              <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                {idx > 0 && (
                  <div style={{
                    flex: 1,
                    height: "2px",
                    background: isComplete || isCurrent ? "#0B1B3D" : "#E5E7EB",
                  }} />
                )}
                <div style={{
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  background: isComplete ? "#0B1B3D" : isCurrent ? "#C5963A" : "#F3F4F6",
                  color: isComplete || isCurrent ? "white" : "#9CA3AF",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                }}>
                  {isComplete ? (
                    <CheckCircle2 style={{ width: "1rem", height: "1rem" }} />
                  ) : isFuture ? (
                    <Lock style={{ width: "0.75rem", height: "0.75rem" }} />
                  ) : (
                    idx + 1
                  )}
                </div>
                {idx < STAGES.length - 1 && (
                  <div style={{
                    flex: 1,
                    height: "2px",
                    background: isComplete ? "#0B1B3D" : "#E5E7EB",
                  }} />
                )}
              </div>
              {/* Label */}
              <p style={{
                fontSize: "0.6875rem",
                fontWeight: isCurrent ? 700 : 500,
                color: isCurrent ? "#0B1B3D" : isComplete ? "#374151" : "#9CA3AF",
                textAlign: "center",
                marginTop: "0.375rem",
                lineHeight: 1.2,
              }}>
                {stage.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* Blockers */}
      {showBlockers && blockers.length > 0 && (
        <div style={{ marginTop: "1rem", padding: "1rem", background: "#FEF2F2", borderRadius: "0.5rem", borderLeft: "4px solid #DC2626" }}>
          <p style={{ fontWeight: 600, color: "#991B1B", fontSize: "0.875rem", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.375rem" }}>
            <AlertTriangle style={{ width: "0.875rem", height: "0.875rem" }} />
            Cannot advance — {blockers.length} blocker{blockers.length > 1 ? "s" : ""}
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {blockers.map((b, i) => (
              <li key={i} style={{ color: "#991B1B", fontSize: "0.8125rem", paddingLeft: "1.25rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0 }}>•</span>
                {b}
              </li>
            ))}
          </ul>
          {canModify && (
            <button
              onClick={handleOverride}
              style={{
                marginTop: "0.75rem",
                padding: "0.375rem 0.875rem",
                background: "transparent",
                border: "1px solid #DC2626",
                color: "#DC2626",
                borderRadius: "0.25rem",
                fontSize: "0.75rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Director Override
            </button>
          )}
        </div>
      )}
    </div>
  );
}
