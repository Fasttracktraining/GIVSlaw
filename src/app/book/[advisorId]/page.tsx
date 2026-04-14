import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import BookingWidget from "./BookingWidget";

interface Props {
  params: Promise<{ advisorId: string }>;
}

export default async function PublicBookingPage({ params }: Props) {
  const { advisorId } = await params;

  const advisor = await prisma.user.findUnique({
    where: { id: advisorId },
    include: { availability: { orderBy: { dayOfWeek: "asc" } } },
  });

  if (!advisor || !["ADMIN", "DIRECTOR", "ADVISOR", "CASEWORKER"].includes(advisor.role)) {
    notFound();
  }

  if (advisor.availability.length === 0) {
    return (
      <div style={{ background: "#F9FAFB", display: "flex", alignItems: "center", justifyContent: "center", padding: "4rem 2rem" }}>
        <div style={{ textAlign: "center", maxWidth: "400px" }}>
          <h1 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.5rem" }}>Booking Not Available</h1>
          <p style={{ color: "#6B7280" }}>This advisor has not set up their availability yet. Please contact us directly.</p>
        </div>
      </div>
    );
  }

  const services = await prisma.service.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div style={{ background: "#F9FAFB", minHeight: "60vh" }}>
      {/* Header */}
      <div style={{ background: "#0B1B3D", padding: "2rem 0" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "white" }}>Book a Free Consultation</h1>
          <p style={{ color: "#D1D5DB", marginTop: "0.5rem" }}>
            with {advisor.firstName} {advisor.lastName}
          </p>
        </div>
      </div>

      {/* Booking Widget */}
      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "2rem 1.5rem" }}>
        <BookingWidget
          advisorId={advisorId}
          advisorName={`${advisor.firstName} ${advisor.lastName}`}
          services={services.map((s) => ({ slug: s.slug, name: s.name }))}
          isPortal={false}
        />
      </div>
    </div>
  );
}
