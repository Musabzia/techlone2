import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import GetInTouchForm from './GetInTouchForm.jsx';
import NewsletterForm from './NewsletterForm.jsx';
import '../css/VerticalBanner.css';
import pic1 from '../img/blue.webp';
import pic2 from '../img/bitcoin.webp';
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
    link: '/',
  },
  {
    id: 2,
    imageUrl: pic2,
    title: 'Blockchain Development',
    description: 'A place for your new NFTs collection',
    link: '/blockchain',
  },
  {
    id: 3,
    imageUrl: pic3,
    title: 'Application Development',
    description: 'A modern mobile app of your idea',
    link: '/application',
  },
  {
    id: 4,
    imageUrl: pic4,
    title: 'Website Development',
    description: 'A responsive website for your business',
    link: '/website',
  },
  {
    id: 5,
    imageUrl: pic5,
    title: 'Twitch Services',
    description: 'Pump up your streaming experience',
    link: '/twitch',
  },
  {
    id: 6,
    imageUrl: pic6,
    title: 'Graphic Designing',
    description: 'Get ready for some stunning designs',
    link: '/graphics',
  },
  {
    id: 7,
    imageUrl: pic7,
    title: 'Illustrations',
    description: 'Bring your ideas to life',
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

    return () => {
      parent.removeEventListener('wheel', handleWheel); // Cleanup
    };
  }, []);

  return (
    <div className="vertical-banner" ref={bannerRef} style={{ height: '100vh', overflowY: 'scroll', scrollSnapType: 'y mandatory' }}>
      {banners.map((banner) => (
        <section
        key={banner.id}
        className="banner-section snap-start"
        style={{
          backgroundImage: banner.imageUrl ? `url(${banner.imageUrl})` : 'none',
          backgroundColor: banner.backgroundColor || 'transparent',
          height: '100vh', // Full viewport height
        }}
      >
        <div className="banner-content bg-black bg-opacity-50 p-6 rounded-md"> {/* Added classes for background */}
          {banner.imageUrl ? (
            <Link to={banner.link} className="banner-link">
              <h1 className="text-5xl text-white font-bold">{banner.title}</h1>
              <p className="text-4xl text-white mt-4">{banner.description}</p>
            </Link>
          ) : (
            <>
              <h1 className="text-5xl text-white font-bold">{banner.title}</h1>
              <p className="text-4xl text-white mt-4">{banner.description}</p>
              {banner.id === 8 && <GetInTouchForm />}
              {banner.id === 9 && <NewsletterForm />}
            </>
          )}
        </div>
      </section>
      ))}
    </div>
  );
};

export default VerticalBanner;
