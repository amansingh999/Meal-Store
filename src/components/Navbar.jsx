// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">Meal Store</div>
      <div className="hamburger" onClick={toggleNavbar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={closeNavbar}>Home</Link></li>
        <li><Link to="/menu" onClick={closeNavbar}>Menu</Link></li>
        <li><Link to="/favorites" onClick={closeNavbar}>Favourites</Link></li>
        <li><Link to="/meal-generator" onClick={closeNavbar}>Meal Generator</Link></li>
        <li><Link to="/about" onClick={closeNavbar}>About Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
