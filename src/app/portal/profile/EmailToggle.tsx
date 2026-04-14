"use client";

import { useState } from "react";
import { toggleEmailNotifications } from "./actions";

export default function EmailToggle({ enabled }: { enabled: boolean }) {
  const [on, setOn] = useState(enabled);
  const [saving, setSaving] = useState(false);

  const handleToggle = async () => {
    setSaving(true);
    setOn(!on);
    await toggleEmailNotifications();
    setSaving(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <p style={{ fontWeight: 500, color: "#111827", fontSize: "0.875rem" }}>Email Notifications</p>
        <p style={{ fontSize: "0.8125rem", color: "#6B7280", marginTop: "0.25rem" }}>
          Receive email updates about your case, documents, and messages.
        </p>
      </div>
      <button
        onClick={handleToggle}
        disabled={saving}
        style={{
          width: "3rem",
          height: "1.625rem",
          borderRadius: "9999px",
          border: "none",
          cursor: "pointer",
          background: on ? "#10B981" : "#D1D5DB",
          position: "relative",
          transition: "background 0.2s",
        }}
      >
        <span style={{
          display: "block",
          width: "1.25rem",
          height: "1.25rem",
          borderRadius: "50%",
          background: "white",
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
          position: "absolute",
          top: "0.1875rem",
          left: on ? "1.5625rem" : "0.1875rem",
          transition: "left 0.2s",
        }} />
      </button>
    </div>
  );
}
