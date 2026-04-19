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

export const skilledWorkerEntryTemplate: CaseTypeTemplate = {
  name: "Skilled Worker Visa - Entry Clearance",
  description:
    "Application for entry clearance under the Skilled Worker route (formerly Tier 2 General). The applicant applies from outside the UK to work for a licensed UK sponsor employer.",

  documents: [
    // ENQUIRY stage
    {
      category: "PASSPORT",
      label: "Applicant's current passport",
      description:
        "Valid passport with at least 6 months remaining. All pages scanned.",
      isRequired: true,
      forStage: "ENQUIRY",
    },
    {
      category: "OTHER",
      label: "Certificate of Sponsorship (CoS) reference number",
      description:
        "CoS reference number assigned by the sponsor employer via the Sponsorship Management System.",
      isRequired: true,
      forStage: "ENQUIRY",
    },

    // DOCUMENT_COLLECTION stage
    {
      category: "PASSPORT",
      label: "Applicant's previous passports",
      description: "All previous passports showing travel and immigration history.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "PHOTO",
      label: "Biometric passport photographs (x2)",
      description:
        "Two recent passport-size photographs meeting UKVI specifications.",
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
      category: "EMPLOYMENT_LETTER",
      label: "Sponsor employer details and confirmation letter",
      description:
        "Letter from the sponsor employer confirming the job title, salary, start date, SOC code, and working conditions as stated on the CoS.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Contract of employment or offer letter",
      description:
        "Signed employment contract or formal offer letter from the sponsor employer.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "QUALIFICATION",
      label: "Academic qualifications and transcripts",
      description:
        "Degree certificates, diplomas, or professional qualifications relevant to the role, with transcripts where available.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "QUALIFICATION",
      label: "NARIC/ENIC statement of comparability (if applicable)",
      description:
        "UK ENIC (formerly NARIC) statement confirming overseas qualifications are comparable to a UK qualification level, if required by the role.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "ATAS certificate (if applicable)",
      description:
        "Academic Technology Approval Scheme certificate if the role involves research in a sensitive subject at PhD level or above.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "QUALIFICATION",
      label: "English language evidence (B1 CEFR)",
      description:
        "Approved SELT certificate at B1 level, or evidence of a degree taught in English, or nationality of a majority English-speaking country.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Professional registration (if applicable)",
      description:
        "Evidence of professional registration or membership if required for the occupation (e.g. NMC for nurses, GMC for doctors).",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "BANK_STATEMENT",
      label: "Bank statements showing maintenance funds",
      description:
        "Personal bank statements showing at least £1,270 held for 28 consecutive days (unless the employer certifies maintenance on the CoS).",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "PAYSLIP",
      label: "Previous employment payslips (if applicable)",
      description:
        "Payslips from previous employment to evidence work experience if relevant to the role or salary requirements.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "EMPLOYMENT_LETTER",
      label: "Previous employer reference letters",
      description:
        "Reference letters from previous employers confirming dates of employment, job title, and responsibilities.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Criminal record certificate (if required)",
      description:
        "Police clearance certificate from the applicant's country of residence if the role involves working with vulnerable persons.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "TRANSLATION",
      label: "Certified translations of non-English documents",
      description:
        "All documents not in English must be accompanied by a certified translation.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },

    // CASE_REVIEW stage
    {
      category: "COVER_LETTER",
      label: "Cover letter",
      description:
        "Cover letter setting out the application, CoS details, how salary and skill requirements are met, and any points to address.",
      isRequired: true,
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
      description: "Saved copy of the submitted online application form.",
      isRequired: true,
      forStage: "SUBMISSION",
    },
    {
      category: "OTHER",
      label: "Document index / checklist",
      description:
        "Paginated document index listing all supporting documents submitted.",
      isRequired: true,
      forStage: "SUBMISSION",
    },
  ],

  legalChecklist: [
    {
      label: "Valid Certificate of Sponsorship (CoS) assigned",
      description:
        "Confirm the CoS has been assigned by a licensed sponsor, is unused, and has not expired (valid for 3 months from date of assignment).",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "LEGAL",
    },
    {
      label: "Salary meets minimum threshold (£38,700 or going rate)",
      description:
        "Confirm the salary stated on the CoS meets the general threshold of £38,700 or the going rate for the SOC code, whichever is higher. Check for any tradeable points or new entrant discount.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "LEGAL",
    },
    {
      label: "Occupation is eligible under Skilled Worker route",
      description:
        "Confirm the SOC code on the CoS corresponds to an eligible occupation at RQF level 3 or above on the list of eligible occupations.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "LEGAL",
    },
    {
      label: "Genuine vacancy requirement satisfied",
      description:
        "Assess that the role is a genuine vacancy and the applicant is genuinely being employed to fill it (not primarily to facilitate immigration).",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "LEGAL",
    },
    {
      label: "English language requirement met (B1 CEFR)",
      description:
        "Applicant demonstrates B1 English in reading, writing, speaking, and listening via an approved SELT, a degree taught in English, or nationality of a majority English-speaking country.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "LEGAL",
    },
    {
      label: "Maintenance funds requirement met",
      description:
        "Either the applicant holds £1,270 for 28 consecutive days, or the sponsor has certified maintenance on the CoS.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "LEGAL",
    },
    {
      label: "TB test requirement satisfied (if applicable)",
      description:
        "If applying from a listed country, a valid TB test certificate from an approved clinic.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "LEGAL",
    },
    {
      label: "ATAS clearance obtained (if applicable)",
      description:
        "If the role involves research at PhD level or above in a sensitive subject, ATAS clearance must be obtained before applying.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
      category: "LEGAL",
    },
    {
      label: "No adverse immigration history",
      description:
        "Check for any previous refusals, overstaying, deportation orders, or deception that may affect the application.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "No criminal convictions requiring disclosure",
      description:
        "Review whether the applicant has any criminal convictions that must be disclosed.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "No general grounds for refusal apply",
      description:
        "Review the application against general grounds for refusal under Part 9 of the Immigration Rules.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "Sponsor holds valid sponsor licence",
      description:
        "Verify the employer appears on the published register of licensed sponsors with a valid Skilled Worker licence.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "LEGAL",
    },
  ],

  operationalChecklist: [
    {
      label: "Initial consultation completed",
      description:
        "Assess eligibility, review CoS details, and advise on the application process and timeline.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "OPERATIONAL",
    },
    {
      label: "Retainer / engagement letter signed",
      description: "Client has signed the retainer agreement and terms of engagement.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "OPERATIONAL",
    },
    {
      label: "Fee paid or payment plan agreed",
      description:
        "Full fee received or payment plan agreed with first instalment received.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "OPERATIONAL",
    },
    {
      label: "CoS details confirmed with employer",
      description:
        "Verify all details on the CoS (job title, SOC code, salary, start date) are accurate and match the employment contract.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "OPERATIONAL",
    },
    {
      label: "ATAS check initiated (if applicable)",
      description:
        "If ATAS is required, confirm the application has been submitted and allow 4-6 weeks for processing.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
      category: "OPERATIONAL",
    },
    {
      label: "Document collection checklist sent to client",
      description: "Send client a tailored document checklist.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "OPERATIONAL",
    },
    {
      label: "All documents received and reviewed",
      description:
        "Confirm all required documents received and meeting UKVI requirements.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "OPERATIONAL",
    },
    {
      label: "Cover letter drafted and approved",
      description: "Draft cover letter reviewed by supervising solicitor.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "OPERATIONAL",
    },
    {
      label: "Application form completed and checked",
      description:
        "Complete online application form and review all entries with client.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "OPERATIONAL",
    },
    {
      label: "IHS payment made",
      description: "Immigration Health Surcharge paid and reference recorded.",
      isRequired: true,
      forStage: "SUBMISSION",
      category: "OPERATIONAL",
    },
    {
      label: "Biometric appointment booked",
      description: "Book biometric appointment at the nearest VAC.",
      isRequired: true,
      forStage: "SUBMISSION",
      category: "OPERATIONAL",
    },
    {
      label: "Document bundle prepared and indexed",
      description: "Prepare paginated and indexed document bundle.",
      isRequired: true,
      forStage: "SUBMISSION",
      category: "OPERATIONAL",
    },
    {
      label: "Application submitted online",
      description: "Submit online application and retain confirmation receipt.",
      isRequired: true,
      forStage: "SUBMISSION",
      category: "OPERATIONAL",
    },
    {
      label: "Client notified of decision",
      description:
        "Inform client of the outcome and advise on next steps (visa collection and travel, or appeal/administrative review).",
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
        "Letter summarising the consultation, eligibility assessment, CoS details, documents required, and next steps.",
      forStage: "ENQUIRY",
    },
    {
      name: "Document request letter",
      description:
        "Letter requesting outstanding documents with specific guidance on requirements.",
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      name: "Cover letter to UKVI",
      description:
        "Cover letter to the Entry Clearance Officer setting out the CoS details, how the salary and skill requirements are met, and the applicant's suitability.",
      forStage: "CASE_REVIEW",
    },
    {
      name: "Employer liaison letter",
      description:
        "Letter to the sponsor employer confirming application progress and any actions required from their side.",
      forStage: "CASE_REVIEW",
    },
    {
      name: "Submission confirmation letter",
      description:
        "Letter confirming application submission with reference numbers, biometric appointment, and expected timeline.",
      forStage: "SUBMISSION",
    },
    {
      name: "Decision outcome letter",
      description:
        "Letter summarising the decision and advising on next steps (visa vignette, BRP collection on arrival, or appeal/AR rights).",
      forStage: "DECISION_TRACKING",
    },
  ],
};
