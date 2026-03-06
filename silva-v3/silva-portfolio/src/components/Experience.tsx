import { useIntersection } from '../hooks/useIntersection';
import { siteData } from '../data/site';
import './Experience.css';

export default function Experience() {
  const { ref, visible } = useIntersection();

  return (
    <section id="about" className="section experience">
      <div className="container">
        <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
          <p className="section-label">About</p>
          <h2 className="section-title">Background</h2>
        </div>

        <div className={`about__body fade-in ${visible ? 'visible' : ''} fade-in-delay-1`}>
          <div className="about__text">
            {siteData.bio.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="about__right">
            {/* Education */}
            <div className="about__block">
              <p className="about__block-label mono">Education</p>
              {siteData.education.map((edu, i) => (
                <div key={i} className="edu-item">
                  <div className="edu-item__degree">{edu.degree}</div>
                  <div className="edu-item__school">{edu.school}</div>
                  <div className="edu-item__period mono">{edu.period}</div>
                  {i < siteData.education.length - 1 && <div className="edu-item__divider" />}
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="about__block">
              <p className="about__block-label mono">Stack</p>
              {Object.entries(siteData.skills).map(([cat, items]) => (
                <div key={cat} className="skill-row">
                  <span className="skill-row__cat mono">{cat}</span>
                  <span className="skill-row__items">{items.join(' · ')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
