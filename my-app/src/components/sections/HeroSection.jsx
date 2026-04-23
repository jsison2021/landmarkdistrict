import React, { useEffect, useRef } from 'react';
import { renderHalftone } from '../../utils/halftone';

const ARCHIVE = '/assets/tenant-logos/archive_building.png';

function smoothTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function HeroSection() {
  const imgRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    if (!img || !canvas) return;

    const draw = () => {
      try {
        renderHalftone(img, canvas, {
          cell: 5, maxRadius: 2.1,
          inkColor: [28, 22, 16],
          contrast: 1.2, brightness: 0,
        });
        const dir = document.documentElement.getAttribute('data-dir') || 'a';
        const opac = dir === 'a' ? 0.55 : 0.22;
        document.documentElement.style.setProperty('--dither-opacity', opac);
      } catch (e) { /* noop */ }
    };

    if (img.complete && img.naturalWidth) draw();
    else img.addEventListener('load', draw, { once: true });

    let t;
    const onResize = () => { clearTimeout(t); t = setTimeout(draw, 250); };
    window.addEventListener('resize', onResize);

    const onScroll = () => {
      const hero = document.getElementById('hero');
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, -rect.top / (rect.height || 1)));
      document.documentElement.style.setProperty('--hero-scale', String(1.05 + pct * 0.08));
      if (img) img.style.transform = `scale(${1.05 + pct * 0.08}) translateY(${pct * 40}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <section id="hero" className="hero" data-palette="cream">
      <div className="hero-inner">
        <div className="hero-left">
          <h1 data-reveal="words" data-reveal-mode="drift">
            Restoring a <em>landmark</em> in the heart of Old Louisville.
          </h1>
          <p className="hero-sub" data-reveal style={{ '--d': '0.3s' }}>
            Shops at Landmark District is a curated collection of restaurants, retail and services in one of America's largest Victorian neighborhoods — positioned between downtown Louisville and the University of Louisville.
          </p>
          <div className="hero-cta-row" data-reveal style={{ '--d': '0.5s' }}>
            <a
              className="btn-primary"
              href="#marketplace"
              onClick={(e) => { e.preventDefault(); smoothTo('marketplace'); }}
            >
              Explore the marketplace <span className="arrow">→</span>
            </a>
            <a
              className="btn-ghost"
              href="#contact"
              onClick={(e) => { e.preventDefault(); smoothTo('contact'); }}
            >
              Leasing inquiries <span className="arrow">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-right" data-reveal style={{ '--d': '0.2s' }}>
          <div className="hero-photo">
            <img
              id="hero-src-img"
              ref={imgRef}
              className="hero-photo-img"
              src={ARCHIVE}
              alt="Landmark District, archival photograph"
              crossOrigin="anonymous"
            />
            <canvas ref={canvasRef} className="hero-photo-dither" />
            <div className="hero-photo-tag">Archive № 04 · Circa 1962</div>
            <div className="hero-photo-frame" />
          </div>
          <div className="hero-photo-caption">
            <span>4th &amp; Oak · Old Louisville</span>
            <span>Photo · The Courier-Journal</span>
          </div>
        </div>
      </div>
    </section>
  );
}
