import React from 'react';
import '../css/LogoAnime.css';

import Logo from '../img/favicon.webp';

const LogoAnime = () => {
    return (
        <>
        <div className='logo-container'>
        
        <a href='/'>
            <img src={Logo} alt="Techlone Global" className="rotating-logo" />
        </a>
        </div>
        </>
    )
    
};

export default LogoAnime;
