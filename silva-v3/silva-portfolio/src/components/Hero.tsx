import { siteData } from '../data/site';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__glow" />
      <div className="container hero__inner">

        <div className="hero__left">
          <p className="hero__label mono">Mohammed Sedeg · AI Engineer & Researcher</p>

          <h1 className="hero__headline">
            {siteData.headline.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h1>

          <p className="hero__about">{siteData.about}</p>

          <div className="hero__links">
            <a href="#work" className="hero__cta">
              View my work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1l6 6-6 6M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <div className="hero__socials">
              <a href={siteData.links.github} target="_blank" rel="noopener noreferrer" className="hero__social mono">GitHub</a>
              <span className="hero__sep">·</span>
              <a href={siteData.links.linkedin} target="_blank" rel="noopener noreferrer" className="hero__social mono">LinkedIn</a>
              <span className="hero__sep">·</span>
              <a href={siteData.links.sair} target="_blank" rel="noopener noreferrer" className="hero__social hero__social--sair mono">SAiR 🇸🇩</a>
            </div>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__card">
            <p className="hero__card-label mono">Currently</p>
            <p className="hero__card-text">{siteData.bio.currently}</p>
          </div>
          <div className="hero__card">
            <p className="hero__card-label mono">Location</p>
            <p className="hero__card-text">{siteData.location}</p>
          </div>
          <div className="hero__card hero__card--sair">
            <p className="hero__card-label mono">SAiR Initiative</p>
            <p className="hero__card-text">
              {siteData.sair.numbers.learners} engineers trained across {siteData.sair.numbers.countries} countries — free, open, ongoing.
            </p>
            <a href={siteData.links.sair} target="_blank" rel="noopener noreferrer" className="hero__card-link mono">
              Join the community →
            </a>
          </div>
          <div className="hero__card">
            <p className="hero__card-label mono">Contact</p>
            <a href={`mailto:${siteData.email}`} className="hero__card-email mono">{siteData.email}</a>
          </div>
        </div>

      </div>
    </section>
  );
}
