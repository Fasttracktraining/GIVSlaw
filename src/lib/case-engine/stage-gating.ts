/**
 * Stage Gating — determines whether a case can advance to the next workflow stage.
 * Checks required checklist items and document requirements for the current stage.
 */

const STAGE_ORDER = [
  "ENQUIRY",
  "DOCUMENT_COLLECTION",
  "CASE_REVIEW",
  "SUBMISSION",
  "DECISION_TRACKING",
] as const;

export type CaseWorkflowStage = (typeof STAGE_ORDER)[number];

export interface GatingChecklistItem {
  label: string;
  isRequired: boolean;
  isCompleted: boolean;
  forStage: CaseWorkflowStage | null;
}

export interface GatingDocRequirement {
  label: string;
  isRequired: boolean;
  status: "PENDING" | "UPLOADED" | "VERIFIED" | "REJECTED";
  forStage: CaseWorkflowStage | null;
}

export interface GatingResult {
  canAdvance: boolean;
  blockers: string[];
  warnings: string[];
}

function stageIndex(stage: CaseWorkflowStage): number {
  return STAGE_ORDER.indexOf(stage);
}

export function getNextStage(current: CaseWorkflowStage): CaseWorkflowStage | null {
  const idx = stageIndex(current);
  return idx < STAGE_ORDER.length - 1 ? STAGE_ORDER[idx + 1] : null;
}

export function getPreviousStage(current: CaseWorkflowStage): CaseWorkflowStage | null {
  const idx = stageIndex(current);
  return idx > 0 ? STAGE_ORDER[idx - 1] : null;
}

export function getStageLabel(stage: CaseWorkflowStage): string {
  const labels: Record<CaseWorkflowStage, string> = {
    ENQUIRY: "Enquiry",
    DOCUMENT_COLLECTION: "Document Collection",
    CASE_REVIEW: "Case Review",
    SUBMISSION: "Submission",
    DECISION_TRACKING: "Decision Tracking",
  };
  return labels[stage];
}

/**
 * Check whether a case can advance from `currentStage` to the next stage.
 * Items whose `forStage` is at or before the current stage are checked.
 */
export function checkStageGating(
  currentStage: CaseWorkflowStage,
  checklists: GatingChecklistItem[],
  docRequirements: GatingDocRequirement[]
): GatingResult {
  const blockers: string[] = [];
  const warnings: string[] = [];
  const currentIdx = stageIndex(currentStage);

  // Check required checklist items for current and previous stages
  for (const item of checklists) {
    if (!item.forStage) continue;
    const itemIdx = stageIndex(item.forStage);
    if (itemIdx > currentIdx) continue; // future stage — skip

    if (item.isRequired && !item.isCompleted) {
      blockers.push(`Checklist incomplete: ${item.label}`);
    } else if (!item.isRequired && !item.isCompleted) {
      warnings.push(`Optional checklist not done: ${item.label}`);
    }
  }

  // Check required document requirements for current and previous stages
  for (const doc of docRequirements) {
    if (!doc.forStage) continue;
    const docIdx = stageIndex(doc.forStage);
    if (docIdx > currentIdx) continue; // future stage — skip

    if (doc.isRequired) {
      if (doc.status === "PENDING") {
        blockers.push(`Document missing: ${doc.label}`);
      } else if (doc.status === "UPLOADED") {
        blockers.push(`Document not verified: ${doc.label}`);
      } else if (doc.status === "REJECTED") {
        blockers.push(`Document rejected: ${doc.label}`);
      }
    } else if (doc.status === "REJECTED") {
      warnings.push(`Optional document rejected: ${doc.label}`);
    }
  }

  return {
    canAdvance: blockers.length === 0,
    blockers,
    warnings,
  };
}

export { STAGE_ORDER };
