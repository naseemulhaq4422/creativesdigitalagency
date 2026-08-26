"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, GraduationCap, Briefcase } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Institute / Training", href: "#institute", isHighlight: true },
    { name: "Stats & Trust", href: "#stats" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "Contact Hub", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3.5 shadow-2xl"
          : "bg-background/80 backdrop-blur-md py-5 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-cyan p-[1px] shadow-glow-sm-purple transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#080B11] rounded-[11px] flex items-center justify-center">
                <span className="font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-br from-brand-cyan to-brand-purple">
                  C
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black tracking-wider text-base sm:text-lg text-white group-hover:text-brand-purple-light transition-colors">
                CREATIVES
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400 -mt-1">
                Digital Agency & Institute
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Safe Array Handling */}
          <nav className="hidden lg:flex items-center gap-7">
            {Array.isArray(navLinks) && navLinks.length > 0 &&
              navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-white ${
                    link.isHighlight
                      ? "text-brand-cyan flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 hover:bg-brand-cyan/20"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.isHighlight && <GraduationCap className="w-3.5 h-3.5 text-brand-cyan" />}
                  {link.name}
                </a>
              ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#institute"
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-brand-cyan rounded-lg border border-brand-cyan/50 hover:bg-brand-cyan/10 transition-all duration-200 shadow-sm"
            >
              <GraduationCap className="w-3.5 h-3.5 mr-1.5" />
              Join Institute
            </a>

            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white rounded-lg bg-gradient-to-r from-brand-purple to-purple-600 hover:from-purple-500 hover:to-brand-purple shadow-glow-sm-purple hover:shadow-glow-purple transition-all duration-200"
            >
              <Briefcase className="w-3.5 h-3.5 mr-1.5" />
              Get a Quote
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {Array.isArray(navLinks) && navLinks.length > 0 &&
              navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    link.isHighlight
                      ? "bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30 flex items-center justify-between"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.isHighlight && <GraduationCap className="w-4 h-4 text-brand-cyan" />}
                </a>
              ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="#institute"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-semibold text-brand-cyan rounded-lg border border-brand-cyan/50 bg-brand-cyan/5 hover:bg-brand-cyan/10"
            >
              🎓 Join Institute (Zero to Hero)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-bold text-white rounded-lg bg-gradient-to-r from-brand-purple to-purple-600 shadow-glow-purple"
            >
              ⚡ Get a Free Agency Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
