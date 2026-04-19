"use client";

import { useState } from "react";
import { ShieldCheck, Circle, CheckCircle2 } from "lucide-react";
import { updateCompliance } from "./actions";

interface Props {
  caseId: string;
  complianceAmlDone: boolean;
  complianceConfidentialitySigned: boolean;
  complianceConflictCheckDone: boolean;
  canModify: boolean;
}

const ITEMS: { field: "complianceAmlDone" | "complianceConfidentialitySigned" | "complianceConflictCheckDone"; label: string }[] = [
  { field: "complianceAmlDone", label: "AML / identity verification completed" },
  { field: "complianceConfidentialitySigned", label: "Client confidentiality agreement signed" },
  { field: "complianceConflictCheckDone", label: "Conflict of interest check completed" },
];

export default function CaseCompliancePanel(props: Props) {
  const [loading, setLoading] = useState<string | null>(null);

  const completedCount = ITEMS.filter((i) => props[i.field]).length;

  async function handleToggle(field: (typeof ITEMS)[number]["field"]) {
    setLoading(field);
    try {
      await updateCompliance(props.caseId, field, !props[field]);
    } finally {
      setLoading(null);
    }
  }

  return (
    <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.25rem 1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <ShieldCheck style={{ width: "1rem", height: "1rem", color: completedCount === 3 ? "#10B981" : "#C5963A" }} />
          <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D" }}>Compliance</h2>
        </div>
        <span style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          color: completedCount === 3 ? "#065F46" : "#92400E",
          padding: "0.25rem 0.625rem",
          borderRadius: "1rem",
          background: completedCount === 3 ? "#D1FAE5" : "#FEF3C7",
        }}>
          {completedCount}/3
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {ITEMS.map((item) => {
          const done = props[item.field];
          const isLoading = loading === item.field;
          return (
            <button
              key={item.field}
              onClick={() => props.canModify && handleToggle(item.field)}
              disabled={!props.canModify || isLoading}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                padding: "0.625rem 0.5rem",
                background: done ? "#F0FDF4" : "transparent",
                border: done ? "1px solid #D1FAE5" : "1px solid #E5E7EB",
                borderRadius: "0.375rem",
                cursor: props.canModify ? "pointer" : "default",
                textAlign: "left",
                width: "100%",
                opacity: isLoading ? 0.6 : 1,
              }}
            >
              {done ? (
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#10B981", flexShrink: 0 }} />
              ) : (
                <Circle style={{ width: "1.125rem", height: "1.125rem", color: "#D1D5DB", flexShrink: 0 }} />
              )}
              <span style={{
                fontSize: "0.8125rem",
                color: done ? "#065F46" : "#374151",
                fontWeight: done ? 600 : 400,
              }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
