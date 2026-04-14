import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  XCircle,
  Phone,
  ArrowRight,
  ShieldCheck,
  Clock,
  Users,
  ChevronDown,
} from "lucide-react";
import HeroBanner from "@/components/layout/HeroBanner";

// Service page config — add more services here following the same pattern
const SERVICE_PAGES: Record<string, ServicePageData> = {
  "individual-and-family-immigration": {
    title: "Individual & Family Immigration",
    headline: "Individual & Family Immigration Made Simple",
    subheadline: "Move to the UK with confidence. We guide you step by step so you avoid mistakes, delays, and stress.",
    supportLine: "Speak to an expert today and get clear answers for your situation.",
    funnelSlug: "spouse-visa",
    image: "/images/family.jpg",

    intro: {
      paragraphs: [
        "We help individuals and families successfully apply to enter or remain in the UK.",
        "Whether you are visiting, joining family, or planning your future, our expert team will guide you through the entire process.",
      ],
      highlight: "We do not just submit applications.",
      bullets: [
        "Explain everything clearly",
        "Help you avoid costly mistakes",
        "Give you the best chance of approval",
      ],
      closing: "With years of experience working with UK immigration law, we understand what the Home Office expects and how to position your application correctly.",
    },

    whyChooseUs: {
      headline: "Why clients trust us",
      points: [
        "Experienced UK immigration advisors",
        "Personal support for every case",
        "Clear and honest guidance",
        "Strong success across visa applications",
      ],
      closing: "We focus on getting results while making the process simple for you.",
    },

    visaSection: {
      headline: "UK Visitor Visa Guidance",
      intro: "We help you apply for the right visa based on your situation.",
      subheadline: "A UK Visitor Visa allows you to:",
      bullets: [
        "Visit family and friends",
        "Travel for tourism",
        "Attend business meetings",
        "Study short term",
        "Receive private medical treatment",
      ],
      closing: "We make sure your application is complete, accurate, and positioned correctly for approval.",
    },

    eligibility: {
      headline: "Who can apply",
      intro: "To qualify, you must show:",
      points: [
        "You will leave the UK after your visit",
        "You can support yourself financially",
        "You are visiting for a valid reason",
        "You will not live in the UK through repeated visits",
      ],
      closing: "We help you prepare strong evidence so your application is clear and convincing.",
    },

    canDo: [
      "Visit, travel, and spend time in the UK",
      "See family or friends",
      "Attend meetings or events",
      "Study short courses",
    ],

    cannotDo: [
      "Work or take employment",
      "Run a business",
      "Provide services",
      "Stay long term",
    ],

    duration: {
      shortTerm: { label: "Short term visa", detail: "Up to 6 months per visit" },
      longTerm: { label: "Long term visa", detail: "2, 5, or 10 years with multiple visits, each stay up to 6 months" },
    },

    faqs: [
      {
        q: "When do I need to apply for a UK Visitor Visa?",
        a: "If you are not a British citizen or do not have settled status, you will usually need a visa to visit the UK. Some nationalities can visit without a visa for up to 6 months. We can check whether you need one.",
      },
      {
        q: "How do I qualify for a UK Visitor Visa?",
        a: "You need to show that your visit is genuine, that you can fund your stay, and that you plan to leave the UK afterwards. We help you gather the right evidence and present a strong application.",
      },
      {
        q: "What can I do in the UK on a Visitor Visa?",
        a: "You can visit family, travel, attend meetings, study short courses, and receive medical treatment. You cannot work, start a business, or provide services.",
      },
      {
        q: "What can I not do in the UK on a Visitor Visa?",
        a: "You cannot work, take employment, run a business, provide services, or live in the UK long term. Breaking these rules can affect future visa applications.",
      },
      {
        q: "How long can I stay in the UK?",
        a: "A standard visitor visa allows you to stay for up to 6 months. Long term visit visas (2, 5, or 10 years) allow multiple visits, but each stay must be 6 months or less.",
      },
    ],
  },

  "business-visitor-visa": {
    title: "Business & Visitor Visa",
    headline: "Business & Visitor Visa Made Simple",
    subheadline: "Travel to the UK for business with confidence. We guide you step by step so you avoid delays, refusals, and mistakes.",
    supportLine: "Get expert advice and know exactly what you need before you apply.",
    funnelSlug: "visitor-visa",
    image: "/images/london-building.jpg",

    intro: {
      paragraphs: [
        "We help professionals, business owners, and individuals successfully apply for UK Business and Visitor Visas.",
        "Whether you are travelling for meetings, events, or short term business activities, our team will guide you through the entire process.",
      ],
      highlight: "We do not just help you apply.",
      bullets: [
        "Explain everything clearly",
        "Help you avoid common mistakes",
        "Give you the best chance of approval",
      ],
      closing: "With strong experience in UK immigration law, we understand what the Home Office looks for and how to prepare your application properly.",
    },

    whyChooseUs: {
      headline: "Why clients trust us",
      points: [
        "Experienced UK immigration advisors",
        "Personal support for every application",
        "Clear and honest guidance",
        "Strong success across visa applications",
      ],
      closing: "We focus on getting results while keeping the process simple for you.",
    },

    visaSection: {
      headline: "UK Business Visitor Visa Guidance",
      intro: "If you are travelling to the UK for business, you may need a Business Visitor Visa depending on your nationality. If you are from a visa national country, you must apply before travelling. If you are not, you may still be assessed at the UK border and must meet all requirements.",
      subheadline: "Allowed business activities include:",
      bullets: [
        "Attend meetings, conferences, and interviews",
        "Negotiate and sign contracts",
        "Attend trade fairs for promotional purposes",
        "Carry out site visits and inspections",
        "Give short talks that are not for profit",
        "Receive training or briefings from a UK company",
      ],
      closing: "We help you prepare everything correctly so you can travel with confidence.",
    },

    eligibility: {
      headline: "Who can apply",
      intro: "To qualify, you must show:",
      points: [
        "You will leave the UK after your visit",
        "You have enough funds for your trip",
        "Your visit is for a valid business purpose",
        "You will not stay long term or live in the UK",
      ],
      closing: "We help you prepare strong supporting documents so your application is clear and credible.",
    },

    canDo: [
      "Attend meetings, conferences, and interviews",
      "Negotiate and sign contracts",
      "Attend trade fairs for promotional purposes",
      "Carry out site visits and inspections",
      "Give short talks that are not for profit",
      "Receive training or briefings from a UK company",
    ],

    cannotDo: [
      "Work for a UK company",
      "Take employment",
      "Run a business in the UK",
      "Provide paid services",
      "Do internships or work placements",
    ],

    duration: {
      shortTerm: { label: "Standard visit", detail: "Up to 6 months per visit" },
      longTerm: { label: "Long term visa", detail: "2, 5, or 10 years with multiple visits, each stay up to 6 months" },
    },

    process: {
      headline: "Our simple process",
      steps: [
        { title: "Speak to an advisor", desc: "Explain your situation and we will assess your needs" },
        { title: "We review your documents", desc: "We check everything and guide your application" },
        { title: "Submit with confidence", desc: "Your application goes in correctly, avoiding delays" },
      ],
    },

    faqs: [
      {
        q: "How can I come to the UK for a business trip?",
        a: "You may need a Business Visitor Visa depending on your nationality. We can check your requirements and help you apply correctly so there are no issues at the border.",
      },
      {
        q: "Do I need a visa before travelling?",
        a: "If you are from a visa national country, yes — you must apply before you travel. If you are not, you can enter without a visa but must still meet the entry requirements. We can advise you on your specific situation.",
      },
      {
        q: "What can I do in the UK on a Business Visitor Visa?",
        a: "You can attend meetings, conferences, interviews, and trade fairs. You can also negotiate contracts, carry out site visits, and receive training. You cannot work, take employment, or provide paid services.",
      },
      {
        q: "What can I not do in the UK on a Business Visitor Visa?",
        a: "You cannot work for a UK company, take any form of employment, run a business, provide paid services, or do internships. Breaking these rules can lead to visa refusal and affect future applications.",
      },
    ],
  },

  "eu-settlement-scheme": {
    title: "EU Settlement Scheme",
    headline: "EU Settlement Scheme Made Simple",
    subheadline: "Secure your right to live in the UK with clear guidance and expert support.",
    supportLine: "We help you apply correctly and avoid delays or refusals.",
    funnelSlug: "ilr",
    image: "/images/passport-flag.jpg",

    intro: {
      paragraphs: [
        "The EU Settlement Scheme allows EU, EEA, and Swiss citizens and their families to continue living in the UK after Brexit.",
        "Even though the main deadline has passed, late applications may still be accepted in certain situations.",
        "We help you understand your eligibility, prepare your application, and secure your status with confidence.",
      ],
      highlight: "We do not just process your application.",
      bullets: [
        "Explain everything clearly",
        "Guide you step by step",
        "Help you avoid mistakes",
        "Give you the best chance of approval",
      ],
      closing: "",
    },

    whyChooseUs: {
      headline: "Why clients trust us",
      points: [
        "Experienced UK immigration advisors",
        "Personal support for every case",
        "Clear and honest guidance",
        "Strong success across settlement applications",
      ],
      closing: "We focus on getting results while making the process simple for you.",
    },

    extraSections: [
      {
        label: "Settled Status",
        headline: "What is Settled Status",
        paragraphs: [
          "Settled Status gives you the right to live, work, and stay in the UK permanently.",
          "It is usually granted if you have lived in the UK for at least 5 continuous years.",
        ],
        bullets: [
          "Live in the UK permanently",
          "Work and study",
          "Access healthcare and benefits",
          "Apply for British citizenship later",
        ],
      },
      {
        label: "Pre-Settled Status",
        headline: "What is Pre-Settled Status",
        paragraphs: [
          "Pre-Settled Status is for people who have not yet completed 5 years in the UK.",
          "It allows you to stay in the UK for up to 5 years and later apply for Settled Status.",
        ],
        bullets: [
          "Work and study in the UK",
          "Travel in and out of the UK",
          "Apply for Settled Status once eligible",
        ],
        note: "Important: You must not spend more than 2 years outside the UK in a row.",
      },
    ],

    visaSection: {
      headline: "Who can apply",
      intro: "You may be eligible if:",
      subheadline: "Eligible family members may include:",
      bullets: [
        "Spouse or partner",
        "Children",
        "Dependent parents or grandparents",
      ],
      closing: "",
    },

    eligibility: {
      headline: "Eligibility requirements",
      intro: "You may be eligible if you meet one of these criteria:",
      points: [
        "You are an EU, EEA, or Swiss citizen living in the UK before 31 December 2020",
        "You are a family member of someone with EU Settlement Status",
        "Your relationship existed before 31 December 2020 (with some exceptions)",
      ],
      closing: "If you are unsure whether you qualify, speak to us and we will assess your situation.",
    },

    canDo: [
      "Live in the UK permanently (Settled Status)",
      "Work and study without restrictions",
      "Access public services and benefits",
      "Apply for British citizenship",
      "Travel freely in and out of the UK",
    ],

    cannotDo: [
      "Apply if you arrived after 31 December 2020 (exceptions apply)",
      "Stay indefinitely with Pre-Settled Status alone",
      "Spend more than 2 years outside the UK continuously (Pre-Settled)",
      "Extend Pre-Settled Status in most cases",
    ],

    duration: {
      shortTerm: { label: "Pre-Settled Status", detail: "Valid for 5 years — then apply for Settled Status" },
      longTerm: { label: "Settled Status", detail: "Permanent right to live in the UK — no expiry" },
    },

    process: {
      headline: "How we help you",
      steps: [
        { title: "Review your situation", desc: "We assess your eligibility and explain your options clearly" },
        { title: "Prepare your evidence", desc: "We help you gather documents and build a strong application" },
        { title: "Submit with confidence", desc: "We support your application and handle any issues" },
      ],
    },

    conditions: {
      headline: "Key things to understand",
      points: [
        "Pre-Settled Status is valid for 5 years",
        "You may apply for Settled Status after 5 years continuous residence",
        "You cannot extend Pre-Settled Status in most cases",
        "If you do not qualify, you may need another visa route",
      ],
      closing: "We help you understand your best option.",
    },

    faqs: [
      {
        q: "What is the EU Settlement Scheme?",
        a: "It is a UK government scheme that allows EU, EEA, and Swiss citizens and their families to continue living in the UK after Brexit. It gives you either Settled Status or Pre-Settled Status.",
      },
      {
        q: "What is Settled Status?",
        a: "Settled Status gives you the permanent right to live, work, and study in the UK. You can also access healthcare and benefits. It is usually granted after 5 continuous years of residence.",
      },
      {
        q: "What is Pre-Settled Status?",
        a: "Pre-Settled Status allows you to stay in the UK for up to 5 years. After that, you can apply for Settled Status if you meet the residency requirements.",
      },
      {
        q: "Who can apply?",
        a: "EU, EEA, and Swiss citizens who were living in the UK before 31 December 2020, and their eligible family members. Late applications may still be accepted in some cases.",
      },
      {
        q: "How long does Pre-Settled Status last?",
        a: "Pre-Settled Status is valid for 5 years. Before it expires, you should apply for Settled Status if you have completed 5 years of continuous residence.",
      },
      {
        q: "Can I apply from outside the UK?",
        a: "In most cases, you need to be in the UK to apply. However, there are some exceptions. We can advise you on whether you are eligible to apply from abroad.",
      },
      {
        q: "Can I extend Pre-Settled Status?",
        a: "In most cases, you cannot extend Pre-Settled Status. You should apply for Settled Status before it expires. If you do not qualify, you may need to apply for a different visa.",
      },
      {
        q: "Can I settle in the UK permanently?",
        a: "Yes, if you have Settled Status, you have the permanent right to live in the UK. You can also apply for British citizenship if you meet the requirements.",
      },
      {
        q: "Can my family members apply?",
        a: "Yes, eligible family members can apply. This includes your spouse or partner, children, and dependent parents or grandparents. The relationship must have existed before 31 December 2020 in most cases.",
      },
    ],
  },

  "spouse-visa": {
    title: "Spouse Visa",
    headline: "Spouse Visa Made Simple",
    subheadline: "Join your partner in the UK without stress, confusion, or delays.",
    supportLine: "We guide you step by step so you can build your life together in the UK.",
    funnelSlug: "spouse-visa",
    image: "/images/family.jpg",

    intro: {
      paragraphs: [
        "We help couples and families successfully apply for UK Spouse Visas.",
        "Whether you are applying from abroad or inside the UK, our team will guide you through every step.",
        "We understand how important this is. This is not just a visa. It is about living together, building your future, and staying with the person you love.",
      ],
      highlight: "",
      bullets: [
        "Explain everything clearly",
        "Help you avoid costly mistakes",
        "Prepare a strong application",
        "Give you the best chance of approval",
      ],
      closing: "",
    },

    whyChooseUs: {
      headline: "Why families trust us",
      points: [
        "Experienced UK immigration advisors",
        "Personal support for every family",
        "Clear and honest guidance",
        "Strong success with spouse applications",
      ],
      closing: "We focus on bringing families together while keeping the process simple.",
    },

    extraSections: [
      {
        label: "Spouse Visa",
        headline: "What is a Spouse Visa",
        paragraphs: [
          "A UK Spouse Visa allows the partner of a British citizen or someone settled in the UK to live with them in the UK.",
        ],
        bullets: [
          "Spouses",
          "Civil partners",
          "Unmarried partners in a long term relationship",
        ],
      },
      {
        label: "Financial Requirements",
        headline: "Financial requirements explained simply",
        paragraphs: [
          "In most cases, you must show a minimum income of £29,000 per year, or savings of at least £88,500. This may increase if you have children.",
        ],
        bullets: [
          "If you apply from outside the UK, you usually cannot rely on your own income",
          "Different rules apply for self employment",
        ],
        note: "We help you calculate and prove your finances correctly. Get in touch for a free assessment.",
      },
    ],

    visaSection: {
      headline: "What happens after approval",
      intro: "If approved, your Spouse Visa follows a clear path to permanent settlement in the UK.",
      subheadline: "Your timeline:",
      bullets: [
        "Initial visa granted for 30 months (2.5 years)",
        "Extend for another 30 months",
        "After 5 years, apply for settlement (Indefinite Leave to Remain)",
        "Then eligible for British citizenship",
      ],
      closing: "",
    },

    eligibility: {
      headline: "Do you qualify",
      intro: "To apply, you must show:",
      points: [
        "You and your partner are both over 18",
        "You are in a genuine and ongoing relationship",
        "You plan to live together permanently",
        "You meet the financial requirement",
        "You meet the English language requirement",
      ],
      closing: "We help you present this clearly so your application is strong and credible.",
    },

    canDo: [
      "Work in the UK without restriction",
      "Study in the UK",
      "Live with your partner",
      "Access public services",
      "Apply for settlement after 5 years",
    ],

    cannotDo: [
      "Claim most benefits during initial visa period",
      "Sponsor other family members on a spouse visa alone",
      "Switch from all visa types (some restrictions apply)",
    ],

    duration: {
      shortTerm: { label: "Initial visa", detail: "30 months (2.5 years)" },
      longTerm: { label: "After extension", detail: "5 years total, then apply for settlement" },
    },

    process: {
      headline: "How we help you",
      steps: [
        { title: "Review your situation", desc: "We assess your eligibility and explain your options" },
        { title: "Guide your documents", desc: "We help you gather evidence and prepare everything" },
        { title: "Submit with confidence", desc: "We prepare and support your full application" },
      ],
    },

    faqs: [
      {
        q: "What is a Spouse Visa?",
        a: "A UK Spouse Visa allows the partner of a British citizen or settled person to live in the UK. It covers spouses, civil partners, and unmarried partners in a genuine long term relationship.",
      },
      {
        q: "Do I qualify for a Spouse Visa?",
        a: "You must be over 18, in a genuine relationship, plan to live together permanently, and meet the financial and English language requirements. We can assess your situation for free.",
      },
      {
        q: "How do I meet the financial requirements?",
        a: "You usually need to show an income of at least £29,000 per year or savings of at least £88,500. Rules vary depending on your situation. We help you calculate exactly what you need.",
      },
      {
        q: "How do I apply?",
        a: "You apply online, provide biometric information, and submit supporting documents. We guide you through every step so nothing is missed.",
      },
      {
        q: "How long is the visa?",
        a: "The initial visa is granted for 30 months (2.5 years). You can then extend for another 30 months before applying for settlement.",
      },
      {
        q: "Can I extend my visa?",
        a: "Yes, you can extend your Spouse Visa for another 30 months. After 5 years total in the UK, you may apply for Indefinite Leave to Remain.",
      },
      {
        q: "Can I work in the UK?",
        a: "Yes, you can work in the UK without any restriction on the type of work you do. You can also study.",
      },
      {
        q: "How long until I can settle?",
        a: "After 5 years on a Spouse Visa (initial + extension), you can apply for settlement (Indefinite Leave to Remain). After that, you may be eligible for British citizenship.",
      },
    ],

    finalCta: {
      headline: "Start your journey together today",
      text: "Speak to an immigration advisor and get clear guidance on your situation. We help you avoid mistakes and bring your family together faster.",
      subtext: "No confusion. No delays. Just real support.",
    },
  },
};

interface ServicePageData {
  title: string;
  headline: string;
  subheadline: string;
  supportLine: string;
  funnelSlug: string;
  image: string;
  intro: { paragraphs: string[]; highlight: string; bullets: string[]; closing: string };
  whyChooseUs: { headline: string; points: string[]; closing: string };
  visaSection: { headline: string; intro: string; subheadline: string; bullets: string[]; closing: string };
  eligibility: { headline: string; intro: string; points: string[]; closing: string };
  canDo: string[];
  cannotDo: string[];
  duration: { shortTerm: { label: string; detail: string }; longTerm: { label: string; detail: string } };
  process?: { headline: string; steps: { title: string; desc: string }[] };
  extraSections?: { label?: string; headline: string; paragraphs: string[]; bullets?: string[]; note?: string }[];
  conditions?: { headline: string; points: string[]; closing: string };
  finalCta?: { headline: string; text: string; subtext: string };
  faqs: { q: string; a: string }[];
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = SERVICE_PAGES[slug];

  if (!data) {
    // Fallback for services without a dedicated page yet
    return (
      <>
        <HeroBanner
          title={slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()), href: `/services/${slug}` },
          ]}
        />
        <section style={{ padding: "5rem 0" }}>
          <div className="container-main" style={{ textAlign: "center" }}>
            <p style={{ color: "#6B7280", marginBottom: "2rem" }}>
              Detailed information for this service is coming soon.
            </p>
            <Link href="/funnels/general-consultation" style={{ padding: "0.875rem 2rem", background: "#C5963A", color: "white", fontWeight: 700, borderRadius: "0.5rem", textDecoration: "none" }}>
              Get Free Consultation
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section style={{ background: "#0B1B3D" }}>
        <div className="container-main" style={{ padding: "4rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ color: "white" }}>
              <p style={{ color: "#C5963A", fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
                ✦ Immigration Services
              </p>
              <h1 style={{ fontSize: "2.25rem", fontWeight: 800, lineHeight: 1.2, marginBottom: "1rem" }}>
                {data.headline}
              </h1>
              <p style={{ fontSize: "1.0625rem", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                {data.subheadline}
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#9CA3AF", marginBottom: "2rem" }}>
                {data.supportLine}
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                <Link href={`/funnels/${data.funnelSlug}`} style={{ padding: "0.875rem 2rem", background: "#C5963A", color: "white", fontWeight: 700, borderRadius: "0.5rem", textDecoration: "none", fontSize: "1rem" }}>
                  Get Free Consultation
                </Link>
                <a href="tel:+441156547274" style={{ padding: "0.875rem 2rem", border: "2px solid white", color: "white", fontWeight: 600, borderRadius: "0.5rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  <Phone style={{ width: "1rem", height: "1rem" }} /> Call Now
                </a>
              </div>
              <a href="tel:+441156547274" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#D1D5DB", textDecoration: "none", fontSize: "0.875rem" }}>
                <Phone style={{ width: "0.875rem", height: "0.875rem", color: "#C5963A" }} />
                +44 115 654 7274
              </a>
            </div>
            <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "0.75rem", overflow: "hidden" }}>
              <Image src={data.image} alt={data.title} fill style={{ objectFit: "cover" }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section style={{ background: "white", borderBottom: "1px solid #E5E7EB" }}>
        <div className="container-main" style={{ padding: "1.25rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {[
              "Regulated immigration advisors",
              "High visa success rate",
              "Trusted by clients worldwide",
              "Fast and simple process",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", color: "#374151", fontSize: "0.875rem", fontWeight: 500 }}>
                <CheckCircle2 style={{ width: "1rem", height: "1rem", color: "#C5963A", flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INTRO ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          {data.intro.paragraphs.map((p, i) => (
            <p key={i} style={{ color: "#374151", fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "1rem" }}>{p}</p>
          ))}
          <p style={{ color: "#0B1B3D", fontWeight: 700, fontSize: "1.125rem", marginTop: "1.5rem", marginBottom: "1rem" }}>
            {data.intro.highlight}
          </p>
          <p style={{ color: "#0B1B3D", fontWeight: 600, marginBottom: "0.75rem" }}>We:</p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.5rem" }}>
            {data.intro.bullets.map((b) => (
              <li key={b} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151", fontSize: "1rem" }}>
                <CheckCircle2 style={{ width: "1.25rem", height: "1.25rem", color: "#0B1B3D", flexShrink: 0 }} />
                {b}
              </li>
            ))}
          </ul>
          <p style={{ color: "#6B7280", lineHeight: 1.75 }}>{data.intro.closing}</p>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>Why Choose Us</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.5rem" }}>
                {data.whyChooseUs.headline}
              </h2>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "1.5rem" }}>
                {data.whyChooseUs.points.map((p) => (
                  <li key={p} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151", fontSize: "1rem" }}>
                    <CheckCircle2 style={{ width: "1.25rem", height: "1.25rem", color: "#C5963A", flexShrink: 0 }} />
                    {p}
                  </li>
                ))}
              </ul>
              <p style={{ color: "#6B7280", lineHeight: 1.75 }}>{data.whyChooseUs.closing}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link href={`/funnels/${data.funnelSlug}`} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", padding: "2.5rem", background: "white", borderRadius: "0.75rem", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", textDecoration: "none", maxWidth: "320px", width: "100%" }}>
                <div style={{ width: "4rem", height: "4rem", borderRadius: "50%", background: "rgba(197,150,58,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ShieldCheck style={{ width: "2rem", height: "2rem", color: "#C5963A" }} />
                </div>
                <p style={{ fontWeight: 700, color: "#0B1B3D", fontSize: "1.125rem", textAlign: "center" }}>Get your free assessment</p>
                <p style={{ color: "#6B7280", fontSize: "0.875rem", textAlign: "center" }}>Find out your best option in minutes</p>
                <span style={{ padding: "0.75rem 1.5rem", background: "#C5963A", color: "white", fontWeight: 700, borderRadius: "0.5rem", fontSize: "0.9375rem" }}>
                  Start Now
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EXTRA SECTIONS (Settled/Pre-Settled etc) ═══ */}
      {data.extraSections && data.extraSections.map((section, i) => (
        <section key={i} style={{ padding: "4rem 0", background: i % 2 === 0 ? "white" : "#F9FAFB" }}>
          <div className="container-main" style={{ maxWidth: "780px" }}>
            {section.label && <p className="section-label" style={{ marginBottom: "0.75rem" }}>{section.label}</p>}
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
              {section.headline}
            </h2>
            {section.paragraphs.map((p, j) => (
              <p key={j} style={{ color: "#374151", lineHeight: 1.75, marginBottom: "0.75rem" }}>{p}</p>
            ))}
            {section.bullets && (
              <>
                <p style={{ color: "#0B1B3D", fontWeight: 600, marginTop: "1rem", marginBottom: "0.75rem" }}>With {section.label || "this status"}, you can:</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1rem" }}>
                  {section.bullets.map((b) => (
                    <li key={b} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151" }}>
                      <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#10B981", flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {section.note && (
              <div style={{ padding: "0.875rem 1.25rem", background: "#FEF3C7", borderRadius: "0.5rem", borderLeft: "4px solid #F59E0B", marginTop: "1rem" }}>
                <p style={{ color: "#92400E", fontWeight: 600, fontSize: "0.9375rem" }}>{section.note}</p>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* ═══ VISA SECTION ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Visa Guidance</p>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1rem" }}>
            {data.visaSection.headline}
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.75, marginBottom: "1.5rem" }}>{data.visaSection.intro}</p>
          <p style={{ color: "#0B1B3D", fontWeight: 600, marginBottom: "0.75rem" }}>{data.visaSection.subheadline}</p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.5rem" }}>
            {data.visaSection.bullets.map((b) => (
              <li key={b} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#10B981", flexShrink: 0 }} />
                {b}
              </li>
            ))}
          </ul>
          <p style={{ color: "#6B7280", lineHeight: 1.75 }}>{data.visaSection.closing}</p>
        </div>
      </section>

      {/* ═══ ELIGIBILITY ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.75rem" }}>
            {data.eligibility.headline}
          </h2>
          <p style={{ color: "#374151", marginBottom: "1.25rem" }}>{data.eligibility.intro}</p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.5rem" }}>
            {data.eligibility.points.map((p) => (
              <li key={p} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151" }}>
                <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#0B1B3D", flexShrink: 0 }} />
                {p}
              </li>
            ))}
          </ul>
          <p style={{ color: "#6B7280", lineHeight: 1.75 }}>{data.eligibility.closing}</p>
        </div>
      </section>

      {/* ═══ PROCESS (optional) ═══ */}
      {data.process && (
        <section style={{ padding: "4rem 0" }}>
          <div className="container-main">
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "2rem", textAlign: "center" }}>
              {data.process.headline}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", maxWidth: "780px", margin: "0 auto" }}>
              {data.process.steps.map((step, i) => (
                <div key={i} style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", textAlign: "center" }}>
                  <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "50%", background: "#0B1B3D", color: "#C5963A", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "1.125rem", margin: "0 auto 1rem" }}>
                    {i + 1}
                  </div>
                  <p style={{ fontWeight: 700, color: "#0B1B3D", marginBottom: "0.375rem" }}>{step.title}</p>
                  <p style={{ color: "#6B7280", fontSize: "0.875rem", lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ CAN / CANNOT ═══ */}
      <section style={{ padding: "4rem 0", background: data.process ? "transparent" : undefined }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            {/* Can do */}
            <div style={{ background: "#F0FDF4", borderRadius: "0.75rem", padding: "2rem", borderTop: "4px solid #10B981" }}>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#065F46", marginBottom: "1.25rem" }}>What you can do</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {data.canDo.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151" }}>
                    <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#10B981", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Cannot do */}
            <div style={{ background: "#FEF2F2", borderRadius: "0.75rem", padding: "2rem", borderTop: "4px solid #EF4444" }}>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#991B1B", marginBottom: "1.25rem" }}>What you cannot do</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {data.cannotDo.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#374151" }}>
                    <XCircle style={{ width: "1.125rem", height: "1.125rem", color: "#EF4444", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DURATION ═══ */}
      <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
        <div className="container-main">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.5rem", textAlign: "center" }}>
            How long you can stay
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", maxWidth: "640px", margin: "0 auto" }}>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", textAlign: "center" }}>
              <Clock style={{ width: "1.5rem", height: "1.5rem", color: "#C5963A", margin: "0 auto 0.75rem" }} />
              <p style={{ fontWeight: 700, color: "#0B1B3D", marginBottom: "0.375rem" }}>{data.duration.shortTerm.label}</p>
              <p style={{ color: "#6B7280", fontSize: "0.875rem" }}>{data.duration.shortTerm.detail}</p>
            </div>
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", textAlign: "center" }}>
              <Clock style={{ width: "1.5rem", height: "1.5rem", color: "#C5963A", margin: "0 auto 0.75rem" }} />
              <p style={{ fontWeight: 700, color: "#0B1B3D", marginBottom: "0.375rem" }}>{data.duration.longTerm.label}</p>
              <p style={{ color: "#6B7280", fontSize: "0.875rem" }}>{data.duration.longTerm.detail}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONDITIONS (optional) ═══ */}
      {data.conditions && (
        <section style={{ padding: "4rem 0", background: "#F9FAFB" }}>
          <div className="container-main" style={{ maxWidth: "780px" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.25rem" }}>
              {data.conditions.headline}
            </h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
              {data.conditions.points.map((p) => (
                <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#374151" }}>
                  <div style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: "#C5963A", flexShrink: 0, marginTop: "0.5rem" }} />
                  {p}
                </li>
              ))}
            </ul>
            <p style={{ color: "#0B1B3D", fontWeight: 600 }}>{data.conditions.closing}</p>
          </div>
        </section>
      )}

      {/* ═══ MID-PAGE CTA ═══ */}
      <section style={{ background: "#C5963A", padding: "3rem 0" }}>
        <div className="container-main" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <p style={{ color: "white", fontWeight: 700, fontSize: "1.25rem" }}>Ready to apply?</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}>Get a free assessment and find out your best visa option.</p>
          </div>
          <Link href={`/funnels/${data.funnelSlug}`} style={{ padding: "0.875rem 2rem", background: "white", color: "#0B1B3D", fontWeight: 700, borderRadius: "0.5rem", textDecoration: "none", fontSize: "1rem" }}>
            Get Free Consultation
          </Link>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-main" style={{ maxWidth: "780px" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Common Questions</p>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "2rem" }}>
            Frequently asked questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {data.faqs.map((faq, i) => (
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
            {data.finalCta?.headline || "Need help with your visa?"}
          </h2>
          <p style={{ color: "#D1D5DB", fontSize: "1.0625rem", maxWidth: "480px", margin: "0 auto 0.75rem", lineHeight: 1.7 }}>
            {data.finalCta?.text || "Speak directly to an immigration advisor today. We will review your situation and guide you on the best next step."}
          </p>
          <p style={{ color: "#9CA3AF", fontSize: "0.9375rem", marginBottom: "2rem" }}>
            {data.finalCta?.subtext || "No confusion. No delays. Just clear advice."}
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            <Link href="/consultation" style={{ padding: "0.875rem 2.5rem", background: "#C5963A", color: "white", fontWeight: 700, borderRadius: "0.5rem", textDecoration: "none", fontSize: "1.0625rem" }}>
              Book Free Consultation
            </Link>
            <a href="tel:+441156547274" style={{ padding: "0.875rem 2.5rem", border: "2px solid white", color: "white", fontWeight: 600, borderRadius: "0.5rem", textDecoration: "none", fontSize: "1.0625rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <Phone style={{ width: "1rem", height: "1rem" }} /> Call Now
            </a>
          </div>
          <a href="tel:+441156547274" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#D1D5DB", textDecoration: "none", fontSize: "1rem" }}>
            <Phone style={{ width: "1rem", height: "1rem", color: "#C5963A" }} />
            +44 115 654 7274
          </a>
        </div>
      </section>
    </>
  );
}
