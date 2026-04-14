"use client";

import { useState, useEffect } from "react";
import { bookConsultation } from "../actions";
import { Calendar, Clock, CheckCircle } from "lucide-react";

interface Props {
  advisorId: string;
  advisorName: string;
  services: { slug: string; name: string }[];
  isPortal: boolean;
  clientName?: string;
  clientEmail?: string;
  clientPhone?: string;
}

export default function BookingWidget({ advisorId, advisorName, services, isPortal, clientName, clientEmail, clientPhone }: Props) {
  const [step, setStep] = useState<"service" | "date" | "time" | "details">("service");
  const [service, setService] = useState("");
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [slots, setSlots] = useState<{ time: string; available: boolean }[]>([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch available dates when service selected
  useEffect(() => {
    if (!service) return;
    setLoading(true);
    fetch(`/api/booking/slots?advisorId=${advisorId}`)
      .then((r) => r.json())
      .then((data) => { setAvailableDates(data.dates || []); setLoading(false); });
  }, [service, advisorId]);

  // Fetch slots when date selected
  useEffect(() => {
    if (!selectedDate) return;
    setLoading(true);
    fetch(`/api/booking/slots?advisorId=${advisorId}&date=${selectedDate}`)
      .then((r) => r.json())
      .then((data) => { setSlots(data.slots || []); setLoading(false); });
  }, [selectedDate, advisorId]);

  const handleServiceSelect = (slug: string) => {
    setService(slug);
    setStep("date");
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime("");
    setStep("time");
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    if (isPortal) {
      // Portal users skip details — submit directly
      setStep("details");
    } else {
      setStep("details");
    }
  };

  // Group dates by week for calendar-like display
  const datesByMonth: Record<string, string[]> = {};
  availableDates.forEach((d) => {
    const month = new Date(d).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
    if (!datesByMonth[month]) datesByMonth[month] = [];
    datesByMonth[month].push(d);
  });

  return (
    <div>
      {/* Progress */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem" }}>
        {["Service", "Date", "Time", "Confirm"].map((s, i) => {
          const stepIndex = { service: 0, date: 1, time: 2, details: 3 }[step] || 0;
          return (
            <div key={s} style={{ flex: 1, textAlign: "center" }}>
              <div style={{ height: "0.25rem", borderRadius: "9999px", background: i <= stepIndex ? "#0B1B3D" : "#E5E7EB", marginBottom: "0.375rem" }} />
              <span style={{ fontSize: "0.6875rem", color: i <= stepIndex ? "#0B1B3D" : "#9CA3AF", fontWeight: i === stepIndex ? 700 : 400 }}>{s}</span>
            </div>
          );
        })}
      </div>

      {/* Step 1: Service */}
      {step === "service" && (
        <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <h2 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "1rem" }}>What do you need help with?</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {services.map((s) => (
              <button
                key={s.slug}
                onClick={() => handleServiceSelect(s.slug)}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem", background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: "0.5rem", cursor: "pointer", textAlign: "left", fontSize: "0.875rem", fontWeight: 500, color: "#0B1B3D" }}
              >
                {s.name}
                <span style={{ color: "#9CA3AF" }}>→</span>
              </button>
            ))}
            <button
              onClick={() => handleServiceSelect("general")}
              style={{ padding: "1rem", background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: "0.5rem", cursor: "pointer", textAlign: "left", fontSize: "0.875rem", fontWeight: 500, color: "#6B7280" }}
            >
              General enquiry
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Date */}
      {step === "date" && (
        <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#0B1B3D" }}>Choose a date</h2>
            <button onClick={() => setStep("service")} style={{ fontSize: "0.8125rem", color: "#6B7280", background: "none", border: "none", cursor: "pointer" }}>← Back</button>
          </div>
          {loading ? (
            <p style={{ color: "#9CA3AF", textAlign: "center", padding: "2rem 0" }}>Loading dates...</p>
          ) : availableDates.length === 0 ? (
            <p style={{ color: "#9CA3AF", textAlign: "center", padding: "2rem 0" }}>No available dates. Please contact us directly.</p>
          ) : (
            Object.entries(datesByMonth).map(([month, dates]) => (
              <div key={month} style={{ marginBottom: "1.25rem" }}>
                <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#6B7280", marginBottom: "0.5rem" }}>{month}</p>
                <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
                  {dates.map((d) => {
                    const dt = new Date(d);
                    const dayName = dt.toLocaleDateString("en-GB", { weekday: "short" });
                    const dayNum = dt.getDate();
                    return (
                      <button
                        key={d}
                        onClick={() => handleDateSelect(d)}
                        style={{ width: "4.5rem", padding: "0.625rem 0.5rem", background: selectedDate === d ? "#0B1B3D" : "#F9FAFB", color: selectedDate === d ? "white" : "#0B1B3D", border: "1px solid #E5E7EB", borderRadius: "0.5rem", cursor: "pointer", textAlign: "center" }}
                      >
                        <p style={{ fontSize: "0.6875rem", fontWeight: 500 }}>{dayName}</p>
                        <p style={{ fontSize: "1.125rem", fontWeight: 700 }}>{dayNum}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Step 3: Time */}
      {step === "time" && (
        <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#0B1B3D" }}>
              Choose a time — {new Date(selectedDate).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}
            </h2>
            <button onClick={() => setStep("date")} style={{ fontSize: "0.8125rem", color: "#6B7280", background: "none", border: "none", cursor: "pointer" }}>← Back</button>
          </div>
          {loading ? (
            <p style={{ color: "#9CA3AF", textAlign: "center", padding: "2rem 0" }}>Loading times...</p>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.5rem" }}>
              {slots.filter((s) => s.available).map((slot) => (
                <button
                  key={slot.time}
                  onClick={() => handleTimeSelect(slot.time)}
                  style={{ padding: "0.75rem", background: selectedTime === slot.time ? "#0B1B3D" : "white", color: selectedTime === slot.time ? "white" : "#0B1B3D", border: "1px solid #D1D5DB", borderRadius: "0.375rem", cursor: "pointer", fontWeight: 600, fontSize: "0.875rem" }}
                >
                  {slot.time}
                </button>
              ))}
              {slots.filter((s) => s.available).length === 0 && (
                <p style={{ gridColumn: "span 4", color: "#9CA3AF", textAlign: "center", padding: "1rem 0" }}>No available times on this date.</p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Step 4: Details & Confirm */}
      {step === "details" && (
        <form action={bookConsultation} style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <input type="hidden" name="advisorId" value={advisorId} />
          <input type="hidden" name="date" value={selectedDate} />
          <input type="hidden" name="time" value={selectedTime} />
          <input type="hidden" name="service" value={service} />
          <input type="hidden" name="isPortal" value={isPortal ? "true" : "false"} />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#0B1B3D" }}>Confirm Booking</h2>
            <button type="button" onClick={() => setStep("time")} style={{ fontSize: "0.8125rem", color: "#6B7280", background: "none", border: "none", cursor: "pointer" }}>← Back</button>
          </div>

          {/* Summary */}
          <div style={{ padding: "1rem", background: "#F9FAFB", borderRadius: "0.5rem", marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", gap: "1rem", fontSize: "0.875rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#374151" }}>
                <Calendar style={{ width: "1rem", height: "1rem", color: "#6B7280" }} />
                {new Date(selectedDate).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#374151" }}>
                <Clock style={{ width: "1rem", height: "1rem", color: "#6B7280" }} />
                {selectedTime}
              </div>
            </div>
            <p style={{ fontSize: "0.8125rem", color: "#6B7280", marginTop: "0.5rem" }}>With {advisorName}</p>
          </div>

          {/* Contact details (public only) */}
          {!isPortal && (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "0.25rem" }}>First Name *</label>
                  <input type="text" name="firstName" required defaultValue={clientName} style={{ width: "100%", padding: "0.625rem 0.75rem", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.875rem" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "0.25rem" }}>Last Name *</label>
                  <input type="text" name="lastName" required style={{ width: "100%", padding: "0.625rem 0.75rem", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.875rem" }} />
                </div>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "0.25rem" }}>Email *</label>
                <input type="email" name="email" required defaultValue={clientEmail} style={{ width: "100%", padding: "0.625rem 0.75rem", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.875rem" }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "0.25rem" }}>Phone</label>
                <input type="tel" name="phone" defaultValue={clientPhone} style={{ width: "100%", padding: "0.625rem 0.75rem", border: "1px solid #D1D5DB", borderRadius: "0.375rem", fontSize: "0.875rem" }} />
              </div>
            </div>
          )}

          <button type="submit" style={{ width: "100%", padding: "0.875rem", background: "#0B1B3D", color: "white", border: "none", borderRadius: "0.5rem", fontWeight: 700, fontSize: "1rem", cursor: "pointer" }}>
            Confirm Booking
          </button>
        </form>
      )}
    </div>
  );
}
