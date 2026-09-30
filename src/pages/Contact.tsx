import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ExternalLink,
  Clock
} from 'lucide-react';
import { consultantProfile } from '../data/consultant';
import { FinalCTA } from '../sections/FinalCTA';

export const Contact: React.FC = () => {
  const whatsappUrl = `https://wa.me/${consultantProfile.whatsapp}?text=${encodeURIComponent(
    consultantProfile.whatsappMessage
  )}`;

  return (
    <main className="pt-0 md:pt-24 pb-8 bg-ivory text-charcoal">

      {/* ==================== 1. CONTACT HERO ==================== */}
      <section className="bg-midnight text-ivory py-20 md:py-28 relative overflow-hidden border-b border-champagne/15">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-champagne" />
              <span className="text-xs uppercase font-semibold tracking-mega text-champagne">
                PRIVATE CONSULTATION
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif leading-tight text-ivory">
              LET'S TALK ABOUT
              <br />
              <span className="italic text-champagne font-normal">
                YOUR PROPERTY.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-ivory/80 font-light leading-relaxed max-w-2xl">
              Whether you're buying, selling, investing or looking for guidance,
              we're here to provide confidential, expert advice.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== 2. SIMPLE DIRECT CONTACT ==================== */}
      <section className="py-14 md:py-20 border-b border-navy-subtle bg-ivory/50">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-white border border-navy-subtle shadow-subtle p-7 sm:p-10 md:p-12">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">

              {/* Consultant */}
              <div>
                <span className="text-[10px] uppercase font-bold tracking-mega text-taupe block mb-3">
                  YOUR REAL ESTATE CONSULTANT
                </span>

                <h2 className="text-3xl sm:text-4xl font-serif text-midnight">
                  {consultantProfile.businessName}
                </h2>

                <p className="mt-2 text-xs uppercase tracking-widest text-taupe">
                  {consultantProfile.tagline}
                </p>

                <p className="mt-6 text-sm text-charcoal/70 font-light leading-relaxed">
                  For property requirements, buying, selling, investment
                  opportunities or private consultation, connect directly.
                </p>
              </div>

              {/* Direct contact */}
              <div className="space-y-3">

                <a
                  href={`tel:${consultantProfile.phone}`}
                  className="w-full flex items-center gap-4 border border-navy-subtle px-5 py-4 hover:border-midnight transition-colors group"
                >
                  <span className="w-10 h-10 shrink-0 bg-midnight text-champagne flex items-center justify-center group-hover:bg-champagne group-hover:text-midnight transition-colors">
                    <Phone className="w-4 h-4" />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-[9px] uppercase tracking-widest font-bold text-taupe">
                      CALL DIRECTLY
                    </span>
                    <span className="block text-sm font-serif text-midnight truncate">
                      {consultantProfile.phone}
                    </span>
                  </span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-4 border border-navy-subtle px-5 py-4 hover:border-midnight transition-colors group"
                >
                  <span className="w-10 h-10 shrink-0 bg-midnight text-champagne flex items-center justify-center group-hover:bg-champagne group-hover:text-midnight transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </span>

                  <span>
                    <span className="block text-[9px] uppercase tracking-widest font-bold text-taupe">
                      WHATSAPP
                    </span>
                    <span className="block text-sm font-serif text-midnight">
                      Start a Conversation
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${consultantProfile.email}`}
                  className="w-full flex items-center gap-4 border border-navy-subtle px-5 py-4 hover:border-midnight transition-colors group"
                >
                  <span className="w-10 h-10 shrink-0 bg-midnight text-champagne flex items-center justify-center group-hover:bg-champagne group-hover:text-midnight transition-colors">
                    <Mail className="w-4 h-4" />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-[9px] uppercase tracking-widest font-bold text-taupe">
                      EMAIL
                    </span>
                    <span className="block text-sm font-serif text-midnight truncate">
                      {consultantProfile.email}
                    </span>
                  </span>
                </a>

              </div>
            </div>

            {/* Office details */}
            <div className="mt-10 pt-8 border-t border-navy-subtle grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-champagne-dark shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-midnight">
                    Office
                  </h4>
                  <p className="text-xs text-charcoal/70 mt-1 leading-relaxed">
                    {consultantProfile.locationAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-champagne-dark shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-midnight">
                    Availability
                  </h4>
                  <p className="text-xs text-charcoal/70 mt-1 leading-relaxed">
                    {consultantProfile.officeHours}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-midnight text-ivory py-4 px-7 text-xs uppercase tracking-widest font-semibold hover:bg-champagne-dark hover:text-midnight transition-colors"
              >
                <span>Connect via WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. MAP ==================== */}
      <section className="py-14 md:py-20 border-b border-navy-subtle">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs uppercase font-semibold tracking-mega text-taupe">
              OUR LOCATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-midnight mt-2">
              VISIT OUR OFFICE.
            </h2>
          </div>

          <div className="border border-navy-subtle overflow-hidden h-[320px] md:h-[480px] bg-royal relative shadow-subtle">
            <iframe
              title="S P Real Estate Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.626786650462!2d80.2520!3d13.0604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52663990666667%3A0x6a66666666666666!2sAnna%20Salai%2C%20Chennai!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: 'grayscale(0.5) contrast(1.1)'
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ==================== 4. FINAL CTA ==================== */}
      <FinalCTA />
    </main>
  );
};