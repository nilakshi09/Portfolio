'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { heroTitles, heroShowcaseCards, socialLinks } from '@/lib/constants';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const showcaseRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!showcaseRef.current) return;
    const rect = showcaseRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x: x * 12, y: y * 12 });
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <div>
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-wider text-text-secondary mb-4"
            >
              Hi, I'm
            </motion.p>

            {/* Headline */}
            <h1 className="mb-6">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="block text-[clamp(52px,7vw,88px)] font-bold leading-[1.05] text-text-primary"
              >
                Nilakshi
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="block text-[clamp(52px,7vw,88px)] font-bold leading-[1.05] text-text-primary"
              >
                Rahangdale
              </motion.span>
            </h1>

            {/* Rotating Titles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-6 h-8"
            >
              <TypeAnimation
                sequence={heroTitles.flatMap((title) => [title, 2000])}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-xl sm:text-2xl font-medium gradient-text"
              />
            </motion.div>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-base text-text-secondary leading-relaxed max-w-md">
                I write code that ships — full-stack, end-to-end,
                built with intention and the kind of care that shows up in the details.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-gradient-to-r from-primary-blue to-primary-purple text-white rounded-[10px] shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-shadow duration-300"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:nilakshirahangdale31@gmail.com"
                className="relative inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-[10px] overflow-hidden group"
              >
                <span className="absolute inset-0 border border-transparent bg-gradient-to-r from-primary-blue to-primary-purple rounded-[10px]" style={{ padding: '1px' }} />
                <span className="absolute inset-[1px] bg-[#050505] rounded-[9px] group-hover:opacity-0 transition-opacity duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[10px]" />
                <span className="relative flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-purple group-hover:text-white transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-text-secondary hover:text-text-primary transition-colors hover:scale-110 transform duration-200"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{link.name}</span>
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column - Product Showcase */}
          <motion.div
            ref={showcaseRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block h-[500px]"
          >
            {heroShowcaseCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                style={{ transform: `translate(${mousePosition.x * (index - 1)}px, ${mousePosition.y * (index - 1)}px)` }}
                className={`
                  absolute w-[280px]
                  backdrop-blur-md
                  bg-white/[0.04]
                  border border-white/[0.08]
                  rounded-[20px]
                  p-5
                  ${index === 0 ? 'top-0 right-20 animate-float' : ''}
                  ${index === 1 ? 'top-24 right-4 animate-float-delayed' : ''}
                  ${index === 2 ? 'top-48 right-12 animate-float-slow' : ''}
                `}
              >
                <span className="inline-block px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-primary-blue bg-primary-blue/10 rounded mb-3">
                  {card.tag}
                </span>
                <h3 className="text-lg font-bold text-text-primary mb-1">
                  {card.title}
                </h3>
                <p className="text-sm text-text-secondary mb-3">
                  {card.subtitle}
                </p>
                {card.mockUI && (
                  <div className="flex flex-wrap gap-2">
                    {card.mockUI.map((item, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-[10px] font-mono bg-white/5 rounded text-text-secondary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
