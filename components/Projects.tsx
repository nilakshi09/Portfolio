'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/constants';

export function Projects() {
  return (
    <section id="projects" className="py-section px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-text-secondary">
            Projects
          </span>
          <h2 className="text-4xl font-bold text-text-primary mt-3">
            Selected Work
          </h2>
          <p className="text-text-secondary mt-2">
            Real products. Real users. Real impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white/[0.03] border border-white/[0.07] rounded-[20px] overflow-hidden"
            >
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-blue to-primary-purple" />

              <div className="p-8">
                {/* Category Tag */}
                <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-wider text-primary-indigo bg-primary-indigo/10 rounded-full mb-4">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {project.title}
                </h3>

                {/* Problem */}
                <p className="text-sm text-text-secondary italic mb-4">
                  {project.problem}
                </p>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-white/[0.04] border border-white/[0.06] rounded-full text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary border border-white/[0.1] hover:border-white/20 rounded-[10px] transition-all"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary-blue to-primary-purple text-white rounded-[10px] hover:opacity-90 transition-opacity"
                    >
                      Live Demo
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-muted bg-white/[0.02] border border-white/[0.05] rounded-[10px] cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
