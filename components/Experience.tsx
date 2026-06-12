'use client';

import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const internship = {
  role: 'Full-Stack Developer Intern',
  company: 'NexisparkX Technologies',
  period: 'March 2026 – May 2026',
  badge: 'Internship',
  outcomes: [
    'Developed and maintained ERP modules handling inventory, HR, and workflow automation',
    'Contributed to an LMS platform — built course management, progress tracking, and role-based access',
    'Led frontend and backend development for Project Pramaan — real-time IoT water quality monitoring',
    'Built and integrated RESTful APIs consumed by multiple internal services',
    'Optimized component rendering and API response times, improving overall platform performance',
  ],
};

export function Experience() {
  const leftCol = internship.outcomes.slice(0, 3);
  const rightCol = internship.outcomes.slice(3);

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="experience-header"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-text-secondary">
            Experience
          </span>
          <h2 className="experience-title">Experience</h2>
          <p className="experience-subtitle">
            Currently building real-world experience through:
          </p>
        </motion.div>

        {/* Timeline + Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="experience-timeline-wrap"
        >
          {/* Timeline rail */}
          <div className="experience-rail" aria-hidden="true">
            <div className="experience-rail-line" />
            <div className="experience-rail-dot">
              <div className="experience-rail-dot-ping" />
            </div>
            <div className="experience-rail-line experience-rail-line--fade" />
          </div>

          {/* Main card */}
          <motion.div
            whileHover={{ scale: 1.008 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="experience-card"
          >
            {/* Card inner glow */}
            <div className="experience-card-glow" aria-hidden="true" />

            {/* Card header */}
            <div className="experience-card-top">
              <div className="experience-card-meta">
                <span className="experience-badge">{internship.badge}</span>
                <span className="experience-period">{internship.period}</span>
              </div>

              <h3 className="experience-role">
                <Code2 className="experience-role-icon" />
                {internship.role}
              </h3>
              <p className="experience-company">{internship.company}</p>
            </div>

            {/* Divider */}
            <div className="experience-divider" />

            {/* Outcomes in 2-column grid */}
            <div className="experience-outcomes">
              <div className="experience-outcomes-col">
                {leftCol.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="experience-outcome"
                  >
                    <span className="experience-outcome-dot" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
              <div className="experience-outcomes-col">
                {rightCol.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + (leftCol.length + i) * 0.08 }}
                    className="experience-outcome"
                  >
                    <span className="experience-outcome-dot" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
