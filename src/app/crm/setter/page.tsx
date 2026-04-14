import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import SetterPriorityQueue from "./SetterPriorityQueue";
import { ToastProvider } from "@/components/shared/Toast";

export default async function SetterDashboardPage() {
  const session = await auth();
  const user = session?.user as any;

  if (!user || !["ADMIN", "DIRECTOR", "ADVISOR"].includes(user.role)) {
    redirect("/login");
  }

  // Fetch NEW leads for the priority queue
  const leads = await prisma.lead.findMany({
    where: {
      status: "NEW",
    },
    orderBy: [
      { urgency: "desc" },
      { createdAt: "desc" },
    ],
    include: {
      assignedAdvisor: true,
    },
  });

  const serializedLeads = leads.map((l) => ({
    id: l.id,
    firstName: l.firstName,
    lastName: l.lastName,
    email: l.email,
    phone: l.phone,
    urgency: l.urgency,
    createdAt: l.createdAt.toISOString(),
    primaryService: l.primaryService,
  }));

  return (
    <ToastProvider>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-navy">Setter Priority Queue</h1>
          <p className="text-gray-500">60-second target response time for all new leads.</p>
        </div>

        <SetterPriorityQueue initialLeads={serializedLeads} />
      </div>
    </ToastProvider>
  );
}
