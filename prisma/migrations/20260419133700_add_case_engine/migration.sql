-- CreateEnum
CREATE TYPE "CaseType" AS ENUM ('SPOUSE_VISA_ENTRY_CLEARANCE', 'SPOUSE_VISA_EXTENSION_ILR', 'SKILLED_WORKER_ENTRY', 'SKILLED_WORKER_EXTENSION', 'ILR_10YR_LONG_RESIDENCE', 'BRITISH_CITIZENSHIP_NATURALISATION');

-- CreateEnum
CREATE TYPE "CaseWorkflowStage" AS ENUM ('ENQUIRY', 'DOCUMENT_COLLECTION', 'CASE_REVIEW', 'SUBMISSION', 'DECISION_TRACKING');

-- CreateEnum
CREATE TYPE "ChecklistCategory" AS ENUM ('LEGAL', 'OPERATIONAL', 'COMPLIANCE');

-- CreateEnum
CREATE TYPE "DocRequirementStatus" AS ENUM ('PENDING', 'UPLOADED', 'VERIFIED', 'REJECTED');

-- AlterTable
ALTER TABLE "cases" ADD COLUMN     "caseType" "CaseType",
ADD COLUMN     "complianceAmlDone" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complianceConfidentialitySigned" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complianceConflictCheckDone" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "nextActionLabel" TEXT,
ADD COLUMN     "nextActionPriority" TEXT,
ADD COLUMN     "nextActionUpdatedAt" TIMESTAMP(3),
ADD COLUMN     "riskLevel" TEXT,
ADD COLUMN     "workflowStage" "CaseWorkflowStage" NOT NULL DEFAULT 'ENQUIRY';

-- CreateTable
CREATE TABLE "case_templates" (
    "id" TEXT NOT NULL,
    "caseType" "CaseType" NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "documents" JSONB NOT NULL,
    "legalChecklist" JSONB NOT NULL,
    "operationalChecklist" JSONB NOT NULL,
    "complianceChecklist" JSONB NOT NULL,
    "letterTemplates" JSONB,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "case_templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "case_document_requirements" (
    "id" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "category" "DocumentCategory" NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT,
    "isRequired" BOOLEAN NOT NULL DEFAULT true,
    "forStage" "CaseWorkflowStage",
    "documentId" TEXT,
    "status" "DocRequirementStatus" NOT NULL DEFAULT 'PENDING',
    "verifiedById" TEXT,
    "verifiedAt" TIMESTAMP(3),
    "feedback" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "case_document_requirements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "document_versions" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "mimeType" TEXT NOT NULL,
    "uploadedById" TEXT NOT NULL,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "document_versions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "checklist_items" (
    "id" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "category" "ChecklistCategory" NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT,
    "isRequired" BOOLEAN NOT NULL DEFAULT true,
    "forStage" "CaseWorkflowStage",
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "completedById" TEXT,
    "completedAt" TIMESTAMP(3),
    "notes" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "checklist_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stage_transitions" (
    "id" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "fromStage" "CaseWorkflowStage" NOT NULL,
    "toStage" "CaseWorkflowStage" NOT NULL,
    "userId" TEXT NOT NULL,
    "gatingMet" BOOLEAN NOT NULL DEFAULT true,
    "overrideReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stage_transitions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "document_access_logs" (
    "id" TEXT NOT NULL,
    "documentId" TEXT,
    "caseId" TEXT,
    "userId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "ipAddress" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "document_access_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "case_templates_caseType_key" ON "case_templates"("caseType");

-- CreateIndex
CREATE UNIQUE INDEX "case_document_requirements_documentId_key" ON "case_document_requirements"("documentId");

-- AddForeignKey
ALTER TABLE "case_document_requirements" ADD CONSTRAINT "case_document_requirements_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "cases"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "case_document_requirements" ADD CONSTRAINT "case_document_requirements_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "documents"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "case_document_requirements" ADD CONSTRAINT "case_document_requirements_verifiedById_fkey" FOREIGN KEY ("verifiedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_versions" ADD CONSTRAINT "document_versions_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "documents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_versions" ADD CONSTRAINT "document_versions_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "checklist_items" ADD CONSTRAINT "checklist_items_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "cases"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "checklist_items" ADD CONSTRAINT "checklist_items_completedById_fkey" FOREIGN KEY ("completedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stage_transitions" ADD CONSTRAINT "stage_transitions_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "cases"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stage_transitions" ADD CONSTRAINT "stage_transitions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_access_logs" ADD CONSTRAINT "document_access_logs_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "documents"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_access_logs" ADD CONSTRAINT "document_access_logs_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "cases"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_access_logs" ADD CONSTRAINT "document_access_logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
