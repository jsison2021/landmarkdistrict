import React, { useState } from 'react';
import { useScrollSnap } from './hooks/useScrollSnap';
import Navigation from './components/layout/Navigation';
import ScrollIndicator from './components/layout/ScrollIndicator';
import LogoIntro from './components/animations/LogoIntro';
import HeroSection from './components/sections/HeroSection';
import ShopsSection from './components/sections/ShopsSection';
import OfficesSection from './components/sections/OfficesSection';
import ResidencesSection from './components/sections/ResidencesSection';
import LocationSection from './components/sections/LocationSection';
import ContactSection from './components/sections/ContactSection';

const sections = [
  { id: 'hero', Component: HeroSection },
  { id: 'shops', Component: ShopsSection },
  { id: 'offices', Component: OfficesSection },
  { id: 'residences', Component: ResidencesSection },
  { id: 'location', Component: LocationSection },
  { id: 'contact', Component: ContactSection }
];

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const { containerRef, activeSection, scrollToSection } = useScrollSnap(sections);

  return (
    <>
      {showIntro && <LogoIntro onComplete={() => setShowIntro(false)} />}
      <Navigation scrollToSection={scrollToSection} sections={sections} />
      <ScrollIndicator
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        totalSections={sections.length}
      />
      <div ref={containerRef} className="scroll-container">
        {sections.map(({ id, Component }) => (
          <Component key={id} />
        ))}
      </div>
    </>
  );
}

export default App;
