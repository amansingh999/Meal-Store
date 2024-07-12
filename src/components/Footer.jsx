// src/components/Footer.jsx
import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>Welcome to our meal store where you can find a variety of meals and save your favorites.</p>
        </div>
        <div className="footer-section links">
          <h2>Legals</h2>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: support@mealstore.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Meal Store | Designed by Aman
      </div>
    </footer>
  );
};

export default Footer;
