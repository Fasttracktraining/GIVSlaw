import Link from "next/link";
import Image from "next/image";
import HeroBanner from "@/components/layout/HeroBanner";
import {
  Users,
  Briefcase,
  ShieldCheck,
  Building2,
  TrendingUp,
  Plane,
  FileCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    slug: "individual-and-family-immigration",
    name: "Individual and Family Immigration",
    description:
      "Comprehensive support for individuals and families navigating UK immigration, from visa applications to settlement and family reunification.",
    icon: Users,
    image: "/images/family.jpg",
    funnel: "spouse-visa",
  },
  {
    slug: "working-in-the-uk",
    name: "Working in the UK",
    description:
      "Expert guidance for skilled workers, graduates, and professionals seeking employment-based visas and work permits in the United Kingdom.",
    icon: Briefcase,
    image: "/images/student-laptop.jpg",
    funnel: "skilled-worker",
  },
  {
    slug: "british-citizenship",
    name: "British Citizenship",
    description:
      "Complete assistance with British citizenship applications, naturalisation, and passport applications for eligible individuals.",
    icon: ShieldCheck,
    image: "/images/passport-flag.jpg",
    funnel: "british-citizenship",
  },
  {
    slug: "corporate-immigration",
    name: "Corporate Immigration",
    description:
      "Tailored corporate immigration solutions for businesses, including sponsor licences, compliance, and employee relocation support.",
    icon: Building2,
    image: "/images/boardroom.jpg",
    funnel: "general-consultation",
  },
  {
    slug: "investing-in-the-uk",
    name: "Investing in the UK",
    description:
      "Specialist advice for investors and entrepreneurs looking to establish or expand their business presence in the United Kingdom.",
    icon: TrendingUp,
    image: "/images/london-money.jpg",
    funnel: "general-consultation",
  },
  {
    slug: "business-visitor-visa",
    name: "Business Visitor Visa",
    description:
      "Fast and efficient assistance with business visitor visa applications for conferences, meetings, and short-term business activities.",
    icon: Plane,
    image: "/images/london-building.jpg",
    funnel: "visitor-visa",
  },
  {
    slug: "sponsor-license-renewal",
    name: "Sponsor License Renewal",
    description:
      "Expert support for UK employers with sponsor licence applications, renewals, and ongoing compliance requirements.",
    icon: FileCheck,
    image: "/images/conference-group.jpg",
    funnel: "general-consultation",
  },
];

export default function ServicesPage() {
  return (
    <>
      <HeroBanner
        title="Our Services"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-label justify-center mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Comprehensive immigration services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We provide expert guidance across all areas of UK immigration law,
              helping individuals, families, and businesses achieve their goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.slug}
                style={{ background: "white", borderRadius: "0.75rem", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #F3F4F6" }}
              >
                <Link href={`/services/${service.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{ position: "relative", height: "12rem", overflow: "hidden" }}>
                    <Image src={service.image} alt={service.name} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "1.5rem", paddingBottom: "0.75rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                      <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "rgba(11,27,61,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <service.icon style={{ width: "1.25rem", height: "1.25rem", color: "#0B1B3D" }} />
                      </div>
                      <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#0B1B3D" }}>{service.name}</h3>
                    </div>
                    <p style={{ color: "#6B7280", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                      {service.description}
                    </p>
                    <span style={{ color: "#0B1B3D", fontWeight: 600, fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      Learn More <ArrowRight style={{ width: "1rem", height: "1rem" }} />
                    </span>
                  </div>
                </Link>
                <div style={{ padding: "0 1.5rem 1.5rem" }}>
                  <Link
                    href={`/funnels/${service.funnel}`}
                    style={{ display: "block", padding: "0.625rem 0", background: "#C5963A", color: "white", borderRadius: "0.375rem", textAlign: "center", fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none" }}
                  >
                    Get Free Assessment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
