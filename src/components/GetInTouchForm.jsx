import React from 'react';

const GetInTouchForm = () => {
  return (
    <>
 <p className='text-white'>Got a project in mind? Take a minute to fill out our form.</p>

    <form className="mt-4 contact-form">
      <input type="text" placeholder="Your Name" className="input-field" />
      <input type="email" placeholder="Your Email" className="input-field" />
      <textarea placeholder="Your Message" className="input-field" />
      <button type="submit" className="submit-button bg-white">Submit</button>
    </form>

    </>
  );
};

export default GetInTouchForm;
