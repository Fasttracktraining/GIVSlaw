/**
 * Next Action Engine — computes the most urgent action needed on a case.
 * Priority: compliance → rejected docs → missing docs → incomplete checklists → ready to advance → awaiting decision
 */

import type { CaseWorkflowStage } from "./stage-gating";
import { STAGE_ORDER, getNextStage, getStageLabel } from "./stage-gating";

export type NextActionPriority = "urgent" | "warning" | "info" | "success";

export interface NextAction {
  label: string;
  priority: NextActionPriority;
  section?: "compliance" | "documents" | "checklist" | "stage" | "payment" | "deadline";
}

interface CaseForNextAction {
  workflowStage: CaseWorkflowStage;
  complianceAmlDone: boolean;
  complianceConfidentialitySigned: boolean;
  complianceConflictCheckDone: boolean;
  paymentStatus: string;
  deadline: Date | null;
  checklists: {
    label: string;
    isRequired: boolean;
    isCompleted: boolean;
    forStage: CaseWorkflowStage | null;
    category: string;
  }[];
  docRequirements: {
    label: string;
    isRequired: boolean;
    status: string;
    forStage: CaseWorkflowStage | null;
  }[];
}

function stageIndex(stage: CaseWorkflowStage): number {
  return STAGE_ORDER.indexOf(stage);
}

export function computeNextAction(c: CaseForNextAction): NextAction {
  const currentIdx = stageIndex(c.workflowStage);

  // 1. Compliance items not done (highest urgency)
  if (!c.complianceAmlDone) {
    return { label: "Complete AML / identity verification", priority: "urgent", section: "compliance" };
  }
  if (!c.complianceConfidentialitySigned) {
    return { label: "Obtain client confidentiality agreement", priority: "urgent", section: "compliance" };
  }
  if (!c.complianceConflictCheckDone) {
    return { label: "Complete conflict of interest check", priority: "urgent", section: "compliance" };
  }

  // 2. Rejected documents at current or past stages
  for (const doc of c.docRequirements) {
    if (!doc.forStage) continue;
    if (stageIndex(doc.forStage) > currentIdx) continue;
    if (doc.status === "REJECTED" && doc.isRequired) {
      return { label: `Re-upload: ${doc.label}`, priority: "urgent", section: "documents" };
    }
  }

  // 3. Missing documents at current or past stages
  for (const doc of c.docRequirements) {
    if (!doc.forStage) continue;
    if (stageIndex(doc.forStage) > currentIdx) continue;
    if (doc.isRequired && doc.status === "PENDING") {
      return { label: `Collect: ${doc.label}`, priority: "warning", section: "documents" };
    }
  }

  // 4. Documents uploaded but not verified
  for (const doc of c.docRequirements) {
    if (!doc.forStage) continue;
    if (stageIndex(doc.forStage) > currentIdx) continue;
    if (doc.isRequired && doc.status === "UPLOADED") {
      return { label: `Verify: ${doc.label}`, priority: "warning", section: "documents" };
    }
  }

  // 5. Incomplete required checklists at current or past stages
  for (const item of c.checklists) {
    if (!item.forStage) continue;
    if (stageIndex(item.forStage) > currentIdx) continue;
    if (item.isRequired && !item.isCompleted) {
      return { label: `Complete: ${item.label}`, priority: "warning", section: "checklist" };
    }
  }

  // 6. Payment outstanding
  if (c.paymentStatus === "UNPAID") {
    return { label: "Chase payment — fees unpaid", priority: "info", section: "payment" };
  }

  // 7. Deadline approaching within 14 days
  if (c.deadline) {
    const daysUntil = Math.ceil((c.deadline.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    if (daysUntil <= 14 && daysUntil > 0) {
      return { label: `Deadline in ${daysUntil} day${daysUntil === 1 ? "" : "s"}`, priority: "warning", section: "deadline" };
    }
    if (daysUntil <= 0) {
      return { label: "Deadline has passed", priority: "urgent", section: "deadline" };
    }
  }

  // 8. All items complete for current stage → ready to advance
  const nextStage = getNextStage(c.workflowStage);
  if (nextStage) {
    return {
      label: `Ready to advance to ${getStageLabel(nextStage)}`,
      priority: "success",
      section: "stage",
    };
  }

  // 9. Final stage — awaiting decision
  return { label: "Awaiting Home Office decision", priority: "info", section: "stage" };
}
