import './App.css';


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import Twitch from './pages/Twitch';
import Website from './pages/Website';
import Application from './pages/Application';
import Graphics from './pages/Graphics';
import Blockchain from './pages/Blockchain';
import Illustrations from './pages/Illustrations';
import MarketingPage from './pages/Marketing';


import 'aos/dist/aos.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/twitch" element={<Twitch />} />
          <Route path="/website" element={<Website />} />
          <Route path="/application" element={<Application />} />
          <Route path="/graphics" element={<Graphics />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/illustrations" element={<Illustrations />} />
          <Route path="/marketing" element={<MarketingPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
