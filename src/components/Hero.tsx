import { useState, useEffect } from 'react';
import { siteData } from '../data/site';
import './Hero.css';

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    siteData.terminalLines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, i]);
      }, line.delay);
    });
    setTimeout(() => setShowContent(true), 1200);
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Background glow */}
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="container hero__inner">
        {/* Left: content */}
        <div className={`hero__content ${showContent ? 'hero__content--visible' : ''}`}>
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span>Available for new projects</span>
          </div>

          <h1 className="hero__name">
            Mohammed<br />
            <span className="hero__name-accent">Sedeg</span>
          </h1>

          <div className="hero__titles">
            <span className="hero__title-line">Senior AI Engineer</span>
            <span className="hero__title-sep">·</span>
            <span className="hero__title-line">LLM Systems</span>
            <span className="hero__title-sep">·</span>
            <span className="hero__title-line">Edge CV</span>
          </div>

          <p className="hero__tagline">
            Building production AI systems.<br />
            Building Sudan's AI engineers.
          </p>

          <div className="hero__actions">
            <a href="#systems" className="btn btn-primary">
              <span>View Systems</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1l6 6-6 6M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href={`mailto:${siteData.email}`} className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero__links">
            <a href={siteData.links.github} target="_blank" rel="noopener noreferrer" className="hero__link">
              <GitHubIcon /> GitHub
            </a>
            <a href={siteData.links.linkedin} target="_blank" rel="noopener noreferrer" className="hero__link">
              <LinkedInIcon /> LinkedIn
            </a>
            <a href={siteData.links.sair} target="_blank" rel="noopener noreferrer" className="hero__link hero__link--sair">
              🇸🇩 SAiR Org
            </a>
          </div>
        </div>

        {/* Right: terminal */}
        <div className={`hero__terminal ${showContent ? 'hero__terminal--visible' : ''}`}>
          <div className="terminal">
            <div className="terminal__bar">
              <div className="terminal__dots">
                <span className="terminal__dot terminal__dot--red" />
                <span className="terminal__dot terminal__dot--yellow" />
                <span className="terminal__dot terminal__dot--green" />
              </div>
              <span className="terminal__title">silva@lab:~</span>
            </div>
            <div className="terminal__body">
              {siteData.terminalLines.map((line, i) => (
                <div
                  key={i}
                  className={`terminal__line ${visibleLines.includes(i) ? 'terminal__line--visible' : ''} ${line.cursor ? 'terminal__line--cursor' : ''}`}
                >
                  <span className={`terminal__text ${line.text.startsWith('$') ? 'terminal__cmd' : 'terminal__output'}`}>
                    {line.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats below terminal */}
          <div className="hero__stats">
            {siteData.stats.map((s, i) => (
              <div key={i} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll">
        <span className="hero__scroll-text">scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
