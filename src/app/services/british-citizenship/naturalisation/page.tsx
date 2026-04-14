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
  Globe,
  Award,
} from "lucide-react";

export const metadata = {
  title: "Naturalisation as a British Citizen | GIVS Law",
  description: "Expert guidance on naturalisation as a British citizen. We help you understand eligibility, residence requirements, and prepare a strong citizenship application.",
};

export default function NaturalisationPage() {
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
            <span style={{ color: "#D1D5DB" }}>Naturalisation</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ color: "white" }}>
              <p style={{ color: "#C5963A", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>
                British Citizenship
              </p>
              <h1 style={{ fontSize: "2.25rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Naturalisation as a British Citizen
              </h1>
              <p style={{ fontSize: "1.0625rem", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                Clear guidance to help you become a British citizen with confidence.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#9CA3AF", lineHeight: 1.65, marginBottom: "2rem" }}>
                We support clients through the naturalisation process with clear advice, strong applications, and careful preparation.
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
              <Image src="/images/passport-flag.jpg" alt="British citizenship and passport" fill style={{ objectFit: "cover" }} priority />
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
              "Strong application preparation",
              "Support with discretionary cases",
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
                <p style={{ fontWeight: 700, fontSize: "1rem" }}>Naturalisation specialists</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>Citizenship</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
                Take the final step towards British citizenship
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                Naturalisation is the process through which a non-British national becomes a British citizen.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                It is one of the most important stages in your immigration journey and must be prepared carefully to avoid delays or refusal.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.75 }}>
                Our team provides clear, practical guidance to help you understand the requirements and submit a strong application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BENEFITS ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "rgba(197,150,58,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Award style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A" }} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
                Benefits of naturalisation
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75 }}>
                Becoming a British citizen gives you long-term security and full legal rights in the UK.
              </p>
            </div>
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              "Right to live in the UK permanently",
              "Access to a British passport",
              "Freedom to travel in and out of the UK",
              "Full access to work and study opportunities",
              "Long-term security for you and your family",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#10B981", flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ DUAL CITIZENSHIP ═══ */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
            <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "rgba(197,150,58,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Globe style={{ width: "1.375rem", height: "1.375rem", color: "#C5963A" }} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1rem" }}>
                Dual citizenship
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                The UK allows dual citizenship, meaning you may be able to keep your original nationality while becoming a British citizen.
              </p>
              <div style={{ padding: "0.875rem 1.25rem", background: "#FEF3C7", borderRadius: "0.5rem", borderLeft: "4px solid #F59E0B" }}>
                <p style={{ color: "#92400E", fontSize: "0.9375rem" }}>
                  However, rules depend on your home country. It is important to understand how this applies to your situation before applying.
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
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
              Why choose GIVS Law
            </h2>
            <p style={{ color: "#6B7280", maxWidth: "520px", margin: "0 auto" }}>
              We guide clients through complex immigration rules with clarity, structure, and attention to detail.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {[
              { icon: MessageSquare, title: "Clear advice", desc: "Straightforward guidance on eligibility and requirements" },
              { icon: FileCheck, title: "Document review", desc: "Full review of all documents before submission" },
              { icon: Target, title: "Start to finish", desc: "Support from initial assessment through to decision" },
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
            <p style={{ color: "white", fontWeight: 700, fontSize: "1.25rem" }}>Not sure if you qualify?</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}>Get a free eligibility assessment from our citizenship team.</p>
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
            Common questions about naturalisation
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <FaqItem
              q="Do I qualify to naturalise as a British citizen?"
              a={<>
                <p style={{ marginBottom: "0.75rem" }}>To be eligible, you must show that:</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[
                    "You are over 18 years old",
                    "You are of good character",
                    "You have sufficient knowledge of English and have passed the Life in the UK test",
                    "You have not breached UK immigration laws",
                    "You intend to make the UK your main home",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                      <CheckCircle2 style={{ width: "1rem", height: "1rem", color: "#0B1B3D", flexShrink: 0, marginTop: "0.125rem" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: "0.75rem" }}>You must also meet residence and absence requirements.</p>
              </>}
            />

            <FaqItem
              q="What are the residence requirements?"
              a={<>
                <p style={{ fontWeight: 600, color: "#0B1B3D", marginBottom: "0.5rem" }}>If you are married to a British citizen:</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
                  {[
                    "You must have lived in the UK for at least 3 years",
                    "You must not have been absent for more than 270 days during that period",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                      <CheckCircle2 style={{ width: "1rem", height: "1rem", color: "#10B981", flexShrink: 0, marginTop: "0.125rem" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ fontWeight: 600, color: "#0B1B3D", marginBottom: "0.5rem" }}>If you are not married to a British citizen:</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[
                    "You must have lived in the UK for at least 5 years",
                    "You must not have been absent for more than 450 days during that period",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                      <CheckCircle2 style={{ width: "1rem", height: "1rem", color: "#C5963A", flexShrink: 0, marginTop: "0.125rem" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>}
            />

            <FaqItem
              q="What are the absence rules?"
              a={<>
                <p style={{ marginBottom: "0.75rem" }}>You must not have been outside the UK for more than <strong style={{ color: "#0B1B3D" }}>90 days</strong> in the 12 months before your application.</p>
                <p>In some cases, longer absences may still be accepted at the Home Office&apos;s discretion.</p>
              </>}
            />

            <FaqItem
              q="Do I need Indefinite Leave to Remain?"
              a={<>
                <p style={{ marginBottom: "0.75rem" }}>Yes. You must usually have held Indefinite Leave to Remain for at least <strong style={{ color: "#0B1B3D" }}>12 months</strong> before applying.</p>
                <p>If you are married to a British citizen, you can apply as soon as you receive Indefinite Leave to Remain.</p>
              </>}
            />

            <FaqItem
              q="Can I still qualify if I do not meet all the rules exactly?"
              a={<>
                <p style={{ marginBottom: "0.75rem" }}>In some situations, the Home Office may exercise discretion, especially regarding absences.</p>
                <div style={{ padding: "0.875rem 1.25rem", background: "#EFF6FF", borderRadius: "0.5rem", borderLeft: "4px solid #3B82F6" }}>
                  <p style={{ color: "#1E40AF", fontWeight: 600, fontSize: "0.9375rem" }}>
                    It is important to seek professional advice before applying if your case is not straightforward.
                  </p>
                </div>
              </>}
            />
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section style={{ background: "#0B1B3D", padding: "4rem 0" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
            Ready to apply for British citizenship?
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto 0.75rem", lineHeight: 1.7 }}>
            Our team can help you understand your eligibility, avoid common mistakes, and prepare a strong application.
          </p>
          <p style={{ color: "#9CA3AF", fontSize: "0.9375rem", marginBottom: "2rem" }}>
            Speak to GIVS Law today for clear and professional immigration advice.
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
