"use client";

import { Calendar, User, Briefcase, CreditCard, AlertTriangle } from "lucide-react";

interface Props {
  caseRef: string;
  caseType: string | null;
  clientName: string;
  advisorName: string;
  workflowStage: string;
  priority: string;
  paymentStatus: string;
  deadline: string | null;
  riskLevel: string | null;
}

const CASE_TYPE_LABELS: Record<string, string> = {
  SPOUSE_VISA_ENTRY_CLEARANCE: "Spouse Visa — Entry Clearance",
  SPOUSE_VISA_EXTENSION_ILR: "Spouse Visa — Extension / ILR",
  SKILLED_WORKER_ENTRY: "Skilled Worker — Entry",
  SKILLED_WORKER_EXTENSION: "Skilled Worker — Extension",
  ILR_10YR_LONG_RESIDENCE: "ILR — 10 Year Long Residence",
  BRITISH_CITIZENSHIP_NATURALISATION: "British Citizenship — Naturalisation",
};

const STAGE_LABELS: Record<string, string> = {
  ENQUIRY: "Enquiry",
  DOCUMENT_COLLECTION: "Document Collection",
  CASE_REVIEW: "Case Review",
  SUBMISSION: "Submission",
  DECISION_TRACKING: "Decision Tracking",
};

const STAGE_COLOURS: Record<string, string> = {
  ENQUIRY: "#6B7280",
  DOCUMENT_COLLECTION: "#2563EB",
  CASE_REVIEW: "#C5963A",
  SUBMISSION: "#7C3AED",
  DECISION_TRACKING: "#059669",
};

const PRIORITY_COLOURS: Record<string, string> = {
  NORMAL: "#6B7280",
  HIGH: "#F59E0B",
  URGENT: "#DC2626",
};

export default function CaseSummaryBar(props: Props) {
  const stageLabel = STAGE_LABELS[props.workflowStage] || props.workflowStage;
  const stageColour = STAGE_COLOURS[props.workflowStage] || "#6B7280";
  const typeLabel = props.caseType ? (CASE_TYPE_LABELS[props.caseType] || props.caseType) : "Type not set";
  const priorityColour = PRIORITY_COLOURS[props.priority] || "#6B7280";

  return (
    <div style={{
      background: "white",
      borderRadius: "0.75rem",
      padding: "1.25rem 1.5rem",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "1rem",
      borderLeft: `4px solid ${stageColour}`,
    }}>
      {/* Left: Ref + Type */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <div>
          <p style={{ fontSize: "1.125rem", fontWeight: 700, color: "#0B1B3D" }}>{props.caseRef}</p>
          <p style={{ fontSize: "0.8125rem", color: "#6B7280", marginTop: "0.125rem" }}>{typeLabel}</p>
        </div>

        {/* Stage Badge */}
        <span style={{
          display: "inline-block",
          padding: "0.375rem 0.875rem",
          borderRadius: "1rem",
          background: `${stageColour}15`,
          color: stageColour,
          fontWeight: 600,
          fontSize: "0.75rem",
          letterSpacing: "0.02em",
        }}>
          {stageLabel}
        </span>

        {/* Priority */}
        {props.priority !== "NORMAL" && (
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.25rem",
            padding: "0.375rem 0.75rem",
            borderRadius: "1rem",
            background: `${priorityColour}15`,
            color: priorityColour,
            fontWeight: 600,
            fontSize: "0.75rem",
          }}>
            <AlertTriangle style={{ width: "0.75rem", height: "0.75rem" }} />
            {props.priority}
          </span>
        )}
      </div>

      {/* Right: Details */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.8125rem", color: "#374151" }}>
          <User style={{ width: "0.875rem", height: "0.875rem", color: "#9CA3AF" }} />
          {props.clientName}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.8125rem", color: "#374151" }}>
          <Briefcase style={{ width: "0.875rem", height: "0.875rem", color: "#9CA3AF" }} />
          {props.advisorName}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.8125rem", color: "#374151" }}>
          <CreditCard style={{ width: "0.875rem", height: "0.875rem", color: "#9CA3AF" }} />
          {props.paymentStatus}
        </div>
        {props.deadline && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.8125rem", color: "#374151" }}>
            <Calendar style={{ width: "0.875rem", height: "0.875rem", color: "#9CA3AF" }} />
            {new Date(props.deadline).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
          </div>
        )}
      </div>
    </div>
  );
}
