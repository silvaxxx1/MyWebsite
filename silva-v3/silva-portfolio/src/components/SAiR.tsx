import { useIntersection } from '../hooks/useIntersection';
import { siteData } from '../data/site';
import './SAiR.css';

export default function SAiR() {
  const { ref, visible } = useIntersection();

  return (
    <section id="sair" className="section sair">
      <div className="container">
        <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
          <p className="section-label">SAiR Initiative</p>
          <h2 className="section-title">Sudanese AI Research Organization</h2>
        </div>

        <div className={`sair__body fade-in ${visible ? 'visible' : ''} fade-in-delay-2`}>
          <div className="sair__text">
            <p className="sair__tagline">"{siteData.sair.tagline}"</p>
            <div className="sair__desc">
              {siteData.sair.description.split('\n').map((p, i) =>
                p.trim() ? <p key={i}>{p.trim()}</p> : null
              )}
            </div>
            <div className="sair__numbers">
              <div className="sair__num">
                <span className="sair__num-value">{siteData.sair.numbers.learners}</span>
                <span className="sair__num-label mono">engineers trained</span>
              </div>
              <div className="sair__num">
                <span className="sair__num-value">{siteData.sair.numbers.countries}</span>
                <span className="sair__num-label mono">countries</span>
              </div>
              <div className="sair__num">
                <span className="sair__num-value">{siteData.sair.numbers.modules}</span>
                <span className="sair__num-label mono">modules · 100% free</span>
              </div>
            </div>
            <div className="sair__actions">
              <a href={siteData.sair.links.github} target="_blank" rel="noopener noreferrer" className="sair__link mono">
                GitHub Organization →
              </a>
              <a href={siteData.sair.links.telegram} target="_blank" rel="noopener noreferrer" className="sair__link mono">
                Join on Telegram →
              </a>
            </div>
          </div>

          <div className="sair__curriculum">
            <p className="sair__curr-label mono">Curriculum</p>
            {siteData.sair.modules.map((m, i) => (
              <div key={i} className="sair__module">
                <span className="sair__module-num mono">0{i + 1}</span>
                <span className="sair__module-name">{m}</span>
              </div>
            ))}
            <div className="sair__outcomes">
              <p className="sair__curr-label mono" style={{marginTop: 28}}>Student projects shipped</p>
              {siteData.sair.outcomes.map((o, i) => (
                <div key={i} className="sair__outcome">
                  <span className="sair__outcome-dot" />
                  <span>{o}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
