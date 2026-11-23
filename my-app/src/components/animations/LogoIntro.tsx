'use client';

import { useEffect, useState } from 'react';

const REMOVE_MS = 2050;

const letters = (word: string, offset: number) =>
  word.split('').map((ch, i) => (
    <span key={i} style={{ '--i': i + offset }}>{ch}</span>
  ));

export default function LogoIntro() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Skip the intro for reduced motion, and for deep links like /#cat-retail so people land on what they asked for.
    if (window.location.hash || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDone(true);
      return undefined;
    }
    const remove = setTimeout(() => setDone(true), REMOVE_MS);
    return () => clearTimeout(remove);
  }, []);

  if (done) return null;

  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-inner">
        <div className="intro-meta">
          <span className="intro-brand">Est. 1910 · Old Louisville</span>
        </div>
        <div className="intro-mark">
          <img src="/assets/tenant-logos/logo.webp" alt="" width="64" height="96" className="intro-logo" />
          <span className="intro-prefix">Shops at</span>
          <span className="intro-word">{letters('Landmark', 0)}</span>
          <span className="intro-word">{letters('District', 4)}</span>
          <span className="intro-tagline">Reinventing <em>Old Louisville</em></span>
        </div>
        <div className="intro-bar" />
      </div>
    </div>
  );
}
