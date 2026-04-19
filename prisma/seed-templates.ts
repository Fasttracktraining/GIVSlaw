/**
 * Seed case type templates into the CaseTemplate table.
 * Run: npx ts-node prisma/seed-templates.ts
 */

import { PrismaClient } from "@prisma/client";
import { TEMPLATE_REGISTRY } from "../src/lib/case-engine/templates";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding case templates...");

  for (const [caseType, template] of Object.entries(TEMPLATE_REGISTRY)) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const docs = JSON.parse(JSON.stringify(template.documents)) as any;
    const legal = JSON.parse(JSON.stringify(template.legalChecklist)) as any;
    const ops = JSON.parse(JSON.stringify(template.operationalChecklist)) as any;
    const comp = JSON.parse(JSON.stringify(template.complianceChecklist)) as any;
    const letters = JSON.parse(JSON.stringify(template.letterTemplates)) as any;

    await prisma.caseTemplate.upsert({
      where: { caseType: caseType as any },
      update: {
        name: template.name,
        description: template.description,
        documents: docs,
        legalChecklist: legal,
        operationalChecklist: ops,
        complianceChecklist: comp,
        letterTemplates: letters,
      },
      create: {
        caseType: caseType as any,
        name: template.name,
        description: template.description,
        documents: docs,
        legalChecklist: legal,
        operationalChecklist: ops,
        complianceChecklist: comp,
        letterTemplates: letters,
      },
    });

    console.log(`  ✓ ${template.name}`);
  }

  console.log("Done.");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
