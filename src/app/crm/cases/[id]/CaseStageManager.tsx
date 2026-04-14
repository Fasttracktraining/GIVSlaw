"use client";

import { useState } from "react";
import { updateCaseStage } from "./actions";

const STAGES = ["ENQUIRY", "CONSULTATION", "ONBOARDING", "IN_PROGRESS", "SUBMITTED", "AWAITING_DECISION", "APPROVED", "REFUSED", "APPEAL", "CLOSED"];

export default function CaseStageManager({ caseId, currentStage }: { caseId: string; currentStage: string }) {
  const [stage, setStage] = useState(currentStage);
  const [saving, setSaving] = useState(false);

  const handleChange = async (newStage: string) => {
    setSaving(true);
    setStage(newStage);
    await updateCaseStage(caseId, newStage);
    setSaving(false);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "#6B7280" }}>Stage:</label>
      <select
        value={stage}
        onChange={(e) => handleChange(e.target.value)}
        disabled={saving}
        style={{ padding: "0.5rem 0.75rem", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.875rem", fontWeight: 600, color: "#0B1B3D", background: "white" }}
      >
        {STAGES.map((s) => (
          <option key={s} value={s}>{s.replace(/_/g, " ")}</option>
        ))}
      </select>
    </div>
  );
}
