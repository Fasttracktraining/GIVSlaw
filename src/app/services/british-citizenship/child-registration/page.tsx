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
  Heart,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Registration of a Child as a British Citizen | GIVS Law",
  description: "Expert guidance on registering a child as a British citizen. We help families understand eligibility routes and prepare strong applications.",
};

export default function ChildRegistrationPage() {
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
            <Link href="/services/british-citizenship" style={{ color: "#9CA3AF", textDecoration: "none" }}>British Citizenship</Link>
            <span>/</span>
            <span style={{ color: "#D1D5DB" }}>Registration of a Child</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ color: "white" }}>
              <p style={{ color: "#C5963A", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>
                British Citizenship
              </p>
              <h1 style={{ fontSize: "2.125rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Registration of a Child as a British Citizen
              </h1>
              <p style={{ fontSize: "1.0625rem", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                Clear legal guidance to help secure your child&apos;s British citizenship.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#9CA3AF", lineHeight: 1.65, marginBottom: "2rem" }}>
                We assist families through the registration process with care and precision, ensuring every application meets Home Office requirements.
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
              <Image src="/images/family.jpg" alt="Family securing child citizenship" fill style={{ objectFit: "cover" }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section style={{ background: "white", borderBottom: "1px solid #E5E7EB" }}>
        <div className="container-main" style={{ padding: "1.125rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {[
              "Experienced citizenship advisers",
              "Clear eligibility guidance",
              "Careful application preparation",
              "Support with complex cases",
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
                <Image src="/images/about-woman.jpg" alt="Advisor helping family" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "#0B1B3D", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", zIndex: 10 }}>
                <p style={{ fontWeight: 700, fontSize: "1rem" }}>Child citizenship specialists</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>Citizenship</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
                Understanding child registration for British citizenship
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                Registration is the legal process through which a child under the age of 18 can become a British citizen if they are not automatically British at birth.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                This process can be complex and depends on several factors, including where the child was born and the immigration status of their parents.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                Unlike naturalisation, children are not required to pass the Life in the UK test or meet English language requirements. However, children aged 10 or over must meet the good character requirement.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.75 }}>
                Our team provides clear advice and structured support to help ensure a strong and successful application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ELIGIBILITY ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            Is your child eligible for registration?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "2rem" }}>
            A child may be eligible to register as a British citizen under several different routes. The requirements vary depending on their circumstances.
          </p>

          {/* Route cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <RouteCard
              title="Children born in the UK"
              color="#0B1B3D"
              items={[
                "Born in the UK on or after 1 January 1983",
                "Not automatically British at birth",
                "A parent became British or settled before the child turned 18",
                "Application made before the child's 18th birthday",
              ]}
            />
            <RouteCard
              title="Children of armed forces parents"
              color="#0B1B3D"
              items={[
                "Born in the UK on or after 1 January 1983",
                "A parent became a member of the armed forces before the child turned 18",
                "Application made before the child's 18th birthday",
              ]}
            />
            <RouteCard
              title="Children who have lived in the UK for 10 years"
              color="#C5963A"
              items={[
                "Born in the UK on or after 1 January 1983",
                "Not automatically British",
                "No more than 90 days absence in each of the first 10 years",
                "Application made after the child's 10th birthday",
              ]}
            />
            <RouteCard
              title="Children born outside the UK (British by descent)"
              color="#3B82F6"
              items={[
                "Born outside the UK",
                "Parent is British by descent",
                "Grandparent is British otherwise than by descent",
                "Parent lived in the UK for 3 continuous years before the child's birth",
                "Absences during that period must not exceed 270 days",
                "Application made before the child turns 18",
              ]}
            />
            <RouteCard
              title="Children born outside the UK (residence route)"
              color="#3B82F6"
              items={[
                "Child and parents lived in the UK for at least 3 years",
                "Absences must not exceed 270 days",
                "Both parents must consent to the application",
                "Application made before the child turns 18",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ═══ DISCRETIONARY ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
            <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "rgba(197,150,58,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Heart style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A" }} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1rem" }}>
                Discretionary applications
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                If your child does not meet the standard eligibility requirements, it may still be possible to apply on a discretionary basis.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                The Home Office has the authority to grant citizenship where there are strong compassionate or compelling circumstances.
              </p>
              <div style={{ padding: "1rem 1.25rem", background: "#EFF6FF", borderRadius: "0.5rem", borderLeft: "4px solid #3B82F6" }}>
                <p style={{ color: "#1E40AF", fontWeight: 600, fontSize: "0.9375rem" }}>
                  Our team has extensive experience preparing discretionary applications and presenting cases clearly and effectively to maximise the chances of success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="section-label" style={{ justifyContent: "center", marginBottom: "0.75rem" }}>Why Choose Us</p>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D" }}>Why choose GIVS Law</h2>
            <p style={{ color: "#6B7280", maxWidth: "520px", margin: "0.75rem auto 0" }}>
              We support families through complex immigration processes with clarity and confidence.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {[
              { icon: MessageSquare, title: "Clear advice", desc: "Guidance on eligibility and application routes" },
              { icon: FileCheck, title: "Document checks", desc: "Detailed review of all documents before submission" },
              { icon: Target, title: "Full support", desc: "Guidance throughout the entire process" },
              { icon: ShieldCheck, title: "Complex cases", desc: "Experience with discretionary and difficult applications" },
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
            <p style={{ color: "white", fontWeight: 700, fontSize: "1.25rem" }}>Not sure which route applies to your child?</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}>Get a free assessment from our citizenship team.</p>
          </div>
          <Link href="/funnels/british-citizenship" style={{ padding: "0.875rem 2rem", background: "white", color: "#0B1B3D", fontWeight: 700, borderRadius: "0.5rem", textDecoration: "none" }}>
            Get Free Assessment
          </Link>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Frequently Asked Questions</p>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "2rem" }}>
            Common questions about child registration
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { q: "Do children need to pass the Life in the UK test?", a: "No. Children applying for registration are not required to pass the Life in the UK test or meet English language requirements." },
              { q: "Does the good character requirement apply to children?", a: "Yes. Children aged 10 or over must meet the good character requirement." },
              { q: "Can a child apply after turning 18?", a: "In most cases, applications for registration must be made before the age of 18. Different rules apply to adults." },
              { q: "What if my child does not meet the standard requirements?", a: "It may still be possible to apply on a discretionary basis. Professional advice is strongly recommended in these cases." },
              { q: "How long does the process take?", a: "Processing times can vary depending on the complexity of the application. We will guide you on realistic timelines based on your circumstances." },
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
            Ready to secure your child&apos;s British citizenship?
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto 0.75rem", lineHeight: 1.7 }}>
            Our team can guide you through the registration process and help prepare a strong and complete application.
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

function RouteCard({ title, color, items }: { title: string; color: string; items: string[] }) {
  return (
    <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", borderLeft: `4px solid ${color}` }}>
      <h3 style={{ fontWeight: 700, color: "#0B1B3D", marginBottom: "0.875rem", fontSize: "1rem" }}>{title}</h3>
      <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {items.map((item) => (
          <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", color: "#374151", fontSize: "0.9375rem" }}>
            <CheckCircle2 style={{ width: "1rem", height: "1rem", color, flexShrink: 0, marginTop: "0.125rem" }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
