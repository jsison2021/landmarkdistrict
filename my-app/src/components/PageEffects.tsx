'use client';

import { useReveal } from '@/hooks/useReveal';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function PageEffects() {
  useReveal();
  useScrollProgress();
  return null;
}
