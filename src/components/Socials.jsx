import React from 'react';
import { FaFacebookF,FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6"; // Import social media icons

const Socials = () => {
  return (
    <div className="social-icons">
      <a href="https://www.facebook.com/techlonglobal" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://x.com/Techlone_Global" target="_blank" rel="noopener noreferrer">
        <FaXTwitter />
      </a>
      <a href="https://www.linkedin.com/company/techlone-global/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
      <a href="https://www.instagram.com/techloneglobal_/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
  );
};

export default Socials;
