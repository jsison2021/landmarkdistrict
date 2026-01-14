import React from 'react';
import { motion } from 'framer-motion';
import { getOffices } from '../../data';
import './OfficesSection.css';

function OfficesSection() {
  const offices = getOffices();

  return (
    <section id="offices" className="full-page-section offices-section">
      <div className="container">
        <motion.div
          className="offices-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="offices-title">OFFICES</h2>
          <p className="offices-subtitle">Professional spaces for businesses that make a difference</p>
        </motion.div>

        <div className="offices-grid">
          {offices.map((office, index) => (
              <motion.div
                key={office.id}
                className="office-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="office-card-image">
                  {office.logo && (
                    <img
                      src={office.logo}
                      alt={`${office.name} logo`}
                      className="office-logo"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="office-card-info">
                  <h4 className="office-card-name">{office.name}</h4>
                  <p className="office-card-address">{office.address}</p>
                  <div className="office-card-actions">
                    {office.website && (
                      <a
                        href={office.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="office-card-link"
                      >
                        Website
                      </a>
                    )}
                    {office.phone && (
                      <a href={`tel:${office.phone}`} className="office-card-link">
                        Call
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        <motion.div
          className="office-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="cta-text">Interested in office space at Landmark District?</p>
          <a href="#contact" className="cta-button">Inquire About Office Space</a>
        </motion.div>
      </div>
    </section>
  );
}

export default OfficesSection;
