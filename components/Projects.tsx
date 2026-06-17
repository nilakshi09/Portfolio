'use client';

import { useRef, useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/constants';

/* ─── Accent color ─── */
const PROJECT_ACCENT = '#2DD4BF';

/* ─── Main section ─── */
export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [exitIndex, setExitIndex] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  const totalProjects = projects.length;

  function handleTabClick(index: number) {
    if (index === activeIndex) return;
    setExitIndex(activeIndex);
    setActiveIndex(index);
    // Clear exit state after transition finishes
    setTimeout(() => setExitIndex(null), 500);
  }

  const isMounted = useRef(false);

  // Scroll active tab into view on mobile
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    if (!tabsRef.current) return;
    const activeTab = tabsRef.current.children[activeIndex] as HTMLElement;
    if (activeTab) {
      activeTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [activeIndex]);

  // IntersectionObserver for scroll entrance animation
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`cp-section ${revealed ? 'cp-revealed' : ''}`}
    >
      {/* ── Section header ── */}
      <div className="cp-header-wrap">
        <div className="cp-header cp-anim-header">
          <h2 className="cp-title">Projects</h2>
        </div>
      </div>

      {/* ── PART 1: Project Navbar ── */}
      <div className="cp-navbar">
        <div className="cp-tabs" ref={tabsRef}>
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={`cp-tab cp-anim-tab ${activeIndex === index ? 'cp-tab--active' : ''}`}
              onClick={() => handleTabClick(index)}
              type="button"
              aria-label={`View project: ${project.title}`}
              style={{ '--tab-delay': `${index * 0.05}s` } as React.CSSProperties}
            >
              <span className="cp-tab-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="cp-tab-name">{project.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── PART 2: Content Panel ── */}
      <div className="cp-panel">
        {/* All slides rendered, visibility controlled via CSS */}
        {projects.map((project, index) => {
          const isActive = index === activeIndex;
          const isExiting = index === exitIndex;

          let slideClass = 'cp-slide';
          if (isActive) slideClass += ' cp-slide--active';
          else if (isExiting) slideClass += ' cp-slide--exit';

          return (
            <div key={project.id} className={slideClass}>
              {/* ── LEFT COLUMN ── */}
              <div className="cp-col-left cp-anim-left">
                <span className="cp-counter">
                  {String(index + 1).padStart(2, '0')} / {String(totalProjects).padStart(2, '0')}
                </span>

                <h3 className="cp-project-name">
                  {project.title}
                </h3>

                <span className="cp-domain">{project.category}</span>

                <div className="cp-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cp-link-btn cp-link-btn--github"
                    >
                      <Github className="cp-link-icon" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cp-link-btn cp-link-btn--demo"
                    >
                      <ExternalLink className="cp-link-icon" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="cp-link-btn cp-link-btn--demo cp-link-btn--disabled"
                      title="No live demo available"
                    >
                      <ExternalLink className="cp-link-icon" />
                      <span>Live Demo</span>
                    </button>
                  )}
                </div>
              </div>

              {/* ── RIGHT COLUMN ── */}
              <div className="cp-col-right cp-anim-right">
                <p className="cp-description">{project.description}</p>

                <div className="cp-chips">
                  {project.stack.map((tech) => (
                    <span key={tech} className="cp-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.mockUI && project.mockUI.length > 0 && (
                  <div className="cp-highlight">
                    <span className="cp-highlight-label">
                      {project.mockUI[0]}
                    </span>
                    {project.mockUI.length > 1 && (
                      <span className="cp-highlight-sub">
                        {project.mockUI.slice(1).join(' · ')}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
