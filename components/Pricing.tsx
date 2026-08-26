"use client";

import React, { useState } from "react";
import { Check, Sparkles, ArrowRight, Zap, Briefcase, GraduationCap } from "lucide-react";

export default function Pricing() {
  const [pricingType, setPricingType] = useState<"agency" | "institute">("agency");

  const agencyPlans = [
    {
      name: "Starter Launchpad",
      price: "$350",
      period: "per project",
      desc: "Perfect for local retailers & single commercial vehicle dealerships launching their digital footprint.",
      popular: false,
      features: [
        "Complete 3D / 2D Vector Logo & Brand Identity",
        "Localized Google Business Profile Top-3 Ranking",
        "High-Speed Landing Page (Mobile First)",
        "3x High-CTR 4K YouTube / Social Thumbnails",
        "Direct WhatsApp Order / Inquiry Integration",
      ],
    },
    {
      name: "Growth & Mobility",
      price: "$850",
      period: "per project / campaign",
      desc: "Ideal for commercial vehicle distributors, engineering works, and scaling retail brands.",
      popular: true,
      features: [
        "Full-Stack Next.js 15 High-Speed Web Application",
        "Multi-Platform Paid Meta & TikTok Ad Campaign Setup",
        "10x High-CTR 4K Thumbnails & Video Commercial Edits",
        "Complete 3D Product & Corporate Identity Manual",
        "Speed-to-Lead 15-Minute Response Automation",
        "1 Month Dedicated Campaign Management & SEO",
      ],
    },
    {
      name: "Enterprise Dominance",
      price: "$1,850+",
      period: "custom package",
      desc: "Comprehensive market domination for industrial enterprises, immigration consultancies & auto mobility networks.",
      popular: false,
      features: [
        "Custom SaaS / Portal Architecture & API Integrations",
        "Full-Spectrum Viral Video & Short-Form Production",
        "National Google & YouTube Search Dominance",
        "Multi-Location Dealership Funnels & Lead CRM",
        "Dedicated Account Director & Priority Support",
        "Hostinger Cloud Deployment & 99.9% Uptime",
      ],
    },
  ];

  const institutePlans = [
    {
      name: "Graphic Design & 3D Branding",
      price: "Rs. 15,000",
      period: "8 Weeks Batch",
      desc: "Zero to Hero practical course covering Photoshop, Illustrator, and 3D mockups from scratch.",
      popular: true,
      features: [
        "Zero Prior Computer Knowledge Needed",
        "Photoshop Photo Manipulation & 4K Thumbnails",
        "Illustrator Vector Mastery & Logo Design",
        "3D Mockup Creation & Commercial Branding",
        "Upwork & Fiverr Profile Setup & Live Bidding",
        "Verified Certificate of Completion",
      ],
    },
    {
      name: "Digital Marketing & SEO",
      price: "Rs. 18,000",
      period: "10 Weeks Batch",
      desc: "Master paid Meta/TikTok advertising, Google SEO rankings, and high-ticket client acquisition.",
      popular: false,
      features: [
        "Meta Ads Manager (Facebook & Instagram) Mastery",
        "Search Engine Optimization (SEO) & Google Ranking",
        "TikTok Organic Viral Video Growth Strategy",
        "YouTube Channel Monetization & SEO",
        "Client Outreach Scripts & Contract Templates",
        "Verified Certificate & Mentorship",
      ],
    },
    {
      name: "Web Dev & Fast-Track Combo",
      price: "Rs. 25,000",
      period: "12 Weeks Intensive",
      desc: "Master modern web development (HTML, Tailwind CSS, React, Next.js) plus full freelancing mastery.",
      popular: false,
      features: [
        "HTML5, CSS3, Tailwind CSS & JavaScript",
        "React Components & Modern Next.js App Router",
        "Live Deployment on Hostinger & GitHub",
        "Building 5 Real Client Projects During Class",
        "International Payment Setup & Client Closing",
        "Lifetime Access to Community & Mentor Support",
      ],
    },
  ];

  const currentPlans = pricingType === "agency" ? agencyPlans : institutePlans;

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090D15] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-purple-light" />
            Transparent Investment
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Clear, Value-Driven <span className="text-gradient-purple">Packages</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Choose the perfect agency package to scale your business or select the institute batch that matches your career goals.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center mb-14">
          <div className="p-1.5 rounded-2xl bg-black/50 border border-white/10 flex items-center gap-1">
            <button
              onClick={() => setPricingType("agency")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                pricingType === "agency"
                  ? "bg-brand-purple text-white shadow-glow-purple"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Agency Client Packages</span>
            </button>
            <button
              onClick={() => setPricingType("institute")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                pricingType === "institute"
                  ? "bg-brand-cyan text-[#080B11] shadow-glow-cyan"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Institute Batch Fees</span>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`glass-card p-8 rounded-3xl relative flex flex-col justify-between border transition-all duration-300 ${
                plan.popular
                  ? "border-brand-purple shadow-glow-purple scale-105 z-10 bg-[#0F172A]/90"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-brand-purple to-pink-500 text-white shadow-lg">
                  🔥 Most Popular Choice
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  {plan.desc}
                </p>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="text-4xl font-black text-white">
                    {plan.price}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {plan.period}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <div className="p-0.5 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-brand-purple to-purple-600 hover:from-purple-500 hover:to-brand-purple text-white shadow-glow-purple"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                }`}
              >
                <span>{pricingType === "agency" ? "Select Agency Plan" : "Enroll in this Batch"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
