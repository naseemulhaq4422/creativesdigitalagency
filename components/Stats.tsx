"use client";

import React from "react";
import { Award, Users, CheckCircle, Globe2, Sparkles } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  subtext: string;
  icon: React.ReactNode;
  accent: "purple" | "cyan" | "pink" | "emerald";
}

export default function Stats() {
  const stats: StatItem[] = [
    {
      value: "150+",
      label: "Projects Delivered",
      subtext: "Successfully completed for commercial, industrial & retail clients.",
      icon: <CheckCircle className="w-6 h-6 text-brand-purple" />,
      accent: "purple",
    },
    {
      value: "99%",
      label: "Client Satisfaction",
      subtext: "Unmatched quality, high-speed execution & proven return on investment.",
      icon: <Award className="w-6 h-6 text-brand-cyan" />,
      accent: "cyan",
    },
    {
      value: "500+",
      label: "Students Trained",
      subtext: "Absolute beginners turned into confident, earning tech professionals.",
      icon: <Users className="w-6 h-6 text-pink-400" />,
      accent: "pink",
    },
    {
      value: "15+",
      label: "Global Tech Partners",
      subtext: "Enterprise tools, hosting networks & digital advertising ecosystems.",
      icon: <Globe2 className="w-6 h-6 text-emerald-400" />,
      accent: "emerald",
    },
  ];

  return (
    <section id="stats" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080B11] relative">
      {/* Background ambient lighting */}
      <div className="ambient-glow-cyan left-1/3 bottom-0 opacity-15" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Numbers That Speak for Our <span className="text-gradient-purple">Excellence</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            From scaling enterprise brands to transforming absolute beginners into independent earners, here is what we have achieved together.
          </p>
        </div>

        {/* Stats Grid with Safe Array Handling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.isArray(stats) && stats.length > 0 &&
            stats.map((stat, idx) => (
              <div
                key={idx}
                className={`glass-card p-7 rounded-2xl relative overflow-hidden transition-all duration-300 ${
                  stat.accent === "purple"
                    ? "hover:border-brand-purple/50 hover:shadow-glow-purple"
                    : stat.accent === "cyan"
                    ? "hover:border-brand-cyan/50 hover:shadow-glow-cyan"
                    : stat.accent === "pink"
                    ? "hover:border-pink-500/50 hover:shadow-[0_0_35px_-5px_rgba(236,72,153,0.3)]"
                    : "hover:border-emerald-500/50 hover:shadow-[0_0_35px_-5px_rgba(16,185,129,0.3)]"
                } transform hover:-translate-y-1`}
              >
                {/* Corner accent glow */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-20 pointer-events-none ${
                    stat.accent === "purple"
                      ? "bg-brand-purple"
                      : stat.accent === "cyan"
                      ? "bg-brand-cyan"
                      : stat.accent === "pink"
                      ? "bg-pink-500"
                      : "bg-emerald-500"
                  }`}
                />

                <div className="flex items-center justify-between mb-4">
                  <span className="p-3 rounded-xl bg-white/5 border border-white/10">
                    {stat.icon}
                  </span>
                  <span className="text-xs font-mono font-medium text-slate-500">
                    0{idx + 1}
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-2 font-mono">
                  <span
                    className={
                      stat.accent === "purple"
                        ? "text-gradient-purple"
                        : stat.accent === "cyan"
                        ? "text-gradient-cyan"
                        : stat.accent === "pink"
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400"
                        : "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400"
                    }
                  >
                    {stat.value}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1.5">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
