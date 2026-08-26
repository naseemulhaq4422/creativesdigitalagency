"use client";

import React, { useState } from "react";
import { 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  BookOpen, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Laptop, 
  Users2, 
  DollarSign, 
  PenTool, 
  Megaphone, 
  Terminal 
} from "lucide-react";

interface CourseItem {
  id: string;
  title: string;
  level: string;
  duration: string;
  description: string;
  badge: string;
  price: string;
  upcomingBatch: string;
  icon: React.ReactNode;
  syllabus: string[];
}

export default function InstituteSection() {
  const [expandedSyllabus, setExpandedSyllabus] = useState<string | null>("graphic-design");

  const courses: CourseItem[] = [
    {
      id: "graphic-design",
      title: "Graphic Design & 3D Branding Mastery",
      level: "Zero to Hero (Beginner Friendly)",
      duration: "8 Weeks (Live Practical Classes)",
      description: "Start from absolute zero. Learn Adobe Photoshop, Illustrator, 3D mockup creation, vector logo design, and 4K YouTube thumbnails without any prior design experience.",
      badge: "🔥 Most Popular for Beginners",
      price: "Flexible Batch Pricing",
      upcomingBatch: "Starting 1st of Next Month",
      icon: <PenTool className="w-6 h-6 text-brand-cyan" />,
      syllabus: [
        "Module 1: Design Fundamentals, Color Psychology & Typography",
        "Module 2: Adobe Photoshop Tools, Photo Retouching & Manipulation",
        "Module 3: Adobe Illustrator Vector Mastery & Modern Logo Creation",
        "Module 4: 3D Product Mockups, Packaging & Realistic Renders",
        "Module 5: Social Media Post Kits & 4K High-CTR YouTube Thumbnails",
        "Module 6: Building a Winning Freelance Portfolio (Upwork & Fiverr)",
      ],
    },
    {
      id: "digital-marketing",
      title: "Digital & Social Media Marketing Professional",
      level: "Zero to Advanced",
      duration: "10 Weeks (Live Campaigns)",
      description: "Master search engine optimization (SEO), Facebook/Instagram Ads Manager, TikTok growth funnels, YouTube SEO, and client acquisition from scratch.",
      badge: "🚀 High-Income Skill",
      price: "Flexible Batch Pricing",
      upcomingBatch: "Starting 1st of Next Month",
      icon: <Megaphone className="w-6 h-6 text-brand-purple-light" />,
      syllabus: [
        "Module 1: Market Research, Customer Avatars & Brand Positioning",
        "Module 2: Search Engine Optimization (SEO) & Google Ranking",
        "Module 3: Meta Ads (Facebook & Instagram Ads Manager Mastery)",
        "Module 4: TikTok Ads & Organic Short-Form Viral Strategy",
        "Module 5: YouTube Growth, Tags, Algorithms & CTR Optimization",
        "Module 6: Client Acquisition & Monthly Retainer Contracts",
      ],
    },
    {
      id: "web-dev-fundamentals",
      title: "Web Development Fundamentals & Modern Stacks",
      level: "Absolute Beginner Friendly",
      duration: "12 Weeks (Hands-on Coding)",
      description: "Build real-world modern responsive websites from scratch using HTML5, CSS3, Tailwind CSS, JavaScript, and Next.js without complex computer science theory.",
      badge: "💻 High In-Demand",
      price: "Flexible Batch Pricing",
      upcomingBatch: "Starting 1st of Next Month",
      icon: <Terminal className="w-6 h-6 text-emerald-400" />,
      syllabus: [
        "Module 1: HTML5 Semantics & CSS3 Flexbox/Grid Modern Layouts",
        "Module 2: Tailwind CSS & Dark Mode Glassmorphic Styling",
        "Module 3: JavaScript Essentials, DOM Manipulation & Events",
        "Module 4: React Basics, Components & State Management",
        "Module 5: Next.js App Router & Server-Side Rendering (SSR)",
        "Module 6: Live Deployment on Hostinger & GitHub Version Control",
      ],
    },
  ];

  const toggleSyllabus = (id: string) => {
    setExpandedSyllabus(expandedSyllabus === id ? null : id);
  };

  return (
    <section id="institute" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090D15] relative border-y border-white/5">
      {/* Background ambient lighting */}
      <div className="ambient-glow-cyan top-20 right-10 opacity-20" />
      <div className="ambient-glow-purple bottom-20 left-10 opacity-20" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/50 border border-brand-cyan/40 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-4 shadow-glow-sm-cyan">
            <GraduationCap className="w-4 h-4 text-brand-cyan" />
            Creatives Training Institute
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Empowering Absolute Beginners to <span className="text-gradient-cyan">Master Modern Tech.</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Don&apos;t know anything about computers or coding? Our institute takes you from a complete beginner to a confident professional with step-by-step guidance.
          </p>
        </div>

        {/* Why Learn With Us Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="glass-card p-5 rounded-2xl flex items-start gap-3.5 border-brand-cyan/20">
            <div className="p-2.5 rounded-xl bg-brand-cyan/10 text-brand-cyan mt-1">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">Zero Tech Background</h3>
              <p className="text-xs text-slate-400">Everything is taught from the absolute basics in simple language.</p>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl flex items-start gap-3.5 border-brand-purple/20">
            <div className="p-2.5 rounded-xl bg-brand-purple/10 text-brand-purple mt-1">
              <Users2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">1-on-1 Mentorship</h3>
              <p className="text-xs text-slate-400">Direct support from industry working professionals.</p>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl flex items-start gap-3.5 border-pink-500/20">
            <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-400 mt-1">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">Live Real Projects</h3>
              <p className="text-xs text-slate-400">Work on actual agency client briefs during training.</p>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl flex items-start gap-3.5 border-emerald-500/20">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 mt-1">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">Freelancing & Earning</h3>
              <p className="text-xs text-slate-400">Learn how to land paying clients on Upwork, Fiverr & LinkedIn.</p>
            </div>
          </div>
        </div>

        {/* Courses Highlights Grid with Safe Array Handling */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {Array.isArray(courses) && courses.length > 0 &&
            courses.map((course) => (
              <div
                key={course.id}
                className="glass-card rounded-2xl p-7 flex flex-col justify-between border border-white/10 hover:border-brand-cyan/50 transition-all duration-300 shadow-xl relative"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30 self-start mb-4">
                  <Sparkles className="w-3 h-3" />
                  {course.badge}
                </div>

                <div>
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      {course.icon}
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
                        {course.level}
                      </span>
                      <h3 className="text-lg font-bold text-white">
                        {course.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Batch & Duration metadata */}
                  <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 mb-6 text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Clock className="w-4 h-4 text-brand-cyan" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Calendar className="w-4 h-4 text-brand-purple" />
                      <span>{course.upcomingBatch}</span>
                    </div>
                  </div>

                  {/* Collapsible Syllabus with Safe Array Handling */}
                  <div className="mb-6">
                    <button
                      onClick={() => toggleSyllabus(course.id)}
                      className="w-full flex items-center justify-between text-xs font-bold text-slate-200 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <span>View Course Modules & Syllabus</span>
                      {expandedSyllabus === course.id ? (
                        <ChevronUp className="w-4 h-4 text-brand-cyan" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>

                    {expandedSyllabus === course.id && (
                      <div className="mt-3 space-y-2 text-xs text-slate-300 p-3 rounded-xl bg-black/40 border border-white/5 animate-in fade-in duration-200">
                        {Array.isArray(course.syllabus) && course.syllabus.length > 0 &&
                          course.syllabus.map((item, sIdx) => (
                            <div key={sIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href="#contact"
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-[#080B11] shadow-glow-sm-cyan transition-all"
                >
                  <span>Enroll in Next Batch Today</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-brand-cyan/30 text-center relative overflow-hidden bg-gradient-to-r from-cyan-950/30 via-slate-900/60 to-purple-950/30">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Still Have Questions Before Joining?
          </h3>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto mb-6">
            Speak directly with our instructors on WhatsApp. We will evaluate your interests and guide you on the best career path completely free.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/923000000000?text=Hello%20Creatives%20Institute,%20I%20want%20guidance%20on%20joining%20the%20next%20batch!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs shadow-lg transition-transform hover:scale-105"
            >
              <span>Chat With Course Advisor on WhatsApp</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs transition-colors"
            >
              <span>Submit Admission Form Online</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
