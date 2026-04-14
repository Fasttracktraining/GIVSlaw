import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import LeadStatusActions from "./LeadStatusActions";
import LeadNotes from "./LeadNotes";
import ConvertToCase from "./ConvertToCase";
import FollowUpPicker from "./FollowUpPicker";
import CallOutcomeActions from "./CallOutcomeActions";
import LeadDetailClient from "./LeadDetailClient";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function LeadDetailPage({ params }: Props) {
  const { id } = await params;

  const lead = await prisma.lead.findUnique({
    where: { id },
    include: {
      assignedAdvisor: true,
      convertedToCase: true,
      callOutcomes: {
        orderBy: { createdAt: "desc" },
        take: 10,
        include: { calledBy: true },
      },
    },
  });

  if (!lead) notFound();

  const staffUsers = await prisma.user.findMany({
    where: { role: { in: ["ADMIN", "DIRECTOR", "ADVISOR", "CASEWORKER"] } },
    orderBy: { firstName: "asc" },
  });

  const now = new Date();
  const isOverdue = lead.nextFollowUpAt && lead.nextFollowUpAt < now && lead.status !== "CONVERTED" && lead.status !== "LOST";

  return (
    <LeadDetailClient><div>
      <Link href="/crm/leads" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#6B7280", textDecoration: "none", fontSize: "0.875rem", marginBottom: "1rem" }}>
        <ArrowLeft style={{ width: "1rem", height: "1rem" }} /> Back to Leads
      </Link>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D" }}>
            {lead.firstName} {lead.lastName}
          </h1>
          <p style={{ color: "#6B7280", fontSize: "0.875rem", marginTop: "0.25rem" }}>
            Lead created {lead.createdAt.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {isOverdue && (
            <span style={{ padding: "0.375rem 0.75rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 600, background: "#FEE2E2", color: "#991B1B" }}>
              OVERDUE
            </span>
          )}
          <StatusBadge status={lead.status} />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.5rem" }}>
        {/* Left Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Lead Info */}
          <Section title="Lead Information">
            <InfoGrid>
              <InfoItem label="Email" value={lead.email} />
              <InfoItem label="Phone" value={lead.phone || "—"} />
              <InfoItem label="Primary Service" value={lead.primaryService || "—"} />
              <InfoItem label="Source" value={lead.source} />
              <InfoItem label="Urgency" value={lead.urgency} />
              <InfoItem label="Funnel" value={lead.funnelSlug || "—"} />
              <InfoItem label="Last Contacted" value={lead.lastContactedAt ? lead.lastContactedAt.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }) : "Never"} />
              <InfoItem label="Next Follow-Up" value={lead.nextFollowUpAt ? lead.nextFollowUpAt.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "Not set"} />
            </InfoGrid>
          </Section>

          {/* Call Outcomes */}
          <Section title="Call Outcomes">
            <CallOutcomeActions leadId={lead.id} />
            {lead.callOutcomes.length > 0 && (
              <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {lead.callOutcomes.map((co) => (
                  <div key={co.id} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.625rem 0.75rem", background: "#F9FAFB", borderRadius: "0.375rem", borderLeft: `3px solid ${outcomeColor(co.outcome)}` }}>
                    <Phone style={{ width: "0.875rem", height: "0.875rem", color: "#6B7280", flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: outcomeColor(co.outcome) }}>{co.outcome.replace(/_/g, " ")}</span>
                        <span style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>{co.createdAt.toLocaleDateString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}</span>
                      </div>
                      {co.note && <p style={{ fontSize: "0.8125rem", color: "#374151", marginTop: "0.125rem" }}>{co.note}</p>}
                      <p style={{ fontSize: "0.75rem", color: "#9CA3AF", marginTop: "0.125rem" }}>by {co.calledBy.firstName} {co.calledBy.lastName}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Section>

          {/* Notes */}
          <Section title="Notes">
            <LeadNotes leadId={lead.id} notes={lead.notes} />
          </Section>
        </div>

        {/* Right Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Status & Assignment */}
          <Section title="Status & Assignment">
            <LeadStatusActions
              leadId={lead.id}
              currentStatus={lead.status}
              currentAdvisorId={lead.assignedAdvisorId}
              staffUsers={staffUsers.map((u) => ({ id: u.id, name: `${u.firstName} ${u.lastName}`, role: u.role }))}
            />
          </Section>

          {/* Follow-Up */}
          <Section title="Follow-Up">
            <FollowUpPicker
              leadId={lead.id}
              currentDate={lead.nextFollowUpAt ? lead.nextFollowUpAt.toISOString().split("T")[0] : ""}
              isOverdue={!!isOverdue}
            />
          </Section>

          {/* Convert to Case — only when QUALIFIED */}
          {lead.status === "QUALIFIED" && (
            <Section title="Convert to Case">
              <ConvertToCase leadId={lead.id} />
            </Section>
          )}

          {/* Show message if not qualified */}
          {lead.status !== "QUALIFIED" && lead.status !== "CONVERTED" && lead.status !== "LOST" && (
            <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.25rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
              <p style={{ fontSize: "0.8125rem", color: "#9CA3AF" }}>
                Mark this lead as <strong>QUALIFIED</strong> to enable conversion to a case.
              </p>
            </div>
          )}

          {/* Converted Case Link */}
          {lead.convertedToCase && (
            <Section title="Converted Case">
              <Link href={`/crm/cases/${lead.convertedToCase.id}`} style={{ display: "block", padding: "0.75rem", background: "#EDE9FE", borderRadius: "0.375rem", textDecoration: "none", color: "#5B21B6", fontWeight: 600, fontSize: "0.875rem" }}>
                {lead.convertedToCase.caseRef} — {lead.convertedToCase.stage}
              </Link>
            </Section>
          )}
        </div>
      </div>
    </div></LeadDetailClient>
  );
}

function outcomeColor(outcome: string): string {
  const map: Record<string, string> = {
    NO_ANSWER: "#6B7280",
    INTERESTED: "#10B981",
    NOT_INTERESTED: "#EF4444",
    CALLBACK_LATER: "#F59E0B",
    WRONG_NUMBER: "#991B1B",
  };
  return map[outcome] || "#6B7280";
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
      <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid #E5E7EB" }}>{title}</h2>
      {children}
    </div>
  );
}

function InfoGrid({ children }: { children: React.ReactNode }) {
  return <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>{children}</div>;
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase", marginBottom: "0.25rem" }}>{label}</p>
      <p style={{ fontSize: "0.875rem", color: "#111827" }}>{value}</p>
    </div>
  );
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
    <span style={{ display: "inline-block", padding: "0.375rem 1rem", borderRadius: "9999px", fontSize: "0.875rem", fontWeight: 600, background: c.bg, color: c.text }}>
      {status}
    </span>
  );
}
