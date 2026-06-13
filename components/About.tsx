'use client';

import { motion } from 'framer-motion';
import { stats } from '@/lib/constants';

export function About() {
  return (
    <section id="about" className="py-section px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-text-secondary">
            About
          </span>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-lg text-text-secondary leading-8 mb-6">
            {"I'm a final-year Computer Science student at PIEMR, Indore — building full-stack applications that actually ship."}
          </p>
          <p className="text-lg text-text-secondary leading-8">
            {"I've worked as a Full-Stack Developer Intern at NexisparkX Technologies, contributing to ERP systems, LMS platforms, and real-time sensor pipelines. My stack spans React, Next.js, Node.js, PostgreSQL, and modern frontend tooling."}
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 w-full"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className={[
                'px-6 py-4 text-center sm:text-left',
                index !== 0 ? 'sm:border-l sm:border-[#333]' : '',
                index >= 2
                  ? 'col-span-2 sm:col-span-1 border-t border-[#333] pt-8 sm:pt-4 sm:border-t-0'
                  : '',
              ].join(' ')}
            >
              <p className="text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-text-secondary">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
