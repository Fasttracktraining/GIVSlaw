import { prisma } from "@/lib/db";
import { createLead } from "../actions";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function NewLeadPage() {
  const staffUsers = await prisma.user.findMany({
    where: { role: { in: ["ADMIN", "DIRECTOR", "ADVISOR", "CASEWORKER"] } },
    orderBy: { firstName: "asc" },
  });

  const services = await prisma.service.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div>
      <Link href="/crm/leads" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#6B7280", textDecoration: "none", fontSize: "0.875rem", marginBottom: "1rem" }}>
        <ArrowLeft style={{ width: "1rem", height: "1rem" }} /> Back to Leads
      </Link>

      <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.5rem" }}>Add New Lead</h1>

      <form action={createLead} style={{ background: "white", borderRadius: "0.75rem", padding: "2rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", maxWidth: "640px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
          <FieldGroup label="First Name" name="firstName" required />
          <FieldGroup label="Last Name" name="lastName" required />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
          <FieldGroup label="Email" name="email" type="email" required />
          <FieldGroup label="Phone" name="phone" type="tel" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
          <div>
            <label style={labelStyle}>Source</label>
            <select name="source" style={inputStyle} defaultValue="WEBSITE">
              {["WEBSITE", "REFERRAL", "SOCIAL_MEDIA", "GOOGLE", "FUNNEL", "WALK_IN", "OTHER"].map((s) => (
                <option key={s} value={s}>{s.replace("_", " ")}</option>
              ))}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Urgency</label>
            <select name="urgency" style={inputStyle} defaultValue="MEDIUM">
              {["LOW", "MEDIUM", "HIGH", "URGENT"].map((u) => (
                <option key={u} value={u}>{u}</option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
          <div>
            <label style={labelStyle}>Primary Service</label>
            <select name="primaryService" style={inputStyle} defaultValue="">
              <option value="">Select service...</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>{s.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Assign To</label>
            <select name="assignedAdvisorId" style={inputStyle} defaultValue="">
              <option value="">Unassigned</option>
              {staffUsers.map((u) => (
                <option key={u.id} value={u.id}>{u.firstName} {u.lastName} ({u.role})</option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <label style={labelStyle}>Notes</label>
          <textarea name="notes" rows={3} style={{ ...inputStyle, resize: "vertical" }} />
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <button type="submit" style={{ padding: "0.625rem 1.5rem", background: "#0B1B3D", color: "white", border: "none", borderRadius: "0.375rem", fontWeight: 600, fontSize: "0.875rem", cursor: "pointer" }}>
            Create Lead
          </button>
          <Link href="/crm/leads" style={{ padding: "0.625rem 1.5rem", border: "1px solid #D1D5DB", borderRadius: "0.375rem", color: "#374151", textDecoration: "none", fontSize: "0.875rem" }}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.875rem",
  fontWeight: 600,
  color: "#0B1B3D",
  marginBottom: "0.375rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.625rem 0.75rem",
  border: "1px solid #D1D5DB",
  borderRadius: "0.375rem",
  fontSize: "0.875rem",
};

function FieldGroup({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label style={labelStyle}>{label} {required && <span style={{ color: "#DC2626" }}>*</span>}</label>
      <input type={type} name={name} required={required} style={inputStyle} />
    </div>
  );
}
