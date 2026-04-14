"use server";

import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { emailNewMessage } from "@/lib/email";

export async function sendMessage(caseId: string, content: string) {
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

  // Notify advisor
  const caseRecord = await prisma.case.findUnique({ where: { id: caseId }, include: { assignedAdvisor: true } });
  if (caseRecord?.assignedAdvisor) {
    emailNewMessage(caseRecord.assignedAdvisor.email, {
      recipientName: caseRecord.assignedAdvisor.firstName,
      senderName: `${user.firstName} ${user.lastName}`,
      preview: content.length > 100 ? content.slice(0, 100) + "..." : content,
      caseRef: caseRecord.caseRef,
    }).catch(() => {});
  }

  revalidatePath("/portal/messages");
  revalidatePath(`/crm/cases/${caseId}`);
}
