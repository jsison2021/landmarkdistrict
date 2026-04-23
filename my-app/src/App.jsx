import React, { useEffect, useState } from 'react';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import LogoIntro from './components/animations/LogoIntro';
import HeroSection from './components/sections/HeroSection';
import ShopsSection from './components/sections/ShopsSection';
import ResidencesSection from './components/sections/ResidencesSection';
import LocationSection from './components/sections/LocationSection';
import ContactSection from './components/sections/ContactSection';
import { useReveal } from './hooks/useReveal';
import { useScrollPalette } from './hooks/useScrollPalette';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-dir', 'a');
    document.documentElement.setAttribute('data-dark', '0');
    document.documentElement.style.setProperty('--motion', '1');
  }, []);

  useReveal();
  useScrollPalette('a');

  return (
    <>
      <div className="scroll-progress" id="scroll-progress" aria-hidden="true" />
      {showIntro && <LogoIntro direction="a" onComplete={() => setShowIntro(false)} />}
      <Navigation />
      <HeroSection />
      <ShopsSection />
      <ResidencesSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
