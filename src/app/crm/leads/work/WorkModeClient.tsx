"use client";

import { useState } from "react";
import Link from "next/link";
import { useToast } from "@/components/shared/Toast";
import { quickCallOutcome, setFollowUp, updateLeadStatus } from "../actions";
import { Phone, MessageCircle, ArrowRight, List, LayoutGrid, Calendar } from "lucide-react";

interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  primaryService: string | null;
  source: string;
  urgency: string;
  status: string;
  temperature: string;
  nextFollowUpAt: string | null;
  lastContactedAt: string | null;
  nextAction: { label: string; color: string; bg: string };
  advisorName: string | null;
  recentCalls: { outcome: string; date: string; by: string }[];
}

const outcomes = [
  { value: "NO_ANSWER", label: "No Answer", color: "#6B7280", emoji: "📵" },
  { value: "INTERESTED", label: "Interested", color: "#10B981", emoji: "✅" },
  { value: "NOT_INTERESTED", label: "Not Interested", color: "#EF4444", emoji: "❌" },
  { value: "CALLBACK_LATER", label: "Callback Later", color: "#F59E0B", emoji: "🔁" },
  { value: "WRONG_NUMBER", label: "Wrong Number", color: "#991B1B", emoji: "⚠️" },
];

const tempColors: Record<string, { bg: string; text: string; label: string }> = {
  HOT: { bg: "#FEE2E2", text: "#DC2626", label: "HOT" },
  WARM: { bg: "#FEF3C7", text: "#B45309", label: "WARM" },
  COLD: { bg: "#DBEAFE", text: "#1D4ED8", label: "COLD" },
};

export default function WorkModeClient({ leads }: { leads: Lead[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [processed, setProcessed] = useState(0);
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [followUpDate, setFollowUpDate] = useState("");
  const toast = useToast();

  if (leads.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1rem" }}>All caught up!</h1>
        <p style={{ color: "#6B7280", marginBottom: "2rem" }}>No leads need attention right now.</p>
        <Link href="/crm/leads" style={{ padding: "0.625rem 1.25rem", background: "#0B1B3D", color: "white", borderRadius: "0.375rem", textDecoration: "none", fontWeight: 600 }}>
          Back to Leads
        </Link>
      </div>
    );
  }

  const lead = leads[currentIndex];
  const isLast = currentIndex >= leads.length - 1;
  const remaining = leads.length - currentIndex;
  const temp = tempColors[lead?.temperature] || tempColors.WARM;

  const goNext = () => {
    setProcessed((p) => p + 1);
    setShowFollowUp(false);
    setFollowUpDate("");
    if (!isLast) setCurrentIndex((i) => i + 1);
  };

  const handleOutcome = async (outcome: string) => {
    await quickCallOutcome(lead.id, outcome);
    const label = outcomes.find((o) => o.value === outcome)?.label || outcome;
    toast(`Call logged: ${label}`);
    goNext();
  };

  const handleFollowUp = async () => {
    if (!followUpDate) return;
    await setFollowUp(lead.id, followUpDate);
    toast("Follow-up scheduled");
    setShowFollowUp(false);
    setFollowUpDate("");
  };

  const handleSkip = () => goNext();

  if (!lead) {
    return (
      <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#10B981", marginBottom: "0.5rem" }}>Session complete!</h1>
        <p style={{ color: "#6B7280", marginBottom: "2rem" }}>{processed} leads processed.</p>
        <Link href="/crm" style={{ padding: "0.625rem 1.25rem", background: "#0B1B3D", color: "white", borderRadius: "0.375rem", textDecoration: "none", fontWeight: 600 }}>
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <h1 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0B1B3D" }}>Work Mode</h1>
          <span style={{ fontSize: "0.8125rem", color: "#6B7280" }}>{remaining} remaining · {processed} done</span>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Link href="/crm/leads" style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", padding: "0.5rem 0.75rem", background: "#F3F4F6", borderRadius: "0.375rem", textDecoration: "none", color: "#374151", fontSize: "0.8125rem" }}>
            <List style={{ width: "0.875rem", height: "0.875rem" }} /> List
          </Link>
          <Link href="/crm/leads/pipeline" style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", padding: "0.5rem 0.75rem", background: "#F3F4F6", borderRadius: "0.375rem", textDecoration: "none", color: "#374151", fontSize: "0.8125rem" }}>
            <LayoutGrid style={{ width: "0.875rem", height: "0.875rem" }} /> Pipeline
          </Link>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ height: "0.25rem", background: "#E5E7EB", borderRadius: "9999px", marginBottom: "1.5rem" }}>
        <div style={{ height: "100%", background: "#10B981", borderRadius: "9999px", width: `${(processed / leads.length) * 100}%`, transition: "width 0.3s" }} />
      </div>

      {/* Lead Card */}
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>
        <div style={{ background: "white", borderRadius: "0.75rem", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", overflow: "hidden" }}>
          {/* Top bar with temperature and next action */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 1.5rem", background: "#F9FAFB", borderBottom: "1px solid #E5E7EB" }}>
            <span style={{ padding: "0.25rem 0.75rem", borderRadius: "9999px", fontSize: "0.6875rem", fontWeight: 700, background: temp.bg, color: temp.text }}>{temp.label}</span>
            <span style={{ padding: "0.25rem 0.75rem", borderRadius: "9999px", fontSize: "0.6875rem", fontWeight: 600, background: lead.nextAction.bg, color: lead.nextAction.color }}>{lead.nextAction.label}</span>
          </div>

          {/* Main info */}
          <div style={{ padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.5rem" }}>
              {lead.firstName} {lead.lastName}
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <InfoItem label="Phone" value={lead.phone || "—"} />
              <InfoItem label="Email" value={lead.email} />
              <InfoItem label="Service" value={lead.primaryService || "—"} />
              <InfoItem label="Source" value={lead.source} />
              <InfoItem label="Urgency" value={lead.urgency} />
              <InfoItem label="Last Contact" value={lead.lastContactedAt ? new Date(lead.lastContactedAt).toLocaleDateString("en-GB") : "Never"} />
            </div>

            {/* Recent calls */}
            {lead.recentCalls.length > 0 && (
              <div style={{ marginBottom: "1.5rem" }}>
                <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase", marginBottom: "0.375rem" }}>Recent Calls</p>
                <div style={{ display: "flex", gap: "0.375rem" }}>
                  {lead.recentCalls.map((c, i) => (
                    <span key={i} style={{ padding: "0.125rem 0.5rem", background: "#F3F4F6", borderRadius: "0.25rem", fontSize: "0.6875rem", color: "#374151" }}>
                      {c.outcome.replace(/_/g, " ")} · {c.by}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Buttons */}
            <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.25rem" }}>
              {lead.phone && (
                <>
                  <a href={`tel:${lead.phone}`} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.75rem", background: "#0B1B3D", color: "white", borderRadius: "0.5rem", textDecoration: "none", fontWeight: 600, fontSize: "0.875rem" }}>
                    <Phone style={{ width: "1rem", height: "1rem" }} /> Call
                  </a>
                  <a href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.75rem", background: "#25D366", color: "white", borderRadius: "0.5rem", textDecoration: "none", fontWeight: 600, fontSize: "0.875rem" }}>
                    <MessageCircle style={{ width: "1rem", height: "1rem" }} /> WhatsApp
                  </a>
                </>
              )}
            </div>

            {/* Outcome Buttons */}
            <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase", marginBottom: "0.5rem" }}>Log Outcome</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.375rem", marginBottom: "1.25rem" }}>
              {outcomes.map((o) => (
                <button
                  key={o.value}
                  onClick={() => handleOutcome(o.value)}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem", padding: "0.625rem 0.25rem", background: "white", border: `1px solid ${o.color}`, borderRadius: "0.375rem", cursor: "pointer", fontSize: "0.625rem", fontWeight: 600, color: o.color }}
                >
                  <span style={{ fontSize: "1rem" }}>{o.emoji}</span>
                  {o.label}
                </button>
              ))}
            </div>

            {/* Follow-up */}
            {!showFollowUp ? (
              <button onClick={() => setShowFollowUp(true)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.625rem", background: "#F3F4F6", border: "none", borderRadius: "0.375rem", cursor: "pointer", fontSize: "0.8125rem", fontWeight: 500, color: "#374151", marginBottom: "0.75rem" }}>
                <Calendar style={{ width: "0.875rem", height: "0.875rem" }} /> Set Follow-Up
              </button>
            ) : (
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <input type="date" value={followUpDate} onChange={(e) => setFollowUpDate(e.target.value)} style={{ flex: 1, padding: "0.5rem", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.875rem" }} />
                <button onClick={handleFollowUp} disabled={!followUpDate} style={{ padding: "0.5rem 1rem", background: followUpDate ? "#0B1B3D" : "#D1D5DB", color: "white", border: "none", borderRadius: "0.375rem", fontWeight: 600, fontSize: "0.8125rem", cursor: followUpDate ? "pointer" : "default" }}>Set</button>
                <button onClick={() => setShowFollowUp(false)} style={{ padding: "0.5rem 0.75rem", background: "white", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.8125rem", cursor: "pointer" }}>Cancel</button>
              </div>
            )}

            {/* Skip / View Full */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button onClick={handleSkip} style={{ flex: 1, padding: "0.625rem", background: "white", border: "1px solid #D1D5DB", borderRadius: "0.375rem", cursor: "pointer", fontSize: "0.8125rem", color: "#6B7280" }}>
                Skip <ArrowRight style={{ width: "0.75rem", height: "0.75rem", display: "inline" }} />
              </button>
              <Link href={`/crm/leads/${lead.id}`} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "0.625rem", background: "white", border: "1px solid #D1D5DB", borderRadius: "0.375rem", textDecoration: "none", fontSize: "0.8125rem", color: "#374151" }}>
                View Full Lead
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase" }}>{label}</p>
      <p style={{ fontSize: "0.875rem", color: "#111827", marginTop: "0.125rem" }}>{value}</p>
    </div>
  );
}
