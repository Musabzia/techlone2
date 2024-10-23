import React from 'react'; // Corrected the React import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../css/Worktogether.css';

const Worktogether = () => {
  return (
    
    <div className="oval">
      

      <a className="worktogether" target='_blank' href="https://techloneglobal.com/contact/">
        <h1>Let's work together</h1>
      </a>

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
    </div>
  );
};


export default Worktogether;