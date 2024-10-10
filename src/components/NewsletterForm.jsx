import React from 'react';
import Socials from './Socials';

const NewsletterForm = () => {
  return (
    <>
<p className='text-white'>Subscribe to our newsletter for discounts and much more!</p>

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
