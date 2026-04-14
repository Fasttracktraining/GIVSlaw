"use client";

import { useState } from "react";

async function updateConsultation(id: string, status: string) {
  await fetch("/api/booking/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, status }),
  });
  window.location.reload();
}

export default function ConsultationActions({ id, status }: { id: string; status: string }) {
  const [open, setOpen] = useState(false);

  if (status === "COMPLETED" || status === "CANCELLED" || status === "NO_SHOW") return null;

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setOpen(!open)} style={{ padding: "0.25rem 0.5rem", background: "none", border: "1px solid #D1D5DB", borderRadius: "0.25rem", cursor: "pointer", fontSize: "0.75rem", color: "#6B7280" }}>
        ⋮
      </button>
      {open && (
        <div style={{ position: "absolute", right: 0, top: "100%", background: "white", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", borderRadius: "0.375rem", zIndex: 50, minWidth: "140px", overflow: "hidden" }}>
          <button onClick={() => updateConsultation(id, "COMPLETED")} style={{ display: "block", width: "100%", textAlign: "left", padding: "0.5rem 0.75rem", border: "none", background: "none", cursor: "pointer", fontSize: "0.8125rem", color: "#10B981" }}>Mark Completed</button>
          <button onClick={() => updateConsultation(id, "NO_SHOW")} style={{ display: "block", width: "100%", textAlign: "left", padding: "0.5rem 0.75rem", border: "none", background: "none", cursor: "pointer", fontSize: "0.8125rem", color: "#F59E0B" }}>No Show</button>
          <button onClick={() => updateConsultation(id, "CANCELLED")} style={{ display: "block", width: "100%", textAlign: "left", padding: "0.5rem 0.75rem", border: "none", background: "none", cursor: "pointer", fontSize: "0.8125rem", color: "#EF4444" }}>Cancel</button>
        </div>
      )}
    </div>
  );
}
