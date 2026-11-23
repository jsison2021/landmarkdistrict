'use client';

import { useEffect } from 'react';

export function useScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return undefined;
    const root = document.documentElement;

    let scheduled = false;
    const update = () => {
      scheduled = false;
      const max = root.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    };
    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(update);
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    update();

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);
}
