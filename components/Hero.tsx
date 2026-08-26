"use client";

import React from "react";
import { ArrowRight, Sparkles, GraduationCap, CheckCircle2, ShieldCheck, Zap, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#080B11]">
      {/* Background Ambient Mesh Lights */}
      <div className="ambient-glow-purple top-10 left-1/4 -translate-x-1/2 opacity-30 animate-pulse-slow" />
      <div className="ambient-glow-cyan top-40 right-10 opacity-25 animate-pulse-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-glow-sm-purple animate-float-slow">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="tracking-wide">Accepting Q3 Projects & New Institute Batch</span>
          <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
          <span className="text-gradient-purple block sm:inline">Build Your Brand.</span>{" "}
          <span className="block mt-2 sm:mt-0">
            Start Your Career{" "}
            <span className="text-gradient-cyan">from Zero.</span>
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-10 text-balance">
          Partner with our premium agency for high-end digital solutions, or join our institute to learn in-demand tech skills from absolute scratch—no prior experience needed.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
          {/* Button 1: Get a Free Quote (Agency) */}
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white rounded-xl bg-gradient-to-r from-brand-purple via-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-glow-purple transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Button 2: Explore Institute Courses */}
          <a
            href="#institute"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-brand-cyan-light rounded-xl border-2 border-brand-cyan/60 hover:bg-brand-cyan/10 hover:border-brand-cyan backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-glow-sm-cyan"
          >
            <GraduationCap className="w-5 h-5 text-brand-cyan" />
            <span>Explore Institute Courses</span>
          </a>
        </div>

        {/* Quick Highlights / Trust Pills */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="glass-card p-3.5 rounded-xl flex items-center gap-3">
            <div className="p-2 rounded-lg bg-brand-purple/10 text-brand-purple">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">4K Creative Visuals</div>
              <div className="text-[11px] text-slate-400">High-CTR Graphics</div>
            </div>
          </div>

          <div className="glass-card p-3.5 rounded-xl flex items-center gap-3">
            <div className="p-2 rounded-lg bg-brand-cyan/10 text-brand-cyan">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Zero to Hero</div>
              <div className="text-[11px] text-slate-400">No Prior Tech Needed</div>
            </div>
          </div>

          <div className="glass-card p-3.5 rounded-xl flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Fast Turnaround</div>
              <div className="text-[11px] text-slate-400">Speed-to-Lead Rule</div>
            </div>
          </div>

          <div className="glass-card p-3.5 rounded-xl flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">99% Satisfaction</div>
              <div className="text-[11px] text-slate-400">Proven ROI Results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
