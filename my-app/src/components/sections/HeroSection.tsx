'use client';

import { useEffect, useRef } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { renderHalftone } from '@/lib/halftone';

const ARCHIVE = '/assets/tenant-logos/archive_building.webp';

function smoothTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function HeroSection() {
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    if (!img || !canvas) return undefined;

    const draw = () => {
      try {
        renderHalftone(img, canvas, {
          cell: 6, maxRadius: 2.4,
          inkColor: [236, 232, 225],
          contrast: 1.35, brightness: -0.05,
          invert: true,
        });
        canvas.classList.add('ready');
      } catch {
        // canvas unavailable; the plain photo still shows
      }
    };

    if (img.complete && img.naturalWidth) draw();
    else img.addEventListener('load', draw, { once: true });

    let t: ReturnType<typeof setTimeout> | undefined;
    let lastW = window.innerWidth;
    const onResize = () => {
      if (window.innerWidth === lastW) return;
      lastW = window.innerWidth;
      clearTimeout(t);
      t = setTimeout(draw, 250);
    };
    window.addEventListener('resize', onResize);

    return () => {
      img.removeEventListener('load', draw);
      window.removeEventListener('resize', onResize);
      clearTimeout(t);
    };
  }, []);

  return (
    <section id="hero" className="hero" data-theme="dark">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker load" style={{ '--d': '0s' }}>
            <span>Est. 1910</span>
            <span>Old Louisville, KY</span>
          </p>
          <h1 data-reveal="words">
            Restoring a <em>landmark</em> in the heart of Old Louisville.
          </h1>
          <p className="hero-sub load" style={{ '--d': '0.45s' }}>
            Shops at Landmark District is a curated collection of restaurants, retail and services in one of America&apos;s largest Victorian neighborhoods, positioned between downtown Louisville and the University of Louisville.
          </p>
          <div className="hero-cta-row load" style={{ '--d': '0.55s' }}>
            <a
              className="btn btn-primary"
              href="#marketplace"
              onClick={(e) => { e.preventDefault(); smoothTo('marketplace'); }}
            >
              Explore the marketplace <ArrowDownRight aria-hidden="true" size={18} strokeWidth={1.75} />
            </a>
            <a
              className="btn btn-ghost"
              href="#contact"
              onClick={(e) => { e.preventDefault(); smoothTo('contact'); }}
            >
              Leasing inquiries <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.75} />
            </a>
          </div>
        </div>

        <figure className="hero-figure">
          <div className="hero-photo">
            <img
              ref={imgRef}
              className="hero-photo-img"
              src={ARCHIVE}
              alt="Landmark District, archival photograph"
              fetchPriority="high"
            />
            <div className="hero-photo-tone" aria-hidden="true" />
            <canvas ref={canvasRef} className="hero-photo-dots" aria-hidden="true" />
            <div className="hero-photo-tag">Archive № 04 · December 19, 1957</div>
          </div>
          <figcaption className="hero-photo-caption">
            <span>4th &amp; Oak · Old Louisville</span>
            <span>Photo · The Courier-Journal</span>
          </figcaption>
        </figure>
      </div>

      <dl className="hero-facts load" style={{ '--d': '0.7s' }}>
        <div><dt>Tenants</dt><dd>21 independent</dd></div>
        <div><dt>Mix</dt><dd>Restaurants, retail, services</dd></div>
        <div><dt>Address</dt><dd>1167 S 4th St</dd></div>
        <div><dt>Coordinates</dt><dd>38.2350° N, 85.7604° W</dd></div>
      </dl>
    </section>
  );
}
