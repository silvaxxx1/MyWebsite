import { useIntersection } from '../hooks/useIntersection';
import { siteData } from '../data/site';
import './Contact.css';

export default function Contact() {
  const { ref, visible } = useIntersection();

  return (
    <section id="contact" className="section contact">
      <div className="contact__glow" />
      <div className="container">
        <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title contact__title">
            Let's Build<br />
            <span className="contact__title-accent">Something Real</span>
          </h2>
          <p className="contact__intro">
            Open to full-time roles, consulting, research collaborations, and SAiR partnerships. 
            If you're working on something ambitious in AI, I want to hear about it.
          </p>
        </div>

        <div className={`contact__grid fade-in ${visible ? 'visible' : ''} fade-in-delay-2`}>
          {/* Primary CTA */}
          <div className="contact__main card">
            <div className="contact__main-label mono">Primary Contact</div>
            <a href={`mailto:${siteData.email}`} className="contact__email">
              {siteData.email}
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.75 14.25L14.25 3.75M14.25 3.75H7.5M14.25 3.75V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <div className="contact__availability">
              <div className="contact__avail-title">Currently Available For</div>
              <div className="contact__avail-list">
                {siteData.availability.map((a, i) => (
                  <span key={i} className="contact__avail-item">
                    <span className="contact__avail-dot" />
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="contact__links">
            <a href={siteData.links.github} target="_blank" rel="noopener noreferrer" className="contact__social-link card">
              <GitHubIcon />
              <div>
                <div className="contact__social-name">GitHub</div>
                <div className="contact__social-sub mono">@silvaxxx1</div>
              </div>
              <svg className="contact__social-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 11.5L11.5 2.5M11.5 2.5H6M11.5 2.5V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href={siteData.links.linkedin} target="_blank" rel="noopener noreferrer" className="contact__social-link card">
              <LinkedInIcon />
              <div>
                <div className="contact__social-name">LinkedIn</div>
                <div className="contact__social-sub mono">mohammed-sedeg</div>
              </div>
              <svg className="contact__social-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 11.5L11.5 2.5M11.5 2.5H6M11.5 2.5V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href={siteData.links.sair} target="_blank" rel="noopener noreferrer" className="contact__social-link card contact__social-link--sair">
              <span className="contact__sair-flag">🇸🇩</span>
              <div>
                <div className="contact__social-name">SAiR Organization</div>
                <div className="contact__social-sub mono">Join Sudan's AI community</div>
              </div>
              <svg className="contact__social-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 11.5L11.5 2.5M11.5 2.5H6M11.5 2.5V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href={siteData.links.telegram} target="_blank" rel="noopener noreferrer" className="contact__social-link card contact__social-link--tg">
              <TelegramIcon />
              <div>
                <div className="contact__social-name">Telegram</div>
                <div className="contact__social-sub mono">SAiR community group</div>
              </div>
              <svg className="contact__social-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 11.5L11.5 2.5M11.5 2.5H6M11.5 2.5V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{flexShrink:0,color:'var(--text-secondary)'}}><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/></svg>;
}
function LinkedInIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{flexShrink:0,color:'var(--text-secondary)'}}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
}
function TelegramIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{flexShrink:0,color:'var(--text-secondary)'}}><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>;
}
