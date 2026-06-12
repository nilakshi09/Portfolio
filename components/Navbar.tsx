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
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled ? 'backdrop-blur-md bg-white/[0.03] border-b border-white/[0.06]' : ''}
          ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#"
              className="text-xl font-bold tracking-wide gradient-text"
            >
              NR
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`
                    relative py-2 text-sm font-medium transition-colors
                    ${activeSection === link.href ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}
                  `}
                >
                  {link.name}
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-blue to-primary-purple"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Resume Button */}
            <div className="hidden md:block">
              <a
                href="/resume.pdf"
                className="relative inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-[10px] overflow-hidden group"
              >
                <span className="absolute inset-0 border border-transparent bg-gradient-to-r from-primary-blue to-primary-purple opacity-100 group-hover:opacity-0 transition-opacity duration-300" style={{ padding: '1px' }} />
                <span className="absolute inset-[1px] bg-[#050505] rounded-[9px] group-hover:opacity-0 transition-opacity duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[10px]" />
                <span className="relative flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-purple group-hover:text-white transition-colors duration-300">
                  <Download className="w-4 h-4" />
                  Resume
                </span>
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
                      ${activeSection === link.href ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}
                    `}
                  >
                    {link.name}
                  </motion.button>
                ))}
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  href="/resume.pdf"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium bg-gradient-to-r from-primary-blue to-primary-purple text-white rounded-[10px]"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
