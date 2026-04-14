"use client";

import { submitFunnelForm } from "../actions";

interface Props {
  funnelSlug: string;
  serviceSlug: string;
  ctaText: string;
}

export default function FunnelForm({ funnelSlug, serviceSlug, ctaText }: Props) {
  return (
    <form action={submitFunnelForm} style={{ background: "white", borderRadius: "0.75rem", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
      <input type="hidden" name="funnelSlug" value={funnelSlug} />
      <input type="hidden" name="serviceSlug" value={serviceSlug} />
      <input type="hidden" name="wantsBooking" value="true" />

      <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.5rem" }}>
        Get Your Free Assessment
      </h3>
      <p style={{ color: "#6B7280", fontSize: "0.8125rem", marginBottom: "1.5rem" }}>
        Fill in your details and we will get back to you within 24 hours.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "0.75rem" }}>
        <div>
          <label style={labelStyle}>First Name <span style={{ color: "#DC2626" }}>*</span></label>
          <input type="text" name="firstName" required placeholder="John" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Last Name <span style={{ color: "#DC2626" }}>*</span></label>
          <input type="text" name="lastName" required placeholder="Smith" style={inputStyle} />
        </div>
      </div>

      <div style={{ marginBottom: "0.75rem" }}>
        <label style={labelStyle}>Email <span style={{ color: "#DC2626" }}>*</span></label>
        <input type="email" name="email" required placeholder="john@example.com" style={inputStyle} />
      </div>

      <div style={{ marginBottom: "0.75rem" }}>
        <label style={labelStyle}>Phone <span style={{ color: "#DC2626" }}>*</span></label>
        <input type="tel" name="phone" required placeholder="+44 7700 000000" style={inputStyle} />
      </div>

      <div style={{ marginBottom: "0.75rem" }}>
        <label style={labelStyle}>How urgent is your case?</label>
        <select name="urgency" defaultValue="MEDIUM" style={inputStyle}>
          <option value="LOW">Not urgent — just exploring</option>
          <option value="MEDIUM">Moderate — need help soon</option>
          <option value="HIGH">High — need help this week</option>
          <option value="URGENT">Urgent — deadline approaching</option>
        </select>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <label style={labelStyle}>Tell us briefly about your situation</label>
        <textarea name="summary" rows={3} placeholder="E.g. I have been living in the UK for 5 years and want to apply for..." style={{ ...inputStyle, resize: "vertical" }} />
      </div>

      <button type="submit" style={{ width: "100%", padding: "0.875rem", background: "#C5963A", color: "white", border: "none", borderRadius: "0.5rem", fontWeight: 700, fontSize: "1rem", cursor: "pointer" }}>
        {ctaText}
      </button>

      <p style={{ textAlign: "center", fontSize: "0.6875rem", color: "#9CA3AF", marginTop: "0.75rem" }}>
        Your information is secure and will not be shared with third parties.
      </p>
    </form>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.8125rem",
  fontWeight: 600,
  color: "#0B1B3D",
  marginBottom: "0.25rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.625rem 0.75rem",
  border: "1px solid #D1D5DB",
  borderRadius: "0.375rem",
  fontSize: "0.875rem",
  background: "white",
};
