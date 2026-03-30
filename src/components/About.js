import React from 'react';
import aboutImage from '../assets/images/girl-ga663ec909_1920.png';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img src={aboutImage} alt="Child with paint" />
          </div>
          <div className="about-text">
            <p>
              LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING ANDTYPESETTING INDUSTRY.
            </p>
            <p>
              LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500s, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK. IT HAS SURVIVED NOT ONLY FIVE CENTURIES, BUT ALSO THE LEAP INTO ELECTRONIC TYPESETTING, REMAINING ESSENTIALLY UNCHANGED. IT WAS POPULARISED IN THE 1960S WITH THE RELEASE OF LETRASET SHEETS CONTAINING LOREM IPSUM PASSAGES, AND MORE RECENTLY WITH DESKTOP PUBLISHING SOFTWARE LIKE ALDUS PAGEMAKER INCLUDING VERSIONS OF LOREM IPSUM
            </p>
            <div className="about-buttons">
              <button className="contact-btn-primary">CONTACT US</button>
              <button className="appointment-btn">REQUEST FOR APPOINTMENT</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;