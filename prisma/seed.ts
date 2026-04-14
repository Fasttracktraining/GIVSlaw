import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  const password = await bcrypt.hash("password123", 12);

  // ─── Users (one per role) ──────────────────────────────

  const admin = await prisma.user.upsert({
    where: { email: "admin@givslaw.com" },
    update: {},
    create: {
      email: "admin@givslaw.com",
      passwordHash: password,
      role: "ADMIN",
      firstName: "System",
      lastName: "Admin",
      phone: "+441156547274",
    },
  });
  console.log("  ✓ Admin:", admin.email);

  const director = await prisma.user.upsert({
    where: { email: "rahil@givslaw.com" },
    update: {},
    create: {
      email: "rahil@givslaw.com",
      passwordHash: password,
      role: "DIRECTOR",
      firstName: "Rahil",
      lastName: "Ghazni",
      phone: "+441156547274",
    },
  });
  console.log("  ✓ Director:", director.email);

  const advisor = await prisma.user.upsert({
    where: { email: "advisor@givslaw.com" },
    update: {},
    create: {
      email: "advisor@givslaw.com",
      passwordHash: password,
      role: "ADVISOR",
      firstName: "Sarah",
      lastName: "Ahmed",
      phone: "+447700000001",
    },
  });
  console.log("  ✓ Advisor:", advisor.email);

  const caseworker = await prisma.user.upsert({
    where: { email: "caseworker@givslaw.com" },
    update: {},
    create: {
      email: "caseworker@givslaw.com",
      passwordHash: password,
      role: "CASEWORKER",
      firstName: "James",
      lastName: "Okonkwo",
      phone: "+447700000002",
    },
  });
  console.log("  ✓ Caseworker:", caseworker.email);

  const client = await prisma.user.upsert({
    where: { email: "client@example.com" },
    update: {},
    create: {
      email: "client@example.com",
      passwordHash: password,
      role: "CLIENT",
      firstName: "Maria",
      lastName: "Santos",
      phone: "+447700000003",
    },
  });
  console.log("  ✓ Client:", client.email);

  // ─── Services ──────────────────────────────────────────

  const servicesData = [
    { slug: "individual-and-family-immigration", name: "Individual and Family Immigration", shortDescription: "Visa applications, settlement, and family reunification", category: "VISA" as const, hasFunnel: true, sortOrder: 1 },
    { slug: "working-in-the-uk", name: "Working in the UK", shortDescription: "Employment visas, work permits, and graduate routes", category: "VISA" as const, hasFunnel: true, sortOrder: 2 },
    { slug: "british-citizenship", name: "British Citizenship", shortDescription: "Naturalisation and passport applications", category: "CITIZENSHIP" as const, hasFunnel: true, sortOrder: 3 },
    { slug: "corporate-immigration", name: "Corporate Immigration", shortDescription: "Sponsor licences, compliance, employee relocation", category: "BUSINESS" as const, hasFunnel: false, sortOrder: 4 },
    { slug: "investing-in-the-uk", name: "Investing in the UK", shortDescription: "Investor and entrepreneur visa guidance", category: "BUSINESS" as const, hasFunnel: false, sortOrder: 5 },
    { slug: "business-visitor-visa", name: "Business Visitor Visa", shortDescription: "Short-term business visit applications", category: "BUSINESS" as const, hasFunnel: false, sortOrder: 6 },
    { slug: "sponsor-license-renewal", name: "Sponsor License Renewal", shortDescription: "Licence renewals and compliance support", category: "BUSINESS" as const, hasFunnel: false, sortOrder: 7 },
  ];

  for (const service of servicesData) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {},
      create: service,
    });
  }
  console.log("  ✓ Services: 7 created");

  // ─── Sample Lead ───────────────────────────────────────

  await prisma.lead.upsert({
    where: { id: "seed-lead-001" },
    update: {},
    create: {
      id: "seed-lead-001",
      firstName: "Ahmed",
      lastName: "Khan",
      email: "ahmed.khan@example.com",
      phone: "+447912345678",
      source: "WEBSITE",
      urgency: "HIGH",
      status: "NEW",
      primaryService: "spouse-visa",
      selectedServices: ["spouse-visa", "british-citizenship"],
      assignedAdvisorId: advisor.id,
    },
  });
  console.log("  ✓ Sample lead created");

  // ─── Sample Case ───────────────────────────────────────

  await prisma.case.upsert({
    where: { caseRef: "GIVS-2026-0001" },
    update: {},
    create: {
      caseRef: "GIVS-2026-0001",
      clientId: client.id,
      type: "individual-and-family-immigration",
      stage: "IN_PROGRESS",
      assignedAdvisorId: advisor.id,
      priority: "NORMAL",
      totalFee: 1500,
      amountPaid: 500,
      paymentStatus: "PARTIAL",
    },
  });
  console.log("  ✓ Sample case created");

  console.log("\nSeed complete!");
  console.log("\nTest accounts (all use password: password123):");
  console.log("  ADMIN:      admin@givslaw.com");
  console.log("  DIRECTOR:   rahil@givslaw.com");
  console.log("  ADVISOR:    advisor@givslaw.com");
  console.log("  CASEWORKER: caseworker@givslaw.com");
  console.log("  CLIENT:     client@example.com");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
