/**
 * Case Engine Permissions — role-based access filtering for case queries.
 */

type Role = "ADMIN" | "DIRECTOR" | "ADVISOR" | "CASEWORKER" | "CLIENT";

interface CaseWhereClause {
  assignedAdvisorId?: string;
  clientId?: string;
  workflowStage?: string;
}

/**
 * Returns a Prisma-compatible `where` clause to filter cases by role.
 *
 * - DIRECTOR: sees all cases
 * - ADVISOR / CASEWORKER: sees only assigned cases
 * - ADMIN: sees only cases at ENQUIRY stage
 * - CLIENT: sees only their own cases
 */
export function getCaseWhereClause(
  userId: string,
  role: Role
): CaseWhereClause | undefined {
  switch (role) {
    case "DIRECTOR":
      return undefined; // no filter — full access

    case "ADVISOR":
    case "CASEWORKER":
      return { assignedAdvisorId: userId };

    case "ADMIN":
      return { workflowStage: "ENQUIRY" };

    case "CLIENT":
      return { clientId: userId };

    default:
      return { clientId: userId }; // fail-safe: restrict to own cases
  }
}

/**
 * Check if a user can view a specific case.
 */
export function canViewCase(
  userId: string,
  role: Role,
  caseRecord: { clientId: string; assignedAdvisorId: string; workflowStage: string }
): boolean {
  switch (role) {
    case "DIRECTOR":
      return true;
    case "ADVISOR":
    case "CASEWORKER":
      return caseRecord.assignedAdvisorId === userId;
    case "ADMIN":
      return caseRecord.workflowStage === "ENQUIRY";
    case "CLIENT":
      return caseRecord.clientId === userId;
    default:
      return false;
  }
}

/**
 * Check if a user can modify a case (advance stage, toggle checklist, etc.).
 */
export function canModifyCase(
  userId: string,
  role: Role,
  caseRecord: { assignedAdvisorId: string }
): boolean {
  if (role === "DIRECTOR") return true;
  if (role === "ADVISOR" || role === "CASEWORKER") {
    return caseRecord.assignedAdvisorId === userId;
  }
  return false; // ADMIN and CLIENT cannot modify
}

/**
 * Check if a user can override stage gating (Director only).
 */
export function canOverrideGating(role: Role): boolean {
  return role === "DIRECTOR";
}
