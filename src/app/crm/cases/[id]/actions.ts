"use server";

import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { emailDocumentReviewed, emailNewMessage, emailCaseStageChanged } from "@/lib/email";

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
