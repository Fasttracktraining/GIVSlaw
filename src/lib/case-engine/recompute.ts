/**
 * Recompute — recalculates and caches the next action on a case.
 * Call this after any mutation to checklists, documents, stage, compliance, or payment.
 */

import { PrismaClient } from "@prisma/client";
import { computeNextAction } from "./next-action";
import type { CaseWorkflowStage } from "./stage-gating";

/**
 * Recompute the cached nextAction fields on a case record.
 * Fetches all checklists + doc requirements, runs the engine, writes result back.
 */
export async function recomputeNextAction(prisma: PrismaClient, caseId: string) {
  const caseRecord = await prisma.case.findUniqueOrThrow({
    where: { id: caseId },
    select: {
      workflowStage: true,
      complianceAmlDone: true,
      complianceConfidentialitySigned: true,
      complianceConflictCheckDone: true,
      paymentStatus: true,
      deadline: true,
      checklists: {
        select: {
          label: true,
          isRequired: true,
          isCompleted: true,
          forStage: true,
          category: true,
        },
      },
      docRequirements: {
        select: {
          label: true,
          isRequired: true,
          status: true,
          forStage: true,
        },
      },
    },
  });

  const nextAction = computeNextAction({
    workflowStage: caseRecord.workflowStage as CaseWorkflowStage,
    complianceAmlDone: caseRecord.complianceAmlDone,
    complianceConfidentialitySigned: caseRecord.complianceConfidentialitySigned,
    complianceConflictCheckDone: caseRecord.complianceConflictCheckDone,
    paymentStatus: caseRecord.paymentStatus,
    deadline: caseRecord.deadline,
    checklists: caseRecord.checklists.map((c) => ({
      ...c,
      forStage: c.forStage as CaseWorkflowStage | null,
    })),
    docRequirements: caseRecord.docRequirements.map((d) => ({
      ...d,
      forStage: d.forStage as CaseWorkflowStage | null,
    })),
  });

  await prisma.case.update({
    where: { id: caseId },
    data: {
      nextActionLabel: nextAction.label,
      nextActionPriority: nextAction.priority,
      nextActionUpdatedAt: new Date(),
    },
  });

  return nextAction;
}
