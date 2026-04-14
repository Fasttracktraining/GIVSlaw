import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import Link from "next/link";
import { Plus, FileText, CheckCircle, AlertCircle, Clock } from "lucide-react";

const statusConfig: Record<string, { icon: typeof Clock; color: string; bg: string; label: string }> = {
  UPLOADED: { icon: Clock, color: "#F59E0B", bg: "#FEF3C7", label: "Pending Review" },
  UNDER_REVIEW: { icon: Clock, color: "#3B82F6", bg: "#DBEAFE", label: "Under Review" },
  APPROVED: { icon: CheckCircle, color: "#10B981", bg: "#D1FAE5", label: "Approved" },
  NEEDS_CORRECTION: { icon: AlertCircle, color: "#EF4444", bg: "#FEE2E2", label: "Needs Correction" },
  MISSING: { icon: AlertCircle, color: "#6B7280", bg: "#F3F4F6", label: "Missing" },
  INVALID: { icon: AlertCircle, color: "#991B1B", bg: "#FEE2E2", label: "Invalid" },
};

export default async function PortalDocumentsPage() {
  const session = await auth();
  const user = session?.user as Record<string, unknown>;

  const activeCase = await prisma.case.findFirst({
    where: { clientId: user.id as string },
    orderBy: { createdAt: "desc" },
  });

  if (!activeCase) {
    return (
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1rem" }}>Documents</h1>
        <div style={{ background: "white", borderRadius: "0.75rem", padding: "3rem", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <p style={{ color: "#6B7280" }}>No active case. Documents will appear here once your case is created.</p>
        </div>
      </div>
    );
  }

  const documents = await prisma.document.findMany({
    where: { caseId: activeCase.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D" }}>Documents</h1>
          <p style={{ color: "#6B7280", fontSize: "0.875rem", marginTop: "0.25rem" }}>Upload and track your documents for {activeCase.caseRef}</p>
        </div>
        <Link href="/portal/documents/upload" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.625rem 1.25rem", background: "#0B1B3D", color: "white", borderRadius: "0.375rem", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>
          <Plus style={{ width: "1rem", height: "1rem" }} /> Upload Document
        </Link>
      </div>

      {documents.length === 0 ? (
        <div style={{ background: "white", borderRadius: "0.75rem", padding: "3rem", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <FileText style={{ width: "3rem", height: "3rem", color: "#D1D5DB", margin: "0 auto 1rem" }} />
          <p style={{ fontWeight: 600, color: "#0B1B3D", marginBottom: "0.5rem" }}>No documents yet</p>
          <p style={{ color: "#6B7280", fontSize: "0.875rem", marginBottom: "1rem" }}>Upload your first document to get started.</p>
          <Link href="/portal/documents/upload" style={{ padding: "0.625rem 1.25rem", background: "#0B1B3D", color: "white", borderRadius: "0.375rem", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>Upload Document</Link>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {documents.map((doc) => {
            const sc = statusConfig[doc.status] || statusConfig.UPLOADED;
            const Icon = sc.icon;
            return (
              <div key={doc.id} style={{ background: "white", borderRadius: "0.75rem", padding: "1.25rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.5rem", background: "#F3F4F6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <FileText style={{ width: "1.25rem", height: "1.25rem", color: "#6B7280" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 600, color: "#0B1B3D", fontSize: "0.875rem" }}>{doc.name}</p>
                  <p style={{ fontSize: "0.75rem", color: "#6B7280", marginTop: "0.125rem" }}>
                    {doc.category.replace(/_/g, " ")} · Uploaded {doc.createdAt.toLocaleDateString("en-GB")}
                  </p>
                  {doc.feedback && (
                    <p style={{ fontSize: "0.8125rem", color: "#DC2626", marginTop: "0.375rem", padding: "0.375rem 0.625rem", background: "#FEF2F2", borderRadius: "0.25rem" }}>
                      {doc.feedback}
                    </p>
                  )}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.375rem 0.75rem", background: sc.bg, borderRadius: "9999px" }}>
                  <Icon style={{ width: "0.875rem", height: "0.875rem", color: sc.color }} />
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: sc.color }}>{sc.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
