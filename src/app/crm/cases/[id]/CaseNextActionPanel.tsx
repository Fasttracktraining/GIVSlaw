"use client";

import { AlertCircle, AlertTriangle, Info, CheckCircle2 } from "lucide-react";

interface Props {
  label: string | null;
  priority: string | null;
}

const config: Record<string, { bg: string; border: string; text: string; icon: typeof AlertCircle }> = {
  urgent:  { bg: "#FEF2F2", border: "#DC2626", text: "#991B1B", icon: AlertCircle },
  warning: { bg: "#FFFBEB", border: "#F59E0B", text: "#92400E", icon: AlertTriangle },
  info:    { bg: "#EFF6FF", border: "#3B82F6", text: "#1E40AF", icon: Info },
  success: { bg: "#F0FDF4", border: "#10B981", text: "#065F46", icon: CheckCircle2 },
};

export default function CaseNextActionPanel({ label, priority }: Props) {
  if (!label) return null;

  const c = config[priority || "info"] || config.info;
  const Icon = c.icon;

  return (
    <div style={{
      background: c.bg,
      borderLeft: `4px solid ${c.border}`,
      borderRadius: "0.5rem",
      padding: "1rem 1.25rem",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
    }}>
      <Icon style={{ width: "1.25rem", height: "1.25rem", color: c.border, flexShrink: 0 }} />
      <div>
        <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: c.text, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.125rem" }}>
          Next Action
        </p>
        <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: c.text }}>
          {label}
        </p>
      </div>
    </div>
  );
}
