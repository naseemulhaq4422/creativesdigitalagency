"use client";

import React, { useState } from "react";
import { Star, Quote, CheckCircle, Sparkles, Building2, GraduationCap } from "lucide-react";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  type: "client" | "student";
  content: string;
  rating: number;
  badge: string;
}

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState<"all" | "client" | "student">("all");

  const testimonials: TestimonialItem[] = [
    {
      id: "tariq-autos",
      name: "Muhammad Tariq",
      role: "Managing Director",
      company: "Tariq Autos & EV Mobility",
      type: "client",
      content: "Creatives Digital Agency transformed our commercial vehicle brand visibility completely! Their 4K promotional graphics and targeted digital campaigns brought dozens of direct showroom buyers.",
      rating: 5,
      badge: "Commercial Client",
    },
    {
      id: "hamza-shafiq",
      name: "Hamza Shafiq",
      role: "Student Graduate (Batch 3)",
      company: "Freelance Graphic Designer & Marketer",
      type: "student",
      content: "I joined the institute with zero tech knowledge. The step-by-step guidance took me from absolute scratch to landing my first international clients on Upwork. Highly recommended for beginners!",
      rating: 5,
      badge: "Institute Graduate",
    },
    {
      id: "ros-eng",
      name: "Engr. Rashid Usman",
      role: "CEO & Founder",
      company: "ROS Engineering Works",
      type: "client",
      content: "The 3D structural logo and corporate branding developed by Creatives Digital Agency exceeded our highest expectations. It elevated our market stature among industrial contractors.",
      rating: 5,
      badge: "Industrial Partner",
    },
    {
      id: "ayesha-malik",
      name: "Ayesha Malik",
      role: "Student Graduate (Batch 4)",
      company: "Social Media Manager",
      type: "student",
      content: "Before joining the institute, I didn't even know how social media ads worked. The instructors taught everything in simple, practical Urdu/English. Today I manage accounts for 3 local brands!",
      rating: 5,
      badge: "Institute Graduate",
    },
  ];

  const filteredTestimonials =
    activeTab === "all"
      ? testimonials
      : testimonials.filter((t) => t.type === activeTab);

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080B11] relative">
      {/* Background ambient lighting */}
      <div className="ambient-glow-purple top-1/2 left-1/4 opacity-15" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-purple-light" />
            Real Impact & Feedback
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Client Reviews & <span className="text-gradient-purple">Student Success</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Discover how we deliver high-impact results for commercial businesses and transform ambitious students into earning professionals.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "all"
                ? "bg-gradient-to-r from-brand-purple to-brand-cyan text-white shadow-glow-sm-purple"
                : "bg-white/5 border border-white/10 text-slate-400 hover:text-white"
            }`}
          >
            All Stories
          </button>
          <button
            onClick={() => setActiveTab("client")}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "client"
                ? "bg-brand-purple text-white shadow-glow-purple"
                : "bg-white/5 border border-white/10 text-slate-400 hover:text-white"
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            Agency Clients
          </button>
          <button
            onClick={() => setActiveTab("student")}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "student"
                ? "bg-brand-cyan text-[#080B11] shadow-glow-cyan"
                : "bg-white/5 border border-white/10 text-slate-400 hover:text-white"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            Institute Students
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="glass-card p-8 rounded-2xl relative flex flex-col justify-between border border-white/10 hover:border-brand-purple/40 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-bold border ${
                      item.type === "client"
                        ? "bg-brand-purple/15 text-brand-purple-light border-brand-purple/30"
                        : "bg-brand-cyan/15 text-brand-cyan border-brand-cyan/30"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Quote Body */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic mb-8 relative">
                  <Quote className="w-8 h-8 text-white/5 absolute -top-4 -left-3 pointer-events-none" />
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center justify-between pt-5 border-t border-white/10">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-cyan flex items-center justify-center font-bold text-white text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{item.name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    </h4>
                    <span className="text-xs text-slate-400 block">
                      {item.role} &bull; <strong className="text-slate-300 font-medium">{item.company}</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
