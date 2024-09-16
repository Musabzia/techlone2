import React from "react";
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import VerticalBanner from '../components/VerticalBanner.jsx';

const HomePage = () => {
  return (  // Add return statement here
    <>
      <div className='container'>
        <Header />
        <div className='content'>
          <VerticalBanner />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
