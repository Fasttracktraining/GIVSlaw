"use client";

import { useState } from "react";
import HeroBanner from "@/components/layout/HeroBanner";
import { Phone, Mail, MapPin } from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Contact",
    detail: "+4407354858895",
    href: "tel:+4407354858895",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "contact@givslaw.com",
    href: "mailto:contact@givslaw.com",
  },
  {
    icon: MapPin,
    title: "Address",
    detail:
      "Charterspace, Concorde Business Centre, Nottingham Road, Nottingham, NG7 7FF\nUnited Kingdom(UK)",
    href: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to API
    alert("Message sent! We will get back to you shortly.");
  };

  return (
    <>
      <HeroBanner
        title="Contact us"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Contact Us", href: "/contact" },
        ]}
      />

      {/* ─── CONTACT CARDS ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-8">
            {contactCards.map((card) => (
              <div key={card.title} className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-navy mx-auto flex items-center justify-center mb-5">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{card.title}</h3>
                {card.href ? (
                  <a
                    href={card.href}
                    className="text-gray-600 hover:text-gold transition-colors"
                  >
                    {card.detail}
                  </a>
                ) : (
                  <p className="text-gray-600 whitespace-pre-line">{card.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM ─── */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Text */}
            <div>
              <p className="section-label mb-3">Contact Information</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Please contact us if you have any questions:
              </h2>
              <p className="text-gray-600 leading-relaxed">
                For all your needs, feel free to reach out to us. Our expert team is
                ready to assist you with personalised solutions.
              </p>
            </div>

            {/* Right - Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-navy transition-colors"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="E.g. john@doe.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-navy transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+44 E.g. +1 300 400 5000"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-navy transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-navy transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3.5 bg-navy text-white font-semibold rounded hover:bg-navy-light transition-colors border-2 border-navy"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── MAP ─── */}
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2403.5!2d-1.1815!3d52.9625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c1e0e0e0e0e0%3A0x0!2sCharterspace%2C+Concorde+Business+Centre!5e0!3m2!1sen!2suk!4v1"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
          title="GIVS Law Office Location"
        />
      </section>
    </>
  );
}
