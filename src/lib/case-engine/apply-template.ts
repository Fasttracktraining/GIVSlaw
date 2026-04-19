/**
 * Apply Template — when a case type is assigned, creates all document requirements
 * and checklist items from the template definition.
 */

import { PrismaClient } from "@prisma/client";
import type { CaseTypeTemplate, DocRequirementSpec, ChecklistItemSpec } from "./types";

type CaseType =
  | "SPOUSE_VISA_ENTRY_CLEARANCE"
  | "SPOUSE_VISA_EXTENSION_ILR"
  | "SKILLED_WORKER_ENTRY"
  | "SKILLED_WORKER_EXTENSION"
  | "ILR_10YR_LONG_RESIDENCE"
  | "BRITISH_CITIZENSHIP_NATURALISATION";

/**
 * Apply a case type template to a case. Creates:
 * - CaseDocumentRequirement rows from template.documents
 * - ChecklistItem rows from template.legalChecklist, operationalChecklist, complianceChecklist
 * - Updates case.caseType and case.workflowStage
 * - Logs the action to CaseActivity
 *
 * Should be called inside a transaction or as a standalone operation.
 */
export async function applyCaseTemplate(
  prisma: PrismaClient,
  caseId: string,
  caseType: CaseType,
  template: CaseTypeTemplate,
  userId: string
) {
  // 1. Create document requirements
  const docData = template.documents.map((doc: DocRequirementSpec, idx: number) => ({
    caseId,
    category: doc.category,
    label: doc.label,
    description: doc.description ?? null,
    isRequired: doc.isRequired,
    forStage: doc.forStage,
    status: "PENDING" as const,
    sortOrder: idx,
  }));

  // 2. Gather all checklists
  const allChecklists: (ChecklistItemSpec & { sortOrder: number })[] = [
    ...template.complianceChecklist.map((item, idx) => ({ ...item, sortOrder: idx })),
    ...template.legalChecklist.map((item, idx) => ({ ...item, sortOrder: idx + 100 })),
    ...template.operationalChecklist.map((item, idx) => ({ ...item, sortOrder: idx + 200 })),
  ];

  const checklistData = allChecklists.map((item) => ({
    caseId,
    category: item.category,
    label: item.label,
    description: item.description ?? null,
    isRequired: item.isRequired,
    forStage: item.forStage,
    isCompleted: false,
    sortOrder: item.sortOrder,
  }));

  // 3. Execute in transaction
  await prisma.$transaction([
    // Update the case with the type
    prisma.case.update({
      where: { id: caseId },
      data: {
        caseType,
        workflowStage: "ENQUIRY",
      },
    }),

    // Delete any existing requirements/checklists (in case of re-apply)
    prisma.caseDocumentRequirement.deleteMany({ where: { caseId } }),
    prisma.checklistItem.deleteMany({ where: { caseId } }),

    // Create new requirements
    prisma.caseDocumentRequirement.createMany({ data: docData }),

    // Create new checklists
    prisma.checklistItem.createMany({ data: checklistData }),

    // Log the activity
    prisma.caseActivity.create({
      data: {
        caseId,
        userId,
        action: "template_applied",
        description: `Case type set to ${template.name}. ${docData.length} document requirements and ${checklistData.length} checklist items created.`,
        metadata: {
          caseType,
          documentCount: docData.length,
          checklistCount: checklistData.length,
        },
      },
    }),
  ]);
}
