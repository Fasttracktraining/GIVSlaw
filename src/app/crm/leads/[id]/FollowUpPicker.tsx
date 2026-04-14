"use client";

import { useState } from "react";
import { setFollowUp } from "../actions";
import { useToast } from "@/components/shared/Toast";

interface Props {
  leadId: string;
  currentDate: string;
  isOverdue: boolean;
}

export default function FollowUpPicker({ leadId, currentDate, isOverdue }: Props) {
  const [date, setDate] = useState(currentDate);
  const [saving, setSaving] = useState(false);
  const toast = useToast();

  const handleSave = async (value: string) => {
    setSaving(true);
    setDate(value);
    await setFollowUp(leadId, value);
    toast(value ? "Follow-up scheduled" : "Follow-up cleared");
    setSaving(false);
  };

  const setQuickDate = (daysFromNow: number) => {
    const d = new Date();
    d.setDate(d.getDate() + daysFromNow);
    const iso = d.toISOString().split("T")[0];
    handleSave(iso);
  };

  return (
    <div>
      {isOverdue && (
        <div style={{ padding: "0.5rem 0.75rem", background: "#FEF2F2", borderRadius: "0.375rem", marginBottom: "0.75rem", fontSize: "0.8125rem", color: "#991B1B", fontWeight: 600 }}>
          Follow-up is overdue!
        </div>
      )}

      <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase", marginBottom: "0.375rem" }}>
        Next Follow-Up Date
      </label>
      <input
        type="date"
        value={date}
        onChange={(e) => handleSave(e.target.value)}
        disabled={saving}
        style={{ width: "100%", padding: "0.5rem 0.75rem", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.875rem", marginBottom: "0.75rem" }}
      />

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {[
          { label: "Tomorrow", days: 1 },
          { label: "In 3 days", days: 3 },
          { label: "In 1 week", days: 7 },
          { label: "Clear", days: 0 },
        ].map((q) => (
          <button
            key={q.label}
            onClick={() => q.days === 0 ? handleSave("") : setQuickDate(q.days)}
            disabled={saving}
            style={{ padding: "0.375rem 0.625rem", background: "#F3F4F6", border: "none", borderRadius: "0.375rem", fontSize: "0.75rem", color: "#374151", cursor: "pointer", fontWeight: 500 }}
          >
            {q.label}
          </button>
        ))}
      </div>

      {saving && <p style={{ fontSize: "0.75rem", color: "#6B7280", marginTop: "0.5rem" }}>Saving...</p>}
    </div>
  );
}
