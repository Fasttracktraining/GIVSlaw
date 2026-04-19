import type { CaseTypeTemplate } from "../types";

const COMPLIANCE_CHECKLIST: CaseTypeTemplate["complianceChecklist"] = [
  {
    label: "AML/ID verification completed",
    description:
      "Verify client identity documents against AML requirements and retain copies on file",
    isRequired: true,
    forStage: "ENQUIRY",
    category: "COMPLIANCE",
  },
  {
    label: "Client confidentiality agreement signed",
    description:
      "Ensure the client has signed the firm's confidentiality and terms of engagement agreement",
    isRequired: true,
    forStage: "ENQUIRY",
    category: "COMPLIANCE",
  },
  {
    label: "Conflict of interest check completed",
    description:
      "Run conflict of interest check against existing client database and record outcome",
    isRequired: true,
    forStage: "ENQUIRY",
    category: "COMPLIANCE",
  },
  {
    label: "Data protection consent obtained",
    description:
      "Obtain written consent for processing personal data in accordance with UK GDPR",
    isRequired: true,
    forStage: "ENQUIRY",
    category: "COMPLIANCE",
  },
];

export const spouseVisaEntryTemplate: CaseTypeTemplate = {
  name: "Spouse Visa - Entry Clearance",
  description:
    "Application for entry clearance as a partner under Appendix FM of the Immigration Rules. The applicant applies from outside the UK to join their British citizen or settled partner.",

  documents: [
    // ENQUIRY stage
    {
      category: "PASSPORT",
      label: "Applicant's current passport",
      description:
        "Valid passport with at least 6 months remaining. All pages scanned including blank pages.",
      isRequired: true,
      forStage: "ENQUIRY",
    },
    {
      category: "PASSPORT",
      label: "Sponsor's current passport",
      description:
        "Sponsor's valid UK passport or proof of settled status (e.g. ILR vignette, BRP, or certificate of naturalisation).",
      isRequired: true,
      forStage: "ENQUIRY",
    },
    {
      category: "MARRIAGE_CERT",
      label: "Marriage or civil partnership certificate",
      description:
        "Original certificate or certified copy. If not in English, a certified translation is required.",
      isRequired: true,
      forStage: "ENQUIRY",
    },

    // DOCUMENT_COLLECTION stage
    {
      category: "PASSPORT",
      label: "Applicant's previous passports",
      description: "All previous passports to show travel and immigration history.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "PHOTO",
      label: "Biometric passport photographs (x2)",
      description:
        "Two recent passport-size photographs meeting UKVI specifications (45mm x 35mm, white background).",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "TB test certificate",
      description:
        "Tuberculosis test certificate from an approved clinic if applying from a listed country.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "QUALIFICATION",
      label: "English language certificate (CEFR A1)",
      description:
        "Approved SELT test certificate at A1 level (speaking and listening) from an approved provider, or evidence of exemption (e.g. national of majority English-speaking country, academic qualification taught in English).",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "PAYSLIP",
      label: "Sponsor's payslips (6 months)",
      description:
        "Six consecutive monthly payslips (or 12 weekly) immediately preceding the application date.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "BANK_STATEMENT",
      label: "Sponsor's bank statements (6 months)",
      description:
        "Six months of personal bank statements showing salary credits corresponding to the payslips provided.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "EMPLOYMENT_LETTER",
      label: "Sponsor's employer letter",
      description:
        "Letter from employer confirming job title, salary, length of employment, and confirmation that employment is ongoing. Must be dated within 28 days of application.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Sponsor's P60 (most recent tax year)",
      description:
        "P60 end-of-year certificate confirming annual earnings for the most recent complete tax year.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Sponsor's tax returns or SA302 (if self-employed)",
      description:
        "If sponsor is self-employed: SA302 tax calculation, tax year overview from HMRC, and corresponding bank statements. Cover the most recent full financial year.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "TENANCY_AGREEMENT",
      label: "Tenancy agreement or mortgage statement",
      description:
        "Current tenancy agreement in the sponsor's name, or mortgage statement showing the property address. Must demonstrate adequate accommodation.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "UTILITY_BILL",
      label: "Utility bills at sponsor's address",
      description:
        "Recent utility bills (gas, electric, water, or council tax) confirming the sponsor's current address.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Property inspection report or landlord letter",
      description:
        "Letter from landlord confirming the applicant is permitted to reside at the property, or a property inspection report confirming the accommodation is not overcrowded.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "PHOTO",
      label: "Photographs of the couple together",
      description:
        "Selection of photographs showing the couple together at different times and locations to evidence a genuine relationship.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Communication evidence (messages, call logs)",
      description:
        "Screenshots or printouts of communication history including WhatsApp, text messages, call logs, video call history, or social media interactions.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Travel evidence (flights, hotel bookings)",
      description:
        "Flight bookings, boarding passes, hotel reservations, or visa stamps showing visits to each other.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Money transfer evidence",
      description:
        "Evidence of financial support or money transfers between the couple.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "BIRTH_CERT",
      label: "Birth certificates of any dependent children",
      description:
        "If children are included in the application or are relevant to the relationship timeline.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Divorce decree absolute (if previously married)",
      description:
        "If either the applicant or sponsor was previously married, provide the decree absolute or equivalent dissolution document.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "TRANSLATION",
      label: "Certified translations of non-English documents",
      description:
        "All documents not in English must be accompanied by a certified translation including the translator's credentials and confirmation of accuracy.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },

    // CASE_REVIEW stage
    {
      category: "COVER_LETTER",
      label: "Cover letter",
      description:
        "Detailed cover letter setting out the application, the relationship history, how the financial and accommodation requirements are met, and addressing any potential concerns.",
      isRequired: true,
      forStage: "CASE_REVIEW",
    },
    {
      category: "SUPPORTING_LETTER",
      label: "Supporting letters from family or friends",
      description:
        "Letters from family members or friends who can attest to the genuineness of the relationship.",
      isRequired: false,
      forStage: "CASE_REVIEW",
    },

    // SUBMISSION stage
    {
      category: "OTHER",
      label: "IHS payment confirmation",
      description: "Immigration Health Surcharge payment reference and confirmation.",
      isRequired: true,
      forStage: "SUBMISSION",
    },
    {
      category: "OTHER",
      label: "Online application form confirmation",
      description: "Printed/saved copy of the submitted online application form.",
      isRequired: true,
      forStage: "SUBMISSION",
    },
    {
      category: "OTHER",
      label: "Document index / checklist",
      description:
        "Paginated document index listing all supporting documents submitted with the application.",
      isRequired: true,
      forStage: "SUBMISSION",
    },
  ],

  legalChecklist: [
    {
      label: "Financial requirement met (minimum £29,000 gross annual income)",
      description:
        "Confirm sponsor meets the minimum income requirement of £29,000 per annum under Appendix FM-SE, or can rely on adequate savings, non-employment income, or a combination.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "LEGAL",
    },
    {
      label: "Both parties aged 18 or over",
      description:
        "Both the applicant and sponsor must be at least 18 years old at the date of application.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "LEGAL",
    },
    {
      label: "Relationship is genuine and subsisting",
      description:
        "Assess whether there is sufficient evidence that the relationship is genuine and subsisting as required under paragraph EC-P.1.1 of Appendix FM.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "LEGAL",
    },
    {
      label: "Marriage or civil partnership is legally valid",
      description:
        "Confirm the marriage or civil partnership is legally recognised in the country where it took place and is not a prohibited relationship under UK law.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "LEGAL",
    },
    {
      label: "English language requirement met (A1 CEFR)",
      description:
        "Applicant holds an approved SELT certificate at A1 level, or qualifies for an exemption (over 65, disability, national of majority English-speaking country).",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "LEGAL",
    },
    {
      label: "Adequate accommodation available",
      description:
        "The accommodation must not be overcrowded within the meaning of the Housing Act 1985 and must be available to the family without recourse to public funds.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "LEGAL",
    },
    {
      label: "No immigration breaches or overstaying",
      description:
        "Check whether the applicant has any adverse immigration history including overstaying, illegal entry, deception, or deportation orders.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "No criminal convictions requiring disclosure",
      description:
        "Review whether the applicant has any criminal convictions that must be disclosed and may affect the good character assessment.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "TB test requirement satisfied (if applicable)",
      description:
        "If applicant is applying from a country where TB testing is required, confirm a valid TB test certificate has been obtained from an approved clinic.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "LEGAL",
    },
    {
      label: "No paragraph 320 general grounds for refusal",
      description:
        "Review application against the general grounds for refusal including false representations, failure to disclose material facts, and previous breaches.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "Sponsor meets habitual residence requirement",
      description:
        "Confirm the sponsor is habitually resident in the UK (or will be on the applicant's arrival) and intends to continue residing here.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
  ],

  operationalChecklist: [
    {
      label: "Initial consultation completed",
      description:
        "Conduct initial consultation to assess eligibility, gather preliminary information, and advise on the application process.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "OPERATIONAL",
    },
    {
      label: "Retainer / engagement letter signed",
      description:
        "Client has signed the retainer agreement and terms of engagement.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "OPERATIONAL",
    },
    {
      label: "Fee paid or payment plan agreed",
      description:
        "Full fee received or a structured payment plan has been agreed and the first instalment received.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "OPERATIONAL",
    },
    {
      label: "Document collection checklist sent to client",
      description:
        "Send the client a tailored document checklist based on their circumstances.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "OPERATIONAL",
    },
    {
      label: "All documents received and reviewed",
      description:
        "Confirm all required documents have been received, are legible, and meet UKVI requirements.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "OPERATIONAL",
    },
    {
      label: "Cover letter drafted and approved",
      description:
        "Draft the cover letter and have it reviewed by the supervising solicitor before inclusion.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "OPERATIONAL",
    },
    {
      label: "Application form completed and checked",
      description:
        "Complete the online application form and review all entries with the client before submission.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "OPERATIONAL",
    },
    {
      label: "IHS payment made",
      description:
        "Immigration Health Surcharge payment completed and reference number recorded.",
      isRequired: true,
      forStage: "SUBMISSION",
      category: "OPERATIONAL",
    },
    {
      label: "Biometric appointment booked",
      description:
        "Book biometric appointment at the nearest visa application centre (VAC).",
      isRequired: true,
      forStage: "SUBMISSION",
      category: "OPERATIONAL",
    },
    {
      label: "Document index / bundle prepared",
      description:
        "Prepare a paginated and indexed document bundle for submission.",
      isRequired: true,
      forStage: "SUBMISSION",
      category: "OPERATIONAL",
    },
    {
      label: "Application submitted online",
      description:
        "Submit the online application and save the confirmation receipt.",
      isRequired: true,
      forStage: "SUBMISSION",
      category: "OPERATIONAL",
    },
    {
      label: "Client notified of decision",
      description:
        "Inform the client of the decision outcome and advise on next steps (visa collection, travel, or appeal rights).",
      isRequired: true,
      forStage: "DECISION_TRACKING",
      category: "OPERATIONAL",
    },
  ],

  complianceChecklist: COMPLIANCE_CHECKLIST,

  letterTemplates: [
    {
      name: "Initial advice letter",
      description:
        "Letter to the client following the initial consultation, summarising the advice given, eligibility assessment, documents required, and next steps.",
      forStage: "ENQUIRY",
    },
    {
      name: "Document request letter",
      description:
        "Letter requesting outstanding documents from the client with specific guidance on what is needed and format requirements.",
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      name: "Cover letter to UKVI",
      description:
        "Detailed cover letter to the Entry Clearance Officer setting out the application, the relationship history, financial and accommodation evidence, and addressing any potential concerns.",
      forStage: "CASE_REVIEW",
    },
    {
      name: "Submission confirmation letter",
      description:
        "Letter to the client confirming the application has been submitted, including reference numbers, biometric appointment details, and expected timeline.",
      forStage: "SUBMISSION",
    },
    {
      name: "Decision outcome letter",
      description:
        "Letter to the client summarising the decision, next steps (visa collection and travel arrangements if granted, or appeal/administrative review options if refused).",
      forStage: "DECISION_TRACKING",
    },
  ],
};
