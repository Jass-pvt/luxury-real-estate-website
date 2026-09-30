import React from 'react';
import { MessageSquare } from 'lucide-react';
import { consultantProfile } from '../data/consultant';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${consultantProfile.whatsapp}?text=${encodeURIComponent(consultantProfile.whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-midnight text-ivory p-3.5 md:px-5 md:py-3.5 border border-champagne/40 shadow-elevated hover:bg-royal hover:border-champagne transition-all duration-300 rounded-none"
    >
      <div className="relative">
        <MessageSquare className="w-5 h-5 text-champagne group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
      </div>
      <span className="hidden md:inline-block text-xs uppercase font-semibold tracking-wider text-ivory">
        WhatsApp Us
      </span>
    </a>
  );
};
