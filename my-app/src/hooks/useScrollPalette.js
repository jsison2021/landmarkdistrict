import { useEffect } from 'react';

const PALETTES_A = {
  cream:    { bg: '#f3ede1', bgSoft: '#eae1d1', bgDeep: '#e2d6bf', ink: '#1a1612', inkSoft: '#3b342c', inkMute: '#6b5f4f', rule: '#c8ba9f', accent: '#8a3a1f' },
  ink:      { bg: '#f1ece2', bgSoft: '#e7e0d1', bgDeep: '#ddd3be', ink: '#241c16', inkSoft: '#443a2e', inkMute: '#74685a', rule: '#c4b8a0', accent: '#9a4a24' },
  sage:     { bg: '#ece9dc', bgSoft: '#dfdfcb', bgDeep: '#d0d3b9', ink: '#1f2618', inkSoft: '#3d4634', inkMute: '#6e7667', rule: '#b9c0a8', accent: '#5b6b4a' },
  blush:    { bg: '#f1e4da', bgSoft: '#e8d6c7', bgDeep: '#dfc7b3', ink: '#2a1d16', inkSoft: '#4a362a', inkMute: '#7a6455', rule: '#cdb39e', accent: '#a04428' },
  charcoal: { bg: '#ebe3d4', bgSoft: '#ddd3c1', bgDeep: '#d0c4ae', ink: '#1a1612', inkSoft: '#3b342c', inkMute: '#6b5f4f', rule: '#c0b39c', accent: '#6d3520' },
};

const PALETTES_B = {
  cream:    { bg: '#f7f1ea', bgSoft: '#f0e6da', bgDeep: '#e8dcce', ink: '#20241f', inkSoft: '#3a4039', inkMute: '#70756b', rule: '#d8cfc2', accent: '#5b6b4a' },
  ink:      { bg: '#f4ede2', bgSoft: '#ebe1d0', bgDeep: '#e0d4bf', ink: '#24281f', inkSoft: '#3e443a', inkMute: '#747a6d', rule: '#cfc5b3', accent: '#6a7a55' },
  sage:     { bg: '#e9eddd', bgSoft: '#dde3cc', bgDeep: '#ced7b9', ink: '#212a20', inkSoft: '#3e4937', inkMute: '#707a68', rule: '#bcc5a8', accent: '#5b6b4a' },
  blush:    { bg: '#f2e3d6', bgSoft: '#ead4c3', bgDeep: '#e0c3ad', ink: '#2a1d16', inkSoft: '#4a362a', inkMute: '#7a6455', rule: '#ccb19c', accent: '#b56a4a' },
  charcoal: { bg: '#ede5d6', bgSoft: '#e2d7c4', bgDeep: '#d5c7b1', ink: '#1f241e', inkSoft: '#383d37', inkMute: '#6f7468', rule: '#c3b8a0', accent: '#8b553b' },
};

const hexToRgb = (hex) => {
  const h = hex.replace('#', '');
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
};
const rgbStr = (rgb) => `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
const lerp = (a, b, t) => a + (b - a) * t;
const lerpRgb = (a, b, t) => {
  const ra = hexToRgb(a), rb = hexToRgb(b);
  return [Math.round(lerp(ra[0], rb[0], t)), Math.round(lerp(ra[1], rb[1], t)), Math.round(lerp(ra[2], rb[2], t))];
};

export function useScrollPalette(direction = 'a') {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[data-palette]'));
    if (!sections.length) return;
    const root = document.documentElement;
    const progress = document.getElementById('scroll-progress');

    const getPalette = (name) => {
      const dir = direction === 'b' ? PALETTES_B : PALETTES_A;
      return dir[name] || PALETTES_A.cream;
    };

    const apply = (pA, pB, t) => {
      const keys = ['bg', 'bgSoft', 'bgDeep', 'ink', 'inkSoft', 'inkMute', 'rule', 'accent'];
      const cssMap = {
        bg: '--bg', bgSoft: '--bg-soft', bgDeep: '--bg-deep',
        ink: '--ink', inkSoft: '--ink-soft', inkMute: '--ink-mute',
        rule: '--rule', accent: '--accent',
      };
      keys.forEach(k => {
        const rgb = lerpRgb(pA[k], pB[k], t);
        root.style.setProperty(cssMap[k], rgbStr(rgb));
      });
    };

    const onScroll = () => {
      const viewportMid = window.scrollY + window.innerHeight * 0.35;
      let currentIdx = 0;
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop <= viewportMid) currentIdx = i;
      }
      const curr = sections[currentIdx];
      const next = sections[currentIdx + 1] || curr;
      const start = curr.offsetTop + curr.offsetHeight * 0.6;
      const end = curr.offsetTop + curr.offsetHeight;
      const t = Math.max(0, Math.min(1, (viewportMid - start) / Math.max(1, end - start)));
      const pA = getPalette(curr.dataset.palette);
      const pB = getPalette(next.dataset.palette);
      apply(pA, pB, curr === next ? 0 : t);

      if (progress) {
        const docH = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docH > 0 ? (window.scrollY / docH) * 100 : 0;
        progress.style.width = pct.toFixed(2) + '%';
      }
    };

    let rafScheduled = false;
    const schedule = () => {
      if (rafScheduled) return;
      rafScheduled = true;
      requestAnimationFrame(() => { rafScheduled = false; onScroll(); });
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    onScroll();

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [direction]);
}
