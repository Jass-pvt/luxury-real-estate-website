import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { Banknote, FileText, CheckCircle, ShieldCheck } from 'lucide-react';

export const FinanceSection: React.FC = () => {
  const navigate = useNavigate();

  const financePillars = [
    {
      icon: Banknote,
      title: 'Home Loan Assistance',
      desc: 'Guiding buyers through competitive interest rate comparison across premier banking institutions.'
    },
    {
      icon: ShieldCheck,
      title: 'Property Loan Guidance',
      desc: 'Advisory on Loan Against Property (LAP) and commercial project funding structures.'
    },
    {
      icon: FileText,
      title: 'Documentation Support',
      desc: 'Assistance in compiling title deeds, income clearance, legal verification, and bank valuation files.'
    },
    {
      icon: CheckCircle,
      title: 'Loan Process Assistance',
      desc: 'Coordinating directly with bank credit officers to ensure smooth sanctioning and disbursement.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-ivory text-midnight border-t border-navy-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Paragraph */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              label="FINANCIAL ADVISORY SUPPORT"
              title="PROPERTY FINANCE, & SIMPLIFIED."
              subtitle="Guidance and assistance through the property financing process to make your acquisition seamless and stress-free."
            />

            <p className="text-charcoal/80 text-sm md:text-base font-light leading-relaxed">
              Securing high-value property financing requires clear documentation and strong banking coordination. We guide you through eligible mortgage options, interest rates, and loan structures through our established network of banking partners.
            </p>

            <div className="p-4 bg-royal/5 border border-navy-subtle text-xs text-charcoal/80 font-light">
              <strong className="font-semibold text-midnight block mb-1">Fiduciary Transparency Note:</strong>
              S P Real Estate provides professional loan guidance and documentation support. We do not directly issue loans or act as a financial lender.
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                showArrow
                onClick={() => navigate('/contact')}
              >
                GET FINANCE ASSISTANCE
              </Button>
            </div>
          </div>

          {/* Right Column: 4 Grid Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {financePillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-navy-subtle p-6 md:p-8 hover:border-midnight transition-all duration-300 shadow-subtle flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 w-fit bg-midnight text-champagne mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-serif text-midnight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-charcoal/70 text-xs md:text-sm font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-navy-subtle/40 text-[10px] uppercase font-bold tracking-widest text-taupe">
                    Advisory Support
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
