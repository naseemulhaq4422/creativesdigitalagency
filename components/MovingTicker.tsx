"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function MovingTicker() {
  const tickerItems = [
    "CREATIVES DIGITAL AGENCY & INSTITUTE",
    "UI/UX & PRODUCT DESIGN",
    "3D LOGO & BRAND IDENTITY",
    "FULL-STACK WEB & NEXT.JS",
    "HIGH-CTR 4K THUMBNAILS",
    "ZERO TO HERO TECH COURSES",
    "COMMERCIAL VEHICLES & MOBILITY",
    "15-MIN SPEED-TO-LEAD",
    "FREELANCING & EARNING MASTERY",
  ];

  return (
    <div className="relative py-6 bg-[#06080D] border-y border-white/10 overflow-hidden select-none">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 via-brand-cyan/10 to-brand-purple/10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="flex w-max animate-marquee space-x-8 items-center">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-6 text-xs sm:text-sm font-extrabold tracking-widest uppercase">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-400 hover:text-brand-cyan transition-colors">
              {item}
            </span>
            <span className="text-brand-cyan">✦</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
