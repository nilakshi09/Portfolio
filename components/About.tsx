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

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Monogram */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start"
          >
            {/* Monogram */}
            <div className="relative">
              <div className="w-[200px] h-[200px] rounded-full flex items-center justify-center relative overflow-hidden">
                <div
                  className="absolute inset-0 rounded-full animate-gradient-rotate"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6, #6366F1, #8B5CF6)',
                    filter: 'blur(20px)',
                    opacity: 0.4,
                  }}
                />
                <div
                  className="absolute inset-[2px] rounded-full bg-[#050505]"
                />
                <div
                  className="absolute inset-[2px] rounded-full"
                  style={{
                    background: 'linear-gradient(#050505, #050505) padding-box, linear-gradient(135deg, #3B82F6, #8B5CF6) border-box',
                    border: '2px solid transparent',
                  }}
                />
                <span className="relative text-5xl font-bold gradient-text">
                  NR
                </span>
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 font-mono text-sm text-text-secondary flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Open to opportunities
            </motion.div>
          </motion.div>

          {/* Right - Bio */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-base text-text-secondary leading-8 max-w-lg mb-12">
                I'm a final-year Computer Science student at PIEMR, Indore —
                building full-stack applications and IoT systems that actually ship.
                <br /><br />
                I've worked as a Full-Stack Developer Intern at NexisparkX Technologies,
                contributing to ERP systems, LMS platforms, and real-time sensor pipelines.
                My stack spans React, Next.js, Node.js, PostgreSQL, and modern frontend tooling.
                <br /><br />
                I enjoy building products end-to-end — from database schema design
                to polished, production-ready interfaces.
              </p>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6"
                >
                  <p className="text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
