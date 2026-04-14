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
  Users,
  Building2,
  Briefcase,
  ArrowRight,
  XCircle,
} from "lucide-react";

export const metadata = {
  title: "Representative of an Overseas Business Visa UK | GIVS Law",
  description: "Expert guidance for Sole Representative visa holders. We support extensions, compliance, and settlement applications under the Representative of an Overseas Business route.",
};

export default function RepresentativeOverseasBusinessPage() {
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
            <span style={{ color: "#D1D5DB" }}>Representative of an Overseas Business Visa</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ color: "white" }}>
              <p style={{ color: "#C5963A", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>
                Work Visas
              </p>
              <h1 style={{ fontSize: "2.125rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Representative of an Overseas Business Visa
              </h1>
              <p style={{ fontSize: "1.0625rem", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                Expert legal guidance for existing Sole Representative visa holders in the UK.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#9CA3AF", lineHeight: 1.65, marginBottom: "2rem" }}>
                We support individuals and businesses with extensions, compliance, and settlement applications under the Sole Representative route.
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
              <Image src="/images/boardroom.jpg" alt="Business meeting for UK operations" fill style={{ objectFit: "cover" }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ IMPORTANT NOTICE ═══ */}
      <section style={{ background: "#FEF2F2", borderBottom: "1px solid #FECACA", padding: "1.5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem" }}>
            <AlertTriangle style={{ width: "1.375rem", height: "1.375rem", color: "#EF4444", flexShrink: 0, marginTop: "0.125rem" }} />
            <div>
              <p style={{ fontWeight: 700, color: "#991B1B", marginBottom: "0.375rem" }}>Important update on this visa route</p>
              <p style={{ color: "#374151", lineHeight: 1.75, fontSize: "0.9375rem", marginBottom: "0.5rem" }}>
                The Sole Representative visa route is now <strong>closed to new applicants</strong>.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                However, individuals who already hold a Representative of an Overseas Business visa can still apply to extend their stay and, when eligible, apply for settlement in the UK. It is important to meet all requirements carefully when applying for extensions or Indefinite Leave to Remain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section style={{ background: "white", borderBottom: "1px solid #E5E7EB" }}>
        <div className="container-main" style={{ padding: "1.125rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {[
              "Sole Representative specialists",
              "Extension and settlement support",
              "Strong application preparation",
              "Clear compliance guidance",
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
                <Image src="/images/london-building.jpg" alt="UK business district" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "#0B1B3D", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", zIndex: 10 }}>
                <p style={{ fontWeight: 700, fontSize: "1rem" }}>Business immigration experts</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>Work Visas</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
                Establishing a UK presence for an overseas business
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                The Representative of an Overseas Business visa, also known as the Sole Representative visa, allowed overseas companies without a UK presence to send a senior employee to establish and manage a UK branch or subsidiary.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                This route also applied to media representatives posted to the UK on long term assignments.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.75 }}>
                Although the route is now closed to new applicants, it remains relevant for those already in the UK under this category.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ELIGIBILITY ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            Who qualifies under this route?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1.25rem" }}>
            Applicants must meet strict eligibility requirements to qualify for extensions or settlement under this route.
          </p>

          <p style={{ color: "#0B1B3D", fontWeight: 600, marginBottom: "0.75rem" }}>Core requirements:</p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.5rem" }}>
            {[
              "You must be a senior employee of an overseas business or a media representative",
              "The overseas business must remain active and based outside the UK",
              "You must have been recruited outside the UK",
              "You must work full time for the overseas business and not undertake other employment",
              "You must meet maintenance and English language requirements",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#0B1B3D", flexShrink: 0, marginTop: "0.125rem" }} />
                {item}
              </li>
            ))}
          </ul>

          <p style={{ color: "#0B1B3D", fontWeight: 600, marginBottom: "0.75rem" }}>Additional requirements for Sole Representatives:</p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {[
              "You must have sufficient seniority, authority, and knowledge of the business",
              "You must not own or control the majority of the overseas business",
              "You must demonstrate a genuine commercial need for a UK presence",
              "You may be required to attend an interview",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#C5963A", flexShrink: 0, marginTop: "0.125rem" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ DURATION AND EXTENSIONS ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.5rem", textAlign: "center" }}>
            Visa duration and extensions
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", maxWidth: "640px", margin: "0 auto", marginBottom: "1.5rem" }}>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "2rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", textAlign: "center", borderTop: "4px solid #0B1B3D" }}>
              <Clock style={{ width: "1.5rem", height: "1.5rem", color: "#C5963A", margin: "0 auto 0.75rem" }} />
              <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1.5rem", marginBottom: "0.25rem" }}>3 years</p>
              <p style={{ color: "#374151", fontSize: "0.9375rem" }}>Initial visa period</p>
            </div>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "2rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", textAlign: "center", borderTop: "4px solid #C5963A" }}>
              <ArrowRight style={{ width: "1.5rem", height: "1.5rem", color: "#C5963A", margin: "0 auto 0.75rem" }} />
              <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1.5rem", marginBottom: "0.25rem" }}>+2 years</p>
              <p style={{ color: "#374151", fontSize: "0.9375rem" }}>Extension period</p>
            </div>
          </div>
          <div style={{ maxWidth: "640px", margin: "0 auto" }}>
            <div style={{ padding: "1rem 1.25rem", background: "#EFF6FF", borderRadius: "0.5rem", borderLeft: "4px solid #3B82F6" }}>
              <p style={{ color: "#1E40AF", fontWeight: 600, fontSize: "0.9375rem" }}>
                You must continue to meet all requirements at extension stage and show that the UK entity has been established and is actively trading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT YOU CAN DO ═══ */}
      <section style={{ padding: "4rem 0", background: "#F0FDF4", borderTop: "1px solid #D1FAE5", borderBottom: "1px solid #D1FAE5" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
            What can you do on this visa?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            This visa is specific to your role as a representative of the overseas business.
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              "Work only for the overseas business you represent",
              "Establish and manage the UK branch or subsidiary",
              "Study in the UK, subject to conditions",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#10B981", flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
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
                Can your family join you?
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                This route allows certain family members to join or remain with you in the UK.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {[
                  "Spouse or partner can apply as a dependant",
                  "Children under 18 can apply as dependants",
                  "Dependants must meet eligibility requirements",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151" }}>
                    <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#10B981", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SETTLEMENT ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            Can you settle in the UK?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1.25rem" }}>
            This route can lead to settlement in the UK. To qualify for Indefinite Leave to Remain, you must demonstrate:
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {[
              "You have completed 5 years of continuous residence in the UK",
              "You meet continuous residence requirements",
              "You have not exceeded absence limits",
              "You are still required for the role",
              "You meet English language and Life in the UK test requirements",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#10B981", flexShrink: 0, marginTop: "0.125rem" }} />
                {item}
              </li>
            ))}
          </ul>
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
              We provide clear and practical legal advice to support Sole Representative visa holders with extensions and settlement applications.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1.25rem" }}>
            {[
              { icon: Target, title: "Eligibility review", desc: "Detailed assessment for extensions and settlement" },
              { icon: FileCheck, title: "Strong applications", desc: "Support with preparing complete submissions" },
              { icon: ShieldCheck, title: "Document review", desc: "Checks to reduce risk of refusal" },
              { icon: MessageSquare, title: "Interview guidance", desc: "Preparation for Home Office interviews" },
              { icon: Building2, title: "Personal advice", desc: "Clear guidance for your situation" },
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

      {/* ═══ MID CTA ═══ */}
      <section style={{ background: "#C5963A", padding: "2.5rem 0" }}>
        <div className="container-main" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <p style={{ color: "white", fontWeight: 700, fontSize: "1.25rem" }}>Need help with your extension or settlement?</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}>Get expert advice on your Sole Representative visa application.</p>
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
            Common questions about this visa route
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              {
                q: "Can I still apply for a Sole Representative visa?",
                a: "No. The Sole Representative visa route is now closed to new applicants. However, existing visa holders can still apply to extend their stay or apply for settlement.",
              },
              {
                q: "How long can I stay in the UK on this visa?",
                a: "You can typically stay for an initial period of 3 years and extend for a further 2 years, provided you meet the requirements.",
              },
              {
                q: "Can I work for another employer?",
                a: "No. You must work only for the overseas business you represent.",
              },
              {
                q: "Can this visa lead to settlement?",
                a: "Yes. After 5 years in the UK, you may be eligible to apply for Indefinite Leave to Remain if you meet all requirements.",
              },
              {
                q: "How can GIVS Law help?",
                a: "We assist with eligibility assessments, extension applications, and settlement applications, ensuring your case is prepared correctly and meets Home Office requirements.",
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
            Need help with your Sole Representative visa?
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto 0.75rem", lineHeight: 1.7 }}>
            Our team can guide you through extensions and settlement applications, helping you meet all requirements with confidence.
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
