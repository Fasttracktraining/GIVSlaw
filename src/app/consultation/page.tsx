"use client";

import { useState } from "react";
import HeroBanner from "@/components/layout/HeroBanner";
import { CheckCircle2 } from "lucide-react";

const serviceOptions = [
  "Individual and Family Immigration",
  "Working in the UK",
  "British Citizenship",
  "Corporate Immigration",
  "Investing in the UK",
  "Business Visitor Visa",
  "Sponsor License Renewal",
  "Other",
];

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to API / booking system
    alert("Thank you! Your consultation request has been submitted. We will contact you shortly.");
  };

  return (
    <>
      <HeroBanner
        title="Get A Free Consultation"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Consultation", href: "/consultation" },
        ]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Why Book */}
            <div>
              <p className="section-label mb-3">Book Your Consultation</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Start your immigration journey today
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our expert immigration consultants are ready to assess your case and
                provide personalised advice. Book a free initial consultation to
                discuss your options.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Free initial assessment of your immigration case</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Expert advice from registered immigration consultants</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Clear next steps and transparent pricing</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Consultations available online, by phone, or in person</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Confidential and no obligation</span>
                </li>
              </ul>
            </div>

            {/* Right - Form */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-navy mb-6">Request a Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-1">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-navy transition-colors"
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-1">
                    Tell us about your case
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-navy transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3.5 bg-navy text-white font-semibold rounded hover:bg-navy-light transition-colors"
                >
                  Submit Consultation Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
