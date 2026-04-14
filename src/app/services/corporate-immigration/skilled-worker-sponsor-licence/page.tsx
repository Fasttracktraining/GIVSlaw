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
  Building2,
  Users,
  Briefcase,
} from "lucide-react";

export const metadata = {
  title: "Skilled Worker Sponsor Licence UK | GIVS Law",
  description: "Expert support for UK Skilled Worker Sponsor Licence applications. We help businesses hire international talent with strong, compliant applications.",
};

export default function SkilledWorkerSponsorLicencePage() {
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
            <span style={{ color: "#D1D5DB" }}>Skilled Worker Sponsor Licence</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ color: "white" }}>
              <p style={{ color: "#C5963A", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>
                Corporate Immigration
              </p>
              <h1 style={{ fontSize: "2.25rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Skilled Worker Sponsor Licence
              </h1>
              <p style={{ fontSize: "1.0625rem", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                The licence your business needs to hire skilled workers from overseas.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#9CA3AF", lineHeight: 1.65, marginBottom: "2rem" }}>
                We help businesses of all sizes prepare strong, compliant sponsor licence applications and avoid the common mistakes that lead to refusal.
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
              <Image src="/images/boardroom.jpg" alt="Business team discussing sponsor licence" fill style={{ objectFit: "cover" }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section style={{ background: "white", borderBottom: "1px solid #E5E7EB" }}>
        <div className="container-main" style={{ padding: "1.125rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {[
              "Experienced sponsor licence advisers",
              "Strong application preparation",
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
                <p style={{ fontWeight: 700, fontSize: "1rem" }}>Sponsor licence specialists</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>Business Immigration</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
                Hire the talent your business needs
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                A Skilled Worker Sponsor Licence, previously known as the Tier 2 General Licence, is the main route that allows UK employers to recruit skilled workers from overseas for long term employment.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                Without this licence, your business cannot legally sponsor a non UK national to work for you. It is the essential first step in the process of bringing international talent into your organisation.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.75 }}>
                At GIVS Law, we support businesses and organisations of all sizes through the application process with clear advice and strong preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY IT MATTERS ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
            Why this licence matters for your business
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1.5rem" }}>
            Once your Skilled Worker Sponsor Licence is granted, your business gains the ability to access a global talent pool and fill roles that cannot be recruited domestically.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { icon: Users, title: "Sponsor overseas workers", desc: "Recruit skilled non UK nationals for genuine roles in your business" },
              { icon: Briefcase, title: "Up to 5 years", desc: "Sponsored workers can remain for up to five years with the possibility of extension" },
              { icon: Building2, title: "Business growth", desc: "Access talent that supports your long term growth and operational needs" },
              { icon: ShieldCheck, title: "Compliant hiring", desc: "A structured, legal route to international recruitment" },
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

      {/* ═══ RISKS ═══ */}
      <section style={{ padding: "4rem 0", background: "#FEF2F2", borderTop: "1px solid #FECACA", borderBottom: "1px solid #FECACA" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
              <AlertTriangle style={{ width: "1.375rem", height: "1.375rem", color: "#EF4444" }} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
                Why applications get refused
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75 }}>
                Applications are carefully assessed by UK Visas and Immigration. If requirements are not met or supporting documents are incorrect, an application can be refused. Common reasons include:
              </p>
            </div>
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {[
              "Incomplete or inaccurate application forms",
              "Failure to demonstrate a genuine vacancy",
              "Inadequate HR systems and processes",
              "Lack of understanding of sponsor duties",
              "Missing or incorrect supporting documents",
              "Business structure or legitimacy concerns",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                <XCircle style={{ width: "1.125rem", height: "1.125rem", color: "#EF4444", flexShrink: 0, marginTop: "0.125rem" }} />
                {item}
              </li>
            ))}
          </ul>
          <div style={{ padding: "1rem 1.25rem", background: "white", borderRadius: "0.5rem", borderLeft: "4px solid #10B981" }}>
            <p style={{ color: "#065F46", fontWeight: 600, fontSize: "0.9375rem" }}>
              A well prepared application significantly reduces the risk of refusal. Our team ensures every detail is correct before submission.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ HOW WE HELP ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="section-label" style={{ justifyContent: "center", marginBottom: "0.75rem" }}>How We Help</p>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
              Expert support at every stage
            </h2>
            <p style={{ color: "#6B7280", maxWidth: "560px", margin: "0 auto" }}>
              We work closely with your business to prepare a strong application and set you up for long term compliance.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {[
              { icon: MessageSquare, title: "Eligibility review", desc: "We assess your business and confirm you meet the requirements" },
              { icon: FileCheck, title: "Application preparation", desc: "We prepare all documents and forms to the highest standard" },
              { icon: Target, title: "HR and systems review", desc: "We check your processes meet Home Office expectations" },
              { icon: ShieldCheck, title: "Ongoing compliance", desc: "We support you after approval with duties and reporting" },
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

      {/* ═══ ELIGIBILITY ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            Does your business qualify?
          </h2>
          <p style={{ color: "#374151", marginBottom: "1.25rem" }}>
            To apply for a Skilled Worker Sponsor Licence, your business must demonstrate:
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {[
              "You are a legally operating UK organisation",
              "You have a genuine need to sponsor workers",
              "You understand your sponsor duties and responsibilities",
              "You have appropriate HR systems and processes in place",
              "You have a genuine vacancy to fill",
              "You have either identified a candidate or have a future need to recruit",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#0B1B3D", flexShrink: 0, marginTop: "0.125rem" }} />
                {item}
              </li>
            ))}
          </ul>
          <div style={{ padding: "1rem 1.25rem", background: "#EFF6FF", borderRadius: "0.5rem", borderLeft: "4px solid #3B82F6" }}>
            <p style={{ color: "#1E40AF", fontWeight: 600, fontSize: "0.9375rem" }}>
              Not sure if you qualify? Our team can assess your business and advise you on the best approach before you apply.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ WHO CAN YOU SPONSOR ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            Who can your business sponsor?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1.5rem" }}>
            Once you hold a Skilled Worker Sponsor Licence, you can sponsor workers who meet the following requirements:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", textAlign: "center", borderTop: "3px solid #0B1B3D" }}>
              <Briefcase style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A", margin: "0 auto 0.75rem" }} />
              <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "0.9375rem", marginBottom: "0.375rem" }}>Skill level</p>
              <p style={{ color: "#6B7280", fontSize: "0.8125rem", lineHeight: 1.5 }}>The role must be at least RQF Level 3 or equivalent</p>
            </div>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", textAlign: "center", borderTop: "3px solid #C5963A" }}>
              <Building2 style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A", margin: "0 auto 0.75rem" }} />
              <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "0.9375rem", marginBottom: "0.375rem" }}>Salary</p>
              <p style={{ color: "#6B7280", fontSize: "0.8125rem", lineHeight: 1.5 }}>At least £38,700 or the going rate for the role, whichever applies</p>
            </div>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", textAlign: "center", borderTop: "3px solid #10B981" }}>
              <Users style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A", margin: "0 auto 0.75rem" }} />
              <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "0.9375rem", marginBottom: "0.375rem" }}>English language</p>
              <p style={{ color: "#6B7280", fontSize: "0.8125rem", lineHeight: 1.5 }}>The worker must meet the English language requirement</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MID CTA ═══ */}
      <section style={{ background: "#C5963A", padding: "2.5rem 0" }}>
        <div className="container-main" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <p style={{ color: "white", fontWeight: 700, fontSize: "1.25rem" }}>Ready to apply for a Sponsor Licence?</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}>Get expert guidance to make sure your application is right first time.</p>
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
            Common questions about the Skilled Worker Sponsor Licence
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              {
                q: "What is a Skilled Worker Sponsor Licence?",
                a: "It is a licence issued by the Home Office that allows UK employers to sponsor skilled workers from overseas. Previously known as the Tier 2 General Licence, it is the main route for hiring international employees for long term roles.",
              },
              {
                q: "How long does a Skilled Worker Sponsor Licence last?",
                a: "A sponsor licence is normally granted for four years. Before it expires, you must apply to renew it to continue sponsoring workers.",
              },
              {
                q: "How long can a sponsored worker stay in the UK?",
                a: "A worker sponsored under the Skilled Worker route can initially stay for up to five years. Extensions are possible, and after five years the worker may be eligible to apply for settlement.",
              },
              {
                q: "What happens if the worker changes employer or role?",
                a: "If a sponsored worker changes employer or moves to a substantially different role, they must apply for a new visa. The new employer must also hold a valid sponsor licence.",
              },
              {
                q: "What salary is required to sponsor a worker?",
                a: "The salary must be at least £38,700 or the going rate for the specific role, whichever is higher. Different rules may apply in some circumstances.",
              },
              {
                q: "Can any business apply for a Sponsor Licence?",
                a: "Most legally operating UK businesses can apply, provided they can demonstrate a genuine need to sponsor workers and have appropriate systems and processes in place. Our team can assess your eligibility.",
              },
              {
                q: "How long does the application process take?",
                a: "Standard processing typically takes around eight weeks. Priority services may be available in some cases. Thorough preparation helps avoid delays.",
              },
              {
                q: "What happens after the licence is granted?",
                a: "Once granted, you can assign Certificates of Sponsorship to workers and must comply with ongoing sponsor duties, including record keeping, reporting, and monitoring. We can support you with this.",
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
            Our team can guide your business through the Skilled Worker Sponsor Licence application and help you build a compliant, long term hiring strategy.
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
