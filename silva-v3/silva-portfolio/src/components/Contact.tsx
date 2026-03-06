import { useIntersection } from '../hooks/useIntersection';
import { siteData } from '../data/site';
import './Contact.css';

export default function Contact() {
  const { ref, visible } = useIntersection();

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Get in Touch</h2>
          <p className="contact__sub">
            I'm open to roles, research collaborations, consulting, and SAiR partnerships.
            The best way to reach me is directly.
          </p>
        </div>

        <div className={`contact__body fade-in ${visible ? 'visible' : ''} fade-in-delay-2`}>
          <a href={`mailto:${siteData.email}`} className="contact__email">
            {siteData.email}
          </a>

          <div className="contact__links">
            <a href={siteData.links.github} target="_blank" rel="noopener noreferrer" className="contact__link mono">
              GitHub ↗
            </a>
            <a href={siteData.links.linkedin} target="_blank" rel="noopener noreferrer" className="contact__link mono">
              LinkedIn ↗
            </a>
            <a href={siteData.links.sair} target="_blank" rel="noopener noreferrer" className="contact__link mono">
              SAiR Organization ↗
            </a>
            <a href={siteData.links.telegram} target="_blank" rel="noopener noreferrer" className="contact__link mono">
              Telegram Community ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
