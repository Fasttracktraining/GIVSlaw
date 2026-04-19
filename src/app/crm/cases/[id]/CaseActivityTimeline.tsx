"use client";

import {
  FileText,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Upload,
  XCircle,
  Settings,
} from "lucide-react";

interface ActivityData {
  id: string;
  action: string;
  description: string;
  userName: string | null;
  createdAt: string;
}

interface Props {
  activities: ActivityData[];
}

const ACTION_ICONS: Record<string, typeof FileText> = {
  template_applied: Settings,
  stage_changed: ArrowRight,
  stage_advanced: ArrowRight,
  document_reviewed: FileText,
  doc_requirement_verified: CheckCircle2,
  doc_requirement_rejected: XCircle,
  doc_linked_to_requirement: Upload,
  checklist_completed: CheckCircle2,
  checklist_unchecked: XCircle,
  compliance_completed: ShieldCheck,
  compliance_unchecked: ShieldCheck,
  note_added: MessageSquare,
  message_sent: MessageSquare,
};

const ACTION_COLOURS: Record<string, string> = {
  template_applied: "#7C3AED",
  stage_advanced: "#0B1B3D",
  doc_requirement_verified: "#10B981",
  doc_requirement_rejected: "#DC2626",
  checklist_completed: "#10B981",
  compliance_completed: "#10B981",
  note_added: "#2563EB",
  message_sent: "#2563EB",
};

export default function CaseActivityTimeline({ activities }: Props) {
  return (
    <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.25rem 1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
      <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid #E5E7EB" }}>
        Activity Timeline
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {activities.map((a, idx) => {
          const Icon = ACTION_ICONS[a.action] || FileText;
          const colour = ACTION_COLOURS[a.action] || "#6B7280";
          const isLast = idx === activities.length - 1;

          return (
            <div key={a.id} style={{ display: "flex", gap: "0.75rem" }}>
              {/* Timeline line + dot */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "1.5rem", flexShrink: 0 }}>
                <div style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  borderRadius: "50%",
                  background: `${colour}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon style={{ width: "0.75rem", height: "0.75rem", color: colour }} />
                </div>
                {!isLast && (
                  <div style={{ width: "1px", flex: 1, background: "#E5E7EB", minHeight: "1rem" }} />
                )}
              </div>

              {/* Content */}
              <div style={{ paddingBottom: isLast ? 0 : "0.75rem", flex: 1 }}>
                <p style={{ fontSize: "0.8125rem", color: "#374151", lineHeight: 1.4 }}>
                  {a.description}
                </p>
                <p style={{ fontSize: "0.6875rem", color: "#9CA3AF", marginTop: "0.125rem" }}>
                  {a.userName && `${a.userName} · `}
                  {new Date(a.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>
          );
        })}

        {activities.length === 0 && (
          <p style={{ color: "#9CA3AF", fontSize: "0.8125rem", textAlign: "center", padding: "1rem 0" }}>
            No activity yet.
          </p>
        )}
      </div>
    </div>
  );
}
