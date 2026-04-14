"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/components/shared/Toast";
import { quickCallOutcome } from "../leads/actions";

interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  urgency: string;
  createdAt: string;
  primaryService: string | null;
}

interface Props {
  initialLeads: Lead[];
}

export default function SetterPriorityQueue({ initialLeads }: Props) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const toast = useToast();

  // Timer update helper
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getTimerColor = (createdAt: string) => {
    const elapsed = (now.getTime() - new Date(createdAt).getTime()) / 1000;
    if (elapsed < 30) return "#10B981"; // Green
    if (elapsed < 60) return "#F59E0B"; // Orange
    return "#EF4444"; // Red
  };

  const getElapsedTime = (createdAt: string) => {
    const elapsed = Math.floor((now.getTime() - new Date(createdAt).getTime()) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleOutcome = async (leadId: string, outcome: string) => {
    await quickCallOutcome(leadId, outcome);
    setLeads(leads.filter(l => l.id !== leadId));
    toast(`Lead updated: ${outcome.replace(/_/g, " ")}`);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
      {leads.length === 0 ? (
        <div style={{ padding: "4rem", textAlign: "center", background: "white", borderRadius: "1rem" }}>
          <p style={{ color: "#6B7280", fontSize: "1.125rem" }}>No new leads. Great job!</p>
        </div>
      ) : (
        leads.map((lead) => {
          const timerColor = getTimerColor(lead.createdAt);
          const elapsed = (now.getTime() - new Date(lead.createdAt).getTime()) / 1000;
          
          return (
            <div 
              key={lead.id} 
              style={{ 
                background: "white", 
                borderRadius: "1rem", 
                padding: "1.5rem", 
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                gap: "2rem",
                alignItems: "center",
                borderLeft: `8px solid ${lead.urgency === "URGENT" || lead.urgency === "HIGH" ? "#EF4444" : "#D1D5DB"}`
              }}
            >
              {/* Timer */}
              <div style={{ textAlign: "center", width: "100px" }}>
                <div style={{ 
                  width: "100%", 
                  padding: "0.75rem", 
                  background: timerColor, 
                  color: "white", 
                  borderRadius: "0.5rem",
                  fontSize: "1.25rem",
                  fontWeight: 800
                }}>
                  {getElapsedTime(lead.createdAt)}
                </div>
                <p style={{ fontSize: "0.625rem", textTransform: "uppercase", fontWeight: 700, color: "#9CA3AF", marginTop: "0.5rem" }}>Response Time</p>
              </div>

              {/* Info */}
              <div>
                <Link href={`/crm/leads/${lead.id}`} style={{ textDecoration: "none" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0B1B3D" }}>{lead.firstName} {lead.lastName}</h3>
                </Link>
                <p style={{ fontSize: "0.875rem", color: "#6B7280", marginBottom: "0.75rem" }}>{lead.primaryService || "General Enquiry"}</p>
                
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <span style={{ padding: "0.25rem 0.5rem", background: "#F3F4F6", borderRadius: "0.25rem", fontSize: "0.75rem", fontWeight: 600, color: "#374151" }}>
                    Source: FUNNEL
                  </span>
                  <span style={{ 
                    padding: "0.25rem 0.5rem", 
                    background: lead.urgency === "URGENT" ? "#FEE2E2" : "#FEF3C7", 
                    color: lead.urgency === "URGENT" ? "#991B1B" : "#B45309", 
                    borderRadius: "0.25rem", 
                    fontSize: "0.75rem", 
                    fontWeight: 700 
                  }}>
                    {lead.urgency}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                {lead.phone && (
                  <>
                    <a 
                      href={`tel:${lead.phone}`} 
                      className="group"
                      style={{ 
                        width: "3.5rem", 
                        height: "3.5rem", 
                        borderRadius: "50%", 
                        background: "#0B1B3D", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        color: "white",
                        textDecoration: "none",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
                      }}
                    >
                      <Phone />
                    </a>
                    <a 
                      href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, "")}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ 
                        width: "3rem", 
                        height: "3rem", 
                        borderRadius: "50%", 
                        border: "2px solid #25D366", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        color: "#25D366",
                        textDecoration: "none"
                      }}
                    >
                      <MessageCircle />
                    </a>
                  </>
                )}

                <div style={{ width: "1px", height: "3rem", background: "#E5E7EB", margin: "0 0.5rem" }} />

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.4rem" }}>
                  <button 
                    onClick={() => handleOutcome(lead.id, "INTERESTED")}
                    style={{ padding: "0.5rem 0.75rem", background: "#10B981", color: "white", border: "none", borderRadius: "0.375rem", fontSize: "0.75rem", fontWeight: 700, cursor: "pointer" }}
                  >
                    Transfer to Closer
                  </button>
                  <button 
                    onClick={() => handleOutcome(lead.id, "NO_ANSWER")}
                    style={{ padding: "0.5rem 0.75rem", background: "#F3F4F6", color: "#374151", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer" }}
                  >
                    No Answer
                  </button>
                  <button 
                    onClick={() => handleOutcome(lead.id, "CALLBACK_LATER")}
                    style={{ padding: "0.5rem 0.75rem", background: "#F3F4F6", color: "#374151", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer" }}
                  >
                    Callback
                  </button>
                  <button 
                    onClick={() => handleOutcome(lead.id, "LOST")}
                    style={{ padding: "0.5rem 0.75rem", background: "#FEE2E2", color: "#991B1B", border: "1px solid #FECACA", borderRadius: "0.375rem", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer" }}
                  >
                    Bad Lead
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
