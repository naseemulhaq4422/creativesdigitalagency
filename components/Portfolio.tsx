"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  ExternalLink, 
  Tag, 
  Briefcase, 
  CheckCircle2, 
  X, 
  ArrowRight,
  Eye
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: "Commercial Vehicles & Mobility" | "Industrial & Engineering" | "Retail & FMCG" | "Web & Branding";
  description: string;
  image: string;
  tags: string[];
  deliverables: string[];
  results: string;
  badge?: string;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    "All",
    "Commercial Vehicles & Mobility",
    "Industrial & Engineering",
    "Retail & FMCG",
    "Web & Branding",
  ];

  const projects: ProjectItem[] = [
    {
      id: "sazgar-roadprince",
      title: "Sazgar & Road Prince 200cc Loader Campaign",
      client: "Sazgar & Road Prince Authorized Dealers",
      category: "Commercial Vehicles & Mobility",
      description: "Viral social media growth campaign, high-converting promotional video edits, and custom 4K CTR YouTube thumbnails that generated over 250+ direct buyer leads within 30 days.",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
      tags: ["Commercial Vehicles", "4K Thumbnails", "Video Marketing", "Lead Generation"],
      deliverables: [
        "Custom 4K High-CTR YouTube Thumbnails",
        "Viral TikTok & Facebook Video Commercials",
        "Targeted Meta Ads Lead Generation Funnel",
        "Dealer Location Search & Outreach Kit",
      ],
      results: "250+ Direct Showroom Buyer Leads & 450k+ Organic Views",
      badge: "🚀 250+ Leads Generated",
    },
    {
      id: "tariq-autos",
      title: "Tariq Autos Electric Mobility Scooters",
      client: "Tariq Autos & EV Mobility",
      category: "Commercial Vehicles & Mobility",
      description: "Comprehensive brand launch package including modern logo identity, social media visual assets, spec-sheet 3D infographics, and targeted digital advertising for new electric scooters.",
      image: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?q=80&w=1200&auto=format&fit=crop",
      tags: ["Electric Scooters", "Brand Identity", "Social Assets", "Ad Launch"],
      deliverables: [
        "Modern Brand Identity & Vector Logo",
        "Social Media Launch Kit (Reels & Posts)",
        "3D EV Spec-Sheet Infographics",
        "Meta & Google Ad Campaign Funnel",
      ],
      results: "180% Increase in Showroom Footfall & Inquiries",
      badge: "⚡ Brand Launch Winner",
    },
    {
      id: "ros-engineering",
      title: "ROS Engineering Works 3D Brand & Web",
      client: "ROS Engineering Works",
      category: "Industrial & Engineering",
      description: "Custom 3D structural logo design, engineering corporate identity manual, industrial project portfolio, and responsive high-speed corporate web portal.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      tags: ["Industrial", "3D Logo Design", "Corporate Identity", "Web Portal"],
      deliverables: [
        "3D Structural Logo & Corporate Guidelines",
        "Full-Stack Corporate Web Portal",
        "High-Resolution Industrial Product Catalog",
        "Corporate Stationery & Print Collateral",
      ],
      results: "Elevated Brand Authority & Landed 4 Enterprise Contracts",
      badge: "🏆 3D Brand Identity",
    },
    {
      id: "frostys-retail",
      title: "Frosty's Ice Cream & Perfume Retailers",
      client: "Frosty's Retail Brands",
      category: "Retail & FMCG",
      description: "Localized Google Business top ranking strategy, 4K high-definition product imagery, festive promotion banners, and social engagement funnels that boosted walk-in customers by 85%.",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1200&auto=format&fit=crop",
      tags: ["Retail & FMCG", "Google Business SEO", "4K Product Imagery", "Social Ads"],
      deliverables: [
        "Local Google Business Profile #1 Ranking",
        "4K Product Photography & Retouching",
        "Festive Social Promotion Banners",
        "Customer Review & Loyalty Strategy",
      ],
      results: "85% Growth in Local Walk-in Footfall",
      badge: "⭐ #1 Local SEO Rank",
    },
    {
      id: "mci-consultancy",
      title: "MCI Consultancy & Global Visa Portal",
      client: "Multichoice Immigration Consultancy",
      category: "Web & Branding",
      description: "High-performance immigration portal with appointment scheduling, lead qualification funnel, elegant glassmorphic corporate UI, and full-scale SEO audit.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      tags: ["Corporate Portal", "UI/UX Design", "Lead Funnel", "SEO Strategy"],
      deliverables: [
        "Next.js High-Performance Corporate Website",
        "Automated Client Appointment Booking System",
        "Complete Brand Manual & Pitch Decks",
        "Search Engine Optimization & Authority Backlinks",
      ],
      results: "3.2x Lead Volume & Sub-Second Page Load Speed",
      badge: "🌐 Lightning Fast Web",
    },
    {
      id: "hanif-autos",
      title: "Hanif Autos Spares & Industrial Parts",
      client: "Hanif Autos Commercial Spares",
      category: "Industrial & Engineering",
      description: "Digital spare parts catalog, localized search engine optimization, and direct WhatsApp ordering system for commercial automotive spare parts buyers.",
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1200&auto=format&fit=crop",
      tags: ["Automotive Parts", "Digital Catalog", "Local SEO", "WhatsApp Ordering"],
      deliverables: [
        "Digital Spare Parts Showcase Catalog",
        "1-Click Direct WhatsApp Ordering System",
        "Targeted Local Google Search Dominance",
        "B2B Commercial Buyer Outreach Campaign",
      ],
      results: "Over 300+ WhatsApp Spare Parts Inquiries Monthly",
      badge: "💬 Direct WhatsApp Funnel",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080B11] relative">
      {/* Background ambient lighting */}
      <div className="ambient-glow-cyan top-10 left-10 opacity-20" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            Proven Case Studies
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Work & Portfolio</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Real projects delivered for commercial vehicle mobility, engineering industries, retail brands, and tech enterprises.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-brand-purple to-brand-cyan text-white shadow-glow-sm-purple scale-105"
                  : "bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer group glass-card-hover flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D131F] via-transparent to-black/40" />

                {/* Badge */}
                {project.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold bg-[#080B11]/80 backdrop-blur-md border border-white/10 text-brand-cyan">
                    {project.badge}
                  </div>
                )}

                {/* Quick View Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#080B11]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-brand-cyan" />
                </div>

                {/* Category tag */}
                <div className="absolute bottom-3 left-4 text-[11px] font-semibold text-brand-purple-light uppercase tracking-wider">
                  {project.category}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan-light transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-slate-400 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Details Link */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs font-semibold text-brand-cyan group-hover:text-brand-cyan-light">
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Popup */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-card border border-white/15 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-xs uppercase font-bold tracking-wider text-brand-cyan block mb-1">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedProject.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-slate-400 mt-2">
                <Briefcase className="w-3.5 h-3.5 text-brand-purple" />
                <span>Client: {selectedProject.client}</span>
              </div>
            </div>

            {/* Modal Image */}
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 bg-slate-900">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Overview */}
            <div className="mb-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-2">
                Project Overview
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Key Deliverables */}
            <div className="mb-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">
                Key Deliverables & Execution
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProject.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-200 p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Results Highlight */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/40 to-cyan-950/40 border border-brand-purple/30 mb-8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-cyan block mb-1">
                Measured Results & Impact
              </span>
              <p className="text-sm font-extrabold text-white">
                {selectedProject.results}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="flex-1 py-3.5 px-6 rounded-xl text-center text-xs font-bold text-white bg-gradient-to-r from-brand-purple to-purple-600 shadow-glow-purple hover:from-purple-500 hover:to-brand-purple transition-all"
              >
                Start a Similar Project for Your Brand
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="py-3.5 px-6 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
