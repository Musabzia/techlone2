import React from 'react';
import Socials from './Socials';

const NewsletterForm = () => {
  return (
    <>
    <form className="mt-4 newsletter-form">
      <input type="email" placeholder="Your Email" className="input-field" />
      <button type="submit" className="submit-button bg-white">Subscribe</button>
    </form>
    <div className='socials-container'>
      <Socials/>
    </div>
    </>
  );
};

export default NewsletterForm;
