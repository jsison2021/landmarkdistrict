import LogoIntro from '@/components/animations/LogoIntro';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ShopsSection from '@/components/sections/ShopsSection';
import ResidencesSection from '@/components/sections/ResidencesSection';
import LocationSection from '@/components/sections/LocationSection';
import ContactSection from '@/components/sections/ContactSection';
import PageEffects from '@/components/PageEffects';
import { siteJsonLd } from '@/lib/structured-data';

// Escaping < keeps tenant names from ever closing the script tag.
const jsonLd = JSON.stringify(siteJsonLd()).replace(/</g, '\\u003c');

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="scroll-progress" id="scroll-progress" aria-hidden="true" />
      <LogoIntro />
      <Navigation />
      <main id="main" tabIndex={-1}>
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
