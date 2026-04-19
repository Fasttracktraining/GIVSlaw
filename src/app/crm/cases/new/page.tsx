import { prisma } from "@/lib/db";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createCase } from "./actions";

const CASE_TYPES = [
  { value: "SPOUSE_VISA_ENTRY_CLEARANCE", label: "Spouse Visa — Entry Clearance (Appendix FM)" },
  { value: "SPOUSE_VISA_EXTENSION_ILR", label: "Spouse Visa — Extension / ILR (5 Year Route)" },
  { value: "SKILLED_WORKER_ENTRY", label: "Skilled Worker — Entry Clearance" },
  { value: "SKILLED_WORKER_EXTENSION", label: "Skilled Worker — Extension" },
  { value: "ILR_10YR_LONG_RESIDENCE", label: "ILR — 10 Year Long Residence" },
  { value: "BRITISH_CITIZENSHIP_NATURALISATION", label: "British Citizenship — Naturalisation" },
];

export default async function NewCasePage() {
  const clients = await prisma.user.findMany({
    where: { role: "CLIENT", isActive: true },
    orderBy: { firstName: "asc" },
    select: { id: true, firstName: true, lastName: true, email: true },
  });

  const advisors = await prisma.user.findMany({
    where: { role: { in: ["ADVISOR", "CASEWORKER", "DIRECTOR"] }, isActive: true },
    orderBy: { firstName: "asc" },
    select: { id: true, firstName: true, lastName: true },
  });

  const fieldStyle = {
    width: "100%",
    padding: "0.625rem 0.75rem",
    border: "1px solid #D1D5DB",
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
    background: "white",
  };

  const labelStyle = {
    display: "block" as const,
    fontSize: "0.8125rem",
    fontWeight: 600 as const,
    color: "#374151",
    marginBottom: "0.375rem",
  };

  return (
    <div>
      <Link href="/crm/cases" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#6B7280", textDecoration: "none", fontSize: "0.875rem", marginBottom: "1rem" }}>
        <ArrowLeft style={{ width: "1rem", height: "1rem" }} /> Back to Cases
      </Link>

      <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.5rem" }}>New Case</h1>
      <p style={{ color: "#6B7280", fontSize: "0.875rem", marginBottom: "2rem" }}>
        Create a new case and automatically generate documents and checklists.
      </p>

      <div style={{ background: "white", borderRadius: "0.75rem", padding: "2rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", maxWidth: "640px" }}>
        <form action={createCase}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Client */}
            <div>
              <label style={labelStyle}>Client *</label>
              <select name="clientId" required style={fieldStyle}>
                <option value="" disabled selected>Select client...</option>
                {clients.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.firstName} {c.lastName} ({c.email})
                  </option>
                ))}
              </select>
            </div>

            {/* Case Type */}
            <div>
              <label style={labelStyle}>Case Type *</label>
              <select name="caseType" required style={fieldStyle}>
                <option value="" disabled selected>Select case type...</option>
                {CASE_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
              <p style={{ fontSize: "0.75rem", color: "#6B7280", marginTop: "0.25rem" }}>
                This determines which documents and checklists are generated.
              </p>
            </div>

            {/* Advisor */}
            <div>
              <label style={labelStyle}>Assigned Advisor *</label>
              <select name="advisorId" required style={fieldStyle}>
                <option value="" disabled selected>Select advisor...</option>
                {advisors.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.firstName} {a.lastName}
                  </option>
                ))}
              </select>
            </div>

            {/* Priority */}
            <div>
              <label style={labelStyle}>Priority</label>
              <select name="priority" style={fieldStyle} defaultValue="NORMAL">
                <option value="NORMAL">Normal</option>
                <option value="HIGH">High</option>
                <option value="URGENT">Urgent</option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <div style={{ marginTop: "2rem", display: "flex", gap: "0.75rem" }}>
            <button
              type="submit"
              style={{
                padding: "0.75rem 2rem",
                background: "#0B1B3D",
                color: "white",
                border: "none",
                borderRadius: "0.375rem",
                fontSize: "0.9375rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Create Case
            </button>
            <Link
              href="/crm/cases"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.75rem 1.5rem",
                border: "1px solid #D1D5DB",
                color: "#374151",
                borderRadius: "0.375rem",
                fontSize: "0.9375rem",
                textDecoration: "none",
              }}
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
