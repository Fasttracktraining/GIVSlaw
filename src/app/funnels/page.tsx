import Link from "next/link";
import Image from "next/image";
import { FUNNELS } from "@/config/funnels";
import { ArrowRight } from "lucide-react";
import HeroBanner from "@/components/layout/HeroBanner";

export default function FunnelsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Free Immigration Assessments"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Free Assessments", href: "/funnels" },
        ]}
      />

      <section style={{ padding: "4rem 0" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label" style={{ justifyContent: "center", marginBottom: "0.75rem" }}>Get Started</p>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
              Choose your immigration need
            </h2>
            <p style={{ color: "#6B7280", maxWidth: "560px", margin: "0 auto" }}>
              Select the service that best matches your situation. Our experts will
              provide a free assessment and guide you through the process.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {FUNNELS.map((funnel) => (
              <Link
                key={funnel.slug}
                href={`/funnels/${funnel.slug}`}
                style={{ background: "white", borderRadius: "0.75rem", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", textDecoration: "none", color: "#0B1B3D", transition: "box-shadow 0.2s" }}
              >
                <div style={{ position: "relative", height: "10rem", overflow: "hidden" }}>
                  <Image src={funnel.image} alt={funnel.title} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,27,61,0.7), transparent)" }} />
                  <p style={{ position: "absolute", bottom: "0.75rem", left: "1rem", color: "white", fontWeight: 700, fontSize: "1.125rem" }}>
                    {funnel.title}
                  </p>
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <p style={{ fontSize: "0.8125rem", color: "#6B7280", lineHeight: 1.5, marginBottom: "1rem" }}>
                    {funnel.subheadline.slice(0, 120)}...
                  </p>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", fontSize: "0.875rem", fontWeight: 600, color: "#C5963A" }}>
                    {funnel.ctaText} <ArrowRight style={{ width: "0.875rem", height: "0.875rem" }} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
