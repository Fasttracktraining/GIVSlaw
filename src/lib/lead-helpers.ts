import { prisma } from "@/lib/db";
import type { LeadTemperature } from "@prisma/client";

export async function logLeadActivity(
  leadId: string,
  userId: string,
  action: string,
  description: string
) {
  await prisma.leadActivity.create({
    data: { leadId, userId, action, description },
  });
}

export function calculateTemperature(lead: {
  urgency: string;
  lastContactedAt: Date | null;
  createdAt: Date;
  status: string;
  callOutcomes?: { outcome: string; createdAt: Date }[];
}): LeadTemperature {
  if (lead.status === "LOST" || lead.status === "CONVERTED") return "COLD";

  let score = 0;
  const now = new Date();

  // Urgency
  if (lead.urgency === "URGENT") score += 3;
  else if (lead.urgency === "HIGH") score += 2;
  else if (lead.urgency === "MEDIUM") score += 1;

  // Recency of contact
  if (lead.lastContactedAt) {
    const daysSinceContact = (now.getTime() - lead.lastContactedAt.getTime()) / (1000 * 60 * 60 * 24);
    if (daysSinceContact < 3) score += 3;
    else if (daysSinceContact < 7) score += 2;
    else if (daysSinceContact < 14) score += 1;
  }

  // Lead age (newer = hotter)
  const daysSinceCreated = (now.getTime() - lead.createdAt.getTime()) / (1000 * 60 * 60 * 24);
  if (daysSinceCreated < 3) score += 2;
  else if (daysSinceCreated < 7) score += 1;

  // Interest from call outcomes
  if (lead.callOutcomes) {
    const recent = lead.callOutcomes.filter(
      (co) => (now.getTime() - co.createdAt.getTime()) / (1000 * 60 * 60 * 24) < 14
    );
    if (recent.some((co) => co.outcome === "INTERESTED")) score += 3;
    if (recent.some((co) => co.outcome === "CALLBACK_LATER")) score += 1;
    if (recent.some((co) => co.outcome === "NOT_INTERESTED")) score -= 2;
  }

  if (score >= 5) return "HOT";
  if (score >= 2) return "WARM";
  return "COLD";
}
