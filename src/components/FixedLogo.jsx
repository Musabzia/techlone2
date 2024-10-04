import React from 'react';
import '../css/FixedLogo.css'; // Ensure this path is correct
import Logo from '../img/favicon.webp';

const FixedLogo = () => {
    return (
        
            <img src={Logo} alt="Techlone Global" className="fixed-logo" />
        
    );
};

export default FixedLogo;
