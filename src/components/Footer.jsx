import React from 'react';
import '../css/footer.css';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">&copy; 2024 Techlone. All rights reserved.</p>
      </div>
      <div className="container mx-auto">
         
          <div className="flex justify-center mt-4 space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.797.143v3.242l-1.918.001c-1.504 0-1.794.714-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.175-.896-.957-2.173-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.92 0 .386.045.762.127 1.124-4.087-.205-7.713-2.164-10.141-5.144-.423.724-.666 1.562-.666 2.457 0 1.696.863 3.192 2.175 4.07-.803-.026-1.56-.247-2.22-.616v.061c0 2.37 1.688 4.348 3.93 4.796-.411.111-.846.171-1.294.171-.315 0-.623-.031-.923-.087.623 1.946 2.432 3.362 4.575 3.402-1.675 1.312-3.787 2.096-6.08 2.096-.394 0-.779-.023-1.16-.068 2.166 1.389 4.738 2.198 7.507 2.198 9.007 0 13.926-7.466 13.926-13.933 0-.213-.005-.425-.014-.637.96-.694 1.796-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24H22.23C23.208 24 24 23.225 24 22.271V1.729C24 .774 23.208 0 22.23 0zM7.063 20.452H3.575V9h3.488v11.452zM5.318 7.65a2.034 2.034 0 01-2.035-2.035c0-1.123.913-2.035 2.035-2.035s2.035.912 2.035 2.035a2.034 2.034 0 01-2.035 2.035zM20.452 20.452h-3.488V14.92c0-1.315-.026-3.012-1.835-3.012-1.836 0-2.116 1.433-2.116 2.914v5.63h-3.487V9h3.351v1.561h.048c.466-.884 1.606-1.813 3.309-1.813 3.538 0 4.187 2.33 4.187 5.354v6.35z" />
              </svg>
            </a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
