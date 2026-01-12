import React from 'react';
import { motion } from 'framer-motion';
import { getShops } from '../../data';
import './ShopsSection.css';

function ShopsSection() {
  const shops = getShops();

  return (
    <section id="shops" className="full-page-section shops-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          SHOPS
        </motion.h2>
        <motion.div
          className="shops-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {shops.map((shop) => (
            <motion.div
              key={shop.id}
              className="shop-card"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="shop-logo-container">
                <img src={shop.logo} alt={`${shop.name} logo`} className="shop-logo" />
              </div>
              <h3 className="shop-name">{shop.name}</h3>
              <div className="shop-details">
                <div className="shop-detail">
                  <span className="detail-icon">📍</span>
                  <span className="detail-text">{shop.address}</span>
                </div>
                {shop.website && (
                  <div className="shop-detail">
                    <span className="detail-icon">🌐</span>
                    <a
                      href={shop.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="detail-link"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
                <div className="shop-detail">
                  <span className="detail-icon">📞</span>
                  <a href={`tel:${shop.phone}`} className="detail-link">
                    {shop.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ShopsSection;
