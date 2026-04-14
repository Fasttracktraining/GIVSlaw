import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import Link from "next/link";
import { UserPlus, FolderOpen, ArrowRight, Clock, AlertTriangle, RotateCcw } from "lucide-react";
import { getNextAction } from "@/lib/next-action";

export default async function CRMDashboard() {
  const session = await auth();
  const user = session?.user as Record<string, unknown>;
  const userId = user?.id as string;
  const firstName = user?.firstName as string;
  const role = user?.role as string;
  const isDirectorOrAdmin = role === "DIRECTOR" || role === "ADMIN";

  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const todayEnd = new Date(todayStart.getTime() + 24 * 60 * 60 * 1000);
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  const [
    totalLeads,
    newLeads,
    myLeads,
    convertedLeads,
    totalCases,
    dueToday,
    overdue,
    myLeadsList,
    dueTodayList,
    overdueList,
    dormantCount,
    neverContactedCount,
  ] = await Promise.all([
    prisma.lead.count(),
    prisma.lead.count({ where: { createdAt: { gte: sevenDaysAgo } } }),
    prisma.lead.count({ where: { assignedAdvisorId: userId } }),
    prisma.lead.count({ where: { status: "CONVERTED" } }),
    prisma.case.count(),
    prisma.lead.count({ where: { nextFollowUpAt: { gte: todayStart, lt: todayEnd }, status: { notIn: ["CONVERTED", "LOST"] } } }),
    prisma.lead.count({ where: { nextFollowUpAt: { lt: todayStart }, status: { notIn: ["CONVERTED", "LOST"] } } }),
    prisma.lead.findMany({
      where: { assignedAdvisorId: userId, status: { notIn: ["CONVERTED", "LOST"] } },
      orderBy: { nextFollowUpAt: { sort: "asc", nulls: "last" } },
      take: 5,
    }),
    prisma.lead.findMany({
      where: { nextFollowUpAt: { gte: todayStart, lt: todayEnd }, status: { notIn: ["CONVERTED", "LOST"] } },
      orderBy: { nextFollowUpAt: "asc" },
      take: 5,
      include: { assignedAdvisor: true },
    }),
    prisma.lead.findMany({
      where: { nextFollowUpAt: { lt: todayStart }, status: { notIn: ["CONVERTED", "LOST"] } },
      orderBy: { nextFollowUpAt: "asc" },
      take: 5,
      include: { assignedAdvisor: true },
    }),
    prisma.lead.count({ where: { updatedAt: { lt: thirtyDaysAgo }, status: { notIn: ["CONVERTED", "LOST"] } } }),
    prisma.lead.count({ where: { lastContactedAt: null, status: { notIn: ["CONVERTED", "LOST"] } } }),
  ]);

  const recentActivity = await prisma.leadActivity.findMany({
    take: 8,
    orderBy: { createdAt: "desc" },
    include: { user: true, lead: true },
  });

  // Director metrics
  let conversionsThisMonth = 0;
  let conversionRate = 0;
  let leadsPerAdvisor: { name: string; count: number }[] = [];

  if (isDirectorOrAdmin) {
    const [monthConversions, advisorCounts] = await Promise.all([
      prisma.lead.count({ where: { status: "CONVERTED", updatedAt: { gte: monthStart } } }),
      prisma.lead.groupBy({
        by: ["assignedAdvisorId"],
        _count: { id: true },
        where: { assignedAdvisorId: { not: null } },
      }),
    ]);
    conversionsThisMonth = monthConversions;
    conversionRate = totalLeads > 0 ? Math.round((convertedLeads / totalLeads) * 100) : 0;

    const advisorIds = advisorCounts.map((a) => a.assignedAdvisorId).filter(Boolean) as string[];
    if (advisorIds.length > 0) {
      const advisors = await prisma.user.findMany({ where: { id: { in: advisorIds } } });
      leadsPerAdvisor = advisorCounts.map((a) => {
        const adv = advisors.find((u) => u.id === a.assignedAdvisorId);
        return { name: adv ? `${adv.firstName} ${adv.lastName}` : "Unknown", count: a._count.id };
      }).sort((a, b) => b.count - a.count);
    }
  }

  const stats = [
    { label: "Total Leads", value: totalLeads, color: "#3B82F6" },
    { label: "New (7 days)", value: newLeads, color: "#10B981" },
    { label: "My Leads", value: myLeads, color: "#F59E0B" },
    { label: "Converted", value: convertedLeads, color: "#8B5CF6" },
  ];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D" }}>CRM Dashboard</h1>
          <p style={{ color: "#6B7280", marginTop: "0.25rem" }}>Welcome back, {firstName}.</p>
        </div>
        <Link href="/crm/leads/new" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.625rem 1.25rem", background: "#0B1B3D", color: "white", borderRadius: "0.375rem", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>
          <UserPlus style={{ width: "1rem", height: "1rem" }} /> Add Lead
        </Link>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
        {stats.map((stat) => (
          <div key={stat.label} style={{ background: "white", borderRadius: "0.75rem", padding: "1.25rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
            <p style={{ fontSize: "0.8125rem", color: "#6B7280", marginBottom: "0.25rem" }}>{stat.label}</p>
            <p style={{ fontSize: "1.75rem", fontWeight: 700, color: stat.color }}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Alert Banner */}
      {(overdue > 0 || dueToday > 0) && (
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem" }}>
          {overdue > 0 && (
            <Link href="/crm/leads/work" style={{ flex: 1, display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "0.5rem", textDecoration: "none", color: "#991B1B" }}>
              <AlertTriangle style={{ width: "1.125rem", height: "1.125rem", flexShrink: 0 }} />
              <span style={{ fontSize: "0.875rem", fontWeight: 600 }}>{overdue} overdue follow-up{overdue !== 1 ? "s" : ""} — Start Work Mode</span>
            </Link>
          )}
          {dueToday > 0 && (
            <Link href="/crm/leads/work" style={{ flex: 1, display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: "0.5rem", textDecoration: "none", color: "#B45309" }}>
              <Clock style={{ width: "1.125rem", height: "1.125rem", flexShrink: 0 }} />
              <span style={{ fontSize: "0.875rem", fontWeight: 600 }}>{dueToday} follow-up{dueToday !== 1 ? "s" : ""} due today</span>
            </Link>
          )}
        </div>
      )}

      {/* Urgent Rows: Due Today + Overdue */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
        {/* Due Today */}
        <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.25rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", borderLeft: "4px solid #F59E0B" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <Clock style={{ width: "1.125rem", height: "1.125rem", color: "#F59E0B" }} />
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#0B1B3D" }}>Due Today ({dueToday})</h2>
          </div>
          {dueTodayList.length === 0 ? (
            <p style={{ color: "#9CA3AF", fontSize: "0.8125rem" }}>No follow-ups due today.</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {dueTodayList.map((lead) => (
                <Link key={lead.id} href={`/crm/leads/${lead.id}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.5rem 0.75rem", background: "#FFFBEB", borderRadius: "0.375rem", textDecoration: "none", color: "#0B1B3D", fontSize: "0.8125rem" }}>
                  <span style={{ fontWeight: 500 }}>{lead.firstName} {lead.lastName}</span>
                  <span style={{ color: "#6B7280", fontSize: "0.75rem" }}>{lead.assignedAdvisor ? `${lead.assignedAdvisor.firstName}` : ""}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Overdue */}
        <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.25rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", borderLeft: "4px solid #EF4444" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <AlertTriangle style={{ width: "1.125rem", height: "1.125rem", color: "#EF4444" }} />
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#0B1B3D" }}>Overdue ({overdue})</h2>
          </div>
          {overdueList.length === 0 ? (
            <p style={{ color: "#9CA3AF", fontSize: "0.8125rem" }}>No overdue follow-ups.</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {overdueList.map((lead) => (
                <Link key={lead.id} href={`/crm/leads/${lead.id}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.5rem 0.75rem", background: "#FEF2F2", borderRadius: "0.375rem", textDecoration: "none", color: "#0B1B3D", fontSize: "0.8125rem" }}>
                  <span style={{ fontWeight: 500 }}>{lead.firstName} {lead.lastName}</span>
                  <span style={{ color: "#EF4444", fontSize: "0.75rem" }}>
                    {lead.nextFollowUpAt ? `Due ${lead.nextFollowUpAt.toLocaleDateString("en-GB")}` : ""}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* My Leads + Quick Links */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
        {/* My Leads */}
        <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.25rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#0B1B3D" }}>My Active Leads</h2>
            <Link href={`/crm/leads?advisor=${userId}`} style={{ fontSize: "0.8125rem", color: "#3B82F6", textDecoration: "none" }}>View all →</Link>
          </div>
          {myLeadsList.length === 0 ? (
            <p style={{ color: "#9CA3AF", fontSize: "0.8125rem" }}>No leads assigned to you.</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {myLeadsList.map((lead) => {
                const na = getNextAction(lead);
                return (
                  <Link key={lead.id} href={`/crm/leads/${lead.id}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.5rem 0.75rem", background: "#F9FAFB", borderRadius: "0.375rem", textDecoration: "none", color: "#0B1B3D", fontSize: "0.8125rem" }}>
                    <span style={{ fontWeight: 500 }}>{lead.firstName} {lead.lastName}</span>
                    <span style={{ padding: "0.125rem 0.5rem", borderRadius: "9999px", fontSize: "0.6875rem", fontWeight: 600, background: na.bg, color: na.color }}>{na.label}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Link href="/crm/leads" style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "white", borderRadius: "0.75rem", padding: "1.25rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", textDecoration: "none", color: "#0B1B3D" }}>
            <UserPlus style={{ width: "1.25rem", height: "1.25rem", color: "#3B82F6" }} />
            <div>
              <p style={{ fontWeight: 600, fontSize: "0.875rem" }}>All Leads</p>
              <p style={{ fontSize: "0.75rem", color: "#6B7280" }}>{totalLeads} total</p>
            </div>
          </Link>
          <Link href="/crm/cases" style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "white", borderRadius: "0.75rem", padding: "1.25rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", textDecoration: "none", color: "#0B1B3D" }}>
            <FolderOpen style={{ width: "1.25rem", height: "1.25rem", color: "#10B981" }} />
            <div>
              <p style={{ fontWeight: 600, fontSize: "0.875rem" }}>All Cases</p>
              <p style={{ fontSize: "0.75rem", color: "#6B7280" }}>{totalCases} total</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Activity Feed */}
      <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.25rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "1rem" }}>Recent Activity</h2>
        {recentActivity.length === 0 ? (
          <p style={{ color: "#9CA3AF", fontSize: "0.8125rem" }}>No activity yet. Start working leads to see activity here.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {recentActivity.map((a) => (
              <div key={a.id} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.5rem 0", borderBottom: "1px solid #F3F4F6" }}>
                <ActivityIcon action={a.action} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "0.8125rem", color: "#111827" }}>
                    <span style={{ fontWeight: 600 }}>{a.user.firstName}</span>{" "}
                    {a.description}
                    {" — "}
                    <Link href={`/crm/leads/${a.leadId}`} style={{ color: "#3B82F6", textDecoration: "none" }}>
                      {a.lead.firstName} {a.lead.lastName}
                    </Link>
                  </p>
                </div>
                <span style={{ fontSize: "0.6875rem", color: "#9CA3AF", flexShrink: 0 }}>
                  {formatTimeAgo(a.createdAt)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Reactivation Opportunities */}
      {(dormantCount > 0 || neverContactedCount > 0) && (
        <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.25rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", marginBottom: "1.5rem", borderLeft: "4px solid #8B5CF6" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <RotateCcw style={{ width: "1.125rem", height: "1.125rem", color: "#8B5CF6" }} />
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#0B1B3D" }}>Reactivation Opportunities</h2>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            {dormantCount > 0 && (
              <Link href="/crm/leads?filter=dormant" style={{ flex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem", background: "#F5F3FF", borderRadius: "0.375rem", textDecoration: "none", color: "#5B21B6" }}>
                <span style={{ fontSize: "0.8125rem", fontWeight: 500 }}>Dormant (30+ days)</span>
                <span style={{ fontWeight: 700, fontSize: "1.125rem" }}>{dormantCount}</span>
              </Link>
            )}
            {neverContactedCount > 0 && (
              <Link href="/crm/leads?filter=never_contacted" style={{ flex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem", background: "#FEF3C7", borderRadius: "0.375rem", textDecoration: "none", color: "#B45309" }}>
                <span style={{ fontSize: "0.8125rem", fontWeight: 500 }}>Never Contacted</span>
                <span style={{ fontWeight: 700, fontSize: "1.125rem" }}>{neverContactedCount}</span>
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Director Metrics */}
      {isDirectorOrAdmin && (
        <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.25rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <h2 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid #E5E7EB" }}>Performance Metrics</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }}>
            <div>
              <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase", marginBottom: "0.25rem" }}>Conversions This Month</p>
              <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "#8B5CF6" }}>{conversionsThisMonth}</p>
            </div>
            <div>
              <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase", marginBottom: "0.25rem" }}>Conversion Rate</p>
              <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "#10B981" }}>{conversionRate}%</p>
            </div>
            <div>
              <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase", marginBottom: "0.25rem" }}>Leads Per Advisor</p>
              {leadsPerAdvisor.length === 0 ? (
                <p style={{ fontSize: "0.875rem", color: "#9CA3AF" }}>No data</p>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  {leadsPerAdvisor.map((a) => (
                    <div key={a.name} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8125rem" }}>
                      <span style={{ color: "#374151" }}>{a.name}</span>
                      <span style={{ fontWeight: 600, color: "#0B1B3D" }}>{a.count}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ActivityIcon({ action }: { action: string }) {
  const icons: Record<string, { bg: string; emoji: string }> = {
    call_logged: { bg: "#DBEAFE", emoji: "📞" },
    status_changed: { bg: "#FEF3C7", emoji: "🔄" },
    followup_set: { bg: "#D1FAE5", emoji: "📅" },
    lead_assigned: { bg: "#EDE9FE", emoji: "👤" },
    lead_converted: { bg: "#F0FDF4", emoji: "🎉" },
  };
  const i = icons[action] || { bg: "#F3F4F6", emoji: "📋" };
  return (
    <span style={{ width: "2rem", height: "2rem", borderRadius: "50%", background: i.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.875rem", flexShrink: 0 }}>
      {i.emoji}
    </span>
  );
}

function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  const diffHrs = Math.floor(diffMins / 60);
  if (diffHrs < 24) return `${diffHrs}h ago`;
  const diffDays = Math.floor(diffHrs / 24);
  if (diffDays === 1) return "yesterday";
  return `${diffDays}d ago`;
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, { bg: string; text: string }> = {
    NEW: { bg: "#DBEAFE", text: "#1D4ED8" },
    CONTACTED: { bg: "#FEF3C7", text: "#B45309" },
    QUALIFIED: { bg: "#D1FAE5", text: "#065F46" },
    CONVERTED: { bg: "#EDE9FE", text: "#5B21B6" },
    LOST: { bg: "#FEE2E2", text: "#991B1B" },
  };
  const c = colors[status] || { bg: "#F3F4F6", text: "#374151" };
  return (
    <span style={{ display: "inline-block", padding: "0.125rem 0.5rem", borderRadius: "9999px", fontSize: "0.6875rem", fontWeight: 600, background: c.bg, color: c.text }}>
      {status}
    </span>
  );
}
