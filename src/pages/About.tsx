import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { consultantProfile, coreValues } from '../data/consultant';
import { locationsData } from '../data/locations';
import { ShieldCheck, Eye, Award, Users, MapPin, CheckCircle2 } from 'lucide-react';
import { FinalCTA } from '../sections/FinalCTA';

export const About: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    ShieldCheck,
    Eye,
    Award,
    Users
  };

  return (
    <main className="pt-0 md:pt-24 pb-8 bg-ivory text-charcoal">

      {/* 1. HERO SECTION */}
      <section className="bg-midnight text-ivory py-16 sm:py-20 md:py-28 relative overflow-hidden border-b border-champagne/15">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-champagne shrink-0" />
                <span className="text-[10px] sm:text-xs uppercase font-semibold tracking-mega text-champagne">
                  ABOUT THE BUSINESS
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-serif leading-tight text-ivory">
                THE PERSON
                <br />
                <span className="italic text-champagne font-normal">
                  BEHIND THE DEALS
                </span>
              </h1>

              <p className="text-base sm:text-lg text-ivory/80 font-light leading-relaxed max-w-2xl">
                {consultantProfile.bioHeadline}
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] sm:aspect-[4/5] bg-royal border border-champagne/30 shadow-elevated overflow-hidden">
                <img
                  src={consultantProfile.ownerImageUrl}
                  alt={consultantProfile.ownerName}
                  className="w-full h-full object-cover filter contrast-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OUR STORY & BUSINESS JOURNEY */}
      <section className="py-14 sm:py-20 lg:py-28 border-b border-navy-subtle">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <SectionHeading
                label="OUR PHILOSOPHY"
                title="BUILT ON TRUST AND PRECISION."
                subtitle="A decade of fiduciary excellence navigating real estate acquisitions."
              />
            </div>

            <div className="lg:col-span-8 space-y-6 text-charcoal/80 font-light text-base md:text-lg leading-relaxed">
              {consultantProfile.fullBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-6 pt-6 border-t border-navy-subtle">
                <div>
                  <span className="block text-3xl font-serif text-midnight font-normal">
                    {consultantProfile.experienceYears}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase font-semibold tracking-wider text-taupe">
                    Years Experience
                  </span>
                </div>

                <div>
                  <span className="block text-3xl font-serif text-midnight font-normal">
                    50+
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase font-semibold tracking-wider text-taupe">
                    Deals Completed
                  </span>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <span className="block text-3xl font-serif text-midnight font-normal">
                    100%
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase font-semibold tracking-wider text-taupe">
                    Transparent Due Diligence
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. PERSONAL PROFILE & VALUE STATEMENT */}
      <section className="py-14 sm:py-20 lg:py-28 bg-ivory/50 border-b border-navy-subtle">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            <div className="lg:col-span-5 relative">
              <div className="aspect-[3/4] bg-midnight overflow-hidden shadow-elevated border border-navy-subtle">
                <img
                  src={consultantProfile.aboutHeroImageUrl}
                  alt="Architectural Excellence"
                  className="w-full h-full object-cover filter contrast-105"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-mega text-taupe">
                  FOUNDER PROFILE
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-midnight">
                  {consultantProfile.ownerName}
                </h2>

                <p className="text-xs uppercase font-bold tracking-widest text-champagne-dark">
                  {consultantProfile.role}
                </p>
              </div>

              <p className="text-charcoal/80 font-light text-base md:text-lg leading-relaxed">
                As principal advisor at {consultantProfile.businessName},
                {consultantProfile.ownerName} personally oversees all key client
                transactions. Unlike volume-driven brokerages, our practice
                limits active engagements to guarantee dedicated focus, legal
                accuracy, and confidential negotiation.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Direct principal-level consultation on every transaction',
                  'Independent valuation audits and title history research',
                  'Private network access to off-market premium listings',
                  'Fiduciary interest protection during buyer/seller negotiations'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-midnight shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm font-light text-charcoal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. AREAS WE SERVE */}
      <section className="py-14 sm:py-20 lg:py-28 bg-ivory border-b border-navy-subtle">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <SectionHeading
            label="GEOGRAPHIC COVERAGE"
            title="AREAS WE SERVE"
            subtitle="Deep local knowledge across key growth corridors, commercial hubs, and luxury residential enclaves."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {locationsData.map((loc) => (
              <div
                key={loc.id}
                className="bg-white border border-navy-subtle p-6 sm:p-8 hover:border-midnight transition-all duration-300 shadow-subtle group min-w-0"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2.5 bg-midnight/5 text-midnight group-hover:bg-midnight group-hover:text-champagne transition-colors">
                    <MapPin className="w-5 h-5" />
                  </span>

                  <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-taupe text-right">
                    {loc.type}
                  </span>
                </div>

                <h3 className="text-xl font-serif text-midnight mb-2">
                  {loc.name}
                </h3>

                <p className="text-xs text-charcoal/70 font-light leading-relaxed">
                  {loc.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CORE VALUES */}
      <section className="py-14 sm:py-20 lg:py-28 bg-ivory/40 border-b border-navy-subtle">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <SectionHeading
            label="FOUNDATIONAL PRINCIPLES"
            title="OUR CORE VALUES"
            subtitle="The non-negotiable principles that guide every client interaction and property transaction."
            alignment="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {coreValues.map((val) => {
              const Icon = iconMap[val.iconName] || ShieldCheck;

              return (
                <div
                  key={val.id}
                  className="bg-white border border-navy-subtle p-6 sm:p-8 text-center flex flex-col items-center justify-between hover:border-midnight transition-all duration-300 shadow-subtle min-w-0"
                >
                  <div>
                    <div className="p-4 bg-midnight text-champagne mb-6 mx-auto w-fit">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-serif text-midnight mb-3 tracking-wide">
                      {val.title}
                    </h3>

                    <p className="text-xs md:text-sm text-charcoal/70 font-light leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. CLOSING QUOTE SECTION */}
      <section className="py-20 sm:py-24 bg-midnight text-ivory text-center border-b border-champagne/15">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs uppercase font-bold tracking-mega text-champagne">
            CONSULTANT STATEMENT
          </span>

          <blockquote className="text-2xl sm:text-4xl font-serif italic text-ivory leading-relaxed">
            "{consultantProfile.closingQuote}"
          </blockquote>

          <p className="text-xs uppercase font-bold tracking-widest text-taupe pt-4">
            — {consultantProfile.ownerName}, {consultantProfile.businessName}
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />

    </main>
  );
};
