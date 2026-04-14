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
  XCircle,
  Clock,
  GraduationCap,
  Users,
  Briefcase,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Graduate Route Visa UK | GIVS Law",
  description: "Expert UK Graduate Route visa guidance. We help international students stay and work in the UK after their studies with clear advice and strong application support.",
};

export default function GraduateRoutePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section style={{ background: "#0B1B3D" }}>
        <div className="container-main" style={{ padding: "4rem 1.5rem 3.5rem" }}>
          <nav style={{ display: "flex", gap: "0.375rem", fontSize: "0.75rem", color: "#9CA3AF", marginBottom: "2rem" }}>
            <Link href="/" style={{ color: "#9CA3AF", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/services" style={{ color: "#9CA3AF", textDecoration: "none" }}>Work Visas</Link>
            <span>/</span>
            <span style={{ color: "#D1D5DB" }}>Graduate Route Visa UK</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ color: "white" }}>
              <p style={{ color: "#C5963A", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>
                Work Visas
              </p>
              <h1 style={{ fontSize: "2.25rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Graduate Route Visa UK
              </h1>
              <p style={{ fontSize: "1.0625rem", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                Stay and work in the UK after your studies with clear and practical legal guidance.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#9CA3AF", lineHeight: 1.65, marginBottom: "2rem" }}>
                We help international students understand the Graduate route, meet the requirements, and submit strong applications with confidence.
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
              <Image src="/images/student-laptop.jpg" alt="Graduate working in the UK" fill style={{ objectFit: "cover" }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section style={{ background: "white", borderBottom: "1px solid #E5E7EB" }}>
        <div className="container-main" style={{ padding: "1.125rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {[
              "Experienced graduate visa advisers",
              "Clear eligibility guidance",
              "Strong application preparation",
              "Trusted support for students",
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
                <Image src="/images/about-woman.jpg" alt="Graduate visa advisor" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "#0B1B3D", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", zIndex: 10 }}>
                <p style={{ fontWeight: 700, fontSize: "1rem" }}>Graduate visa specialists</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>Work Visas</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
                Stay in the UK after completing your studies
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                The Graduate route allows international students who have successfully completed an eligible course in the UK to remain in the country for a further period to work or look for work.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                Applications are carefully assessed by the Home Office, and failure to meet the eligibility or documentation requirements can result in refusal.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.75 }}>
                Our team provides clear and practical guidance to help you prepare a strong application and avoid unnecessary risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ELIGIBILITY ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            Who can apply for the Graduate visa?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1.25rem" }}>
            To qualify, you must have successfully completed your studies in the UK with an approved education provider and meet all eligibility conditions at the time of application.
          </p>

          <p style={{ color: "#0B1B3D", fontWeight: 600, marginBottom: "0.75rem" }}>Core requirements:</p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.5rem" }}>
            {[
              "You must have studied with a UK Higher Education provider with an A rated Student sponsor licence",
              "You must have successfully completed the course you were sponsored to study",
              "You must have studied in the UK for at least 12 months, or the full course duration if shorter",
              "Your qualification must be an eligible degree or approved professional qualification",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#0B1B3D", flexShrink: 0, marginTop: "0.125rem" }} />
                {item}
              </li>
            ))}
          </ul>

          <p style={{ color: "#0B1B3D", fontWeight: 600, marginBottom: "0.75rem" }}>Eligible qualifications may include:</p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
            {[
              "UK bachelor's or postgraduate degrees",
              "Legal qualification routes such as LPC or Bar courses",
              "Medical or dental foundation programmes",
              "PGCE or PGDE teaching qualifications",
              "Other regulated professional qualifications at degree level or above",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#C5963A", flexShrink: 0, marginTop: "0.125rem" }} />
                {item}
              </li>
            ))}
          </ul>

          <p style={{ color: "#0B1B3D", fontWeight: 600, marginBottom: "0.75rem" }}>Additional requirements:</p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
            {[
              "You must not have previously held a Graduate visa or Doctorate Extension Scheme leave",
              "If sponsored by a government or scholarship agency, written consent may be required",
              "Your application must be submitted from within the UK while you still hold valid Student permission",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#6B7280", flexShrink: 0, marginTop: "0.125rem" }} />
                {item}
              </li>
            ))}
          </ul>

          <div style={{ padding: "1rem 1.25rem", background: "#EFF6FF", borderRadius: "0.5rem", borderLeft: "4px solid #3B82F6" }}>
            <p style={{ color: "#1E40AF", fontWeight: 600, fontSize: "0.9375rem" }}>
              Not sure if your qualification is eligible? Our team can check your eligibility and advise you before you apply.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ DURATION ═══ */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container-main">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.5rem", textAlign: "center" }}>
            How long can you stay in the UK?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", maxWidth: "640px", margin: "0 auto", marginBottom: "1.5rem" }}>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "2rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", textAlign: "center", borderTop: "4px solid #0B1B3D" }}>
              <GraduationCap style={{ width: "1.5rem", height: "1.5rem", color: "#C5963A", margin: "0 auto 0.75rem" }} />
              <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1.5rem", marginBottom: "0.25rem" }}>2 years</p>
              <p style={{ color: "#374151", fontSize: "0.9375rem" }}>Bachelor&apos;s and master&apos;s graduates</p>
            </div>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "2rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", textAlign: "center", borderTop: "4px solid #C5963A" }}>
              <GraduationCap style={{ width: "1.5rem", height: "1.5rem", color: "#C5963A", margin: "0 auto 0.75rem" }} />
              <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1.5rem", marginBottom: "0.25rem" }}>3 years</p>
              <p style={{ color: "#374151", fontSize: "0.9375rem" }}>PhD or doctorate level graduates</p>
            </div>
          </div>
          <div style={{ maxWidth: "640px", margin: "0 auto" }}>
            <div style={{ padding: "0.875rem 1.25rem", background: "#FEF3C7", borderRadius: "0.5rem", borderLeft: "4px solid #F59E0B" }}>
              <p style={{ color: "#92400E", fontWeight: 600, fontSize: "0.9375rem" }}>
                This visa cannot be extended. However, you may be able to switch into another immigration route before it expires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT YOU CAN DO ═══ */}
      <section style={{ padding: "4rem 0", background: "#F0FDF4", borderTop: "1px solid #D1FAE5", borderBottom: "1px solid #D1FAE5" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            What can you do on a Graduate visa?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1.25rem" }}>
            The Graduate route offers flexibility, allowing you to work and gain experience in the UK.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }}>
            {[
              "Work in most types of employment",
              "Be self employed or undertake freelance work",
              "Carry out voluntary work",
              "Look for long term employment opportunities",
              "Study further, subject to conditions",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#10B981", flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "#374151" }}>
            <XCircle style={{ width: "1.125rem", height: "1.125rem", color: "#EF4444", flexShrink: 0 }} />
            <span>You cannot work as a professional sportsperson</span>
          </div>
        </div>
      </section>

      {/* ═══ MID CTA ═══ */}
      <section style={{ background: "#C5963A", padding: "2.5rem 0" }}>
        <div className="container-main" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <p style={{ color: "white", fontWeight: 700, fontSize: "1.25rem" }}>Finishing your studies soon?</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}>Get expert guidance on your Graduate visa application today.</p>
          </div>
          <Link href="/consultation" style={{ padding: "0.875rem 2rem", background: "white", color: "#0B1B3D", fontWeight: 700, borderRadius: "0.5rem", textDecoration: "none" }}>
            Book Free Consultation
          </Link>
        </div>
      </section>

      {/* ═══ FAMILY ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
            <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "rgba(197,150,58,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Users style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A" }} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1rem" }}>
                Can your family stay with you?
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                Family members can only remain in the UK under this route in limited circumstances.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1rem" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                  <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#10B981", flexShrink: 0, marginTop: "0.125rem" }} />
                  Dependants can extend their stay if they were already your dependants under your Student visa
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                  <XCircle style={{ width: "1.125rem", height: "1.125rem", color: "#EF4444", flexShrink: 0, marginTop: "0.125rem" }} />
                  New dependants cannot usually be added under the Graduate route
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SETTLEMENT ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1rem" }}>
            Does the Graduate route lead to settlement?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            The Graduate visa does not directly lead to settlement in the UK.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.75 }}>
            However, it can provide a pathway to switch into other immigration routes that do lead to settlement, such as the Skilled Worker visa.
          </p>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="section-label" style={{ justifyContent: "center", marginBottom: "0.75rem" }}>How We Help</p>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
              Why choose GIVS Law
            </h2>
            <p style={{ color: "#6B7280", maxWidth: "560px", margin: "0 auto" }}>
              We provide clear, practical, and reliable legal advice to help you make a successful transition from study to work in the UK.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1.25rem" }}>
            {[
              { icon: MessageSquare, title: "Eligibility advice", desc: "Clear guidance on requirements" },
              { icon: FileCheck, title: "Application support", desc: "Help preparing and submitting" },
              { icon: Target, title: "Document review", desc: "Reduce risk of refusal" },
              { icon: ArrowRight, title: "Long term routes", desc: "Guidance on switching visas" },
              { icon: ShieldCheck, title: "Personal advice", desc: "Tailored to your situation" },
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

      {/* ═══ FAQ ═══ */}
      <section style={{ padding: "5rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Frequently Asked Questions</p>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "2rem" }}>
            Common questions about the Graduate Route
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              {
                q: "What is the Graduate Route visa?",
                a: "The Graduate route allows international students who have completed an eligible course in the UK to stay for two or three years to work or look for work.",
              },
              {
                q: "Can I extend my Graduate visa?",
                a: "No. The Graduate visa cannot be extended. However, you may be able to switch into another visa category before it expires.",
              },
              {
                q: "Can I work in the UK on this visa?",
                a: "Yes. You can work in most roles, including self employment and voluntary work, but you cannot work as a professional sportsperson.",
              },
              {
                q: "Can I bring family members?",
                a: "Only dependants who were already in the UK under your Student visa can usually extend their stay. New dependants cannot normally be added.",
              },
              {
                q: "Does this visa lead to settlement?",
                a: "No. The Graduate route does not lead directly to settlement, but it can allow you to switch into another route that does.",
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
            Ready to apply for the Graduate Route visa?
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto 0.75rem", lineHeight: 1.7 }}>
            Our team can guide you through the requirements, review your eligibility, and help you submit a strong application.
          </p>
          <p style={{ color: "#9CA3AF", fontSize: "0.9375rem", marginBottom: "2rem" }}>
            Speak to GIVS Law today for clear and practical immigration advice.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            <Link href="/consultation" style={{ padding: "0.875rem 2.5rem", background: "#C5963A", color: "white", fontWeight: 700, borderRadius: "0.5rem", textDecoration: "none", fontSize: "1.0625rem" }}>
              Book Free Consultation
            </Link>
            <a href="tel:+441156547274" style={{ padding: "0.875rem 2.5rem", border: "2px solid white", color: "white", fontWeight: 600, borderRadius: "0.5rem", textDecoration: "none", fontSize: "1.0625rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <Phone style={{ width: "1rem", height: "1rem" }} /> Call Now
            </a>
          </div>
          <a href="tel:+441156547274" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#D1D5DB", textDecoration: "none", fontSize: "0.9375rem" }}>
            <Phone style={{ width: "1rem", height: "1rem", color: "#C5963A" }} />
            +44 115 654 7274
          </a>
        </div>
      </section>
    </>
  );
}
