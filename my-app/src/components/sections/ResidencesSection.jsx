import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ResidencesSection.css';

function ResidencesSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with email service
    console.log('Email submitted:', email);
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="residences" className="full-page-section residences-section">
      <div className="container-narrow">
        <motion.div
          className="residences-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">RESIDENCES</h2>
          <p className="residences-subtitle">Coming Soon</p>
          <p className="residences-description">
            Residential opportunities will be available at Landmark District.
            Be the first to know when they become available.
          </p>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="email-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="email-input"
              />
              <button type="submit" className="email-submit">
                Notify Me
              </button>
            </form>
          ) : (
            <div className="success-message">
              Thank you! We'll notify you when residences become available.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default ResidencesSection;
