import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getFunnel, FUNNELS } from "@/config/funnels";
import { CheckCircle2, ArrowRight, Phone, Clock, Shield } from "lucide-react";
import FunnelForm from "./FunnelForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return FUNNELS.map((f) => ({ slug: f.slug }));
}

export default async function FunnelLandingPage({ params }: Props) {
  const { slug } = await params;
  const funnel = getFunnel(slug);
  if (!funnel) notFound();

  return (
    <div>
      {/* Hero */}
      <section style={{ background: "#0B1B3D", position: "relative", overflow: "hidden" }}>
        <div className="container-main" style={{ padding: "4rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ color: "white" }}>
              <p style={{ color: "#C5963A", fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
                Free Assessment
              </p>
              <h1 style={{ fontSize: "2.25rem", fontWeight: 800, lineHeight: 1.2, marginBottom: "1rem" }}>
                {funnel.headline}
              </h1>
              <p style={{ fontSize: "1.0625rem", color: "#D1D5DB", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                {funnel.subheadline}
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                {funnel.bulletPoints.map((point) => (
                  <li key={point} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#E5E7EB" }}>
                    <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#C5963A", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.9375rem" }}>{point}</span>
                  </li>
                ))}
              </ul>
              <a href="#form" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", background: "#C5963A", color: "white", borderRadius: "0.5rem", textDecoration: "none", fontWeight: 700, fontSize: "1rem" }}>
                {funnel.ctaText} <ArrowRight style={{ width: "1.125rem", height: "1.125rem" }} />
              </a>
            </div>
            <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "0.75rem", overflow: "hidden" }}>
              <Image src={funnel.image} alt={funnel.title} fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section style={{ background: "white", borderBottom: "1px solid #E5E7EB" }}>
        <div className="container-main" style={{ padding: "1.25rem 1.5rem" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: "3rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#374151", fontSize: "0.875rem" }}>
              <Shield style={{ width: "1rem", height: "1rem", color: "#C5963A" }} /> Regulated by IAA
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#374151", fontSize: "0.875rem" }}>
              <Clock style={{ width: "1rem", height: "1rem", color: "#C5963A" }} /> Response within 24 hours
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#374151", fontSize: "0.875rem" }}>
              <Phone style={{ width: "1rem", height: "1rem", color: "#C5963A" }} /> Free initial assessment
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            {/* Left - Why choose us */}
            <div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1rem" }}>
                Why Choose GIVS Law?
              </h2>
              <p style={{ color: "#6B7280", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                We are a regulated immigration firm with years of experience helping
                clients with {funnel.title.toLowerCase()} applications. Our team provides
                personalised advice and full application support.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { title: "Expert Advice", desc: "Our team includes qualified immigration advisors regulated by the IAA." },
                  { title: "High Success Rate", desc: "We have a proven track record of successful applications." },
                  { title: "No Hidden Fees", desc: "Transparent pricing with no surprises. Free initial assessment." },
                ].map((item) => (
                  <div key={item.title} style={{ display: "flex", gap: "0.75rem" }}>
                    <CheckCircle2 style={{ width: "1.25rem", height: "1.25rem", color: "#10B981", flexShrink: 0, marginTop: "0.125rem" }} />
                    <div>
                      <p style={{ fontWeight: 600, color: "#0B1B3D", fontSize: "0.9375rem" }}>{item.title}</p>
                      <p style={{ color: "#6B7280", fontSize: "0.8125rem", marginTop: "0.125rem" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <FunnelForm funnelSlug={funnel.slug} serviceSlug={funnel.serviceSlug} ctaText={funnel.ctaText} />
          </div>
        </div>
      </section>
    </div>
  );
}
