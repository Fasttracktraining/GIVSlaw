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

export const skilledWorkerExtensionTemplate: CaseTypeTemplate = {
  name: "Skilled Worker Visa - Extension / Change of Employment",
  description:
    "Application for further leave to remain under the Skilled Worker route, including extensions with the same employer, changes of employer, or changes of employment. Also covers Skilled Worker entry clearance where the applicant is switching from another visa category within the UK.",

  documents: [
    // ENQUIRY stage
    {
      category: "PASSPORT",
      label: "Applicant's current passport",
      description: "Valid passport with all pages scanned.",
      isRequired: true,
      forStage: "ENQUIRY",
    },
    {
      category: "BRP",
      label: "Applicant's current BRP",
      description: "Current Biometric Residence Permit showing existing leave.",
      isRequired: true,
      forStage: "ENQUIRY",
    },
    {
      category: "OTHER",
      label: "Certificate of Sponsorship (CoS) reference number",
      description:
        "New or updated CoS reference number assigned by the sponsor employer.",
      isRequired: true,
      forStage: "ENQUIRY",
    },

    // DOCUMENT_COLLECTION stage
    {
      category: "PASSPORT",
      label: "Applicant's previous passports",
      description: "All previous passports covering the period of stay in the UK.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Previous visa grant letters / decision letters",
      description: "All previous grant letters and Home Office decision letters.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "EMPLOYMENT_LETTER",
      label: "New sponsor employer confirmation letter",
      description:
        "Letter from the new or existing sponsor employer confirming job title, salary, SOC code, start date, and working conditions as per the CoS.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "New contract of employment or variation letter",
      description:
        "Signed employment contract with the new employer, or a contract variation letter if remaining with the same employer with changed terms.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "PAYSLIP",
      label: "Current employer payslips (6 months)",
      description:
        "Six months of payslips from the current or most recent employer to evidence employment history in the UK.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "BANK_STATEMENT",
      label: "Bank statements (6 months)",
      description:
        "Six months of bank statements showing salary credits and financial history in the UK.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "QUALIFICATION",
      label: "Academic qualifications and transcripts",
      description:
        "Degree certificates, diplomas, or professional qualifications relevant to the role.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "QUALIFICATION",
      label: "NARIC/ENIC statement of comparability (if applicable)",
      description:
        "UK ENIC statement if overseas qualifications need to be compared to UK level.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "ATAS certificate (if applicable)",
      description:
        "ATAS certificate if the role involves research in a sensitive subject at PhD level or above.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "QUALIFICATION",
      label: "English language evidence (B1 CEFR)",
      description:
        "Evidence of meeting the English language requirement: approved SELT at B1, degree taught in English, or previous grant confirming English was met.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Professional registration (if applicable)",
      description:
        "Evidence of professional registration if required for the occupation.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "EMPLOYMENT_LETTER",
      label: "Previous employer reference letters",
      description:
        "Reference letters from previous UK employers confirming dates, role, and responsibilities.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "P60 (most recent tax year)",
      description: "P60 from the current or most recent employer.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "PHOTO",
      label: "Biometric passport photographs (x2)",
      description: "Two recent passport-size photographs meeting UKVI specifications.",
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
        "Cover letter setting out the basis for extension or change of employment, CoS details, and how requirements are met.",
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
      description: "Paginated document index listing all supporting documents.",
      isRequired: true,
      forStage: "SUBMISSION",
    },
  ],

  legalChecklist: [
    {
      label: "Valid Certificate of Sponsorship (CoS) assigned",
      description:
        "Confirm the CoS is assigned by a licensed sponsor, is unused, and not expired.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "LEGAL",
    },
    {
      label: "Salary meets minimum threshold (£38,700 or going rate)",
      description:
        "Confirm salary on the CoS meets the general threshold or going rate. Check for new entrant discount eligibility or tradeable points.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "LEGAL",
    },
    {
      label: "Occupation is eligible under Skilled Worker route",
      description:
        "Confirm the SOC code is eligible at RQF level 3 or above.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "LEGAL",
    },
    {
      label: "Sponsor holds valid sponsor licence",
      description:
        "Verify the employer on the published register of licensed sponsors.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "LEGAL",
    },
    {
      label: "Applicant has existing valid leave or is switching in-country",
      description:
        "Confirm the applicant holds valid leave that permits switching to or extending under the Skilled Worker route.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "LEGAL",
    },
    {
      label: "English language requirement met (B1 CEFR)",
      description:
        "Applicant meets B1 English via SELT, degree taught in English, or previous grant confirmation.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "LEGAL",
    },
    {
      label: "Maintenance funds requirement met",
      description:
        "Either £1,270 held for 28 days, or sponsor has certified maintenance, or applicant has been in the UK for 12+ months with valid leave.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "LEGAL",
    },
    {
      label: "ATAS clearance obtained (if applicable)",
      description:
        "ATAS certificate obtained if the role requires it.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
      category: "LEGAL",
    },
    {
      label: "No breach of immigration conditions during current leave",
      description:
        "Confirm the applicant has not breached any conditions of their current leave (e.g. working for unauthorised employer, exceeding supplementary employment limits).",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "No adverse immigration history",
      description:
        "Check for any previous refusals, overstaying, or deception.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "No criminal convictions requiring disclosure",
      description:
        "Review whether the applicant has any convictions that must be disclosed.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "No general grounds for refusal apply",
      description:
        "Review against Part 9 general grounds for refusal.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "Genuine vacancy requirement satisfied",
      description:
        "Assess that the role is a genuine vacancy and the applicant is genuinely employed to fill it.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
  ],

  operationalChecklist: [
    {
      label: "Initial consultation completed",
      description:
        "Assess eligibility, review CoS details and current leave, advise on application process.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "OPERATIONAL",
    },
    {
      label: "Retainer / engagement letter signed",
      description: "Client signed retainer agreement and terms of engagement.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "OPERATIONAL",
    },
    {
      label: "Fee paid or payment plan agreed",
      description: "Full fee received or payment plan agreed.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "OPERATIONAL",
    },
    {
      label: "CoS details confirmed with employer",
      description:
        "Verify all CoS details are accurate and match the employment contract.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "OPERATIONAL",
    },
    {
      label: "Leave expiry date confirmed and diarised",
      description:
        "Record current leave expiry and set reminders to ensure timely application.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "OPERATIONAL",
    },
    {
      label: "Document collection checklist sent to client",
      description: "Send tailored document checklist to client.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "OPERATIONAL",
    },
    {
      label: "All documents received and reviewed",
      description: "Confirm all documents received and meeting requirements.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "OPERATIONAL",
    },
    {
      label: "Cover letter drafted and approved",
      description: "Cover letter reviewed by supervising solicitor.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "OPERATIONAL",
    },
    {
      label: "Application form completed and checked",
      description: "Online form completed and reviewed with client.",
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
        "Book UKVCAS biometric enrolment or confirm biometric reuse eligibility.",
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
      description: "Submit application and retain confirmation receipt.",
      isRequired: true,
      forStage: "SUBMISSION",
      category: "OPERATIONAL",
    },
    {
      label: "Client notified of decision",
      description:
        "Inform client of outcome and advise on next steps (new BRP, or appeal/AR if refused).",
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
        "Letter summarising the consultation, eligibility assessment, CoS details, and next steps.",
      forStage: "ENQUIRY",
    },
    {
      name: "Document request letter",
      description:
        "Letter requesting outstanding documents with guidance on requirements.",
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      name: "Employer liaison letter",
      description:
        "Letter to the sponsor employer confirming application progress and any actions needed.",
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      name: "Cover letter to Home Office",
      description:
        "Cover letter setting out the CoS details, how requirements are met, and the basis for extension or change of employment.",
      forStage: "CASE_REVIEW",
    },
    {
      name: "Submission confirmation letter",
      description:
        "Letter confirming application submission with reference numbers, biometric details, and expected timeline.",
      forStage: "SUBMISSION",
    },
    {
      name: "Section 3C leave confirmation letter",
      description:
        "Letter confirming the client's leave is extended by section 3C pending the outcome.",
      forStage: "SUBMISSION",
    },
    {
      name: "Decision outcome letter",
      description:
        "Letter summarising the decision and advising on next steps.",
      forStage: "DECISION_TRACKING",
    },
  ],
};
