import React from 'react';
import { motion } from 'framer-motion';
import { getShops } from '../../data';
import './ShopsSection.css';

function ShopsSection() {
  const shops = getShops();

  return (
    <section id="shops" className="full-page-section shops-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">SHOPS & RESTAURANTS</h2>
          <p className="section-subtitle">Curated retail experiences in the heart of Old Louisville</p>
        </motion.div>

        <motion.div
          className="shops-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
        >
          {shops.map((shop, index) => (
            <motion.div
              key={shop.id}
              className="shop-item"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <div className="shop-number">{String(index + 1).padStart(2, '0')}</div>

              <div className="shop-logo-wrapper">
                <div className="shop-logo-frame">
                  {shop.logo && <img src={shop.logo} alt={`${shop.name} logo`} className="shop-logo" loading="lazy" />}
                </div>
              </div>

              <div className="shop-info">
                <h3 className="shop-name">{shop.name}</h3>
                <div className="shop-meta">
                  <div className="shop-address">{shop.address}</div>
                  <div className="shop-actions">
                    {shop.website && (
                      <a
                        href={shop.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shop-link"
                      >
                        Website →
                      </a>
                    )}
                    <a href={`tel:${shop.phone}`} className="shop-link">
                      {shop.phone}
                    </a>
                  </div>
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
