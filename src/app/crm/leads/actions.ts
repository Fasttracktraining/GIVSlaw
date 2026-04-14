"use server";

import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { logLeadActivity, calculateTemperature } from "@/lib/lead-helpers";

export async function createLead(formData: FormData) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  const lead = await prisma.lead.create({
    data: {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || null,
      source: (formData.get("source") as string as "WEBSITE" | "REFERRAL" | "SOCIAL_MEDIA" | "GOOGLE" | "FUNNEL" | "WALK_IN" | "OTHER") || "WEBSITE",
      urgency: (formData.get("urgency") as string as "LOW" | "MEDIUM" | "HIGH" | "URGENT") || "MEDIUM",
      primaryService: (formData.get("primaryService") as string) || null,
      assignedAdvisorId: (formData.get("assignedAdvisorId") as string) || null,
      notes: (formData.get("notes") as string) || null,
    },
  });

  revalidatePath("/crm/leads");
  revalidatePath("/crm");
  redirect(`/crm/leads/${lead.id}`);
}

export async function updateLeadStatus(leadId: string, status: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");
  const user = session.user as Record<string, unknown>;

  await prisma.lead.update({
    where: { id: leadId },
    data: { status: status as "NEW" | "CONTACTED" | "QUALIFIED" | "CONVERTED" | "LOST" },
  });

  await logLeadActivity(leadId, user.id as string, "status_changed", `Status changed to ${status}`);

  revalidatePath(`/crm/leads/${leadId}`);
  revalidatePath("/crm/leads");
  revalidatePath("/crm");
}

export async function assignLead(leadId: string, advisorId: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");
  const user = session.user as Record<string, unknown>;

  await prisma.lead.update({
    where: { id: leadId },
    data: { assignedAdvisorId: advisorId || null },
  });

  if (advisorId) {
    const advisor = await prisma.user.findUnique({ where: { id: advisorId } });
    await logLeadActivity(leadId, user.id as string, "lead_assigned", `Assigned to ${advisor?.firstName} ${advisor?.lastName}`);
  }

  revalidatePath(`/crm/leads/${leadId}`);
  revalidatePath("/crm/leads");
}

export async function addLeadNote(leadId: string, content: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");
  const user = session.user as Record<string, unknown>;

  // We store notes on the lead's notes field for now (simple approach)
  // Later when lead is converted, notes move to Case notes
  const lead = await prisma.lead.findUnique({ where: { id: leadId } });
  if (!lead) throw new Error("Lead not found");

  const timestamp = new Date().toISOString();
  const authorName = `${user.firstName} ${user.lastName}`;
  const newNote = `[${timestamp}] ${authorName}: ${content}`;
  const existingNotes = lead.notes || "";
  const updatedNotes = existingNotes ? `${newNote}\n---\n${existingNotes}` : newNote;

  await prisma.lead.update({
    where: { id: leadId },
    data: { notes: updatedNotes },
  });

  revalidatePath(`/crm/leads/${leadId}`);
}

export async function setFollowUp(leadId: string, dateStr: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");
  const user = session.user as Record<string, unknown>;

  await prisma.lead.update({
    where: { id: leadId },
    data: { nextFollowUpAt: dateStr ? new Date(dateStr) : null },
  });

  if (dateStr) {
    await logLeadActivity(leadId, user.id as string, "followup_set", `Follow-up set for ${new Date(dateStr).toLocaleDateString("en-GB")}`);
  }

  revalidatePath(`/crm/leads/${leadId}`);
  revalidatePath("/crm");
}

export async function recordCallOutcome(leadId: string, outcome: string, note: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");
  const user = session.user as Record<string, unknown>;
  const userId = user.id as string;
  const authorName = `${user.firstName} ${user.lastName}`;

  // Create call outcome record
  await prisma.callOutcome.create({
    data: {
      leadId,
      calledById: userId,
      outcome: outcome as "NO_ANSWER" | "INTERESTED" | "NOT_INTERESTED" | "CALLBACK_LATER" | "WRONG_NUMBER",
      note: note || null,
    },
  });

  // Update lastContactedAt
  const updateData: Record<string, unknown> = { lastContactedAt: new Date() };

  // Auto-update status based on outcome
  if (outcome === "INTERESTED") {
    updateData.status = "CONTACTED";
  } else if (outcome === "NOT_INTERESTED" || outcome === "WRONG_NUMBER") {
    updateData.status = "LOST";
  }

  await prisma.lead.update({ where: { id: leadId }, data: updateData });

  // Auto-add note
  const lead = await prisma.lead.findUnique({ where: { id: leadId }, include: { callOutcomes: { orderBy: { createdAt: "desc" }, take: 10 } } });
  if (lead) {
    const timestamp = new Date().toISOString();
    const outcomeLabel = outcome.replace(/_/g, " ");
    const noteText = `[${timestamp}] ${authorName}: Call — ${outcomeLabel}${note ? `. ${note}` : ""}`;
    const existingNotes = lead.notes || "";
    const updatedNotes = existingNotes ? `${noteText}\n---\n${existingNotes}` : noteText;

    // Recalculate temperature
    const temp = calculateTemperature(lead);

    await prisma.lead.update({ where: { id: leadId }, data: { notes: updatedNotes, temperature: temp } });
  }

  await logLeadActivity(leadId, userId, "call_logged", `Call: ${outcome.replace(/_/g, " ")}${note ? ` — ${note}` : ""}`);

  revalidatePath(`/crm/leads/${leadId}`);
  revalidatePath("/crm/leads");
  revalidatePath("/crm");
}

// ─── Bulk Actions ────────────────────────────────────────

export async function bulkUpdateStatus(leadIds: string[], status: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  await prisma.lead.updateMany({
    where: { id: { in: leadIds } },
    data: { status: status as "NEW" | "CONTACTED" | "QUALIFIED" | "CONVERTED" | "LOST" },
  });

  revalidatePath("/crm/leads");
  revalidatePath("/crm");
}

export async function bulkAssign(leadIds: string[], advisorId: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  await prisma.lead.updateMany({
    where: { id: { in: leadIds } },
    data: { assignedAdvisorId: advisorId || null },
  });

  revalidatePath("/crm/leads");
  revalidatePath("/crm");
}

export async function bulkSetFollowUp(leadIds: string[], dateStr: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  await prisma.lead.updateMany({
    where: { id: { in: leadIds } },
    data: { nextFollowUpAt: dateStr ? new Date(dateStr) : null },
  });

  revalidatePath("/crm/leads");
  revalidatePath("/crm");
}

// ─── Quick outcome from table ────────────────────────────

export async function quickCallOutcome(leadId: string, outcome: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");
  const user = session.user as Record<string, unknown>;
  const userId = user.id as string;

  await prisma.callOutcome.create({
    data: {
      leadId,
      calledById: userId,
      outcome: outcome as "NO_ANSWER" | "INTERESTED" | "NOT_INTERESTED" | "CALLBACK_LATER" | "WRONG_NUMBER",
    },
  });

  const updateData: Record<string, unknown> = { lastContactedAt: new Date() };
  if (outcome === "INTERESTED") updateData.status = "CONTACTED";
  else if (outcome === "NOT_INTERESTED" || outcome === "WRONG_NUMBER") updateData.status = "LOST";

  await prisma.lead.update({ where: { id: leadId }, data: updateData });

  revalidatePath("/crm/leads");
  revalidatePath("/crm");
}

export async function convertLeadToCase(leadId: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  const lead = await prisma.lead.findUnique({
    where: { id: leadId },
  });

  if (!lead) throw new Error("Lead not found");
  if (lead.status === "CONVERTED") throw new Error("Lead already converted");

  // Generate case reference
  const year = new Date().getFullYear();
  const caseCount = await prisma.case.count();
  const caseRef = `GIVS-${year}-${String(caseCount + 1).padStart(4, "0")}`;

  // Find or create client user from lead
  let clientUser = await prisma.user.findUnique({ where: { email: lead.email } });
  if (!clientUser) {
    // Create a client user account (they can set password later)
    const bcrypt = await import("bcryptjs");
    const tempPassword = await bcrypt.hash(`temp-${Date.now()}`, 12);
    clientUser = await prisma.user.create({
      data: {
        email: lead.email,
        passwordHash: tempPassword,
        role: "CLIENT",
        firstName: lead.firstName,
        lastName: lead.lastName,
        phone: lead.phone,
      },
    });
  }

  // Determine advisor
  const advisorId = lead.assignedAdvisorId || (session.user as Record<string, unknown>).id as string;

  // Create case
  const newCase = await prisma.case.create({
    data: {
      caseRef,
      clientId: clientUser.id,
      type: lead.primaryService || "other",
      stage: "ENQUIRY",
      assignedAdvisorId: advisorId,
      priority: lead.urgency === "URGENT" ? "URGENT" : lead.urgency === "HIGH" ? "HIGH" : "NORMAL",
    },
  });

  // Update lead
  await prisma.lead.update({
    where: { id: leadId },
    data: {
      status: "CONVERTED",
      convertedToCaseId: newCase.id,
    },
  });

  // Log activity
  await prisma.caseActivity.create({
    data: {
      caseId: newCase.id,
      userId: (session.user as Record<string, unknown>).id as string,
      action: "case_created",
      description: `Case created from lead: ${lead.firstName} ${lead.lastName}`,
    },
  });

  revalidatePath("/crm/leads");
  revalidatePath("/crm");
  redirect(`/crm/cases/${newCase.id}`);
}
