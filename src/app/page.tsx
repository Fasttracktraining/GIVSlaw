import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/layout/Marquee";
import {
  ShieldCheck,
  GraduationCap,
  Briefcase,
  Landmark,
  ArrowRight,
  CheckCircle2,
  Phone,
} from "lucide-react";

const services = [
  {
    name: "Student Visa",
    description: "Study in the UK with full guidance from application to approval.",
    icon: GraduationCap,
    href: "/funnels/skilled-worker",
  },
  {
    name: "British Citizenship",
    description: "Apply with confidence and avoid mistakes that cause delays.",
    icon: ShieldCheck,
    href: "/funnels/british-citizenship",
  },
  {
    name: "Business Visa",
    description: "Start or expand your business in the UK with expert support.",
    icon: Briefcase,
    href: "/funnels/visitor-visa",
  },
  {
    name: "Working Visa",
    description: "Get the right visa and move forward in your career.",
    icon: Landmark,
    href: "/funnels/skilled-worker",
  },
];

const processSteps = [
  { number: "01", title: "Initial Consultation", description: "We assess your situation, explain your options, and create a clear plan for your visa application." },
  { number: "02", title: "Document Preparation", description: "We guide you through every document, check everything is correct, and prepare your full application." },
  { number: "03", title: "Application Submission", description: "We submit your application on time, track its progress, and keep you informed at every stage." },
];

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="bg-navy">
        <div className="container-main py-16 md:py-24">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div className="text-white">
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
                ✦ Your Trusted Immigration Partner
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Safe. Simple.<br />Secure Immigration.
              </h1>
              <p className="text-gray-300 text-lg" style={{ maxWidth: "480px", marginBottom: "1rem", lineHeight: "1.75" }}>
                We help you get your visa approved without stress, confusion, or delays.
              </p>
              <p className="text-gray-400" style={{ maxWidth: "480px", marginBottom: "2rem", fontSize: "0.9375rem", lineHeight: "1.7" }}>
                Our qualified and regulated immigration advisors guide you step by step
                with clear advice and real support.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                <Link href="/funnels/general-consultation" style={{ padding: "0.875rem 2rem", background: "#C5963A", color: "white", fontWeight: 700, borderRadius: "0.5rem", textDecoration: "none", fontSize: "1rem" }}>
                  Get Free Consultation
                </Link>
                <Link href="/consultation" style={{ padding: "0.875rem 2rem", border: "2px solid white", color: "white", fontWeight: 600, borderRadius: "0.5rem", textDecoration: "none" }}>
                  Book Your Call Now
                </Link>
              </div>
              <a href="tel:+441156547274" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#D1D5DB", textDecoration: "none", fontSize: "0.875rem" }}>
                <Phone style={{ width: "0.875rem", height: "0.875rem", color: "#C5963A" }} />
                Call now: +44 115 654 7274
              </a>
            </div>
            <div style={{ position: "relative", width: "100%", aspectRatio: "6/5", borderRadius: "0.5rem", overflow: "hidden" }}>
              <Image src="/images/hero-passport.jpg" alt="Immigration consultant holding UK passport" fill style={{ objectFit: "cover" }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST LINE ═══ */}
      <section style={{ background: "white", borderBottom: "1px solid #E5E7EB" }}>
        <div className="container-main" style={{ padding: "1.25rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {[
              { icon: ShieldCheck, text: "Regulated immigration advisors" },
              { icon: CheckCircle2, text: "High visa success rate" },
              { text: "Trusted by clients worldwide" },
              { text: "Fast and simple process" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", color: "#374151", fontSize: "0.875rem", fontWeight: 500 }}>
                <CheckCircle2 style={{ width: "1rem", height: "1rem", color: "#C5963A", flexShrink: 0 }} />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <Marquee text="Speak to an expert today and get your plan in minutes — Call +44 115 654 7274" href="tel:+441156547274" variant="gold" />

      {/* ═══ ABOUT ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div style={{ position: "relative", maxWidth: "460px" }}>
              <div style={{ position: "relative", aspectRatio: "5/6", borderRadius: "0.5rem", overflow: "hidden" }}>
                <Image src="/images/about-woman.jpg" alt="Immigration advisor helping client" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "#0B1B3D", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", zIndex: 10 }}>
                <p className="font-bold text-lg">High visa success rate</p>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>Who Are GIVSLAW</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy" style={{ marginBottom: "1.5rem" }}>
                Not just a traditional visa firm
              </h2>
              <p className="text-gray-600" style={{ marginBottom: "1rem", lineHeight: "1.75" }}>
                Global Immigration and Visa Services is a modern online immigration law firm
                helping individuals, families, and businesses move to the UK with confidence.
              </p>
              <p className="text-gray-600" style={{ marginBottom: "1.5rem", lineHeight: "1.75" }}>
                We do not just process applications.
                We guide you, support you, and make sure you understand every step.
              </p>
              <p className="text-navy font-semibold" style={{ marginBottom: "0.75rem", fontSize: "0.9375rem" }}>Our UK based legal team provides:</p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                {[
                  "Clear and honest advice",
                  "Personal support for every client",
                  "Flexible consultations that fit your schedule",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151" }}>
                    <CheckCircle2 style={{ width: "1.25rem", height: "1.25rem", color: "#0B1B3D", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600" style={{ lineHeight: "1.75", marginBottom: "1.5rem" }}>
                With years of experience, we help clients across the world successfully apply
                for UK visas, citizenship, and business immigration.
              </p>
              <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.75rem", background: "#0B1B3D", color: "white", fontWeight: 600, borderRadius: "0.375rem", textDecoration: "none" }}>
                Learn More <ArrowRight style={{ width: "1rem", height: "1rem" }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section style={{ padding: "5rem 0", background: "#F9FAFB" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label" style={{ justifyContent: "center", marginBottom: "0.75rem" }}>How We Help You</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy" style={{ marginBottom: "1rem" }}>How we help you succeed</h2>
            <p className="text-gray-500" style={{ maxWidth: "540px", margin: "0 auto" }}>
              We make immigration simple and give you the best chance of approval.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {services.map((service) => (
              <div key={service.name} style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                <div style={{ width: "3.5rem", height: "3.5rem", borderRadius: "50%", background: "rgba(11,27,61,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                  <service.icon style={{ width: "1.5rem", height: "1.5rem", color: "#0B1B3D" }} />
                </div>
                <h3 className="font-bold text-navy" style={{ fontSize: "1.125rem", marginBottom: "0.5rem" }}>{service.name}</h3>
                <p className="text-gray-500" style={{ fontSize: "0.875rem", marginBottom: "1rem", lineHeight: "1.6" }}>{service.description}</p>
                <Link href={service.href} className="text-navy font-semibold text-sm hover:text-gold transition-colors" style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                  Get Started <ArrowRight style={{ width: "1rem", height: "1rem" }} />
                </Link>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", marginTop: "2rem", color: "#6B7280" }}>
            Need help? {" "}
            <Link href="/consultation" className="text-navy font-semibold underline hover:text-gold">Speak to an advisor today</Link>
          </p>
        </div>
      </section>

      {/* ═══ CONSULTANCY ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div style={{ position: "relative", aspectRatio: "1", borderRadius: "0.5rem", overflow: "hidden" }}>
                <Image src="/images/women-laptop.jpg" alt="Immigration advisor at laptop" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "relative", aspectRatio: "1", borderRadius: "0.5rem", overflow: "hidden" }}>
                <Image src="/images/handshake.jpg" alt="Professional handshake after successful visa" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "relative", aspectRatio: "3/1", borderRadius: "0.5rem", overflow: "hidden", gridColumn: "span 2" }}>
                <Image src="/images/document-review.jpg" alt="Advisor reviewing immigration documents" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>Our Consultancy</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy" style={{ marginBottom: "1.5rem" }}>Expert advice. Real results.</h2>
              <p className="text-gray-600" style={{ marginBottom: "1rem", lineHeight: "1.75" }}>
                Our experienced immigration lawyers work with you to get the best outcome for your case.
              </p>
              <p className="text-gray-600" style={{ marginBottom: "1.5rem", lineHeight: "1.75" }}>
                We keep everything simple, clear, and focused on success.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                {[
                  "Your information is fully protected",
                  "Track your application progress",
                  "Easy and guided process",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151" }}>
                    <CheckCircle2 style={{ width: "1.25rem", height: "1.25rem", color: "#0B1B3D", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", gap: "1rem" }}>
                <Link href="/funnels/general-consultation" style={{ display: "inline-flex", padding: "0.875rem 2rem", background: "#C5963A", color: "white", fontWeight: 700, borderRadius: "0.375rem", textDecoration: "none" }}>
                  Apply Now
                </Link>
                <Link href="/contact" style={{ display: "inline-flex", padding: "0.875rem 2rem", background: "#0B1B3D", color: "white", fontWeight: 600, borderRadius: "0.375rem", textDecoration: "none" }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROOF / STATS BANNER ═══ */}
      <section style={{ position: "relative", height: "16rem", overflow: "hidden" }}>
        <Image src="/images/london-skyline.jpg" alt="London skyline" fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(11,27,61,0.85)", display: "flex", alignItems: "center" }}>
          <div className="container-main" style={{ width: "100%" }}>
            <h3 style={{ textAlign: "center", color: "white", fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.5rem" }}>Why clients choose us</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
              {[
                "Trusted by clients worldwide",
                "Strong visa approval success",
                "Fast processing support",
                "Experts across multiple visa types",
              ].map((stat) => (
                <div key={stat} style={{ textAlign: "center", color: "white", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "0.5rem", padding: "1rem 0.75rem" }}>
                  <p className="font-semibold" style={{ fontSize: "0.875rem" }}>{stat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ URGENCY MARQUEE ═══ */}
      <Marquee text="Get your free visa assessment today — Find out your best option in minutes" href="/funnels/general-consultation" variant="navy" />

      {/* ═══ COURSES ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div style={{ position: "relative", aspectRatio: "3/2", borderRadius: "0.5rem", overflow: "hidden" }}>
              <Image src="/images/boardroom.jpg" alt="Students preparing for UK tests" fill style={{ objectFit: "cover" }} />
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>Prepare &amp; Succeed</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy" style={{ marginBottom: "1.5rem" }}>Secure your future today</h2>
              <p className="text-gray-600" style={{ marginBottom: "2rem", lineHeight: "1.75" }}>
                We help you pass the required tests and move forward faster.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { title: "Life in the UK Test", desc: "Pass with expert training and support" },
                  { title: "A2 English", desc: "Build your confidence and pass your exam" },
                  { title: "B1 English", desc: "Get ready for citizenship and visa success" },
                ].map((course) => (
                  <div key={course.title} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <CheckCircle2 style={{ width: "1.25rem", height: "1.25rem", color: "#C5963A", flexShrink: 0, marginTop: "0.125rem" }} />
                    <div>
                      <p style={{ fontWeight: 600, color: "#0B1B3D" }}>{course.title}</p>
                      <p style={{ fontSize: "0.875rem", color: "#6B7280", marginTop: "0.125rem" }}>{course.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section style={{ padding: "5rem 0", background: "#F9FAFB" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start", marginBottom: "3rem" }}>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>Our Process</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">Step by step immigration journey</h2>
            </div>
            <p className="text-gray-500" style={{ lineHeight: "1.75" }}>
              From your first consultation to your visa approval, we provide clear guidance
              and keep you informed at every stage. Simple, stress-free, and focused on results.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
            {processSteps.map((step) => (
              <div key={step.number} style={{ background: "white", borderRadius: "0.75rem", padding: "2rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "#0B1B3D", color: "#C5963A", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.125rem", marginBottom: "1.25rem" }}>
                  {step.number}
                </div>
                <h3 className="font-bold text-navy" style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>{step.title}</h3>
                <p className="text-gray-500" style={{ fontSize: "0.875rem", lineHeight: "1.75" }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section style={{ background: "#0B1B3D", padding: "4rem 0" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
            Got questions? Let&apos;s help you today
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto 0.75rem", lineHeight: "1.7" }}>
            Speak directly to an immigration advisor and get clear answers for your situation.
          </p>
          <p style={{ color: "#9CA3AF", fontSize: "0.9375rem", marginBottom: "2rem" }}>
            No confusion. No delays. Just the right plan for you.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            <Link href="/consultation" style={{ padding: "0.875rem 2.5rem", background: "#C5963A", color: "white", fontWeight: 700, borderRadius: "0.5rem", textDecoration: "none", fontSize: "1.0625rem" }}>
              Book Your Free Consultation
            </Link>
            <Link href="/contact" style={{ padding: "0.875rem 2.5rem", border: "2px solid white", color: "white", fontWeight: 600, borderRadius: "0.5rem", textDecoration: "none", fontSize: "1.0625rem" }}>
              Let&apos;s Talk
            </Link>
          </div>
          <a href="tel:+441156547274" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#D1D5DB", textDecoration: "none", fontSize: "1rem" }}>
            <Phone style={{ width: "1rem", height: "1rem", color: "#C5963A" }} />
            Call: 0115 654 7274
          </a>
        </div>
      </section>
    </>
  );
}
