import { prisma } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Calendar, Clock, User } from "lucide-react";

interface Props {
  searchParams: Promise<{ id?: string; advisor?: string; date?: string; time?: string }>;
}

export default async function BookingConfirmPage({ searchParams }: Props) {
  const params = await searchParams;

  const consultation = params.id ? await prisma.consultation.findUnique({
    where: { id: params.id },
    include: { advisor: true },
  }) : null;

  const advisorName = consultation
    ? `${consultation.advisor?.firstName} ${consultation.advisor?.lastName}`
    : "Your advisor";

  const dateStr = consultation
    ? consultation.scheduledAt.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
    : params.date ? new Date(params.date).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" }) : "";

  const timeStr = consultation
    ? consultation.scheduledAt.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })
    : params.time || "";

  return (
    <div style={{ minHeight: "100vh", background: "#F9FAFB", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <div style={{ maxWidth: "480px", width: "100%", textAlign: "center" }}>
        <Image src="/images/logo.png" alt="GIVS Law" width={140} height={47} style={{ height: "2.5rem", width: "auto", margin: "0 auto 2rem" }} />

        <div style={{ background: "white", borderRadius: "0.75rem", padding: "2.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <CheckCircle style={{ width: "3.5rem", height: "3.5rem", color: "#10B981", margin: "0 auto 1rem" }} />

          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.5rem" }}>
            Booking Confirmed!
          </h1>
          <p style={{ color: "#6B7280", marginBottom: "2rem" }}>
            Your consultation has been scheduled. We look forward to speaking with you.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", padding: "1.25rem", background: "#F9FAFB", borderRadius: "0.5rem", textAlign: "left", marginBottom: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Calendar style={{ width: "1.125rem", height: "1.125rem", color: "#6B7280" }} />
              <span style={{ fontSize: "0.875rem", color: "#111827" }}>{dateStr}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Clock style={{ width: "1.125rem", height: "1.125rem", color: "#6B7280" }} />
              <span style={{ fontSize: "0.875rem", color: "#111827" }}>{timeStr}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <User style={{ width: "1.125rem", height: "1.125rem", color: "#6B7280" }} />
              <span style={{ fontSize: "0.875rem", color: "#111827" }}>{advisorName}</span>
            </div>
            {consultation?.service && (
              <p style={{ fontSize: "0.8125rem", color: "#6B7280", paddingLeft: "1.875rem" }}>
                {consultation.service.replace(/-/g, " ")}
              </p>
            )}
          </div>

          <p style={{ fontSize: "0.875rem", color: "#6B7280", marginBottom: "1.5rem" }}>
            Check your email for confirmation details and any preparation steps.
          </p>

          <Link href="/" style={{ display: "inline-block", padding: "0.75rem 2rem", background: "#0B1B3D", color: "white", borderRadius: "0.375rem", textDecoration: "none", fontWeight: 600, fontSize: "0.875rem" }}>
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
