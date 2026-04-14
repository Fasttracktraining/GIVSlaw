import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  MessageSquare,
  FileCheck,
  AlertTriangle,
  ChevronDown,
  XCircle,
  Clock,
  Heart,
  Users,
  Stethoscope,
} from "lucide-react";

export const metadata = {
  title: "Adult Dependent Relative Visa UK | GIVS Law",
  description: "Expert guidance on Adult Dependent Relative visas. We help families bring loved ones to the UK with carefully prepared applications and clear legal support.",
};

export default function AdultDependentRelativePage() {
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
                Adult Dependent Relative Visa UK
              </h1>
              <p style={{ fontSize: "1.0625rem", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                Bring your loved ones to the UK with the care and support they need.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#9CA3AF", lineHeight: 1.65, marginBottom: "2rem" }}>
                We guide families through one of the most complex UK visa routes with clarity and care.
              </p>
              <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                <Link href="/funnels/general-consultation" style={{ padding: "0.875rem 2rem", background: "#C5963A", color: "white", fontWeight: 700, borderRadius: "0.5rem", textDecoration: "none", fontSize: "0.9375rem" }}>
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
              <Image src="/images/family.jpg" alt="Family reuniting in the UK" fill style={{ objectFit: "cover" }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section style={{ background: "white", borderBottom: "1px solid #E5E7EB" }}>
        <div className="container-main" style={{ padding: "1.125rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {[
              "Experienced immigration advisers",
              "Carefully prepared applications",
              "Clear and honest guidance",
              "Support for complex cases",
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
                <Image src="/images/about-woman.jpg" alt="Immigration advisor" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "#0B1B3D", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", zIndex: 10 }}>
                <p style={{ fontWeight: 700, fontSize: "1rem" }}>Complex case specialists</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>About This Service</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
                Supporting your family in the UK
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                The Adult Dependent Relative visa is designed for families who need to bring loved ones to the UK due to serious care needs.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                At GIVS Law, we understand how important this decision is. These applications are complex and require strong evidence, but with the right guidance, they can be prepared properly and professionally.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.75 }}>
                We support families by structuring applications clearly and ensuring all requirements are fully addressed.
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
              { icon: ShieldCheck, title: "Experienced advisers", desc: "Qualified UK immigration advisers with complex case experience" },
              { icon: MessageSquare, title: "Clear communication", desc: "We explain every step in simple, straightforward language" },
              { icon: FileCheck, title: "Careful preparation", desc: "Thorough document and evidence preparation for strong applications" },
              { icon: Heart, title: "Compassionate support", desc: "We understand the personal importance of these cases" },
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
            What is an Adult Dependent Relative visa?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            This visa allows an adult relative who requires long-term personal care to join a family member who is permanently living in the UK.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.75 }}>
            It is typically used where the relative cannot access the required level of care in their home country.
          </p>
        </div>
      </section>

      {/* ═══ 5. ELIGIBILITY ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            Who qualifies for this visa?
          </h2>
          <p style={{ color: "#374151", marginBottom: "1.25rem" }}>
            To qualify, the applicant must usually show:
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              "They are 18 or older",
              "They are a close relative (parent, grandparent, sibling, or adult child)",
              "They require long-term care for everyday tasks due to age, illness, or disability",
              "The required care is not available or affordable in their home country",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#0B1B3D", flexShrink: 0, marginTop: "0.125rem" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ 6. SPONSOR REQUIREMENTS ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1rem" }}>
            Who can sponsor an Adult Dependent Relative?
          </h2>
          <p style={{ color: "#0B1B3D", fontWeight: 600, marginBottom: "0.75rem" }}>The UK-based sponsor must be:</p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.5rem" }}>
            {[
              "A British or Irish citizen",
              "Settled in the UK (Indefinite Leave to Remain or Settled Status)",
              "Or have refugee status or humanitarian protection",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#10B981", flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
          <div style={{ padding: "1rem 1.25rem", background: "#FEF3C7", borderRadius: "0.5rem", borderLeft: "4px solid #F59E0B" }}>
            <p style={{ color: "#92400E", fontSize: "0.9375rem" }}>
              Sponsors must be able to support, accommodate, and care for the applicant without relying on public funds for at least five years.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 7. CARE REQUIREMENT ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "rgba(197,150,58,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Stethoscope style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A" }} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
                Understanding the care requirement
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75 }}>
                One of the most important parts of this visa is proving that the applicant requires long-term personal care and that this care is not available in their home country.
              </p>
            </div>
          </div>
          <p style={{ color: "#0B1B3D", fontWeight: 600, marginBottom: "0.75rem" }}>This often involves providing:</p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.5rem" }}>
            {[
              "Detailed medical evidence from qualified professionals",
              "Proof of specific care needs and daily living requirements",
              "Evidence that appropriate care is unavailable or unaffordable abroad",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                <FileCheck style={{ width: "1.125rem", height: "1.125rem", color: "#C5963A", flexShrink: 0, marginTop: "0.125rem" }} />
                {item}
              </li>
            ))}
          </ul>
          <div style={{ padding: "1rem 1.25rem", background: "#EFF6FF", borderRadius: "0.5rem", borderLeft: "4px solid #3B82F6" }}>
            <p style={{ color: "#1E40AF", fontWeight: 600, fontSize: "0.9375rem" }}>
              These cases are highly detailed and must be supported with strong documentation. We can help you identify and organise the evidence you need.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ MID CTA ═══ */}
      <section style={{ background: "#C5963A", padding: "2.5rem 0" }}>
        <div className="container-main" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <p style={{ color: "white", fontWeight: 700, fontSize: "1.25rem" }}>Need help with a complex case?</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}>Speak to our team for an honest assessment of your situation.</p>
          </div>
          <Link href="/funnels/general-consultation" style={{ padding: "0.875rem 2rem", background: "white", color: "#0B1B3D", fontWeight: 700, borderRadius: "0.5rem", textDecoration: "none" }}>
            Get Free Consultation
          </Link>
        </div>
      </section>

      {/* ═══ 8. APPLICATION PROCESS ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="section-label" style={{ justifyContent: "center", marginBottom: "0.75rem" }}>Our Process</p>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D" }}>How to apply</h2>
            <p style={{ color: "#6B7280", maxWidth: "560px", margin: "0.75rem auto 0" }}>
              Applications are usually made from outside the UK in the applicant&apos;s country of residence. Switching into this visa category from within the UK is not normally allowed.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem", maxWidth: "780px", margin: "0 auto" }}>
            {[
              { num: "01", title: "Assess eligibility", desc: "We review the full situation" },
              { num: "02", title: "Prepare documents", desc: "Medical and financial evidence" },
              { num: "03", title: "Organise evidence", desc: "Structured for clarity" },
              { num: "04", title: "Guide submission", desc: "Support through to decision" },
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

      {/* ═══ 9. VISA OUTCOME ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
            What happens if the application is successful?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", borderTop: "4px solid #10B981" }}>
              <p style={{ fontWeight: 700, color: "#0B1B3D", marginBottom: "0.5rem" }}>Sponsor is settled or British citizen</p>
              <p style={{ color: "#374151", fontSize: "0.9375rem", lineHeight: 1.65 }}>
                The applicant will normally be granted <strong>Indefinite Leave to Enter</strong> — the right to live in the UK permanently.
              </p>
            </div>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", borderTop: "4px solid #3B82F6" }}>
              <p style={{ fontWeight: 700, color: "#0B1B3D", marginBottom: "0.5rem" }}>Sponsor has limited leave</p>
              <p style={{ color: "#374151", fontSize: "0.9375rem", lineHeight: 1.65 }}>
                The applicant will receive permission that matches the sponsor&apos;s visa duration. They may later apply for extensions or settlement when eligible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 10. CHALLENGES ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "#FEF2F2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <AlertTriangle style={{ width: "1.375rem", height: "1.375rem", color: "#EF4444" }} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
                Why this visa is complex
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75 }}>
                The Adult Dependent Relative visa is one of the most difficult UK visa routes. Applications are often refused due to:
              </p>
            </div>
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {[
              "Insufficient medical evidence",
              "Failure to prove care is unavailable abroad",
              "Weak financial documentation",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151" }}>
                <XCircle style={{ width: "1.125rem", height: "1.125rem", color: "#EF4444", flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
          <div style={{ padding: "1rem 1.25rem", background: "#F0FDF4", borderRadius: "0.5rem", borderLeft: "4px solid #10B981" }}>
            <p style={{ color: "#065F46", fontWeight: 600, fontSize: "0.9375rem" }}>
              We focus on building strong, well-structured applications to reduce the risk of refusal.
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
              { q: "What is an Adult Dependent Relative visa?", a: "It is a UK visa that allows an adult relative who needs long-term personal care to join a family member who is permanently living in the UK. It applies where the required care is not available in the applicant's home country." },
              { q: "Who can apply?", a: "Close adult relatives such as parents, grandparents, siblings, or adult children who are 18 or older and need long-term care due to age, illness, or disability. The care must not be available or affordable in their home country." },
              { q: "What evidence is required?", a: "You will typically need detailed medical evidence, proof of the applicant's care needs, and evidence that appropriate care is not available or affordable in their home country. Financial evidence from the sponsor is also required." },
              { q: "Can the applicant switch from inside the UK?", a: "No. Applications must normally be made from outside the UK. Switching into this visa category from within the UK is not usually permitted." },
              { q: "How long does the process take?", a: "Processing times can vary depending on the complexity of the case and the evidence provided. These applications are typically more complex than other visa routes, so thorough preparation is important." },
              { q: "What happens if the application is refused?", a: "If refused, you may have the right to appeal or request an administrative review depending on the circumstances. We can advise you on your options if a refusal occurs." },
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
            Need help with an Adult Dependent Relative visa?
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto 0.75rem", lineHeight: 1.7 }}>
            Speak to our team today for clear advice and a structured approach to your application.
          </p>
          <p style={{ color: "#9CA3AF", fontSize: "0.9375rem", marginBottom: "2rem" }}>
            We are here to support you and your family every step of the way.
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
