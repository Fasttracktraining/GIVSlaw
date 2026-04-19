// Case Engine — barrel export

export { checkStageGating, getNextStage, getPreviousStage, getStageLabel, STAGE_ORDER } from "./stage-gating";
export type { GatingResult, GatingChecklistItem, GatingDocRequirement } from "./stage-gating";

export { computeNextAction } from "./next-action";
export type { NextAction, NextActionPriority } from "./next-action";

export { getCaseWhereClause, canViewCase, canModifyCase, canOverrideGating } from "./permissions";

export { applyCaseTemplate } from "./apply-template";

export { recomputeNextAction } from "./recompute";
