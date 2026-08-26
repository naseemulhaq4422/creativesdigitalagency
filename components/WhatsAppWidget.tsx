"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Pop-up tooltip */}
      {showTooltip && (
        <div className="glass-card p-3.5 rounded-2xl border border-brand-cyan/40 shadow-2xl max-w-xs animate-in slide-in-from-bottom-2 fade-in duration-300 relative hidden sm:block">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 p-1 text-slate-400 hover:text-white rounded-full"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-start gap-2.5">
            <span className="flex h-2.5 w-2.5 relative mt-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div>
              <p className="text-xs font-bold text-white mb-0.5">Need quick assistance?</p>
              <p className="text-[11px] text-slate-300 leading-tight">
                Chat with our team on WhatsApp for instant quote or batch details.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Circle Button */}
      <a
        href="https://wa.me/923000000000?text=Hello%20Creatives%20Digital%20Agency,%20I%20want%20to%20discuss%20a%20project%20or%20course!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.5)] transition-transform duration-300 hover:scale-110 group relative"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
        
        {/* Pulsing Ring */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-30 pointer-events-none" />
      </a>
    </div>
  );
}
