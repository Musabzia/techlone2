import React, { useEffect, useRef } from 'react';
import '../css/carousel.css';
import img1 from '../img/bitcoin.webp'; 
import img2 from '../img/web-cover.webp';
import img3 from '../img/appcover.webp';

const images = [img1, img2, img3];

const VerticalCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const parent = carouselRef.current;
    const scrollYPerView = parent.clientHeight;

    const handleWheel = (event) => {
      event.preventDefault();
      if (event.deltaY > 0) {
        scrollDown();
      } else {
        scrollUp();
      }
    };

    const scrollUp = () => {
      let currentScrollY = parent.scrollTop;
      parent.scroll({ top: currentScrollY - scrollYPerView, left: 0, behavior: 'smooth' });
    };

    const scrollDown = () => {
      let currentScrollY = parent.scrollTop;
      parent.scroll({ top: currentScrollY + scrollYPerView, left: 0, behavior: 'smooth' });
    };

    parent.addEventListener('wheel', handleWheel);

    return () => {
      parent.removeEventListener('wheel', handleWheel); // Cleanup
    };
  }, []);

  return (
    <div className="relative">
      <div ref={carouselRef} className="carousel-container h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
        {images.map((img, index) => (
          <div key={index} className="carousel-slide snap-center h-screen flex items-center justify-center">
            <img src={img} alt={`Slide ${index}`} className="carousel-image w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalCarousel;
