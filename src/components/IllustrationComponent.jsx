import React, { useState, useEffect } from 'react';
import '../css/Illustration.css'; 
import { Helmet } from 'react-helmet';
import illustrationBackground from '../img/illustrationcover.webp';
import GraphicBackground from '../img/graphiccover.webp';
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

// Create an array for illustration images
const illustrationImages = [
  illustrationImg1,
  illustrationImg2,
  illustrationImg3,
  illustrationImg4,
  illustrationImg5,
  illustrationImg6
];

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
      title: 'Graphic Designing',
      image: GraphicBackground,
      link: '/Graphics',
      className: 'webdev',
    },
    {
      title: 'Twitch Services',
      image: twitchBackground,
      link: '/twitch',
      className: 'graphic',
    },
  ];

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <>

      <Helmet>
        <meta property="og:title" content="Techlone Global" />
        <meta property="og:description" content="Transform Your Ideas into Captivating Visual Stories" />
        <meta property="og:image" content="https://portfolio.techloneglobal.com/illustrationcover.webp" />
        <meta property="og:url" content="https://portfolio.techloneglobal.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <LogoAnime />
      <div 
        className="illustrationtitle-img" 
        style={{ backgroundImage: `url(${illustrationBackground})` }}
      >
        <h1 data-aos='fade-up' data-aos-easing="linear" data-aos-duration="1000">Illustrations</h1>
      </div>

      <div className="illustration-container">
        {/* Heading */}
        <Heading 
          title="At Techlone" 
          description="
          Creativity meets strategy. Our designs aren't just visually stunning;
          they're crafted to amplify your brand's essence. We breathe life into ideas,
          translating them into captivating visuals that resonate and leave an indelible mark."
        />
        
        <div className="illustration-services">
          {illustrationImages.map((img, index) => (
            <a href="#!" key={index} onClick={() => openModal(img)}>
              <img 
                data-aos='fade-up' 
                
                data-aos-duration="8000" 
                src={img} 
                alt={`illustration ${index + 1}`} 
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
