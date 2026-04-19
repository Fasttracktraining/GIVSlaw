"use client";

import { useState } from "react";
import { Briefcase } from "lucide-react";
import { setCaseType } from "./actions";

const CASE_TYPES = [
  { value: "SPOUSE_VISA_ENTRY_CLEARANCE", label: "Spouse Visa — Entry Clearance (Appendix FM)" },
  { value: "SPOUSE_VISA_EXTENSION_ILR", label: "Spouse Visa — Extension / ILR (5 Year Route)" },
  { value: "SKILLED_WORKER_ENTRY", label: "Skilled Worker — Entry Clearance" },
  { value: "SKILLED_WORKER_EXTENSION", label: "Skilled Worker — Extension" },
  { value: "ILR_10YR_LONG_RESIDENCE", label: "ILR — 10 Year Long Residence" },
  { value: "BRITISH_CITIZENSHIP_NATURALISATION", label: "British Citizenship — Naturalisation" },
];

interface Props {
  caseId: string;
}

export default function CaseTypeSelector({ caseId }: Props) {
  const [selected, setSelected] = useState("");
  const [applying, setApplying] = useState(false);

  async function handleApply() {
    if (!selected) return;
    setApplying(true);
    try {
      await setCaseType(caseId, selected);
    } finally {
      setApplying(false);
    }
  }

  return (
    <div style={{
      background: "#FFFBEB",
      border: "1px solid #FDE68A",
      borderLeft: "4px solid #F59E0B",
      borderRadius: "0.5rem",
      padding: "1.25rem 1.5rem",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
        <Briefcase style={{ width: "1rem", height: "1rem", color: "#92400E" }} />
        <p style={{ fontWeight: 600, color: "#92400E", fontSize: "0.9375rem" }}>
          Set case type to generate documents and checklists
        </p>
      </div>
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", flexWrap: "wrap" }}>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          style={{
            flex: 1,
            minWidth: "16rem",
            padding: "0.625rem 0.75rem",
            border: "1px solid #D1D5DB",
            borderRadius: "0.375rem",
            fontSize: "0.875rem",
            background: "white",
          }}
        >
          <option value="" disabled>Select case type...</option>
          {CASE_TYPES.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
        <button
          onClick={handleApply}
          disabled={!selected || applying}
          style={{
            padding: "0.625rem 1.25rem",
            background: "#0B1B3D",
            color: "white",
            border: "none",
            borderRadius: "0.375rem",
            fontSize: "0.875rem",
            fontWeight: 600,
            cursor: !selected || applying ? "not-allowed" : "pointer",
            opacity: !selected || applying ? 0.5 : 1,
          }}
        >
          {applying ? "Applying..." : "Apply Template"}
        </button>
      </div>
      <p style={{ fontSize: "0.75rem", color: "#92400E", marginTop: "0.5rem" }}>
        This will generate all required documents, legal checklists, and operational checklists for the selected case type.
      </p>
    </div>
  );
}
