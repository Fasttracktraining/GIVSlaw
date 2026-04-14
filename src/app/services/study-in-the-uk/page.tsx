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
  GraduationCap,
  BookOpen,
} from "lucide-react";

export const metadata = {
  title: "Study in the UK — Student Visa | GIVS Law",
  description: "Expert support for UK Student Visa applications. We help students prepare strong applications with clear guidance, careful document checks, and practical support.",
};

export default function StudyInTheUkPage() {
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
            <span style={{ color: "#D1D5DB" }}>Study in the UK</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ color: "white" }}>
              <p style={{ color: "#C5963A", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>
                Student Immigration
              </p>
              <h1 style={{ fontSize: "2.25rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Study in the UK
              </h1>
              <p style={{ fontSize: "1.0625rem", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                Expert support for your UK Student Visa application.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#9CA3AF", lineHeight: 1.65, marginBottom: "2rem" }}>
                We help students prepare strong UK Student Visa applications with clear guidance, careful document checks, and practical support from start to finish.
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
              <Image src="/images/student-laptop.jpg" alt="Student studying in the UK" fill style={{ objectFit: "cover" }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section style={{ background: "white", borderBottom: "1px solid #E5E7EB" }}>
        <div className="container-main" style={{ padding: "1.125rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {[
              "Experienced student visa advisers",
              "Careful document preparation",
              "Clear and honest guidance",
              "Support from start to finish",
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
                <Image src="/images/about-woman.jpg" alt="Student visa advisor" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "#0B1B3D", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", zIndex: 10 }}>
                <p style={{ fontWeight: 700, fontSize: "1rem" }}>Student visa specialists</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>Student Immigration</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
                Start your studies in the UK with confidence
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                The UK Student Visa allows eligible international students to study in the United Kingdom for approved courses.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                If you plan to study in the UK for more than six months and do not already hold another visa that allows study, you will usually need a UK Student Visa.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.75 }}>
                Our team provides expert guidance and practical support to help you prepare a strong and compliant application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="section-label" style={{ justifyContent: "center", marginBottom: "0.75rem" }}>Why Choose Us</p>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
              Why choose GIVS Law
            </h2>
            <p style={{ color: "#6B7280", maxWidth: "560px", margin: "0 auto" }}>
              Our team understands how closely the Home Office reviews student visa applications. If any requirement is missed, or documents are not properly prepared, an application can be delayed or refused.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {[
              { icon: MessageSquare, title: "Clear advice", desc: "Straightforward guidance on eligibility and visa requirements" },
              { icon: FileCheck, title: "Document support", desc: "Help with preparing and organising your application documents" },
              { icon: Target, title: "Careful review", desc: "Thorough checks of everything before submission" },
              { icon: ShieldCheck, title: "Professional guidance", desc: "Expert support at every step of the process" },
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

      {/* ═══ REQUIREMENTS ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "rgba(197,150,58,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <BookOpen style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A" }} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
                What are the main requirements?
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75 }}>
                To qualify for a UK Student Visa, you will usually need to show that you:
              </p>
            </div>
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              "Are aged 16 or over",
              "Have a valid Confirmation of Acceptance for Studies (CAS) from a Home Office approved school, college, or university",
              "Have enough money to cover your tuition fees and living costs",
              "Can speak, read, write, and understand English",
              "If you are under 18, have parental consent for the application",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#0B1B3D", flexShrink: 0, marginTop: "0.125rem" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ RESTRICTIONS ═══ */}
      <section style={{ padding: "4rem 0", background: "#FEF2F2", borderTop: "1px solid #FECACA", borderBottom: "1px solid #FECACA" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            What can you not do on a UK Student Visa?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1.25rem" }}>
            The UK Student Visa comes with conditions and restrictions. Depending on your course and level of study, you may not be allowed to:
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              "Work more than 20 hours per week during term time (where the rules limit this)",
              "Be self-employed or run a business",
              "Work as a professional sportsperson or sports coach",
              "Work as an entertainer",
              "Fill a permanent full-time vacancy",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                <XCircle style={{ width: "1.125rem", height: "1.125rem", color: "#EF4444", flexShrink: 0, marginTop: "0.125rem" }} />
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
            <p style={{ color: "white", fontWeight: 700, fontSize: "1.25rem" }}>Planning to study in the UK?</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}>Get expert advice on your Student Visa application today.</p>
          </div>
          <Link href="/consultation" style={{ padding: "0.875rem 2rem", background: "white", color: "#0B1B3D", fontWeight: 700, borderRadius: "0.5rem", textDecoration: "none" }}>
            Book Free Consultation
          </Link>
        </div>
      </section>

      {/* ═══ DURATION ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "rgba(197,150,58,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Clock style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A" }} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
                How long can you stay in the UK?
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75 }}>
                The length of your visa normally depends on the length and level of your course.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {[
              { text: "If your course lasts 12 months or longer, your visa will usually cover the course length plus up to five additional months", highlight: false },
              { text: "If you are 18 or over and studying at degree level, there are overall time limits on how long you can stay on the student route", highlight: false },
              { text: "If your course is below degree level, the total period allowed may be shorter", highlight: false },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.875rem 1rem", background: "#F9FAFB", borderRadius: "0.5rem", borderLeft: "3px solid #0B1B3D" }}>
                <CheckCircle2 style={{ width: "1rem", height: "1rem", color: "#C5963A", flexShrink: 0, marginTop: "0.125rem" }} />
                <span style={{ color: "#374151", fontSize: "0.9375rem" }}>{item.text}</span>
              </div>
            ))}
          </div>
          <p style={{ color: "#6B7280", fontSize: "0.9375rem" }}>
            The exact length of permission depends on your course and personal circumstances.
          </p>
        </div>
      </section>

      {/* ═══ SETTLEMENT ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1rem" }}>
            Does a UK Student Visa lead to settlement?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            The UK Student Visa does not directly lead to permanent residence.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            However, in some cases, time spent in the UK on different lawful visas may count toward long residence, which can support a later application for settlement.
          </p>
          <div style={{ padding: "1rem 1.25rem", background: "#EFF6FF", borderRadius: "0.5rem", borderLeft: "4px solid #3B82F6" }}>
            <p style={{ color: "#1E40AF", fontWeight: 600, fontSize: "0.9375rem" }}>
              It is important to get advice on your long-term immigration plans before making decisions about your visa route.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Frequently Asked Questions</p>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "2rem" }}>
            Common questions about studying in the UK
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              {
                q: "When do I need to apply for a UK Student Visa?",
                a: "If you want to come to the UK to study for more than six months and you do not already hold another visa that allows study, you will usually need to apply for a UK Student Visa.",
              },
              {
                q: "What do I need to qualify?",
                a: "You will usually need to show that you are aged 16 or over, have a valid CAS from an approved institution, have enough funds to support yourself, and meet the English language requirement. If you are under 18, parental consent will also be needed.",
              },
              {
                q: "Can I work while studying?",
                a: "Some students can work limited hours depending on their course and circumstances, but there are restrictions. You cannot be self-employed, run a business, or take certain prohibited roles.",
              },
              {
                q: "How long can I stay in the UK?",
                a: "This depends on your course length and level of study. If your course lasts 12 months or more, your visa will usually include the course period plus extra time after it ends.",
              },
              {
                q: "Can I settle in the UK on a Student Visa?",
                a: "The Student Visa does not directly lead to settlement, but other long-term immigration options may become available depending on your future route and time spent in the UK.",
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
            Ready to apply for your UK Student Visa?
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto 0.75rem", lineHeight: 1.7 }}>
            Our team can help you understand the requirements, prepare your documents, and submit your application with confidence.
          </p>
          <p style={{ color: "#9CA3AF", fontSize: "0.9375rem", marginBottom: "2rem" }}>
            Speak to GIVS Law today for clear and professional advice.
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
