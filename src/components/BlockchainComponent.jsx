import React, { useState, useEffect } from 'react';
import BlockBackground from '../img/bitcoin.webp';
import illustrationBackground from '../img/illustrationcover.webp';
import GraphicBackground from '../img/graphiccover.webp';
import blockImg1 from '../img/blockchain01.webp';
import blockImg2 from '../img/blockchain02.webp';
import blockImg3 from '../img/blockchain03.webp';
import blockImg4 from '../img/blockchain04.webp';
import blockImg5 from '../img/blockchain05.webp';
import blockImg6 from '../img/blockchain06.webp';
import blockImg7 from '../img/blockchain07.webp';
import blockImg8 from '../img/blockchain08.webp';
import blockImg9 from '../img/blockchain09.webp';
import blockImg10 from '../img/blockchain10.webp';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from './FooterComponent';
import LogoAnime from './LogoAnime';
import Worktogether from './Worktogether';
import Slider from './WebCompSlider';

const slides = [
  {
    title: 'Artwork and Graphic Design',
    image: GraphicBackground,
    link: '/graphics',
    className: 'webdev',
  },
  {
    title: 'Illustration and Digital Sketches',
    image: illustrationBackground,
    link: '/illustrations',
    className: 'graphic',
  },
];

const images = [
  blockImg1, blockImg2, blockImg3, blockImg4,blockImg5,blockImg6,blockImg7, blockImg8,blockImg9,blockImg10  // You can add more images as needed
];

const BlockchainComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imgSrc) => {
    setModalImage(imgSrc);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
    document.body.style.overflow = 'unset'; // Re-enable background scrolling
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <LogoAnime />
      <div
        className="relative flex items-center justify-center h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${BlockBackground})` }}
      >
        <h1 data-aos='fade-up' data-aos-easing="linear" data-aos-duration="1000" className="text-6xl md:text-8xl text-center">
          Blockchain <br /> Development
        </h1>
      </div>

      <div className="py-24 bg-black text-white flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold">At Techlone</h1>
          <p className="mt-4 text-lg px-4 sm:px-6 md:px-8 lg:px-32">
            Embrace the future of technology with expert blockchain development services. Whether you're a startup exploring blockchain opportunities or an established enterprise seeking to optimize your operations, we have the expertise and resources to bring your vision to life. Get in touch with us today to discuss your blockchain project requirements and take the first step towards innovation and success.
          </p>
        </div>

        {/* Centered grid layout for images */}
          <div className="grid grid-cols-2 gap-4 px-4 sm:px-8 md:px-12 lg:px-36">
            {images.slice(0, 6).map((img, index) => (
              <div key={index} className="flex justify-center">
                <img
                src={img}
                alt={`blockchain ${index + 2}`} // Adjust the alt text if needed
                onClick={() => openModal(img)}
                className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer object-cover"
               />
             </div>
           ))}
          </div>


        <div className="flex flex-col items-center">
          <div className="flex mb-4 justify-center">
            <img
              src={images[6]} // Reference the specific image by index
              alt={`blockchain 7`} // Update the alt text accordingly
              onClick={() => openModal(images[6])} // Open modal with this image
             className="w-5/6 h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
           />
          </div>
        </div>
{/* 
        <div className="flex flex-col items-center">
          <div className="flex mb-4 justify-center">
            <img
              src={images[7]} // Reference the specific image by index
              alt={`blockchain 7`} // Update the alt text accordingly
              onClick={() => openModal(images[7])} // Open modal with this image
             className="w-6/6 h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
           />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex mb-4 justify-center">
            <img
              src={images[8]} // Reference the specific image by index
              alt={`blockchain 7`} // Update the alt text accordingly
              onClick={() => openModal(images[8])} // Open modal with this image
             className="w-6/6 h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
           />
          </div>
        </div> */}

<div className="grid grid-cols-2 gap-4 px-4 sm:px-8 md:px-12 lg:px-36">
            {images.slice(7, 9).map((img, index) => (
              <div key={index} className="flex justify-center">
                <img
                src={img}
                alt={`blockchain ${index + 2}`} // Adjust the alt text if needed
                onClick={() => openModal(img)}
                className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer object-cover"
               />
             </div>
           ))}
          </div>

        <div className="flex flex-col items-center pt-8">
          <div className="flex mb-4 justify-center">
            <img
              src={images[9]} // Reference the specific image by index
              alt={`blockchain 7`} // Update the alt text accordingly
              onClick={() => openModal(images[9])} // Open modal with this image
             className="w-5/6 h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
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

export default BlockchainComponent;
