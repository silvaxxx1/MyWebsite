import React, { useState, useEffect } from 'react';
import { useTheme, useNavigation } from '../../App';
import './Header.css';

const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode, isMobile } = useTheme();
  const { activeSection, scrollToSection } = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('.header-nav')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const navigationItems = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''} ${isDarkMode ? 'header--dark' : ''}`}>
      <div className="header__container">
        {/* Logo / Brand */}
        <div className="header__brand">
          <button 
            className="header__logo"
            onClick={() => handleNavClick('hero')}
            aria-label="Go to home section"
          >
            <span className="header__logo-text">
              Mohammed Sedeg <span className="header__logo-nickname">(Silva)</span>
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="header__nav header-nav" aria-label="Main navigation">
          <ul className={`header__nav-list ${isMenuOpen ? 'header__nav-list--open' : ''}`}>
            {navigationItems.map((item) => (
              <li key={item.id} className="header__nav-item">
                <button
                  className={`header__nav-link ${activeSection === item.id ? 'header__nav-link--active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          {isMobile && (
            <button
              className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--open' : ''}`}
              onClick={toggleMobileMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <span className="header__menu-toggle-line"></span>
              <span className="header__menu-toggle-line"></span>
              <span className="header__menu-toggle-line"></span>
            </button>
          )}
        </nav>

        {/* Theme Toggle */}
        <div className="header__actions">
          <button
            className="header__theme-toggle"
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5M17.6859 17.69L18.5 18.5M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobile && isMenuOpen && (
        <div className="header__overlay" onClick={() => setIsMenuOpen(false)} />
      )}
    </header>
  );
};

export default Header;
