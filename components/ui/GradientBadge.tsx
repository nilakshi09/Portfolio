'use client';

import { ReactNode } from 'react';

interface GradientBadgeProps {
  children: ReactNode;
  variant?: 'gradient' | 'outline';
  className?: string;
}

export function GradientBadge({
  children,
  variant = 'gradient',
  className = '',
}: GradientBadgeProps) {
  const baseStyles =
    'inline-flex items-center px-3 py-1 text-xs font-mono uppercase tracking-wide rounded-full';

  if (variant === 'gradient') {
    return (
      <span
        className={`
          ${baseStyles}
          bg-gradient-to-r from-primary-blue to-primary-purple
          text-white
          ${className}
        `}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={`
        ${baseStyles}
        border border-white/20
        text-text-secondary
        ${className}
      `}
    >
      {children}
    </span>
  );
}
