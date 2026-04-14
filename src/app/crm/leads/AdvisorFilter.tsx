"use client";

import { useRouter } from "next/navigation";

interface Props {
  currentAdvisor: string;
  currentStatus: string;
  staffUsers: { id: string; firstName: string; lastName: string }[];
}

export default function AdvisorFilter({ currentAdvisor, currentStatus, staffUsers }: Props) {
  const router = useRouter();

  const handleChange = (value: string) => {
    const params = new URLSearchParams();
    if (currentStatus) params.set("status", currentStatus);
    if (value) params.set("advisor", value);
    const qs = params.toString();
    router.push(`/crm/leads${qs ? `?${qs}` : ""}`);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <label style={{ fontSize: "0.875rem", color: "#6B7280" }}>Advisor:</label>
      <select
        defaultValue={currentAdvisor}
        onChange={(e) => handleChange(e.target.value)}
        style={{ padding: "0.375rem 0.75rem", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.875rem", background: "white" }}
      >
        <option value="">All</option>
        {staffUsers.map((u) => (
          <option key={u.id} value={u.id}>{u.firstName} {u.lastName}</option>
        ))}
      </select>
    </div>
  );
}
