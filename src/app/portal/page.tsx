import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import Link from "next/link";
import { FileText, MessageCircle, Calendar } from "lucide-react";

const STAGES = ["ENQUIRY", "CONSULTATION", "ONBOARDING", "IN_PROGRESS", "SUBMITTED", "AWAITING_DECISION", "APPROVED"] as const;
const STAGE_LABELS: Record<string, string> = {
  ENQUIRY: "Enquiry",
  CONSULTATION: "Consultation",
  ONBOARDING: "Onboarding",
  IN_PROGRESS: "In Progress",
  SUBMITTED: "Submitted",
  AWAITING_DECISION: "Awaiting Decision",
  APPROVED: "Approved",
  REFUSED: "Refused",
  APPEAL: "Appeal",
  CLOSED: "Closed",
};

const NEXT_STEPS: Record<string, string> = {
  ENQUIRY: "Your advisor will contact you soon to discuss your case.",
  CONSULTATION: "A consultation has been scheduled. Please prepare any relevant documents.",
  ONBOARDING: "Please upload the required documents for your application.",
  IN_PROGRESS: "Your advisor is preparing your application. You may be asked for additional documents.",
  SUBMITTED: "Your application has been submitted. We are monitoring for updates.",
  AWAITING_DECISION: "The Home Office is reviewing your application. We will notify you when we have an update.",
  APPROVED: "Congratulations! Your application has been approved.",
  REFUSED: "Unfortunately your application was refused. Your advisor will discuss next steps.",
  APPEAL: "An appeal is in progress. Your advisor will keep you updated.",
  CLOSED: "This case has been closed.",
};

export default async function PortalDashboard() {
  const session = await auth();
  const user = session?.user as Record<string, unknown>;
  const userId = user?.id as string;
  const firstName = user?.firstName as string;

  const activeCase = await prisma.case.findFirst({
    where: { clientId: userId },
    orderBy: { createdAt: "desc" },
    include: { assignedAdvisor: true },
  });

  const [docCount, unreadMessages, upcomingConsultation] = await Promise.all([
    activeCase ? prisma.document.count({ where: { caseId: activeCase.id } }) : 0,
    activeCase ? prisma.message.count({ where: { caseId: activeCase.id, senderId: { not: userId } } }) : 0,
    activeCase ? prisma.consultation.findFirst({
      where: { caseId: activeCase.id, status: { in: ["PENDING", "CONFIRMED"] }, scheduledAt: { gte: new Date() } },
      orderBy: { scheduledAt: "asc" },
    }) : null,
  ]);

  return (
    <div>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.25rem" }}>
        Welcome, {firstName}
      </h1>
      <p style={{ color: "#6B7280", fontSize: "0.875rem", marginBottom: "2rem" }}>
        Here&apos;s the latest on your immigration case.
      </p>

      {!activeCase ? (
        <div style={{ background: "white", borderRadius: "0.75rem", padding: "3rem", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <p style={{ fontSize: "1.125rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "0.5rem" }}>No active case yet</p>
          <p style={{ color: "#6B7280" }}>Your advisor will create a case for you once your consultation is complete.</p>
        </div>
      ) : (
        <>
          {/* Case Status Card */}
          <div style={{ background: "white", borderRadius: "0.75rem", padding: "2rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>Case Reference</p>
                <p style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0B1B3D" }}>{activeCase.caseRef}</p>
                <p style={{ fontSize: "0.875rem", color: "#6B7280", marginTop: "0.25rem" }}>{activeCase.type.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase())}</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>Your Advisor</p>
                <p style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D" }}>{activeCase.assignedAdvisor.firstName} {activeCase.assignedAdvisor.lastName}</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                {STAGES.map((stage) => {
                  const currentIdx = STAGES.indexOf(activeCase.stage as typeof STAGES[number]);
                  const stageIdx = STAGES.indexOf(stage);
                  const isActive = stageIdx <= currentIdx;
                  const isCurrent = stage === activeCase.stage;
                  return (
                    <div key={stage} style={{ flex: 1, textAlign: "center" }}>
                      <p style={{ fontSize: "0.5625rem", fontWeight: isCurrent ? 700 : 500, color: isActive ? "#0B1B3D" : "#9CA3AF", textTransform: "uppercase" }}>
                        {STAGE_LABELS[stage]}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div style={{ display: "flex", gap: "0.25rem" }}>
                {STAGES.map((stage) => {
                  const currentIdx = STAGES.indexOf(activeCase.stage as typeof STAGES[number]);
                  const stageIdx = STAGES.indexOf(stage);
                  const isActive = stageIdx <= currentIdx;
                  const isCurrent = stage === activeCase.stage;
                  return (
                    <div
                      key={stage}
                      style={{
                        flex: 1,
                        height: "0.5rem",
                        borderRadius: "9999px",
                        background: isCurrent ? "#C5963A" : isActive ? "#0B1B3D" : "#E5E7EB",
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Current Status */}
            <div style={{ padding: "1rem 1.25rem", background: "#F9FAFB", borderRadius: "0.5rem", borderLeft: "4px solid #C5963A" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#C5963A", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.375rem" }}>Current Status</p>
              <p style={{ fontSize: "1.125rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.5rem" }}>
                {STAGE_LABELS[activeCase.stage] || activeCase.stage}
              </p>
              <p style={{ fontSize: "0.875rem", color: "#374151" }}>
                {NEXT_STEPS[activeCase.stage] || "Your advisor will provide an update soon."}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
            <Link href="/portal/documents" style={{ display: "flex", alignItems: "center", gap: "1rem", background: "white", borderRadius: "0.75rem", padding: "1.25rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", textDecoration: "none", color: "#0B1B3D" }}>
              <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.5rem", background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FileText style={{ width: "1.25rem", height: "1.25rem", color: "#3B82F6" }} />
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: "0.875rem" }}>Documents</p>
                <p style={{ fontSize: "0.75rem", color: "#6B7280" }}>{docCount} uploaded</p>
              </div>
            </Link>

            <Link href="/portal/messages" style={{ display: "flex", alignItems: "center", gap: "1rem", background: "white", borderRadius: "0.75rem", padding: "1.25rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", textDecoration: "none", color: "#0B1B3D" }}>
              <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.5rem", background: "#F0FDF4", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <MessageCircle style={{ width: "1.25rem", height: "1.25rem", color: "#10B981" }} />
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: "0.875rem" }}>Messages</p>
                <p style={{ fontSize: "0.75rem", color: "#6B7280" }}>Contact your advisor</p>
              </div>
            </Link>

            <Link href="/portal/consultations" style={{ display: "flex", alignItems: "center", gap: "1rem", background: "white", borderRadius: "0.75rem", padding: "1.25rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", textDecoration: "none", color: "#0B1B3D" }}>
              <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.5rem", background: "#FEF3C7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Calendar style={{ width: "1.25rem", height: "1.25rem", color: "#F59E0B" }} />
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: "0.875rem" }}>Consultations</p>
                <p style={{ fontSize: "0.75rem", color: "#6B7280" }}>
                  {upcomingConsultation ? `Next: ${upcomingConsultation.scheduledAt.toLocaleDateString("en-GB")}` : "None scheduled"}
                </p>
              </div>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
