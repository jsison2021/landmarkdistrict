import React from 'react';
import { motion } from 'framer-motion';
import { getOffices } from '../../data';
import './OfficesSection.css';

function OfficesSection() {
  const offices = getOffices();

  return (
    <section id="offices" className="full-page-section offices-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          OFFICES
        </motion.h2>
        <div className="offices-content">
          {offices.map((office) => (
            <motion.div
              key={office.id}
              className="office-card featured"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="office-logo-container">
                <img src={office.logo} alt={`${office.name} logo`} className="office-logo" />
              </div>
              <h3 className="office-name">{office.name}</h3>
              <div className="office-details">
                <div className="office-detail">
                  <span className="detail-icon">📍</span>
                  <span className="detail-text">{office.address}</span>
                </div>
                <div className="office-detail">
                  <span className="detail-icon">📞</span>
                  <a href={`tel:${office.phone}`} className="detail-link">
                    {office.phone}
                  </a>
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
