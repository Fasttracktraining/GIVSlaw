import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id, status } = await request.json();

  if (!id || !status) {
    return NextResponse.json({ error: "id and status required" }, { status: 400 });
  }

  await prisma.consultation.update({
    where: { id },
    data: { status: status as "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED" | "NO_SHOW" },
  });

  return NextResponse.json({ ok: true });
}
