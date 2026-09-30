import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { consultantProfile } from '../data/consultant';
import { ShieldCheck, Award, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90svh] lg:min-h-screen bg-midnight text-ivory overflow-hidden">

      {/* =========================================================
          BACKGROUND ARCHITECTURAL IMAGE
      ========================================================= */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity">
        <img
          src={consultantProfile.heroImageUrl}
          alt="Luxury Architecture Background"
          className="w-full h-full object-cover object-center scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/90 to-midnight/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/80"></div>
      </div>

      {/* =========================================================
          DECORATIVE EDITORIAL LINES
      ========================================================= */}
      <div className="hidden lg:block absolute left-12 top-1/3 bottom-1/3 w-px bg-champagne/20"></div>
      <div className="hidden lg:block absolute right-12 top-1/4 bottom-1/4 w-px bg-champagne/15"></div>


      {/* =========================================================
          HERO CONTENT
      ========================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-32 lg:pt-28 lg:pb-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-16 items-center">


          {/* =====================================================
              LEFT SIDE — HERO TEXT
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8"
          >

            {/* Small Label */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-champagne shrink-0"></span>
              <span className="text-xs uppercase font-semibold tracking-mega text-champagne">
                {consultantProfile.tagline}
              </span>
            </div>


            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif leading-[1.02] tracking-tight text-ivory">
              PROPERTY
              <br />
              DECISIONS,
              <br />
              <span className="italic text-champagne font-normal">
                DONE RIGHT.
              </span>
            </h1>


            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl font-sans font-light text-ivory/80 max-w-xl leading-relaxed">
              Trusted guidance for buying, selling and investing in property —
              with experience, transparency and a personal approach.
            </p>


            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                variant="champagne"
                size="lg"
                showArrow
                onClick={() => navigate('/deals')}
              >
                EXPLORE OUR WORK
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/contact')}
              >
                CONTACT US
              </Button>
            </div>


            {/* Trust / Experience / Results */}
            <div className="pt-8 border-t border-champagne/15 flex flex-wrap items-center gap-6 sm:gap-10 text-xs text-taupe font-semibold uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-champagne" />
                <span>TRUST</span>
              </div>

              <span className="text-champagne/30">•</span>

              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-champagne" />
                <span>EXPERIENCE</span>
              </div>

              <span className="text-champagne/30">•</span>

              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-champagne" />
                <span>RESULTS</span>
              </div>
            </div>

          </motion.div>



          {/* =====================================================
              RIGHT SIDE — ORIGINAL OVERLAY DESIGN (LARGER CARD)
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-5 relative w-full flex justify-center lg:justify-end"
          >
            {/* Outer Box Container with Inner Padded Border */}
            <div className="relative w-full max-w-[460px] lg:max-w-none p-2 sm:p-2.5 bg-midnight/90 border border-champagne/30 shadow-2xl">

              {/* Main Image Container — Height Expanded to lg:h-[660px] */}
              <div className="relative w-full h-[540px] sm:h-[600px] lg:h-[660px] overflow-hidden bg-royal border border-champagne/20">

                <img
                  src={consultantProfile.ownerImageUrl}
                  alt={consultantProfile.ownerName}
                  className="w-full h-full object-cover object-[center_15%] filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700 block"
                />

                {/* Floating "Featured Portfolio" Badge (Original Design) */}
                <div className="absolute top-4 left-4 bg-midnight/80 backdrop-blur-md px-3.5 py-1.5 border border-champagne/30 z-20">
                  <span className="text-[10px] sm:text-xs tracking-widest uppercase text-champagne font-semibold">
                    Featured Portfolio
                  </span>
                </div>

                {/* Bottom Information Overlay Box */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 bg-midnight/90 backdrop-blur-md p-4 sm:p-5 border border-champagne/30 z-20">
                  <p className="text-xs sm:text-sm uppercase font-semibold tracking-widest text-champagne">
                    {consultantProfile.ownerName}
                  </p>
                  <p className="text-[11px] sm:text-xs font-light text-ivory/70 mt-0.5">
                    {consultantProfile.role}
                  </p>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
};