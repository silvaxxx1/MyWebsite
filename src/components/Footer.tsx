import { siteData } from '../data/site';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__logo">Mohammed Sedeg</span>
          <span className="footer__copy mono">© {new Date().getFullYear()}</span>
        </div>
        <div className="footer__right">
          <span className="footer__made mono">
            🇸🇩 SAiR ·
            <a href={siteData.links.sair} target="_blank" rel="noopener noreferrer" className="footer__sair"> Join the community</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
