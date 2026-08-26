import Hero from "@/components/Hero";
import MovingTicker from "@/components/MovingTicker";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import InstituteSection from "@/components/InstituteSection";
import Pricing from "@/components/Pricing";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section (First 3 Seconds Impact) */}
      <Hero />

      {/* 2. Avista Signature Moving Ticker Marquee */}
      <MovingTicker />

      {/* 3. Core Stats (Trust Builder Counters) */}
      <Stats />

      {/* 4. Services Offerings Grid */}
      <Services />

      {/* 5. 4-Step Execution Framework (How We Work) */}
      <Process />

      {/* 6. Interactive Portfolio (Case Studies & Filters) */}
      <Portfolio />

      {/* 7. The Institute Section (Zero to Hero Training) */}
      <InstituteSection />

      {/* 8. Value-Driven Pricing Packages & Course Fees */}
      <Pricing />

      {/* 9. Technology & Platform Stacks */}
      <TechStack />

      {/* 10. Client Reviews & Student Success Stories */}
      <Testimonials />

      {/* 11. FAQ Accordion */}
      <FAQ />

      {/* 12. Conversion & Contact Hub (Lead Form & WhatsApp) */}
      <ContactSection />
    </div>
  );
}
