import React from 'react';
import '../css/LogoAnime.css';

import Logo from '../img/iconlogo.webp';

const LogoAnime = () => {
    return (
        <a href='/'>
            <img src={Logo} alt="Techlone Global" className="rotating-logo" />
        </a>
        
    )
    
};

export default LogoAnime;
