import React from 'react';
import heroImage from '../assets/images/caroline-lm--m-4tYmtLlI-unsplash.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={heroImage} alt="Happy children" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPE SETTING INDUSTRY.
        </h1>
        <button className="contact-us-btn">CONTACT US</button>
      </div>
      <div className="hero-footer">
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-text">(650) 689-5355</span>
          </div>
          <div className="contact-item">
            <span className="contact-text">LOCATION</span>
          </div>
          <div className="contact-item">
            <span className="contact-text">REQUEST FOR APPOINTMENT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;