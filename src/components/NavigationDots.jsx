import React from 'react';
import '../css/NavigationDots.css';

const NavigationDots = ({ banners, activeIndex, onDotClick }) => {
  return (
    <div className="navigation-dots">
      {banners.map((_, index) => (
        <div
          key={index}
          className={`dot ${index === activeIndex ? 'active' : ''}`}
          onClick={() => onDotClick(index)} // Pass the clicked dot index to parent
        />
      ))}
    </div>
  );
};

export default NavigationDots;
