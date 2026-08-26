"use client";

import React, { useState } from "react";
import { 
  Send, 
  Sparkles, 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle,
  Briefcase,
  GraduationCap
} from "lucide-react";

export default function ContactSection() {
  const [formType, setFormType] = useState<"agency" | "institute">("agency");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Digital Marketing & SEO",
    budgetOrBatch: "$500 - $1,500",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const agencyServices = [
    "Digital Marketing & SEO",
    "Web & App Development",
    "Branding & 3D Logo Design",
    "Social Media & Video Production",
    "UI/UX & Product Design",
    "E-Commerce & Digital Store",
  ];

  const instituteCourses = [
    "Graphic Design & 3D Branding Mastery",
    "Digital & Social Media Marketing",
    "Full-Stack Web Development Fundamentals",
    "Freelancing & International Client Mastery",
  ];

  const handleTypeChange = (type: "agency" | "institute") => {
    setFormType(type);
    setFormData((prev) => ({
      ...prev,
      interest: type === "agency" ? agencyServices[0] : instituteCourses[0],
      budgetOrBatch: type === "agency" ? "$500 - $1,500" : "Next Upcoming Batch (1st of Month)",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          type: formType === "agency" ? "agency_quote" : "institute_enrollment",
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit inquiry. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please message us on WhatsApp directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080B11] relative">
      {/* Background ambient lighting */}
      <div className="ambient-glow-purple top-20 right-1/4 opacity-25" />
      <div className="ambient-glow-cyan bottom-10 left-10 opacity-20" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/50 border border-brand-purple/40 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-glow-sm-purple">
            <Sparkles className="w-4 h-4 text-brand-purple-light" />
            Conversion & Contact Hub
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Ready to <span className="text-gradient-primary">Get Started?</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Request a free custom project proposal for your brand, or reserve your seat for the upcoming institute batch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Side: Interactive Lead Capture Form */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
            {/* Toggle Form Mode */}
            <div className="flex items-center p-1.5 rounded-2xl bg-black/40 border border-white/10 mb-8">
              <button
                type="button"
                onClick={() => handleTypeChange("agency")}
                className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                  formType === "agency"
                    ? "bg-gradient-to-r from-brand-purple to-purple-600 text-white shadow-glow-purple"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Agency Quote Request</span>
              </button>
              <button
                type="button"
                onClick={() => handleTypeChange("institute")}
                className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                  formType === "institute"
                    ? "bg-gradient-to-r from-brand-cyan to-blue-600 text-[#080B11] shadow-glow-cyan"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Institute Admission</span>
              </button>
            </div>

            {submitted ? (
              <div className="p-8 text-center rounded-2xl bg-emerald-950/30 border border-emerald-500/40 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-2">
                  Inquiry Received Successfully!
                </h3>
                <p className="text-slate-300 text-sm mb-6">
                  Thank you! Our senior team will review your requirements and reach out within 15 minutes.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      interest: formType === "agency" ? agencyServices[0] : instituteCourses[0],
                      budgetOrBatch: "",
                      message: "",
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Naseem"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +92 300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. yourname@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {formType === "agency" ? "Interested Agency Service" : "Interested Course"}
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm bg-[#0F172A]"
                    >
                      {(formType === "agency" ? agencyServices : instituteCourses).map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0D131F] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {formType === "agency" ? "Estimated Budget Tier" : "Preferred Batch Timing"}
                    </label>
                    <select
                      value={formData.budgetOrBatch}
                      onChange={(e) => setFormData({ ...formData, budgetOrBatch: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm bg-[#0F172A]"
                    >
                      {formType === "agency" ? (
                        <>
                          <option value="Under $500" className="bg-[#0D131F] text-white">Under $500 (Starter)</option>
                          <option value="$500 - $1,500" className="bg-[#0D131F] text-white">$500 - $1,500 (Growth)</option>
                          <option value="$1,500 - $5,000+" className="bg-[#0D131F] text-white">$1,500 - $5,000+ (Enterprise)</option>
                        </>
                      ) : (
                        <>
                          <option value="Next Batch (1st of Month)" className="bg-[#0D131F] text-white">Next Batch (1st of Month)</option>
                          <option value="Weekend Batch" className="bg-[#0D131F] text-white">Weekend Only Batch</option>
                          <option value="1-on-1 Fast Track" className="bg-[#0D131F] text-white">1-on-1 Fast Track Mentorship</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Project Requirements or Learning Goals *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={
                      formType === "agency"
                        ? "Describe your business goals, target audience, and key deliverables..."
                        : "Tell us a bit about yourself and what you hope to achieve through this course..."
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                    formType === "agency"
                      ? "bg-gradient-to-r from-brand-purple to-purple-600 hover:from-purple-500 hover:to-brand-purple text-white shadow-glow-purple"
                      : "bg-gradient-to-r from-brand-cyan to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-[#080B11] shadow-glow-cyan"
                  } ${loading ? "opacity-75 cursor-not-allowed" : "hover:scale-[1.01]"}`}
                >
                  {loading ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>
                        {formType === "agency" ? "Get Free Agency Proposal" : "Submit Admission Request"}
                      </span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Side: Speed-to-Lead Guarantee & Direct Contact */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Speed to Lead Card */}
            <div className="glass-card p-7 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 to-transparent">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold text-emerald-400 tracking-wider block">
                    Speed-to-Lead Guarantee
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    15-Minute Direct Response
                  </h3>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We believe in momentum. When you reach out, our senior technical advisors respond immediately without bureaucratic delays.
              </p>
            </div>

            {/* Direct WhatsApp Quick Chat Card */}
            <div className="glass-card p-7 rounded-3xl border border-brand-cyan/30">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-brand-cyan" />
                <span>Prefer Instant WhatsApp Chat?</span>
              </h3>
              <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                Skip the form! Connect directly with our team lead on WhatsApp for instant answers, portfolio samples, or batch enrollment.
              </p>

              <a
                href="https://wa.me/923000000000?text=Hello%20Creatives%20Digital%20Agency,%20I%20want%20to%20discuss%20a%20project%20or%20course!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black shadow-lg transition-transform hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>Chat on WhatsApp Directly</span>
              </a>
            </div>

            {/* Contact Info Card */}
            <div className="glass-card p-7 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-start gap-3 text-xs text-slate-300">
                <Mail className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Email Support</span>
                  <span className="text-slate-400">contact@creativesdigitalagency.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Office Working Hours</span>
                  <span className="text-slate-400">Monday &ndash; Saturday: 9:00 AM &ndash; 10:00 PM PKT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
