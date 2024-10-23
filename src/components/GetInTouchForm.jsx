import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const GetInTouchForm = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_561hmq6', 'template_w4g3mwa', form.current, 't7aJzIpajfR9k_5tD')
      .then((result) => {
        console.log(result.text);
        setShowPopup(true);
        setLoading(false);
        setTimeout(() => setShowPopup(false), 3000);
        form.current.reset(); 
      }, (error) => {
        console.log(error.text);
        setLoading(false);
        alert('Failed to send the message, please try again.');
      });
  };

  return (
    <>
      {showPopup && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-md z-50">
          Message sent successfully!
        </div>
      )}

      <p className='text-white'>Got a project in mind? Take a minute to fill out our form.</p>

      <form ref={form} onSubmit={sendEmail} className="mt-4 contact-form">
        <input type="text" name="name" placeholder="Your Name" className="input-field border px-3 py-2 mb-2 w-full" required />
        <input type="email" name="email" placeholder="Your Email" className="input-field border px-3 py-2 mb-2 w-full" required />
        <textarea name="message" placeholder="Your Message" className="input-field border px-3 py-2 mb-2 w-full" required />
        <button type="submit" className={`submit-button bg-white px-4 py-2 ${loading ? 'cursor-not-allowed opacity-50' : ''}`} disabled={loading}>
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </>
  );
};

export default GetInTouchForm;
