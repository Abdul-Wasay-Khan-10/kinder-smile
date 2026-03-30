import React from 'react';
import testimonialImage from '../assets/images/Group 158.png';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-content">
          <h2 className="testimonials-title">TESTIMONIALS</h2>
          <h3 className="testimonials-subtitle">LISTEN TO WHAT PARENTS HAVE TO SAY</h3>
          
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src={testimonialImage} alt="Janet Jackson" />
            </div>
            <div className="testimonial-text">
              <p>
                Lorem ipsum is simply dummy text of the printing andtypesetting industry.
              </p>
              <p>
                Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
              </p>
            </div>
            <h4 className="testimonial-author">JANET JACKSON</h4>
          </div>
          
          <div className="testimonials-controls">
            <button className="video-testimonials-btn">VIDEO TESTIMONIALS</button>
            <div className="testimonials-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <button className="more-btn">MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;