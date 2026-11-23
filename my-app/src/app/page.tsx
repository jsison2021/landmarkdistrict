import LogoIntro from '@/components/animations/LogoIntro';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ShopsSection from '@/components/sections/ShopsSection';
import ResidencesSection from '@/components/sections/ResidencesSection';
import LocationSection from '@/components/sections/LocationSection';
import ContactSection from '@/components/sections/ContactSection';
import PageEffects from '@/components/PageEffects';

export default function Home() {
  return (
    <>
      <div className="scroll-progress" id="scroll-progress" aria-hidden="true" />
      <LogoIntro />
      <Navigation />
      <main>
        <HeroSection />
        <ShopsSection />
        <ResidencesSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
      <PageEffects />
    </>
  );
}
