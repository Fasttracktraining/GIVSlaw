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
} from "lucide-react";

export const metadata = {
  title: "British Citizenship & Passport Applications | GIVS Law",
  description: "Expert guidance on British citizenship and passport applications. We help you complete your immigration journey with clear advice and strong application support.",
};

export default function BritishCitizenshipPage() {
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
            <span style={{ color: "#D1D5DB" }}>British Citizenship</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ color: "white" }}>
              <p style={{ color: "#C5963A", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>
                British Citizenship
              </p>
              <h1 style={{ fontSize: "2.25rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem" }}>
                British Citizenship &amp; Passport Applications
              </h1>
              <p style={{ fontSize: "1.0625rem", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                Clear guidance to help you complete your journey to becoming a British national.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#9CA3AF", lineHeight: 1.65, marginBottom: "2rem" }}>
                We support clients through the final stage of their immigration journey, helping them apply for British citizenship and obtain a British passport with confidence.
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
              <Image src="/images/passport-flag.jpg" alt="British passport representing citizenship" fill style={{ objectFit: "cover" }} priority />
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
              "Careful document review",
              "Clear and honest guidance",
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
                <Image src="/images/about-woman.jpg" alt="Citizenship advisor" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "#0B1B3D", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", zIndex: 10 }}>
                <p style={{ fontWeight: 700, fontSize: "1rem" }}>Citizenship specialists</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>Citizenship</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
                Complete your journey with British citizenship
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                Becoming a British citizen is a major milestone. After registration or naturalisation, many people choose to apply for a British passport to confirm their status and gain full travel freedom.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1rem" }}>
                A British passport allows you to enter and leave the UK freely, and serves as official proof of your right to live, work, and study in the UK.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.75 }}>
                Our team provides clear guidance to ensure your application is accurate, complete, and submitted correctly.
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
            <p style={{ color: "#6B7280", maxWidth: "520px", margin: "0 auto" }}>
              We support clients through the final stages of their immigration journey with clarity and care.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {[
              { icon: MessageSquare, title: "Clear advice", desc: "Straightforward guidance on citizenship and passport applications" },
              { icon: FileCheck, title: "Document review", desc: "Careful review of all documents before submission" },
              { icon: Target, title: "Avoid delays", desc: "Guidance on avoiding common mistakes that cause refusals" },
              { icon: ShieldCheck, title: "Complex cases", desc: "Experienced support for refused or difficult applications" },
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
            <p style={{ color: "white", fontWeight: 700, fontSize: "1.25rem" }}>Ready to apply for British citizenship?</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}>Get expert guidance to make sure your application is right first time.</p>
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
            Common questions about citizenship and passports
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {/* FAQ 1 */}
            <FaqItem
              q="How can I apply for a British passport?"
              a={<>
                <p style={{ marginBottom: "0.75rem" }}>After becoming a British citizen through registration or naturalisation, you can apply for a British passport.</p>
                <p>A passport is not issued automatically. You must submit a separate application.</p>
              </>}
            />

            {/* FAQ 2 */}
            <FaqItem
              q="How does the application process work?"
              a={<>
                <p style={{ marginBottom: "0.75rem" }}>If you are applying from within the UK, you can apply:</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
                  {["Online", "By post", "Through the Post Office Check and Send Service", "By appointment in certain cases"].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                      <CheckCircle2 style={{ width: "1rem", height: "1rem", color: "#0B1B3D", flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>If applying from outside the UK, the process depends on the country. Our team provides tailored advice based on your location.</p>
              </>}
            />

            {/* FAQ 3 */}
            <FaqItem
              q="What documents are required?"
              a={<>
                <p style={{ fontWeight: 600, color: "#0B1B3D", marginBottom: "0.5rem" }}>You will typically need:</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
                  {[
                    "Your certificate of naturalisation or registration",
                    "Two recent photographs that meet official requirements",
                    "All valid identity documents",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                      <CheckCircle2 style={{ width: "1rem", height: "1rem", color: "#0B1B3D", flexShrink: 0, marginTop: "0.125rem" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ fontWeight: 600, color: "#0B1B3D", marginBottom: "0.5rem" }}>You may also need:</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
                  {[
                    "Your previous passport",
                    "Any additional passports",
                    "Your birth or adoption certificate",
                    "Evidence of your parents' immigration status",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                      <CheckCircle2 style={{ width: "1rem", height: "1rem", color: "#C5963A", flexShrink: 0, marginTop: "0.125rem" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>You must also provide a counter signatory who confirms your identity.</p>
              </>}
            />

            {/* FAQ 4 */}
            <FaqItem
              q="How long does the process take?"
              a={<>
                <p style={{ marginBottom: "0.75rem" }}>Processing times can vary, but you should allow at least <strong style={{ color: "#0B1B3D" }}>10 weeks</strong>.</p>
                <p>In some cases, you may be asked to attend a passport interview.</p>
              </>}
            />

            {/* FAQ 5 */}
            <FaqItem
              q="Will I automatically be granted a British passport?"
              a={<>
                <p style={{ marginBottom: "0.75rem" }}>No. Only British nationals can apply, but approval is not guaranteed.</p>
                <p style={{ fontWeight: 600, color: "#0B1B3D", marginBottom: "0.5rem" }}>An application may be refused if:</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[
                    "There are legal restrictions preventing travel",
                    "You are subject to court orders",
                    "You are involved in serious criminal matters",
                    "You owe money to the UK government",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                      <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: "#EF4444", flexShrink: 0, marginTop: "0.5rem" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>}
            />

            {/* FAQ 6 */}
            <FaqItem
              q="What happens if my application is refused?"
              a={<>
                <p style={{ marginBottom: "0.75rem" }}>A refusal does not always prevent future success.</p>
                <div style={{ padding: "0.875rem 1.25rem", background: "#EFF6FF", borderRadius: "0.5rem", borderLeft: "4px solid #3B82F6" }}>
                  <p style={{ color: "#1E40AF", fontWeight: 600, fontSize: "0.9375rem" }}>
                    Our team can review your case, identify the issue, and help you prepare a stronger application.
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
            Ready to apply for British citizenship or a passport?
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto 0.75rem", lineHeight: 1.7 }}>
            Our team can guide you through the process and help you avoid delays or mistakes.
          </p>
          <p style={{ color: "#9CA3AF", fontSize: "0.9375rem", marginBottom: "2rem" }}>
            Speak to GIVS Law today for clear, professional immigration advice.
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
