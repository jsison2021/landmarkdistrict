import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LogoIntro.css';

function LogoIntro({ onComplete }) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Complete the intro after 3.5 seconds
    const timer = setTimeout(() => {
      setIsComplete(true);
      if (onComplete) {
        setTimeout(onComplete, 800); // Allow fade out to complete
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="logo-intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <motion.div
            className="logo-intro-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <motion.img
              src="/assets/tenant-logos/logo.png"
              alt="Landmark District"
              className="logo-intro-image"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.4, 0, 0.2, 1],
              }}
            />
            <motion.div
              className="logo-intro-line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: [0.4, 0, 0.2, 1],
              }}
            />
            <motion.div
              className="logo-intro-text-wrapper"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.5,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <span className="logo-intro-prefix">Shops at</span>
              <h1 className="logo-intro-text">LANDMARK DISTRICT</h1>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LogoIntro;
