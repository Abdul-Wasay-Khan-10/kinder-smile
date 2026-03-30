import React from 'react';
import mapImage from '../assets/images/Group 159.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          <div className="contact-info">
            <h2>GET IN TOUCH</h2>

            <p>
              Lorem ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem ipsum has been the industry's standard dummy 
              text ever since the 1500s.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span>(650) 689-5355</span>
              </div>
              <div className="contact-item">
                <span>(350) 789-5458</span>
              </div>
              <div className="contact-item">
                <span>kindersmiles78@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="map-section">
            <img 
              src={mapImage} 
              alt="Location Map" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/400x200?text=No+Map';
              }} 
            />
          </div>

        </div>

        <div className="footer-bottom">
          <p>© Copyright 2022 Kinder Smiles</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;