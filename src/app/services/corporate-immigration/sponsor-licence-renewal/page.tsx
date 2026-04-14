import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  FileCheck,
  Target,
  MessageSquare,
  ChevronDown,
  AlertTriangle,
  Clock,
  Building2,
  Users,
  XCircle,
} from "lucide-react";

export const metadata = {
  title: "Sponsor Licence Renewal UK | GIVS Law",
  description: "Expert sponsor licence renewal support for UK businesses. We help you renew on time, maintain compliance, and avoid disruption to your workforce.",
};

export default function SponsorLicenceRenewalPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section style={{ background: "#0B1B3D" }}>
        <div className="container-main" style={{ padding: "4rem 1.5rem 3.5rem" }}>
          <nav style={{ display: "flex", gap: "0.375rem", fontSize: "0.75rem", color: "#9CA3AF", marginBottom: "2rem" }}>
            <Link href="/" style={{ color: "#9CA3AF", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/services" style={{ color: "#9CA3AF", textDecoration: "none" }}>Services</Link>
            <span>/</span>
            <Link href="/services/corporate-immigration" style={{ color: "#9CA3AF", textDecoration: "none" }}>Corporate Immigration</Link>
            <span>/</span>
            <span style={{ color: "#D1D5DB" }}>Sponsor Licence Renewal</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ color: "white" }}>
              <p style={{ color: "#C5963A", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>
                Corporate Immigration
              </p>
              <h1 style={{ fontSize: "2.25rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Sponsor Licence Renewal
              </h1>
              <p style={{ fontSize: "1.0625rem", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                Protect your ability to sponsor international workers by renewing your licence on time.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#9CA3AF", lineHeight: 1.65, marginBottom: "2rem" }}>
                We help businesses prepare for renewal, maintain compliance, and avoid disruption to their workforce.
              </p>
              <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                <Link href="/consultation" style={{ padding: "0.875rem 2rem", background: "#C5963A", color: "white", fontWeight: 700, borderRadius: "0.5rem", textDecoration: "none", fontSize: "0.9375rem" }}>
                  Book Free Consultation
                </Link>
                <Link href="/contact" style={{ padding: "0.875rem 2rem", border: "2px solid rgba(255,255,255,0.6)", color: "white", fontWeight: 600, borderRadius: "0.5rem", textDecoration: "none", fontSize: "0.9375rem" }}>
                  Contact Us
                </Link>
              </div>
              <a href="tel:+441156547274" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#D1D5DB", textDecoration: "none", fontSize: "0.875rem" }}>
                <Phone style={{ width: "0.875rem", height: "0.875rem", color: "#C5963A" }} />
                Call now: +44 115 654 7274
              </a>
            </div>
            <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "0.75rem", overflow: "hidden" }}>
              <Image src="/images/boardroom.jpg" alt="Business team reviewing sponsor licence" fill style={{ objectFit: "cover" }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section style={{ background: "white", borderBottom: "1px solid #E5E7EB" }}>
        <div className="container-main" style={{ padding: "1.125rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {[
              "Experienced compliance advisers",
              "Licence renewal specialists",
              "HR and audit support",
              "Trusted by UK businesses",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", color: "#374151", fontSize: "0.8125rem", fontWeight: 500 }}>
                <CheckCircle2 style={{ width: "0.9375rem", height: "0.9375rem", color: "#C5963A", flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INTRO ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div style={{ position: "relative", maxWidth: "460px" }}>
              <div style={{ position: "relative", aspectRatio: "5/6", borderRadius: "0.75rem", overflow: "hidden" }}>
                <Image src="/images/london-building.jpg" alt="UK business compliance" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "#0B1B3D", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", zIndex: 10 }}>
                <p style={{ fontWeight: 700, fontSize: "1rem" }}>Renewal and compliance experts</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>Sponsor Compliance</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
                Keep your licence active and your business protected
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                A UK sponsor licence is granted for a period of four years. Before it expires, your business must apply to renew it to continue sponsoring migrant workers.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                The renewal process is not automatic. It requires careful preparation, up to date records, and evidence that your business continues to meet its sponsor duties.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.75 }}>
                At GIVS Law, we help businesses plan ahead, review their compliance, and submit renewal applications with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY IT MATTERS ═══ */}
      <section style={{ padding: "4rem 0", background: "#FEF2F2", borderTop: "1px solid #FECACA", borderBottom: "1px solid #FECACA" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
              <AlertTriangle style={{ width: "1.375rem", height: "1.375rem", color: "#EF4444" }} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
                Why sponsor licence renewal matters
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75 }}>
                If your licence is not renewed before it expires, the consequences for your business can be serious and immediate.
              </p>
            </div>
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {[
              "Your sponsor licence will expire automatically",
              "You will not be able to sponsor new employees",
              "Existing sponsored workers may have their visas curtailed",
              "Your business may face disruption to operations and projects",
              "You would need to apply for a new licence from scratch",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                <XCircle style={{ width: "1.125rem", height: "1.125rem", color: "#EF4444", flexShrink: 0, marginTop: "0.125rem" }} />
                {item}
              </li>
            ))}
          </ul>
          <div style={{ padding: "1rem 1.25rem", background: "white", borderRadius: "0.5rem", borderLeft: "4px solid #EF4444" }}>
            <p style={{ color: "#991B1B", fontWeight: 600, fontSize: "0.9375rem" }}>
              We recommend beginning the renewal process at least three months before your licence expiry date.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ HOW WE HELP ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="section-label" style={{ justifyContent: "center", marginBottom: "0.75rem" }}>How We Help</p>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
              Your compliance and renewal partner
            </h2>
            <p style={{ color: "#6B7280", maxWidth: "560px", margin: "0 auto" }}>
              We support businesses through every aspect of the renewal process, ensuring your records, systems, and processes meet Home Office expectations.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1.25rem" }}>
            {[
              { icon: MessageSquare, title: "Sponsor duties", desc: "Advice on your ongoing responsibilities" },
              { icon: FileCheck, title: "HR systems", desc: "Review of your processes and records" },
              { icon: ShieldCheck, title: "Compliance audit", desc: "Right to work checks and migrant records" },
              { icon: Users, title: "Staff training", desc: "Training to meet Home Office standards" },
              { icon: Target, title: "Reporting", desc: "Help with monitoring and reporting obligations" },
            ].map((card) => (
              <div key={card.title} style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", textAlign: "center" }}>
                <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "50%", background: "rgba(197,150,58,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.75rem" }}>
                  <card.icon style={{ width: "1.25rem", height: "1.25rem", color: "#C5963A" }} />
                </div>
                <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "0.875rem", marginBottom: "0.25rem" }}>{card.title}</p>
                <p style={{ color: "#6B7280", fontSize: "0.75rem", lineHeight: 1.5 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THE RENEWAL PROCESS ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
            How the renewal process works
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1.5rem" }}>
            The renewal application is submitted through the Home Office&apos;s Sponsor Management System. The process must be completed before your current licence expires.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {[
              { step: "1", text: "Review your current compliance position and identify any gaps" },
              { step: "2", text: "Update your records, key personnel details, and supporting documents" },
              { step: "3", text: "Submit the renewal request through the Sponsor Management System" },
              { step: "4", text: "Respond to any Home Office queries or requests for information" },
            ].map((item) => (
              <div key={item.step} style={{ display: "flex", alignItems: "center", gap: "0.875rem", padding: "0.875rem 1rem", background: "white", borderRadius: "0.5rem", boxShadow: "0 1px 2px rgba(0,0,0,0.06)" }}>
                <span style={{ width: "1.75rem", height: "1.75rem", borderRadius: "50%", background: "#0B1B3D", color: "#C5963A", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.75rem", flexShrink: 0 }}>
                  {item.step}
                </span>
                <span style={{ color: "#374151", fontSize: "0.9375rem" }}>{item.text}</span>
              </div>
            ))}
          </div>

          <div style={{ padding: "1rem 1.25rem", background: "#EFF6FF", borderRadius: "0.5rem", borderLeft: "4px solid #3B82F6" }}>
            <p style={{ color: "#1E40AF", fontWeight: 600, fontSize: "0.9375rem" }}>
              You can apply to renew your licence up to three months before the expiry date. We recommend starting as early as possible to allow time for preparation.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ HOME OFFICE CHECKS ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "rgba(197,150,58,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Building2 style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A" }} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
                What the Home Office reviews
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75 }}>
                During the renewal process, the Home Office will assess several areas of your business to ensure you continue to meet your sponsor obligations.
              </p>
            </div>
          </div>

          <p style={{ color: "#0B1B3D", fontWeight: 600, marginBottom: "0.75rem" }}>Areas typically reviewed include:</p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "2rem" }}>
            {[
              "Your immigration activity and use of Certificates of Sponsorship",
              "Your key personnel and authorising officer details",
              "Any required registrations or professional accreditations",
              "Your business structure and any changes in ownership",
              "Your record keeping and right to work processes",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#C5963A", flexShrink: 0, marginTop: "0.125rem" }} />
                {item}
              </li>
            ))}
          </ul>

          <p style={{ color: "#0B1B3D", fontWeight: 600, marginBottom: "0.75rem" }}>The Home Office may:</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
            {[
              { label: "Approve", desc: "Grant renewal of your licence", color: "#10B981", bg: "#F0FDF4" },
              { label: "Request documents", desc: "Ask for additional supporting evidence", color: "#F59E0B", bg: "#FFFBEB" },
              { label: "Conduct a visit", desc: "Carry out an on site compliance inspection", color: "#3B82F6", bg: "#EFF6FF" },
            ].map((item) => (
              <div key={item.label} style={{ background: item.bg, borderRadius: "0.5rem", padding: "1.25rem", textAlign: "center", borderTop: `3px solid ${item.color}` }}>
                <p style={{ fontWeight: 700, color: "#0B1B3D", marginBottom: "0.25rem" }}>{item.label}</p>
                <p style={{ color: "#6B7280", fontSize: "0.8125rem", lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MID CTA ═══ */}
      <section style={{ background: "#C5963A", padding: "2.5rem 0" }}>
        <div className="container-main" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <p style={{ color: "white", fontWeight: 700, fontSize: "1.25rem" }}>Is your sponsor licence due for renewal?</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}>Start preparing now to avoid disruption to your business.</p>
          </div>
          <Link href="/consultation" style={{ padding: "0.875rem 2rem", background: "white", color: "#0B1B3D", fontWeight: 700, borderRadius: "0.5rem", textDecoration: "none" }}>
            Book Free Consultation
          </Link>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section style={{ padding: "5rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Frequently Asked Questions</p>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "2rem" }}>
            Common questions about sponsor licence renewal
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              {
                q: "When should I apply to renew my sponsor licence?",
                a: "You can apply to renew up to three months before your licence expiry date. We recommend starting the preparation process well in advance to ensure everything is in order.",
              },
              {
                q: "What happens if I do not renew in time?",
                a: "If your licence expires without renewal, it will lapse automatically. You will no longer be able to sponsor new workers, and existing sponsored employees may have their visas curtailed. You would need to apply for a new licence from scratch.",
              },
              {
                q: "How is the renewal application submitted?",
                a: "The renewal request is submitted through the Home Office's Sponsor Management System by an authorised user within your business. We can guide you through the process step by step.",
              },
              {
                q: "What does the Home Office check during renewal?",
                a: "The Home Office reviews your immigration activity, key personnel, business structure, registrations, and compliance with sponsor duties. They may also request documents or conduct a compliance visit.",
              },
              {
                q: "Can the Home Office refuse a renewal?",
                a: "Yes. If the Home Office finds that your business has not met its sponsor obligations or there are compliance issues, the renewal may be refused. Proper preparation significantly reduces this risk.",
              },
              {
                q: "How can GIVS Law help with renewal?",
                a: "We help by reviewing your compliance position, auditing your records, preparing your application, and advising you on any changes needed before submission. We also provide staff training and ongoing compliance support.",
              },
              {
                q: "How long does the renewal process take?",
                a: "Processing times can vary depending on the complexity of your case and whether the Home Office requests additional information or conducts a visit. Starting early gives you the best chance of a smooth process.",
              },
            ].map((faq, i) => (
              <details key={i} style={{ background: "white", borderRadius: "0.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", overflow: "hidden" }}>
                <summary style={{ padding: "1.25rem 1.5rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", fontWeight: 600, color: "#0B1B3D", fontSize: "0.9375rem", listStyle: "none" }}>
                  {faq.q}
                  <ChevronDown style={{ width: "1.25rem", height: "1.25rem", color: "#9CA3AF", flexShrink: 0 }} />
                </summary>
                <div style={{ padding: "0 1.5rem 1.25rem" }}>
                  <p style={{ color: "#6B7280", lineHeight: 1.75, fontSize: "0.9375rem" }}>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section style={{ background: "#0B1B3D", padding: "4rem 0" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
            Protect your sponsor licence today
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto 0.75rem", lineHeight: 1.7 }}>
            Our team can review your compliance position, prepare your renewal application, and ensure your business is ready for any Home Office assessment.
          </p>
          <p style={{ color: "#9CA3AF", fontSize: "0.9375rem", marginBottom: "2rem" }}>
            Your Global Journey Starts Here With Your Trusted Visa Experts
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            <Link href="/consultation" style={{ padding: "0.875rem 2.5rem", background: "#C5963A", color: "white", fontWeight: 700, borderRadius: "0.5rem", textDecoration: "none", fontSize: "1.0625rem" }}>
              Book Free Consultation
            </Link>
            <a href="tel:+441156547274" style={{ padding: "0.875rem 2.5rem", border: "2px solid white", color: "white", fontWeight: 600, borderRadius: "0.5rem", textDecoration: "none", fontSize: "1.0625rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <Phone style={{ width: "1rem", height: "1rem" }} /> Call Now
            </a>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
            <a href="tel:+441156547274" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#D1D5DB", textDecoration: "none", fontSize: "0.9375rem" }}>
              <Phone style={{ width: "1rem", height: "1rem", color: "#C5963A" }} />
              +44 115 654 7274
            </a>
            <a href="mailto:contact@givslaw.com" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#D1D5DB", textDecoration: "none", fontSize: "0.9375rem" }}>
              <Mail style={{ width: "1rem", height: "1rem", color: "#C5963A" }} />
              contact@givslaw.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
