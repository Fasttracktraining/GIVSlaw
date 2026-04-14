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
  Clock,
  Users,
  Heart,
  GraduationCap,
} from "lucide-react";

export const metadata = {
  title: "Parent of a Child Student Visa UK | GIVS Law",
  description: "Expert guidance for parents accompanying their child to study in the UK. We help families prepare strong applications with clear advice and practical support.",
};

export default function ParentOfChildStudentPage() {
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
            <Link href="/services/study-in-the-uk" style={{ color: "#9CA3AF", textDecoration: "none" }}>Study in the UK</Link>
            <span>/</span>
            <span style={{ color: "#D1D5DB" }}>Parent of a Child Student</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ color: "white" }}>
              <p style={{ color: "#C5963A", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>
                Study in the UK
              </p>
              <h1 style={{ fontSize: "2.25rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Parent of a Child Student Visa
              </h1>
              <p style={{ fontSize: "1.0625rem", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                Accompany your child while they study at a UK independent school.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#9CA3AF", lineHeight: 1.65, marginBottom: "2rem" }}>
                We help parents understand their eligibility, prepare strong applications, and support their family throughout the process.
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
              <Image src="/images/family.jpg" alt="Parent supporting child studying in the UK" fill style={{ objectFit: "cover" }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section style={{ background: "white", borderBottom: "1px solid #E5E7EB" }}>
        <div className="container-main" style={{ padding: "1.125rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {[
              "Experienced family immigration advisers",
              "Clear guidance for parents",
              "Careful application preparation",
              "Trusted by families worldwide",
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
                <Image src="/images/about-woman.jpg" alt="Immigration advisor helping family" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "#0B1B3D", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", zIndex: 10 }}>
                <p style={{ fontWeight: 700, fontSize: "1rem" }}>Family visa specialists</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>About This Visa</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
                Stay with your child while they study in the UK
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                The Parent of a Child Student Visa allows a parent to live in the UK while their child attends an independent fee paying school. This route is designed for families where the child is between 4 and 11 years old and studying at a qualifying institution.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                We understand that being close to your child during their early education is important. This visa gives eligible parents the opportunity to be present and supportive throughout this formative period.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.75 }}>
                At GIVS Law, we have extensive experience supporting families with both Child Student visas and Parent of a Child Student visas, and we guide you through the entire process with care and clarity.
              </p>
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
              Supporting your family every step of the way
            </h2>
            <p style={{ color: "#6B7280", maxWidth: "540px", margin: "0 auto" }}>
              Applying for a parent visa alongside your child&apos;s student visa requires careful preparation. We make the process straightforward and ensure nothing is missed.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {[
              { icon: MessageSquare, title: "Clear advice", desc: "We explain the requirements in simple terms so you know exactly what is needed" },
              { icon: FileCheck, title: "Document preparation", desc: "We help you gather and organise the correct supporting documents" },
              { icon: Target, title: "Application review", desc: "Every application is carefully checked before submission" },
              { icon: Heart, title: "Family focused", desc: "We consider both your visa and your child's visa together" },
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
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            Who can apply?
          </h2>
          <p style={{ color: "#374151", marginBottom: "1.25rem" }}>
            You may be eligible if your child is aged between 4 and 11 and is studying or about to study at a Home Office approved independent school in the UK. To qualify, you must usually show that:
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {[
              "You are aged 18 or over",
              "You are the parent of a child applying for or already holding a Child Student visa",
              "The other parent is not in the UK or applying to come to the UK at the same time",
              "Your child is aged between 4 and 11",
              "You intend to live with your child during their studies",
              "You will maintain your main home outside the UK",
              "You have enough funds to support yourself and your child without relying on public funds",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#0B1B3D", flexShrink: 0, marginTop: "0.125rem" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ WHERE TO APPLY ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1rem" }}>
            Where can you apply from?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
            Applications are usually made from outside the UK, from your country of residence.
          </p>
          <div style={{ padding: "1rem 1.25rem", background: "#EFF6FF", borderRadius: "0.5rem", borderLeft: "4px solid #3B82F6" }}>
            <p style={{ color: "#1E40AF", fontWeight: 600, fontSize: "0.9375rem" }}>
              You may also apply from inside the UK if you hold valid immigration permission other than as a visitor or short term student. Our team can advise you on whether you are eligible to switch.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ DURATION AND SETTLEMENT ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2.5rem" }}>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", borderTop: "4px solid #0B1B3D", textAlign: "center" }}>
              <Clock style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A", margin: "0 auto 0.75rem" }} />
              <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1.125rem", marginBottom: "0.375rem" }}>How long can you stay?</p>
              <p style={{ color: "#374151", fontSize: "0.9375rem" }}>
                Your visa lasts until your child&apos;s visa ends or when your child turns 12, whichever comes first.
              </p>
            </div>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", borderTop: "4px solid #C5963A", textAlign: "center" }}>
              <ShieldCheck style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A", margin: "0 auto 0.75rem" }} />
              <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1.125rem", marginBottom: "0.375rem" }}>Does this lead to settlement?</p>
              <p style={{ color: "#374151", fontSize: "0.9375rem" }}>
                This visa does not lead directly to permanent residence in the UK.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MID CTA ═══ */}
      <section style={{ background: "#C5963A", padding: "2.5rem 0" }}>
        <div className="container-main" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <p style={{ color: "white", fontWeight: 700, fontSize: "1.25rem" }}>Planning your child&apos;s education in the UK?</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}>Get clear advice on the parent visa and your family&apos;s options.</p>
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
            Common questions about the Parent of a Child Student Visa
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              {
                q: "Who can apply for this visa?",
                a: "You may apply if you are the parent of a child aged between 4 and 11 who is studying or about to study at a Home Office approved independent school in the UK. You must be aged 18 or over, intend to live with your child, and have sufficient funds to support both of you.",
              },
              {
                q: "Can both parents apply?",
                a: "No. Only one parent may apply under this route. The other parent must not be in the UK or applying to come to the UK at the same time.",
              },
              {
                q: "Where do I apply from?",
                a: "Applications are usually made from outside the UK. However, if you already hold valid immigration permission in the UK (other than as a visitor or short term student), you may be able to apply from within the UK.",
              },
              {
                q: "How long does the visa last?",
                a: "Your visa will be granted until your child's visa ends or until your child turns 12, whichever comes first.",
              },
              {
                q: "Can I work on this visa?",
                a: "This visa has restrictions on work. We can advise you on exactly what activities are permitted based on your circumstances.",
              },
              {
                q: "Does this visa lead to settlement?",
                a: "No. The Parent of a Child Student Visa does not directly lead to permanent residence in the UK. If you are considering longer term options, we can advise you on alternative immigration routes.",
              },
              {
                q: "Do I need to maintain a home outside the UK?",
                a: "Yes. One of the requirements is that you maintain your main home outside the UK while living with your child during their studies.",
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
            Need help with a Parent of a Child Student Visa?
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto 0.75rem", lineHeight: 1.7 }}>
            Our team can help you understand your eligibility, prepare the right documents, and submit a strong application with confidence.
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
          <a href="tel:+441156547274" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#D1D5DB", textDecoration: "none", fontSize: "0.9375rem" }}>
            <Phone style={{ width: "1rem", height: "1rem", color: "#C5963A" }} />
            +44 115 654 7274
          </a>
        </div>
      </section>
    </>
  );
}
