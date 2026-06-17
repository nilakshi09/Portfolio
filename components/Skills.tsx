'use client';

import { motion } from 'framer-motion';
import { skillGroups } from '@/lib/constants';

export function Skills() {
  return (
    <section id="skills" className="py-section px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-4xl font-bold text-text-primary">
            Tech Stack
          </h2>
        </motion.div>

        {/* Skill Groups */}
        <div className="mt-12 space-y-10">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-mono uppercase tracking-wider text-text-secondary">
                  {group.category}
                </span>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: groupIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="
                      px-4 py-2
                      font-mono text-sm
                      bg-white/[0.04]
                      border border-white/[0.08]
                      rounded-full
                      text-text-secondary
                      hover:border-[#14b8a6]
                      hover:text-[#14b8a6]
                      transition-colors duration-200 ease-in-out
                      cursor-default
                      outline-none focus:outline-none
                    "
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
