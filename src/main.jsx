import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Import AOS styles
import 'aos/dist/aos.css'; 

// Import AOS
import AOS from 'aos';

// Initialize AOS
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
