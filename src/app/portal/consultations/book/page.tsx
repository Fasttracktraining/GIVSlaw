import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BookingWidget from "@/app/book/[advisorId]/BookingWidget";

export default async function PortalBookPage() {
  const session = await auth();
  const user = session?.user as Record<string, unknown>;
  const userId = user?.id as string;

  // Get client's case to find their advisor
  const activeCase = await prisma.case.findFirst({
    where: { clientId: userId },
    orderBy: { createdAt: "desc" },
    include: { assignedAdvisor: true },
  });

  const advisors = activeCase
    ? [activeCase.assignedAdvisor]
    : await prisma.user.findMany({
        where: { role: { in: ["ADVISOR", "DIRECTOR"] }, availability: { some: {} } },
      });

  const advisor = advisors[0];

  if (!advisor) {
    return (
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1rem" }}>Book Consultation</h1>
        <div style={{ background: "white", borderRadius: "0.75rem", padding: "3rem", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <p style={{ color: "#6B7280" }}>No advisors available for booking at this time. Please contact us directly.</p>
        </div>
      </div>
    );
  }

  const services = await prisma.service.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div>
      <Link href="/portal/consultations" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#6B7280", textDecoration: "none", fontSize: "0.875rem", marginBottom: "1rem" }}>
        <ArrowLeft style={{ width: "1rem", height: "1rem" }} /> Back to Consultations
      </Link>

      <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.25rem" }}>Book a Consultation</h1>
      <p style={{ color: "#6B7280", fontSize: "0.875rem", marginBottom: "2rem" }}>
        Schedule a consultation with {advisor.firstName} {advisor.lastName}
      </p>

      <div style={{ maxWidth: "640px" }}>
        <BookingWidget
          advisorId={advisor.id}
          advisorName={`${advisor.firstName} ${advisor.lastName}`}
          services={services.map((s) => ({ slug: s.slug, name: s.name }))}
          isPortal={true}
        />
      </div>
    </div>
  );
}
