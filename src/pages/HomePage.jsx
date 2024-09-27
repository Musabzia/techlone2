import React from "react";
import '..//css/HomePage.css'
import Header from '../components/Header.jsx';
import VerticalBanner from '../components/VerticalBanner.jsx';
import Footer from "../components/Footer.jsx";
import VerticalCarousel from "../components/VerticalCarousel.jsx";


const HomePage = () => {
  return (  // Add return statement here
    <>
    <div className="HomePage">
      
      
        
          <VerticalBanner/>
         
        </div>
        <Footer/>
    </>
  );
}

export default HomePage;
