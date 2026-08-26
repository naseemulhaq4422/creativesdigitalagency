"use client";

import React, { useState } from "react";
import { 
  TrendingUp, 
  Code2, 
  Palette, 
  Video, 
  Layers, 
  ShoppingBag, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  popular?: boolean;
  features: string[];
  gradient: "purple" | "cyan" | "pink";
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services: ServiceItem[] = [
    {
      id: "seo-marketing",
      title: "Digital Marketing & SEO",
      category: "Growth & Traffic",
      description: "Dominant search engine rankings and multi-platform viral growth across YouTube, TikTok, and Facebook powered by high-CTR 4K thumbnails.",
      icon: <TrendingUp className="w-6 h-6 text-brand-purple" />,
      popular: true,
      features: [
        "Full-Spectrum Search Engine Optimization (SEO)",
        "YouTube Channel Optimization & 4K CTR Thumbnails",
        "Targeted Meta (Facebook & Instagram) Paid Ads",
        "Local Google Business Profile Top-3 Ranking",
        "Conversion Funnels & Retargeting Setup",
      ],
      gradient: "purple",
    },
    {
      id: "web-dev",
      title: "Web & App Development",
      category: "Engineering & SaaS",
      description: "Full-stack development, modern SaaS architecture, and lightning-fast web applications built on Next.js, React, and robust APIs.",
      icon: <Code2 className="w-6 h-6 text-brand-cyan" />,
      popular: true,
      features: [
        "Custom Next.js 15 & React High-Speed Applications",
        "Full-Stack Web Portals & Custom CMS",
        "Mobile-First Responsive UI with Glassmorphism",
        "Hostinger & Cloud Deployments with 99.9% Uptime",
        "Database Architecture & API Integration",
      ],
      gradient: "cyan",
    },
    {
      id: "branding-3d",
      title: "Branding & 3D Design",
      category: "Visual Identity",
      description: "Custom 3D logos, corporate identity systems, vector graphics, and commercial marketing visuals that make your brand unmistakable.",
      icon: <Palette className="w-6 h-6 text-pink-400" />,
      features: [
        "Custom 3D & 2D Vector Logo Design",
        "Complete Brand Guidelines & Typography",
        "Commercial 3D Product Mockups & Renders",
        "Marketing Collateral (Brochures, Banners, Cards)",
        "Social Media Brand Kit & Visual Presets",
      ],
      gradient: "pink",
    },
    {
      id: "video-content",
      title: "Social Media & Video Production",
      category: "Viral Content",
      description: "Captivating short-form edits (Reels, TikToks, Shorts), high-definition commercial promos, and video funnels that drive organic reach.",
      icon: <Video className="w-6 h-6 text-brand-purple" />,
      features: [
        "High-Retention YouTube & TikTok Video Editing",
        "Commercial Video Promos for Products & Services",
        "Custom Motion Graphics & Animated Intros",
        "Monthly Social Media Management & Posting Calendar",
        "Audience Engagement & Viral Scripts",
      ],
      gradient: "purple",
    },
    {
      id: "ui-ux",
      title: "UI/UX & Product Design",
      category: "Design Strategy",
      description: "User-centric interface design and intuitive interactive user journeys in Figma, crafted to maximize engagement and boost sales conversions.",
      icon: <Layers className="w-6 h-6 text-brand-cyan" />,
      features: [
        "Interactive Figma Wireframing & Prototyping",
        "Design Systems & Reusable Component Libraries",
        "Mobile App (iOS & Android) UI/UX Design",
        "SaaS Dashboard & Admin Portal Experience",
        "Conversion Rate Audit & User Flow Optimization",
      ],
      gradient: "cyan",
    },
    {
      id: "ecommerce",
      title: "E-Commerce & Digital Stores",
      category: "Online Sales",
      description: "Turn visitors into buyers with optimized checkout flows, inventory management, fast catalog load times, and custom shopping experiences.",
      icon: <ShoppingBag className="w-6 h-6 text-pink-400" />,
      features: [
        "Next.js / Shopify High-Speed Online Stores",
        "Direct WhatsApp Quick-Ordering Integration",
        "Automated Inventory & Multi-Currency Checkout",
        "Product Upselling & Cart Abandonment Recovery",
        "Localized Payment Gateways & Cash-on-Delivery",
      ],
      gradient: "pink",
    },
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080B11] relative">
      {/* Background ambient lighting */}
      <div className="ambient-glow-purple top-1/3 right-10 opacity-20" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-purple-light" />
            Agency Offerings
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            High-Impact Digital <span className="text-gradient-purple">Services</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            We engineer bespoke digital solutions that scale brand visibility, drive high-intent leads, and turn casual visitors into loyal paying customers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => (
            <div
              key={service.id}
              className={`glass-card p-8 rounded-2xl relative flex flex-col justify-between transition-all duration-300 ${
                service.gradient === "purple"
                  ? "hover:border-brand-purple/50 hover:shadow-glow-purple"
                  : service.gradient === "cyan"
                  ? "hover:border-brand-cyan/50 hover:shadow-glow-cyan"
                  : "hover:border-pink-500/50 hover:shadow-[0_0_35px_-5px_rgba(236,72,153,0.25)]"
              } transform hover:-translate-y-1`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-6 right-6 px-3 py-1 rounded-full text-[11px] font-bold bg-brand-purple/20 text-brand-purple-light border border-brand-purple/40">
                  🔥 Popular
                </div>
              )}

              <div>
                {/* Icon & Category */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                      {service.category}
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-8 pt-4 border-t border-white/5">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          service.gradient === "purple"
                            ? "text-brand-purple"
                            : service.gradient === "cyan"
                            ? "text-brand-cyan"
                            : "text-pink-400"
                        }`}
                      />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href="#contact"
                className={`w-full py-3 px-4 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 border transition-all duration-200 ${
                  service.gradient === "purple"
                    ? "bg-brand-purple/10 border-brand-purple/30 text-purple-200 hover:bg-brand-purple hover:text-white"
                    : service.gradient === "cyan"
                    ? "bg-brand-cyan/10 border-brand-cyan/30 text-cyan-200 hover:bg-brand-cyan hover:text-[#080B11]"
                    : "bg-pink-500/10 border-pink-500/30 text-pink-200 hover:bg-pink-500 hover:text-white"
                }`}
              >
                <span>Request {service.title.split("&")[0].trim()}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
