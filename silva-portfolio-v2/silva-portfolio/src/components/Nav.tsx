import { useState, useEffect } from 'react';
import { siteData } from '../data/site';
import './Nav.css';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#systems', label: 'Systems' },
  { href: '#sair', label: 'SAiR' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#hero" className="nav__logo">
          <span className="nav__logo-bracket">[</span>
          <span className="nav__logo-name">silva</span>
          <span className="nav__logo-dot">.</span>
          <span className="nav__logo-ai">ai</span>
          <span className="nav__logo-bracket">]</span>
        </a>

        <div className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`nav__link ${active === href ? 'nav__link--active' : ''}`}
              onClick={() => handleLink(href)}
            >
              {label}
            </a>
          ))}
          <a
            href={`mailto:${siteData.email}`}
            className="btn btn-outline nav__cta"
          >
            Hire me
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
