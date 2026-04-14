export interface NextAction {
  label: string;
  priority: "urgent" | "warning" | "info" | "success" | "muted";
  color: string;
  bg: string;
}

export function getNextAction(lead: {
  status: string;
  nextFollowUpAt: Date | null;
  lastContactedAt: Date | null;
  createdAt: Date;
}): NextAction {
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const todayEnd = new Date(todayStart.getTime() + 24 * 60 * 60 * 1000);

  if (lead.status === "CONVERTED") {
    return { label: "Converted", priority: "success", color: "#5B21B6", bg: "#EDE9FE" };
  }

  if (lead.status === "LOST") {
    return { label: "Closed", priority: "muted", color: "#6B7280", bg: "#F3F4F6" };
  }

  if (lead.status === "QUALIFIED") {
    return { label: "Ready to convert", priority: "success", color: "#065F46", bg: "#D1FAE5" };
  }

  if (lead.nextFollowUpAt) {
    if (lead.nextFollowUpAt < todayStart) {
      return { label: "Follow up immediately", priority: "urgent", color: "#991B1B", bg: "#FEE2E2" };
    }
    if (lead.nextFollowUpAt < todayEnd) {
      return { label: "Follow up today", priority: "warning", color: "#B45309", bg: "#FEF3C7" };
    }
    return { label: `Follow up ${lead.nextFollowUpAt.toLocaleDateString("en-GB", { day: "numeric", month: "short" })}`, priority: "info", color: "#1D4ED8", bg: "#DBEAFE" };
  }

  return { label: "Set follow-up", priority: "warning", color: "#B45309", bg: "#FEF3C7" };
}
