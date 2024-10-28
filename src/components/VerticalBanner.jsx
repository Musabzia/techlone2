import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import GetInTouchForm from './GetInTouchForm.jsx';
import NewsletterForm from './NewsletterForm.jsx';
import '../css/VerticalBanner.css';
import pic1 from '../img/Blue.webp';
import pic2 from '../img/blockchaincover.webp';
import pic3 from '../img/appcover.webp';
import pic4 from '../img/web-cover.webp';
import pic5 from '../img/twitchcover.webp';
import pic6 from '../img/graphiccover.webp';
import pic7 from '../img/illustrationcover.webp';
import pic8 from '../img/SocialMediaCover.webp';
import WelcomePage from '../components/Welcomepage.jsx';

const banners = [
  { id: 1, imageUrl: pic1, title: 'Welcome!', description: "To Techlone Global's Portfolio", link: '/' },
  { id: 2, imageUrl: pic6, title: 'Graphic Designing', description: 'Unleash Your Brands Potential with Eye-Catching Designs', link: '/graphics' },
  { id: 3, imageUrl: pic8, title: 'Social Media Marketing', description: 'Boost your brand with targeted social media campaigns.', link: '/marketing' },
  { id: 4, imageUrl: pic4, title: 'Website Development', description: 'Elevate Your Business with a Stunning, Responsive Website', link: '/website' },
  { id: 5, imageUrl: pic5, title: 'Twitch Services', description: 'Supercharge Your Stream with Our Expert Twitch Services', link: '/twitch' },
  { id: 6, imageUrl: pic2, title: 'Blockchain Development', description: 'Revolutionize your creativity with our blockchain services', link: '/blockchain' },
  { id: 7, imageUrl: pic3, title: 'Application Development', description: 'Transform Your Vision into a Cutting-Edge Mobile Experience', link: '/application' },
  { id: 8, imageUrl: pic7, title: 'Illustrations', description: 'Transform Your Genius Ideas into Captivating Visual Stories', link: '/illustrations' },
  { id: 9, backgroundColor: '#000', title: 'Get in Touch', description: '', isBlankBanner: true },
  { id: 10, backgroundColor: '#000', title: 'Newsletter', description: '', isBlankBanner: true },
];

const VerticalBanner = () => {
  const bannerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const parent = bannerRef.current;
    const scrollYPerView = window.innerHeight;

    const handleScroll = () => {
      const scrollTop = parent.scrollTop;
      const currentIndex = Math.round(scrollTop / scrollYPerView);
      setActiveIndex(currentIndex);
    };

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
      parent.scroll({ top: Math.max(currentScrollY - scrollYPerView, 0), left: 0, behavior: 'smooth' });
    };

    const scrollDown = () => {
      let currentScrollY = parent.scrollTop;
      const maxScroll = (banners.length - 1) * scrollYPerView;
      parent.scroll({ top: Math.min(currentScrollY + scrollYPerView, maxScroll), left: 0, behavior: 'smooth' });
    };

    parent.addEventListener('wheel', handleWheel);
    parent.addEventListener('scroll', handleScroll);

    return () => {
      parent.removeEventListener('wheel', handleWheel);
      parent.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <div className="vertical-banner-wrapper">
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
            <div className="banner-content bg-opacity-50 p-6 text-center rounded-md md:text-left">
              {banner.id === 1 ? (
                <WelcomePage />
              ) : banner.id === 9 || banner.id === 10 ? (
                <div className="form-container">
                  <h1 className="text-6xl text-shadow text-white font-bold">{banner.title}</h1>
                  {banner.id === 9 && <GetInTouchForm />}
                  {banner.id === 10 && <NewsletterForm />}
                </div>
              ) : (
                <Link to={banner.link} className="banner-link">
                  <h1 className="text-6xl text-shadow text-white font-bold">{banner.title}</h1>
                  <div className="typed-out-container">
                    <p className={`text-4xl text-shadow text-white mt-4 write-out ${activeIndex === index ? 'animate' : ''}`}>
                      {banner.description}
                    </p>
                  </div>
                </Link>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Vertical Dots Navigation */}
      <div className="vertical-dots">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => {
              bannerRef.current.scrollTo({
                top: index * window.innerHeight,
                behavior: 'smooth',
              });
            }}
          />
        ))}
      </div>
    </div>
    
  );
};

export default VerticalBanner;
