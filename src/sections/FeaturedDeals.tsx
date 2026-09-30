import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { DealCard } from '../components/DealCard';
import { Button } from '../components/Button';
import { dealsData } from '../data/deals';

export const FeaturedDeals: React.FC = () => {
  const navigate = useNavigate();
  // Grab top 3 deals
  const topDeals = dealsData.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16">
          <SectionHeading
            label="SELECTED DEALS"
            title="A SELECTION OF COMPLETED TRANSACTIONS."
            subtitle="Proof of experience through successfully structured and executed real estate transactions."
            className="mb-0"
          />
          <div className="mt-6 md:mt-0 shrink-0">
            <Button
              variant="primary"
              size="md"
              showArrow
              onClick={() => navigate('/deals')}
            >
              VIEW ALL DEALS
            </Button>
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topDeals.map((deal) => (
            <div key={deal.id} onClick={() => navigate('/deals')} className="cursor-pointer">
              <DealCard deal={deal} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
