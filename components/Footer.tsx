'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - Copyright */}
        <p className="text-sm text-text-muted">
          Designed & built by Nilakshi Rahangdale · 2025
        </p>

        {/* Right - Social Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                <Icon className="w-5 h-5" />
                <span className="sr-only">{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
