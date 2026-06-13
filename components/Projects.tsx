'use client';

import { useRef, useState, useCallback } from 'react';
import {
  motion,
  AnimatePresence,
  useInView,
} from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/constants';

/* ─── Accent color ─── */
const ACCENT = '#6366f1'; // electric indigo

/* ─── Animation variants ─── */
const rowVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const accordionVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { type: 'spring' as const, stiffness: 300, damping: 35 },
      opacity: { duration: 0.15 },
    },
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { type: 'spring' as const, stiffness: 300, damping: 35 },
      opacity: { duration: 0.25, delay: 0.08 },
    },
  },
};

/* ─── Floating preview tooltip ─── */
function PreviewTooltip({
  project,
  mouseY,
  parentRect,
}: {
  project: (typeof projects)[0];
  mouseY: number;
  parentRect: DOMRect | null;
}) {
  if (!parentRect) return null;

  // Position the tooltip near the row, offset to the right
  const relativeY = mouseY - parentRect.top;

  return (
    <motion.div
      className="edl-preview"
      initial={{ opacity: 0, scale: 0.92, x: -10 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.92, x: -10 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      style={{
        top: Math.max(0, Math.min(relativeY - 60, parentRect.height - 140)),
      }}
    >
      <p className="edl-preview-problem">{project.problem}</p>
      <div className="edl-preview-pills">
        {project.stack.slice(0, 3).map((tech) => (
          <span key={tech} className="edl-preview-pill">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Single project row ─── */
function ProjectRow({
  project,
  index,
  isExpanded,
  onToggle,
}: {
  project: (typeof projects)[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mouseY, setMouseY] = useState(0);
  const [rowRect, setRowRect] = useState<DOMRect | null>(null);
  const isInView = useInView(rowRef, { once: true, margin: '-60px' });

  const formattedIndex = String(index + 1).padStart(2, '0');

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (rowRef.current) {
      setRowRect(rowRef.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      setMouseY(e.clientY);
      if (rowRef.current) {
        setRowRect(rowRef.current.getBoundingClientRect());
      }
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <motion.div
      ref={rowRef}
      className="edl-row-wrapper"
      custom={index}
      variants={rowVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {/* ── Clickable row ── */}
      <div
        className={`edl-row ${isHovered ? 'edl-row--hovered' : ''} ${isExpanded ? 'edl-row--expanded' : ''}`}
        onClick={onToggle}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle();
          }
        }}
      >
        {/* Left accent border on hover */}
        <div className="edl-row-accent" aria-hidden="true" />

        {/* Index number */}
        <span className="edl-index">{formattedIndex}</span>

        {/* Project name */}
        <h3 className="edl-name">
          <span className="edl-name-text">{project.title}</span>
        </h3>

        {/* Category + tags */}
        <div className="edl-tags">
          <span className="edl-category">{project.category}</span>
          <div className="edl-stack-preview">
            {project.stack.slice(0, 2).map((tech) => (
              <span key={tech} className="edl-stack-tag">
                {tech}
              </span>
            ))}
            {project.stack.length > 2 && (
              <span className="edl-stack-tag edl-stack-tag--more">
                +{project.stack.length - 2}
              </span>
            )}
          </div>
        </div>

        {/* Arrow icon */}
        <div className="edl-arrow-wrap">
          <ArrowUpRight className="edl-arrow" />
        </div>

        {/* Floating preview — desktop only */}
        <AnimatePresence>
          {isHovered && !isExpanded && (
            <PreviewTooltip
              project={project}
              mouseY={mouseY}
              parentRect={rowRect}
            />
          )}
        </AnimatePresence>
      </div>

      {/* ── Accordion detail panel ── */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            className="edl-detail"
            variants={accordionVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
          >
            <div className="edl-detail-inner">
              <div className="edl-detail-grid">
                {/* Left: description */}
                <div className="edl-detail-left">
                  <div className="edl-detail-block">
                    <span className="edl-detail-label">Problem</span>
                    <p className="edl-detail-text edl-detail-text--problem">
                      {project.problem}
                    </p>
                  </div>
                  <div className="edl-detail-block">
                    <span className="edl-detail-label">Description</span>
                    <p className="edl-detail-text">{project.description}</p>
                  </div>
                </div>

                {/* Right: stack + links */}
                <div className="edl-detail-right">
                  <div className="edl-detail-block">
                    <span className="edl-detail-label">Tech Stack</span>
                    <div className="edl-detail-pills">
                      {project.stack.map((tech) => (
                        <span key={tech} className="edl-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="edl-detail-block">
                    <span className="edl-detail-label">Links</span>
                    <div className="edl-detail-links">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="edl-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="edl-link-ico" />
                          <span>GitHub</span>
                          <ArrowUpRight className="edl-link-arrow" />
                        </a>
                      ) : (
                        <span className="edl-link edl-link--disabled">
                          <Github className="edl-link-ico" />
                          <span>GitHub</span>
                        </span>
                      )}

                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="edl-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="edl-link-ico" />
                          <span>Live Demo</span>
                          <ArrowUpRight className="edl-link-arrow" />
                        </a>
                      ) : (
                        <span className="edl-link edl-link--disabled">
                          <ExternalLink className="edl-link-ico" />
                          <span>Live Demo</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Divider */}
      <div className="edl-divider" />
    </motion.div>
  );
}

/* ─── Main section ─── */
export function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const handleToggle = useCallback((id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="edl-section">
      {/* Header */}
      <div className="edl-header-wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="edl-header"
        >
          <span className="edl-header-tag">Projects</span>
          <h2 className="edl-title">Selected Work</h2>
          <p className="edl-subtitle">
            Real products. Real users. Real impact.
          </p>
        </motion.div>
      </div>

      {/* Project list */}
      <div className="edl-list">
        {/* Top divider */}
        <div className="edl-divider edl-divider--top" />

        {projects.map((project, index) => (
          <ProjectRow
            key={project.id}
            project={project}
            index={index}
            isExpanded={expandedId === project.id}
            onToggle={() => handleToggle(project.id)}
          />
        ))}
      </div>
    </section>
  );
}
