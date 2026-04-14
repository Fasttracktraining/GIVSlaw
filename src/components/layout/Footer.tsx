import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { name: "Individual and family immigration", href: "/services/individual-and-family-immigration" },
  { name: "Working in the UK", href: "/services/working-in-the-uk" },
  { name: "British Citizenship", href: "/services/british-citizenship" },
  { name: "Corporate Immigration", href: "/services/corporate-immigration" },
  { name: "Investing in the UK", href: "/services/investing-in-the-uk" },
  { name: "Business Visitor Visa", href: "/services/business-visitor-visa" },
  { name: "Sponsor License Renewal", href: "/services/sponsor-license-renewal" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0B1B3D", color: "white" }}>
      {/* Main */}
      <div className="container-main" style={{ padding: "4rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "2.5rem" }}>
          {/* Logo + Tagline */}
          <div>
            <Image src="/images/logo-white.png" alt="GIVS Law" width={160} height={53} style={{ height: "4rem", width: "auto", marginBottom: "1rem" }} />
            <p style={{ color: "#D1D5DB", fontSize: "0.875rem", marginTop: "1rem" }}>
              Your Global Journey Starts Here<br />With Your Trusted Visa Experts
            </p>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem" }}>
              {["tiktok", "facebook", "instagram", "youtube"].map((name) => (
                <a key={name} href="#" aria-label={name} style={{ width: "2.25rem", height: "2.25rem", borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <SocialIcon name={name} />
                </a>
              ))}
            </div>
          </div>

          {/* IAA Badge */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
            <Image src="/images/iaa-badge.png" alt="Immigration Advice Authority" width={200} height={200} style={{ height: "auto", width: "12rem" }} />
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "1rem" }}>Quick Links</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ color: "#D1D5DB", fontSize: "0.875rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ width: "0.5rem", height: "0.5rem", background: "#C5963A", display: "inline-block" }} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "1rem" }}>Contact Us</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <MapPin style={{ width: "1.25rem", height: "1.25rem", color: "#C5963A", flexShrink: 0, marginTop: "0.125rem" }} />
                <span style={{ color: "#D1D5DB", fontSize: "0.875rem" }}>
                  Charterspace, Concorde Business Centre, Nottingham Road, Nottingham, NG7 7FF<br />United Kingdom(UK)
                </span>
              </li>
              <li>
                <a href="tel:+441156547274" style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#D1D5DB", fontSize: "0.875rem", textDecoration: "none" }}>
                  <Phone style={{ width: "1.25rem", height: "1.25rem", color: "#C5963A", flexShrink: 0 }} />
                  +441156547274
                </a>
              </li>
              <li>
                <a href="mailto:contact@givslaw.com" style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#D1D5DB", fontSize: "0.875rem", textDecoration: "none" }}>
                  <Mail style={{ width: "1.25rem", height: "1.25rem", color: "#C5963A", flexShrink: 0 }} />
                  contact@givslaw.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="container-main" style={{ padding: "1rem 1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", fontSize: "0.875rem", color: "#9CA3AF" }}>
          <span>Copyright &copy; {new Date().getFullYear()} All Rights Reserved.</span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/complaints" style={{ color: "#9CA3AF", textDecoration: "none", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Complaints</Link>
            <Link href="/privacy" style={{ color: "#9CA3AF", textDecoration: "none", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Privacy and GDPR</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const s = { width: "1rem", height: "1rem", fill: "white" };
  switch (name) {
    case "tiktok":
      return <svg style={s} viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.33-6.33V9.18a8.16 8.16 0 0 0 3.89.99V6.69Z"/></svg>;
    case "facebook":
      return <svg style={s} viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
    case "instagram":
      return <svg style={s} viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>;
    case "youtube":
      return <svg style={s} viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;
    default:
      return null;
  }
}
