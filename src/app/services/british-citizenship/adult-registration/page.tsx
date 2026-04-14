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
} from "lucide-react";

export const metadata = {
  title: "Registration of an Adult as a British Citizen | GIVS Law",
  description: "Expert guidance on adult registration as a British citizen. We help individuals understand complex eligibility routes and prepare strong applications.",
};

export default function AdultRegistrationPage() {
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
            <span style={{ color: "#D1D5DB" }}>Adult Registration</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ color: "white" }}>
              <p style={{ color: "#C5963A", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>
                British Citizenship
              </p>
              <h1 style={{ fontSize: "2.125rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Registration of an Adult as a British Citizen
              </h1>
              <p style={{ fontSize: "1.0625rem", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                A legal route to British citizenship for individuals with specific qualifying circumstances.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#9CA3AF", lineHeight: 1.65, marginBottom: "2rem" }}>
                We help clients understand complex eligibility criteria and prepare strong registration applications with clarity and precision.
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
              <Image src="/images/passport-flag.jpg" alt="British citizenship through registration" fill style={{ objectFit: "cover" }} priority />
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
              "Complex eligibility assessment",
              "Strong application preparation",
              "Discretionary case experience",
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
                <Image src="/images/about-woman.jpg" alt="Immigration advisor" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "#0B1B3D", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", zIndex: 10 }}>
                <p style={{ fontWeight: 700, fontSize: "1rem" }}>Registration specialists</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>Citizenship</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
                Understanding adult registration
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                Registration is a legal route that allows certain individuals to become British citizens where they do not automatically qualify by birth or through standard naturalisation routes. It applies in specific and often complex circumstances.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                Unlike naturalisation, registration does not always require proof of English language ability or passing the Life in the UK test. However, applicants aged 10 or over must still meet the good character requirement.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.75 }}>
                Our team provides clear advice to help you understand whether you qualify and how to prepare a strong application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ELIGIBILITY ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            Are you eligible to register?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "2rem" }}>
            There are several routes to registration as a British citizen. The requirements depend on your personal circumstances. You may qualify under one of the following:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <RouteCard
              number="1"
              title="Historical citizenship through your mother"
              color="#0B1B3D"
              items={[
                "Born outside the UK and Colonies before 1 January 1983",
                "At the time of birth, your mother was a Citizen of the UK and Colonies",
                "You would have automatically become a citizen if the law had allowed citizenship to pass through mothers in the same way as fathers",
                "You would have had the right of abode in the UK before 1 January 1983",
              ]}
            />

            <RouteCard
              number="2"
              title="Children born to unmarried parents"
              color="#0B1B3D"
              items={[
                "Born in the UK before 1 July 2006",
                "Your parents were not married at the time of your birth",
                "You have never been a British citizen",
                "You would have become a citizen if your parents had been married",
              ]}
            />

            <RouteCard
              number="3"
              title="British nationality status holders"
              color="#C5963A"
              items={[
                "You are a British Overseas Territories Citizen, British National (Overseas), British Overseas citizen, British subject, or British protected person",
                "You were in the UK five years before applying",
                "During those five years, you were not absent for more than 450 days",
                "You were not in breach of immigration laws",
                "In the 12 months before applying, you were not absent for more than 90 days and had no immigration restrictions",
              ]}
            />

            <RouteCard
              number="4"
              title="Stateless or no other nationality"
              color="#C5963A"
              items={[
                "You are a British Overseas citizen, British subject, British protected person, or British National (Overseas)",
                "You do not hold any other nationality",
                "You have not lost another nationality by choice or inaction after 4 July 2002 (or 19 March 2009 for BN(O))",
              ]}
            />

            <RouteCard
              number="5"
              title="Armed forces cases"
              color="#3B82F6"
              items={[
                "Born outside the UK on or after 13 January 2010",
                "At the time of your birth, your parent was serving in the armed forces overseas",
                "If under 18 at the time of application, parental consent is required",
              ]}
            />

            <RouteCard
              number="6"
              title="Long residence from childhood"
              color="#3B82F6"
              items={[
                "Born in the UK on or after 1 January 1983",
                "Not automatically a British citizen",
                "Absent from the UK for no more than 90 days per year during your first 10 years",
                "Application made after your 10th birthday (this route is not restricted to children — qualifying adults may also apply)",
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
                If you do not meet the exact requirements above, you may still be able to apply on a discretionary basis. The Home Office has the power to grant citizenship in exceptional circumstances.
              </p>
              <div style={{ padding: "1rem 1.25rem", background: "#EFF6FF", borderRadius: "0.5rem", borderLeft: "4px solid #3B82F6" }}>
                <p style={{ color: "#1E40AF", fontWeight: 600, fontSize: "0.9375rem" }}>
                  Our team has extensive experience advising on complex and discretionary registration applications. We can assess your situation and advise you on the best approach.
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
              We support individuals through complex registration processes with clarity and precision.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {[
              { icon: MessageSquare, title: "Clear advice", desc: "Guidance on which registration route applies to you" },
              { icon: FileCheck, title: "Document review", desc: "Detailed checks of all supporting evidence before submission" },
              { icon: Target, title: "Full support", desc: "Guidance throughout the entire application process" },
              { icon: ShieldCheck, title: "Complex cases", desc: "Experience with discretionary and unusual circumstances" },
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
            <p style={{ color: "white", fontWeight: 700, fontSize: "1.25rem" }}>Not sure which route applies to you?</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}>Our team can assess your eligibility and advise on the strongest approach.</p>
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
            Common questions about adult registration
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              {
                q: "What is adult registration for British citizenship?",
                a: "Registration is a legal route that allows certain individuals to become British citizens where they do not qualify automatically by birth or through standard naturalisation. It applies in specific circumstances such as historical injustice, statelessness, or long residence.",
              },
              {
                q: "Do I need to pass the Life in the UK test?",
                a: "Not always. Unlike naturalisation, registration does not always require proof of English language ability or passing the Life in the UK test. However, applicants aged 10 or over must meet the good character requirement.",
              },
              {
                q: "How many registration routes are there?",
                a: "There are six main routes: historical citizenship through your mother, children born to unmarried parents, British nationality status holders, stateless individuals, armed forces cases, and long residence from childhood. Each has specific requirements.",
              },
              {
                q: "What if I do not meet the exact requirements?",
                a: "It may still be possible to apply on a discretionary basis. The Home Office can grant citizenship in exceptional circumstances. Professional advice is strongly recommended for these cases.",
              },
              {
                q: "How long does the process take?",
                a: "Processing times vary depending on the complexity of the application and the route being used. Our team can advise you on realistic timelines based on your circumstances.",
              },
              {
                q: "Can I apply from outside the UK?",
                a: "It depends on the route. Some registration routes require you to be in the UK, while others can be applied for from overseas. We can confirm which applies to your situation.",
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
            Need help with your eligibility?
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto 0.75rem", lineHeight: 1.7 }}>
            Registration applications can be complex and depend on detailed legal criteria. Our team can assess your situation and guide you through the process with clarity and confidence.
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

function RouteCard({ number, title, color, items }: { number: string; title: string; color: string; items: string[] }) {
  return (
    <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", borderLeft: `4px solid ${color}` }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.875rem" }}>
        <span style={{ width: "1.75rem", height: "1.75rem", borderRadius: "50%", background: color, color: color === "#C5963A" ? "white" : "#C5963A", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.75rem", flexShrink: 0 }}>
          {number}
        </span>
        <h3 style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1rem" }}>{title}</h3>
      </div>
      <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", paddingLeft: "2.5rem" }}>
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
