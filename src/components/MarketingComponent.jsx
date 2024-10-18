import React, { useState } from 'react';
import SocialBackground from '../img/SocialMediaCover.png';

import illustrationBackground from '../img/illustrationcover.webp';
import webcover from '../img/web-cover.webp';

import HODBanner from '../img/HOD Banner.png';
import HODBanner2 from '../img/HOD Banner 2.png';
import HOD1 from '../img/HOD1.png';
import HOD2 from '../img/HOD2.png';
import HOD3 from '../img/HOD3.png';
import HOD4 from '../img/HOD4.png';
import BlinderBanner from '../img/BlinderBanner.png';
import Blinder1 from '../img/Blinder1.png';
import Blinder2 from '../img/Blinder2.png';
import Blinder3 from '../img/Blinder3.png';
import Blinder4 from '../img/Blinder4.png';
import BurgerBanner from '../img/BurgerBanner.png';
import Burger1 from '../img/burger1.png';
import Burger2 from '../img/burger2.png';
import Burger3 from '../img/burger3.png';
import Burger4 from '../img/burger4.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

import LogoAnime from './LogoAnime';
import Heading from '../components/Heading';
import Worktogether from './Worktogether';
import Slider from './WebCompSlider';
import Footer from './FooterComponent';

// Initialize AOS
AOS.init();

const slides = [
    {
      title: 'Illustrations',
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
    { src: HODBanner2, alt: "House of Dumplings" },
    { src: HODBanner, alt: "House of Dumplings" },
    { src: HOD1, alt:"House of Dumplings" },
    { src: HOD2, alt:"House of Dumplings" },
    { src: HOD3, alt:"House of Dumplings" },
    { src: HOD4, alt:"House of Dumplings" },
    { src: BlinderBanner, alt: "Buy Home Blinds"},
    { src: Blinder1, alt: "Buy Home Blinds"},
    { src: Blinder2, alt: "Buy Home Blinds"},
    { src: Blinder3, alt: "Buy Home Blinds"},
    { src: Blinder4, alt: "Buy Home Blinds"},
    { src: BurgerBanner, alt: "Burgers"},
    { src: Burger1, alt: "Burgers"},
    { src: Burger2, alt: "Burgers"},
    { src: Burger3, alt: "Burgers"},
    { src: Burger4, alt: "Burgers"},
];

const MarketingComponent = () => {
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

    return (
        <>
            <LogoAnime />
            <div
                className="relative flex items-center justify-center h-screen bg-center text-white"
                style={{ backgroundImage: `url(${SocialBackground})` }}
            >
                <h1 
                    data-aos='fade-up' 
                    data-aos-easing="linear" 
                    data-aos-duration="1000" 
                    className="font-semibold text-5xl md:text-8xl text-center text-shadow leading-snug"
                >
                    Social Media Marketing
                </h1>
            </div>

            

            <div className="py-24 bg-black text-white flex flex-col items-center">
            <Heading 
                title="At Techlone" 
                description="
                    Our social media marketing services help boost your brand’s online presence 
                    by creating targeted campaigns on platforms like Facebook, Instagram, and LinkedIn.
                    We manage everything from content creation to audience engagement, using
                    data-driven insights to increase brand awareness, drive traffic, and foster
                    meaningful connections with your audience."
            />

                <div className="flex mb-4 justify-center">
                    <img
                        src={images[1].src}
                        alt={images[1].alt}
                        data-aos="fade-up" 
                        data-aos-duration="1000"
                        onClick={() => openModal(images[1].src)}
                        className="w-5/6 h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                    />
                </div>

                <div className="grid grid-cols-2  gap-4 flex  justify-items-center px-4 sm:px-8 md:px-12 lg:px-36">
            {images.slice(2,6).map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  data-aos="fade-up" data-aos-duration="800"
                  onClick={() => openModal(image.src)}
                  className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex py-4 mb-4 justify-center">
                    <img
                        src={images[0].src}
                        alt={images[0].alt}
                        data-aos="fade-up" 
                        data-aos-duration="1000"
                        onClick={() => openModal(images[0].src)}
                        className="w-5/6 h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                    />
                </div>

          <div className=" py-4 flex mb-4 justify-center">
                    <img
                        src={images[6].src}
                        alt={images[6].alt}
                        data-aos="fade-up" 
                        data-aos-duration="1000"
                        onClick={() => openModal(images[6].src)}
                        className="w-5/6 h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                    />
                </div>

            <div className="grid grid-cols-2  gap-4 flex  justify-items-center px-4 sm:px-8 md:px-12 lg:px-36">
            {images.slice(7,11).map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  data-aos="fade-up" data-aos-duration="800"
                  onClick={() => openModal(image.src)}
                  className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer object-cover"
                />
              </div>
            ))}
          </div>

          <div className=" py-4 flex mb-4 justify-center">
                    <img
                        src={images[11].src}
                        alt={images[11].alt}
                        data-aos="fade-up" 
                        data-aos-duration="1000"
                        onClick={() => openModal(images[11].src)}
                        className="w-5/6 h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                    />
                </div>

                <div className="grid grid-cols-2  gap-4 flex  justify-items-center px-4 sm:px-8 md:px-12 lg:px-36">
            {images.slice(12,16).map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  data-aos="fade-up" data-aos-duration="800"
                  onClick={() => openModal(image.src)}
                  className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer object-cover"
                />
              </div>
            ))}
          </div>

          <Worktogether />
          <Slider slides={slides} />
          <Footer />


                {/* Modal */}
                {modalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="relative">
                            <img src={modalImage} alt="Modal" className="max-w-[90vw] max-h-[90vh] h-auto cursor-auto object-contain" />
                            <button 
                                onClick={closeModal} 
                                className="absolute top-4 right-4 text-white text-3xl"
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default MarketingComponent;
