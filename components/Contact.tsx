'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const EMAIL = 'nilakshirahangdale31@gmail.com';

const socialNav = [
  {
    label: 'GitHub',
    href: 'https://github.com/nilakshi09',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/nilakshi-rahangdale',
  },
  {
    label: 'Resume',
    href: '/resume.pdf',
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      navigator.clipboard.writeText(EMAIL).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
      // Open mailto after a tiny delay so copy completes
      setTimeout(() => {
        window.location.href = `mailto:${EMAIL}`;
      }, 150);
    },
    []
  );

  return (
    <section id="contact" className="contact-finale">
      {/* Animated background elements */}
      <div className="contact-bg" aria-hidden="true">
        <div className="contact-orb contact-orb--primary" />
        <div className="contact-orb contact-orb--secondary" />
        <div className="contact-orb contact-orb--accent" />
        <div className="contact-grid-texture" />
      </div>

      <div className="contact-inner">
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="contact-label"
        >
          Contact
        </motion.span>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="contact-heading"
        >
          Ready to Build Something{' '}
          <span className="contact-heading-accent">Exceptional</span>?
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="contact-supporting"
        >
          Open to Full-Stack, Frontend, Backend, and Software Engineering
          opportunities. Always excited to solve challenging problems and build
          products that create real impact.
        </motion.p>

        {/* Email centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="contact-email-wrap"
        >
          {/* Radial glow behind email */}
          <div className="contact-email-glow" aria-hidden="true" />

          <a
            href={`mailto:${EMAIL}`}
            onClick={handleEmailClick}
            className="contact-email"
            aria-label={`Send email to ${EMAIL}`}
          >
            <span className="contact-email-text">{EMAIL}</span>
            <span className="contact-email-underline" />
          </a>

          {/* Copy confirmation */}
          <motion.span
            initial={false}
            animate={{
              opacity: copied ? 1 : 0,
              y: copied ? 0 : 8,
            }}
            transition={{ duration: 0.25 }}
            className="contact-copied"
          >
            Copied to clipboard ✓
          </motion.span>
        </motion.div>

        {/* Social navigation */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="contact-social-nav"
          aria-label="Social links"
        >
          {socialNav.map((item, index) => (
            <span key={item.label} className="contact-social-item-wrap">
              {index > 0 && (
                <span className="contact-social-dot" aria-hidden="true">
                  •
                </span>
              )}
              <a
                href={item.href}
                target={item.label !== 'Resume' ? '_blank' : undefined}
                rel={
                  item.label !== 'Resume' ? 'noopener noreferrer' : undefined
                }
                className="contact-social-link"
              >
                <span className="contact-social-link-text">{item.label}</span>
                <span className="contact-social-link-underline" />
              </a>
            </span>
          ))}
        </motion.nav>
      </div>
    </section>
  );
}
