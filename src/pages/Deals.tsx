import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { DealCard } from '../components/DealCard';
import { Button } from '../components/Button';
import { dealsData } from '../data/deals';
import type { DealCategory } from '../types';
import { FinalCTA } from '../sections/FinalCTA';

export const Deals: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<DealCategory>('ALL');

  const categories: DealCategory[] = [
    'ALL',
    'RESIDENTIAL',
    'LAND & PLOT',
    'COMMERCIAL',
    'OTHER'
  ];

  const filteredDeals =
    activeCategory === 'ALL'
      ? dealsData
      : dealsData.filter((d) => d.category === activeCategory);

  const featuredDeal = dealsData.find((d) => d.isFeatured) || dealsData[0];

  return (
    <main className="pt-0 md:pt-24 pb-8 bg-ivory text-charcoal">

      {/* 1. HERO SECTION */}
      <section className="bg-midnight text-ivory py-16 sm:py-20 md:py-28 relative overflow-hidden border-b border-champagne/15">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-champagne shrink-0" />
              <span className="text-[10px] sm:text-xs uppercase font-semibold tracking-mega text-champagne">
                PORTFOLIO OF EXPERIENCE
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif leading-tight text-ivory">
              OUR COMPLETED
              <br />
              <span className="italic text-champagne font-normal">
                TRANSACTIONS
              </span>
            </h1>

            <p className="text-base sm:text-lg text-ivory/80 font-light leading-relaxed max-w-2xl">
              A curated look at successfully facilitated residential estates,
              strategic land parcels, and commercial real estate acquisitions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FEATURED TRANSACTION SPOTLIGHT */}
      {featuredDeal && (
        <section className="py-14 sm:py-20 lg:py-24 border-b border-navy-subtle bg-ivory/60">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <SectionHeading
              label="TRANSACTION SPOTLIGHT"
              title="FEATURED DEAL"
              subtitle="A flagship transaction highlighting our end-to-end legal due diligence and negotiation."
            />

            <DealCard deal={featuredDeal} variant="featured" />

            <div className="mt-6 flex justify-start sm:justify-end">
              <Button
                variant="dark-outline"
                size="md"
                showArrow
                onClick={() => navigate('/contact')}
              >
                DISCUSS SIMILAR OPPORTUNITIES
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* 3. CATEGORY FILTERS & DEAL GALLERY */}
      <section className="py-14 sm:py-20 lg:py-28 border-b border-navy-subtle">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
            <SectionHeading
              label="PORTFOLIO GALLERY"
              title="SELECTED DEALS"
              subtitle="Filter transactions by real estate asset category."
              className="mb-0"
            />

            {/* Mobile-friendly filter area */}
            <div
              role="tablist"
              aria-label="Filter deals by category"
              className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide"
            >
              <div className="flex w-max md:flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={activeCategory === cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`shrink-0 px-4 sm:px-5 py-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                      activeCategory === cat
                        ? 'bg-midnight text-ivory border-midnight shadow-subtle'
                        : 'bg-transparent text-charcoal/70 border-navy-subtle hover:border-midnight hover:text-midnight'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredDeals.map((deal) => (
                <motion.div
                  key={deal.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="min-w-0"
                >
                  <DealCard deal={deal} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredDeals.length === 0 && (
            <div className="text-center py-20 px-4 text-charcoal/60 font-light">
              No transactions currently match the selected category filter.
            </div>
          )}

        </div>
      </section>

      {/* 4. FINAL CTA */}
      <FinalCTA />

    </main>
  );
};
