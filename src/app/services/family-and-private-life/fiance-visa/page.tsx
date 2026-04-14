import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  MessageSquare,
  FileCheck,
  Target,
  ChevronDown,
  XCircle,
  Clock,
  ArrowRight,
  Heart,
} from "lucide-react";

export const metadata = {
  title: "Fiancé(e) and Proposed Civil Partner Visa UK | GIVS Law",
  description: "Expert UK fiancé visa guidance. We help couples prepare strong applications to join their partner in the UK with clear advice and trusted immigration support.",
};

export default function FianceVisaPage() {
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
              <h1 style={{ fontSize: "2.25rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Fiancé(e) and Proposed Civil Partner Visa UK
              </h1>
              <p style={{ fontSize: "1.0625rem", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                Join your partner in the UK and start your life together with expert immigration support.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#9CA3AF", lineHeight: 1.65, marginBottom: "2rem" }}>
                We guide couples through the fiancé visa process with clarity, care, and strong preparation.
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
              <Image src="/images/family.jpg" alt="Couple planning their future in the UK" fill style={{ objectFit: "cover" }} priority />
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
              "Clear and simple guidance",
              "Strong application preparation",
              "Trusted by couples worldwide",
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
                <Image src="/images/handshake.jpg" alt="Immigration advisor supporting couple" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "#0B1B3D", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", zIndex: 10 }}>
                <p style={{ fontWeight: 700, fontSize: "1rem" }}>Expert fiancé visa support</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>About This Service</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
                Start your life together in the UK
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                At Global Immigration and Visa Services, we understand how important it is to begin your future together without unnecessary delays or confusion.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                We support couples applying for fiancé(e) and proposed civil partner visas by guiding them through the legal requirements, preparing strong applications, and ensuring every step is handled clearly and professionally.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.75 }}>
                Our goal is to make the process simple, structured, and successful from the start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. WHY CHOOSE US ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="section-label" style={{ justifyContent: "center", marginBottom: "0.75rem" }}>Why Choose Us</p>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D" }}>Why choose GIVS Law</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {[
              { icon: ShieldCheck, title: "Experienced advisers", desc: "Qualified UK immigration advisers with fiancé visa expertise" },
              { icon: MessageSquare, title: "Clear communication", desc: "We explain everything in simple language you can understand" },
              { icon: FileCheck, title: "Document preparation", desc: "Careful preparation of your documents and supporting evidence" },
              { icon: Target, title: "Full support", desc: "We support you from initial consultation through to decision" },
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

      {/* ═══ 4. VISA OVERVIEW ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Visa Overview</p>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
            Fiancé(e) and Proposed Civil Partner visa
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            This visa allows the fiancé(e) or proposed civil partner of a British citizen or a person settled in the UK to enter the UK to marry or enter into a civil partnership.
          </p>
          <div style={{ padding: "1rem 1.25rem", background: "#FEF3C7", borderRadius: "0.5rem", borderLeft: "4px solid #F59E0B" }}>
            <p style={{ color: "#92400E", fontWeight: 600, fontSize: "0.9375rem" }}>
              The marriage or civil partnership must take place within six months of arrival.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 5. ELIGIBILITY ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            Do you qualify?
          </h2>
          <p style={{ color: "#374151", marginBottom: "1.25rem" }}>
            To qualify for this visa, you must usually show:
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              "You and your partner are 18 or older",
              "You are in a genuine and subsisting relationship",
              "Neither of you is married or in a civil partnership with another person",
              "You intend to marry or enter a civil partnership within six months",
              "You meet the financial requirement",
              "You meet the English language requirement",
              "You intend to live together permanently",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#0B1B3D", flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ 6. FINANCIAL REQUIREMENTS ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Important</p>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
            Financial requirements
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            In most cases, your partner must show an annual income of at least <strong style={{ color: "#0B1B3D" }}>£29,000</strong>, or that you and/or your partner have savings of at least <strong style={{ color: "#0B1B3D" }}>£88,500</strong>.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            In some situations, income and savings can be combined.
          </p>
          <div style={{ padding: "0.875rem 1.25rem", background: "#FEF3C7", borderRadius: "0.5rem", borderLeft: "4px solid #F59E0B", marginBottom: "1.5rem" }}>
            <p style={{ color: "#92400E", fontSize: "0.9375rem" }}>
              Additional rules apply if income comes from self-employment.
            </p>
          </div>
          <div style={{ padding: "1rem 1.25rem", background: "#EFF6FF", borderRadius: "0.5rem", borderLeft: "4px solid #3B82F6" }}>
            <p style={{ color: "#1E40AF", fontWeight: 600, fontSize: "0.9375rem" }}>
              We can advise you on exactly what financial evidence is required for your situation.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ MID CTA ═══ */}
      <section style={{ background: "#C5963A", padding: "2.5rem 0" }}>
        <div className="container-main" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <p style={{ color: "white", fontWeight: 700, fontSize: "1.25rem" }}>Not sure if you qualify?</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}>Get a free assessment from our immigration advisers.</p>
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
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D" }}>How do you apply?</h2>
            <p style={{ color: "#6B7280", maxWidth: "560px", margin: "0.75rem auto 0" }}>
              Applications are normally made from your country of nationality or residence. You cannot switch into this visa category from inside the UK.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem", maxWidth: "780px", margin: "0 auto" }}>
            {[
              { num: "01", title: "Check eligibility", desc: "We review your situation" },
              { num: "02", title: "Prepare documents", desc: "We guide correct preparation" },
              { num: "03", title: "Organise evidence", desc: "We structure everything clearly" },
              { num: "04", title: "Submit application", desc: "We guide you to submission" },
            ].map((step) => (
              <div key={step.num} style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", textAlign: "center" }}>
                <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "#0B1B3D", color: "#C5963A", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.9375rem", margin: "0 auto 0.75rem" }}>
                  {step.num}
                </div>
                <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "0.875rem", marginBottom: "0.25rem" }}>{step.title}</p>
                <p style={{ color: "#6B7280", fontSize: "0.75rem", lineHeight: 1.5 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 8. DURATION AND NEXT STEPS ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
            Visa length and what happens next
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            If approved, this visa is valid for <strong style={{ color: "#0B1B3D" }}>six months</strong>. During this time, you must marry or enter a civil partnership.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            After this, you can apply to switch into the Spouse visa category, as long as the application is made within the visa validity period.
          </p>
          <div style={{ padding: "1rem 1.25rem", background: "#F9FAFB", borderRadius: "0.5rem", borderLeft: "4px solid #6B7280" }}>
            <p style={{ color: "#374151", fontSize: "0.9375rem" }}>
              If the marriage does not take place within six months, you may be able to extend the visa for another six months if you have a valid reason and evidence.
            </p>
          </div>

          {/* Timeline visual */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", marginTop: "2rem" }}>
            {[
              { icon: Heart, label: "Arrive in UK", detail: "On fiancé visa" },
              { icon: Clock, label: "Marry within 6 months", detail: "Or civil partnership" },
              { icon: ArrowRight, label: "Switch to Spouse visa", detail: "Then path to settlement" },
            ].map((step) => (
              <div key={step.label} style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", textAlign: "center", borderTop: "3px solid #C5963A" }}>
                <step.icon style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A", margin: "0 auto 0.5rem" }} />
                <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "0.875rem", marginBottom: "0.25rem" }}>{step.label}</p>
                <p style={{ color: "#6B7280", fontSize: "0.8125rem" }}>{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. WORK AND RESTRICTIONS ═══ */}
      <section style={{ padding: "3.5rem 0", background: "#FEF2F2", borderTop: "1px solid #FECACA", borderBottom: "1px solid #FECACA" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1rem" }}>
            Can you work on this visa?
          </h2>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <XCircle style={{ width: "1.25rem", height: "1.25rem", color: "#EF4444", flexShrink: 0, marginTop: "0.125rem" }} />
            <p style={{ color: "#374151", lineHeight: 1.75 }}>
              Fiancé(e) and proposed civil partner visa holders are <strong>not allowed to work</strong> in the UK.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
            <CheckCircle2 style={{ width: "1.25rem", height: "1.25rem", color: "#10B981", flexShrink: 0, marginTop: "0.125rem" }} />
            <p style={{ color: "#374151", lineHeight: 1.75 }}>
              You must switch into the Spouse visa category before you can work.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 10. SETTLEMENT ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Long Term</p>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
            Settlement and long-term plans
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            Time spent on a fiancé(e) or proposed civil partner visa <strong>does not count</strong> towards settlement.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            Only once you switch to the Spouse visa category will your time begin to count towards Indefinite Leave to Remain.
          </p>
          <div style={{ padding: "1rem 1.25rem", background: "#EFF6FF", borderRadius: "0.5rem", borderLeft: "4px solid #3B82F6" }}>
            <p style={{ color: "#1E40AF", fontWeight: 600, fontSize: "0.9375rem" }}>
              For this reason, it is usually important to switch into the Spouse category as soon as possible after marriage.
            </p>
          </div>
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
              { q: "What is a Fiancé(e) visa?", a: "A Fiancé(e) visa allows the partner of a British citizen or settled person to enter the UK to marry or form a civil partnership. The marriage or civil partnership must take place within six months of arrival." },
              { q: "Who can apply?", a: "You can apply if you and your partner are both over 18, you are in a genuine relationship, neither of you is already married or in a civil partnership with someone else, and you meet the financial and English language requirements." },
              { q: "What are the financial requirements?", a: "Your partner usually needs to show an annual income of at least £29,000 or savings of at least £88,500. In some situations, income and savings can be combined. Different rules may apply for self-employment." },
              { q: "How long does the visa last?", a: "The visa is valid for six months. You must marry or enter a civil partnership within this time. In some cases, an extension of six months may be possible if there is a valid reason for the delay." },
              { q: "Can I work in the UK?", a: "No. Fiancé(e) visa holders are not allowed to work in the UK. You must first switch to a Spouse visa after your marriage before you can work." },
              { q: "What happens after marriage?", a: "After your marriage or civil partnership, you can apply to switch to a Spouse visa. This must be done while your fiancé visa is still valid. The Spouse visa then allows you to work and begin the path towards settlement." },
              { q: "Does this count towards settlement?", a: "No. Time on a fiancé(e) visa does not count towards Indefinite Leave to Remain. Only time spent on a Spouse visa counts, so it is important to switch as soon as possible after marriage." },
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
            Need help with your fiancé visa application?
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto 0.75rem", lineHeight: 1.7 }}>
            Speak to our immigration advisers today for clear guidance and a structured approach to your application.
          </p>
          <p style={{ color: "#9CA3AF", fontSize: "0.9375rem", marginBottom: "2rem" }}>
            We are here to help you move forward with confidence.
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
