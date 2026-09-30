import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { TestimonialCard } from '../components/TestimonialCard';
import { testimonialsData } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-ivory/60 border-t border-navy-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="CLIENT TESTIMONIALS"
          title="WHAT OUR CLIENTS SAY"
          subtitle="Endorsements from property owners, high-net-worth buyers, and corporate leaders who have partnered with us."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>

      </div>
    </section>
  );
};
