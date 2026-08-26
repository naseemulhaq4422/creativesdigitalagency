"use client";

import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowUpRight, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  GraduationCap,
  Briefcase
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05070B] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative text-slate-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Col 1 & 2: Agency Branding */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-cyan p-[1px] shadow-glow-sm-purple">
                <div className="w-full h-full bg-[#080B11] rounded-[11px] flex items-center justify-center">
                  <span className="font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-br from-brand-cyan to-brand-purple">
                    C
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-black tracking-wider text-lg text-white">
                  CREATIVES
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400 -mt-1">
                  Digital Agency & Institute
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              We engineer high-converting digital marketing campaigns, lightning-fast web applications, and distinctive 3D branding, while empowering absolute beginners to master tech from scratch.
            </p>

            {/* Subdomain Quick Portals */}
            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href="https://institute.creativesdigitalagency.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 text-[11px] font-semibold text-brand-cyan hover:bg-brand-cyan/20 transition-colors"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>institute.creativesdigitalagency.com</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href="https://app.creativesdigitalagency.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-purple/10 border border-brand-purple/30 text-[11px] font-semibold text-brand-purple-light hover:bg-brand-purple/20 transition-colors"
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>app.creativesdigitalagency.com</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 3: Agency Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Agency Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Digital Marketing & SEO</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Web & App Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">3D Logo & Brand Identity</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Social Media Viral Edits</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX Product Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial Spare Parts SEO</a></li>
            </ul>
          </div>

          {/* Col 4: Institute Courses */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Institute Courses
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#institute" className="hover:text-white transition-colors">Graphic Design & 3D Branding</a></li>
              <li><a href="#institute" className="hover:text-white transition-colors">Digital & Social Media Marketing</a></li>
              <li><a href="#institute" className="hover:text-white transition-colors">Web Development Fundamentals</a></li>
              <li><a href="#institute" className="hover:text-white transition-colors">Freelancing & Client Closing</a></li>
              <li><a href="#institute" className="hover:text-white transition-colors">Zero-to-Hero Fast Track</a></li>
            </ul>
          </div>

          {/* Col 5: Quick Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
                <span className="text-slate-300 truncate">contact@creativesdigitalagency.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-purple flex-shrink-0" />
                <span className="text-slate-300">WhatsApp 24/7 Available</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-300">creativesdigitalagency.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Creatives Digital Agency & Institute. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-slate-400 transition-colors">Get Proposal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
