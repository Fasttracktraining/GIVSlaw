"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Briefcase,
  Award,
  Building2,
  Users,
  GraduationCap,
  TrendingUp,
  Plane,
  ArrowRight,
} from "lucide-react";

type ServiceLink = { name: string; href: string };
type ServiceCategory = {
  name: string;
  icon: typeof Briefcase;
  href: string;
  description: string;
  links: ServiceLink[];
};

const serviceCategories: ServiceCategory[] = [
  {
    name: "Working in the UK",
    icon: Briefcase,
    href: "/services/working-in-the-uk",
    description: "Work visas and sponsored routes",
    links: [
      { name: "Skilled Worker Visa", href: "/services/working-in-the-uk/skilled-worker-visa" },
      { name: "Scale-up Visa", href: "/services/working-in-the-uk/scale-up-visa" },
      { name: "UK Ancestry Visa", href: "/services/working-in-the-uk/uk-ancestry-visa" },
      { name: "Graduate Route", href: "/services/working-in-the-uk/graduate-route" },
      { name: "Graduate Trainee Visa", href: "/services/working-in-the-uk/graduate-trainee" },
      { name: "UK Expansion Worker", href: "/services/working-in-the-uk/uk-expansion-worker" },
      { name: "Secondment Worker", href: "/services/working-in-the-uk/secondment-worker" },
      { name: "Service Supplier", href: "/services/working-in-the-uk/service-supplier" },
      { name: "International Sportsperson", href: "/services/working-in-the-uk/international-sportsperson-visa" },
      { name: "Representative of Overseas Business", href: "/services/working-in-the-uk/representative-overseas-business" },
    ],
  },
  {
    name: "British Citizenship",
    icon: Award,
    href: "/services/british-citizenship",
    description: "Naturalisation and registration",
    links: [
      { name: "Naturalisation", href: "/services/british-citizenship/naturalisation" },
      { name: "Adult Registration", href: "/services/british-citizenship/adult-registration" },
      { name: "Child Registration", href: "/services/british-citizenship/child-registration" },
    ],
  },
  {
    name: "Corporate Immigration",
    icon: Building2,
    href: "/services/corporate-immigration",
    description: "Sponsor licences and compliance",
    links: [
      { name: "Skilled Worker Sponsor Licence", href: "/services/corporate-immigration/skilled-worker-sponsor-licence" },
      { name: "Creative Worker Sponsor Licence", href: "/services/corporate-immigration/creative-worker-sponsor-licence" },
      { name: "International Sportsperson Licence", href: "/services/corporate-immigration/international-sportsperson-sponsor-licence" },
      { name: "Sponsor Licence Renewal", href: "/services/corporate-immigration/sponsor-licence-renewal" },
      { name: "Compliance Visits", href: "/services/corporate-immigration/compliance-visits" },
    ],
  },
  {
    name: "Family & Private Life",
    icon: Users,
    href: "/services/family-and-private-life",
    description: "Join or remain with family in the UK",
    links: [
      { name: "Fiancé Visa", href: "/services/family-and-private-life/fiance-visa" },
      { name: "Adult Dependent Relative", href: "/services/family-and-private-life/adult-dependent-relative" },
    ],
  },
  {
    name: "Study in the UK",
    icon: GraduationCap,
    href: "/services/study-in-the-uk",
    description: "Student visas and family options",
    links: [
      { name: "Child Student Visa", href: "/services/study-in-the-uk/child-student-visa" },
      { name: "Parent of a Child Student", href: "/services/study-in-the-uk/parent-of-child-student" },
    ],
  },
  {
    name: "Investing in the UK",
    icon: TrendingUp,
    href: "/services/investing-in-the-uk/start-up-visa",
    description: "Start-up and business routes",
    links: [
      { name: "Start-up Visa", href: "/services/investing-in-the-uk/start-up-visa" },
    ],
  },
  {
    name: "Business Visitor Visa",
    icon: Plane,
    href: "/services/business-visitor-visa",
    description: "Short-term business visits to the UK",
    links: [],
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>(serviceCategories[0].name);

  const active = serviceCategories.find((c) => c.name === activeCategory) ?? serviceCategories[0];

  return (
    <header style={{ background: "white", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", position: "sticky", top: 0, zIndex: 50 }}>
      <div className="container-main" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "5rem" }}>
        <Link href="/" style={{ flexShrink: 0 }}>
          <Image
            src="/images/logo.png"
            alt="Global Immigration and Visa Services"
            width={180}
            height={60}
            style={{ height: "3.5rem", width: "auto" }}
            priority
          />
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.name}
                style={{ position: "static" }}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: "#0B1B3D", fontWeight: 500, textDecoration: "none", padding: "1.5rem 0" }}
                >
                  {link.name}
                  <ChevronDown style={{ width: "1rem", height: "1rem", transform: servicesOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                </Link>

                {servicesOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "5rem",
                      left: 0,
                      right: 0,
                      background: "white",
                      boxShadow: "0 12px 32px rgba(11,27,61,0.12)",
                      borderTop: "1px solid #E5E7EB",
                      zIndex: 100,
                    }}
                  >
                    <div
                      className="container-main"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "320px 1fr",
                        gap: "2.5rem",
                        padding: "2.25rem 1.5rem",
                      }}
                    >
                      {/* Left column — category list */}
                      <div>
                        <p style={{ color: "#C5963A", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>
                          Our Services
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                          {serviceCategories.map((cat) => {
                            const isActive = cat.name === activeCategory;
                            const Icon = cat.icon;
                            return (
                              <button
                                key={cat.name}
                                type="button"
                                onMouseEnter={() => setActiveCategory(cat.name)}
                                onFocus={() => setActiveCategory(cat.name)}
                                onClick={() => setActiveCategory(cat.name)}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "0.75rem",
                                  padding: "0.75rem 0.875rem",
                                  background: isActive ? "#F9FAFB" : "transparent",
                                  border: "none",
                                  borderLeft: isActive ? "3px solid #C5963A" : "3px solid transparent",
                                  color: "#0B1B3D",
                                  fontWeight: isActive ? 700 : 500,
                                  fontSize: "0.9375rem",
                                  cursor: "pointer",
                                  textAlign: "left",
                                  borderRadius: "0 0.375rem 0.375rem 0",
                                  transition: "background 0.15s",
                                }}
                              >
                                <span
                                  style={{
                                    width: "2rem",
                                    height: "2rem",
                                    borderRadius: "50%",
                                    background: "rgba(197,150,58,0.12)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                  }}
                                >
                                  <Icon style={{ width: "1rem", height: "1rem", color: "#C5963A" }} />
                                </span>
                                {cat.name}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right column — active category detail */}
                      <div style={{ borderLeft: "1px solid #E5E7EB", paddingLeft: "2.5rem" }}>
                        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.5rem", gap: "2rem" }}>
                          <div>
                            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.375rem" }}>
                              {active.name}
                            </h3>
                            <p style={{ color: "#6B7280", fontSize: "0.9375rem", lineHeight: 1.6 }}>
                              {active.description}
                            </p>
                          </div>
                          <Link
                            href={active.href}
                            onClick={() => setServicesOpen(false)}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.375rem",
                              color: "#C5963A",
                              fontWeight: 600,
                              fontSize: "0.875rem",
                              textDecoration: "none",
                              whiteSpace: "nowrap",
                              flexShrink: 0,
                            }}
                          >
                            View overview
                            <ArrowRight style={{ width: "0.875rem", height: "0.875rem" }} />
                          </Link>
                        </div>

                        {active.links.length > 0 ? (
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "repeat(2, 1fr)",
                              gap: "0.5rem 2rem",
                            }}
                          >
                            {active.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setServicesOpen(false)}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "0.5rem",
                                  padding: "0.625rem 0.75rem",
                                  color: "#374151",
                                  fontSize: "0.875rem",
                                  textDecoration: "none",
                                  borderRadius: "0.375rem",
                                  transition: "background 0.15s, color 0.15s",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = "#F9FAFB";
                                  e.currentTarget.style.color = "#0B1B3D";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = "transparent";
                                  e.currentTarget.style.color = "#374151";
                                }}
                              >
                                <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#C5963A", flexShrink: 0 }} />
                                {link.name}
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <Link
                            href={active.href}
                            onClick={() => setServicesOpen(false)}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              padding: "0.75rem 1.25rem",
                              background: "#0B1B3D",
                              color: "white",
                              fontWeight: 600,
                              fontSize: "0.875rem",
                              borderRadius: "0.375rem",
                              textDecoration: "none",
                            }}
                          >
                            Learn more
                            <ArrowRight style={{ width: "0.875rem", height: "0.875rem" }} />
                          </Link>
                        )}

                        <div style={{ marginTop: "2rem", padding: "1rem 1.25rem", background: "#F9FAFB", borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                          <p style={{ color: "#374151", fontSize: "0.875rem" }}>
                            Not sure which route is right for you? Book a free consultation with our team.
                          </p>
                          <Link
                            href="/consultation"
                            onClick={() => setServicesOpen(false)}
                            style={{
                              padding: "0.625rem 1.25rem",
                              background: "#C5963A",
                              color: "white",
                              fontWeight: 600,
                              fontSize: "0.8125rem",
                              borderRadius: "0.375rem",
                              textDecoration: "none",
                              whiteSpace: "nowrap",
                              flexShrink: 0,
                            }}
                          >
                            Book Free Consultation
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                style={{ color: "#0B1B3D", fontWeight: 500, textDecoration: "none" }}
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        <Link
          href="/consultation"
          style={{ display: "inline-flex", alignItems: "center", padding: "0.75rem 1.5rem", border: "2px solid #0B1B3D", color: "#0B1B3D", fontWeight: 600, fontSize: "0.875rem", borderRadius: "0.25rem", textDecoration: "none" }}
        >
          Get A Free Consultation
        </Link>
      </div>
    </header>
  );
}
