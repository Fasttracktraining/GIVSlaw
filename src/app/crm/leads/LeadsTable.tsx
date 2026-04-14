"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { useToast } from "@/components/shared/Toast";
import { quickCallOutcome, bulkUpdateStatus, bulkAssign, bulkSetFollowUp } from "./actions";

interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  primaryService: string | null;
  source: string;
  status: string;
  createdAt: string;
  nextAction: { label: string; color: string; bg: string };
  advisorName: string | null;
}

interface StaffUser {
  id: string;
  firstName: string;
  lastName: string;
}

interface Props {
  leads: Lead[];
  staffUsers: StaffUser[];
}

const outcomeOptions = [
  { value: "NO_ANSWER", label: "No Answer" },
  { value: "INTERESTED", label: "Interested" },
  { value: "NOT_INTERESTED", label: "Not Interested" },
  { value: "CALLBACK_LATER", label: "Callback" },
  { value: "WRONG_NUMBER", label: "Wrong #" },
];

export default function LeadsTable({ leads, staffUsers }: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [bulkAction, setBulkAction] = useState("");
  const [bulkValue, setBulkValue] = useState("");
  const [processing, setProcessing] = useState(false);
  const toast = useToast();

  const toggleAll = () => {
    if (selected.size === leads.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(leads.map((l) => l.id)));
    }
  };

  const toggleOne = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
  };

  const handleQuickOutcome = async (leadId: string, outcome: string) => {
    await quickCallOutcome(leadId, outcome);
    toast(`Call logged: ${outcome.replace(/_/g, " ").toLowerCase()}`);
  };

  const handleBulkApply = async () => {
    if (selected.size === 0 || !bulkAction) return;
    setProcessing(true);
    const ids = Array.from(selected);

    if (bulkAction === "status" && bulkValue) {
      await bulkUpdateStatus(ids, bulkValue);
      toast(`${ids.length} leads updated to ${bulkValue}`);
    } else if (bulkAction === "assign" && bulkValue) {
      await bulkAssign(ids, bulkValue);
      toast(`${ids.length} leads reassigned`);
    } else if (bulkAction === "followup" && bulkValue) {
      await bulkSetFollowUp(ids, bulkValue);
      toast(`Follow-up set for ${ids.length} leads`);
    }

    setSelected(new Set());
    setBulkAction("");
    setBulkValue("");
    setProcessing(false);
  };

  return (
    <>
      {/* Bulk Actions Bar */}
      {selected.size > 0 && (
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", background: "#EFF6FF", borderRadius: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1D4ED8" }}>
            {selected.size} selected
          </span>
          <select
            value={bulkAction}
            onChange={(e) => { setBulkAction(e.target.value); setBulkValue(""); }}
            style={selectStyle}
          >
            <option value="">Choose action...</option>
            <option value="status">Update Status</option>
            <option value="assign">Assign Advisor</option>
            <option value="followup">Set Follow-Up</option>
          </select>

          {bulkAction === "status" && (
            <select value={bulkValue} onChange={(e) => setBulkValue(e.target.value)} style={selectStyle}>
              <option value="">Select status...</option>
              {["NEW", "CONTACTED", "QUALIFIED", "LOST"].map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          )}
          {bulkAction === "assign" && (
            <select value={bulkValue} onChange={(e) => setBulkValue(e.target.value)} style={selectStyle}>
              <option value="">Select advisor...</option>
              {staffUsers.map((u) => <option key={u.id} value={u.id}>{u.firstName} {u.lastName}</option>)}
            </select>
          )}
          {bulkAction === "followup" && (
            <input type="date" value={bulkValue} onChange={(e) => setBulkValue(e.target.value)} style={selectStyle} />
          )}

          {bulkAction && bulkValue && (
            <button onClick={handleBulkApply} disabled={processing} style={{ padding: "0.375rem 0.875rem", background: "#1D4ED8", color: "white", border: "none", borderRadius: "0.375rem", fontSize: "0.8125rem", fontWeight: 600, cursor: "pointer" }}>
              {processing ? "Applying..." : "Apply"}
            </button>
          )}
          <button onClick={() => setSelected(new Set())} style={{ padding: "0.375rem 0.625rem", background: "none", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.8125rem", color: "#6B7280", cursor: "pointer" }}>
            Clear
          </button>
        </div>
      )}

      {/* Table */}
      <div style={{ background: "white", borderRadius: "0.75rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", overflow: "hidden" }}>
        {leads.length === 0 ? (
          <div style={{ padding: "3rem", textAlign: "center", color: "#9CA3AF" }}>
            No leads found.
          </div>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #E5E7EB", background: "#F9FAFB" }}>
                <th style={{ ...thStyle, width: "2.5rem" }}>
                  <input type="checkbox" checked={selected.size === leads.length && leads.length > 0} onChange={toggleAll} />
                </th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Contact</th>
                <th style={thStyle}>Service</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Next Action</th>
                <th style={thStyle}>Assigned</th>
                <th style={{ ...thStyle, width: "10rem" }}>Quick Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} style={{ borderBottom: "1px solid #F3F4F6", background: selected.has(lead.id) ? "#EFF6FF" : undefined }}>
                  <td style={tdStyle}>
                    <input type="checkbox" checked={selected.has(lead.id)} onChange={() => toggleOne(lead.id)} />
                  </td>
                  <td style={tdStyle}>
                    <Link href={`/crm/leads/${lead.id}`} style={{ color: "#0B1B3D", fontWeight: 500, textDecoration: "none" }}>
                      {lead.firstName} {lead.lastName}
                    </Link>
                    <p style={{ fontSize: "0.75rem", color: "#9CA3AF", marginTop: "0.125rem" }}>{lead.email}</p>
                  </td>
                  <td style={tdStyle}>
                    <div style={{ display: "flex", gap: "0.375rem" }}>
                      {lead.phone && (
                        <>
                          <a href={`tel:${lead.phone}`} title="Call" style={iconBtnStyle}>
                            <Phone style={{ width: "0.875rem", height: "0.875rem" }} />
                          </a>
                          <a href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" title="WhatsApp" style={{ ...iconBtnStyle, color: "#25D366" }}>
                            <MessageCircle style={{ width: "0.875rem", height: "0.875rem" }} />
                          </a>
                        </>
                      )}
                    </div>
                  </td>
                  <td style={{ ...tdStyle, fontSize: "0.8125rem", color: "#6B7280" }}>{lead.primaryService || "—"}</td>
                  <td style={tdStyle}>
                    <StatusBadge status={lead.status} />
                  </td>
                  <td style={tdStyle}>
                    <span style={{ display: "inline-block", padding: "0.1875rem 0.625rem", borderRadius: "9999px", fontSize: "0.6875rem", fontWeight: 600, background: lead.nextAction.bg, color: lead.nextAction.color }}>
                      {lead.nextAction.label}
                    </span>
                  </td>
                  <td style={{ ...tdStyle, fontSize: "0.8125rem", color: "#6B7280" }}>
                    {lead.advisorName || "—"}
                  </td>
                  <td style={tdStyle}>
                    <QuickOutcome leadId={lead.id} onRecord={handleQuickOutcome} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

function QuickOutcome({ leadId, onRecord }: { leadId: string; onRecord: (id: string, outcome: string) => Promise<void> }) {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} style={{ padding: "0.25rem 0.5rem", background: "#F3F4F6", border: "none", borderRadius: "0.25rem", fontSize: "0.6875rem", color: "#374151", cursor: "pointer", fontWeight: 500 }}>
        Log call
      </button>
    );
  }

  return (
    <div style={{ display: "flex", gap: "0.25rem", flexWrap: "wrap" }}>
      {outcomeOptions.map((o) => (
        <button
          key={o.value}
          onClick={async () => { await onRecord(leadId, o.value); setOpen(false); }}
          style={{ padding: "0.1875rem 0.375rem", background: "white", border: "1px solid #D1D5DB", borderRadius: "0.25rem", fontSize: "0.625rem", color: "#374151", cursor: "pointer" }}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, { bg: string; text: string }> = {
    NEW: { bg: "#DBEAFE", text: "#1D4ED8" },
    CONTACTED: { bg: "#FEF3C7", text: "#B45309" },
    QUALIFIED: { bg: "#D1FAE5", text: "#065F46" },
    CONVERTED: { bg: "#EDE9FE", text: "#5B21B6" },
    LOST: { bg: "#FEE2E2", text: "#991B1B" },
  };
  const c = colors[status] || { bg: "#F3F4F6", text: "#374151" };
  return (
    <span style={{ display: "inline-block", padding: "0.1875rem 0.625rem", borderRadius: "9999px", fontSize: "0.6875rem", fontWeight: 600, background: c.bg, color: c.text }}>
      {status}
    </span>
  );
}

const thStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "0.625rem 0.75rem",
  fontSize: "0.6875rem",
  fontWeight: 600,
  color: "#6B7280",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

const tdStyle: React.CSSProperties = {
  padding: "0.625rem 0.75rem",
  fontSize: "0.875rem",
};

const selectStyle: React.CSSProperties = {
  padding: "0.375rem 0.5rem",
  border: "1px solid #D1D5DB",
  borderRadius: "0.375rem",
  fontSize: "0.8125rem",
  background: "white",
};

const iconBtnStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1.75rem",
  height: "1.75rem",
  borderRadius: "0.25rem",
  background: "#F3F4F6",
  color: "#374151",
  textDecoration: "none",
};
