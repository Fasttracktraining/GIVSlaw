"use server";

import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { applyCaseTemplate } from "@/lib/case-engine/apply-template";
import { recomputeNextAction } from "@/lib/case-engine/recompute";
import { getTemplateForCaseType } from "@/lib/case-engine/templates";

function generateCaseRef(): string {
  const year = new Date().getFullYear();
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `GIVS-${year}-${rand}`;
}

export async function createCase(formData: FormData) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");
  const user = session.user as { id: string };

  const clientId = formData.get("clientId") as string;
  const caseType = formData.get("caseType") as string;
  const advisorId = formData.get("advisorId") as string;
  const priority = (formData.get("priority") as string) || "NORMAL";

  if (!clientId || !caseType || !advisorId) {
    throw new Error("Client, case type, and advisor are required");
  }

  // Create the case
  const newCase = await prisma.case.create({
    data: {
      caseRef: generateCaseRef(),
      clientId,
      type: caseType,
      assignedAdvisorId: advisorId,
      priority: priority as "NORMAL" | "HIGH" | "URGENT",
      stage: "ENQUIRY",
      workflowStage: "ENQUIRY",
    },
  });

  // Apply template
  const template = getTemplateForCaseType(caseType as Parameters<typeof getTemplateForCaseType>[0]);
  if (template) {
    await applyCaseTemplate(prisma, newCase.id, caseType as Parameters<typeof applyCaseTemplate>[2], template, user.id);
    await recomputeNextAction(prisma, newCase.id);
  }

  // Log activity
  await prisma.caseActivity.create({
    data: {
      caseId: newCase.id,
      userId: user.id,
      action: "case_created",
      description: `Case ${newCase.caseRef} created`,
    },
  });

  redirect(`/crm/cases/${newCase.id}`);
}
