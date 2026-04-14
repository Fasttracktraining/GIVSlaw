import { prisma } from "@/lib/db";
import Link from "next/link";

export default async function CasesListPage() {
  const cases = await prisma.case.findMany({
    orderBy: { createdAt: "desc" },
    include: { client: true, assignedAdvisor: true },
  });

  return (
    <div>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.5rem" }}>Cases</h1>
      <p style={{ color: "#6B7280", fontSize: "0.875rem", marginBottom: "1.5rem" }}>{cases.length} cases</p>

      <div style={{ background: "white", borderRadius: "0.75rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", overflow: "hidden" }}>
        {cases.length === 0 ? (
          <div style={{ padding: "3rem", textAlign: "center", color: "#9CA3AF" }}>No cases yet. Convert a lead to create a case.</div>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #E5E7EB", background: "#F9FAFB" }}>
                {["Case Ref", "Client", "Type", "Stage", "Priority", "Advisor", "Created"].map((h) => (
                  <th key={h} style={{ textAlign: "left", padding: "0.75rem 1rem", fontSize: "0.75rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cases.map((c) => (
                <tr key={c.id} style={{ borderBottom: "1px solid #F3F4F6" }}>
                  <td style={{ padding: "0.75rem 1rem" }}>
                    <Link href={`/crm/cases/${c.id}`} style={{ color: "#0B1B3D", fontWeight: 600, textDecoration: "none" }}>{c.caseRef}</Link>
                  </td>
                  <td style={{ padding: "0.75rem 1rem", fontSize: "0.875rem", color: "#374151" }}>{c.client.firstName} {c.client.lastName}</td>
                  <td style={{ padding: "0.75rem 1rem", fontSize: "0.875rem", color: "#6B7280" }}>{c.type}</td>
                  <td style={{ padding: "0.75rem 1rem" }}>
                    <span style={{ padding: "0.25rem 0.75rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 600, background: "#DBEAFE", color: "#1D4ED8" }}>{c.stage}</span>
                  </td>
                  <td style={{ padding: "0.75rem 1rem", fontSize: "0.875rem", color: "#6B7280" }}>{c.priority}</td>
                  <td style={{ padding: "0.75rem 1rem", fontSize: "0.875rem", color: "#6B7280" }}>{c.assignedAdvisor.firstName} {c.assignedAdvisor.lastName}</td>
                  <td style={{ padding: "0.75rem 1rem", fontSize: "0.875rem", color: "#6B7280" }}>{c.createdAt.toLocaleDateString("en-GB")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
