'use client';

import { motion } from 'framer-motion';

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
  tags: [
    'Next.js',
    'React',
    'Node.js',
    'REST APIs',
    'PostgreSQL',
    'ESP32',
    'IoT',
    'ERP',
    'LMS',
  ],
};

const stats = [
  { value: '3+', label: 'SYSTEMS' },
  { value: '2', label: 'MONTHS' },
  { value: '6+', label: 'MODULES' },
];

export function Experience() {
  return (
    <section id="experience" className="py-section px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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

        {/* Experience Entry — open layout */}
        <div className="exp-entry max-w-[900px]">
          {/* Top Row */}
          <div className="exp-top-row">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="exp-left"
            >
              {/* Date row */}
              <div className="exp-date-row">
                <span className="exp-date-dot" aria-hidden="true" />
                <span className="exp-date-text">{internship.period}</span>
              </div>

              {/* Role */}
              <h3 className="exp-role">{internship.role}</h3>

              {/* Company · location */}
              <p className="exp-company">{internship.company}</p>
            </motion.div>

            <div className="exp-right">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="stat-card"
                >
                  <div className="stat-card-value">{stat.value}</div>
                  <div className="stat-card-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ width: '0%', opacity: 0 }}
            whileInView={{ width: '100%', opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="exp-divider"
          />

          {/* Bullet points */}
          <ul className="exp-bullets">
            {internship.outcomes.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="exp-bullet"
              >
                <span className="exp-arrow" aria-hidden="true">→</span>
                <span className="exp-bullet-text">{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* Tech stack tags */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: 0.3 + internship.outcomes.length * 0.08 + 0.1 }}
            className="exp-tags"
          >
            {internship.tags.map((tag, i) => (
              <span key={i} className="exp-tag">{tag}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
