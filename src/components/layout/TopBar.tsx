"use client";

import { Clock, Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div style={{ background: "#0B1B3D", color: "white", fontSize: "0.875rem", padding: "0.625rem 0" }}>
      <div className="container-main" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Clock style={{ width: "1rem", height: "1rem", color: "#C5963A" }} />
          <span>Working Hour: 09:00am to 05:00pm</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <a href="tel:+441156547274" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "white", textDecoration: "none" }}>
            <Phone style={{ width: "1rem", height: "1rem", color: "#C5963A" }} />
            <span>Phone: +441156547274</span>
          </a>
          <span style={{ color: "#9CA3AF" }}>|</span>
          <a href="mailto:contact@givslaw.com" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "white", textDecoration: "none" }}>
            <Mail style={{ width: "1rem", height: "1rem", color: "#C5963A" }} />
            <span>Email: contact@givslaw.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
