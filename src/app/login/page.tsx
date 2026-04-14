"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
      setLoading(false);
      return;
    }

    // Fetch session to get role for redirect
    const res = await fetch("/api/auth/session");
    const session = await res.json();

    if (session?.user?.role === "CLIENT") {
      router.push("/portal");
    } else {
      router.push("/crm");
    }
  };

  return (
    <div style={{ minHeight: "calc(100vh - 12rem)", display: "flex", alignItems: "center", justifyContent: "center", background: "#F9FAFB", padding: "2rem" }}>
      <div style={{ width: "100%", maxWidth: "420px" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Image src="/images/logo.png" alt="GIVS Law" width={180} height={60} style={{ height: "3.5rem", width: "auto", margin: "0 auto" }} />
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginTop: "1.5rem" }}>
            Sign in to your account
          </h1>
          <p style={{ color: "#6B7280", marginTop: "0.5rem", fontSize: "0.875rem" }}>
            Access your client portal or CRM dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ background: "white", borderRadius: "0.75rem", padding: "2rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          {error && (
            <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", color: "#DC2626", padding: "0.75rem 1rem", borderRadius: "0.5rem", marginBottom: "1.5rem", fontSize: "0.875rem" }}>
              {error}
            </div>
          )}

          <div style={{ marginBottom: "1.25rem" }}>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "0.375rem" }}>
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.875rem", outline: "none" }}
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "0.375rem" }}>
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.875rem", outline: "none" }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{ width: "100%", padding: "0.75rem", background: loading ? "#6B7280" : "#0B1B3D", color: "white", fontWeight: 600, borderRadius: "0.375rem", border: "none", cursor: loading ? "not-allowed" : "pointer", fontSize: "0.875rem" }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
