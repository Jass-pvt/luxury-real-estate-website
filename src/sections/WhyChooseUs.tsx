import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { MapPin, Eye, ShieldAlert, Layers } from 'lucide-react';
import { consultantProfile } from '../data/consultant';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: MapPin,
      title: 'Local Market Expertise',
      desc: 'In-depth analysis of high-growth residential corridors, zoning developments, and private off-market listings.'
    },
    {
      icon: Eye,
      title: 'Transparent Process',
      desc: 'Complete audit of legal titles, encumbrances, revenue records, and fair market valuations before committing.'
    },
    {
      icon: ShieldAlert,
      title: 'Verified Opportunities',
      desc: 'Zero-risk property curation. We only present opportunities with clear titles and developer credentials.'
    },
    {
      icon: Layers,
      title: 'End-to-End Assistance',
      desc: 'From initial search and price negotiation to bank financing, legal documentation, and registration.'
    }
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-midnight text-ivory overflow-hidden border-t border-champagne/15">
      {/* Background Architectural Overlay */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src={consultantProfile.aboutHeroImageUrl}
          alt="Architecture Background"
          className="w-full h-full object-cover filter contrast-125"
        />
        <div className="absolute inset-0 bg-midnight/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          label="THE ADVISORY ADVANTAGE"
          title="YOUR TRUSTED REAL ESTATE PARTNER"
          subtitle="Combining strategic real estate consulting with fiduciary dedication to protect your capital and maximize long-term asset value."
          theme="dark"
        />

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-royal/60 border border-champagne/20 p-8 flex flex-col justify-between hover:border-champagne hover:bg-royal transition-all duration-300"
              >
                <div>
                  <div className="p-3 w-fit bg-midnight text-champagne border border-champagne/30 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif text-ivory mb-3">
                    {pt.title}
                  </h3>
                  <p className="text-ivory/70 text-xs md:text-sm font-light leading-relaxed">
                    {pt.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-champagne/10 text-[10px] uppercase font-bold tracking-widest text-champagne/70">
                  Pillar 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
