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
  XCircle,
  Clock,
  Music,
  Film,
  Users,
  Building2,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Creative Worker Sponsor Licence UK | GIVS Law",
  description: "Expert support for Creative Worker Sponsor Licence applications. We help production companies, theatres, media organisations, and creative businesses hire international talent.",
};

export default function CreativeWorkerSponsorLicencePage() {
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
            <span style={{ color: "#D1D5DB" }}>Creative Worker Sponsor Licence</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ color: "white" }}>
              <p style={{ color: "#C5963A", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>
                Corporate Immigration
              </p>
              <h1 style={{ fontSize: "2.25rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Creative Worker Sponsor Licence
              </h1>
              <p style={{ fontSize: "1.0625rem", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                Bring international creative talent to the UK for your productions, events, and performances.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#9CA3AF", lineHeight: 1.65, marginBottom: "2rem" }}>
                We help creative organisations secure their sponsor licence with strong applications, clear guidance, and expert preparation.
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
              <Image src="/images/conference-group.jpg" alt="Creative industry professionals" fill style={{ objectFit: "cover" }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section style={{ background: "white", borderBottom: "1px solid #E5E7EB" }}>
        <div className="container-main" style={{ padding: "1.125rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {[
              "Creative sector expertise",
              "Strong application preparation",
              "Compliance focused guidance",
              "Trusted by UK organisations",
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
                <Image src="/images/boardroom.jpg" alt="Creative industry meeting" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "#0B1B3D", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", zIndex: 10 }}>
                <p style={{ fontWeight: 700, fontSize: "1rem" }}>Creative sector specialists</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>Creative Immigration</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
                The licence for creative organisations hiring international talent
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                The UK government strictly regulates the employment of non UK nationals. If your organisation operates in the creative sector and needs to bring in talent from overseas, you will usually need a Creative Worker Sponsor Licence.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                This licence allows you to sponsor workers for short term creative roles, giving your organisation the flexibility to bring in the talent you need for specific productions, events, and engagements.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.75 }}>
                At GIVS Law, we help creative organisations navigate the application process with clarity and confidence, ensuring every detail meets Home Office requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHO IS THIS FOR ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            Who is this licence for?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1.5rem" }}>
            The Creative Worker Sponsor Licence is designed for organisations operating in the creative and cultural industries. It covers a wide range of roles and disciplines.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
            {[
              { icon: Film, label: "Film and television" },
              { icon: Music, label: "Music and dance" },
              { icon: Sparkles, label: "Theatre and opera" },
              { icon: Users, label: "Fashion modelling" },
            ].map((item) => (
              <div key={item.label} style={{ background: "white", borderRadius: "0.75rem", padding: "1.25rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", textAlign: "center" }}>
                <item.icon style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A", margin: "0 auto 0.5rem" }} />
                <p style={{ fontWeight: 600, color: "#0B1B3D", fontSize: "0.875rem" }}>{item.label}</p>
              </div>
            ))}
          </div>
          <p style={{ color: "#6B7280", fontSize: "0.9375rem" }}>
            This route also covers circuses, live events, production companies, and the worker&apos;s entourage where applicable.
          </p>
        </div>
      </section>

      {/* ═══ HOW THE ROUTE WORKS ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
            How the Creative Worker route works
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1.5rem" }}>
            The Creative Worker route is designed for flexibility, allowing organisations to bring in international talent for specific engagements and projects.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", textAlign: "center", borderTop: "3px solid #0B1B3D" }}>
              <Clock style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A", margin: "0 auto 0.5rem" }} />
              <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1.125rem" }}>12 months</p>
              <p style={{ color: "#6B7280", fontSize: "0.8125rem" }}>Initial sponsorship period</p>
            </div>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", textAlign: "center", borderTop: "3px solid #C5963A" }}>
              <Clock style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A", margin: "0 auto 0.5rem" }} />
              <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1.125rem" }}>24 months</p>
              <p style={{ color: "#6B7280", fontSize: "0.8125rem" }}>With the same sponsor</p>
            </div>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", textAlign: "center", borderTop: "3px solid #10B981" }}>
              <CheckCircle2 style={{ width: "1.375rem", height: "1.375rem", color: "#10B981", margin: "0 auto 0.5rem" }} />
              <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1rem" }}>Multiple roles</p>
              <p style={{ color: "#6B7280", fontSize: "0.8125rem" }}>Up to 14 days between engagements</p>
            </div>
          </div>

          <div style={{ padding: "1rem 1.25rem", background: "#EFF6FF", borderRadius: "0.5rem", borderLeft: "4px solid #3B82F6" }}>
            <p style={{ color: "#1E40AF", fontWeight: 600, fontSize: "0.9375rem" }}>
              For longer term roles, organisations should consider the Skilled Worker route instead. We can advise you on which route is most appropriate.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ WHO CAN BE SPONSORED ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            Who can you sponsor?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            The individual you sponsor must make a unique contribution to UK cultural life. This can be demonstrated through:
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.5rem" }}>
            {[
              "International reputation in their field",
              "Continuity in an existing production or project",
              "Being part of an established company or ensemble",
              "Commercial importance to the engagement",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#C5963A", flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>

          <p style={{ color: "#0B1B3D", fontWeight: 600, marginBottom: "0.75rem" }}>If the worker does not meet these criteria:</p>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            The employer must demonstrate that the role does not displace a settled worker. This is usually done through advertising the role and conducting a fair recruitment process.
          </p>
          <div style={{ padding: "0.875rem 1.25rem", background: "#F0FDF4", borderRadius: "0.5rem", borderLeft: "4px solid #10B981" }}>
            <p style={{ color: "#065F46", fontSize: "0.9375rem" }}>
              If the role is on the shortage occupation list, the displacement requirement may not apply.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ ELIGIBILITY ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            Eligibility requirements
          </h2>
          <p style={{ color: "#374151", marginBottom: "1.25rem" }}>
            To apply for a Creative Worker Sponsor Licence, your organisation must demonstrate:
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {[
              "You operate in the creative sector",
              "You have a genuine need for the licence",
              "You understand your sponsor duties and obligations",
              "You have appropriate HR systems and processes in place",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#0B1B3D", flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
          <p style={{ color: "#6B7280", lineHeight: 1.75 }}>
            Organisations do not always need a direct employment relationship with the creative worker, but must still meet all sponsor obligations and duties.
          </p>
        </div>
      </section>

      {/* ═══ APPLICATION PROCESS ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
            How the application process works
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {[
              { step: "1", text: "Submit your application online through the Home Office system" },
              { step: "2", text: "Send all supporting documents within 5 working days" },
              { step: "3", text: "UKVI reviews your application and may request further information" },
              { step: "4", text: "Decision issued, or a compliance visit may be arranged" },
            ].map((item) => (
              <div key={item.step} style={{ display: "flex", alignItems: "center", gap: "0.875rem", padding: "0.875rem 1rem", background: "white", borderRadius: "0.5rem", boxShadow: "0 1px 2px rgba(0,0,0,0.06)" }}>
                <span style={{ width: "1.75rem", height: "1.75rem", borderRadius: "50%", background: "#0B1B3D", color: "#C5963A", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.75rem", flexShrink: 0 }}>
                  {item.step}
                </span>
                <span style={{ color: "#374151", fontSize: "0.9375rem" }}>{item.text}</span>
              </div>
            ))}
          </div>
          <div style={{ padding: "0.875rem 1.25rem", background: "#FEF3C7", borderRadius: "0.5rem", borderLeft: "4px solid #F59E0B" }}>
            <p style={{ color: "#92400E", fontWeight: 600, fontSize: "0.9375rem" }}>
              Failure to submit supporting documents within 5 working days will result in your application being rejected.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ PROCESSING AND FEES ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.5rem", textAlign: "center" }}>
            Processing time and fees
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", borderTop: "4px solid #0B1B3D" }}>
              <p style={{ fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>Standard processing</p>
              <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0B1B3D", marginBottom: "0.25rem" }}>8 weeks</p>
              <p style={{ color: "#6B7280", fontSize: "0.8125rem" }}>Typical decision timeframe</p>
            </div>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", borderTop: "4px solid #C5963A" }}>
              <p style={{ fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>Priority processing</p>
              <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "#C5963A", marginBottom: "0.25rem" }}>~2 weeks</p>
              <p style={{ color: "#6B7280", fontSize: "0.8125rem" }}>Additional fee of £500 (limited daily slots)</p>
            </div>
          </div>

          <p style={{ color: "#0B1B3D", fontWeight: 600, marginBottom: "0.75rem" }}>Application fees:</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div style={{ padding: "1rem 1.25rem", background: "#F9FAFB", borderRadius: "0.5rem", borderLeft: "3px solid #0B1B3D" }}>
              <p style={{ fontWeight: 600, color: "#0B1B3D", marginBottom: "0.25rem" }}>Small companies and charities</p>
              <p style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0B1B3D" }}>£536</p>
            </div>
            <div style={{ padding: "1rem 1.25rem", background: "#F9FAFB", borderRadius: "0.5rem", borderLeft: "3px solid #C5963A" }}>
              <p style={{ fontWeight: 600, color: "#0B1B3D", marginBottom: "0.25rem" }}>Medium or large companies</p>
              <p style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0B1B3D" }}>£1,476</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RISKS ═══ */}
      <section style={{ padding: "4rem 0", background: "#FEF2F2", borderTop: "1px solid #FECACA", borderBottom: "1px solid #FECACA" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
              <AlertTriangle style={{ width: "1.375rem", height: "1.375rem", color: "#EF4444" }} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
                What can go wrong
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75 }}>
                Applications are assessed carefully by UKVI. A refusal can result in a ban of six months or longer before you can reapply. Common reasons for refusal include:
              </p>
            </div>
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {[
              "Incomplete or missing supporting documents",
              "Failure to demonstrate a genuine need for the licence",
              "Weak or inadequate compliance systems",
              "Documents not submitted within the 5 day deadline",
              "Concerns raised during a compliance visit",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                <XCircle style={{ width: "1.125rem", height: "1.125rem", color: "#EF4444", flexShrink: 0, marginTop: "0.125rem" }} />
                {item}
              </li>
            ))}
          </ul>
          <div style={{ padding: "1rem 1.25rem", background: "white", borderRadius: "0.5rem", borderLeft: "4px solid #10B981" }}>
            <p style={{ color: "#065F46", fontWeight: 600, fontSize: "0.9375rem" }}>
              Professional preparation significantly reduces the risk of refusal. Our team ensures your application is thorough, accurate, and ready for assessment.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ HOW WE HELP ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="section-label" style={{ justifyContent: "center", marginBottom: "0.75rem" }}>How We Help</p>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D" }}>
              Expert support for creative organisations
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {[
              { icon: FileCheck, title: "Strong applications", desc: "We prepare every detail to maximise your chances of approval" },
              { icon: Target, title: "Document accuracy", desc: "We ensure all supporting documents are correct and complete" },
              { icon: ShieldCheck, title: "Compliance advice", desc: "We guide you on meeting all sponsor duties and obligations" },
              { icon: MessageSquare, title: "Risk reduction", desc: "We identify and address potential issues before submission" },
            ].map((card) => (
              <div key={card.title} style={{ background: "white", borderRadius: "0.75rem", padding: "1.75rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", textAlign: "center" }}>
                <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "rgba(197,150,58,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                  <card.icon style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A" }} />
                </div>
                <p style={{ fontWeight: 700, color: "#0B1B3D", marginBottom: "0.375rem" }}>{card.title}</p>
                <p style={{ color: "#6B7280", fontSize: "0.8125rem", lineHeight: 1.6 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MID CTA ═══ */}
      <section style={{ background: "#C5963A", padding: "2.5rem 0" }}>
        <div className="container-main" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <p style={{ color: "white", fontWeight: 700, fontSize: "1.25rem" }}>Need to bring creative talent to the UK?</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}>Get expert guidance on your Creative Worker Sponsor Licence application.</p>
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
            Common questions about the Creative Worker Sponsor Licence
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              {
                q: "What is a Creative Worker Sponsor Licence?",
                a: "It is a licence issued by the Home Office that allows UK organisations in the creative sector to sponsor overseas workers for short term creative roles, including film, music, theatre, dance, fashion modelling, and live events.",
              },
              {
                q: "How long can a creative worker stay in the UK?",
                a: "A creative worker can initially be sponsored for up to 12 months. This can be extended to 24 months if the worker remains with the same sponsor. For longer roles, the Skilled Worker route may be more appropriate.",
              },
              {
                q: "Can the worker take on multiple engagements?",
                a: "Yes. The Creative Worker route allows multiple engagements, with up to 14 days permitted between each one.",
              },
              {
                q: "Do I need a direct employment relationship with the worker?",
                a: "Not always. However, your organisation must still meet all sponsor duties and obligations, regardless of the employment arrangement.",
              },
              {
                q: "How much does the application cost?",
                a: "The application fee is £536 for small companies and charities, and £1,476 for medium or large organisations. A priority processing service is available for an additional £500.",
              },
              {
                q: "How long does the application take?",
                a: "Standard processing is around 8 weeks. Priority processing can reduce this to approximately 2 weeks, subject to availability.",
              },
              {
                q: "What happens if my application is refused?",
                a: "A refusal can result in a ban of six months or longer before your organisation can reapply. This is why professional preparation is strongly recommended to reduce the risk of refusal.",
              },
              {
                q: "What does UKVI check during the assessment?",
                a: "UKVI reviews your HR systems, internal processes, and sponsor readiness. They may approve your application based on documents alone, or they may conduct a compliance visit to your premises.",
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
            Ready to sponsor creative talent in the UK?
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto 0.75rem", lineHeight: 1.7 }}>
            Our team can guide your organisation through the application process and help you secure your Creative Worker Sponsor Licence with confidence.
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
