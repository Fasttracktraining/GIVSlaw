export interface FunnelConfig {
  slug: string;
  title: string;
  headline: string;
  subheadline: string;
  bulletPoints: string[];
  ctaText: string;
  image: string;
  serviceSlug: string;
  thankYouMessage: string;
}

export const FUNNELS: FunnelConfig[] = [
  {
    slug: "british-citizenship",
    title: "British Citizenship",
    headline: "Ready to Become a British Citizen?",
    subheadline: "Our experts have helped hundreds of people successfully apply for British citizenship. Get free guidance on your eligibility and next steps.",
    bulletPoints: [
      "Free eligibility assessment",
      "Expert guidance on naturalisation requirements",
      "Help with Life in the UK test preparation",
      "Full application support from start to finish",
    ],
    ctaText: "Get Your Free Assessment",
    image: "/images/passport-flag.jpg",
    serviceSlug: "british-citizenship",
    thankYouMessage: "We will review your details and contact you within 24 hours to discuss your British citizenship options.",
  },
  {
    slug: "ilr",
    title: "Indefinite Leave to Remain (ILR)",
    headline: "Settle in the UK Permanently",
    subheadline: "Find out if you qualify for Indefinite Leave to Remain and get expert support with your application.",
    bulletPoints: [
      "Free ILR eligibility check",
      "Guidance on continuous residence requirements",
      "Help with the application process",
      "Support with Life in the UK and English language tests",
    ],
    ctaText: "Check Your Eligibility",
    image: "/images/london-skyline.jpg",
    serviceSlug: "individual-and-family-immigration",
    thankYouMessage: "Our ILR specialist will contact you within 24 hours to discuss your eligibility and next steps.",
  },
  {
    slug: "spouse-visa",
    title: "Spouse Visa",
    headline: "Bring Your Partner to the UK",
    subheadline: "We specialise in spouse visa applications and family reunification. Let us help you navigate the process.",
    bulletPoints: [
      "Free initial case assessment",
      "Income and accommodation requirement guidance",
      "Document checklist and preparation support",
      "High success rate with spouse applications",
    ],
    ctaText: "Start Your Application",
    image: "/images/family.jpg",
    serviceSlug: "individual-and-family-immigration",
    thankYouMessage: "A family immigration specialist will contact you within 24 hours to discuss your spouse visa application.",
  },
  {
    slug: "visitor-visa",
    title: "Visitor Visa",
    headline: "Visit the UK With Confidence",
    subheadline: "Whether for tourism, business, or family visit, get expert help with your UK visitor visa application.",
    bulletPoints: [
      "Fast application turnaround",
      "Guidance on supporting documents",
      "Help with invitation letters",
      "Advice on visa refusal prevention",
    ],
    ctaText: "Apply Now",
    image: "/images/london-building.jpg",
    serviceSlug: "business-visitor-visa",
    thankYouMessage: "We will review your visitor visa requirements and contact you within 24 hours.",
  },
  {
    slug: "visa-refusal-appeal",
    title: "Visa Refusal & Appeal",
    headline: "Visa Refused? We Can Help",
    subheadline: "Don't give up. Our appeal specialists have overturned many visa refusals. Get expert advice on your options.",
    bulletPoints: [
      "Free refusal letter review",
      "Assessment of appeal grounds",
      "Guidance on administrative review",
      "Expert representation at tribunals",
    ],
    ctaText: "Get a Free Review",
    image: "/images/boardroom.jpg",
    serviceSlug: "individual-and-family-immigration",
    thankYouMessage: "An appeal specialist will review your refusal and contact you within 24 hours with your options.",
  },
  {
    slug: "skilled-worker",
    title: "Skilled Worker Visa",
    headline: "Work in the UK Legally",
    subheadline: "Get expert guidance on Skilled Worker visa applications, sponsor requirements, and the points-based system.",
    bulletPoints: [
      "Free eligibility assessment",
      "Salary and skill level guidance",
      "Sponsor licence support for employers",
      "Switch and extension applications",
    ],
    ctaText: "Check Your Eligibility",
    image: "/images/conference-group.jpg",
    serviceSlug: "working-in-the-uk",
    thankYouMessage: "Our work visa specialist will contact you within 24 hours to discuss your Skilled Worker visa options.",
  },
  {
    slug: "general-consultation",
    title: "Free Consultation",
    headline: "Not Sure Where to Start?",
    subheadline: "Book a free consultation with our immigration experts. We will assess your situation and advise you on the best path forward.",
    bulletPoints: [
      "No obligation consultation",
      "Expert immigration advice",
      "Personalised assessment of your case",
      "Clear next steps and transparent pricing",
    ],
    ctaText: "Book Your Free Consultation",
    image: "/images/hero-passport.jpg",
    serviceSlug: "general",
    thankYouMessage: "We will be in touch within 24 hours to arrange your free consultation.",
  },
];

export function getFunnel(slug: string): FunnelConfig | undefined {
  return FUNNELS.find((f) => f.slug === slug);
}
