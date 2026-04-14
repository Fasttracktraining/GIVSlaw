"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Upload } from "lucide-react";

const categories = [
  "PASSPORT", "BRP", "BANK_STATEMENT", "PAYSLIP", "EMPLOYMENT_LETTER",
  "TENANCY_AGREEMENT", "UTILITY_BILL", "PHOTO", "MARRIAGE_CERT",
  "BIRTH_CERT", "QUALIFICATION", "TRANSLATION", "COVER_LETTER",
  "SUPPORTING_LETTER", "OTHER",
];

export default function UploadDocumentPage() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("OTHER");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setUploading(true);
    setError("");

    // Get case ID first
    const sessionRes = await fetch("/api/auth/session");
    const session = await sessionRes.json();
    if (!session?.user?.id) { setError("Not authenticated"); setUploading(false); return; }

    // We need the case ID - fetch it
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name || file.name);
    formData.append("category", category);
    // The API will need the caseId - we pass it via a hidden mechanism
    // For now, we'll use a workaround: fetch case from session
    formData.append("caseId", "NEEDS_LOOKUP");

    const res = await fetch("/api/documents", { method: "POST", body: formData });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Upload failed");
      setUploading(false);
      return;
    }

    router.push("/portal/documents");
    router.refresh();
  };

  return (
    <div>
      <Link href="/portal/documents" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#6B7280", textDecoration: "none", fontSize: "0.875rem", marginBottom: "1rem" }}>
        <ArrowLeft style={{ width: "1rem", height: "1rem" }} /> Back to Documents
      </Link>

      <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1.5rem" }}>Upload Document</h1>

      <form onSubmit={handleSubmit} style={{ background: "white", borderRadius: "0.75rem", padding: "2rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", maxWidth: "480px" }}>
        {error && (
          <div style={{ padding: "0.75rem", background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "0.375rem", color: "#DC2626", fontSize: "0.875rem", marginBottom: "1rem" }}>
            {error}
          </div>
        )}

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "0.375rem" }}>Document Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Passport scan" style={{ width: "100%", padding: "0.625rem 0.75rem", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.875rem" }} />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "0.375rem" }}>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ width: "100%", padding: "0.625rem 0.75rem", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.875rem", background: "white" }}>
            {categories.map((c) => (
              <option key={c} value={c}>{c.replace(/_/g, " ")}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "0.375rem" }}>File <span style={{ color: "#DC2626" }}>*</span></label>
          <div style={{ border: "2px dashed #D1D5DB", borderRadius: "0.5rem", padding: "2rem", textAlign: "center", cursor: "pointer", position: "relative" }}>
            <input
              type="file"
              required
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              style={{ position: "absolute", inset: 0, opacity: 0, cursor: "pointer" }}
            />
            <Upload style={{ width: "2rem", height: "2rem", color: "#9CA3AF", margin: "0 auto 0.5rem" }} />
            {file ? (
              <p style={{ fontSize: "0.875rem", color: "#0B1B3D", fontWeight: 500 }}>{file.name} ({(file.size / 1024).toFixed(0)} KB)</p>
            ) : (
              <>
                <p style={{ fontSize: "0.875rem", color: "#6B7280" }}>Click to select or drag and drop</p>
                <p style={{ fontSize: "0.75rem", color: "#9CA3AF", marginTop: "0.25rem" }}>PDF, JPG, PNG, DOC (max 10MB)</p>
              </>
            )}
          </div>
        </div>

        <button type="submit" disabled={uploading || !file} style={{ width: "100%", padding: "0.75rem", background: uploading ? "#9CA3AF" : "#0B1B3D", color: "white", border: "none", borderRadius: "0.375rem", fontWeight: 600, fontSize: "0.875rem", cursor: uploading ? "not-allowed" : "pointer" }}>
          {uploading ? "Uploading..." : "Upload Document"}
        </button>
      </form>
    </div>
  );
}
