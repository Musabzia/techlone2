import React from 'react';
import logo from '../img/tech.webp';
import '../css/FooterComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
const FooterComponent = () => {
  return (
    <footer>
      <div className="about">
        <h4>- About</h4>
        <br />
        <p>Welcome to Techlone Global, where innovation meets excellence in the realm of software solutions.</p>
      </div>

      <div className="logo">
        <a href='/'>
        <img src={logo} alt="Techlone Global Logo" />
        </a>
      </div>

      <div className="socialapp">
        <div className="s-logo">
          <a href="https://www.facebook.com/techlonglobal/"><i className="fab fa-facebook"></i></a>
          <a href="https://twitter.com/Techlone_Global"><i className="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/company/techlone-global/"><i className="fab fa-linkedin"></i></a>
        </div>
        <br />

        <div className="icons">
        
        <a href="https://www.facebook.com/techlonglobal" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>

        <a href="https://x.com/Techlone_Global" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>

        <a href="https://www.linkedin.com/company/techlone-global/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>

      </div>
        <p>Copyright 2024 / All rights reserved <br/> Designed by<b><a style={{fontSize:"1.2em"}}  href='https://techloneglobal.com/' target="_blank">Techlone</a></b></p>
      </div>
    </footer>
  );
};

export default FooterComponent;
