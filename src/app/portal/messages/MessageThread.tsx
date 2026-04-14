"use client";

import { useState } from "react";
import { sendMessage } from "../actions";
import { Send } from "lucide-react";

interface Message {
  id: string;
  content: string;
  createdAt: string;
  senderName: string;
  senderRole: string;
  isMe: boolean;
}

export default function MessageThread({ messages: initialMessages, caseId }: { messages: Message[]; caseId: string }) {
  const [newMessage, setNewMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setSending(true);
    await sendMessage(caseId, newMessage.trim());
    setNewMessage("");
    setSending(false);
  };

  return (
    <div style={{ background: "white", borderRadius: "0.75rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", overflow: "hidden", display: "flex", flexDirection: "column", maxHeight: "calc(100vh - 16rem)" }}>
      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
        {initialMessages.length === 0 ? (
          <div style={{ textAlign: "center", padding: "2rem 0", color: "#9CA3AF" }}>
            <p style={{ marginBottom: "0.25rem" }}>No messages yet.</p>
            <p style={{ fontSize: "0.875rem" }}>Send a message to start the conversation with your advisor.</p>
          </div>
        ) : (
          initialMessages.map((msg) => (
            <div key={msg.id} style={{ display: "flex", justifyContent: msg.isMe ? "flex-end" : "flex-start" }}>
              <div style={{ maxWidth: "70%", padding: "0.75rem 1rem", borderRadius: "0.75rem", background: msg.isMe ? "#0B1B3D" : "#F3F4F6", color: msg.isMe ? "white" : "#111827" }}>
                {!msg.isMe && (
                  <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "#6B7280", marginBottom: "0.25rem" }}>
                    {msg.senderName} · {msg.senderRole}
                  </p>
                )}
                <p style={{ fontSize: "0.875rem", lineHeight: "1.5" }}>{msg.content}</p>
                <p style={{ fontSize: "0.6875rem", color: msg.isMe ? "rgba(255,255,255,0.6)" : "#9CA3AF", marginTop: "0.375rem" }}>
                  {new Date(msg.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSend} style={{ display: "flex", gap: "0.5rem", padding: "1rem 1.5rem", borderTop: "1px solid #E5E7EB" }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          style={{ flex: 1, padding: "0.75rem 1rem", border: "1px solid #D1D5DB", borderRadius: "0.5rem", fontSize: "0.875rem", outline: "none" }}
        />
        <button type="submit" disabled={sending || !newMessage.trim()} style={{ padding: "0.75rem 1.25rem", background: sending ? "#9CA3AF" : "#0B1B3D", color: "white", border: "none", borderRadius: "0.5rem", cursor: sending ? "not-allowed" : "pointer", display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 600, fontSize: "0.875rem" }}>
          <Send style={{ width: "1rem", height: "1rem" }} />
        </button>
      </form>
    </div>
  );
}
