import React from 'react';
import { motion } from 'framer-motion';
import { getAboutInfo } from '../../data';
import './HeroSection.css';

function HeroSection() {
  const about = getAboutInfo();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section id="hero" className="full-page-section hero-section">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/tenant-logos/oldlouisville.jpg)` }}
      />
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-headline" variants={itemVariants}>
          {about.headline}
        </motion.h1>
        <motion.p className="hero-tagline" variants={itemVariants}>
          {about.tagline}
        </motion.p>
        <motion.p className="hero-description" variants={itemVariants}>
          {about.description}
        </motion.p>
        <motion.div className="scroll-hint" variants={itemVariants}>
          <span>Scroll to explore</span>
          <div className="scroll-arrow">↓</div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
