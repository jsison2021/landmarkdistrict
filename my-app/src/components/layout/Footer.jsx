import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} Landmark District. All Rights Reserved.
        </p>
        <p className="footer-location">
          Old Louisville, Louisville KY
        </p>
      </div>
    </footer>
  );
}

export default Footer;
