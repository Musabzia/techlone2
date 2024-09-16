import React from 'react';
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
    },
    {
      id: 2,
      imageUrl: pic2,
      title: 'Blockchain Development',
      description: 'A place for your new NFTs collection',
    },
    {
      id: 3,
      imageUrl: pic3,
      title: 'Application Development',
      description: 'A modern mobile app of your idea',
    },
    {
      id: 4,
      imageUrl: pic4,
      title: 'Website Development',
      description: 'A responsive website for your business',
    },
    {
      id: 5,
      imageUrl: pic5,
      title: 'Twitch Services',
      description: 'Pump up your streaming experience',
    },
    {
      id: 6,
      imageUrl: pic6,
      title: 'Graphic Designing',
      description: 'Get ready for some stunning designs',
    },
    {
      id: 7,
      imageUrl: pic7,
      title: 'Illustrations',
      description: 'Bring your ideas to life',
    },
    {
      id: 8,
      backgroundColor: '#000', // Light grey background for the blank banner
      title: 'Get in Touch',
      description: 'Fill out the form below to contact us',
      isBlankBanner: true, // Custom property to identify the blank banner
    },
    {
      id: 9,
      backgroundColor: '#f0f0f0', // Light grey background for the blank banner
      title: 'Get in Touch',
      description: 'Newsletter',
      isBlankBanner: true, // Custom property to identify the blank banner
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
          <div className="banner-content">
            <h1 className="text-5xl text-white font-bold">{banner.title}</h1>
            <p className="text-4xl text-white mt-4">{banner.description}</p>
            {banner.isBlankBanner && (
  <>
    {banner.id === 8 ? (
      <form className="mt-4 contact-form">
        <input type="text" placeholder="Your Name" className="input-field" />
        <input type="email" placeholder="Your Email" className="input-field" />
        <textarea placeholder="Your Message" className="input-field" />
        <button type="submit" className="submit-button bg-white">Submit</button>
      </form>
    ) : (
      <form className="mt-4 newsletter-form">
        <input type="email" placeholder="Your Email" className="input-field" />
        <button type="submit" className="submit-button bg-white">Subscribe</button>
      </form>
    )}
  
  </>
)}

          </div>
        </section>
      ))}
    </div>
  );
};

export default VerticalBanner;
