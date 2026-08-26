"use client";

import React from "react";
import { Search, Compass, Code, Rocket, Sparkles, ArrowRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Strategy",
      desc: "We analyze your target market, competitor gaps, audience avatars, or learning goals to build a clear, measurable roadmap.",
      icon: <Search className="w-5 h-5 text-brand-purple" />,
      accent: "purple",
    },
    {
      num: "02",
      title: "Design & Prototyping",
      desc: "Creating bespoke 3D brand assets, high-converting 4K visuals, intuitive Figma wireframes, or step-by-step course lessons.",
      icon: <Compass className="w-5 h-5 text-brand-cyan" />,
      accent: "cyan",
    },
    {
      num: "03",
      title: "Development & Execution",
      desc: "Writing lightning-fast Next.js code, launching viral ad campaigns, or conducting live 1-on-1 practical training sessions.",
      icon: <Code className="w-5 h-5 text-pink-400" />,
      accent: "pink",
    },
    {
      num: "04",
      title: "Launch & Scaling",
      desc: "Deploying to production on Hostinger, monitoring lead conversions, optimizing ROI, and guiding graduates to client contracts.",
      icon: <Rocket className="w-5 h-5 text-emerald-400" />,
      accent: "emerald",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080B11] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            Execution Roadmap
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            How We Deliver <span className="text-gradient-purple">Proven Results</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Our systematic 4-step framework guarantees precision execution for client projects and transformative learning for students.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="glass-card p-7 rounded-2xl relative flex flex-col justify-between border border-white/10 hover:border-brand-purple/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="p-3 rounded-xl bg-white/5 border border-white/10">
                    {step.icon}
                  </span>
                  <span className="text-3xl font-black font-mono text-white/20">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-white/20">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
