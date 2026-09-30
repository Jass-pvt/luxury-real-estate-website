import React from 'react';
import { Hero } from '../sections/Hero';
import { StatsStrip } from '../sections/StatsStrip';
import { AboutPreview } from '../sections/AboutPreview';
import { ServicesPreview } from '../sections/ServicesPreview';
import { FeaturedDeals } from '../sections/FeaturedDeals';
import { WhyChooseUs } from '../sections/WhyChooseUs';
import { FinanceSection } from '../sections/FinanceSection';
import { Testimonials } from '../sections/Testimonials';
import { FinalCTA } from '../sections/FinalCTA';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <StatsStrip />
      <AboutPreview />
      <ServicesPreview />
      <FeaturedDeals />
      <WhyChooseUs />
      <FinanceSection />
      <Testimonials />
      <FinalCTA />
    </main>
  );
};