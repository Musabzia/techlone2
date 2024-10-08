import React, { useState, useEffect } from 'react';
import '../css/Website.css';
import webcover from '../img/web-cover.webp';
import webImg1 from '../img/website1.webp';
import webImg2 from '../img/website2.webp';
import webImg3 from '../img/website3.webp';
import webImg4 from '../img/website4.webp';
import webImg5 from '../img/website5.webp';
import webImg6 from '../img/website6.webp';
import webImg7 from '../img/website7.webp';
import webImg8 from '../img/website8.webp';
import twitchSlider from '../img/twitchcover.webp';
import appCover from '../img/AppCover.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './FooterComponent';
import Worktogether from './Worktogether';
import Slider from './WebCompSlider';
import Heading from './Heading';
import LogoAnime from './LogoAnime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const WebComponent = () => {

  const slides = [
    {
      title: 'Twitch Services',
      image: twitchSlider, // Reference the imported image
      link: '/twitch',
      className: 'webdev',
    },
    {
      title: 'Application Development',
      image: appCover, // Reference the imported image
      link: '/application',
      className: 'graphic',
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imgSrc) => {
    setModalImage(imgSrc);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <LogoAnime />
      <div className="webtitle-img" style={{ backgroundImage: `url(${webcover})` }}>
        <h1 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
          Website Development
        </h1>
      </div>

      <div className="web-container">
        <div className="web-services">
          {/* Heading */}
          <Heading 
                title="At Techlone" 
                description="
                We redefine digital presence through Website Design. We blend aesthetics with functionality,
                 creating immersive online experiences. Our designs are more than just pixels;
                they're gateways that engage and inspire."
          />
          {[webImg1, webImg2, webImg3, webImg4, webImg5, webImg6, webImg7, webImg8].map((img, index) => (
            <a href="#!" key={index} onClick={() => openModal(img)}>
              <img 

                src={img}
                alt={`website ${index + 1}`} 
                data-aos="fade-up"
                data-aos-duration="1000"

               />
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
          <div className="modal" onClick={closeModal}>
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

export default WebComponent;



