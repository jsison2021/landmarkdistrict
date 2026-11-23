'use client';

import { useEffect } from 'react';

// html has scroll-behavior: smooth, and the browser's own jump to a #section on load gets
// cancelled by font swaps and the word-reveal DOM changes. Jump there ourselves, instantly.
export function useHashScroll() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    const jump = () => document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' });
    jump();
    document.fonts?.ready.then(jump);
  }, []);
}
