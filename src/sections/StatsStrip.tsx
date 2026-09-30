import React from 'react';
import { trustStats } from '../data/consultant';

export const StatsStrip: React.FC = () => {
  return (
    <section className="bg-ivory border-y border-navy-subtle py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-navy-subtle">
          {trustStats.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center text-center ${
                idx > 0 ? 'pt-6 md:pt-0' : ''
              }`}
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl font-serif text-midnight font-normal tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm uppercase font-bold tracking-widest text-midnight mt-2">
                {stat.label}
              </span>
              {stat.description && (
                <p className="text-xs text-charcoal/60 font-light mt-1 max-w-[200px] hidden sm:block">
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
