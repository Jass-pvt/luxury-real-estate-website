import React from 'react';
import type { Deal } from '../types';
import { MapPin, CheckCircle2 } from 'lucide-react';

interface DealCardProps {
  deal: Deal;
  variant?: 'standard' | 'featured';
}

export const DealCard: React.FC<DealCardProps> = ({ deal, variant = 'standard' }) => {
  if (variant === 'featured') {
    return (
      <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-royal text-ivory border border-champagne/20 overflow-hidden p-6 md:p-10 shadow-elevated">
        {/* Image Column */}
        <div className="lg:col-span-7 overflow-hidden relative aspect-[16/10] md:aspect-[16/9]">
          <img
            src={deal.imageUrl}
            alt={deal.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-4 left-4 bg-midnight/80 backdrop-blur-md px-3 py-1.5 border border-champagne/30 text-champagne text-xs tracking-widest uppercase font-semibold">
            Featured Transaction
          </div>
        </div>

        {/* Content Column */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-semibold tracking-widest text-champagne">
              {deal.categoryLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 px-3 py-1 border border-emerald-800/40">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {deal.status}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-serif text-ivory leading-tight group-hover:text-champagne transition-colors">
            {deal.title}
          </h3>

          <div className="flex items-center gap-2 text-taupe text-sm">
            <MapPin className="w-4 h-4 text-champagne" />
            <span>{deal.location}</span>
          </div>

          <p className="text-ivory/80 text-sm md:text-base font-light leading-relaxed">
            {deal.description}
          </p>

          {deal.highlights && (
            <ul className="space-y-2 pt-2 border-t border-champagne/15">
              {deal.highlights.map((h, i) => (
                <li key={i} className="text-xs text-champagne/90 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-champagne rounded-full"></span>
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-royal/40 border border-navy-subtle hover:border-champagne/40 transition-all duration-500 overflow-hidden flex flex-col h-full shadow-subtle hover:shadow-elevated">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-midnight">
        <img
          src={deal.imageUrl}
          alt={deal.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-60"></div>
        
        {/* Deal Type Badge */}
        <div className="absolute top-4 left-4 bg-midnight/90 backdrop-blur-sm text-ivory text-[10px] tracking-widest uppercase font-semibold px-3 py-1 border border-champagne/25">
          {deal.categoryLabel}
        </div>

        {/* Status Badge */}
        <div className="absolute bottom-4 right-4 bg-midnight/90 text-emerald-400 text-[10px] tracking-widest uppercase font-semibold px-2.5 py-1 border border-emerald-500/30 flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" />
          {deal.status}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between text-xs text-taupe mb-2">
            <span className="flex items-center gap-1 text-taupe font-medium">
              <MapPin className="w-3.5 h-3.5 text-champagne" />
              {deal.location}
            </span>
            <span className="text-[11px] text-champagne/70">{deal.year}</span>
          </div>

          <h3 className="text-xl font-serif text-midnight group-hover:text-royal transition-colors">
            {deal.title}
          </h3>

          <p className="text-charcoal/70 text-xs md:text-sm font-light leading-relaxed mt-2 line-clamp-3">
            {deal.description}
          </p>
        </div>

        <div className="pt-4 border-t border-navy-subtle/50 flex items-center justify-between text-xs font-semibold text-midnight group-hover:text-champagne-dark">
          <span className="uppercase tracking-wider text-[11px]">View Deal Insights</span>
          <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </div>
  );
};
