import { useState, useEffect } from 'react';
import { siteData } from '../data/site';
import './Nav.css';

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#sair', label: 'SAiR' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#hero" className="nav__logo mono">
          Mohammed Sedeg
        </a>

        <div className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="nav__link" onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a href={`mailto:${siteData.email}`} className="nav__email mono">
            {siteData.email}
          </a>
        </div>

        <button
          className={`nav__hamburger ${menuOpen ? 'nav__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
