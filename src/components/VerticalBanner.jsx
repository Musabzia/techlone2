import React from 'react';
import { Link } from 'react-router-dom';
import GetInTouchForm from './GetInTouchForm.jsx';
import NewsletterForm from './NewsletterForm.jsx';
import '../css/VerticalBanner.css';
import pic1 from '../img/blue.jpg';
import pic2 from '../img/bitcoin.png';
import pic3 from '../img/appcover.png';
import pic4 from '../img/web-cover.png';
import pic5 from '../img/twitchcover.png';
import pic6 from '../img/graphiccover.png';
import pic7 from '../img/illustrationcover.png';

const VerticalBanner = () => {
  const banners = [
    {
      id: 1,
      imageUrl: pic1,
      title: 'Welcome To,',
      description: "Techlone Global's Portfolio",
      link: '/', // Link to the home page
    },
    {
      id: 2,
      imageUrl: pic2,
      title: 'Blockchain Development',
      description: 'A place for your new NFTs collection',
      link: '/blockchain', // Link to the Blockchain page
    },
    {
      id: 3,
      imageUrl: pic3,
      title: 'Application Development',
      description: 'A modern mobile app of your idea',
      link: '/application', // Link to the Application page
    },
    {
      id: 4,
      imageUrl: pic4,
      title: 'Website Development',
      description: 'A responsive website for your business',
      link: '/website', // Link to the Website page
    },
    {
      id: 5,
      imageUrl: pic5,
      title: 'Twitch Services',
      description: 'Pump up your streaming experience',
      link: '/twitch', // Link to the Twitch page
    },
    {
      id: 6,
      imageUrl: pic6,
      title: 'Graphic Designing',
      description: 'Get ready for some stunning designs',
      link: '/graphics', // Link to the Graphics page
    },
    {
      id: 7,
      imageUrl: pic7,
      title: 'Illustrations',
      description: 'Bring your ideas to life',
      link: '/illustrations', // Link to the Illustrations page
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

  return (
    <div className="vertical-banner">
      {banners.map((banner) => (
        <section
          key={banner.id}
          className="banner-section"
          style={{
            backgroundImage: banner.imageUrl ? `url(${banner.imageUrl})` : 'none',
            backgroundColor: banner.backgroundColor || 'transparent',
          }}
        >
          {banner.imageUrl ? (
            <Link to={banner.link} className="banner-link">
              <div className="banner-content">
                <h1 className="text-5xl text-white font-bold">{banner.title}</h1>
                <p className="text-4xl text-white mt-4">{banner.description}</p>
              </div>
            </Link>
          ) : (
            <div className="banner-content">
              <h1 className="text-5xl text-white font-bold">{banner.title}</h1>
              <p className="text-4xl text-white mt-4">{banner.description}</p>
              {banner.isBlankBanner && banner.id === 8 && <GetInTouchForm />}
              {banner.isBlankBanner && banner.id === 9 && <NewsletterForm />}
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default VerticalBanner;
