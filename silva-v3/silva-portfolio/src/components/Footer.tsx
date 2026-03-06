import { siteData } from '../data/site';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__logo mono">[silva.ai]</span>
          <span className="footer__copy">
            © {new Date().getFullYear()} Mohammed Sedeg
          </span>
        </div>
        <div className="footer__right">
          <span className="footer__made mono">
            Built with React + Vite
            <span className="footer__heart"> ·</span>
            <a href={siteData.links.sair} target="_blank" rel="noopener noreferrer" className="footer__sair">
              🇸🇩 SAiR
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
