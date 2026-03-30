import React from 'react';
import scheduleIcon from '../assets/images/Group 114.png';
import separateIcon from '../assets/images/Group 113.png';
import testimonialsIcon from '../assets/images/Group 116.png';

const FeatureCards = () => {
  return (
    <section className="feature-cards">
      <div className="container">
        <div className="cards-grid">
          <div className="feature-card">
            <div className="card-icon">
              <img src={scheduleIcon} alt="Schedule" onError={e => {e.target.onerror=null; e.target.src='https://via.placeholder.com/60?text=No+Image';}} />
            </div>
            <h3>SCHEDULE<br />WITH US TODAY</h3>
          </div>
          <div className="feature-card">
            <div className="card-icon">
              <img src={separateIcon} alt="What sets us apart" onError={e => {e.target.onerror=null; e.target.src='https://via.placeholder.com/60?text=No+Image';}} />
            </div>
            <h3>WHAT SETS US<br />APART</h3>
          </div>
          <div className="feature-card">
            <div className="card-icon">
              <img src={testimonialsIcon} alt="Testimonials" onError={e => {e.target.onerror=null; e.target.src='https://via.placeholder.com/60?text=No+Image';}} />
            </div>
            <h3>TESTIMONIALS</h3>
          </div>
        </div>
        <div className="welcome-section">
          <h2>WELCOME TO KINDER SMILES! COMPREHENSIVE PEDIATRIC DENTISTRY IN ORADELL, NJ</h2>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;