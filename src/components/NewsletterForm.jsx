import React, { useRef, useState } from 'react';
import Socials from './Socials';
import emailjs from 'emailjs-com';

const NewsletterForm = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_561hmq6', 'template_v1fz6r3', form.current, 't7aJzIpajfR9k_5tD')
      .then((result) => {
          console.log(result.text);
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 3000);
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the subscription, please try again.');
      });
  };

  return (
    <>
      {showPopup && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-2 rounded shadow-lg transition duration-300">
          Subscription successful!
        </div>
      )}
      <p className='text-white'>Subscribe to our newsletter for discounts and much more!</p>

      <form ref={form} onSubmit={sendEmail} className="mt-4 newsletter-form">
        <input type="email" name="user_email" placeholder="Your Email" className="input-field" required />
        <button type="submit" className="submit-button px-4 py-2 bg-white">Subscribe</button>
      </form>
      <div className='socials-container'>
        <Socials />
      </div>
    </>
  );
};

export default NewsletterForm;
