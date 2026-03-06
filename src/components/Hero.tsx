import { siteData } from '../data/site';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">

        <div className="hero__left">
          <div className="hero__photo-wrap">
            <img src="/MyWebsite/ME.png" alt="Mohammed Sedeg" className="hero__photo" />
            <div className="hero__photo-flag">🇸🇩</div>
          </div>
          <div className="hero__identity">
            <span className="hero__identity-name display">Mohammed Sedeg</span>
            <span className="hero__identity-sub mono">Khartoum · Turkey · Remote</span>
          </div>
        </div>

        <div className="hero__right">
          <p className="hero__eyebrow mono">AI Engineer & Researcher</p>
          <h1 className="hero__headline">
            I study how machines learn —<br />
            <span className="hero__headline-muted">and build systems that actually do.</span>
          </h1>
          <div className="hero__bio">
            <p>I have a deep obsession with intelligence itself — how it emerges, how it scales, and how to build systems that genuinely reason rather than just pattern-match. My work spans LLM systems, computer vision, and edge AI, always anchored in the fundamentals.</p>
            <p>I also founded <a href={siteData.links.sair} target="_blank" rel="noopener noreferrer" className="hero__sair-link">SAiR</a> because I believe understanding shouldn't be gated — if you can learn it, you should be able to teach it.</p>
          </div>
          <div className="hero__meta">
            <div className="hero__meta-item">
              <span className="hero__meta-label mono">Currently</span>
              <span className="hero__meta-value">PhD Candidate · Karabük University</span>
            </div>
            <div className="hero__meta-item">
              <span className="hero__meta-label mono">Focus</span>
              <span className="hero__meta-value">Vision-Language Models · Edge AI</span>
            </div>
            <div className="hero__meta-item">
              <span className="hero__meta-label mono">Open to</span>
              <span className="hero__meta-value">Senior roles · Research · Consulting</span>
            </div>
          </div>
          <div className="hero__actions">
            <a href="#work" className="hero__cta">
              See my work
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 10.5L10.5 2.5M10.5 2.5H5M10.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href={`mailto:${siteData.email}`} className="hero__email mono">{siteData.email}</a>
          </div>
          <div className="hero__socials">
            <a href={siteData.links.github} target="_blank" rel="noopener noreferrer" className="hero__social mono">GitHub</a>
            <span className="hero__dot">·</span>
            <a href={siteData.links.linkedin} target="_blank" rel="noopener noreferrer" className="hero__social mono">LinkedIn</a>
            <span className="hero__dot">·</span>
            <a href={siteData.links.sair} target="_blank" rel="noopener noreferrer" className="hero__social hero__social--sair mono">SAiR 🇸🇩</a>
          </div>
        </div>

      </div>
    </section>
  );
}
