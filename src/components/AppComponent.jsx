import React, { useState, useEffect } from 'react';
import '../css/Application.css';
import { Helmet } from 'react-helmet';
import AppLink from '../img/Covers/App-Cover.webp';
import AppBackground from '../img/AppCover.webp';
import webcover from '../img/web-cover.webp';
import GraphicBackground from '../img/graphiccover.webp';
import AppImg1 from '../img/app1.webp';
import AppImg2 from '../img/app2.webp';
import AppImg3 from '../img/app7.webp';
import AppImg5 from '../img/app5.webp';
import AppImg6 from '../img/app6.webp';

import Worktogether from '../components/Worktogether';
import Slider from '../components/WebCompSlider';
import Heading from '../components/Heading';
import LogoAnime from '../components/LogoAnime';
import Footer from '../components/FooterComponent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import AOS from 'aos';
import 'aos/dist/aos.css';

const AppComponent = () => {
  const slides = [
    {
      title: 'Web Development',
      image: webcover,
      link: '/website',
      className: 'webdev',
    },
    {
      title: 'Graphic Designing',
      image: GraphicBackground,
      link: '/graphics',
      className: 'graphic',
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imgSrc) => {
    setModalImage(imgSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : 'unset';
    
    return () => {
      document.body.style.overflow = 'unset'; // Cleanup
    };
  }, [modalOpen]);

  return (
    <>

      <Helmet>
        <meta property="og:title" content="Techlone Global" />
        <meta property="og:description" content="Transform Your Vision into a Cutting-Edge Mobile Experience." />
        <meta property="og:image" content={AppLink} />
        <meta property="og:url" content="https://portfolio.techloneglobal.com/application" />
        <meta property="og:type" content="website" />
      </Helmet>

      <LogoAnime />
      <div className="app">
        <div className="apptitle-img" style={{ backgroundImage: `url(${AppBackground})` }}>
          <h1 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
            Application Development
          </h1>
        </div>

        <div className="app-container">
          <Heading  
            title="At Techlone" 
            description="Innovation meets mobility with Techlone Global's mobile application designs.
            We architect intuitive interfaces that captivate. Our designs aren't just beautiful; 
            they're crafted to enhance user experience, ensuring your app stands out in the palm of your users' hand."
          />

          <div className="app-services">
            {[AppImg1, AppImg2, AppImg3, AppImg5, AppImg6].map((img, index) => (
              <a href="#!" key={index} onClick={() => openModal(img)} data-aos="fade-up" data-aos-duration="1000">
                <img src={img} alt={`app ${index + 1}`} />
              </a>
            ))}
          </div>

          <Worktogether />
          <Slider slides={slides} />
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
      </div>
    </>
  );
};

export default AppComponent;
