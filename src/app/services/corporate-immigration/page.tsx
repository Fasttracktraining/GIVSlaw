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
  Building2,
  Users,
  Clock,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Corporate Immigration — Sponsor Licences & Certificates of Sponsorship | GIVS Law",
  description: "Expert corporate immigration support for UK businesses. We help with sponsor licences, Certificates of Sponsorship, and compliance so you can hire international talent with confidence.",
};

export default function CorporateImmigrationPage() {
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
            <span style={{ color: "#D1D5DB" }}>Corporate Immigration</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ color: "white" }}>
              <p style={{ color: "#C5963A", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>
                Corporate Immigration
              </p>
              <h1 style={{ fontSize: "2.25rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Corporate Immigration
              </h1>
              <p style={{ fontSize: "1.0625rem", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                Helping UK businesses hire international talent with confidence and compliance.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#9CA3AF", lineHeight: 1.65, marginBottom: "2rem" }}>
                From sponsor licences to Certificates of Sponsorship, we guide your business through every stage of the corporate immigration process with clarity and precision.
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
              <Image src="/images/boardroom.jpg" alt="Corporate immigration meeting" fill style={{ objectFit: "cover" }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section style={{ background: "white", borderBottom: "1px solid #E5E7EB" }}>
        <div className="container-main" style={{ padding: "1.125rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {[
              "Experienced corporate immigration advisers",
              "Sponsor licence and CoS expertise",
              "Compliance focused guidance",
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
                <Image src="/images/london-building.jpg" alt="UK business district" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "#0B1B3D", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", zIndex: 10 }}>
                <p style={{ fontWeight: 700, fontSize: "1rem" }}>Corporate immigration specialists</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>Business Immigration</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
                The immigration partner your business needs
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                Hiring international talent is one of the most effective ways to strengthen your workforce and grow your business. However, the UK immigration system requires businesses to follow strict rules at every stage of the process.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                From obtaining a sponsor licence to assigning Certificates of Sponsorship and maintaining compliance, every step must be handled correctly to avoid delays, penalties, or licence revocation.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.75 }}>
                At GIVS Law, we act as a trusted partner for businesses of all sizes, providing clear and practical guidance so you can focus on running your business while we handle the immigration requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CoS OVERVIEW ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Key Concept</p>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
            What is a Certificate of Sponsorship?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            A Certificate of Sponsorship is an electronic record that a licensed sponsor assigns to a migrant worker. It is not a physical document. Instead, it is a reference number that the worker uses when applying for their UK visa.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            The CoS confirms the details of the role, the salary, and the worker&apos;s suitability for the position. Without a valid CoS, the worker cannot apply for a visa under the Points Based System.
          </p>
          <p style={{ color: "#0B1B3D", fontWeight: 600, marginBottom: "0.75rem" }}>A Certificate of Sponsorship is required for visa routes including:</p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {["Skilled Worker", "Intra Company Worker", "Temporary Worker"].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#C5963A", flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ TYPES OF CoS ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            Types of Certificates of Sponsorship
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "2rem" }}>
            Under the Skilled Worker route, there are two types of Certificates of Sponsorship. The type your business needs depends on where the worker is applying from.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "2rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", borderTop: "4px solid #0B1B3D" }}>
              <h3 style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1.125rem", marginBottom: "0.75rem" }}>Defined CoS</h3>
              <p style={{ color: "#374151", fontSize: "0.9375rem", lineHeight: 1.65, marginBottom: "1rem" }}>
                Used when the worker is applying from <strong>outside the UK</strong>.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  "Can be submitted at any time",
                  "Usually processed within 48 hours",
                  "May require additional supporting information",
                  "Often requires explanation of recruitment process",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", color: "#6B7280", fontSize: "0.8125rem" }}>
                    <CheckCircle2 style={{ width: "0.875rem", height: "0.875rem", color: "#0B1B3D", flexShrink: 0, marginTop: "0.125rem" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "2rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", borderTop: "4px solid #C5963A" }}>
              <h3 style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1.125rem", marginBottom: "0.75rem" }}>Undefined CoS</h3>
              <p style={{ color: "#374151", fontSize: "0.9375rem", lineHeight: 1.65, marginBottom: "1rem" }}>
                Used when the worker is applying from <strong>within the UK</strong>.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  "Must be drawn from your annual allocation",
                  "Available immediately once allocated",
                  "Used for in country extensions and switches",
                  "Additional requests can be made if allocation runs out",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", color: "#6B7280", fontSize: "0.8125rem" }}>
                    <CheckCircle2 style={{ width: "0.875rem", height: "0.875rem", color: "#C5963A", flexShrink: 0, marginTop: "0.125rem" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW TO APPLY ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
            How to apply for a Certificate of Sponsorship
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1.5rem" }}>
            Applications for Certificates of Sponsorship are submitted through the Home Office&apos;s Sponsor Management System. The process must be managed by an authorised user within your business.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {[
              { step: "1", text: "Confirm the role meets the requirements of the relevant visa route" },
              { step: "2", text: "Ensure you have the correct CoS type available (Defined or Undefined)" },
              { step: "3", text: "Submit the CoS request through the Sponsor Management System" },
              { step: "4", text: "Once approved, assign the CoS to the worker within three months" },
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
            <p style={{ color: "#92400E", fontSize: "0.9375rem" }}>
              Once a CoS is approved, it must be assigned to the worker within three months. If it is not used within this period, it will expire and a new request will be required.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ ANNUAL ALLOCATION ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "rgba(197,150,58,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Clock style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A" }} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
                Annual allocation explained
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75 }}>
                Businesses that hold a sponsor licence are required to apply each year for an allocation of Undefined Certificates of Sponsorship.
              </p>
            </div>
          </div>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            When requesting your annual allocation, you must justify the number of CoS you expect to need based on your hiring plans for the year ahead.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            If your allocation runs out before the end of the year, additional requests can be submitted. However, each request must be supported by a clear business justification.
          </p>
          <div style={{ padding: "1rem 1.25rem", background: "#EFF6FF", borderRadius: "0.5rem", borderLeft: "4px solid #3B82F6" }}>
            <p style={{ color: "#1E40AF", fontWeight: 600, fontSize: "0.9375rem" }}>
              We can help you manage your annual allocation, plan ahead for hiring, and submit additional requests when needed.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ HOW WE HELP ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="section-label" style={{ justifyContent: "center", marginBottom: "0.75rem" }}>How We Help</p>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
              Your corporate immigration partner
            </h2>
            <p style={{ color: "#6B7280", maxWidth: "560px", margin: "0 auto" }}>
              We support businesses through every stage of the sponsorship process, from obtaining a licence to assigning Certificates of Sponsorship and maintaining compliance.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {[
              { icon: Building2, title: "Sponsor licences", desc: "Applications, renewals, and licence management" },
              { icon: FileCheck, title: "CoS management", desc: "Defined and Undefined CoS applications and assignments" },
              { icon: ShieldCheck, title: "Compliance support", desc: "Ongoing guidance to meet Home Office requirements" },
              { icon: Users, title: "Worker visas", desc: "End to end support for your international employees" },
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
            <p style={{ color: "white", fontWeight: 700, fontSize: "1.25rem" }}>Need to hire international talent?</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}>Get expert advice on sponsor licences, Certificates of Sponsorship, and compliance.</p>
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
            Common questions about corporate immigration
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              {
                q: "What is a Certificate of Sponsorship?",
                a: "A Certificate of Sponsorship is an electronic record that a licensed UK sponsor assigns to a migrant worker. It contains details of the job, the salary, and the worker's suitability. The worker uses the CoS reference number when applying for their UK visa.",
              },
              {
                q: "What is the difference between Defined and Undefined CoS?",
                a: "A Defined CoS is used when the worker is applying from outside the UK. An Undefined CoS is used when the worker is already in the UK and applying to switch or extend their visa. Defined CoS can be requested at any time, while Undefined CoS must come from your annual allocation.",
              },
              {
                q: "How long does it take to get a CoS approved?",
                a: "Defined CoS applications are usually processed within 48 hours. However, additional information may be requested, which can extend the timeline. We help you prepare complete submissions to avoid delays.",
              },
              {
                q: "What happens if my annual allocation runs out?",
                a: "If your Undefined CoS allocation runs out during the year, you can submit a request for additional allocation. Each request must be supported by a clear business justification showing why you need more certificates.",
              },
              {
                q: "How long is an approved CoS valid?",
                a: "Once a CoS is approved, it must be assigned to the worker within three months. If it is not used within this period, it will expire and a new application will be required.",
              },
              {
                q: "Do I need a sponsor licence before I can assign a CoS?",
                a: "Yes. Only businesses with an active sponsor licence can assign Certificates of Sponsorship. If you do not yet have a licence, we can help you apply for one.",
              },
              {
                q: "Can GIVS Law help with compliance?",
                a: "Yes. Maintaining compliance is essential to keeping your sponsor licence. We provide ongoing guidance on record keeping, reporting duties, and Home Office requirements.",
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
            Ready to hire international talent?
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto 0.75rem", lineHeight: 1.7 }}>
            Our corporate immigration team can guide your business through the sponsorship process and help you stay compliant at every step.
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
