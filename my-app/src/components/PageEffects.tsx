'use client';

import { useReveal } from '@/hooks/useReveal';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useHashScroll } from '@/hooks/useHashScroll';

export default function PageEffects() {
  useReveal();
  useScrollProgress();
  useHashScroll();
  return null;
}
