import React from 'react';
import './ScrollIndicator.css';

const sectionLabels = ['Home', 'Shops', 'Offices', 'Residences', 'Location', 'Contact'];

function ScrollIndicator({ activeSection, scrollToSection, totalSections }) {
  return (
    <div className="scroll-indicator">
      {Array.from({ length: totalSections }).map((_, index) => (
        <button
          key={index}
          className={`scroll-dot ${activeSection === index ? 'active' : ''}`}
          onClick={() => scrollToSection(index)}
          aria-label={`Go to ${sectionLabels[index]}`}
          title={sectionLabels[index]}
        />
      ))}
    </div>
  );
}

export default ScrollIndicator;
