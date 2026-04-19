"use client";

import { useState } from "react";
import { CheckCircle2, Circle, ChevronDown, ChevronRight } from "lucide-react";
import { toggleChecklistItem, updateChecklistNotes } from "./actions";

interface ChecklistItemData {
  id: string;
  label: string;
  description: string | null;
  category: string;
  isRequired: boolean;
  isCompleted: boolean;
  completedBy: string | null;
  completedAt: string | null;
  forStage: string | null;
  notes: string | null;
}

interface Props {
  items: ChecklistItemData[];
  canModify: boolean;
}

const STAGE_LABELS: Record<string, string> = {
  ENQUIRY: "Enquiry",
  DOCUMENT_COLLECTION: "Document Collection",
  CASE_REVIEW: "Case Review",
  SUBMISSION: "Submission",
  DECISION_TRACKING: "Decision Tracking",
};

const TABS = [
  { key: "LEGAL", label: "Legal" },
  { key: "OPERATIONAL", label: "Operational" },
  { key: "COMPLIANCE", label: "Compliance" },
];

export default function CaseChecklistPanel({ items, canModify }: Props) {
  const [activeTab, setActiveTab] = useState("LEGAL");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [toggling, setToggling] = useState<string | null>(null);

  const filtered = items.filter((i) => i.category === activeTab);
  const completedCount = filtered.filter((i) => i.isCompleted).length;
  const requiredCount = filtered.filter((i) => i.isRequired).length;
  const requiredCompleted = filtered.filter((i) => i.isRequired && i.isCompleted).length;

  // Group by stage
  const byStage = new Map<string, ChecklistItemData[]>();
  for (const item of filtered) {
    const key = item.forStage || "GENERAL";
    if (!byStage.has(key)) byStage.set(key, []);
    byStage.get(key)!.push(item);
  }

  async function handleToggle(id: string) {
    setToggling(id);
    try { await toggleChecklistItem(id); } finally { setToggling(null); }
  }

  async function handleNoteSave(id: string, notes: string) {
    await updateChecklistNotes(id, notes);
  }

  return (
    <div style={{ background: "white", borderRadius: "0.75rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
      {/* Header */}
      <div style={{ padding: "1.25rem 1.5rem 0" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D" }}>Checklists</h2>
          <span style={{ fontSize: "0.75rem", color: "#6B7280" }}>
            {requiredCompleted}/{requiredCount} required complete
          </span>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0", borderBottom: "1px solid #E5E7EB" }}>
          {TABS.map((tab) => {
            const isActive = tab.key === activeTab;
            const tabItems = items.filter((i) => i.category === tab.key);
            const tabDone = tabItems.filter((i) => i.isCompleted).length;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  padding: "0.625rem 1rem",
                  fontSize: "0.8125rem",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "#0B1B3D" : "#6B7280",
                  background: "transparent",
                  border: "none",
                  borderBottom: isActive ? "2px solid #C5963A" : "2px solid transparent",
                  cursor: "pointer",
                }}
              >
                {tab.label} ({tabDone}/{tabItems.length})
              </button>
            );
          })}
        </div>
      </div>

      {/* Items */}
      <div style={{ padding: "0.75rem 1.5rem 1.25rem" }}>
        {Array.from(byStage.entries()).map(([stage, stageItems]) => (
          <div key={stage} style={{ marginBottom: "1rem" }}>
            <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
              {STAGE_LABELS[stage] || "General"}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              {stageItems.map((item) => {
                const isExpanded = expandedId === item.id;
                return (
                  <div key={item.id}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.625rem",
                        padding: "0.5rem 0.5rem",
                        borderRadius: "0.375rem",
                        background: isExpanded ? "#F9FAFB" : "transparent",
                        cursor: "pointer",
                      }}
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    >
                      {/* Toggle checkbox */}
                      <button
                        onClick={(e) => { e.stopPropagation(); if (canModify) handleToggle(item.id); }}
                        disabled={!canModify || toggling === item.id}
                        style={{ background: "none", border: "none", padding: 0, cursor: canModify ? "pointer" : "default", flexShrink: 0 }}
                      >
                        {item.isCompleted ? (
                          <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#10B981" }} />
                        ) : (
                          <Circle style={{ width: "1.125rem", height: "1.125rem", color: item.isRequired ? "#D1D5DB" : "#E5E7EB" }} />
                        )}
                      </button>

                      <span style={{
                        flex: 1,
                        fontSize: "0.8125rem",
                        color: item.isCompleted ? "#9CA3AF" : "#374151",
                        textDecoration: item.isCompleted ? "line-through" : "none",
                      }}>
                        {item.label}
                        {item.isRequired && !item.isCompleted && (
                          <span style={{ color: "#DC2626", marginLeft: "0.25rem", fontSize: "0.625rem" }}>●</span>
                        )}
                      </span>

                      {isExpanded ? (
                        <ChevronDown style={{ width: "0.875rem", height: "0.875rem", color: "#9CA3AF" }} />
                      ) : (
                        <ChevronRight style={{ width: "0.875rem", height: "0.875rem", color: "#9CA3AF" }} />
                      )}
                    </div>

                    {/* Expanded detail */}
                    {isExpanded && (
                      <div style={{ paddingLeft: "2.25rem", paddingBottom: "0.5rem", fontSize: "0.8125rem" }}>
                        {item.description && (
                          <p style={{ color: "#6B7280", marginBottom: "0.375rem" }}>{item.description}</p>
                        )}
                        {item.completedBy && (
                          <p style={{ color: "#9CA3AF", fontSize: "0.75rem" }}>
                            Completed by {item.completedBy} on {item.completedAt ? new Date(item.completedAt).toLocaleDateString("en-GB") : "—"}
                          </p>
                        )}
                        {canModify && (
                          <textarea
                            defaultValue={item.notes || ""}
                            placeholder="Add notes..."
                            onBlur={(e) => handleNoteSave(item.id, e.target.value)}
                            style={{
                              marginTop: "0.375rem",
                              width: "100%",
                              padding: "0.5rem",
                              border: "1px solid #E5E7EB",
                              borderRadius: "0.375rem",
                              fontSize: "0.8125rem",
                              resize: "vertical",
                              minHeight: "2.5rem",
                            }}
                          />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p style={{ color: "#9CA3AF", fontSize: "0.875rem", textAlign: "center", padding: "1rem 0" }}>
            No items in this category.
          </p>
        )}
      </div>
    </div>
  );
}
