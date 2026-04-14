"use client";

import { removeBlockedDate } from "./actions";
import { X } from "lucide-react";

interface Props {
  dates: { id: string; date: string; reason: string | null }[];
}

export default function BlockedDateManager({ dates }: Props) {
  if (dates.length === 0) {
    return <p style={{ color: "#9CA3AF", fontSize: "0.8125rem" }}>No blocked dates.</p>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
      {dates.map((d) => (
        <div key={d.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.375rem 0.5rem", background: "#FEF2F2", borderRadius: "0.25rem" }}>
          <div>
            <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#991B1B" }}>
              {new Date(d.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
            </span>
            {d.reason && <span style={{ fontSize: "0.75rem", color: "#6B7280", marginLeft: "0.5rem" }}>({d.reason})</span>}
          </div>
          <button
            onClick={async () => { await removeBlockedDate(d.id); }}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#991B1B", padding: "0.25rem" }}
          >
            <X style={{ width: "0.875rem", height: "0.875rem" }} />
          </button>
        </div>
      ))}
    </div>
  );
}
