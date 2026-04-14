import { prisma } from "@/lib/db";
import Link from "next/link";
import { Plus } from "lucide-react";
import type { LeadStatus } from "@prisma/client";
import { getNextAction } from "@/lib/next-action";
import { ToastProvider } from "@/components/shared/Toast";
import AdvisorFilter from "./AdvisorFilter";
import LeadsTable from "./LeadsTable";

interface Props {
  searchParams: Promise<{ status?: string; advisor?: string; filter?: string }>;
}

export default async function LeadsListPage({ searchParams }: Props) {
  const params = await searchParams;
  const statusFilter = params.status as LeadStatus | undefined;
  const advisorFilter = params.advisor;
  const specialFilter = params.filter; // "dormant" or "never_contacted"

  const where: Record<string, unknown> = {};
  if (statusFilter && ["NEW", "CONTACTED", "QUALIFIED", "CONVERTED", "LOST"].includes(statusFilter)) {
    where.status = statusFilter;
  }
  if (advisorFilter) {
    where.assignedAdvisorId = advisorFilter;
  }

  // Special filters
  if (specialFilter === "dormant") {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    where.updatedAt = { lt: thirtyDaysAgo };
    where.status = { notIn: ["CONVERTED", "LOST"] };
  } else if (specialFilter === "never_contacted") {
    where.lastContactedAt = null;
    where.status = { notIn: ["CONVERTED", "LOST"] };
  }

  const [leads, staffUsers, statusCounts] = await Promise.all([
    prisma.lead.findMany({
      where,
      orderBy: { createdAt: "desc" },
      include: { assignedAdvisor: true },
    }),
    prisma.user.findMany({
      where: { role: { in: ["ADMIN", "DIRECTOR", "ADVISOR", "CASEWORKER"] } },
      orderBy: { firstName: "asc" },
    }),
    prisma.lead.groupBy({
      by: ["status"],
      _count: { status: true },
    }),
  ]);

  const countMap: Record<string, number> = {};
  statusCounts.forEach((s) => { countMap[s.status] = s._count.status; });
  const totalCount = Object.values(countMap).reduce((a, b) => a + b, 0);

  const statuses = ["NEW", "CONTACTED", "QUALIFIED", "CONVERTED", "LOST"];

  // Serialize leads for client component
  const serializedLeads = leads.map((lead) => {
    const na = getNextAction(lead);
    return {
      id: lead.id,
      firstName: lead.firstName,
      lastName: lead.lastName,
      email: lead.email,
      phone: lead.phone,
      primaryService: lead.primaryService,
      source: lead.source,
      status: lead.status,
      createdAt: lead.createdAt.toISOString(),
      nextAction: { label: na.label, color: na.color, bg: na.bg },
      advisorName: lead.assignedAdvisor ? `${lead.assignedAdvisor.firstName} ${lead.assignedAdvisor.lastName}` : null,
    };
  });

  const filterLabel = specialFilter === "dormant" ? "Dormant (30+ days)" : specialFilter === "never_contacted" ? "Never Contacted" : null;

  return (
    <ToastProvider>
      <div>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D" }}>
              Leads {filterLabel && <span style={{ fontSize: "1rem", color: "#6B7280", fontWeight: 400 }}>— {filterLabel}</span>}
            </h1>
            <p style={{ color: "#6B7280", fontSize: "0.875rem", marginTop: "0.25rem" }}>{leads.length} leads found</p>
          </div>
          <Link href="/crm/leads/new" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.625rem 1.25rem", background: "#0B1B3D", color: "white", borderRadius: "0.375rem", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>
            <Plus style={{ width: "1rem", height: "1rem" }} /> Add Lead
          </Link>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <FilterLink href="/crm/leads" label={`All (${totalCount})`} active={!statusFilter && !specialFilter} />
          {statuses.map((s) => (
            <FilterLink
              key={s}
              href={`/crm/leads?status=${s}${advisorFilter ? `&advisor=${advisorFilter}` : ""}`}
              label={`${s} (${countMap[s] || 0})`}
              active={statusFilter === s}
            />
          ))}
          <span style={{ color: "#D1D5DB" }}>|</span>
          <FilterLink href="/crm/leads?filter=dormant" label="Dormant" active={specialFilter === "dormant"} />
          <FilterLink href="/crm/leads?filter=never_contacted" label="Never Contacted" active={specialFilter === "never_contacted"} />

          <div style={{ marginLeft: "auto" }}>
            <AdvisorFilter
              currentAdvisor={advisorFilter || ""}
              currentStatus={statusFilter || ""}
              staffUsers={staffUsers}
            />
          </div>
        </div>

        {/* Table */}
        <LeadsTable leads={serializedLeads} staffUsers={staffUsers} />
      </div>
    </ToastProvider>
  );
}

function FilterLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      style={{
        padding: "0.3125rem 0.75rem",
        borderRadius: "9999px",
        fontSize: "0.75rem",
        fontWeight: 500,
        textDecoration: "none",
        background: active ? "#0B1B3D" : "#F3F4F6",
        color: active ? "white" : "#374151",
      }}
    >
      {label}
    </Link>
  );
}
