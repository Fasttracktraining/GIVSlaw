import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { getNextAction } from "@/lib/next-action";
import { ToastProvider } from "@/components/shared/Toast";
import WorkModeClient from "./WorkModeClient";

export default async function WorkModePage() {
  const session = await auth();
  const user = session?.user as Record<string, unknown>;
  const userId = user?.id as string;

  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  // Priority order: overdue → due today → new leads
  const [overdueLeads, dueTodayLeads, newLeads] = await Promise.all([
    prisma.lead.findMany({
      where: { nextFollowUpAt: { lt: todayStart }, status: { notIn: ["CONVERTED", "LOST"] } },
      orderBy: { nextFollowUpAt: "asc" },
      include: { assignedAdvisor: true, callOutcomes: { orderBy: { createdAt: "desc" }, take: 3, include: { calledBy: true } } },
    }),
    prisma.lead.findMany({
      where: { nextFollowUpAt: { gte: todayStart, lt: new Date(todayStart.getTime() + 86400000) }, status: { notIn: ["CONVERTED", "LOST"] } },
      orderBy: { nextFollowUpAt: "asc" },
      include: { assignedAdvisor: true, callOutcomes: { orderBy: { createdAt: "desc" }, take: 3, include: { calledBy: true } } },
    }),
    prisma.lead.findMany({
      where: { status: "NEW", nextFollowUpAt: null },
      orderBy: { createdAt: "desc" },
      include: { assignedAdvisor: true, callOutcomes: { orderBy: { createdAt: "desc" }, take: 3, include: { calledBy: true } } },
    }),
  ]);

  const allLeads = [...overdueLeads, ...dueTodayLeads, ...newLeads];

  const serialized = allLeads.map((l) => {
    const na = getNextAction(l);
    return {
      id: l.id,
      firstName: l.firstName,
      lastName: l.lastName,
      email: l.email,
      phone: l.phone,
      primaryService: l.primaryService,
      source: l.source,
      urgency: l.urgency,
      status: l.status,
      temperature: l.temperature,
      nextFollowUpAt: l.nextFollowUpAt?.toISOString() || null,
      lastContactedAt: l.lastContactedAt?.toISOString() || null,
      nextAction: { label: na.label, color: na.color, bg: na.bg },
      advisorName: l.assignedAdvisor ? `${l.assignedAdvisor.firstName} ${l.assignedAdvisor.lastName}` : null,
      recentCalls: l.callOutcomes.map((co) => ({
        outcome: co.outcome,
        date: co.createdAt.toISOString(),
        by: `${co.calledBy.firstName}`,
      })),
    };
  });

  return (
    <ToastProvider>
      <WorkModeClient leads={serialized} />
    </ToastProvider>
  );
}
