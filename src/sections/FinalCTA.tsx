import React from 'react';
import { MessageSquare, Phone, ArrowUpRight } from 'lucide-react';
import { consultantProfile } from '../data/consultant';

export const FinalCTA: React.FC = () => {
  const whatsappUrl = `https://wa.me/${consultantProfile.whatsapp}?text=${encodeURIComponent(consultantProfile.whatsappMessage)}`;

  return (
    <section className="relative py-24 lg:py-32 bg-midnight text-ivory overflow-hidden border-t border-champagne/20">
      {/* Editorial Decorative Background Elements */}
      <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-champagne/5 blur-3xl pointer-events-none"></div>
      <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-royal/40 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center space-y-8">
        
        {/* Category Badge */}
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-champagne"></span>
          <span className="text-xs uppercase font-semibold tracking-mega text-champagne">
            TAKE THE NEXT STEP
          </span>
          <span className="w-8 h-px bg-champagne"></span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight tracking-tight text-ivory">
          LOOKING TO BUY,<br />
          SELL OR INVEST?
        </h2>

        {/* Supporting Paragraph */}
        <p className="text-base sm:text-lg lg:text-xl font-sans font-light text-ivory/80 max-w-2xl leading-relaxed">
          Let's discuss your property requirement confidentially. Schedule a direct consultation with {consultantProfile.ownerName}.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4 w-full sm:w-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-champagne text-midnight font-sans font-semibold text-xs uppercase tracking-widest hover:bg-ivory hover:shadow-glow transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4 text-midnight" />
            <span>WHATSAPP US</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={`tel:${consultantProfile.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border border-champagne/40 text-ivory font-sans font-semibold text-xs uppercase tracking-widest hover:border-champagne hover:bg-champagne/10 transition-all duration-300"
          >
            <Phone className="w-4 h-4 text-champagne" />
            <span>CALL US: {consultantProfile.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
