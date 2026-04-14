"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        color: "#9CA3AF",
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "0.875rem",
        padding: "0.5rem 0",
      }}
    >
      <LogOut style={{ width: "1.25rem", height: "1.25rem" }} />
      Sign Out
    </button>
  );
}
