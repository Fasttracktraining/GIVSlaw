"use client";

import { useState } from "react";
import { recordCallOutcome } from "../actions";
import { useToast } from "@/components/shared/Toast";

const outcomes = [
  { value: "NO_ANSWER", label: "No Answer", color: "#6B7280" },
  { value: "INTERESTED", label: "Interested", color: "#10B981" },
  { value: "NOT_INTERESTED", label: "Not Interested", color: "#EF4444" },
  { value: "CALLBACK_LATER", label: "Callback Later", color: "#F59E0B" },
  { value: "WRONG_NUMBER", label: "Wrong Number", color: "#991B1B" },
];

interface Props {
  leadId: string;
}

export default function CallOutcomeActions({ leadId }: Props) {
  const [selectedOutcome, setSelectedOutcome] = useState<string | null>(null);
  const [note, setNote] = useState("");
  const [saving, setSaving] = useState(false);
  const toast = useToast();

  const handleRecord = async () => {
    if (!selectedOutcome) return;
    setSaving(true);
    await recordCallOutcome(leadId, selectedOutcome, note);
    toast("Call logged");
    setSelectedOutcome(null);
    setNote("");
    setSaving(false);
  };

  return (
    <div>
      <p style={{ fontSize: "0.8125rem", color: "#6B7280", marginBottom: "0.75rem" }}>Record a call outcome:</p>
      <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
        {outcomes.map((o) => (
          <button
            key={o.value}
            onClick={() => setSelectedOutcome(selectedOutcome === o.value ? null : o.value)}
            style={{
              padding: "0.375rem 0.75rem",
              borderRadius: "0.375rem",
              fontSize: "0.75rem",
              fontWeight: 600,
              cursor: "pointer",
              border: selectedOutcome === o.value ? `2px solid ${o.color}` : "1px solid #D1D5DB",
              background: selectedOutcome === o.value ? `${o.color}15` : "white",
              color: o.color,
            }}
          >
            {o.label}
          </button>
        ))}
      </div>

      {selectedOutcome && (
        <div>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Optional note about the call..."
            rows={2}
            style={{ width: "100%", padding: "0.5rem 0.75rem", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.8125rem", resize: "vertical", marginBottom: "0.5rem" }}
          />
          <button
            onClick={handleRecord}
            disabled={saving}
            style={{ padding: "0.5rem 1rem", background: saving ? "#9CA3AF" : "#0B1B3D", color: "white", border: "none", borderRadius: "0.375rem", fontSize: "0.8125rem", fontWeight: 600, cursor: saving ? "not-allowed" : "pointer" }}
          >
            {saving ? "Recording..." : "Record Outcome"}
          </button>
        </div>
      )}
    </div>
  );
}
