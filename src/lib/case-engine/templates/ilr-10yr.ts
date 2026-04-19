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

export const ilr10yrTemplate: CaseTypeTemplate = {
  name: "ILR - 10 Year Long Residence",
  description:
    "Application for indefinite leave to remain on the basis of 10 years' continuous lawful residence in the United Kingdom under paragraph 276B of the Immigration Rules (long residence route). This is one of the most document-intensive application types.",

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
      description: "Current Biometric Residence Permit.",
      isRequired: true,
      forStage: "ENQUIRY",
    },

    // DOCUMENT_COLLECTION stage
    {
      category: "PASSPORT",
      label: "All previous passports (covering 10 years)",
      description:
        "Every passport held during the 10-year qualifying period. If any passport is lost or unavailable, a statement explaining the circumstances is required along with any replacement documentation.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "All previous visa grant letters and decision letters",
      description:
        "Every grant letter, decision letter, and endorsement received from the Home Office over the 10-year period, showing a continuous chain of lawful leave.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "BRP",
      label: "All previous BRPs",
      description:
        "All previous Biometric Residence Permits issued during the qualifying period.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Full travel history (10 years)",
      description:
        "Comprehensive travel history covering all trips in and out of the UK over the 10-year period. Include dates of departure and return, destination, and purpose of travel. Cross-reference with passport stamps.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Flight booking confirmations / boarding passes",
      description:
        "Supporting evidence for the travel history: flight bookings, boarding passes, e-tickets, or travel itineraries.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "EMPLOYMENT_LETTER",
      label: "Employer letters covering 10-year period",
      description:
        "Letters from all employers during the 10-year period confirming dates of employment, job title, and that the applicant was based in the UK.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "PAYSLIP",
      label: "Payslips (representative sample across 10 years)",
      description:
        "Payslips from each employer throughout the qualifying period. Provide at least 2-3 payslips per year to evidence continuous UK presence.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "P60s for each tax year (10 years)",
      description:
        "P60 end-of-year certificates for each of the 10 tax years in the qualifying period.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "BANK_STATEMENT",
      label: "Bank statements (10 years — key months)",
      description:
        "Bank statements showing UK-based transactions throughout the 10-year period. Provide at least quarterly statements for each year to demonstrate continuous UK residence.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "HMRC tax records / SA302s",
      description:
        "HMRC tax calculations (SA302) or tax year overviews, especially for any self-employment periods.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Council tax bills (10 years)",
      description:
        "Council tax bills or statements for each year of residence showing the applicant's name and UK address.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "TENANCY_AGREEMENT",
      label: "Tenancy agreements / mortgage statements (10 years)",
      description:
        "All tenancy agreements, lease renewals, or mortgage statements covering the 10-year period to show continuous UK residence.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "UTILITY_BILL",
      label: "Utility bills (representative sample across 10 years)",
      description:
        "Gas, electric, water, or broadband bills at each address during the qualifying period.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "NHS registration / GP letters",
      description:
        "GP registration summary, appointment history, or NHS letters confirming registration at UK addresses.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "National Insurance records",
      description:
        "National Insurance contribution record from HMRC showing contributions over the 10-year period.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Life in the UK test pass certificate",
      description:
        "Pass notification letter from the Life in the UK test.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "QUALIFICATION",
      label: "English language certificate (B1 CEFR)",
      description:
        "Approved SELT at B1 level, or evidence of exemption (degree taught in English, majority English-speaking country national).",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Address history (10 years)",
      description:
        "Complete list of all UK addresses over the 10-year period with dates of residence at each. Must be supported by documentary evidence.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Evidence of any gaps in leave",
      description:
        "If there are any gaps in leave (e.g. between applications), provide evidence of section 3C leave, pending applications, or explanations.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Police registration certificate (if applicable)",
      description:
        "If subject to police registration, provide the certificate showing all updates.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "BIRTH_CERT",
      label: "Birth certificates of UK-born children (if applicable)",
      description:
        "Birth certificates of any children born in the UK during the qualifying period.",
      isRequired: false,
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
        "Detailed cover letter setting out the 10-year residence timeline, addressing all absences, demonstrating continuous lawful residence, and explaining any complexities.",
      isRequired: true,
      forStage: "CASE_REVIEW",
    },
    {
      category: "OTHER",
      label: "Residence timeline / chronology",
      description:
        "Detailed chronological table showing: every period of leave, every visa/application, every trip out of the UK, and all UK addresses. This is a key document for long residence cases.",
      isRequired: true,
      forStage: "CASE_REVIEW",
    },
    {
      category: "SUPPORTING_LETTER",
      label: "Supporting letters (employer, landlord, community)",
      description:
        "Letters from employers, landlords, community leaders, or other persons confirming the applicant's residence in the UK.",
      isRequired: false,
      forStage: "CASE_REVIEW",
    },

    // SUBMISSION stage
    {
      category: "OTHER",
      label: "IHS payment confirmation",
      description: "Immigration Health Surcharge payment reference (if applicable).",
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
        "Comprehensive paginated document index — essential for this document-heavy application type.",
      isRequired: true,
      forStage: "SUBMISSION",
    },
  ],

  legalChecklist: [
    {
      label: "10 years' continuous lawful residence established",
      description:
        "Confirm the applicant can demonstrate 10 continuous years of lawful residence in the UK. Map out the exact qualifying period start and end dates.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "LEGAL",
    },
    {
      label: "No gaps in lawful leave during the qualifying period",
      description:
        "Verify there are no gaps between grants of leave. If applications were made in time, confirm section 3C leave applied to bridge any gap.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "LEGAL",
    },
    {
      label: "All leave during the qualifying period was lawful",
      description:
        "Confirm every period of leave during the 10 years was lawful (not overstaying, not on temporary admission without leave, etc.).",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "LEGAL",
    },
    {
      label: "No absences exceeding 180 days in any 12-month period",
      description:
        "Calculate all absences from the UK and confirm no 12-month rolling period contains more than 180 days of absence.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "No single absence exceeding 6 months",
      description:
        "Confirm no single trip out of the UK exceeded 6 continuous months during the qualifying period.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "Total absences calculated and within limits",
      description:
        "Calculate total days absent from the UK over the 10-year period and document the calculation. While there is no statutory total cap, excessive absences may undermine the continuous residence claim.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "Life in the UK test passed",
      description:
        "Applicant has passed the Life in the UK test and holds a valid pass notification letter.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "LEGAL",
    },
    {
      label: "English language requirement met (B1 CEFR)",
      description:
        "Applicant meets the English language requirement at B1 level via approved SELT, degree taught in English, or nationality exemption.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "LEGAL",
    },
    {
      label: "Good character requirement met",
      description:
        "Assess good character: no unspent criminal convictions, no pending prosecutions, no involvement in immigration offences, no deception, no war crimes, and no other adverse conduct.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "No breach of immigration conditions",
      description:
        "Confirm the applicant has not breached any conditions of leave during the 10-year period (e.g. working without permission, claiming public funds when prohibited).",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "No deportation order or exclusion decision in force",
      description:
        "Confirm no deportation order, exclusion decision, or removal decision is in force against the applicant.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "Application made before current leave expires",
      description:
        "Confirm the ILR application will be submitted while the applicant still has valid leave (or within 28 days of expiry for a late application).",
      isRequired: true,
      forStage: "SUBMISSION",
      category: "LEGAL",
    },
    {
      label: "Section 3C leave analysis completed (if applicable)",
      description:
        "If any applications during the 10-year period were submitted before leave expired but decided after, confirm section 3C applied and document the analysis.",
      isRequired: false,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "No general grounds for refusal under Part 9",
      description:
        "Review against Part 9 general grounds for refusal including false representations and failure to disclose material facts.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
  ],

  operationalChecklist: [
    {
      label: "Initial consultation completed",
      description:
        "Conduct a detailed initial consultation to map out the 10-year timeline, identify potential issues (gaps, absences, breaches), and assess viability.",
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
      label: "Preliminary timeline drafted",
      description:
        "Draft an initial 10-year residence timeline mapping every visa, every application, every address, and every absence from the UK.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "OPERATIONAL",
    },
    {
      label: "Leave expiry date confirmed and diarised",
      description:
        "Record current leave expiry and set reminders for timely application.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "OPERATIONAL",
    },
    {
      label: "Document collection checklist sent to client",
      description:
        "Send comprehensive document checklist covering 10 years of evidence. This will be significantly longer than standard checklists.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "OPERATIONAL",
    },
    {
      label: "All documents received and reviewed",
      description:
        "Confirm all documents received. For this case type, expect multiple rounds of document requests to fill gaps.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "OPERATIONAL",
    },
    {
      label: "Residence chronology finalised",
      description:
        "Prepare a detailed chronological table of residence, leave, absences, and addresses for the full 10-year period.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "OPERATIONAL",
    },
    {
      label: "Absence calculations verified",
      description:
        "Double-check all absence calculations against passport stamps, flight records, and bank statements.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "OPERATIONAL",
    },
    {
      label: "Cover letter drafted and approved",
      description:
        "Draft a comprehensive cover letter addressing the continuous residence claim. Reviewed by supervising solicitor.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "OPERATIONAL",
    },
    {
      label: "Application form completed and checked",
      description: "Complete online form and review all entries with client.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "OPERATIONAL",
    },
    {
      label: "IHS payment made (if applicable)",
      description: "Pay IHS if required and record the reference.",
      isRequired: true,
      forStage: "SUBMISSION",
      category: "OPERATIONAL",
    },
    {
      label: "Biometric appointment booked",
      description: "Book UKVCAS biometric enrolment appointment.",
      isRequired: true,
      forStage: "SUBMISSION",
      category: "OPERATIONAL",
    },
    {
      label: "Document bundle prepared and indexed",
      description:
        "Prepare a comprehensive, paginated, and indexed document bundle. For long residence, this is typically the largest bundle.",
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
        "Inform client of outcome. If refused, advise on appeal/administrative review rights.",
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
        "Letter summarising the initial consultation, preliminary assessment of the 10-year timeline, identified issues, and required evidence.",
      forStage: "ENQUIRY",
    },
    {
      name: "Document request letter",
      description:
        "Comprehensive document request covering 10 years of evidence. May need to be sent in stages.",
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      name: "Follow-up document request letter",
      description:
        "Follow-up letter requesting additional documents to fill gaps identified during the review of initial documents.",
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      name: "Cover letter to Home Office",
      description:
        "Detailed cover letter setting out the 10-year continuous residence claim, the chronological timeline, absence calculations, and addressing any potential concerns.",
      forStage: "CASE_REVIEW",
    },
    {
      name: "Submission confirmation letter",
      description:
        "Letter confirming application submission with reference numbers and expected timeline.",
      forStage: "SUBMISSION",
    },
    {
      name: "Section 3C leave confirmation letter",
      description:
        "Letter confirming section 3C leave applies pending the decision.",
      forStage: "SUBMISSION",
    },
    {
      name: "Decision outcome letter",
      description:
        "Letter summarising the decision and advising on next steps (BRP collection or appeal/AR rights).",
      forStage: "DECISION_TRACKING",
    },
  ],
};
