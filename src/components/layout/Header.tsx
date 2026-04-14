"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

const services = [
  { name: "Individual and Family Immigration", href: "/services/individual-and-family-immigration" },
  { name: "Working in the UK", href: "/services/working-in-the-uk" },
  { name: "British Citizenship", href: "/services/british-citizenship" },
  { name: "Corporate Immigration", href: "/services/corporate-immigration" },
  { name: "Investing in the UK", href: "/services/investing-in-the-uk" },
  { name: "Business Visitor Visa", href: "/services/business-visitor-visa" },
  { name: "Sponsor License Renewal", href: "/services/sponsor-license-renewal" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header style={{ background: "white", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", position: "sticky", top: 0, zIndex: 50 }}>
      <div className="container-main" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "5rem" }}>
        {/* Logo */}
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

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.name}
                style={{ position: "relative" }}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: "#0B1B3D", fontWeight: 500, textDecoration: "none", padding: "1.5rem 0" }}
                >
                  {link.name}
                  <ChevronDown style={{ width: "1rem", height: "1rem" }} />
                </Link>
                {servicesOpen && (
                  <div style={{ position: "absolute", top: "100%", left: 0, background: "white", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", borderRadius: "0.5rem", padding: "0.5rem 0", minWidth: "280px", zIndex: 100 }}>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        style={{ display: "block", padding: "0.625rem 1rem", fontSize: "0.875rem", color: "#374151", textDecoration: "none" }}
                      >
                        {service.name}
                      </Link>
                    ))}
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

        {/* CTA */}
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
