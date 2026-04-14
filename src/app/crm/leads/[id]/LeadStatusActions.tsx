"use client";

import { useState } from "react";
import { updateLeadStatus, assignLead } from "../actions";
import { useToast } from "@/components/shared/Toast";

interface Props {
  leadId: string;
  currentStatus: string;
  currentAdvisorId: string | null;
  staffUsers: { id: string; name: string; role: string }[];
}

const statuses = ["NEW", "CONTACTED", "QUALIFIED", "CONVERTED", "LOST"];

export default function LeadStatusActions({ leadId, currentStatus, currentAdvisorId, staffUsers }: Props) {
  const [status, setStatus] = useState(currentStatus);
  const [advisorId, setAdvisorId] = useState(currentAdvisorId || "");
  const [saving, setSaving] = useState(false);
  const toast = useToast();

  const handleStatusChange = async (newStatus: string) => {
    setSaving(true);
    setStatus(newStatus);
    await updateLeadStatus(leadId, newStatus);
    toast(`Status updated to ${newStatus}`);
    setSaving(false);
  };

  const handleAssign = async (newAdvisorId: string) => {
    setSaving(true);
    setAdvisorId(newAdvisorId);
    await assignLead(leadId, newAdvisorId);
    toast("Lead reassigned");
    setSaving(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {/* Status */}
      <div>
        <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase", marginBottom: "0.375rem" }}>Status</label>
        <select
          value={status}
          onChange={(e) => handleStatusChange(e.target.value)}
          disabled={saving}
          style={{ width: "100%", padding: "0.5rem 0.75rem", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.875rem", background: "white" }}
        >
          {statuses.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Assign */}
      <div>
        <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase", marginBottom: "0.375rem" }}>Assigned To</label>
        <select
          value={advisorId}
          onChange={(e) => handleAssign(e.target.value)}
          disabled={saving}
          style={{ width: "100%", padding: "0.5rem 0.75rem", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.875rem", background: "white" }}
        >
          <option value="">Unassigned</option>
          {staffUsers.map((u) => (
            <option key={u.id} value={u.id}>{u.name} ({u.role})</option>
          ))}
        </select>
      </div>

      {/* Quick Actions */}
      <div>
        <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase", marginBottom: "0.5rem" }}>Quick Actions</label>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {status !== "CONTACTED" && status !== "CONVERTED" && status !== "LOST" && (
            <button onClick={() => handleStatusChange("CONTACTED")} disabled={saving} style={actionBtnStyle("#F59E0B")}>
              Mark as Contacted
            </button>
          )}
          {status !== "QUALIFIED" && status !== "CONVERTED" && status !== "LOST" && (
            <button onClick={() => handleStatusChange("QUALIFIED")} disabled={saving} style={actionBtnStyle("#10B981")}>
              Mark as Qualified
            </button>
          )}
          {status !== "LOST" && status !== "CONVERTED" && (
            <button onClick={() => handleStatusChange("LOST")} disabled={saving} style={actionBtnStyle("#EF4444")}>
              Mark as Lost
            </button>
          )}
        </div>
      </div>

      {saving && <p style={{ fontSize: "0.8125rem", color: "#6B7280" }}>Saving...</p>}
    </div>
  );
}

function actionBtnStyle(color: string): React.CSSProperties {
  return {
    padding: "0.5rem 0.75rem",
    background: "white",
    border: `1px solid ${color}`,
    color,
    borderRadius: "0.375rem",
    fontSize: "0.8125rem",
    fontWeight: 600,
    cursor: "pointer",
    textAlign: "left",
  };
}
