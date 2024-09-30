import React, { useState, useEffect } from 'react';
import '../css/Illustration.css'; 

import illustrationBackground from '../img/illustrationcover.webp';
import BlockBackground from '../img/bitcoin.webp';
import twitchBackground from '../img/twitchcover.webp';
import illustrationImg1 from '../img/Illustration1.webp';
import illustrationImg2 from '../img/Illustration2.webp';
import illustrationImg3 from '../img/Illustration3.webp';
import illustrationImg4 from '../img/Illustration4.webp';
import illustrationImg5 from '../img/Illustration7.webp';
import illustrationImg6 from '../img/Illustration8.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Footer from './FooterComponent';
import LogoAnime from './LogoAnime';
import Heading from './Heading';
import Worktogether from './Worktogether';
import Slider from './WebCompSlider';

import AOS from 'aos';
import 'aos/dist/aos.css';

const IllustrationComponent = () => {
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

  const slides = [
    {
      title: 'Blockchain Development',
      image: BlockBackground, // Reference the imported image
      link: '/blockchain',
      className: 'webdev',
    },
    {
      title: 'Twitch Services and Packages',
      image: twitchBackground, // Reference the imported image
      link: '/twitch',
      className: 'graphic',
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <LogoAnime />
      <div className="illustrationtitle-img" style={{ backgroundImage: `url(${illustrationBackground})` }}>
        <h1 data-aos='fade-up' data-aos-easing="linear" data-aos-duration="1000">Illustrations</h1>
      </div>

      <div className="illustration-container">
        {/* Heading */}
          <Heading />
          
        

        <div className="illustration-services">
          {[illustrationImg1, illustrationImg2, illustrationImg3, illustrationImg4, illustrationImg5, illustrationImg6].map((img, index) => (
            <a href="#!" key={index} onClick={() => openModal(img)}>
              <img src={img} alt={`illustration ${index + 1}`} />
            </a>
          ))}
        </div>

        {/* Worktogether */}
        <Worktogether />
        
        {/* Slider */}
        <Slider slides={slides} />

        {/* Footer */}
        <Footer />

        {/* Modal */}
        {modalOpen && (
          <div className="modal">
            <span className="close-modal" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
            <img src={modalImage} alt="Modal View" className="modal-content" />
          </div>
        )}
      </div>
    </>
  );
};

export default IllustrationComponent;
