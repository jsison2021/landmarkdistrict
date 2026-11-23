'use client';

import { useEffect } from 'react';

function splitWords(el: HTMLElement) {
  const nodes = [...el.childNodes];
  el.innerHTML = '';
  let wordIdx = 0;

  const emit = (text: string, container: HTMLElement) => {
    for (const seg of text.split(/(\s+)/)) {
      if (!seg) continue;
      if (/^\s+$/.test(seg)) {
        container.appendChild(document.createTextNode(seg));
        continue;
      }
      const word = document.createElement('span');
      word.className = 'w';
      word.style.setProperty('--wi', String(wordIdx));
      word.textContent = seg;
      container.appendChild(word);
      wordIdx++;
    }
  };

  for (const n of nodes) {
    if (n.nodeType === Node.TEXT_NODE) {
      emit(n.textContent ?? '', el);
    } else if (n instanceof HTMLElement && n.tagName === 'EM') {
      const em = document.createElement('em');
      if (n.className) em.className = n.className;
      emit(n.textContent ?? '', em);
      el.appendChild(em);
    } else {
      el.appendChild(n);
    }
  }
  el.dataset.revealBuilt = '1';
}

export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    els
      .filter((el) => el.dataset.reveal === 'words' && !el.dataset.revealBuilt)
      .forEach(splitWords);

    document.documentElement.classList.add('reveal-ready');

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}
