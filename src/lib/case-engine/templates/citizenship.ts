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

export const citizenshipTemplate: CaseTypeTemplate = {
  name: "British Citizenship - Naturalisation",
  description:
    "Application for naturalisation as a British citizen under sections 6(1) or 6(2) of the British Nationality Act 1981. Section 6(1) applies to general applicants (5-year residence), and section 6(2) applies to spouses or civil partners of British citizens (3-year residence).",

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
      label: "Applicant's current BRP (showing ILR)",
      description:
        "Biometric Residence Permit showing indefinite leave to remain.",
      isRequired: true,
      forStage: "ENQUIRY",
    },

    // DOCUMENT_COLLECTION stage
    {
      category: "PASSPORT",
      label: "All previous passports (covering residence period)",
      description:
        "All passports covering the qualifying residence period (5 years for general, 3 years for spouse of British citizen).",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "ILR grant letter or endorsement",
      description:
        "Original grant letter or BRP showing indefinite leave to remain, confirming the date ILR was granted.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Life in the UK test pass certificate",
      description: "Pass notification letter from the Life in the UK test.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "QUALIFICATION",
      label: "English language evidence (B1 CEFR or above)",
      description:
        "Approved SELT at B1 or above, degree taught or researched in English, or nationality of a majority English-speaking country.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Full travel history since ILR was granted",
      description:
        "Comprehensive list of all trips outside the UK since ILR was granted, with dates of departure and return, destination, and purpose.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Full address history (5 years or 3 years)",
      description:
        "Complete list of all UK addresses during the qualifying residence period with dates of residence at each.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Referee 1 details and signed declaration",
      description:
        "First referee: must be a person of standing in the community (professional, over 25, British citizen or relevant nationality, known applicant for 3+ years, not a relative or solicitor acting on the case).",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Referee 2 details and signed declaration",
      description:
        "Second referee: must be a professional person or someone of similar standing, British citizen, known the applicant for 3+ years, not a family member or legal representative.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "PASSPORT",
      label: "Referee 1 passport copy",
      description: "Copy of the first referee's passport or national identity document.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "PASSPORT",
      label: "Referee 2 passport copy",
      description: "Copy of the second referee's passport or national identity document.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "MARRIAGE_CERT",
      label: "Marriage certificate (if applying under s.6(2))",
      description:
        "Marriage or civil partnership certificate if applying as the spouse/civil partner of a British citizen under section 6(2) for the 3-year residence concession.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "EMPLOYMENT_LETTER",
      label: "Current employer letter",
      description:
        "Letter from employer confirming employment, to support good character and intention to reside in the UK.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "BANK_STATEMENT",
      label: "Bank statements (recent 3-6 months)",
      description:
        "Recent bank statements showing UK-based financial activity.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Council tax bills (covering qualifying period)",
      description:
        "Council tax bills or statements for each year of the qualifying period.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "TENANCY_AGREEMENT",
      label: "Tenancy agreement or mortgage statement",
      description:
        "Current tenancy agreement or mortgage statement confirming UK residence.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Criminal record disclosure (if applicable)",
      description:
        "If the applicant has any criminal convictions (including driving offences, cautions, or penalty notices), full details and court documents must be provided.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "OTHER",
      label: "Evidence of community ties and intention to reside",
      description:
        "Evidence supporting the applicant's intention to make the UK their permanent home: property ownership, children in UK schools, community involvement, etc.",
      isRequired: false,
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      category: "PHOTO",
      label: "Biometric passport photographs (x2)",
      description:
        "Two recent passport-size photographs meeting Home Office specifications. Must be countersigned by a referee if required.",
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
        "Cover letter setting out the basis for the application, residence history, absence calculations, good character declaration, and referee information.",
      isRequired: true,
      forStage: "CASE_REVIEW",
    },
    {
      category: "SUPPORTING_LETTER",
      label: "Supporting letters (character references)",
      description:
        "Additional character reference letters from employers, community leaders, or others who can attest to the applicant's good character and ties to the UK.",
      isRequired: false,
      forStage: "CASE_REVIEW",
    },

    // SUBMISSION stage
    {
      category: "OTHER",
      label: "Application fee payment confirmation",
      description:
        "Confirmation of payment of the citizenship application fee (currently £1,580).",
      isRequired: true,
      forStage: "SUBMISSION",
    },
    {
      category: "OTHER",
      label: "Completed AN form",
      description:
        "Completed application form (Form AN for naturalisation), signed by the applicant and countersigned by a referee.",
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
      label: "Applicant holds indefinite leave to remain (ILR)",
      description:
        "Confirm the applicant currently holds ILR (or equivalent settled status). The applicant must have been free from immigration time restrictions for at least 12 months.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "LEGAL",
    },
    {
      label: "Qualifying residence period met",
      description:
        "Section 6(1): 5 years' residence in the UK. Section 6(2): 3 years' residence if married to or civil partner of a British citizen. Confirm which section applies.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "LEGAL",
    },
    {
      label: "Applicant aged 18 or over",
      description:
        "The applicant must be 18 or over at the date of application. Under-18s apply for registration, not naturalisation.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "LEGAL",
    },
    {
      label: "Absence limit not exceeded (s.6(1): max 450 days in 5 years)",
      description:
        "For section 6(1): total absences must not exceed 450 days in the 5-year qualifying period. Calculate all absences carefully.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "Absence limit not exceeded (s.6(2): max 270 days in 3 years)",
      description:
        "For section 6(2): total absences must not exceed 270 days in the 3-year qualifying period.",
      isRequired: false,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "Final year absence limit not exceeded (max 90 days)",
      description:
        "Absences in the final 12 months before the application must not exceed 90 days.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "Applicant was in the UK exactly 5/3 years before the application",
      description:
        "The applicant must have been in the UK on the date exactly 5 years (s.6(1)) or 3 years (s.6(2)) before the date of application.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "Good character requirement met",
      description:
        "Assess good character comprehensively: criminal convictions, cautions, civil penalties, financial soundness, tax compliance, immigration history, deception, and general conduct.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "Life in the UK test passed",
      description:
        "The applicant has passed the Life in the UK test.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "LEGAL",
    },
    {
      label: "English language requirement met (B1 CEFR)",
      description:
        "The applicant meets the English language requirement at B1 level or above.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "LEGAL",
    },
    {
      label: "Intention to continue living in the UK (or Crown service)",
      description:
        "The applicant intends to make the UK their principal home, or enter/continue Crown service, service under an international organisation of which the UK is a member, or service in a company or association established in the UK.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
    {
      label: "Referees meet requirements",
      description:
        "Both referees meet Home Office requirements: professional standing, British/relevant nationality, known applicant 3+ years, not related, not the applicant's solicitor.",
      isRequired: true,
      forStage: "DOCUMENT_COLLECTION",
      category: "LEGAL",
    },
    {
      label: "No war crimes, terrorism, or serious criminality",
      description:
        "Confirm no involvement in war crimes, crimes against humanity, terrorism, or other serious criminal conduct.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "LEGAL",
    },
  ],

  operationalChecklist: [
    {
      label: "Initial consultation completed",
      description:
        "Assess eligibility, determine which section applies (6(1) or 6(2)), identify potential good character issues, and advise on the process.",
      isRequired: true,
      forStage: "ENQUIRY",
      category: "OPERATIONAL",
    },
    {
      label: "Retainer / engagement letter signed",
      description: "Client signed retainer and terms of engagement.",
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
      label: "Referees identified and validated",
      description:
        "Identify two suitable referees who meet the Home Office requirements. Confirm their willingness and validate their eligibility before proceeding.",
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
      label: "Absence calculations verified",
      description:
        "Calculate and double-check all absences against passport stamps and travel records.",
      isRequired: true,
      forStage: "CASE_REVIEW",
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
      label: "AN form completed and checked",
      description:
        "Complete the AN form, review all sections with the client, and arrange countersigning by a referee.",
      isRequired: true,
      forStage: "CASE_REVIEW",
      category: "OPERATIONAL",
    },
    {
      label: "Application fee paid",
      description: "Citizenship application fee paid and confirmation retained.",
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
      label: "Application submitted",
      description:
        "Submit application (online or by post depending on current process) and retain confirmation.",
      isRequired: true,
      forStage: "SUBMISSION",
      category: "OPERATIONAL",
    },
    {
      label: "Client notified of decision",
      description:
        "Inform client of the outcome. If approved, advise on citizenship ceremony booking. If refused, advise on appeal or reapplication.",
      isRequired: true,
      forStage: "DECISION_TRACKING",
      category: "OPERATIONAL",
    },
    {
      label: "Citizenship ceremony booked",
      description:
        "Once approved, assist the client in booking the citizenship ceremony with the local council within the required timeframe.",
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
        "Letter summarising the consultation, eligibility assessment under the relevant section, residence and absence calculations, and required documents.",
      forStage: "ENQUIRY",
    },
    {
      name: "Document request letter",
      description:
        "Letter requesting documents including referee information, travel history, and residence evidence.",
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      name: "Referee guidance letter",
      description:
        "Letter to the referees explaining their role, the requirements they must meet, and the declaration they will need to sign.",
      forStage: "DOCUMENT_COLLECTION",
    },
    {
      name: "Cover letter to Home Office",
      description:
        "Cover letter setting out the application under the relevant section, residence history, absence calculations, good character assessment, and referee details.",
      forStage: "CASE_REVIEW",
    },
    {
      name: "Submission confirmation letter",
      description:
        "Letter confirming application submission with reference number and expected timeline.",
      forStage: "SUBMISSION",
    },
    {
      name: "Decision outcome letter",
      description:
        "Letter summarising the decision and advising on next steps: citizenship ceremony if approved, or appeal/reapplication if refused.",
      forStage: "DECISION_TRACKING",
    },
    {
      name: "Ceremony booking guidance letter",
      description:
        "Letter providing guidance on booking and attending the citizenship ceremony, including what to bring and the oath/affirmation.",
      forStage: "DECISION_TRACKING",
    },
  ],
};
