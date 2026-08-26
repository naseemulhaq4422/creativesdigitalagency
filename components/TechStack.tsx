"use client";

import React from "react";

export default function TechStack() {
  const tools = [
    { name: "Next.js", category: "Full-Stack Web" },
    { name: "React", category: "UI Architecture" },
    { name: "TypeScript", category: "Type Safety" },
    { name: "Tailwind CSS", category: "Modern Styling" },
    { name: "Supabase & Postgres", category: "Database Layer" },
    { name: "Figma", category: "UI/UX & Systems" },
    { name: "Adobe Photoshop", category: "4K Visuals & Thumbnails" },
    { name: "Adobe Illustrator", category: "3D & Vector Logos" },
    { name: "Hostinger Cloud", category: "High-Speed Hosting" },
    { name: "Meta Ads Manager", category: "Paid Growth" },
    { name: "Google SEO", category: "Search Ranking" },
    { name: "YouTube Analytics", category: "CTR Optimization" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#070A0F] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs uppercase font-bold tracking-widest text-slate-500">
            Powered by Enterprise-Grade Technologies & Marketing Stacks
          </p>
        </div>

        {/* Tools Grid with Safe Array Handling */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.isArray(tools) && tools.length > 0 &&
            tools.map((tool, idx) => (
              <div
                key={idx}
                className="glass-card p-4 rounded-xl text-center border border-white/5 hover:border-brand-purple/30 transition-all duration-200 group"
              >
                <div className="text-xs font-extrabold text-slate-200 group-hover:text-brand-cyan transition-colors">
                  {tool.name}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  {tool.category}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
