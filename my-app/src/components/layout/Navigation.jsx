import React, { useEffect, useState } from 'react';

const LINKS = [
  { id: 'marketplace', label: 'Marketplace' },
  { id: 'residences',  label: 'Residences' },
  { id: 'location',    label: 'Location' },
  { id: 'contact',     label: 'Contact' },
];

function smoothTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const ids = ['hero', 'marketplace', 'residences', 'location', 'contact'];
      const mid = y + window.innerHeight * 0.4;
      let cur = 'hero';
      ids.forEach(id => {
        const s = document.getElementById(id);
        if (s && s.offsetTop <= mid) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a
        className="nav-brand"
        href="#hero"
        onClick={(e) => { e.preventDefault(); smoothTo('hero'); }}
      >
        <img src="/assets/tenant-logos/logo.png" alt="Landmark District" className="nav-logo" />
        <div className="nav-wordmark">
          <span className="nav-prefix">Shops at</span>
          <span className="nav-title">LANDMARK DISTRICT</span>
        </div>
      </a>
      <div className="nav-links">
        {LINKS.map(l => (
          <a
            key={l.id}
            className={`nav-link${active === l.id ? ' active' : ''}`}
            href={`#${l.id}`}
            onClick={(e) => { e.preventDefault(); smoothTo(l.id); }}
          >
            {l.label}
          </a>
        ))}
      </div>
      <a
        className="nav-cta"
        href="#contact"
        onClick={(e) => { e.preventDefault(); smoothTo('contact'); }}
      >
        Leasing →
      </a>
    </nav>
  );
}
