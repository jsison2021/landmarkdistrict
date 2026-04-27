import React, { useEffect, useRef, useState } from 'react';
import { makeHalftoneReveal } from '../../utils/halftone';

const ARCHIVE = '/assets/tenant-logos/archive_building.webp';

export default function LogoIntro({ onComplete, direction = 'a' }) {
  const [gone, setGone] = useState(false);
  const imgRef = useRef(null);
  const canvasRef = useRef(null);
  const counterRef = useRef(null);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

  useEffect(() => {
    const total = direction === 'a' ? 4000 : 2800;
    const hideT = setTimeout(() => setGone(true), total);
    const removeT = setTimeout(() => {
      if (onCompleteRef.current) onCompleteRef.current();
    }, total + 1400);
    return () => { clearTimeout(hideT); clearTimeout(removeT); };
  }, [direction]);

  useEffect(() => {
    if (direction !== 'a') return undefined;
    const img = imgRef.current;
    const canvas = canvasRef.current;
    const counter = counterRef.current;
    if (!img || !canvas || !counter) return undefined;

    const DUR = 3200;
    const startY = 1910, endY = 2026;

    let raf = 0;
    let cancelled = false;

    const runCounterOnly = () => {
      const t0 = performance.now();
      const frame = (now) => {
        if (cancelled) return;
        const p = Math.min(1, (now - t0) / DUR);
        const eased = 1 - Math.pow(2, -10 * p);
        counter.textContent = Math.round(startY + (endY - startY) * eased);
        if (p < 1) raf = requestAnimationFrame(frame);
      };
      raf = requestAnimationFrame(frame);
    };

    const go = () => {
      if (cancelled) return;
      if (!img.naturalWidth) { runCounterOnly(); return; }
      let draw = null;
      try { draw = makeHalftoneReveal(img, canvas, { cell: 5 }); } catch (e) { /* noop */ }
      if (!draw) { runCounterOnly(); return; }
      const t0 = performance.now();
      const frame = (now) => {
        if (cancelled) return;
        const p = Math.min(1, (now - t0) / DUR);
        const eased = 1 - Math.pow(2, -10 * p);
        draw(eased);
        counter.textContent = Math.round(startY + (endY - startY) * eased);
        if (p < 1) raf = requestAnimationFrame(frame);
      };
      raf = requestAnimationFrame(frame);
    };

    const startWhenReady = () => {
      if (cancelled) return;
      requestAnimationFrame(go);
    };

    const onLoad = () => { img.removeEventListener('load', onLoad); img.removeEventListener('error', onError); startWhenReady(); };
    const onError = () => { img.removeEventListener('load', onLoad); img.removeEventListener('error', onError); if (!cancelled) runCounterOnly(); };

    if (img.complete && img.naturalWidth) {
      startWhenReady();
    } else {
      img.addEventListener('load', onLoad);
      img.addEventListener('error', onError);
      if (!img.src) img.src = ARCHIVE;
    }

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      img.removeEventListener('load', onLoad);
      img.removeEventListener('error', onError);
    };
  }, [direction]);

  const makeLetters = (word) => word.split('').map((ch, i) => (
    <span key={i} style={{ animationDelay: `${0.9 + i * 0.045}s` }}>{ch}</span>
  ));

  if (direction === 'a') {
    return (
      <div className={`intro${gone ? ' gone' : ''}`} id="intro">
        <div className="intro-a">
          <div className="intro-a-photo">
            <img ref={imgRef} src={ARCHIVE} alt="" style={{ display: 'none' }} />
            <canvas ref={canvasRef} />
            <div className="intro-a-counter"><span ref={counterRef}>1910</span></div>
          </div>
          <div className="intro-a-title">
            <div className="intro-a-prefix">Shops at</div>
            <div className="intro-a-word intro-a-word-1">{makeLetters('LANDMARK')}</div>
            <div className="intro-a-word intro-a-word-2">{makeLetters('DISTRICT')}</div>
          </div>
          <div className="intro-a-bar" />
        </div>
      </div>
    );
  }

  return (
    <div className={`intro${gone ? ' gone' : ''}`} id="intro">
      <div className="intro-b-curtain">
        <div className="intro-b-half top" />
        <div className="intro-b-half bot" />
      </div>
      <div className="intro-b-center">
        <div>
          <img className="intro-b-logo" src="/assets/tenant-logos/logo.webp" alt="" />
          <span className="intro-b-prefix">Shops at</span>
          <div className="intro-b-title">LANDMARK DISTRICT</div>
          <div className="intro-b-rule" />
        </div>
      </div>
    </div>
  );
}
