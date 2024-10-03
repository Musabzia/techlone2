import React from 'react';
import '../css/WebCompSlider.css';
import { Link } from 'react-router-dom';

const WebCompSlider = ({ slides }) => {
  return (
    <div className="slider-container">
      <div className="center">
        {slides.map((slide, index) => (
          <Link
            key={index}
            to={slide.link}
            className={`slide ${slide.className}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Add the overlay here */}
            <h1>{slide.title}</h1>
           
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WebCompSlider;
