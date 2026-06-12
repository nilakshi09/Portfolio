'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/constants';

/* Unique accent colors per project */
const accents: { from: string; to: string; glow: string }[] = [
  { from: '#3B82F6', to: '#6366F1', glow: 'rgba(99,102,241,0.14)' },
  { from: '#8B5CF6', to: '#EC4899', glow: 'rgba(139,92,246,0.14)' },
  { from: '#06B6D4', to: '#3B82F6', glow: 'rgba(6,182,212,0.14)' },
  { from: '#10B981', to: '#3B82F6', glow: 'rgba(16,185,129,0.14)' },
  { from: '#F59E0B', to: '#EF4444', glow: 'rgba(245,158,11,0.14)' },
  { from: '#6366F1', to: '#8B5CF6', glow: 'rgba(99,102,241,0.14)' },
];

/* ─── Single sticky project card ─── */
function ProjectCard({
  project,
  index,
  total,
}: {
  project: (typeof projects)[0];
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const accent = accents[index % accents.length];
  const isEven = index % 2 === 1;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  /* ── Scroll-driven transforms ── */
  // Entry: 0→0.3 = fade in + slide up
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.65, 0.85], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.65, 0.85], [0.92, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.65, 0.85], [60, 0, 0, -30]);

  /* ── Stagger children ── */
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
  };

  return (
    <div
      ref={cardRef}
      className="proj-scroll-segment"
      style={{ zIndex: total - index }}
    >
      <div className="proj-sticky-frame">
        <motion.article
          className="proj-card-wrap"
          style={{ opacity, scale, y, willChange: 'transform, opacity' }}
        >
          {/* Radial glow */}
          <div
            className="proj-glow"
            style={{
              background: `radial-gradient(ellipse 60% 50% at ${isEven ? '30%' : '70%'} 50%, ${accent.glow} 0%, transparent 70%)`,
            }}
            aria-hidden="true"
          />

          <div className={`proj-card ${isEven ? 'proj-card--rev' : ''}`}>
            {/* ── Visual panel ── */}
            <div className="proj-vis">
              <div
                className="proj-vis-inner"
                style={{
                  background: `linear-gradient(135deg, ${accent.from}0A 0%, ${accent.to}06 100%)`,
                }}
              >
                <div className="proj-vis-orbs" aria-hidden="true">
                  <div
                    className="proj-vis-orb"
                    style={{ background: `radial-gradient(circle, ${accent.from}30 0%, transparent 70%)` }}
                  />
                  <div
                    className="proj-vis-orb proj-vis-orb--sm"
                    style={{ background: `radial-gradient(circle, ${accent.to}25 0%, transparent 70%)` }}
                  />
                </div>

                <span
                  className="proj-vis-letter"
                  style={{ backgroundImage: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
                >
                  {project.title.charAt(0)}
                </span>

                {project.mockUI && (
                  <div className="proj-vis-pills">
                    {project.mockUI.map((pill, i) => (
                      <span
                        key={i}
                        className="proj-vis-pill"
                        style={{ borderColor: `${accent.from}35` }}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* ── Content panel ── */}
            <motion.div
              className="proj-content"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
            >
              <motion.span variants={fadeUp} className="proj-category">
                {project.category}
              </motion.span>

              <motion.h3 variants={fadeUp} className="proj-name">
                {project.title}
              </motion.h3>

              <motion.p variants={fadeUp} className="proj-problem">
                {project.problem}
              </motion.p>

              <motion.p variants={fadeUp} className="proj-desc">
                {project.description}
              </motion.p>

              <motion.div variants={fadeUp} className="proj-stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="proj-badge">{tech}</span>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="proj-actions">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-btn proj-btn--ghost"
                  >
                    <Github className="proj-btn-ico" />
                    GitHub
                  </a>
                ) : (
                  <button disabled className="proj-btn proj-btn--ghost proj-btn--off">
                    <Github className="proj-btn-ico" />
                    GitHub
                  </button>
                )}

                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-btn proj-btn--fill"
                  >
                    <ExternalLink className="proj-btn-ico" />
                    Live Demo
                  </a>
                ) : (
                  <button disabled className="proj-btn proj-btn--fill proj-btn--off">
                    <ExternalLink className="proj-btn-ico" />
                    Live Demo
                  </button>
                )}
              </motion.div>
            </motion.div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}

/* ─── Dot navigation / progress indicator ─── */
function ProjectNav({ total, active }: { total: number; active: number }) {
  return (
    <nav className="proj-nav" aria-label="Project navigation">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          className={`proj-nav-dot ${i === active ? 'proj-nav-dot--active' : ''}`}
          onClick={() => {
            const el = document.getElementById(`proj-${i}`);
            el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          aria-label={`Go to project ${i + 1}`}
        />
      ))}
    </nav>
  );
}

/* ─── Main section ─── */
export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* Track which project is most visible */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(
      projects.length - 1,
      Math.max(0, Math.floor(v * projects.length))
    );
    setActiveIndex(idx);
  });

  return (
    <section id="projects" ref={sectionRef} className="proj-section">
      {/* Header */}
      <div className="proj-header-wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="proj-header"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-text-secondary">
            Projects
          </span>
          <h2 className="proj-title">Selected Work</h2>
          <p className="proj-subtitle">
            Real products. Real users. Real impact.
          </p>
        </motion.div>
      </div>

      {/* Dot nav — desktop only */}
      {!isMobile && <ProjectNav total={projects.length} active={activeIndex} />}

      {/* Sticky scroll cards */}
      <div className="proj-scroll-container">
        {projects.map((project, index) => (
          <div key={project.id} id={`proj-${index}`}>
            {isMobile ? (
              /* Mobile: simple fade-in cards, no sticky */
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
                className="proj-mobile-card"
              >
                <MobileCardContent project={project} index={index} />
              </motion.article>
            ) : (
              <ProjectCard
                project={project}
                index={index}
                total={projects.length}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Mobile card (no sticky, stacked) ─── */
function MobileCardContent({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const accent = accents[index % accents.length];

  return (
    <div className="proj-card proj-card--mobile">
      <div className="proj-vis">
        <div
          className="proj-vis-inner"
          style={{
            background: `linear-gradient(135deg, ${accent.from}0A 0%, ${accent.to}06 100%)`,
          }}
        >
          <span
            className="proj-vis-letter"
            style={{ backgroundImage: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
          >
            {project.title.charAt(0)}
          </span>
          {project.mockUI && (
            <div className="proj-vis-pills">
              {project.mockUI.map((pill, i) => (
                <span key={i} className="proj-vis-pill" style={{ borderColor: `${accent.from}35` }}>
                  {pill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="proj-content">
        <span className="proj-category">{project.category}</span>
        <h3 className="proj-name">{project.title}</h3>
        <p className="proj-problem">{project.problem}</p>
        <p className="proj-desc">{project.description}</p>
        <div className="proj-stack">
          {project.stack.map((tech) => (
            <span key={tech} className="proj-badge">{tech}</span>
          ))}
        </div>
        <div className="proj-actions">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-btn proj-btn--ghost">
              <Github className="proj-btn-ico" /> GitHub
            </a>
          ) : (
            <button disabled className="proj-btn proj-btn--ghost proj-btn--off">
              <Github className="proj-btn-ico" /> GitHub
            </button>
          )}
          {project.live ? (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="proj-btn proj-btn--fill">
              <ExternalLink className="proj-btn-ico" /> Live Demo
            </a>
          ) : (
            <button disabled className="proj-btn proj-btn--fill proj-btn--off">
              <ExternalLink className="proj-btn-ico" /> Live Demo
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
