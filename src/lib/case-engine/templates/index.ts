import type { CaseTypeTemplate } from "../types";
import { spouseVisaEntryTemplate } from "./spouse-visa-entry";
import { spouseVisaExtensionTemplate } from "./spouse-visa-extension";
import { skilledWorkerEntryTemplate } from "./skilled-worker-entry";
import { skilledWorkerExtensionTemplate } from "./skilled-worker-extension";
import { ilr10yrTemplate } from "./ilr-10yr";
import { citizenshipTemplate } from "./citizenship";

type CaseType =
  | "SPOUSE_VISA_ENTRY_CLEARANCE"
  | "SPOUSE_VISA_EXTENSION_ILR"
  | "SKILLED_WORKER_ENTRY"
  | "SKILLED_WORKER_EXTENSION"
  | "ILR_10YR_LONG_RESIDENCE"
  | "BRITISH_CITIZENSHIP_NATURALISATION";

/**
 * Registry mapping each CaseType enum value to its template definition.
 * Used by applyCaseTemplate to look up the correct template when a case type is assigned.
 */
export const caseTypeTemplates: Record<CaseType, CaseTypeTemplate> = {
  SPOUSE_VISA_ENTRY_CLEARANCE: spouseVisaEntryTemplate,
  SPOUSE_VISA_EXTENSION_ILR: spouseVisaExtensionTemplate,
  SKILLED_WORKER_ENTRY: skilledWorkerEntryTemplate,
  SKILLED_WORKER_EXTENSION: skilledWorkerExtensionTemplate,
  ILR_10YR_LONG_RESIDENCE: ilr10yrTemplate,
  BRITISH_CITIZENSHIP_NATURALISATION: citizenshipTemplate,
};

/**
 * Look up a case type template by its CaseType enum value.
 * Returns undefined if the case type is not found.
 */
export function getTemplateForCaseType(
  caseType: CaseType
): CaseTypeTemplate | undefined {
  return caseTypeTemplates[caseType];
}

// Re-export all individual templates for direct imports
export { spouseVisaEntryTemplate } from "./spouse-visa-entry";
export { spouseVisaExtensionTemplate } from "./spouse-visa-extension";
export { skilledWorkerEntryTemplate } from "./skilled-worker-entry";
export { skilledWorkerExtensionTemplate } from "./skilled-worker-extension";
export { ilr10yrTemplate } from "./ilr-10yr";
export { citizenshipTemplate } from "./citizenship";

// Alias for seed scripts
export const TEMPLATE_REGISTRY = caseTypeTemplates;
