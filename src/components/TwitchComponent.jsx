import React, { useState, useEffect } from 'react';
// import '../css/Twitch.css';

import illustrationBackground from '../img/illustrationcover.png';
import webcover from '../img/web-cover.png';
import twitchBackground from '../img/twitchcover.png';

// Import your images here
import twitchImg1 from '../Twitch/1.png';
import twitchImg2 from '../Twitch/1-2.png';
import twitchImg3 from '../Twitch/1-3.png';
// import twitchImg4 from '../Twitch/4.png';
// import twitchImg5 from '../Twitch/5.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './FooterComponent';
import LogoAnime from './LogoAnime';
import Heading from './Heading';
import Slider from './WebCompSlider';
import Worktogether from './Worktogether';

const slides = [
  {
    title: 'Illustration and Digital Sketches',
    image: illustrationBackground,
    link: '/illustrations',
    className: 'webdev',
  },
  {
    title: 'Website Development',
    image: webcover,
    link: '/website',
    className: 'graphic',
  },
];

// Add images for the grid
const images = [
  { src: twitchImg1, alt: 'Image 1' },
  { src: twitchImg2, alt: 'Image 2' },
  { src: twitchImg3, alt: 'Image 3' },
  // { src: twitchImg4, alt: 'Image 4' },
  // { src: twitchImg5, alt: 'Image 5' },
];

const TwitchComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <LogoAnime />
      <div className="relative flex items-center justify-center h-screen bg-cover bg-center text-white" style={{ backgroundImage: `url(${twitchBackground})` }}>
        <h1 data-aos='fade-up' data-aos-easing="linear" data-aos-duration="1000" className="text-6xl md:text-8xl text-center">Twitch Services</h1>
      </div>

      <div className="py-24 bg-black text-aliceblue flex flex-col items-center">
        <Heading />

        {/* Centered grid layout for images */}
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <img
              src={images[0].src}
              alt={images[0].alt}
              onClick={() => openModal(images[0].src)}
              className="w-5/6 h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4  flex justify-center">
            {images.slice(1).map((image, index) => (
              <div key={index} className="flex  justify-between">
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => openModal(image.src)}
                  className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer object-cover "
                />
              </div>
            ))}
          </div>
        </div>

        <Worktogether />
        <Slider slides={slides} />
        <Footer />

        {modalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80 cursor-pointer">
            <span className="absolute top-5 right-5 text-2xl text-white cursor-pointer transition-transform duration-300 hover:scale-125" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </span>

            <img
              className="w-[94vw] h-auto cursor-auto object-cover"
              src={modalImage}
              alt="Modal Content"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default TwitchComponent;
