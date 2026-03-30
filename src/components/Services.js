import React from 'react';
import orthodonticsImg from '../assets/images/jose-ibarra-ifM0755GnS0-unsplash.png';
import sealantsImg from '../assets/images/moses-vega-_YfoApRxd4I-unsplash.png';
import restorationImg from '../assets/images/nate-johnston-UhVxAkKw8gQ-unsplash.png';
import nitrousImg from '../assets/images/children-ge7a854501_1920.png';
import earlyImg from '../assets/images/senjuti-kundu-JfolIjRnveY-unsplash.png';
import emergencyImg from '../assets/images/jessica-rockowitz-jbiInQGY8og-unsplash.png';

const Services = () => {
  const services = [
    {
      title: 'ORTHODONTICS',
      image: orthodonticsImg
    },
    {
      title: 'DENTAL SEALANTS',
      image: sealantsImg
    },
    {
      title: 'RESTORATION DENTAL SERVICES',
      image: restorationImg
    },
    {
      title: 'NITROUS OXIDE FOR CHILDREN',
      image: nitrousImg
    },
    {
      title: 'EARLY DENTAL CARE',
      image: earlyImg
    },
    {
      title: 'EMERGENCY DENTAL SERVICE',
      image: emergencyImg
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <h2 className="services-title">FEATURE PEDIATRIC SERVICE</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <h3 className="service-title">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;