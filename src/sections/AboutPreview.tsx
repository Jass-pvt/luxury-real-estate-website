import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { consultantProfile } from '../data/consultant';
import { Check } from 'lucide-react';

export const AboutPreview: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 lg:py-28 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Professional Portrait Frame */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative box */}
              <div className="absolute -inset-4 border border-navy-subtle/80 -z-10 translate-x-4 translate-y-4"></div>
              
              <div className="aspect-[3/4] overflow-hidden bg-midnight shadow-elevated">
                <img
                  src={consultantProfile.ownerImageUrl}
                  alt={consultantProfile.ownerName}
                  className="w-full h-full object-cover filter contrast-105"
                  loading="lazy"
                />
              </div>

              {/* Floating Quote Stamp */}
              <div className="absolute -bottom-6 -right-6 hidden sm:block bg-royal text-ivory p-6 border border-champagne/30 max-w-[240px] shadow-elevated">
                <p className="text-xs font-serif italic text-champagne">
                  "{consultantProfile.philosophy}"
                </p>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-ivory/70 mt-2">
                  — {consultantProfile.ownerName}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <SectionHeading
              label="ABOUT THE CONSULTANT"
              title="THE PERSON BEHIND THE DEALS"
              subtitle={consultantProfile.bioHeadline}
            />

            <div className="space-y-4 text-charcoal/80 font-light text-base md:text-lg leading-relaxed">
              <p>{consultantProfile.shortBio}</p>
              <p>{consultantProfile.fullBio[0]}</p>
            </div>

            {/* Core Focus Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 pb-4">
              {[
                'Localized Market Intelligence',
                'Unbiased Title Due Diligence',
                'Discreet HNI & Corporate Deals',
                'Long-Term Fiduciary Trust'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-midnight text-champagne rounded-none flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-midnight">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                showArrow
                onClick={() => navigate('/about')}
              >
                MEET THE CONSULTANT
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
