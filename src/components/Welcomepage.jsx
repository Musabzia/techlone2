import React, { useEffect, useState } from "react";
import '../css/Welcomepage.css';

const WelcomePage = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger the animation after the component mounts
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 100); // Delay to allow the initial render

        return () => clearTimeout(timer); // Cleanup
    }, []);

    return (
        <div className="back-container">
           <a href="/">
           <h2 className="stroke-text">Welcome</h2>
           </a> 
            <p className={`typed-out ${animate ? 'animate' : ''}`}>
            To <span><a href="https://techloneglobal.com/" target="_blank">Techlone Global</a></span>'s Portfolio
            </p>
        </div>
    );
};

export default WelcomePage;
