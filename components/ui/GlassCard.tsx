'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({
  children,
  className = '',
  hover = false,
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={`
        bg-white/[0.03]
        backdrop-blur-md
        border border-white/[0.08]
        rounded-[20px]
        ${hover ? 'hover:border-white/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.12)]' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
