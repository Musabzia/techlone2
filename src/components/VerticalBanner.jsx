import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import GetInTouchForm from './GetInTouchForm.jsx';
import NewsletterForm from './NewsletterForm.jsx';
import '../css/VerticalBanner.css';
import FixedLogo from '../components/FixedLogo.jsx';

import pic1 from '../img/Blue.webp';
import pic2 from '../img/blockchaincover.webp';
import pic3 from '../img/appcover.webp';
import pic4 from '../img/web-cover.webp';
import pic5 from '../img/twitchcover.webp';
import pic6 from '../img/graphiccover.webp';
import pic7 from '../img/illustrationcover.webp';

const banners = [
  {
    id: 1,
    imageUrl: pic1,
    title: 'Welcome To,',
    description: "Techlone Global's Portfolio",
    description2: 'Explore the Future of Innovation',
    link: '/',
  },
  {
    id: 2,
    imageUrl: pic2,
    title: 'Blockchain Development',
    description: 'Forge Your Digital Legacy with Stunning NFT Creations!',
    link: '/blockchain',
  },
  {
    id: 3,
    imageUrl: pic3,
    title: 'Application Development',
    description: 'Transform Your Vision into a Cutting-Edge Mobile Experience!',
    link: '/application',
  },
  {
    id: 4,
    imageUrl: pic4,
    title: 'Website Development',
    description: 'Elevate Your Business with a Stunning, Responsive Website!',
    link: '/website',
  },
  {
    id: 5,
    imageUrl: pic5,
    title: 'Twitch Services',
    description: 'Supercharge Your Stream with Our Expert Twitch Services!',
    link: '/twitch',
  },
  {
    id: 6,
    imageUrl: pic6,
    title: 'Graphic Designing',
    description: 'Unleash Your Brand’s Potential with Eye-Catching Designs!',
    link: '/graphics',
  },
  {
    id: 7,
    imageUrl: pic7,
    title: 'Illustrations',
    description: 'Transform Your Ideas into Captivating Visual Stories!',
    link: '/illustrations',
  },
  {
    id: 8,
    backgroundColor: '#000',
    title: 'Get in Touch',
    description: 'Fill out the form below to contact us',
    isBlankBanner: true,
  },
  {
    id: 9,
    backgroundColor: '#000',
    title: 'Newsletter',
    description: 'Subscribe to our newsletter',
    isBlankBanner: true,
  },
];

const VerticalBanner = () => {
  const bannerRef = useRef(null);
  const [visibleBanners, setVisibleBanners] = useState(Array(banners.length).fill(false));

  useEffect(() => {
    const parent = bannerRef.current;
    const scrollYPerView = window.innerHeight;

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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute('data-index'));
        if (entry.isIntersecting) {
          setVisibleBanners((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }
      });
    }, { threshold: 0.5 });

    const textElements = document.querySelectorAll('.typed-out-container');
    textElements.forEach((el, index) => {
      el.setAttribute('data-index', index); // Set data attribute for indexing
      observer.observe(el);
    });

    return () => {
      parent.removeEventListener('wheel', handleWheel);
      observer.disconnect(); // Cleanup observer
    };
  }, []);

  return (
    <div className="vertical-banner" ref={bannerRef}>
      {banners.map((banner, index) => (
        <section
          key={banner.id}
          className="banner-section snap-start"
          style={{
            backgroundImage: banner.imageUrl ? `url(${banner.imageUrl})` : 'none',
            backgroundColor: banner.backgroundColor || 'transparent',
            height: '100vh',
          }}
        >
         

          <div className="banner-content bg-opacity-50 p-6 text-center rounded-md">
            <div className="text-container z-10">
              {banner.imageUrl ? (
                <Link to={banner.link} className="banner-link z-10">
                  <h1 className="text-6xl text-shadow text-white font-bold">{banner.title}</h1>

                  <div className="typed-out-container">
                    <p className={`text-4xl text-shadow text-white mt-4 typed-out ${visibleBanners[index] ? 'animate' : ''}`}>
                      {banner.description}
                    </p>
                  </div>

                </Link>
              ) : (
                <>
                  <div className='z-10'>
                    <h1 className="text-5xl  text-white font-bold text-center">{banner.title}</h1>
                    
                      <p className={`text-4xl text-white mt-4  ${visibleBanners[index] ? 'animate' : ''}`}>
                        {banner.description}
                      </p>
                    
                    {banner.id === 8 && <GetInTouchForm />}
                    {banner.id === 9 && <NewsletterForm />}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default VerticalBanner;
