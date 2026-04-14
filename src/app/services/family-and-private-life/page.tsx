import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  MessageSquare,
  FileCheck,
  Target,
  ChevronDown,
  Briefcase,
  GraduationCap,
  Heart,
  Clock,
  Home,
} from "lucide-react";

export const metadata = {
  title: "Family and Private Life — Spouse Visa UK | GIVS Law",
  description: "Expert UK spouse visa guidance. We help couples prepare strong applications with clear advice and trusted support from experienced immigration advisers.",
};

export default function FamilyAndPrivateLifePage() {
  return (
    <>
      {/* ═══ 1. HERO ═══ */}
      <section style={{ background: "#0B1B3D" }}>
        <div className="container-main" style={{ padding: "4rem 1.5rem 3.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ color: "white" }}>
              <p style={{ color: "#C5963A", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>
                Family and Private Life
              </p>
              <h1 style={{ fontSize: "2.5rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Spouse Visa UK
              </h1>
              <p style={{ fontSize: "1.0625rem", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                Bring your partner to the UK with clear legal guidance and trusted support from experienced immigration advisers.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#9CA3AF", lineHeight: 1.65, marginBottom: "2rem" }}>
                We help couples prepare strong spouse visa applications with clarity, care, and a simple step-by-step process.
              </p>
              <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                <Link href="/funnels/spouse-visa" style={{ padding: "0.875rem 2rem", background: "#C5963A", color: "white", fontWeight: 700, borderRadius: "0.5rem", textDecoration: "none", fontSize: "0.9375rem" }}>
                  Get Free Consultation
                </Link>
                <Link href="/contact" style={{ padding: "0.875rem 2rem", border: "2px solid rgba(255,255,255,0.6)", color: "white", fontWeight: 600, borderRadius: "0.5rem", textDecoration: "none", fontSize: "0.9375rem" }}>
                  Speak To An Advisor
                </Link>
              </div>
              <a href="tel:+441156547274" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#D1D5DB", textDecoration: "none", fontSize: "0.875rem" }}>
                <Phone style={{ width: "0.875rem", height: "0.875rem", color: "#C5963A" }} />
                Call now: +44 115 654 7274
              </a>
            </div>
            <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "0.75rem", overflow: "hidden" }}>
              <Image src="/images/family.jpg" alt="Family reunited in the UK with spouse visa" fill style={{ objectFit: "cover" }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section style={{ background: "white", borderBottom: "1px solid #E5E7EB" }}>
        <div className="container-main" style={{ padding: "1.125rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {[
              "Regulated immigration advisors",
              "Clear and honest guidance",
              "Support from start to finish",
              "Trusted by clients in the UK and overseas",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", color: "#374151", fontSize: "0.8125rem", fontWeight: 500 }}>
                <CheckCircle2 style={{ width: "0.9375rem", height: "0.9375rem", color: "#C5963A", flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 2. INTRO ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div style={{ position: "relative", maxWidth: "460px" }}>
              <div style={{ position: "relative", aspectRatio: "5/6", borderRadius: "0.75rem", overflow: "hidden" }}>
                <Image src="/images/about-woman.jpg" alt="Immigration advisor supporting client" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "#0B1B3D", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", zIndex: 10 }}>
                <p style={{ fontWeight: 700, fontSize: "1rem" }}>Trusted family immigration support</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>About Our Service</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
                Family immigration made simple
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                At Global Immigration and Visa Services, we understand how important it is to keep families together.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                Our team supports individuals and families with spouse visa applications and other family immigration matters. We guide clients through the legal requirements, document preparation, application process, and next steps with clear communication and practical support.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.75 }}>
                We aim to make the process less stressful, more understandable, and better prepared from the start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. WHY CHOOSE GIVS LAW ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="section-label" style={{ justifyContent: "center", marginBottom: "0.75rem" }}>Why Choose Us</p>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D" }}>
              Why families choose GIVS Law
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {[
              { icon: ShieldCheck, title: "Experienced advisers", desc: "Qualified UK immigration advisers with years of family visa experience" },
              { icon: MessageSquare, title: "Clear communication", desc: "We explain everything in simple language you can understand" },
              { icon: FileCheck, title: "Document support", desc: "Careful preparation of your documents and evidence" },
              { icon: Target, title: "Focused preparation", desc: "Thorough approach to reduce delays and avoid mistakes" },
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

      {/* ═══ 4. SPOUSE VISA OVERVIEW ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Main Service</p>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
            Spouse Visa
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            A Spouse Visa allows the partner of a British citizen or a settled person to live in the UK with their partner.
          </p>
          <p style={{ color: "#0B1B3D", fontWeight: 600, marginBottom: "0.75rem" }}>This route can also apply to:</p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.5rem" }}>
            {["Spouses", "Civil partners", "Unmarried partners in qualifying relationships"].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151" }}>
                <Heart style={{ width: "1rem", height: "1rem", color: "#C5963A", flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ 5. ELIGIBILITY ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            Do you qualify for a spouse visa?
          </h2>
          <p style={{ color: "#374151", marginBottom: "1.25rem" }}>
            To enter or remain in the UK as the partner of a British citizen or settled person, you must usually show that:
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              "You and your partner are 18 or older",
              "You are in a genuine and subsisting relationship",
              "You meet the financial requirement",
              "You meet the English language requirement",
              "You intend to live together permanently in the UK",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#0B1B3D", flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ 6. FINANCIAL REQUIREMENT ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Important</p>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
            Financial requirement
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            In most cases, you must show that you or your partner have an annual income of at least <strong style={{ color: "#0B1B3D" }}>£29,000</strong>, or that you and/or your partner have savings of at least <strong style={{ color: "#0B1B3D" }}>£88,500</strong>.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            It may be possible in some situations to combine income with savings.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1.5rem" }}>
            The figures above relate to applications without dependent children. Where children are included, the financial requirement can increase.
          </p>

          {/* Key notes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <div style={{ padding: "0.875rem 1.25rem", background: "#FEF3C7", borderRadius: "0.5rem", borderLeft: "4px solid #F59E0B" }}>
              <p style={{ color: "#92400E", fontSize: "0.9375rem" }}>If you are applying from overseas, you usually cannot rely on your own income alone.</p>
            </div>
            <div style={{ padding: "0.875rem 1.25rem", background: "#FEF3C7", borderRadius: "0.5rem", borderLeft: "4px solid #F59E0B" }}>
              <p style={{ color: "#92400E", fontSize: "0.9375rem" }}>Additional rules can apply where income comes from self-employment.</p>
            </div>
          </div>

          <div style={{ padding: "1rem 1.25rem", background: "#EFF6FF", borderRadius: "0.5rem", borderLeft: "4px solid #3B82F6" }}>
            <p style={{ color: "#1E40AF", fontWeight: 600, fontSize: "0.9375rem" }}>
              We can advise you on the exact financial evidence needed for your situation.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ MID-PAGE CTA ═══ */}
      <section style={{ background: "#C5963A", padding: "2.5rem 0" }}>
        <div className="container-main" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <p style={{ color: "white", fontWeight: 700, fontSize: "1.25rem" }}>Unsure about your financial eligibility?</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}>Get a free assessment and find out where you stand.</p>
          </div>
          <Link href="/funnels/spouse-visa" style={{ padding: "0.875rem 2rem", background: "white", color: "#0B1B3D", fontWeight: 700, borderRadius: "0.5rem", textDecoration: "none" }}>
            Get Free Assessment
          </Link>
        </div>
      </section>

      {/* ═══ 7. APPLICATION PROCESS ═══ */}
      <section style={{ padding: "5rem 0", background: "#F9FAFB" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="section-label" style={{ justifyContent: "center", marginBottom: "0.75rem" }}>Our Process</p>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D" }}>How do I apply?</h2>
            <p style={{ color: "#6B7280", maxWidth: "560px", margin: "0.75rem auto 0" }}>
              Applications are usually made from your country of nationality or residence. In some cases, you may be able to switch into the spouse category from inside the UK, as long as you are not in the UK as a visitor.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", maxWidth: "780px", margin: "0 auto", marginBottom: "2.5rem" }}>
            {[
              { num: "01", title: "Review eligibility", desc: "We check your situation and confirm you qualify" },
              { num: "02", title: "Prepare documents", desc: "We guide you on every document and review your evidence" },
              { num: "03", title: "Submit application", desc: "We prepare and support your full application" },
            ].map((step) => (
              <div key={step.num} style={{ background: "white", borderRadius: "0.75rem", padding: "1.75rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", textAlign: "center" }}>
                <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "50%", background: "#0B1B3D", color: "#C5963A", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "1rem", margin: "0 auto 1rem" }}>
                  {step.num}
                </div>
                <p style={{ fontWeight: 700, color: "#0B1B3D", marginBottom: "0.375rem" }}>{step.title}</p>
                <p style={{ color: "#6B7280", fontSize: "0.8125rem", lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <p style={{ color: "#0B1B3D", fontWeight: 600, marginBottom: "0.75rem" }}>Our team can support you with:</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem" }}>
              {[
                "Checking eligibility",
                "Preparing the correct documents",
                "Reviewing financial evidence",
                "Organising the application clearly",
                "Guiding you through each stage",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "#374151", fontSize: "0.9375rem" }}>
                  <CheckCircle2 style={{ width: "1rem", height: "1rem", color: "#C5963A", flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 8. VISA LENGTH ═══ */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", maxWidth: "640px", margin: "0 auto" }}>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "2rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", textAlign: "center", borderTop: "4px solid #0B1B3D" }}>
              <Clock style={{ width: "1.5rem", height: "1.5rem", color: "#C5963A", margin: "0 auto 0.75rem" }} />
              <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1.125rem", marginBottom: "0.375rem" }}>Initial visa</p>
              <p style={{ color: "#374151", fontSize: "0.9375rem", marginBottom: "0.25rem" }}>30 months (2.5 years)</p>
              <p style={{ color: "#9CA3AF", fontSize: "0.8125rem" }}>Granted on first approval</p>
            </div>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "2rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", textAlign: "center", borderTop: "4px solid #C5963A" }}>
              <Clock style={{ width: "1.5rem", height: "1.5rem", color: "#C5963A", margin: "0 auto 0.75rem" }} />
              <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1.125rem", marginBottom: "0.375rem" }}>Extension</p>
              <p style={{ color: "#374151", fontSize: "0.9375rem", marginBottom: "0.25rem" }}>Further 30 months</p>
              <p style={{ color: "#9CA3AF", fontSize: "0.8125rem" }}>If you continue to meet requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 9. WORKING AND STUDYING ═══ */}
      <section style={{ padding: "4rem 0", background: "#F0FDF4", borderTop: "1px solid #D1FAE5", borderBottom: "1px solid #D1FAE5" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
            What can you do in the UK on a spouse visa?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.25rem" }}>
            {[
              { icon: Briefcase, text: "Work in the UK without restriction" },
              { icon: GraduationCap, text: "Study in the UK, subject to relevant conditions" },
              { icon: Home, text: "Live in the UK with your partner" },
            ].map((item) => (
              <div key={item.text} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "0.625rem" }}>
                <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                  <item.icon style={{ width: "1.25rem", height: "1.25rem", color: "#10B981" }} />
                </div>
                <p style={{ color: "#374151", fontSize: "0.875rem", fontWeight: 500 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 10. SETTLEMENT ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Long Term</p>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
            Your long-term future in the UK
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            You may become eligible to apply for Indefinite Leave to Remain after five years of continuous residence in the UK as a spouse visa holder.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.75 }}>
            This can be an important step towards permanent residence and, where eligible, future British citizenship.
          </p>
        </div>
      </section>

      {/* ═══ 11. FAQ ═══ */}
      <section style={{ padding: "5rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Common Questions</p>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "2rem" }}>
            Frequently asked questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { q: "What is a UK spouse visa?", a: "A Spouse Visa is a UK immigration category which allows the partner of a British citizen or a settled person to live in the UK with their spouse or partner. It can also apply to civil partners and unmarried partners in qualifying relationships." },
              { q: "Do I qualify for a spouse visa?", a: "To qualify, you usually need to show that both partners are over 18, the relationship is genuine and subsisting, the financial requirement is met, the English language requirement is met, and both partners intend to live together permanently in the UK." },
              { q: "How can I meet the visa financial requirements?", a: "In most cases, you must show annual income of at least £29,000 or savings of at least £88,500. In some cases, income and savings may be combined. Different rules can apply depending on your circumstances, including whether children are included." },
              { q: "How do I apply for a spouse visa?", a: "Applications are normally made from your country of nationality or residence. Some applicants may be able to switch from inside the UK if they are eligible and are not here as visitors." },
              { q: "What period of leave will I be given and can I extend?", a: "If your application is successful, you will usually be granted 30 months of leave. You can normally apply to extend for a further 30 months if you continue to meet the rules." },
              { q: "What can I do in the UK as a spouse visa holder?", a: "Spouse visa holders are generally allowed to work in the UK without restriction and can also study in the UK, subject to the relevant conditions." },
              { q: "How quickly can I become settled in the UK?", a: "You may become eligible to apply for Indefinite Leave to Remain after five years of continuous residence in the UK as a spouse visa holder." },
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

      {/* ═══ 12. FINAL CTA ═══ */}
      <section style={{ background: "#0B1B3D", padding: "4rem 0" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
            Need help with a spouse visa application?
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto 0.75rem", lineHeight: 1.7 }}>
            Speak to our immigration advisers today for clear guidance and practical support tailored to your circumstances.
          </p>
          <p style={{ color: "#9CA3AF", fontSize: "0.9375rem", marginBottom: "2rem" }}>
            We are here to help you understand your options and move forward with confidence.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            <Link href="/consultation" style={{ padding: "0.875rem 2.5rem", background: "#C5963A", color: "white", fontWeight: 700, borderRadius: "0.5rem", textDecoration: "none", fontSize: "1.0625rem" }}>
              Book Your Free Consultation
            </Link>
            <Link href="/contact" style={{ padding: "0.875rem 2.5rem", border: "2px solid white", color: "white", fontWeight: 600, borderRadius: "0.5rem", textDecoration: "none", fontSize: "1.0625rem" }}>
              Contact Us
            </Link>
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
