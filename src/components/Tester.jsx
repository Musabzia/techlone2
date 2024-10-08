import React from "react";
import blockImg1 from '../img/blockchain01.webp';


const TestScale = () => {
    return (
      <div className="flex justify-center mt-10">
        <img
          src={blockImg1}
          alt="Test"
          className="w-1/2 rounded-lg transition-transform duration-300 hover:scale-110 cursor-pointer"
        />
      </div>
    );
  };
  
  export default TestScale;
  