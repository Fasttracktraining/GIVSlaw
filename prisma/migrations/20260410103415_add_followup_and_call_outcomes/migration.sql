-- CreateEnum
CREATE TYPE "CallOutcomeType" AS ENUM ('NO_ANSWER', 'INTERESTED', 'NOT_INTERESTED', 'CALLBACK_LATER', 'WRONG_NUMBER');

-- AlterTable
ALTER TABLE "leads" ADD COLUMN     "lastContactedAt" TIMESTAMP(3),
ADD COLUMN     "nextFollowUpAt" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "call_outcomes" (
    "id" TEXT NOT NULL,
    "outcome" "CallOutcomeType" NOT NULL,
    "note" TEXT,
    "leadId" TEXT NOT NULL,
    "calledById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "call_outcomes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "call_outcomes" ADD CONSTRAINT "call_outcomes_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "leads"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "call_outcomes" ADD CONSTRAINT "call_outcomes_calledById_fkey" FOREIGN KEY ("calledById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
