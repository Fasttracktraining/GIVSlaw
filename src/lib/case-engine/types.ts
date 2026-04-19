export type CaseWorkflowStage =
  | "ENQUIRY"
  | "DOCUMENT_COLLECTION"
  | "CASE_REVIEW"
  | "SUBMISSION"
  | "DECISION_TRACKING";

export type DocumentCategory =
  | "PASSPORT"
  | "BRP"
  | "BANK_STATEMENT"
  | "PAYSLIP"
  | "EMPLOYMENT_LETTER"
  | "TENANCY_AGREEMENT"
  | "UTILITY_BILL"
  | "PHOTO"
  | "MARRIAGE_CERT"
  | "BIRTH_CERT"
  | "QUALIFICATION"
  | "TRANSLATION"
  | "COVER_LETTER"
  | "SUPPORTING_LETTER"
  | "OTHER";

export type ChecklistCategory = "LEGAL" | "OPERATIONAL" | "COMPLIANCE";

export interface DocRequirementSpec {
  category: DocumentCategory;
  label: string;
  description?: string;
  isRequired: boolean;
  forStage: CaseWorkflowStage;
}

export interface ChecklistItemSpec {
  label: string;
  description?: string;
  isRequired: boolean;
  forStage: CaseWorkflowStage;
  category: ChecklistCategory;
}

export interface LetterTemplateSpec {
  name: string;
  description: string;
  forStage: CaseWorkflowStage;
}

export interface CaseTypeTemplate {
  name: string;
  description: string;
  documents: DocRequirementSpec[];
  legalChecklist: ChecklistItemSpec[];
  operationalChecklist: ChecklistItemSpec[];
  complianceChecklist: ChecklistItemSpec[];
  letterTemplates: LetterTemplateSpec[];
}
