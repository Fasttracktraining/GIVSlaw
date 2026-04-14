import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { emailDocumentUploaded } from "@/lib/email";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = session.user as Record<string, unknown>;
  const formData = await request.formData();
  const file = formData.get("file") as File;
  let caseId = formData.get("caseId") as string;
  const category = (formData.get("category") as string) || "OTHER";
  const name = (formData.get("name") as string) || file.name;

  if (!file) {
    return NextResponse.json({ error: "File required" }, { status: 400 });
  }

  // If caseId is placeholder, look up the client's active case
  if (!caseId || caseId === "NEEDS_LOOKUP") {
    const activeCase = await prisma.case.findFirst({
      where: { clientId: user.id as string },
      orderBy: { createdAt: "desc" },
    });
    if (!activeCase) {
      return NextResponse.json({ error: "No active case found" }, { status: 400 });
    }
    caseId = activeCase.id;
  }

  // Save file to public/uploads/{caseId}/
  const uploadDir = path.join(process.cwd(), "public", "uploads", caseId);
  await mkdir(uploadDir, { recursive: true });

  const ext = path.extname(file.name);
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`;
  const filePath = path.join(uploadDir, filename);
  const bytes = await file.arrayBuffer();
  await writeFile(filePath, Buffer.from(bytes));

  const fileUrl = `/uploads/${caseId}/${filename}`;

  const document = await prisma.document.create({
    data: {
      name,
      category: category as "PASSPORT" | "BRP" | "BANK_STATEMENT" | "PAYSLIP" | "EMPLOYMENT_LETTER" | "TENANCY_AGREEMENT" | "UTILITY_BILL" | "PHOTO" | "MARRIAGE_CERT" | "BIRTH_CERT" | "QUALIFICATION" | "TRANSLATION" | "COVER_LETTER" | "SUPPORTING_LETTER" | "OTHER",
      status: "UPLOADED",
      caseId,
      uploadedById: user.id as string,
      fileUrl,
      fileSize: file.size,
      mimeType: file.type,
    },
  });

  await prisma.caseActivity.create({
    data: {
      caseId,
      userId: user.id as string,
      action: "document_uploaded",
      description: `Document uploaded: ${name}`,
    },
  });

  // Notify advisor
  const caseRecord = await prisma.case.findUnique({ where: { id: caseId }, include: { assignedAdvisor: true, client: true } });
  if (caseRecord?.assignedAdvisor) {
    emailDocumentUploaded(caseRecord.assignedAdvisor.email, {
      advisorName: caseRecord.assignedAdvisor.firstName,
      clientName: `${caseRecord.client.firstName} ${caseRecord.client.lastName}`,
      documentName: name,
      caseRef: caseRecord.caseRef,
    }).catch(() => {});
  }

  return NextResponse.json({ id: document.id, fileUrl });
}
