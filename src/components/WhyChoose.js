import React from 'react';
import whyChooseImage from '../assets/images/Group 124.png';

const WhyChoose = () => {
  return (
    <section className="why-choose">
      <div className="container">
        <div className="why-choose-content">
          <div className="why-choose-text">
            <h2>WHY CHOOSE KINDER SMILES</h2>
            <div className="subtitle">
              <h3>PEDIATRIC DENTIST - BERGEN COUNTRY'S<br />TOP RATED DENTIST FOR KIDS</h3>
            </div>
            <p>
              LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING ANDTYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500, UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK. IT HAS SURVIVED NOT ONLY FIVE CENTURIES, BUT ALSO THE LEAP INTO ELECTRONIC TYPESETTING, REMAINING ESSENTIALLY UNCHANGED. IT WAS POPULARISED IN THE 1980S WITH THE RELEASE OF LETRASET SHEETS CONTAINING LOREM IPSUM PASSAGES, AND MORE RECENTLY WITH DESKTOP PUBLISHING SOFTWARE LIKE ALDUS PAGEMAKER INCLUDING VERSIONS OF LOREM IPSUM
            </p>
            <div className="why-choose-buttons">
              <button className="contact-btn-primary">CONTACT US</button>
              <button className="appointment-btn">REQUEST FOR APPOINTMENT</button>
            </div>
          </div>
          <div className="why-choose-image">
            <img src={whyChooseImage} alt="Dental professional" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;