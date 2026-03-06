import { useIntersection, useCountUp } from '../hooks/useIntersection';
import { siteData } from '../data/site';
import './SAiR.css';

function StatCounter({ value, label, suffix, active }: { value: number; label: string; suffix: string; active: boolean }) {
  const count = useCountUp(value, 1800, active);
  return (
    <div className="sair-stat">
      <span className="sair-stat__value">{count}{suffix}</span>
      <span className="sair-stat__label">{label}</span>
    </div>
  );
}

export default function SAiR() {
  const { ref, visible } = useIntersection();
  const { ref: statsRef, visible: statsVisible } = useIntersection();

  return (
    <section id="sair" className="section sair">
      <div className="sair__bg" />
      <div className="container">
        <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
          <p className="section-label">Mission</p>
          <h2 className="section-title">SAiR Initiative</h2>
          <p className="section-subtitle">{siteData.sair.description}</p>
        </div>

        {/* Mission statement */}
        <div className={`sair__mission fade-in ${visible ? 'visible' : ''} fade-in-delay-2`}>
          <div className="sair__mission-bar" />
          <p className="sair__mission-text">"{siteData.sair.mission}"</p>
        </div>

        {/* Stats */}
        <div ref={statsRef} className={`sair__stats fade-in ${statsVisible ? 'visible' : ''} fade-in-delay-1`}>
          {siteData.sair.stats.map((s, i) => (
            <StatCounter key={i} {...s} active={statsVisible} />
          ))}
        </div>

        {/* Two columns: modules + outcomes */}
        <div className={`sair__columns fade-in ${statsVisible ? 'visible' : ''} fade-in-delay-2`}>
          <div className="sair__col card">
            <h3 className="sair__col-title">
              <span className="sair__col-icon">📚</span> Curriculum
            </h3>
            <div className="sair__modules">
              {siteData.sair.modules.map((m, i) => (
                <div key={i} className="sair__module">
                  <span className="sair__module-num mono">0{i + 1}</span>
                  <span className="sair__module-name">{m}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sair__col card">
            <h3 className="sair__col-title">
              <span className="sair__col-icon">🚀</span> Student Outcomes
            </h3>
            <div className="sair__outcomes">
              {siteData.sair.outcomes.map((o, i) => (
                <div key={i} className="sair__outcome">
                  <span className="sair__outcome-dot" />
                  <span>{o}</span>
                </div>
              ))}
            </div>
            <div className="sair__cta">
              <a href={siteData.sair.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/></svg>
                GitHub Org
              </a>
              <a href={siteData.sair.links.telegram} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Join Community →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
