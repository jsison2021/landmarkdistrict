import React from 'react';
import { motion } from 'framer-motion';
import { getAboutInfo } from '../../data';
import './HeroSection.css';

function HeroSection() {
  const about = getAboutInfo();

  return (
    <section id="hero" className="full-page-section hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <h1 className="hero-headline">{about.headline}</h1>
        <p className="hero-tagline">{about.tagline}</p>
        <p className="hero-description">{about.description}</p>
        <div className="scroll-hint">
          <span>Scroll to explore</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
