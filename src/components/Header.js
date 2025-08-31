import React, { useState } from 'react';

import BrandLogo from '../assets/Brandlogo.png';
import './Header.css';

const Header = ({cartCount}) => {
  //console.log("Cart Count in Header:", cartCount);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      
      <div className="mobile-menu-toggle">
        <button 
          className={`hamburger-btn ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          
          {isMobileMenuOpen ? (
            <span className="close-icon">✕</span> // Close icon
          ) : (
            <>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </>
          )}
        </button>
      </div>

      
      <div className="header-left desktop-only">
        <button className="manuka-guide-btn">WHICH MANUKA IS FOR ME?</button>
      </div>

      <nav className="desktop-nav desktop-only">
        <a href="#shop">Shop</a>
        <a href="#explore">Explore</a>
      </nav>

      
      <div className="header-center">
        <div className="brand-logo">
          <img src={BrandLogo} alt="Brand Logo" className="logo-image" />
        </div>
      </div>

      
      <nav className="desktop-nav desktop-only">
        <a href="#about">About</a>
        <a href="#rewards">Rewards</a>
        <a href="#contact">Contact</a>
      </nav>

      
      <div className="header-right">
        <button className="cart-btn"><span class="icon">
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.1149 13.5948C15.4964 13.5948 18.2377 10.8477 18.2377 7.45914C18.2377 4.07052 15.4964 1.32349 12.1149 1.32349C8.73329 1.32349 5.99197 4.07052 5.99197 7.45914C5.99197 10.8477 8.73329 13.5948 12.1149 13.5948ZM12.1149 13.5948C7.08535 13.5948 3.00342 17.6852 3.00342 22.7252M12.1149 13.5948C17.1444 13.5948 21.2264 17.6852 21.2264 22.7252" stroke="#313131" stroke-width="2.01391" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</span>
</button>
        <button className="cart-btn" aria-label="Search">
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.0965 23.2365L16.3076 16.4506C19.7739 12.9859 19.7739 7.37721 16.3076 3.92204C12.8509 0.457302 7.23984 0.457302 3.78316 3.92204C0.316908 7.37721 0.316908 12.9859 3.78316 16.4506C6.48339 19.1496 10.4859 19.7431 13.7606 18.2309"
      stroke="#313131"
      strokeWidth="2.01391"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>
<button className="cart-btn" aria-label="Cart">
  <svg
    width="22"
    height="24"
    viewBox="0 0 22 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.9094 6.36349H20.5432V22.5374H1.22693V6.36349H12.1815M5.87117 6.36349C5.87117 3.5774 8.1204 1.32349 10.8903 1.32349C13.6602 1.32349 15.9094 3.5774 15.9094 6.35305"
      stroke="#313131"
      strokeWidth="2.01391"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  <span className="cart-badge">{cartCount}</span>
</button>


        {/* <button className="cart-btn">
          <i className="fas fa-shopping-bag"></i>
          <span className="cart-badge">{cartCount}</span>
        </button> */}
      </div>

      
      {isMobileMenuOpen && (
        <div className="mobile-nav-overlay">
          <div className="mobile-nav">
            <a href="#shop" onClick={toggleMobileMenu}>Shop</a>
            <a href="#explore" onClick={toggleMobileMenu}>Explore</a>
            <a href="#about" onClick={toggleMobileMenu}>About</a>
            <a href="#rewards" onClick={toggleMobileMenu}>Rewards</a>
            <a href="#contact" onClick={toggleMobileMenu}>Contact</a>
            <button className="mobile-manuka-btn">WHICH MANUKA IS FOR ME?</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
