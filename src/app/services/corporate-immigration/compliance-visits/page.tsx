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
  Users,
  ClipboardCheck,
} from "lucide-react";

export const metadata = {
  title: "Home Office Sponsor Compliance Visits | GIVS Law",
  description: "Expert support to help UK businesses prepare for Home Office sponsor compliance visits. We review systems, audit records, and prepare key personnel for inspections.",
};

export default function ComplianceVisitsPage() {
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
            <span style={{ color: "#D1D5DB" }}>Compliance Visits</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ color: "white" }}>
              <p style={{ color: "#C5963A", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>
                Corporate Immigration
              </p>
              <h1 style={{ fontSize: "2.125rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Home Office Sponsor Compliance Visits
              </h1>
              <p style={{ fontSize: "1.0625rem", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                Clear and practical legal support to help your organisation prepare for Home Office sponsor inspections with confidence.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#9CA3AF", lineHeight: 1.65, marginBottom: "2rem" }}>
                We help businesses understand what to expect during a compliance visit, strengthen internal processes, and prepare properly for Sponsor Licence inspections.
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
              <Image src="/images/boardroom.jpg" alt="Business team preparing for compliance visit" fill style={{ objectFit: "cover" }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section style={{ background: "white", borderBottom: "1px solid #E5E7EB" }}>
        <div className="container-main" style={{ padding: "1.125rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {[
              "Experienced compliance advisers",
              "Mock interview preparation",
              "HR system and record audits",
              "Trusted by UK businesses",
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
                <Image src="/images/london-building.jpg" alt="UK business compliance" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "#0B1B3D", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", zIndex: 10 }}>
                <p style={{ fontWeight: 700, fontSize: "1rem" }}>Compliance visit specialists</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>Corporate Immigration</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
                Prepare confidently for a Home Office compliance visit
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                The UK Government strictly regulates the employment of non UK and Irish nationals.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                To enforce these rules, the Home Office may carry out sponsor compliance visits to assess whether an organisation is complying, or is capable of complying, with its sponsor duties.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                During a visit, the Home Office may review whether sponsored roles are genuine, whether key personnel are honest and reliable, and whether the organisation is operating lawfully in the UK.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.75 }}>
                These visits can take place before a Sponsor Licence is granted, during the licence period, or when a licence is being renewed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY PREPARATION MATTERS ═══ */}
      <section style={{ padding: "4rem 0", background: "#FEF3C7", borderTop: "1px solid #FDE68A", borderBottom: "1px solid #FDE68A" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
              <AlertTriangle style={{ width: "1.375rem", height: "1.375rem", color: "#F59E0B" }} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
                Why sponsor compliance preparation matters
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75 }}>
                A Home Office compliance visit is a serious regulatory assessment. If systems, records, or internal processes are not in order, the consequences can be significant for an organisation and its Sponsor Licence. Proper preparation helps businesses respond confidently, demonstrate compliance clearly, and reduce the risk of enforcement action.
              </p>
            </div>
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              "Clear understanding of the documents and records that should be ready",
              "Review of HR systems and sponsor reporting processes",
              "Preparation of key personnel for Home Office questions",
              "Reduced risk of compliance failures, suspension, or licence revocation",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#92400E", flexShrink: 0 }} />
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
              We support businesses and organisations of all sizes in preparing for Sponsor Licence inspections and maintaining strong compliance standards. Our experienced team provides practical and detailed support before a Home Office visit.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {[
              { icon: MessageSquare, title: "Detailed advice", desc: "Clear guidance on what to expect during a Home Office visit" },
              { icon: Users, title: "Mock interviews", desc: "Preparation sessions for key personnel before inspection" },
              { icon: ClipboardCheck, title: "System reviews", desc: "Assessment of HR systems and compliance processes" },
              { icon: FileCheck, title: "Record audits", desc: "Audit of right to work checks and sponsored worker records" },
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
            <p style={{ color: "white", fontWeight: 700, fontSize: "1.25rem" }}>Expecting a Home Office visit?</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}>Get expert advice and prepare your organisation with confidence.</p>
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
            Common questions about compliance visits
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <FaqItem
              q="Will the Home Office visit us for an inspection?"
              a={<>
                <p style={{ marginBottom: "0.75rem" }}>A Home Office compliance visit may take place at different stages:</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1rem" }}>
                  <div style={{ padding: "0.875rem 1rem", background: "white", borderRadius: "0.5rem", borderLeft: "3px solid #0B1B3D" }}>
                    <p style={{ fontWeight: 600, color: "#0B1B3D", marginBottom: "0.25rem", fontSize: "0.875rem" }}>After submitting a Sponsor Licence application</p>
                    <p style={{ fontSize: "0.8125rem" }}>The Home Office may assess whether your organisation is ready to meet sponsor duties before granting the licence.</p>
                  </div>
                  <div style={{ padding: "0.875rem 1rem", background: "white", borderRadius: "0.5rem", borderLeft: "3px solid #C5963A" }}>
                    <p style={{ fontWeight: 600, color: "#0B1B3D", marginBottom: "0.25rem", fontSize: "0.875rem" }}>During the four year licence validity period</p>
                    <p style={{ fontSize: "0.8125rem" }}>Routine inspections, follow ups on previous concerns, or visits triggered by a specific issue may occur at any time.</p>
                  </div>
                  <div style={{ padding: "0.875rem 1rem", background: "white", borderRadius: "0.5rem", borderLeft: "3px solid #3B82F6" }}>
                    <p style={{ fontWeight: 600, color: "#0B1B3D", marginBottom: "0.25rem", fontSize: "0.875rem" }}>After applying to renew the licence</p>
                    <p style={{ fontSize: "0.8125rem" }}>The Home Office may follow up online checks with a more detailed compliance inspection.</p>
                  </div>
                </div>
                <p>The Home Office may not always provide advance notice, and organisations are expected to cooperate fully.</p>
              </>}
            />

            <FaqItem
              q="What happens during a Home Office visit?"
              a={<>
                <p style={{ marginBottom: "0.75rem" }}>The Home Office will usually review:</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
                  {[
                    "Right to work checks for all staff, not just sponsored workers",
                    "HR systems and internal reporting processes",
                    "Records and documentation held for sponsored migrants",
                    "Information and documents relating to the business itself",
                    "Key personnel through interview",
                    "A sample of sponsored employees through interview",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                      <CheckCircle2 style={{ width: "1rem", height: "1rem", color: "#C5963A", flexShrink: 0, marginTop: "0.125rem" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>They may also request documents before, during, or after the visit. It is important to provide anything requested within the timeframe given.</p>
              </>}
            />

            <FaqItem
              q="Can the Home Office visit without notice?"
              a={<>
                <p style={{ marginBottom: "0.75rem" }}>Yes. The Home Office does not always have to give advance notice of a compliance visit.</p>
                <p>Organisations are generally expected to cooperate, and refusing a visit without strong justification may raise further compliance concerns.</p>
              </>}
            />

            <FaqItem
              q="Why is legal preparation important before a compliance visit?"
              a={<>
                <p style={{ marginBottom: "0.75rem" }}>Legal preparation helps an organisation understand what the Home Office is likely to review, identify weaknesses before inspection, and ensure that key personnel are properly prepared.</p>
                <p>This can reduce risk and help present a stronger compliance position during the visit.</p>
              </>}
            />

            <FaqItem
              q="How can GIVS Law help us prepare?"
              a={<>
                <p style={{ marginBottom: "0.75rem" }}>GIVS Law can help by reviewing your systems, auditing key records, advising on sponsor duties, and preparing relevant staff through mock interviews and practical guidance.</p>
                <p>Our aim is to help your organisation approach a Home Office visit with clarity and confidence.</p>
              </>}
            />
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section style={{ background: "#0B1B3D", padding: "4rem 0" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
            Need support preparing for a Home Office compliance visit?
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto 0.75rem", lineHeight: 1.7 }}>
            Our team can help your organisation review its systems, prepare its records, and approach a sponsor inspection with greater confidence.
          </p>
          <p style={{ color: "#9CA3AF", fontSize: "0.9375rem", marginBottom: "2rem" }}>
            Speak to GIVS Law today for clear and practical corporate immigration advice.
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

function FaqItem({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <details style={{ background: "white", borderRadius: "0.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", overflow: "hidden" }}>
      <summary style={{ padding: "1.25rem 1.5rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", fontWeight: 600, color: "#0B1B3D", fontSize: "0.9375rem", listStyle: "none" }}>
        {q}
        <ChevronDown style={{ width: "1.25rem", height: "1.25rem", color: "#9CA3AF", flexShrink: 0 }} />
      </summary>
      <div style={{ padding: "0 1.5rem 1.25rem", color: "#6B7280", lineHeight: 1.75, fontSize: "0.9375rem" }}>
        {a}
      </div>
    </details>
  );
}
