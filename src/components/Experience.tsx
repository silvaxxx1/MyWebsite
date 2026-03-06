import { useIntersection } from '../hooks/useIntersection';
import { siteData } from '../data/site';
import './Experience.css';

const colorMap: Record<string, string> = {
  cyan: 'var(--cyan)',
  amber: 'var(--amber)',
  green: 'var(--green)',
  muted: 'var(--text-muted)',
};

export default function Experience() {
  const { ref, visible } = useIntersection();

  return (
    <section id="about" className="section experience">
      <div className="container">
        <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
          <p className="section-label">Background</p>
          <h2 className="section-title">Engineering Journey</h2>
          <p className="section-subtitle">
            From industrial automation and renewable energy to cutting-edge LLMs — 
            9+ years of engineering experience converging on AI.
          </p>
        </div>

        <div className="experience__grid">
          {siteData.experience.map((job, i) => (
            <ExperienceCard key={i} job={job} index={i} />
          ))}
        </div>

        {/* Education row */}
        <div className="edu-row">
          <div ref={useIntersection().ref} className={`fade-in ${useIntersection().visible ? 'visible' : ''} fade-in-delay-2`}>
            <p className="section-label" style={{ marginTop: 64 }}>Education</p>
          </div>
          <div className="edu-cards">
            {siteData.education.map((edu, i) => (
              <div key={i} className="edu-card card">
                <div className="edu-card__period mono">{edu.period}</div>
                <div className="edu-card__degree">{edu.degree}</div>
                <div className="edu-card__school">{edu.school}</div>
                <div className="edu-card__focus">{edu.focus}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ job, index }: { job: typeof siteData.experience[0]; index: number }) {
  const { ref, visible } = useIntersection();
  const accent = colorMap[job.color] || 'var(--text-muted)';

  return (
    <div
      ref={ref}
      className={`exp-card fade-in ${visible ? 'visible' : ''} fade-in-delay-${(index % 4) + 1}`}
      style={{ '--accent': accent } as React.CSSProperties}
    >
      <div className="exp-card__accent-line" />
      <div className="exp-card__header">
        <div>
          <div className="exp-card__role">{job.role}</div>
          <div className="exp-card__org">{job.org}</div>
        </div>
        <div className="exp-card__right">
          <span className="exp-card__period mono">{job.period}</span>
          <span className="exp-card__tag">{job.tag}</span>
        </div>
      </div>
      <ul className="exp-card__points">
        {job.points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
