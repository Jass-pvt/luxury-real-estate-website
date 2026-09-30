import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { Button } from '../components/Button';
import { servicesData } from '../data/services';

export const ServicesPreview: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 lg:py-28 bg-ivory/40 border-t border-navy-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16">
          <SectionHeading
            label="OUR SERVICES"
            title="PROPERTY GUIDANCE, FROM START TO FINISH."
            subtitle="Tailored real estate advisory services designed to simplify high-value transactions with total transparency."
            className="mb-0"
          />
          <div className="mt-6 md:mt-0 shrink-0">
            <Button
              variant="dark-outline"
              size="md"
              showArrow
              onClick={() => navigate('/services')}
            >
              VIEW ALL SERVICES
            </Button>
          </div>
        </div>

        {/* 4x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={() => navigate('/services')}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
