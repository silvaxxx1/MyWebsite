import { useIntersection } from '../hooks/useIntersection';
import { siteData } from '../data/site';
import './Systems.css';

const colorMap: Record<string, string> = {
  cyan: 'var(--cyan)',
  amber: 'var(--amber)',
  green: 'var(--green)',
  muted: 'var(--text-muted)',
};

export default function Systems() {
  const { ref, visible } = useIntersection();

  return (
    <section id="systems" className="section systems">
      <div className="container">
        <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
          <p className="section-label">Projects</p>
          <h2 className="section-title">Systems Built</h2>
          <p className="section-subtitle">
            From research frameworks to production platforms — each project engineered for real-world impact.
          </p>
        </div>

        <div className="systems__grid">
          {siteData.projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof siteData.projects[0]; index: number }) {
  const { ref, visible } = useIntersection();
  const accent = colorMap[project.color] || 'var(--cyan)';
  const isLarge = index === 0 || index === 2;

  return (
    <a
      ref={ref as React.Ref<HTMLAnchorElement>}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card card fade-in ${visible ? 'visible' : ''} fade-in-delay-${(index % 3) + 1} ${isLarge ? 'project-card--large' : ''}`}
      style={{ '--accent': accent } as React.CSSProperties}
    >
      <div className="project-card__top">
        <div className="project-card__icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2"/>
            <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2"/>
            <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2"/>
            <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
        </div>
        <div className="project-card__highlight">{project.highlight}</div>
        <svg className="project-card__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 13L13 3M13 3H7M13 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="project-card__name">{project.name}</div>
      <div className="project-card__tagline">{project.tagline}</div>
      <p className="project-card__desc">{project.description}</p>

      <div className="project-card__tags">
        {project.tags.map((tag, i) => (
          <span key={i} className="project-card__tag">{tag}</span>
        ))}
      </div>
    </a>
  );
}