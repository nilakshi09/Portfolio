'use client';

import { motion } from 'framer-motion';

const aboutStats = [
  { value: '5+', label: 'Projects Shipped', sublabel: 'SaaS · IoT · Web' },
  { value: '1', label: 'Internship', sublabel: 'Full-Stack · NexisparkX' },
  { value: '3+', label: 'Systems Built', sublabel: 'ERP · LMS · IoT' },
];

export function About() {
  return (
    <section id="about" className="py-section px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="experience-header"
        >
          <h2 className="experience-title">About</h2>
        </motion.div>

        <div className="about-grid">
          {/* Left column — bio text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-bio"
          >
            <p>
              {"I'm a final-year Computer Science student at PIEMR, Indore — building full-stack applications that actually ship."}
            </p>
            <p>
              {"I've worked as a Full-Stack Developer Intern at NexisparkX Technologies, contributing to ERP systems, LMS platforms, and real-time sensor pipelines. My stack spans React, Next.js, Node.js, PostgreSQL, and modern frontend tooling."}
            </p>
          </motion.div>

          {/* Right column — stats table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="about-stats"
          >
            {aboutStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className={`about-stat-row ${index === 0 ? 'about-stat-row--first' : ''}`}
              >
                <span className="about-stat-value">{stat.value}</span>
                <div className="about-stat-info">
                  <span className="about-stat-label">{stat.label}</span>
                  <span className="about-stat-sublabel">{stat.sublabel}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
