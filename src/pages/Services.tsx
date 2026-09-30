import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { servicesData, processSteps } from '../data/services';
import { ArrowRight } from 'lucide-react';
import { FinalCTA } from '../sections/FinalCTA';

export const Services: React.FC = () => {
  const navigate = useNavigate();

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
                  OUR SERVICES
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-serif leading-tight text-ivory">
                REAL ESTATE SOLUTIONS
                <br />
                <span className="italic text-champagne font-normal">
                  BUILT AROUND YOUR NEEDS.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-ivory/80 font-light leading-relaxed max-w-2xl">
                Comprehensive property advisory services engineered to protect
                your capital, streamline acquisitions, and maximize long-term
                asset performance.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-[16/10] bg-royal border border-champagne/30 shadow-elevated overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
                  alt="Modern Architectural Solutions"
                  className="w-full h-full object-cover filter contrast-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. EXPANDED SERVICE CATALOG */}
      <section className="py-14 sm:py-20 lg:py-28 border-b border-navy-subtle">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <SectionHeading
            label="COMPLETE ADVISORY SPECTRUM"
            title="TAILORED PROPERTY & SOLUTIONS"
            subtitle="Explore our eight primary real estate advisory disciplines."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {servicesData.map((service) => (
              <div key={service.id} className="min-w-0">
                <ServiceCard
                  service={service}
                  onClick={() => navigate('/contact')}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. HOW WE WORK PROCESS TIMELINE */}
      <section className="py-14 sm:py-20 lg:py-28 bg-ivory/50 border-b border-navy-subtle">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <SectionHeading
            label="TRANSACTION PROCESS"
            title="HOW WE WORK"
            subtitle="A structured 4-step framework designed to eliminate guesswork and risk."
            alignment="center"
          />

          <div className="relative pt-4 sm:pt-8">

            {/* Horizontal Line for Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-navy-subtle -translate-y-8 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 relative z-10">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-navy-subtle p-6 sm:p-8 flex flex-col justify-between hover:border-midnight transition-all duration-300 shadow-subtle group min-w-0"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-serif text-midnight font-normal group-hover:text-champagne-dark transition-colors">
                        {step.number}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-midnight/5 text-midnight flex items-center justify-center font-bold text-xs">
                        0{idx + 1}
                      </div>
                    </div>

                    <h3 className="text-xl font-serif text-midnight mb-3">
                      {step.title}
                    </h3>

                    <p className="text-xs md:text-sm text-charcoal/70 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-navy-subtle/50 flex items-center justify-between text-xs text-taupe font-semibold uppercase tracking-wider">
                    <span>Phase 0{idx + 1}</span>
                    <ArrowRight className="w-4 h-4 text-midnight opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 4. CTA */}
      <FinalCTA />

    </main>
  );
};