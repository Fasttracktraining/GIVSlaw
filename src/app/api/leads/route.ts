import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, source, urgency, primaryService, notes } = body;

    if (!email || !firstName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const lead = await prisma.lead.create({
      data: {
        firstName,
        lastName: lastName || "",
        email,
        phone: phone || null,
        source: source || "API",
        urgency: urgency || "MEDIUM",
        primaryService: primaryService || null,
        status: "NEW",
        notes: notes || null,
      },
    });

    return NextResponse.json({ success: true, leadId: lead.id });
  } catch (error) {
    console.error("API Lead Capture Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
