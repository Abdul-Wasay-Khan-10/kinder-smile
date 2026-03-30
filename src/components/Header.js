import React from 'react';
import logo from '../assets/images/kinder Smiles.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="Kinder Smiles" />
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li><a href="#home">HOME</a></li>
              <li><a href="#office">OUR OFFICE</a></li>
              <li><a href="#parents">FOR PARENTS</a></li>
              <li><a href="#services">SERVICES</a></li>
            </ul>
          </nav>
          <button className="contact-btn">CONTACT</button>
        </div>
      </div>
    </header>
  );
};

export default Header;