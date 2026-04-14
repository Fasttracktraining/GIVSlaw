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
  Users,
  Award,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "International Sportsperson Sponsor Licence UK | GIVS Law",
  description: "Expert support for International Sportsperson Sponsor Licence applications. We help sports organisations sponsor elite athletes and qualified coaches with strong, compliant applications.",
};

export default function InternationalSportspersonSponsorLicencePage() {
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
            <span style={{ color: "#D1D5DB" }}>International Sportsperson Sponsor Licence</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ color: "white" }}>
              <p style={{ color: "#C5963A", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>
                Corporate Immigration
              </p>
              <h1 style={{ fontSize: "2.125rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem" }}>
                International Sportsperson Sponsor Licence
              </h1>
              <p style={{ fontSize: "1.0625rem", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                Sponsor elite athletes and qualified coaches to compete and work in the UK.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#9CA3AF", lineHeight: 1.65, marginBottom: "2rem" }}>
                We help sports organisations prepare strong sponsor licence applications with expert guidance, careful document preparation, and full compliance support.
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
              <Image src="/images/boardroom.jpg" alt="Sports organisation planning sponsorship" fill style={{ objectFit: "cover" }} priority />
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
              "Strong application preparation",
              "Governing Body endorsement guidance",
              "Compliance focused support",
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
                <Image src="/images/london-building.jpg" alt="UK sports organisations" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "#0B1B3D", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", zIndex: 10 }}>
                <p style={{ fontWeight: 700, fontSize: "1rem" }}>Sports sponsorship experts</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>Sports Immigration</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
                The licence your organisation needs to sponsor international sports talent
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                The International Sportsperson Sponsor Licence is specifically designed for UK organisations that need to sponsor elite sportspeople and qualified coaches from overseas. It is the only route that allows sports organisations to recruit international athletes for roles at the highest level.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                This route replaced the former Tier 2 Sportsperson and Tier 5 Temporary Worker Sporting routes, which were merged on 1 December 2020. If your organisation held either of those licences, it will have automatically converted to the current International Sportsperson Sponsor Licence.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.75 }}>
                Once granted, this licence allows your organisation to sponsor potentially any number of non UK nationals under the International Sportsperson visa route.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY IT MATTERS ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
            Why your organisation needs this licence
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1.5rem" }}>
            Without a valid International Sportsperson Sponsor Licence, your organisation cannot legally sponsor overseas athletes or coaches to work in the UK. This licence opens the door to recruiting international talent that can make a real difference to your sport.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { icon: Award, title: "Elite talent access", desc: "Sponsor internationally established athletes and coaches" },
              { icon: Clock, title: "Up to 3 years", desc: "Workers can stay for up to three years, with the option to extend" },
              { icon: Users, title: "Unlimited sponsorship", desc: "No cap on the number of non UK nationals you can sponsor" },
              { icon: Zap, title: "Competitive edge", desc: "Strengthen your team with world class international talent" },
            ].map((card) => (
              <div key={card.title} style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "rgba(197,150,58,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <card.icon style={{ width: "1.25rem", height: "1.25rem", color: "#C5963A" }} />
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: "#0B1B3D", marginBottom: "0.25rem", fontSize: "0.9375rem" }}>{card.title}</p>
                  <p style={{ color: "#6B7280", fontSize: "0.8125rem", lineHeight: 1.6 }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHO CAN YOU SPONSOR ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            Who can you sponsor?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            You can only sponsor an individual under this route if they have been endorsed by the Governing Body for your sport. The endorsement must confirm that the individual is:
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.5rem" }}>
            {[
              "Internationally established at the highest level",
              "Will make a significant contribution to the growth of their sport at the highest level in the UK",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#C5963A", flexShrink: 0, marginTop: "0.125rem" }} />
                {item}
              </li>
            ))}
          </ul>

          <p style={{ color: "#0B1B3D", fontWeight: 600, marginBottom: "0.75rem" }}>Additional requirements for the worker:</p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.5rem" }}>
            {[
              "If the visa is for more than 12 months, the worker must demonstrate a certain level of English language ability",
              "The worker must show they have held sufficient funds in their bank account for at least 28 days, or the employer can certify maintenance for the first month of employment",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#0B1B3D", flexShrink: 0, marginTop: "0.125rem" }} />
                {item}
              </li>
            ))}
          </ul>

          <div style={{ padding: "1rem 1.25rem", background: "#FEF3C7", borderRadius: "0.5rem", borderLeft: "4px solid #F59E0B" }}>
            <p style={{ color: "#92400E", fontSize: "0.9375rem" }}>
              If your sport does not have a Governing Body for endorsement purposes, you will not be able to apply for this licence.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ ELIGIBILITY ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            Eligibility requirements for your organisation
          </h2>
          <p style={{ color: "#374151", marginBottom: "1.25rem" }}>
            To apply, your organisation must be endorsed by the Governing Body for your sport and must also demonstrate:
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              "You are a legally operating UK organisation",
              "You have a genuine need for an International Sportsperson Sponsor Licence",
              "You understand your duties and responsibilities as a sponsor",
              "You have appropriate HR systems and processes in place",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#0B1B3D", flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ APPLICATION PROCESS ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
            How the application process works
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {[
              { step: "1", text: "Complete the online application form through the Home Office system" },
              { step: "2", text: "Submit all supporting documents within 5 working days" },
              { step: "3", text: "Include company documents, organisation details, licence justification, and Governing Body endorsement" },
              { step: "4", text: "UKVI reviews your application and issues a decision" },
            ].map((item) => (
              <div key={item.step} style={{ display: "flex", alignItems: "center", gap: "0.875rem", padding: "0.875rem 1rem", background: "#F9FAFB", borderRadius: "0.5rem", boxShadow: "0 1px 2px rgba(0,0,0,0.06)" }}>
                <span style={{ width: "1.75rem", height: "1.75rem", borderRadius: "50%", background: "#0B1B3D", color: "#C5963A", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.75rem", flexShrink: 0 }}>
                  {item.step}
                </span>
                <span style={{ color: "#374151", fontSize: "0.9375rem" }}>{item.text}</span>
              </div>
            ))}
          </div>
          <div style={{ padding: "0.875rem 1.25rem", background: "#FEF3C7", borderRadius: "0.5rem", borderLeft: "4px solid #F59E0B" }}>
            <p style={{ color: "#92400E", fontWeight: 600, fontSize: "0.9375rem" }}>
              If you fail to submit supporting documents within 5 working days, your application will be automatically rejected.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ UKVI ASSESSMENT ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
            How UKVI assesses your application
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1.5rem" }}>
            UK Visas and Immigration will carefully review your application and supporting evidence. They will assess your HR systems, policies, and overall readiness to act as a responsible sponsor.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
            {[
              { label: "Approve", desc: "Decision based on documents submitted", color: "#10B981", bg: "#F0FDF4" },
              { label: "Request more info", desc: "Additional documents or clarification needed", color: "#F59E0B", bg: "#FFFBEB" },
              { label: "Compliance visit", desc: "On site inspection of your organisation", color: "#3B82F6", bg: "#EFF6FF" },
            ].map((item) => (
              <div key={item.label} style={{ background: item.bg, borderRadius: "0.5rem", padding: "1.25rem", textAlign: "center", borderTop: `3px solid ${item.color}` }}>
                <p style={{ fontWeight: 700, color: "#0B1B3D", marginBottom: "0.25rem" }}>{item.label}</p>
                <p style={{ color: "#6B7280", fontSize: "0.8125rem", lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ padding: "1rem 1.25rem", background: "#FEF2F2", borderRadius: "0.5rem", borderLeft: "4px solid #EF4444", marginTop: "1.25rem" }}>
            <p style={{ color: "#991B1B", fontWeight: 600, fontSize: "0.9375rem" }}>
              If your application is refused following a compliance visit, you may be barred from reapplying for at least 6 months.
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
              <p style={{ fontWeight: 600, color: "#0B1B3D", marginBottom: "0.25rem" }}>Small organisations</p>
              <p style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0B1B3D" }}>£536</p>
            </div>
            <div style={{ padding: "1rem 1.25rem", background: "#F9FAFB", borderRadius: "0.5rem", borderLeft: "3px solid #C5963A" }}>
              <p style={{ fontWeight: 600, color: "#0B1B3D", marginBottom: "0.25rem" }}>Medium or large organisations</p>
              <p style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0B1B3D" }}>£1,436</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW WE HELP ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="section-label" style={{ justifyContent: "center", marginBottom: "0.75rem" }}>How We Help</p>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
              Expert support for sports organisations
            </h2>
            <p style={{ color: "#6B7280", maxWidth: "560px", margin: "0 auto" }}>
              A refusal can result in a six month bar from reapplying, so professional preparation is essential. We ensure your application is thorough, accurate, and ready for assessment.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {[
              { icon: MessageSquare, title: "Situation review", desc: "We assess your organisation and advise on the best approach" },
              { icon: FileCheck, title: "Application preparation", desc: "We prepare and draft all required documents and forms" },
              { icon: ShieldCheck, title: "Compliance support", desc: "We ensure your systems meet Home Office requirements" },
              { icon: Target, title: "Inspection readiness", desc: "We prepare you for potential compliance visits" },
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
            <p style={{ color: "white", fontWeight: 700, fontSize: "1.25rem" }}>Need to sponsor an international sportsperson?</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}>Get expert advice on your licence application today.</p>
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
            Common questions about this licence
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              {
                q: "What is the International Sportsperson Sponsor Licence?",
                a: "It is a licence issued by the Home Office that allows UK sports organisations to sponsor elite athletes and qualified coaches from overseas. It replaced the former Tier 2 Sportsperson and Tier 5 Temporary Worker Sporting routes.",
              },
              {
                q: "How long can a sponsored sportsperson stay?",
                a: "A sponsored individual can initially stay for up to three years, with the possibility of extending their visa.",
              },
              {
                q: "Do I need Governing Body endorsement?",
                a: "Yes. Your organisation must be endorsed by the Governing Body for your sport. If your sport does not have a recognised Governing Body, you will not be able to apply for this licence.",
              },
              {
                q: "Is there a limit on how many people I can sponsor?",
                a: "No. Once you hold a valid International Sportsperson Sponsor Licence, there is no cap on the number of non UK nationals you can sponsor.",
              },
              {
                q: "What if my organisation already held a Tier 2 or Tier 5 Sporting licence?",
                a: "If your organisation held a Tier 2 Sportsperson or Tier 5 Temporary Worker Creative and Sporting licence under the sporting route, it would have automatically converted to the International Sportsperson Sponsor Licence on 1 December 2020. If you are unsure whether your licence is still active, we can help you check.",
              },
              {
                q: "How much does the application cost?",
                a: "The fee is £536 for small organisations and £1,436 for medium or large organisations. Priority processing is available for an additional £500.",
              },
              {
                q: "What happens if my application is refused?",
                a: "A refusal can result in a ban of at least six months before you can reapply. This is why thorough professional preparation is essential to reduce the risk.",
              },
              {
                q: "Can the employer certify the worker's maintenance?",
                a: "Yes. Instead of the worker showing personal funds for 28 days, the employer can certify maintenance for the first month of employment.",
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
            Ready to sponsor international sports talent?
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto 0.75rem", lineHeight: 1.7 }}>
            Our team can guide your organisation through the application process and help you secure your International Sportsperson Sponsor Licence with confidence.
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
