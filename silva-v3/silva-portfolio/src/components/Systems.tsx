import { useIntersection } from '../hooks/useIntersection';
import { siteData } from '../data/site';
import './Systems.css';

export default function Systems() {
  const { ref, visible } = useIntersection();

  return (
    <section id="work" className="section work">
      <div className="container">
        <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
          <p className="section-label">Work</p>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">
            Production systems, research implementations, and open-source tools — 
            each one built to understand something more deeply.
          </p>
        </div>

        <div className="work__list">
          {siteData.work.map((project, i) => (
            <WorkItem key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkItem({ project, index }: { project: typeof siteData.work[0]; index: number }) {
  const { ref, visible } = useIntersection();

  return (
    <div
      ref={ref}
      className={`work-item fade-in ${visible ? 'visible' : ''} fade-in-delay-${(index % 3) + 1}`}
    >
      <div className="work-item__meta">
        <span className="work-item__type mono">{project.type}</span>
        <span className="work-item__period mono">{project.period}</span>
      </div>

      <div className="work-item__body">
        <div className="work-item__left">
          <h3 className="work-item__title">{project.title}</h3>
          <p className="work-item__summary">{project.summary}</p>
          <p className="work-item__detail">{project.detail}</p>
          <div className="work-item__stack">
            {project.stack.map((s, i) => (
              <span key={i} className="work-item__tag mono">{s}</span>
            ))}
          </div>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="work-item__link mono"
        >
          View →
        </a>
      </div>
    </div>
  );
}
