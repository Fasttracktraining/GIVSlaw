"use client";

import { useState } from "react";
import Link from "next/link";
import { useToast } from "@/components/shared/Toast";
import { updateLeadStatus } from "../actions";

interface LeadCard {
  id: string;
  firstName: string;
  lastName: string;
  phone: string | null;
  temperature: string;
  nextAction: { label: string; color: string; bg: string };
  nextFollowUpAt: string | null;
  advisorName: string | null;
}

interface Column {
  status: string;
  leads: LeadCard[];
}

interface Props {
  columns: Column[];
}

const columnColors: Record<string, { border: string; bg: string; text: string }> = {
  NEW: { border: "#3B82F6", bg: "#EFF6FF", text: "#1D4ED8" },
  CONTACTED: { border: "#F59E0B", bg: "#FFFBEB", text: "#B45309" },
  QUALIFIED: { border: "#10B981", bg: "#F0FDF4", text: "#065F46" },
  CONVERTED: { border: "#8B5CF6", bg: "#F5F3FF", text: "#5B21B6" },
  LOST: { border: "#6B7280", bg: "#F9FAFB", text: "#374151" },
};

const tempColors: Record<string, string> = { HOT: "#EF4444", WARM: "#F59E0B", COLD: "#3B82F6" };

export default function PipelineBoard({ columns: initialColumns }: Props) {
  const [columns, setColumns] = useState(initialColumns);
  const [draggedLead, setDraggedLead] = useState<{ lead: LeadCard; fromStatus: string } | null>(null);
  const toast = useToast();

  const handleDragStart = (lead: LeadCard, fromStatus: string) => {
    setDraggedLead({ lead, fromStatus });
  };

  const handleDrop = async (toStatus: string) => {
    if (!draggedLead || draggedLead.fromStatus === toStatus) {
      setDraggedLead(null);
      return;
    }

    // Optimistic update
    setColumns((prev) =>
      prev.map((col) => {
        if (col.status === draggedLead.fromStatus) {
          return { ...col, leads: col.leads.filter((l) => l.id !== draggedLead.lead.id) };
        }
        if (col.status === toStatus) {
          return { ...col, leads: [draggedLead.lead, ...col.leads] };
        }
        return col;
      })
    );

    setDraggedLead(null);
    await updateLeadStatus(draggedLead.lead.id, toStatus);
    toast(`${draggedLead.lead.firstName} moved to ${toStatus}`);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.75rem", minHeight: "calc(100vh - 14rem)" }}>
      {columns.map((col) => {
        const c = columnColors[col.status] || columnColors.NEW;
        return (
          <div
            key={col.status}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(col.status)}
            style={{ background: c.bg, borderRadius: "0.75rem", padding: "0.75rem", borderTop: `3px solid ${c.border}` }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem", padding: "0 0.25rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: c.text, textTransform: "uppercase", letterSpacing: "0.05em" }}>{col.status}</span>
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: c.text, background: "white", borderRadius: "9999px", padding: "0.125rem 0.5rem" }}>{col.leads.length}</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {col.leads.map((lead) => (
                <div
                  key={lead.id}
                  draggable
                  onDragStart={() => handleDragStart(lead, col.status)}
                  style={{ background: "white", borderRadius: "0.5rem", padding: "0.75rem", boxShadow: "0 1px 2px rgba(0,0,0,0.08)", cursor: "grab" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.375rem" }}>
                    <Link href={`/crm/leads/${lead.id}`} style={{ fontWeight: 600, fontSize: "0.8125rem", color: "#0B1B3D", textDecoration: "none" }}>
                      {lead.firstName} {lead.lastName}
                    </Link>
                    <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: tempColors[lead.temperature] || "#9CA3AF" }} title={lead.temperature} />
                  </div>
                  <span style={{ display: "inline-block", padding: "0.125rem 0.5rem", borderRadius: "9999px", fontSize: "0.625rem", fontWeight: 600, background: lead.nextAction.bg, color: lead.nextAction.color, marginBottom: "0.25rem" }}>
                    {lead.nextAction.label}
                  </span>
                  {lead.advisorName && (
                    <p style={{ fontSize: "0.6875rem", color: "#9CA3AF", marginTop: "0.25rem" }}>{lead.advisorName}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
