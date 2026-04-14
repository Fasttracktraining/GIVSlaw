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
  Users,
  Building2,
  Briefcase,
  ArrowRight,
  AlertTriangle,
  Globe,
} from "lucide-react";

export const metadata = {
  title: "UK Expansion Worker Visa Service | GIVS Law",
  description: "Expert guidance on the UK Expansion Worker visa. We help overseas businesses and senior employees establish a UK presence with strong, compliant applications.",
};

export default function UkExpansionWorkerPage() {
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
            <span style={{ color: "#D1D5DB" }}>UK Expansion Worker Visa Service</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ color: "white" }}>
              <p style={{ color: "#C5963A", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>
                Work Visas
              </p>
              <h1 style={{ fontSize: "2.125rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem" }}>
                UK Expansion Worker Visa Service
              </h1>
              <p style={{ fontSize: "1.0625rem", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                Practical legal support for overseas businesses expanding into the UK.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#9CA3AF", lineHeight: 1.65, marginBottom: "2rem" }}>
                We help overseas companies and senior employees understand the UK Expansion Worker route, meet the requirements, and prepare strong applications with confidence.
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
              <Image src="/images/london-building.jpg" alt="UK business expansion" fill style={{ objectFit: "cover" }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section style={{ background: "white", borderBottom: "1px solid #E5E7EB" }}>
        <div className="container-main" style={{ padding: "1.125rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {[
              "Expansion route specialists",
              "Overseas business guidance",
              "Strong application preparation",
              "Clear compliance advice",
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
                <Image src="/images/boardroom.jpg" alt="Business expansion meeting" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "#0B1B3D", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", zIndex: 10 }}>
                <p style={{ fontWeight: 700, fontSize: "1rem" }}>UK expansion specialists</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>Work Visas</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
                A visa route for overseas businesses entering the UK market
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                The UK Expansion Worker visa allows a senior manager or specialist employee of an overseas business to come to the UK on a temporary assignment to help establish the business here.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                This route is only suitable where the overseas business has not yet started trading in the UK. If the business is already trading in the UK, a different immigration route, such as Skilled Worker, may be more appropriate.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.75 }}>
                Our team provides clear and practical advice to help businesses and applicants understand the rules, prepare the right documents, and avoid unnecessary risk.
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
              <Globe style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A" }} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
                Who is the UK Expansion Worker visa for?
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75 }}>
                This route is designed for overseas businesses that want to establish a presence in the UK and need a senior or specialist employee to support that expansion. It is suitable for businesses that have been formed overseas but have not yet begun trading in the UK.
              </p>
            </div>
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              "Overseas companies planning to establish a UK presence",
              "Senior managers and specialist workers connected to the overseas business",
              "Businesses that have not yet begun trading in the UK",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#C5963A", flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ ELIGIBILITY ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            Key eligibility requirements
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1.25rem" }}>
            Applicants must meet a number of Home Office requirements before they can qualify under this route.
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              "Valid Certificate of Sponsorship from a UK sponsor",
              "At least 12 months employment outside the UK with the employer or group company, unless exempt as a high earner",
              "Job must be on the list of eligible occupations",
              "Salary must meet the required threshold for the role",
              "Evidence of sufficient funds unless maintenance is certified by the sponsor",
              "There must be a genuine need for the applicant to come to the UK to help establish the business",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#0B1B3D", flexShrink: 0, marginTop: "0.125rem" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ DURATION ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            How long can you stay in the UK?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1.5rem" }}>
            If approved, the visa is normally granted for an initial temporary period and may be extended if the requirements continue to be met.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", textAlign: "center", borderTop: "3px solid #0B1B3D" }}>
              <Clock style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A", margin: "0 auto 0.5rem" }} />
              <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1.125rem" }}>Up to 1 year</p>
              <p style={{ color: "#6B7280", fontSize: "0.8125rem" }}>Initial visa grant</p>
            </div>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", textAlign: "center", borderTop: "3px solid #C5963A" }}>
              <ArrowRight style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A", margin: "0 auto 0.5rem" }} />
              <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1.125rem" }}>+1 year</p>
              <p style={{ color: "#6B7280", fontSize: "0.8125rem" }}>Possible extension</p>
            </div>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", textAlign: "center", borderTop: "3px solid #3B82F6" }}>
              <ShieldCheck style={{ width: "1.375rem", height: "1.375rem", color: "#3B82F6", margin: "0 auto 0.5rem" }} />
              <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1rem" }}>2 years max</p>
              <p style={{ color: "#6B7280", fontSize: "0.8125rem" }}>Before switching needed</p>
            </div>
          </div>

          <div style={{ padding: "1rem 1.25rem", background: "#FEF3C7", borderRadius: "0.5rem", borderLeft: "4px solid #F59E0B", marginBottom: "0.75rem" }}>
            <p style={{ color: "#92400E", fontSize: "0.9375rem" }}>
              Time spent on Global Business Mobility routes may count toward broader cumulative limits. In most cases, the maximum cumulative period is 5 years in any 6 year period.
            </p>
          </div>
          <div style={{ padding: "1rem 1.25rem", background: "#EFF6FF", borderRadius: "0.5rem", borderLeft: "4px solid #3B82F6" }}>
            <p style={{ color: "#1E40AF", fontSize: "0.9375rem" }}>
              For high earners, the cumulative limit may be 9 years in any 10 year period.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ WHAT YOU CAN DO ═══ */}
      <section style={{ padding: "4rem 0", background: "#F0FDF4", borderTop: "1px solid #D1FAE5", borderBottom: "1px solid #D1FAE5" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            What can you do on a UK Expansion Worker visa?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            This route allows you to come to the UK for the role for which you are sponsored.
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              "Work only in the sponsored role",
              "Support the establishment of the business in the UK",
              "Study in the UK subject to conditions",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#10B981", flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ MID CTA ═══ */}
      <section style={{ background: "#C5963A", padding: "2.5rem 0" }}>
        <div className="container-main" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <p style={{ color: "white", fontWeight: 700, fontSize: "1.25rem" }}>Expanding your business into the UK?</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}>Get expert advice on the UK Expansion Worker route.</p>
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
                Can your family join you?
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                This route allows eligible family members to accompany you to the UK.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {[
                  "Spouse or partner can apply as a dependant",
                  "Children under 18 can apply as dependants",
                  "Dependants must meet the relevant immigration requirements",
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
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1rem" }}>
            Does this visa lead to settlement?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            The UK Expansion Worker route does not lead directly to settlement in the UK.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            However, it may be possible to switch into another immigration route that does lead to settlement, such as Skilled Worker, if the relevant requirements are met.
          </p>
          <div style={{ padding: "1rem 1.25rem", background: "#EFF6FF", borderRadius: "0.5rem", borderLeft: "4px solid #3B82F6" }}>
            <p style={{ color: "#1E40AF", fontWeight: 600, fontSize: "0.9375rem" }}>
              We can advise you on whether switching routes is an option and help you plan your long term immigration strategy.
            </p>
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
              We provide clear and practical immigration advice for overseas businesses and employees using the UK Expansion Worker route.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1.25rem" }}>
            {[
              { icon: Target, title: "Route advice", desc: "Confirm this is the right visa" },
              { icon: FileCheck, title: "Eligibility check", desc: "Assessment and visa strategy" },
              { icon: ShieldCheck, title: "Compliance", desc: "Documents and sponsor duties" },
              { icon: MessageSquare, title: "Application prep", desc: "Preparation and review" },
              { icon: ArrowRight, title: "Switching advice", desc: "Long term route planning" },
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
            Common questions about the UK Expansion Worker visa
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              {
                q: "What is the UK Expansion Worker visa?",
                a: "It is a temporary UK immigration route for senior managers or specialist employees of overseas businesses that want to establish a presence in the UK.",
              },
              {
                q: "Who can apply for this visa?",
                a: "It is for individuals connected to an overseas business that has not yet started trading in the UK and who meet the sponsorship, employment, salary, and eligibility requirements.",
              },
              {
                q: "How long is the visa valid for?",
                a: "The visa is usually granted for up to 1 year and can normally be extended for a further year, subject to meeting the rules.",
              },
              {
                q: "Can I bring my family with me?",
                a: "Yes. A spouse or partner and dependent children under 18 can usually apply as dependants, provided they meet the relevant requirements.",
              },
              {
                q: "Does this visa lead to settlement?",
                a: "No. This route does not lead directly to settlement, but it may be possible to switch into another immigration route that does.",
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
            Planning to expand your business into the UK?
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto 0.75rem", lineHeight: 1.7 }}>
            Our team can guide you through the UK Expansion Worker route, assess eligibility, and help prepare a strong application.
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
