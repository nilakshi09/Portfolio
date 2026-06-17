'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { useActiveSection } from '@/lib/hooks/useActiveSection';
import { useScrollDirection } from '@/lib/hooks/useScrollDirection';
import { navLinks } from '@/lib/constants';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`
          fixed top-0 left-0 right-0 z-50 px-6 lg:px-8 transition-all duration-300
          ${isScrolled ? 'backdrop-blur-xl bg-[#0A0A0F]/80 border-b border-white/[0.06]' : ''}
          ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}
        `}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-between h-16 relative">
            {/* Logo */}
            <a
              href="#"
              className="text-xl font-bold tracking-wide gradient-text flex-shrink-0 z-10"
            >
              <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="2" y="2" width="44" height="44" rx="4" stroke="#2DD4BF" strokeWidth="1.5"/>
  <path d="M10 36V12l12 18V12" stroke="#f9fafb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M28 12h6a4 4 0 010 8h-6v0" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round"/>
  <path d="M28 20l8 16" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round"/>
</svg>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 z-0">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`
                    relative py-2 text-sm font-medium transition-colors
                    ${activeSection === link.href ? 'text-text-primary' : 'text-text-secondary hover:text-accent'}
                  `}
                >
                  {link.name}
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex-shrink-0 z-10 flex items-center">
              {/* Resume Button */}
              <div className="hidden md:block">
                <a
                  href="https://nilakshirahangdaleresume.vercel.app/"
                  download="Nilakshi_Rahangdale_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cp-link-btn cp-link-btn--github"
                >
                  <Download className="cp-link-icon" />
                  <span>Resume</span>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#0a0a0a] z-50 md:hidden"
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-text-secondary hover:text-text-primary transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col px-8 space-y-6">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(link.href)}
                    className={`
                      text-left text-lg font-medium transition-colors
                      ${activeSection === link.href ? 'text-text-primary' : 'text-text-secondary hover:text-accent'}
                    `}
                  >
                    {link.name}
                  </motion.button>
                ))}
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  href="/Nilakshi_Rahangdale_Resume.pdf"
                  download="Nilakshi_Rahangdale_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cp-link-btn cp-link-btn--github"
                >
                  <Download className="cp-link-icon" />
                  <span>Download Resume</span>
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
