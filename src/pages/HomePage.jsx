import React from "react";
import '..//css/HomePage.css'
import Header from '../components/Header.jsx';
import VerticalBanner from '../components/VerticalBanner.jsx';
import Footer from "../components/Footer.jsx";


const HomePage = () => {
  return (  // Add return statement here
    <>
    <div className="HomePage">
      
        <Header />
        
          <VerticalBanner />
         
        </div>
        <Footer/>
    </>
  );
}

export default HomePage;
