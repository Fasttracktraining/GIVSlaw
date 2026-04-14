"use server";

import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function toggleEmailNotifications() {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");
  const user = session.user as Record<string, unknown>;

  const current = await prisma.user.findUnique({ where: { id: user.id as string } });
  if (!current) throw new Error("User not found");

  await prisma.user.update({
    where: { id: user.id as string },
    data: { emailNotifications: !current.emailNotifications },
  });

  revalidatePath("/portal/profile");
}
