import React from 'react';
import { motion } from 'framer-motion';
import { getLocationInfo } from '../../data';
import './LocationSection.css';

function LocationSection() {
  const location = getLocationInfo();

  return (
    <section id="location" className="full-page-section location-section">
      <div className="location-content">
        <motion.div
          className="location-map"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=${location.googleMapsApiKey}&q=${location.coordinates.lat},${location.coordinates.lng}&zoom=17`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Landmark District Location"
          />
        </motion.div>
        <motion.div
          className="location-info"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="location-title">LOCATION</h2>
          <h3 className="location-neighborhood">{location.neighborhood}</h3>
          <p className="location-address">{location.address}</p>
          <p className="location-description">
            Midpoint between Downtown Louisville and University of Louisville.
            Experience the historic charm of Old Louisville.
          </p>
          <a
            href={`https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="directions-link"
          >
            Get Directions →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default LocationSection;
