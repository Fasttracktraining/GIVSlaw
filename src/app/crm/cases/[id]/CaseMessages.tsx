"use client";

import { useState } from "react";
import { sendCaseMessage } from "./actions";
import { Send } from "lucide-react";

interface Message {
  id: string;
  content: string;
  createdAt: string;
  senderName: string;
  senderRole: string;
}

export default function CaseMessages({ messages, caseId }: { messages: Message[]; caseId: string }) {
  const [newMsg, setNewMsg] = useState("");
  const [sending, setSending] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMsg.trim()) return;
    setSending(true);
    await sendCaseMessage(caseId, newMsg.trim());
    setNewMsg("");
    setSending(false);
  };

  return (
    <div>
      {messages.length === 0 ? (
        <p style={{ color: "#9CA3AF", fontSize: "0.875rem", marginBottom: "1rem" }}>No messages yet.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1rem", maxHeight: "300px", overflowY: "auto" }}>
          {messages.map((msg) => (
            <div key={msg.id} style={{ padding: "0.625rem 0.75rem", background: msg.senderRole === "CLIENT" ? "#F3F4F6" : "#EFF6FF", borderRadius: "0.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: "#374151" }}>{msg.senderName} ({msg.senderRole})</span>
                <span style={{ fontSize: "0.6875rem", color: "#9CA3AF" }}>{new Date(msg.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}</span>
              </div>
              <p style={{ fontSize: "0.8125rem", color: "#111827" }}>{msg.content}</p>
            </div>
          ))}
        </div>
      )}

      <form onSubmit={handleSend} style={{ display: "flex", gap: "0.5rem" }}>
        <input type="text" value={newMsg} onChange={(e) => setNewMsg(e.target.value)} placeholder="Reply to client..." style={{ flex: 1, padding: "0.5rem 0.75rem", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.8125rem" }} />
        <button type="submit" disabled={sending || !newMsg.trim()} style={{ padding: "0.5rem 0.75rem", background: sending ? "#9CA3AF" : "#0B1B3D", color: "white", border: "none", borderRadius: "0.375rem", cursor: "pointer" }}>
          <Send style={{ width: "0.875rem", height: "0.875rem" }} />
        </button>
      </form>
    </div>
  );
}
