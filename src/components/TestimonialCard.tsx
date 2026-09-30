import React from 'react';
import type { Testimonial } from '../types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="relative bg-ivory border border-navy-subtle p-8 md:p-10 flex flex-col justify-between shadow-subtle hover:border-champagne/60 transition-all duration-300">
      {/* Editorial Large Quote Icon */}
      <div className="mb-6 text-champagne-dark/40 flex justify-between items-start">
        <Quote className="w-10 h-10 rotate-180 stroke-[1.2]" />
        <span className="text-[10px] uppercase tracking-widest text-taupe font-semibold bg-midnight/5 px-2.5 py-1">
          {testimonial.dealType}
        </span>
      </div>

      {/* Quote Body */}
      <p className="text-midnight text-base md:text-lg font-serif italic leading-relaxed mb-8">
        "{testimonial.quote}"
      </p>

      {/* Client Meta */}
      <div className="pt-6 border-t border-navy-subtle/40 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-sans font-bold uppercase tracking-wider text-midnight">
            {testimonial.clientName}
          </h4>
          {testimonial.clientRole && (
            <p className="text-xs text-taupe font-light mt-0.5">
              {testimonial.clientRole}
            </p>
          )}
        </div>
        <span className="text-xs text-champagne-dark font-medium uppercase tracking-widest">
          {testimonial.location}
        </span>
      </div>
    </div>
  );
};
