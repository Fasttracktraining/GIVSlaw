import Image from "next/image";
import Link from "next/link";
import HeroBanner from "@/components/layout/HeroBanner";
import Marquee from "@/components/layout/Marquee";
import {
  CheckCircle2,
  Scale,
  Puzzle,
  Globe,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Scale,
    title: "Expert Immigration Consultation",
    description:
      "We have years of experience in providing specialist advice to clients facing immigration challenges and procedural application barriers.",
  },
  {
    icon: Puzzle,
    title: "Tailored Solutions",
    description:
      "Our diverse team has many years of experience dealing with the home office and complex problems our clients face. We will tailor-make the visa application process to suit your requirements.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description:
      "Our diverse team of immigration specialists and consultants come from a range of cultural backgrounds with abilities to communicate with and to understand the multi-lingual challenges faced by clients.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Our experts assess your immigration need thoroughly and provide personalized advice ensuring the best possible outcome.",
  },
  {
    number: "02",
    title: "Document Preparation",
    description:
      "We guide you through the documentation process to ensure accuracy and complete submission.",
  },
  {
    number: "03",
    title: "Application Submission",
    description:
      "We handle the submission process to ensure timely and correct application filing with no further delays.",
  },
];

const trustPoints = [
  "Personalized guidance at every step",
  "Tailored solutions for your journey",
  "Trusted expertise for success",
  "Excellence in immigration services",
  "Committed to your success",
  "Your goals, our priority",
];

export default function AboutPage() {
  return (
    <>
      <HeroBanner
        title="About us"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "About Us", href: "/about" },
        ]}
      />

      {/* ─── WHO WE ARE ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/images/about-woman.jpg"
                alt="Immigration advisor"
                width={500}
                height={600}
                className="rounded-lg object-cover w-full max-w-md"
              />
              <div className="absolute bottom-6 left-6 bg-navy text-white px-6 py-3 rounded-lg shadow-lg">
                <p className="font-bold text-lg">High successful visa rate</p>
              </div>
            </div>

            <div>
              <p className="section-label mb-3">Who Are GIVSLAW</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Not just a traditional visa &amp; immigration firm
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Global Immigration and Visa Services is a leading independent online
                immigration law firm providing individual, family, business / corporate
                immigration and migration services working with both UK and overseas
                clients. We provide our clients with high quality advice, business co-
                nsultancy, and support related to both inbound immigration to the UK
                and migration services to other destinations across the world with
                subsequent visa extensions, settlement, and citizenship.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-navy flex-shrink-0" />
                  We offer flexible hours to fit your busy schedule.
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-navy flex-shrink-0" />
                  We provide Free Consultation for some private individuals.
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-navy flex-shrink-0" />
                  Our team is committed making you feel comfortable.
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                With many years of immigration experience, our UK based team of
                immigration lawyers offers online legal representation and
                assistance to a range of UK residents, businesses and corporate
                business executives.
              </p>
              <Link
                href="/contact"
                className="inline-flex mt-6 px-8 py-3.5 bg-navy text-white font-semibold rounded hover:bg-navy-light transition-colors"
              >
                Contact Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <p className="section-label mb-3">Our Features</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                Unmatched expertise and comprehensive support
              </h2>
            </div>
            <p className="text-gray-500">
              We provide a skilled staff to help you get the most out of your
              immigration matter. Our qualified and dependable immigration
              consultants can assist you.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                <Link
                  href="/consultation"
                  className="text-navy font-semibold text-sm flex items-center gap-1 hover:text-gold transition-colors"
                >
                  Book a consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-gray-500">
            Need visa &amp; immigration consultation?{" "}
            <Link href="/contact" className="text-navy font-semibold underline hover:text-gold">
              Contact Now
            </Link>
          </p>
        </div>
      </section>

      {/* ─── OUR APPROACH ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/images/boardroom.jpg"
                alt="Team collaboration"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>

            <div>
              <p className="section-label mb-3">Our Approach</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Empowering your path to global success
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our experienced team is dedicated to helping you make the most of
                your immigration journey. With reliable and knowledgeable consultants,
                we guide you toward achieving positive outcomes and ensuring your
                aspirations are met.
              </p>
              <p className="text-gray-600 mb-6">
                Our vision is to simplify the immigration process with expert guidance,
                ensuring every client achieves their global aspirations seamlessly.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-center gap-2 text-gray-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <Marquee
        text="Get Free Online Visa Assessment Today! - Apply Here"
        href="/consultation"
        variant="navy"
      />

      {/* ─── PROCESS SECTION ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <p className="section-label mb-3">Our Process</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                Step by step immigration journey
              </h2>
            </div>
            <p className="text-gray-500">
              Our process ensures a smooth immigration journey. From consultation to
              completion, we provide clear guidance and keep you informed, making the
              experience efficient and stress-free.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-navy text-gold flex items-center justify-center font-bold text-lg mb-5">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
