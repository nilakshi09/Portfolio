'use client';

import { motion } from 'framer-motion';

const aboutStats = [
  { value: '5+', label: 'Projects Shipped' },
  { value: '1', label: 'Internship' },
  { value: '27', label: 'Graduating' }
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
          className="about-header"
        >
          <div className="font-mono text-[11px] font-normal tracking-[0.14em] uppercase text-[#A1A1AA] mb-6">
            <span className="text-[#14b8a6]">01</span> &nbsp;ABOUT
          </div>
          {/* <h2 className="cp-title mb-8">About</h2> */}
          <br />
          <h3 className="about-title">I engineer the backend. I design the frontend. I ship the whole thing.</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="about-divider"
        />

        <div className="about-grid">
          {/* Left column — bio text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="about-bio"
          >
            <p>
              Final-year CS student at PIEMR, Indore — currently building production-grade web applications and caring deeply about every layer in between.
            </p>
          </motion.div>

          {/* Right column — stats horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="about-stats"
          >
            {aboutStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="about-stat-item"
              >
                <span className="about-stat-value">
                  {stat.label === 'Graduating' ? (
                    <div className="flex items-start">
                      <span className="relative -top-[0.15em] mr-[0.08em] font-light">’</span>
                      <span>{stat.value}</span>
                    </div>
                  ) : (
                    stat.value
                  )}
                </span>
                <span className="about-stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
