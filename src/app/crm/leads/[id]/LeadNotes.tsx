"use client";

import { useState } from "react";
import { addLeadNote } from "../actions";

interface Props {
  leadId: string;
  notes: string | null;
}

export default function LeadNotes({ leadId, notes }: Props) {
  const [newNote, setNewNote] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    setSaving(true);
    await addLeadNote(leadId, newNote.trim());
    setNewNote("");
    setSaving(false);
  };

  const noteEntries = notes
    ? notes.split("\n---\n").map((n) => n.trim()).filter(Boolean)
    : [];

  return (
    <div>
      {/* Add Note Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Add a note..."
          rows={3}
          style={{ width: "100%", padding: "0.625rem 0.75rem", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.875rem", resize: "vertical", marginBottom: "0.5rem" }}
        />
        <button
          type="submit"
          disabled={saving || !newNote.trim()}
          style={{ padding: "0.5rem 1rem", background: saving ? "#9CA3AF" : "#0B1B3D", color: "white", border: "none", borderRadius: "0.375rem", fontSize: "0.8125rem", fontWeight: 600, cursor: saving ? "not-allowed" : "pointer" }}
        >
          {saving ? "Saving..." : "Add Note"}
        </button>
      </form>

      {/* Previous Notes */}
      {noteEntries.length === 0 ? (
        <p style={{ color: "#9CA3AF", fontSize: "0.875rem" }}>No notes yet.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {noteEntries.map((note, i) => {
            const match = note.match(/^\[(.+?)\] (.+?): ([\s\S]+)$/);
            return (
              <div key={i} style={{ padding: "0.75rem", background: "#F9FAFB", borderRadius: "0.375rem", borderLeft: "3px solid #D1D5DB" }}>
                {match ? (
                  <>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.375rem" }}>
                      <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#374151" }}>{match[2]}</span>
                      <span style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>
                        {new Date(match[1]).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                    <p style={{ fontSize: "0.875rem", color: "#374151" }}>{match[3]}</p>
                  </>
                ) : (
                  <p style={{ fontSize: "0.875rem", color: "#374151" }}>{note}</p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
