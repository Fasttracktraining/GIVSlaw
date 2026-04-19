"use server";

import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { emailDocumentReviewed, emailNewMessage, emailCaseStageChanged } from "@/lib/email";
import { checkStageGating, getNextStage, getStageLabel } from "@/lib/case-engine/stage-gating";
import type { CaseWorkflowStage } from "@/lib/case-engine/stage-gating";
import { recomputeNextAction } from "@/lib/case-engine/recompute";
import { applyCaseTemplate } from "@/lib/case-engine/apply-template";
import { getTemplateForCaseType } from "@/lib/case-engine/templates";

export async function reviewDocument(documentId: string, status: string, feedback: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");
  const user = session.user as Record<string, unknown>;

  const doc = await prisma.document.update({
    where: { id: documentId },
    data: {
      status: status as "APPROVED" | "NEEDS_CORRECTION" | "INVALID",
      feedback: feedback || null,
      reviewedById: user.id as string,
      reviewedAt: new Date(),
    },
  });

  await prisma.caseActivity.create({
    data: {
      caseId: doc.caseId,
      userId: user.id as string,
      action: "document_reviewed",
      description: `Document "${doc.name}" marked as ${status}${feedback ? `: ${feedback}` : ""}`,
    },
  });

  // Notify client
  const caseRecord = await prisma.case.findUnique({ where: { id: doc.caseId }, include: { client: true } });
  if (caseRecord?.client) {
    emailDocumentReviewed(caseRecord.client.email, {
      clientName: caseRecord.client.firstName,
      documentName: doc.name,
      status,
      feedback: feedback || undefined,
    }).catch(() => {});
  }

  revalidatePath(`/crm/cases/${doc.caseId}`);
  revalidatePath("/portal/documents");
}

export async function sendCaseMessage(caseId: string, content: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");
  const user = session.user as Record<string, unknown>;

  await prisma.message.create({
    data: {
      caseId,
      senderId: user.id as string,
      content,
    },
  });

  await prisma.caseActivity.create({
    data: {
      caseId,
      userId: user.id as string,
      action: "message_sent",
      description: `Message sent by ${user.firstName} ${user.lastName}`,
    },
  });

  // Notify the client
  const caseRecord = await prisma.case.findUnique({ where: { id: caseId }, include: { client: true } });
  if (caseRecord?.client) {
    emailNewMessage(caseRecord.client.email, {
      recipientName: caseRecord.client.firstName,
      senderName: `${user.firstName} ${user.lastName}`,
      preview: content.length > 100 ? content.slice(0, 100) + "..." : content,
      caseRef: caseRecord.caseRef,
    }).catch(() => {});
  }

  revalidatePath(`/crm/cases/${caseId}`);
  revalidatePath("/portal/messages");
}

export async function updateCaseStage(caseId: string, stage: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");
  const user = session.user as Record<string, unknown>;

  await prisma.case.update({
    where: { id: caseId },
    data: { stage: stage as "ENQUIRY" | "CONSULTATION" | "ONBOARDING" | "IN_PROGRESS" | "SUBMITTED" | "AWAITING_DECISION" | "APPROVED" | "REFUSED" | "APPEAL" | "CLOSED" },
  });

  await prisma.caseActivity.create({
    data: {
      caseId,
      userId: user.id as string,
      action: "stage_changed",
      description: `Case stage changed to ${stage.replace(/_/g, " ")}`,
    },
  });

  // Notify client
  const caseWithClient = await prisma.case.findUnique({ where: { id: caseId }, include: { client: true } });
  if (caseWithClient?.client) {
    const explanations: Record<string, string> = {
      ENQUIRY: "We have received your enquiry and will be in touch shortly.",
      CONSULTATION: "A consultation has been scheduled to discuss your case.",
      ONBOARDING: "We are now gathering your documents and information.",
      IN_PROGRESS: "Your application is being prepared by your advisor.",
      SUBMITTED: "Your application has been submitted to the Home Office.",
      AWAITING_DECISION: "The Home Office is reviewing your application. We will notify you of any updates.",
      APPROVED: "Congratulations! Your application has been approved.",
      REFUSED: "Unfortunately your application was refused. Your advisor will discuss options with you.",
      APPEAL: "An appeal is being prepared. Your advisor will keep you updated.",
      CLOSED: "Your case has been closed. Thank you for choosing GIVS Law.",
    };
    emailCaseStageChanged(caseWithClient.client.email, {
      clientName: caseWithClient.client.firstName,
      caseRef: caseWithClient.caseRef,
      newStage: stage,
      explanation: explanations[stage] || "Your advisor will provide more details.",
    }).catch(() => {});
  }

  revalidatePath(`/crm/cases/${caseId}`);
  revalidatePath("/portal");
}

// ═══ CASE ENGINE ACTIONS ═══════════════════════════════════

function getUser(session: unknown) {
  const s = session as { user?: Record<string, unknown> | null } | null;
  if (!s?.user) throw new Error("Unauthorized");
  return s.user as { id: string; firstName: string; lastName: string; role: string };
}

/**
 * Apply a case type template to a case.
 */
export async function setCaseType(caseId: string, caseType: string) {
  const session = await auth();
  const user = getUser(session);

  const template = getTemplateForCaseType(caseType as Parameters<typeof getTemplateForCaseType>[0]);
  if (!template) throw new Error(`Unknown case type: ${caseType}`);

  await applyCaseTemplate(prisma, caseId, caseType as Parameters<typeof applyCaseTemplate>[2], template, user.id);
  await recomputeNextAction(prisma, caseId);

  revalidatePath(`/crm/cases/${caseId}`);
}

/**
 * Toggle a checklist item on/off.
 */
export async function toggleChecklistItem(checklistItemId: string) {
  const session = await auth();
  const user = getUser(session);

  const item = await prisma.checklistItem.findUniqueOrThrow({
    where: { id: checklistItemId },
  });

  const newCompleted = !item.isCompleted;

  await prisma.checklistItem.update({
    where: { id: checklistItemId },
    data: {
      isCompleted: newCompleted,
      completedById: newCompleted ? user.id : null,
      completedAt: newCompleted ? new Date() : null,
    },
  });

  await prisma.caseActivity.create({
    data: {
      caseId: item.caseId,
      userId: user.id,
      action: newCompleted ? "checklist_completed" : "checklist_unchecked",
      description: `${newCompleted ? "Completed" : "Unchecked"}: ${item.label}`,
    },
  });

  await recomputeNextAction(prisma, item.caseId);
  revalidatePath(`/crm/cases/${item.caseId}`);
}

/**
 * Add notes to a checklist item.
 */
export async function updateChecklistNotes(checklistItemId: string, notes: string) {
  const session = await auth();
  getUser(session);

  const item = await prisma.checklistItem.update({
    where: { id: checklistItemId },
    data: { notes },
  });

  revalidatePath(`/crm/cases/${item.caseId}`);
}

/**
 * Verify or reject a document requirement.
 */
export async function verifyDocRequirement(
  requirementId: string,
  action: "VERIFIED" | "REJECTED",
  feedback?: string
) {
  const session = await auth();
  const user = getUser(session);

  const req = await prisma.caseDocumentRequirement.update({
    where: { id: requirementId },
    data: {
      status: action,
      verifiedById: user.id,
      verifiedAt: new Date(),
      feedback: feedback ?? null,
    },
  });

  await prisma.caseActivity.create({
    data: {
      caseId: req.caseId,
      userId: user.id,
      action: action === "VERIFIED" ? "doc_requirement_verified" : "doc_requirement_rejected",
      description: `${action === "VERIFIED" ? "Verified" : "Rejected"}: ${req.label}${feedback ? ` — ${feedback}` : ""}`,
    },
  });

  await recomputeNextAction(prisma, req.caseId);
  revalidatePath(`/crm/cases/${req.caseId}`);
}

/**
 * Link an uploaded document to a requirement slot.
 */
export async function linkDocumentToRequirement(requirementId: string, documentId: string) {
  const session = await auth();
  const user = getUser(session);

  const req = await prisma.caseDocumentRequirement.update({
    where: { id: requirementId },
    data: {
      documentId,
      status: "UPLOADED",
    },
  });

  await prisma.caseActivity.create({
    data: {
      caseId: req.caseId,
      userId: user.id,
      action: "doc_linked_to_requirement",
      description: `Document linked to requirement: ${req.label}`,
    },
  });

  await recomputeNextAction(prisma, req.caseId);
  revalidatePath(`/crm/cases/${req.caseId}`);
}

/**
 * Advance the workflow stage with gating check.
 */
export async function advanceWorkflowStage(caseId: string, overrideReason?: string) {
  const session = await auth();
  const user = getUser(session);

  const caseRecord = await prisma.case.findUniqueOrThrow({
    where: { id: caseId },
    include: {
      checklists: true,
      docRequirements: true,
    },
  });

  const currentStage = caseRecord.workflowStage as CaseWorkflowStage;
  const nextStage = getNextStage(currentStage);
  if (!nextStage) throw new Error("Already at final stage");

  // Run gating check
  const gating = checkStageGating(
    currentStage,
    caseRecord.checklists.map((c) => ({
      label: c.label,
      isRequired: c.isRequired,
      isCompleted: c.isCompleted,
      forStage: c.forStage as CaseWorkflowStage | null,
    })),
    caseRecord.docRequirements.map((d) => ({
      label: d.label,
      isRequired: d.isRequired,
      status: d.status as "PENDING" | "UPLOADED" | "VERIFIED" | "REJECTED",
      forStage: d.forStage as CaseWorkflowStage | null,
    }))
  );

  if (!gating.canAdvance && !overrideReason) {
    return { success: false, blockers: gating.blockers, warnings: gating.warnings };
  }

  const isOverride = !gating.canAdvance && !!overrideReason;

  await prisma.$transaction([
    prisma.case.update({
      where: { id: caseId },
      data: { workflowStage: nextStage },
    }),
    prisma.stageTransition.create({
      data: {
        caseId,
        fromStage: currentStage,
        toStage: nextStage,
        userId: user.id,
        gatingMet: gating.canAdvance,
        overrideReason: isOverride ? overrideReason : null,
      },
    }),
    prisma.caseActivity.create({
      data: {
        caseId,
        userId: user.id,
        action: "stage_advanced",
        description: `Stage advanced from ${getStageLabel(currentStage)} to ${getStageLabel(nextStage)}${isOverride ? ` (override: ${overrideReason})` : ""}`,
      },
    }),
  ]);

  await recomputeNextAction(prisma, caseId);
  revalidatePath(`/crm/cases/${caseId}`);

  return { success: true, blockers: [], warnings: gating.warnings };
}

/**
 * Update compliance fields.
 */
export async function updateCompliance(
  caseId: string,
  field: "complianceAmlDone" | "complianceConfidentialitySigned" | "complianceConflictCheckDone",
  value: boolean
) {
  const session = await auth();
  const user = getUser(session);

  const labels: Record<string, string> = {
    complianceAmlDone: "AML / identity verification",
    complianceConfidentialitySigned: "Confidentiality agreement",
    complianceConflictCheckDone: "Conflict of interest check",
  };

  await prisma.case.update({
    where: { id: caseId },
    data: { [field]: value },
  });

  await prisma.caseActivity.create({
    data: {
      caseId,
      userId: user.id,
      action: value ? "compliance_completed" : "compliance_unchecked",
      description: `${value ? "Completed" : "Unchecked"}: ${labels[field]}`,
    },
  });

  await recomputeNextAction(prisma, caseId);
  revalidatePath(`/crm/cases/${caseId}`);
}

/**
 * Add a case note.
 */
export async function addCaseNote(caseId: string, content: string, isInternal: boolean) {
  const session = await auth();
  const user = getUser(session);

  await prisma.note.create({
    data: {
      caseId,
      authorId: user.id,
      content,
      isInternal,
    },
  });

  await prisma.caseActivity.create({
    data: {
      caseId,
      userId: user.id,
      action: "note_added",
      description: `${isInternal ? "Internal" : "Client-visible"} note added`,
    },
  });

  revalidatePath(`/crm/cases/${caseId}`);
}
