import React, { useState, useEffect } from 'react';
import icon from '../img/favicon.png'
const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky ? 'bg-transparent' : 'bg-transparent'
      }`}
    >
      <div className="container items-center py-4 pl-6  ">
        {/* Logo */}
        <div className="size-14">
          <a href="/">
            <img src= {icon} className='animate-spin'/>
          </a>
        </div>

        
      </div>

     
    </header>
  );
};

export default Header;
