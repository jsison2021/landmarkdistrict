import React, { useState, useEffect } from 'react';
import './Navigation.css';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'shops', label: 'Shops' },
  { id: 'offices', label: 'Offices' },
  { id: 'residences', label: 'Residences' },
  { id: 'location', label: 'Location' },
  { id: 'contact', label: 'Contact' }
];

function Navigation({ scrollToSection, sections }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (index) => {
    scrollToSection(index);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand">LANDMARK DISTRICT</div>

          {/* Desktop Navigation */}
          <ul className="nav-links desktop-only">
            {navItems.map((item, index) => (
              <li key={item.id}>
                <button onClick={() => handleNavClick(index)} className="nav-link">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="hamburger mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-menu-content">
            <button
              className="close-button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            <ul className="mobile-nav-links">
              {navItems.map((item, index) => (
                <li key={item.id}>
                  <button onClick={() => handleNavClick(index)} className="mobile-nav-link">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;
