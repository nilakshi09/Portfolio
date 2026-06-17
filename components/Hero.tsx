'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { socialLinks } from '@/lib/constants';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen px-6 lg:px-8 overflow-hidden">
      <div className="relative max-w-7xl mx-auto w-full min-h-screen">

        {/* Left Side — Label + Name */}
        <div className="pt-20 lg:pt-28">
          {/* Eyebrow */}
        <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.28em] text-[#8A8A8A]"
>
  <div className="w-9 h-[0.5px] bg-[#5EEAD4]/60" />
  <span>FULL STACK DEVELOPER</span>
</motion.div>

          {/* Headline */}
          <h1 className="mb-0">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="block text-[clamp(72px,11vw,140px)] font-bold leading-[1.02] text-text-primary"
            >
              Nilakshi
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="block text-[clamp(72px,11vw,140px)] font-bold leading-[1.02] text-text-primary"
            >
              Rahangdale
            </motion.span>
          </h1>
        </div>

        {/* Right Side — Description + CTA + Social (absolutely positioned, bottom-right) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="lg:absolute lg:bottom-12 lg:right-24 mt-12 lg:mt-0 pb-12 lg:pb-0"
          style={{ maxWidth: '420px' }}
        >
          {/* Description */}
          <p className="text-[16.5px] font-light text-text-secondary leading-[1.72] mb-8">
            I design and develop full-stack web applications —{' '}
            <span className="text-text-primary/80">from idea to deployment,</span>{' '}
            with a focus on performance, clarity, and{' '}
            <span className="font-medium text-text-primary">thoughtful user experience.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-medium bg-accent text-white rounded-[10px] shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] hover:bg-accent-hover hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:nilakshirahangdale31@gmail.com"
              className="cp-link-btn cp-link-btn--demo"
            >
              <Mail className="cp-link-icon" />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-text-secondary hover:text-accent transition-colors hover:scale-110 transform duration-200"
                >
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{link.name}</span>
                </a>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
