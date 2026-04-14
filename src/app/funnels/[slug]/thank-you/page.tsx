import { getFunnel, FUNNELS } from "@/config/funnels";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Calendar, Phone, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lead?: string; name?: string; book?: string }>;
}

export async function generateStaticParams() {
  return FUNNELS.map((f) => ({ slug: f.slug }));
}

export default async function FunnelThankYouPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const query = await searchParams;
  const funnel = getFunnel(slug);
  if (!funnel) notFound();

  const firstName = query.name || "there";
  const wantsBooking = query.book === "true";

  // Get advisors with availability for booking link
  const advisors = await prisma.user.findMany({
    where: { role: { in: ["ADVISOR", "DIRECTOR"] }, availability: { some: {} } },
    take: 1,
  });
  const bookingAdvisor = advisors[0];

  return (
    <div>
      {/* Success Banner */}
      <section style={{ background: "#0B1B3D", padding: "3rem 0" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <CheckCircle style={{ width: "4rem", height: "4rem", color: "#10B981", margin: "0 auto 1.25rem" }} />
          <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "white", marginBottom: "0.75rem" }}>
            Thank You, {firstName}!
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "#D1D5DB", maxWidth: "500px", margin: "0 auto" }}>
            {funnel.thankYouMessage}
          </p>
        </div>
      </section>

      {/* Next Steps */}
      <section style={{ padding: "3rem 0" }}>
        <div className="container-main">
          <div style={{ maxWidth: "640px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.5rem", textAlign: "center" }}>
              What Happens Next?
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { step: "1", title: "We Review Your Details", desc: "Our team will look at your submission and assess your situation." },
                { step: "2", title: "We Contact You", desc: "An advisor will reach out within 24 hours by phone or email." },
                { step: "3", title: "Free Consultation", desc: "We discuss your options and provide clear, actionable advice." },
              ].map((item) => (
                <div key={item.step} style={{ display: "flex", gap: "1rem", padding: "1.25rem", background: "white", borderRadius: "0.75rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                  <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "#0B1B3D", color: "#C5963A", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0 }}>
                    {item.step}
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, color: "#0B1B3D", marginBottom: "0.25rem" }}>{item.title}</p>
                    <p style={{ fontSize: "0.875rem", color: "#6B7280" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Booking CTA */}
            {wantsBooking && bookingAdvisor && (
              <div style={{ background: "#FFFBEB", border: "2px solid #C5963A", borderRadius: "0.75rem", padding: "1.5rem", textAlign: "center", marginBottom: "2rem" }}>
                <Calendar style={{ width: "2rem", height: "2rem", color: "#C5963A", margin: "0 auto 0.75rem" }} />
                <h3 style={{ fontWeight: 700, color: "#0B1B3D", marginBottom: "0.5rem" }}>Want to Speak Sooner?</h3>
                <p style={{ fontSize: "0.875rem", color: "#6B7280", marginBottom: "1rem" }}>
                  Book a consultation slot now and skip the wait.
                </p>
                <Link
                  href={`/book/${bookingAdvisor.id}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", background: "#C5963A", color: "white", borderRadius: "0.5rem", textDecoration: "none", fontWeight: 700 }}
                >
                  Book a Free Consultation <ArrowRight style={{ width: "1rem", height: "1rem" }} />
                </Link>
              </div>
            )}

            {/* Contact */}
            <div style={{ textAlign: "center", padding: "1.5rem", background: "white", borderRadius: "0.75rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
              <p style={{ fontSize: "0.875rem", color: "#6B7280", marginBottom: "0.75rem" }}>Need urgent help? Call us directly:</p>
              <a href="tel:+441156547274" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "1.25rem", fontWeight: 700, color: "#0B1B3D", textDecoration: "none" }}>
                <Phone style={{ width: "1.25rem", height: "1.25rem" }} /> +441156547274
              </a>
            </div>

            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Link href="/" style={{ color: "#6B7280", fontSize: "0.875rem", textDecoration: "none" }}>
                ← Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
