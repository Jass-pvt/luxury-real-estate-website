import React from 'react';
import type { Service } from '../types';
import * as Icons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  // Dynamically render icon
  const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[service.iconName] || Icons.Building2;

  return (
    <div
      onClick={onClick}
      className="group relative bg-ivory/60 border border-navy-subtle hover:border-midnight p-8 transition-all duration-500 flex flex-col justify-between cursor-pointer hover:shadow-elevated hover:bg-white"
    >
      {/* Top Header: Number + Icon + Arrow */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-3xl font-serif text-taupe group-hover:text-champagne-dark transition-colors duration-300">
            {service.number}
          </span>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-none bg-midnight/5 text-midnight group-hover:bg-midnight group-hover:text-champagne transition-all duration-300">
              <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <ArrowUpRight className="w-5 h-5 text-midnight opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-serif text-midnight mb-3 group-hover:text-royal transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-charcoal/70 text-xs md:text-sm font-light leading-relaxed">
          {service.shortDesc}
        </p>
      </div>

      {/* Footer link line */}
      <div className="mt-8 pt-4 border-t border-navy-subtle flex items-center justify-between text-[11px] uppercase tracking-widest font-semibold text-taupe group-hover:text-midnight transition-colors">
        <span>Strategic Advisory</span>
        <span className="w-6 h-px bg-taupe group-hover:w-10 group-hover:bg-midnight transition-all"></span>
      </div>
    </div>
  );
};
