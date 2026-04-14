"use server";

import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { emailConsultationBooked } from "@/lib/email";

export async function submitFunnelForm(formData: FormData) {
  const slug = formData.get("funnelSlug") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const serviceSlug = formData.get("serviceSlug") as string;
  const urgency = (formData.get("urgency") as string) || "MEDIUM";
  const summary = formData.get("summary") as string;
  const wantsBooking = formData.get("wantsBooking") === "true";

  // Create lead
  const lead = await prisma.lead.create({
    data: {
      firstName,
      lastName,
      email,
      phone: phone || null,
      source: "FUNNEL",
      funnelSlug: slug,
      primaryService: serviceSlug,
      urgency: urgency as "LOW" | "MEDIUM" | "HIGH" | "URGENT",
      status: "NEW",
      notes: summary ? `Funnel submission: ${summary}` : null,
    },
  });

  // Track funnel entry
  await prisma.funnelEntry.create({
    data: {
      funnelSlug: slug,
      email,
      step: "BOOKED",
      leadId: lead.id,
      source: "funnel_form",
    },
  });

  revalidatePath("/crm/leads");
  revalidatePath("/crm");

  // Redirect to thank you page with booking option
  const params = new URLSearchParams({
    lead: lead.id,
    name: firstName,
    ...(wantsBooking ? { book: "true" } : {}),
  });
  redirect(`/funnels/${slug}/thank-you?${params.toString()}`);
}
