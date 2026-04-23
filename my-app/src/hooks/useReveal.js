import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'));

    els.filter(el => el.dataset.reveal === 'words' && !el.dataset.revealBuilt).forEach(el => {
      const mode = el.dataset.revealMode || 'rise';
      const nodes = [...el.childNodes];
      el.innerHTML = '';
      let wordIdx = 0;

      const emit = (text, container, emStyle) => {
        const segments = text.split(/(\s+)/);
        segments.forEach(seg => {
          if (/^\s+$/.test(seg)) {
            container.appendChild(document.createTextNode(seg));
            return;
          }
          if (!seg) return;
          const word = document.createElement('span');
          word.className = 'w';
          word.style.setProperty('--wi', wordIdx);
          if (emStyle) word.dataset.em = '1';
          if (mode === 'drift' || mode === 'slice' || mode === 'letters') {
            const chars = [...seg];
            chars.forEach((c, ci) => {
              const l = document.createElement('span');
              l.className = 'l';
              l.textContent = c;
              l.style.setProperty('--li', ci);
              const seed = (wordIdx * 31 + ci * 17) % 100 / 100;
              l.style.setProperty('--rand', seed.toFixed(3));
              word.appendChild(l);
            });
          } else {
            word.textContent = seg;
          }
          container.appendChild(word);
          wordIdx++;
        });
      };

      nodes.forEach(n => {
        if (n.nodeType === 3) {
          emit(n.textContent, el, false);
        } else if (n.nodeType === 1 && n.tagName === 'EM') {
          const em = document.createElement('em');
          em.className = (n.className || '') + ' reveal-em';
          emit(n.textContent, em, true);
          el.appendChild(em);
        } else {
          el.appendChild(n);
        }
      });
      el.setAttribute('data-reveal-mode', mode);
      el.dataset.revealBuilt = '1';
    });

    const io = new IntersectionObserver(entries => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    els.forEach(el => io.observe(el));

    return () => io.disconnect();
  }, []);
}
