'use client';

import { useEffect, useRef, useState } from 'react';

const COUNT_MS = 1200;
const REMOVE_MS = 2050;
const START_YEAR = 1910;
const END_YEAR = 2026;

const letters = (word: string, offset: number) =>
  word.split('').map((ch, i) => (
    <span key={i} style={{ '--i': i + offset }}>{ch}</span>
  ));

export default function LogoIntro() {
  const [done, setDone] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDone(true);
      return undefined;
    }

    const counter = counterRef.current;
    let raf = 0;
    const t0 = performance.now();
    const frame = (now: number) => {
      const p = Math.min(1, (now - t0) / COUNT_MS);
      const eased = 1 - Math.pow(1 - p, 3);
      if (counter) counter.textContent = String(Math.round(START_YEAR + (END_YEAR - START_YEAR) * eased));
      if (p < 1) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    const remove = setTimeout(() => setDone(true), REMOVE_MS);
    return () => { cancelAnimationFrame(raf); clearTimeout(remove); };
  }, []);

  if (done) return null;

  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-inner">
        <div className="intro-meta">
          <span>Old Louisville, KY</span>
          <span className="intro-year"><span ref={counterRef}>{START_YEAR}</span></span>
        </div>
        <div className="intro-mark">
          <span className="intro-prefix">Shops at</span>
          <span className="intro-word">{letters('Landmark', 0)}</span>
          <span className="intro-word">{letters('District', 4)}</span>
        </div>
        <div className="intro-bar" />
      </div>
    </div>
  );
}
