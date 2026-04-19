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

export const spouseVisaExtensionTemplate: CaseTypeTemplate = {
  name: "Spouse Visa - Extension (FLR(M)) / ILR (5 Year Route)",
  description:
    "Application for further leave to remain as a partner (FLR(M)) or indefinite leave to remain after completing the 5-year partner route under Appendix FM. Applicant is already in the UK on a spouse/partner visa.",

  documents: [
    // ENQUIRY stage
    {
      category: "PASSPORT",
      label: "Applicant's current passport",
      description: "Valid passport with all pages scanned including blank pages.",
      isRequired: true,
      forStage: "ENQUIRY",
    },
    {
      category: "BRP",
      label: "Applicant's current BRP",
      description:
        "Current Biometric Residence Permit showing existing leave to remain.",
      isRequired: true,
      forStage: "ENQUIRY",
    },
    {
      category: "PASSPORT",
      label: "Sponsor's passport or proof of settled status",
      description:
        "Sponsor's UK passport, certificate of naturalisation, or proof of ILR/settled status.",
      isRequired: true,
      forStage: "ENQUIRY",
    },
    {
      category: "MARRIAGE_CERT",
      label: "Marriage or civil partnership certificate",
      description:
        "Original marriage or civil partnership certificate. Certified translation required if not in English.",
      isRequired: true,
      forStage: "ENQUIRY",
    },

    // DOCUMENT_COLLECTION stage
    {
      category: "PASSPORT",
      label: "Applicant's previous passports",
      description:
        "All previous passports covering the period of leave in the UK.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Previous visa grant letters / decision letters",
      description:
        "All previous grant letters and decision letters from the Home Office.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "PAYSLIP",
      label: "Sponsor's payslips (6 months)",
      description:
        "Six consecutive monthly payslips immediately preceding the application.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "BANK_STATEMENT",
      label: "Sponsor's bank statements (6 months)",
      description:
        "Six months of personal bank statements showing salary credits matching the payslips.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "EMPLOYMENT_LETTER",
      label: "Sponsor's employer letter",
      description:
        "Letter confirming job title, salary, length of employment, and that employment is ongoing. Dated within 28 days of application.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Sponsor's P60 (most recent tax year)",
      description: "P60 for the most recent complete tax year.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Sponsor's SA302 / tax returns (if self-employed)",
      description:
        "SA302 tax calculations, tax year overviews, and corresponding bank statements if the sponsor is self-employed.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "BANK_STATEMENT",
      label: "Joint bank account statements",
      description:
        "Statements from any joint bank accounts held by the couple showing shared financial life.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "TENANCY_AGREEMENT",
      label: "Joint tenancy agreement or mortgage statement",
      description:
        "Tenancy agreement or mortgage statement in both names, or sponsor's name with evidence the applicant resides there.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "UTILITY_BILL",
      label: "Utility bills at shared address",
      description:
        "Council tax bill (joint names preferred), gas, electric, water, or broadband bills confirming shared residence.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Council tax bill (joint names)",
      description:
        "Council tax bill showing both the applicant and sponsor at the same address.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "GP registration / NHS letters at shared address",
      description:
        "Evidence of GP registration or NHS correspondence at the shared address.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Joint correspondence (insurance, subscriptions)",
      description:
        "Joint insurance policies, subscriptions, or other correspondence showing a shared life.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "PHOTO",
      label: "Photographs of the couple together (recent)",
      description:
        "Recent photographs showing the couple together during the current period of leave.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "BIRTH_CERT",
      label: "Birth certificates of children (if applicable)",
      description:
        "Birth certificates of any children born during the relationship, particularly if born in the UK.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "QUALIFICATION",
      label: "English language certificate (B1 CEFR — for ILR only)",
      description:
        "Approved SELT at B1 level in speaking and listening. Required for ILR applications but not for FLR(M) extension.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Life in the UK test pass certificate (for ILR only)",
      description:
        "Pass notification letter from the Life in the UK test. Required for ILR but not for FLR(M) extension.",
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
        "Cover letter setting out the application, evidence of ongoing genuine relationship, financial and accommodation evidence, and continuous residence.",
      isRequired: true,
      forStage: "CASE_REVIEW",
    },
    {
      category: "SUPPORTING_LETTER",
      label: "Supporting letters from family or friends",
      description:
        "Letters attesting to the ongoing genuine nature of the relationship.",
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
      description: "Saved copy of the completed and submitted online application.",
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
      label: "Financial requirement met (minimum £29,000 gross annual income)",
      description:
        "Confirm the sponsor meets the minimum income threshold under Appendix FM-SE, or reliance on adequate savings or combination of sources.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "LEGAL",
    },
    {
      label: "Relationship is genuine and subsisting",
      description:
        "Assess whether there is sufficient evidence of an ongoing genuine relationship since the last grant of leave.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "LEGAL",
    },
    {
      label: "Applicant has existing valid leave as a partner",
      description:
        "Confirm the applicant currently holds valid leave to remain as a partner under Appendix FM or has leave that has not expired for more than 28 days.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "LEGAL",
    },
    {
      label: "Couple are living together in the UK",
      description:
        "Evidence that the couple are cohabiting at the same address in the UK.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "LEGAL",
    },
    {
      label: "Adequate accommodation available",
      description:
        "Accommodation is not overcrowded under the Housing Act 1985 and is owned or occupied exclusively by the family.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "LEGAL",
    },
    {
      label: "English language requirement met (B1 for ILR)",
      description:
        "For ILR: B1 CEFR in speaking and listening via an approved SELT, or an exempt qualification/nationality. For extension: A1 requirement from entry clearance still valid.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "LEGAL",
    },
    {
      label: "Life in the UK test passed (for ILR only)",
      description:
        "The Life in the UK test must be passed before the ILR application is submitted.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
      category: "LEGAL",
    },
    {
      label: "Continuous residence maintained",
      description:
        "Check the applicant has not been absent from the UK for more than 180 days in any 12-month period during the relevant leave period.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "No immigration breaches during current leave",
      description:
        "Confirm no breach of immigration conditions (e.g. working without permission, overstaying) during the current period of leave.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "No criminal convictions requiring disclosure",
      description:
        "Review whether the applicant has any convictions that must be disclosed and may affect the good character requirement (especially for ILR).",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "Completed required probationary period (for ILR)",
      description:
        "For ILR: confirm the applicant has completed the full 5-year (or 10-year) probationary period on the partner route.",
      isRequired: false,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "No paragraph 322 general grounds for refusal apply",
      description:
        "Review the application against the general grounds for refusal including deception, character, and conduct.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
  ],

  operationalChecklist: [
    {
      label: "Initial consultation completed",
      description:
        "Assess eligibility for extension or ILR, review current leave status, and advise on requirements.",
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
      label: "Leave expiry date confirmed and diarised",
      description:
        "Confirm the current leave expiry date and set a reminder to ensure the application is submitted in time.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "OPERATIONAL",
    },
    {
      label: "Document collection checklist sent to client",
      description:
        "Send client a tailored document checklist based on whether they are applying for extension or ILR.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "OPERATIONAL",
    },
    {
      label: "All documents received and reviewed",
      description:
        "Confirm all required documents received, legible, and meeting UKVI requirements.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "OPERATIONAL",
    },
    {
      label: "Cover letter drafted and approved",
      description:
        "Draft cover letter reviewed by the supervising solicitor.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "OPERATIONAL",
    },
    {
      label: "Application form completed and checked",
      description:
        "Complete online application form and review all entries with the client.",
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
      label: "Biometric appointment booked (or biometric reuse confirmed)",
      description:
        "Book biometric enrolment appointment at a UKVCAS service point, or confirm biometric reuse is available.",
      isRequired: true,
      forStage: "SUBMISSION",
      category: "OPERATIONAL",
    },
    {
      label: "Document bundle prepared and indexed",
      description: "Prepare paginated and indexed document bundle for submission.",
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
        "Inform client of the outcome and advise on next steps (new BRP collection, or appeal/administrative review rights if refused).",
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
        "Letter summarising the consultation, eligibility assessment for extension or ILR, required documents, and timeline.",
      forStage: "ENQUIRY",
    },
    {
      name: "Document request letter",
      description:
        "Detailed letter requesting outstanding documents with specific guidance on requirements.",
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      name: "Cover letter to Home Office",
      description:
        "Cover letter to the Home Office setting out the basis of the application, evidence of ongoing genuine relationship, financial and accommodation evidence, and compliance with immigration conditions.",
      forStage: "CASE_REVIEW",
    },
    {
      name: "Submission confirmation letter",
      description:
        "Letter confirming the application has been submitted with reference numbers, biometric appointment details, and expected processing times.",
      forStage: "SUBMISSION",
    },
    {
      name: "Section 3C leave confirmation letter",
      description:
        "Letter confirming that the client's leave is extended by section 3C of the Immigration Act 1971 pending the outcome of the application.",
      forStage: "SUBMISSION",
    },
    {
      name: "Decision outcome letter",
      description:
        "Letter summarising the decision and advising on next steps including BRP collection or appeal/administrative review rights.",
      forStage: "DECISION_TRACKING",
    },
  ],
};
