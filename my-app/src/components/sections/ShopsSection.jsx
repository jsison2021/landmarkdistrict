import React from 'react';
import { motion } from 'framer-motion';
import { getShops } from '../../data';
import './ShopsSection.css';

const categories = [
  { id: 'restaurants', label: 'Restaurants', description: 'Dining & Drinks' },
  { id: 'retail', label: 'Retail', description: 'Shops & Stores' },
  { id: 'services', label: 'Services', description: 'Professional & Personal' }
];

function ShopsSection() {
  const shops = getShops();

  const getShopsByCategory = (categoryId) => {
    return shops.filter(shop => shop.category === categoryId);
  };


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
          <h2 className="section-title">MARKETPLACE</h2>
          <p className="section-subtitle">Discover local businesses in the heart of Old Louisville</p>
        </motion.div>

        {categories.map((category, categoryIndex) => {
          const categoryShops = getShopsByCategory(category.id);
          if (categoryShops.length === 0) return null;

          return (
            <motion.div
              key={category.id}
              className="category-section"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="category-header">
                <h3 className="category-title">{category.label}</h3>
                <span className="category-line"></span>
                <span className="category-count">{categoryShops.length}</span>
              </div>

              <div className="masonry-grid">
                {categoryShops.map((shop, index) => (
                    <motion.div
                      key={shop.id}
                      className="masonry-card"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      viewport={{ once: true }}
                    >
                      <div className="masonry-card-image">
                        {shop.logo && (
                          <img
                            src={shop.logo}
                            alt={`${shop.name} logo`}
                            className="masonry-logo"
                            loading="lazy"
                          />
                        )}
                      </div>
                      <div className="masonry-card-info">
                        <h4 className="masonry-card-name">{shop.name}</h4>
                        <p className="masonry-card-address">{shop.address}</p>
                        <div className="masonry-card-actions">
                          {shop.website && (
                            <a
                              href={shop.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="masonry-card-link"
                            >
                              Website
                            </a>
                          )}
                          {shop.phone && (
                            <a href={`tel:${shop.phone}`} className="masonry-card-link">
                              Call
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default ShopsSection;
