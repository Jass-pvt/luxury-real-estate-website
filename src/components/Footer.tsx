import React from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { consultantProfile } from '../data/consultant';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${consultantProfile.whatsapp}?text=${encodeURIComponent(consultantProfile.whatsappMessage)}`;

  return (
    <footer className="bg-midnight text-ivory border-t border-champagne/15 pt-16 md:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-champagne/10">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl tracking-tight text-ivory">
                {consultantProfile.businessName}
              </span>
              <span className="text-[10px] font-sans uppercase font-bold tracking-mega text-champagne">
                {consultantProfile.tagline}
              </span>
            </div>

            <p className="text-ivory/70 text-xs md:text-sm font-light leading-relaxed max-w-md">
              {consultantProfile.shortBio}
            </p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 border border-champagne/30 text-champagne hover:bg-champagne hover:text-midnight transition-all text-xs uppercase font-semibold tracking-wider"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Start Direct Conversation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-champagne pb-2 border-b border-champagne/10">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs md:text-sm font-light">
              <li>
                <NavLink to="/" className="text-ivory/80 hover:text-champagne transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-ivory/80 hover:text-champagne transition-colors">
                  About the Consultant
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-ivory/80 hover:text-champagne transition-colors">
                  Services & Solutions
                </NavLink>
              </li>
              <li>
                <NavLink to="/deals" className="text-ivory/80 hover:text-champagne transition-colors">
                  Completed Deals Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-ivory/80 hover:text-champagne transition-colors">
                  Private Consultation
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-champagne pb-2 border-b border-champagne/10">
              Direct Contact
            </h4>
            <ul className="space-y-4 text-xs md:text-sm font-light">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-champagne mt-1 shrink-0" />
                <div>
                  <span className="block text-[10px] text-taupe uppercase font-semibold">Phone</span>
                  <a href={`tel:${consultantProfile.phone}`} className="text-ivory hover:text-champagne transition-colors">
                    {consultantProfile.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-champagne mt-1 shrink-0" />
                <div>
                  <span className="block text-[10px] text-taupe uppercase font-semibold">Email</span>
                  <a href={`mailto:${consultantProfile.email}`} className="text-ivory hover:text-champagne transition-colors">
                    {consultantProfile.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-champagne mt-1 shrink-0" />
                <div>
                  <span className="block text-[10px] text-taupe uppercase font-semibold">Office Address</span>
                  <span className="text-ivory/80">{consultantProfile.locationAddress}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-ivory/50 font-light gap-4">
          <p>© {currentYear} {consultantProfile.businessName}. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-[11px] uppercase tracking-wider text-taupe">
            <span>Real Estate Advisory</span>
            <span>•</span>
            <span>Property Wealth Management</span>
            <span>•</span>
            <span>Private Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
