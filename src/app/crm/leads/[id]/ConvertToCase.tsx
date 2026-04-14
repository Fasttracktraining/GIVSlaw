"use client";

import { useState } from "react";
import { convertLeadToCase } from "../actions";

interface Props {
  leadId: string;
}

export default function ConvertToCase({ leadId }: Props) {
  const [confirming, setConfirming] = useState(false);
  const [converting, setConverting] = useState(false);

  const handleConvert = async () => {
    setConverting(true);
    await convertLeadToCase(leadId);
  };

  if (!confirming) {
    return (
      <div>
        <p style={{ fontSize: "0.875rem", color: "#6B7280", marginBottom: "1rem" }}>
          Convert this lead into a case. This will create a client account and a new case record.
        </p>
        <button
          onClick={() => setConfirming(true)}
          style={{ width: "100%", padding: "0.75rem", background: "#5B21B6", color: "white", border: "none", borderRadius: "0.375rem", fontWeight: 600, fontSize: "0.875rem", cursor: "pointer" }}
        >
          Convert to Case
        </button>
      </div>
    );
  }

  return (
    <div>
      <p style={{ fontSize: "0.875rem", color: "#991B1B", fontWeight: 600, marginBottom: "0.75rem" }}>
        Are you sure? This will:
      </p>
      <ul style={{ fontSize: "0.8125rem", color: "#374151", marginBottom: "1rem", paddingLeft: "1.25rem" }}>
        <li style={{ marginBottom: "0.25rem" }}>Create a client account (if none exists)</li>
        <li style={{ marginBottom: "0.25rem" }}>Create a new case record</li>
        <li>Mark this lead as CONVERTED</li>
      </ul>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button
          onClick={handleConvert}
          disabled={converting}
          style={{ flex: 1, padding: "0.625rem", background: converting ? "#9CA3AF" : "#5B21B6", color: "white", border: "none", borderRadius: "0.375rem", fontWeight: 600, fontSize: "0.8125rem", cursor: converting ? "not-allowed" : "pointer" }}
        >
          {converting ? "Converting..." : "Yes, Convert"}
        </button>
        <button
          onClick={() => setConfirming(false)}
          disabled={converting}
          style={{ flex: 1, padding: "0.625rem", background: "white", border: "1px solid #D1D5DB", borderRadius: "0.375rem", color: "#374151", fontSize: "0.8125rem", cursor: "pointer" }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
