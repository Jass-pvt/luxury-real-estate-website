import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home,
  User,
  Briefcase,
  Building2,
  Mail,
  MessageSquare
} from 'lucide-react';
import { consultantProfile } from '../data/consultant';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keep page content clear of the fixed mobile bottom dock.
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const updateMobileSpace = () => {
      document.body.style.paddingBottom = mediaQuery.matches ? '96px' : '';
    };

    updateMobileSpace();
    mediaQuery.addEventListener('change', updateMobileSpace);

    return () => {
      mediaQuery.removeEventListener('change', updateMobileSpace);
      document.body.style.paddingBottom = '';
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Services', path: '/services', icon: Briefcase },
    { name: 'Our Deals', path: '/deals', icon: Building2 },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const whatsappUrl = `https://wa.me/${consultantProfile.whatsapp}?text=${encodeURIComponent(
    consultantProfile.whatsappMessage
  )}`;

  return (
    <>
      {/* ==================== MOBILE TOP LOGO BAR ==================== */}
      <div className="md:hidden bg-midnight px-5 py-4 border-b border-white/10 flex items-center justify-between">
        <NavLink to="/" className="flex flex-col min-w-0">
          <span className="font-serif text-lg tracking-tight text-ivory truncate">
            {consultantProfile.businessName}
          </span>
          <span className="text-[8px] font-sans uppercase font-bold tracking-widest text-champagne/90 -mt-0.5">
            {consultantProfile.tagline}
          </span>
        </NavLink>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-1.5 px-3 py-2 text-[10px] font-semibold tracking-wider uppercase border border-champagne/40 text-ivory hover:border-champagne transition-colors"
        >
          <MessageSquare className="w-3 h-3 text-champagne" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* ==================== DESKTOP TOP NAVBAR ==================== */}
      <header
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-midnight/95 backdrop-blur-md py-4 border-b border-white/10 shadow-lg text-ivory'
            : 'bg-midnight text-ivory py-6 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <NavLink to="/" className="group flex flex-col justify-center">
            <span className="font-serif text-2xl md:text-3xl tracking-tight text-ivory group-hover:text-champagne transition-colors">
              {consultantProfile.businessName}
            </span>
            <span className="text-[10px] font-sans uppercase font-bold tracking-widest text-champagne/90 -mt-0.5">
              {consultantProfile.tagline}
            </span>
          </NavLink>

          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-xs uppercase tracking-widest font-medium transition-colors py-1 ${
                    isActive
                      ? 'text-champagne font-semibold'
                      : 'text-ivory/80 hover:text-champagne'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicatorDesktop"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-champagne"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase border border-champagne/40 text-ivory hover:border-champagne hover:bg-champagne hover:text-midnight transition-all duration-300"
            >
              <MessageSquare className="w-3.5 h-3.5 text-champagne group-hover:text-midnight transition-colors" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </header>

      {/* ==================== MOBILE FLOATING BOTTOM DOCK ==================== */}
      <div className="md:hidden fixed bottom-3 left-0 right-0 z-50 px-3 flex justify-center pointer-events-none">
        <nav className="pointer-events-auto bg-[#181622]/95 backdrop-blur-lg border border-white/10 rounded-full px-2 py-2 flex items-center justify-between w-full max-w-md shadow-2xl">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className="relative flex-1 min-w-0 flex flex-col items-center justify-center py-1.5 px-1 z-10 transition-colors duration-300"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeMobileTab"
                    className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-indigo-500 rounded-full shadow-[0_0_15px_rgba(147,51,234,0.5)] -z-10"
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30
                    }}
                  />
                )}

                <Icon
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isActive
                      ? 'text-white scale-110'
                      : 'text-gray-400'
                  }`}
                />

                <span
                  className={`text-[9px] sm:text-[10px] mt-1 font-medium tracking-wide text-center leading-tight transition-colors ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-gray-400'
                  }`}
                >
                  {link.name}
                </span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </>
  );
};