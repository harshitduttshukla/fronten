import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-2">
          <Link to="/about" className="hover:text-yellow-500">About</Link>
          <Link to="/help" className="hover:text-yellow-500">Help</Link>
          <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
        </div>
        <div className="flex space-x-4 mb-2">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">LinkedIn</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">Facebook</a>
        </div>
        <p className="text-center text-sm">
          © 2023 Gramarth. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
