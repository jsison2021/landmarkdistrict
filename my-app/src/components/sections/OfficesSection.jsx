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
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">OFFICES</h2>
          <p className="section-subtitle">Professional spaces for businesses that make a difference</p>
        </motion.div>

        <motion.div
          className="offices-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {offices.map((office, index) => (
            <motion.div
              key={office.id}
              className="office-item"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="office-number">{String(index + 1).padStart(2, '0')}</div>

              <div className="office-logo-wrapper">
                <div className="office-logo-frame">
                  {office.logo && <img src={office.logo} alt={`${office.name} logo`} className="office-logo" loading="lazy" />}
                </div>
              </div>

              <div className="office-info">
                <h3 className="office-name">
                  {office.namePrefix ? (
                    <>
                      <span className="office-name-prefix">{office.namePrefix}</span>{' '}
                      <span className="office-name-main">{office.nameMain}</span>
                    </>
                  ) : (
                    office.name
                  )}
                </h3>
                <div className="office-meta">
                  <div className="office-address">{office.address}</div>
                  <div className="office-actions">
                    {office.website && (
                      <a href={office.website} target="_blank" rel="noopener noreferrer" className="office-link office-website">
                        WEBSITE →
                      </a>
                    )}
                    {office.phone && (
                      <a href={`tel:${office.phone}`} className="office-link">
                        {office.phone}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="office-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="cta-text">Interested in office space at Landmark District?</p>
          <a href="#contact" className="cta-button"><span>Inquire About Office Space</span></a>
        </motion.div>
      </div>
    </section>
  );
}

export default OfficesSection;
