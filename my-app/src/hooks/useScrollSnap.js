import { useEffect, useRef, useState } from 'react';

export const useScrollSnap = (sections) => {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // CSS scroll-snap as fallback
    container.style.scrollSnapType = 'y mandatory';
    container.style.scrollBehavior = 'smooth';

    // Track active section on scroll
    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const windowHeight = window.innerHeight;
      const currentSection = Math.round(scrollPosition / windowHeight);
      setActiveSection(currentSection);
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  const scrollToSection = (index) => {
    const container = containerRef.current;
    if (!container) return;

    const target = container.children[index];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return { containerRef, activeSection, scrollToSection };
};
