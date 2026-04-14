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
  Award,
  ArrowRight,
  Building2,
  Briefcase,
} from "lucide-react";

export const metadata = {
  title: "International Sportsperson Visa UK | GIVS Law",
  description: "Expert guidance on UK International Sportsperson visas. We support athletes, coaches, and organisations through sponsorship, eligibility, and application.",
};

export default function InternationalSportspersonVisaPage() {
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
            <span style={{ color: "#D1D5DB" }}>International Sportsperson Visa</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ color: "white" }}>
              <p style={{ color: "#C5963A", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>
                Work Visas
              </p>
              <h1 style={{ fontSize: "2.25rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem" }}>
                International Sportsperson Visa UK
              </h1>
              <p style={{ fontSize: "1.0625rem", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                Clear legal guidance for elite sportspersons and organisations looking to work in the UK.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#9CA3AF", lineHeight: 1.65, marginBottom: "2rem" }}>
                We support athletes, coaches, and organisations through every stage of the International Sportsperson visa process, from sponsorship to successful application.
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
              <Image src="/images/boardroom.jpg" alt="Sports organisation planning" fill style={{ objectFit: "cover" }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section style={{ background: "white", borderBottom: "1px solid #E5E7EB" }}>
        <div className="container-main" style={{ padding: "1.125rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {[
              "Sports immigration specialists",
              "Sponsor licence guidance",
              "Endorsement support",
              "Trusted by organisations",
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
                <Image src="/images/london-building.jpg" alt="UK sports venue" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "#0B1B3D", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", zIndex: 10 }}>
                <p style={{ fontWeight: 700, fontSize: "1rem" }}>Sportsperson visa specialists</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>Work Visas</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
                Work in the UK as an elite sportsperson or coach
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                The International Sportsperson visa allows non UK and non Irish nationals to work in the UK as elite athletes or qualified coaches.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                This route replaced earlier sporting visa categories and provides a structured pathway for internationally recognised individuals to contribute to UK sport.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.75 }}>
                Applications are carefully assessed, and both the organisation and the individual must meet strict requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHO IS THIS FOR ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "rgba(197,150,58,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Award style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A" }} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
                Who is this visa for?
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                This visa is designed for individuals who are internationally established in their sport and can make a significant contribution at the highest level in the UK.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.75 }}>
                It is suitable for both athletes and coaches who have been endorsed by the relevant governing body.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EMPLOYER REQUIREMENTS ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            Requirements for sponsoring organisations
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1.25rem" }}>
            To sponsor an individual under this route, the organisation must meet specific Home Office requirements.
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              "You must have a genuine role that needs to be filled",
              "The role must meet the required skill level",
              "The salary must meet the relevant minimum thresholds",
              "You must hold an International Sportsperson Sponsor Licence or be prepared to apply for one",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#0B1B3D", flexShrink: 0, marginTop: "0.125rem" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ APPLICANT ELIGIBILITY ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            Key eligibility requirements for applicants
          </h2>
          <p style={{ color: "#374151", marginBottom: "1.25rem" }}>
            Applicants must meet strict eligibility criteria before applying.
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              "Endorsement from the relevant governing body",
              "Confirmation that the individual is established at the highest level",
              "Evidence that they will contribute to the development of the sport in the UK",
              "English language requirement for visas longer than 12 months",
              "No serious criminal or immigration issues",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#C5963A", flexShrink: 0, marginTop: "0.125rem" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ DURATION AND SETTLEMENT ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.5rem", textAlign: "center" }}>
            Visa duration and long term options
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", textAlign: "center", borderTop: "3px solid #0B1B3D" }}>
              <Clock style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A", margin: "0 auto 0.5rem" }} />
              <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1.25rem" }}>Up to 5 years</p>
              <p style={{ color: "#6B7280", fontSize: "0.8125rem" }}>Initial visa duration</p>
            </div>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", textAlign: "center", borderTop: "3px solid #C5963A" }}>
              <ArrowRight style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A", margin: "0 auto 0.5rem" }} />
              <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1rem" }}>Extensions</p>
              <p style={{ color: "#6B7280", fontSize: "0.8125rem" }}>If you continue in the role</p>
            </div>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", textAlign: "center", borderTop: "3px solid #10B981" }}>
              <ShieldCheck style={{ width: "1.375rem", height: "1.375rem", color: "#10B981", margin: "0 auto 0.5rem" }} />
              <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1rem" }}>Settlement</p>
              <p style={{ color: "#6B7280", fontSize: "0.8125rem" }}>Eligible after 5 years</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CHANGING EMPLOYER ═══ */}
      <section style={{ padding: "4rem 0", background: "#FEF3C7", borderTop: "1px solid #FDE68A", borderBottom: "1px solid #FDE68A" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.25rem" }}>
            <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
              <AlertTriangle style={{ width: "1.375rem", height: "1.375rem", color: "#F59E0B" }} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
                Can a visa holder change employer?
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75 }}>
                This visa is linked to a specific role and sponsoring organisation.
              </p>
            </div>
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {[
              "Changing employer usually requires a new visa application",
              "Changes in role may also require a new application",
              "The new employer must be a licensed sponsor",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#92400E", flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ SPONSORSHIP PROCESS ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
            How does the sponsorship process work?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1.5rem" }}>
            Sponsoring an International Sportsperson involves several key steps.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { step: "1", text: "Confirm the role meets visa requirements" },
              { step: "2", text: "Apply for a Sponsor Licence if required" },
              { step: "3", text: "Assign a Certificate of Sponsorship" },
              { step: "4", text: "Applicant submits visa application with supporting documents" },
              { step: "5", text: "Biometric appointment may be required" },
            ].map((item) => (
              <div key={item.step} style={{ display: "flex", alignItems: "center", gap: "0.875rem", padding: "0.875rem 1rem", background: "#F9FAFB", borderRadius: "0.5rem", boxShadow: "0 1px 2px rgba(0,0,0,0.06)" }}>
                <span style={{ width: "1.75rem", height: "1.75rem", borderRadius: "50%", background: "#0B1B3D", color: "#C5963A", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.75rem", flexShrink: 0 }}>
                  {item.step}
                </span>
                <span style={{ color: "#374151", fontSize: "0.9375rem" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="section-label" style={{ justifyContent: "center", marginBottom: "0.75rem" }}>How We Help</p>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
              Why choose GIVS Law
            </h2>
            <p style={{ color: "#6B7280", maxWidth: "560px", margin: "0 auto" }}>
              We work closely with organisations and individuals to provide clear, practical immigration advice tailored to sporting careers and business needs.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1.25rem" }}>
            {[
              { icon: Target, title: "Correct route", desc: "Advice on the right visa category" },
              { icon: Building2, title: "Sponsor licence", desc: "Support with licence applications" },
              { icon: Award, title: "Endorsements", desc: "Guidance on governing body requirements" },
              { icon: FileCheck, title: "Visa applications", desc: "Help with documents and submission" },
              { icon: Users, title: "End to end", desc: "Support for organisations and individuals" },
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
            <p style={{ color: "white", fontWeight: 700, fontSize: "1.25rem" }}>Need to sponsor a sportsperson or coach?</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}>Get expert guidance on the International Sportsperson visa route.</p>
          </div>
          <Link href="/consultation" style={{ padding: "0.875rem 2rem", background: "white", color: "#0B1B3D", fontWeight: 700, borderRadius: "0.5rem", textDecoration: "none" }}>
            Book Free Consultation
          </Link>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Frequently Asked Questions</p>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "2rem" }}>
            Common questions about the International Sportsperson visa
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              {
                q: "When can an organisation sponsor someone?",
                a: "An organisation can sponsor an individual when it has a genuine role that meets the required skill and salary levels and holds a valid Sponsor Licence.",
              },
              {
                q: "What endorsement is required?",
                a: "Applicants must be endorsed by the relevant governing body to confirm they are established at the highest level and will contribute to the sport in the UK.",
              },
              {
                q: "How long can the visa last?",
                a: "The visa can be granted for up to 5 years, with the possibility of extension if the individual remains eligible.",
              },
              {
                q: "Can the visa lead to settlement?",
                a: "Yes. After 5 years in the UK, individuals may be able to apply for Indefinite Leave to Remain if they meet the requirements.",
              },
              {
                q: "How can GIVS Law help?",
                a: "We provide guidance at every stage, including sponsor licensing, eligibility checks, and application preparation, ensuring a smooth and compliant process.",
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
            Need support with an International Sportsperson visa?
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto 0.75rem", lineHeight: 1.7 }}>
            Our team can guide you through sponsorship, eligibility, and the application process to ensure everything is handled correctly.
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
