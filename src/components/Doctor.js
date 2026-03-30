import React from 'react';
import doctorImage from '../assets/images/Group 157.png';

const Doctor = () => {
  return (
    <section className="doctor">
      <div className="container">
        <div className="doctor-content">
          <h2 className="doctor-title">MEET DR. DARRYL</h2>
          <h3 className="doctor-subtitle">Who is darryl Engel, dmd?</h3>
          <div className="doctor-info">
            <div className="doctor-image">
              <img src={doctorImage} alt="Dr. Darryl" />
            </div>
            <div className="doctor-text">
              <p>
                Lorem Ipsum is simply dummy text of the printing andtypesetting industry.
              </p>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1950s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Pagemaker including versions of Lorem Ipsum
              </p>
              <button className="read-more-btn">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctor;