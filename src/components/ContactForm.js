import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    phoneNumber: '',
    email: '',
    choose: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-form">
      <div className="container">
        <div className="form-content">
          <h2 className="form-title">BOOK AN APPOINTMENT</h2>
          
          <form onSubmit={handleSubmit} className="appointment-form">
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="FIRST NAME"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="PHONE NUMBER"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <select
                  name="choose"
                  value={formData.choose}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">CHOOSE</option>
                  <option value="consultation">Consultation</option>
                  <option value="checkup">Check-up</option>
                  <option value="emergency">Emergency</option>
                </select>
              </div>
            </div>
            
            <div className="form-group full-width">
              <textarea
                name="message"
                placeholder="MESSAGE"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;