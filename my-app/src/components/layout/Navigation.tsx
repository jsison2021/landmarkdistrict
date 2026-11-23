'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const LINKS = [
  { id: 'marketplace', label: 'Marketplace' },
  { id: 'residences',  label: 'Residences' },
  { id: 'location',    label: 'Location' },
  { id: 'contact',     label: 'Contact' },
];

const SECTION_IDS = ['hero', 'marketplace', 'residences', 'location', 'contact'];

function smoothTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const mid = y + window.innerHeight * 0.4;
      const navLine = y + 36;
      let cur = 'hero';
      let under: HTMLElement | null = null;
      for (const id of SECTION_IDS) {
        const s = document.getElementById(id);
        if (!s) continue;
        if (s.offsetTop <= mid) cur = id;
        if (s.offsetTop <= navLine) under = s;
      }
      setActive(cur);
      const footer = document.querySelector<HTMLElement>('footer');
      const t = footer && footer.offsetTop <= navLine ? footer.dataset.theme : under?.dataset.theme;
      setTheme(t === 'light' ? 'light' : 'dark');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    const mq = window.matchMedia('(min-width: 901px)');
    const onMq = () => { if (mq.matches) setOpen(false); };
    document.documentElement.classList.add('menu-open');
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => {
      document.documentElement.classList.remove('menu-open');
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
    };
  }, [open]);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    smoothTo(id);
  };

  return (
    <nav
      className={`nav${scrolled ? ' scrolled' : ''}${open ? ' open' : ''}`}
      data-theme={open ? 'dark' : theme}
      aria-label="Primary"
    >
      <div className="nav-bar">
        <a className="nav-brand" href="#hero" onClick={go('hero')}>
          <img src="/assets/tenant-logos/logo.webp" alt="" className="nav-logo" width="20" height="30" />
          <span className="nav-wordmark">
            <span className="nav-prefix">Shops at</span>
            <span className="nav-title">Landmark District</span>
          </span>
        </a>
        <div className="nav-links">
          {LINKS.map(l => (
            <a
              key={l.id}
              className={`nav-link${active === l.id ? ' active' : ''}`}
              href={`#${l.id}`}
              aria-current={active === l.id ? 'true' : undefined}
              onClick={go(l.id)}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a className="nav-cta" href="#contact" onClick={go('contact')}>
          Leasing <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.75} />
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-sheet"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(o => !o)}
        >
          {open ? <X size={22} strokeWidth={1.5} aria-hidden="true" /> : <Menu size={22} strokeWidth={1.5} aria-hidden="true" />}
        </button>
      </div>

      <div id="nav-sheet" className="nav-sheet" hidden={!open}>
        <ol className="nav-sheet-links">
          {LINKS.map((l, i) => (
            <li key={l.id} style={{ '--i': i }}>
              <a href={`#${l.id}`} onClick={go(l.id)} className={active === l.id ? 'active' : undefined}>
                <span className="nav-sheet-num">{String(i + 1).padStart(2, '0')}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ol>
        <div className="nav-sheet-foot">
          <a href="tel:5026537251">(502) 653-7251</a>
          <span>1167 S 4th St, Louisville, KY 40203</span>
        </div>
      </div>
    </nav>
  );
}
