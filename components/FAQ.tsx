"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do I need any prior computer or coding knowledge to join the Institute?",
      a: "No! Absolutely zero background is needed. Our courses are specifically designed for absolute beginners. We teach everything step-by-step in simple Urdu and English, starting from the very basics to advanced professional client projects.",
    },
    {
      q: "How fast can you deliver an Agency project (Web Dev, SEO, 3D Branding)?",
      a: "Our speed-to-lead and agile delivery framework allows us to deliver high-converting landing pages, brand identities, and 4K promotional graphics in as little as 3 to 7 business days, while enterprise portals and custom SaaS web applications take 2 to 3 weeks.",
    },
    {
      q: "Do you provide practical freelancing mentorship in the courses?",
      a: "Yes! Every single course at Creatives Institute includes our dedicated Freelancing & Client Acquisition Masterclass. We help you create and rank your Upwork & Fiverr profiles, write winning proposals, and close international high-paying clients.",
    },
    {
      q: "How does the Speed-to-Lead 15-Minute Response guarantee work?",
      a: "Whenever you submit a quote request on our website or message us on WhatsApp, our technical lead reviews your requirements and responds within 15 minutes during business hours with initial feedback and a tailored strategy.",
    },
    {
      q: "Can you manage our commercial vehicle / showroom marketing on retainer?",
      a: "Yes! We specialize in commercial automotive & engineering mobility (Rickshaw loaders, electric scooters, spare parts). We handle monthly video shoots, viral 4K thumbnails, Meta ads funnels, and local Google search rankings to generate continuous showroom buyer leads.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080B11] relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-brand-cyan" />
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Frequently Asked <span className="text-gradient-cyan">Questions</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our digital agency services, training curriculum, and client onboarding process.
          </p>
        </div>

        {/* Accordion List with Safe Array Handling */}
        <div className="space-y-4">
          {Array.isArray(faqs) && faqs.length > 0 &&
            faqs.map((faq, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base font-bold text-white">
                    {faq.q}
                  </span>
                  <div className="p-2 rounded-xl bg-white/5 text-brand-cyan flex-shrink-0">
                    {openIndex === idx ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </button>

                {openIndex === idx && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
