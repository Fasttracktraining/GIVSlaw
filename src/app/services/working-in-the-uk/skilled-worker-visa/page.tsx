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
  Clock,
  Users,
  Building2,
  Briefcase,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

export const metadata = {
  title: "Skilled Worker Visa UK | GIVS Law",
  description: "Expert guidance on UK Skilled Worker Visa applications. We help employers and employees navigate sponsorship, eligibility, salary requirements, and settlement.",
};

export default function SkilledWorkerVisaPage() {
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
            <span style={{ color: "#D1D5DB" }}>Skilled Worker Visa</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ color: "white" }}>
              <p style={{ color: "#C5963A", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>
                Work Visas
              </p>
              <h1 style={{ fontSize: "2.25rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Skilled Worker Visa
              </h1>
              <p style={{ fontSize: "1.0625rem", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                The UK&apos;s main work visa route for skilled professionals and the employers who sponsor them.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#9CA3AF", lineHeight: 1.65, marginBottom: "2rem" }}>
                We guide both employers and employees through the Skilled Worker visa process with clear advice, strong applications, and practical support at every stage.
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
              <Image src="/images/boardroom.jpg" alt="Skilled worker in UK workplace" fill style={{ objectFit: "cover" }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section style={{ background: "white", borderBottom: "1px solid #E5E7EB" }}>
        <div className="container-main" style={{ padding: "1.125rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {[
              "Experienced work visa advisers",
              "Employer and employee support",
              "Strong application preparation",
              "Clear salary and eligibility guidance",
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
                <p style={{ fontWeight: 700, fontSize: "1rem" }}>Skilled Worker visa specialists</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>Work Visas</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
                The UK&apos;s main route for skilled employment
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                The Skilled Worker visa is the primary route for employers to bring skilled workers to the UK or for individuals already in the UK to switch into sponsored employment.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                This visa allows you to live and work in the UK for up to five years, with the possibility of extending and eventually applying for permanent residence.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.75 }}>
                Our team provides clear guidance to help both employers and applicants navigate the requirements and submit strong, compliant applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT IS IT ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
            What is a Skilled Worker visa?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1.5rem" }}>
            A Skilled Worker visa gives you permission to live in the UK and work for your sponsoring employer for up to five years. It is the most widely used work visa route in the UK immigration system.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
            {[
              { icon: Clock, label: "Up to 5 years", desc: "Initial visa duration", color: "#0B1B3D" },
              { icon: Users, label: "Family included", desc: "Partner and children can join", color: "#C5963A" },
              { icon: ShieldCheck, label: "Settlement route", desc: "ILR after 5 years residence", color: "#10B981" },
            ].map((card) => (
              <div key={card.label} style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", textAlign: "center", borderTop: `3px solid ${card.color}` }}>
                <card.icon style={{ width: "1.375rem", height: "1.375rem", color: card.color, margin: "0 auto 0.5rem" }} />
                <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1rem" }}>{card.label}</p>
                <p style={{ color: "#6B7280", fontSize: "0.8125rem" }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ELIGIBILITY ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            What are the eligibility requirements?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "2rem" }}>
            Both the employer and the applicant must meet specific requirements. The Home Office assesses each application carefully, and missing any requirement can result in refusal.
          </p>

          {/* Sponsorship */}
          <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", borderLeft: "4px solid #0B1B3D", marginBottom: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
              <Building2 style={{ width: "1.25rem", height: "1.25rem", color: "#0B1B3D" }} />
              <h3 style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1rem" }}>Sponsorship</h3>
            </div>
            <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "0.75rem" }}>
              Your employer must hold a valid UK Sponsor Licence and assign a Certificate of Sponsorship to you. This is an electronic record containing details of the role being offered.
            </p>
            <p style={{ color: "#6B7280", fontSize: "0.9375rem" }}>
              If the employer does not yet have a Sponsor Licence, they must obtain one before your application can proceed.
            </p>
          </div>

          {/* Skill Level */}
          <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", borderLeft: "4px solid #C5963A", marginBottom: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
              <Briefcase style={{ width: "1.25rem", height: "1.25rem", color: "#C5963A" }} />
              <h3 style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1rem" }}>Skill level</h3>
            </div>
            <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "0.75rem" }}>
              The role must be at or above RQF Level 3, which is equivalent to a UK A Level. Your employer must select an occupation code that matches the role, and this code must meet the minimum skill level.
            </p>
          </div>

          {/* Salary */}
          <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", borderLeft: "4px solid #10B981", marginBottom: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
              <Target style={{ width: "1.25rem", height: "1.25rem", color: "#10B981" }} />
              <h3 style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1rem" }}>Salary</h3>
            </div>
            <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "0.75rem" }}>
              The general minimum salary threshold is <strong style={{ color: "#0B1B3D" }}>£38,700</strong> and <strong style={{ color: "#0B1B3D" }}>£15.88 per hour</strong> where no salary discounts are available.
            </p>
            <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "0.75rem" }}>
              The exact minimum depends on several factors, including your occupation code, whether you qualify as a New Entrant, and whether the role appears on the shortage occupation list.
            </p>
            <p style={{ color: "#6B7280", fontSize: "0.9375rem" }}>
              The required salary may be higher depending on your specific role and working hours.
            </p>
          </div>

          {/* English Language */}
          <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", borderLeft: "4px solid #3B82F6" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
              <GraduationCap style={{ width: "1.25rem", height: "1.25rem", color: "#3B82F6" }} />
              <h3 style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1rem" }}>English language</h3>
            </div>
            <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "0.75rem" }}>
              You must meet the English language requirement. This can be satisfied in several ways:
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                "Being a national of a majority English speaking country listed by the Home Office",
                "Having a degree taught in English, verified by ECCTIS where necessary",
                "Passing a Home Office approved English language test at the required level",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", color: "#374151", fontSize: "0.9375rem" }}>
                  <CheckCircle2 style={{ width: "1rem", height: "1rem", color: "#3B82F6", flexShrink: 0, marginTop: "0.125rem" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ MID CTA ═══ */}
      <section style={{ background: "#C5963A", padding: "2.5rem 0" }}>
        <div className="container-main" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <p style={{ color: "white", fontWeight: 700, fontSize: "1.25rem" }}>Need help with a Skilled Worker visa?</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}>Get expert advice on eligibility, salary, and application requirements.</p>
          </div>
          <Link href="/consultation" style={{ padding: "0.875rem 2rem", background: "white", color: "#0B1B3D", fontWeight: 700, borderRadius: "0.5rem", textDecoration: "none" }}>
            Book Free Consultation
          </Link>
        </div>
      </section>

      {/* ═══ DURATION AND SETTLEMENT ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
            Duration, extensions, and settlement
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1.5rem" }}>
            The Skilled Worker visa provides a clear pathway from employment to permanent residence in the UK.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {[
              { step: "1", text: "Initial visa granted for up to 5 years", detail: "Work for your sponsoring employer" },
              { step: "2", text: "Extend your visa if you continue in a qualifying role", detail: "No limit on extensions" },
              { step: "3", text: "Apply for Indefinite Leave to Remain after 5 years", detail: "Permanent residence in the UK" },
              { step: "4", text: "Apply for British citizenship when eligible", detail: "The final step in your journey" },
            ].map((item) => (
              <div key={item.step} style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem", padding: "1rem", background: "#F9FAFB", borderRadius: "0.5rem" }}>
                <span style={{ width: "1.75rem", height: "1.75rem", borderRadius: "50%", background: "#0B1B3D", color: "#C5963A", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.75rem", flexShrink: 0 }}>
                  {item.step}
                </span>
                <div>
                  <p style={{ color: "#0B1B3D", fontWeight: 600, fontSize: "0.9375rem" }}>{item.text}</p>
                  <p style={{ color: "#6B7280", fontSize: "0.8125rem" }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: "1rem 1.25rem", background: "#EFF6FF", borderRadius: "0.5rem", borderLeft: "4px solid #3B82F6" }}>
            <p style={{ color: "#1E40AF", fontWeight: 600, fontSize: "0.9375rem" }}>
              If you change employer, you must apply for a new visa. Your new employer must also hold a valid Sponsor Licence.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ FAMILY ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
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
                Yes. If you have a partner or children under 18, they may be able to join you in the UK as your dependants.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75 }}>
                After five years of continuous residence, your family may also be eligible to apply for Indefinite Leave to Remain alongside you.
              </p>
            </div>
          </div>
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
              We support both employers and employees through every stage of the Skilled Worker visa process with clear, practical, and personalised advice.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1.25rem" }}>
            {[
              { icon: Target, title: "Eligibility check", desc: "Assessment for employers and applicants" },
              { icon: Building2, title: "Sponsor licence", desc: "Support with licence applications" },
              { icon: FileCheck, title: "Application prep", desc: "Documents and forms prepared" },
              { icon: MessageSquare, title: "Salary guidance", desc: "Threshold and code advice" },
              { icon: ShieldCheck, title: "Settlement support", desc: "ILR and citizenship guidance" },
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
            Common questions about the Skilled Worker visa
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              {
                q: "What is a Skilled Worker visa?",
                a: "A Skilled Worker visa allows you to live and work in the UK for a sponsoring employer. It is the main work visa route and can last for up to 5 years, with the option to extend and eventually apply for settlement.",
              },
              {
                q: "Does my employer need a Sponsor Licence?",
                a: "Yes. Your employer must hold a valid UK Sponsor Licence and assign a Certificate of Sponsorship to you before you can apply. If they do not have one, they must obtain it first.",
              },
              {
                q: "What is the minimum salary?",
                a: "The general threshold is £38,700 and £15.88 per hour where no discounts apply. However, the exact amount depends on your occupation code, whether you qualify as a New Entrant, and other factors specific to your role.",
              },
              {
                q: "What skill level is required?",
                a: "The role must be at or above RQF Level 3, equivalent to a UK A Level. Your employer selects an occupation code that matches the role, and this must meet the minimum skill level.",
              },
              {
                q: "Can I change employer on this visa?",
                a: "Yes, but you must apply for a new Skilled Worker visa with your new employer. The new employer must also hold a valid Sponsor Licence and assign a Certificate of Sponsorship.",
              },
              {
                q: "Can my family join me?",
                a: "Yes. Your partner and children under 18 may be able to join you as dependants. After 5 years, they may also be eligible for Indefinite Leave to Remain.",
              },
              {
                q: "Does this visa lead to settlement?",
                a: "Yes. After 5 years of continuous residence in the UK under the Skilled Worker route, you and your family may be eligible to apply for Indefinite Leave to Remain and, thereafter, British citizenship.",
              },
              {
                q: "How can GIVS Law help?",
                a: "We support both employers and applicants with eligibility checks, Sponsor Licence applications, visa preparation, salary guidance, and settlement applications. Our aim is to make the process clear and manageable.",
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
            Need help with a Skilled Worker visa application?
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto 0.75rem", lineHeight: 1.7 }}>
            Whether you are an employer or an applicant, our team can guide you through every requirement and help you submit a strong application.
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
