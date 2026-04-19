"use client";

import { useState } from "react";
import { MessageSquare, Lock, Globe } from "lucide-react";
import { addCaseNote } from "./actions";

interface NoteData {
  id: string;
  content: string;
  isInternal: boolean;
  authorName: string;
  createdAt: string;
}

interface Props {
  caseId: string;
  notes: NoteData[];
  canModify: boolean;
}

export default function CaseNotesPanel({ caseId, notes, canModify }: Props) {
  const [content, setContent] = useState("");
  const [isInternal, setIsInternal] = useState(true);
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!content.trim()) return;
    setSaving(true);
    try {
      await addCaseNote(caseId, content.trim(), isInternal);
      setContent("");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.25rem 1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
      <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid #E5E7EB" }}>
        Notes ({notes.length})
      </h2>

      {/* Add note form */}
      {canModify && (
        <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Add a note..."
            style={{
              width: "100%",
              padding: "0.625rem",
              border: "1px solid #E5E7EB",
              borderRadius: "0.375rem",
              fontSize: "0.8125rem",
              resize: "vertical",
              minHeight: "3.5rem",
              marginBottom: "0.5rem",
            }}
          />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <button
              type="button"
              onClick={() => setIsInternal(!isInternal)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                background: "transparent",
                border: "none",
                fontSize: "0.75rem",
                color: isInternal ? "#6B7280" : "#2563EB",
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              {isInternal ? (
                <><Lock style={{ width: "0.75rem", height: "0.75rem" }} /> Internal only</>
              ) : (
                <><Globe style={{ width: "0.75rem", height: "0.75rem" }} /> Visible to client</>
              )}
            </button>
            <button
              type="submit"
              disabled={saving || !content.trim()}
              style={{
                padding: "0.375rem 0.875rem",
                background: "#0B1B3D",
                color: "white",
                border: "none",
                borderRadius: "0.375rem",
                fontSize: "0.8125rem",
                fontWeight: 600,
                cursor: saving ? "wait" : "pointer",
                opacity: saving || !content.trim() ? 0.5 : 1,
              }}
            >
              {saving ? "Saving..." : "Add Note"}
            </button>
          </div>
        </form>
      )}

      {/* Notes list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
        {notes.map((note) => (
          <div key={note.id} style={{ padding: "0.625rem", background: note.isInternal ? "#F9FAFB" : "#EFF6FF", borderRadius: "0.375rem", borderLeft: note.isInternal ? "3px solid #D1D5DB" : "3px solid #3B82F6" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", marginBottom: "0.25rem" }}>
              {note.isInternal ? (
                <Lock style={{ width: "0.625rem", height: "0.625rem", color: "#9CA3AF" }} />
              ) : (
                <Globe style={{ width: "0.625rem", height: "0.625rem", color: "#3B82F6" }} />
              )}
              <span style={{ fontSize: "0.6875rem", color: "#6B7280", fontWeight: 600 }}>
                {note.authorName}
              </span>
              <span style={{ fontSize: "0.6875rem", color: "#9CA3AF" }}>
                {new Date(note.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
            <p style={{ fontSize: "0.8125rem", color: "#374151", lineHeight: 1.5, whiteSpace: "pre-wrap" }}>
              {note.content}
            </p>
          </div>
        ))}
        {notes.length === 0 && (
          <p style={{ color: "#9CA3AF", fontSize: "0.8125rem", textAlign: "center", padding: "0.5rem 0" }}>
            No notes yet.
          </p>
        )}
      </div>
    </div>
  );
}
