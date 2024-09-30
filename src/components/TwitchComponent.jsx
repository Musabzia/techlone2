import React, { useState, useEffect } from 'react';
import illustrationBackground from '../img/illustrationcover.webp';
import webcover from '../img/web-cover.webp';
import twitchBackground from '../img/twitchcover.webp';
import twitchImg1 from '../img/twitch1.webp';
import twitchImg2 from '../img/twitch1-2.webp';
import twitchImg3 from '../img/twitch1-3.webp';
import twitchImg4 from '../img/twitch15.webp';
import twitchImg5 from '../img/twitch15-2.webp';
import twitchImg6 from '../img/twitch15-3.webp';
import twitchImg7 from '../img/twitch13.webp';
import twitchImg8 from '../img/twitch13-1.webp';
import twitchImg9 from '../img/twitch13-2.webp';
import twitchImg10 from '../img/twitch9.webp';
import twitchImg11 from '../img/twitch9-1.webp';
import twitchImg12 from '../img/twitch5.webp';
import twitchImg13 from '../img/twitch5-1.webp';
import twitchImg14 from '../img/twitch5-2.webp';
import twitchImg15 from '../img/twitch7.webp';
import twitchImg16 from '../img/twitch2.webp';
import twitchImg17 from '../img/twitch2-2.webp';
import twitchImg18 from '../img/twitch17.webp';
import twitchImg19 from '../img/twitch17-2.webp';
import twitchImg20 from '../img/twitch4.webp';


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

const images = [
  { src: twitchImg1, alt: 'Image 1' },
  { src: twitchImg2, alt: 'Image 2' },
  { src: twitchImg3, alt: 'Image 3' },
  { src: twitchImg4, alt: 'Image 4' },
  { src: twitchImg5, alt: 'Image 5' },
  { src: twitchImg6, alt: 'Image 6' },
  { src: twitchImg7, alt: 'Image 7' },
  { src: twitchImg8, alt: 'Image 8' },
  { src: twitchImg9, alt: 'Image 9' },
  { src: twitchImg10, alt: 'Image 10' },
  { src: twitchImg11, alt: 'Image 11' },
  { src: twitchImg12, alt: 'Image 12' },
  { src: twitchImg13, alt: 'Image 13' },
  { src: twitchImg14, alt: 'Image 14' },
  { src: twitchImg15, alt: 'Image 15' },
  { src: twitchImg16, alt: 'Image 16' },
  { src: twitchImg17, alt: 'Image 17' },
  { src: twitchImg18, alt: 'Image 18' },
  { src: twitchImg19, alt: 'Image 19' },
  { src: twitchImg20, alt: 'Image 20' },
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

          {/* 1st Group */}

          <div className="flex mb-4 justify-center">
            <img
              src={images[0].src}
              alt={images[0].alt}
              onClick={() => openModal(images[0].src)}
              className="w-5/6 h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          </div>
          <div className="grid grid-cols-2  gap-4 flex  justify-items-center px-4 sm:px-8 md:px-12 lg:px-36">
            {images.slice(1,3).map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => openModal(image.src)}
                  className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer object-cover"
                />
              </div>
            ))}
          </div>

          {/* 2nd Group */}

          <div className="flex mb-4 justify-center pt-6">
            <img
              src={images[3].src}
              alt={images[3].alt}
              onClick={() => openModal(images[3].src)}
              className="w-5/6 h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-2  gap-4 flex  justify-items-center px-4 sm:px-8 md:px-12 lg:px-36">
            {images.slice(4,6).map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => openModal(image.src)}
                  className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer object-cover"
                />
              </div>
            ))}
          </div>

          {/* 3rd Group */}

          <div className="grid  gap-4 flex  justify-items-center px-4 pt-6 sm:px-8 md:px-12 lg:px-36">
            {images.slice(8,9).map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => openModal(image.src)}
                  className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer object-contain"
                />
              </div>
            ))}
          </div>


          <div className="flex mb-4 justify-center pt-6">
            <img
              src={images[6].src}
              alt={images[6].alt}
              onClick={() => openModal(images[6].src)}
              className="w-5/6 h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 flex  justify-items-center px-4 pt-6 sm:px-8 md:px-12 lg:px-36">

            {images.slice(7,8).map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => openModal(image.src)}
                  className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer object-contain"
                />
              </div>
            ))}
            {images.slice(9,10).map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => openModal(image.src)}
                  className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer object-contain"
                />
              </div>
            ))}



          </div>

          <div className="flex mb-4 justify-center pt-6">
            <img
              src={images[10].src}
              alt={images[10].alt}
              onClick={() => openModal(images[10].src)}
              className="w-5/6 h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 flex  justify-items-center px-4 pt-6 sm:px-8 md:px-12 lg:px-36">

            {images.slice(11,19).map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => openModal(image.src)}
                  className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer object-contain"
                />
              </div>
            ))}
            
          </div>

          <div className="flex mb-4 justify-center pt-6">
            <img
              src={images[19].src}
              alt={images[19].alt}
              onClick={() => openModal(images[19].src)}
              className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          </div>

        </div>

        <Worktogether />
        <Slider slides={slides} />
        <Footer />

        {modalOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80 cursor-pointer p-4">
    <span className="absolute top-5 right-5 text-2xl text-white cursor-pointer transition-transform duration-300 hover:scale-125" onClick={closeModal}>
      <FontAwesomeIcon icon={faTimes} />
    </span>

    <img
      className="max-w-[90vw] max-h-[90vh] h-auto cursor-auto object-contain"
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
