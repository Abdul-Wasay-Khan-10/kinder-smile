import React from 'react';
import icon91 from '../assets/images/Group 91.png';
import icon115 from '../assets/images/Group 115.png';
import icon93 from '../assets/images/Group 93.png';
import consultationIcon from '../assets/images/noun-consultation-chat-2575751.png';
import childFriendlyIcon from '../assets/images/childfriendly.png';

const Benefits = () => {
  const benefits = [
    {
      icon: icon91,
      title: 'VOTED BEST PEDIATRIC DENTIST IN BERGEN COUNTRY'
    },
    {
      icon: icon115,
      title: 'AFFORDABLE CARE FOR YOU CHILDREN\'S TEETH EVEN WITHOUT INSURANCE'
    },
    {
      icon: icon115,
      title: 'EMERGENCY PROVIDER WHEN YOU NEED IT MOST'
    },
    {
      icon: icon93,
      title: 'CARING ORTHODONTIST NEAR YOU'
    },
    {
      icon: consultationIcon,
      title: 'FREE CONSULTATION'
    },
    {
      icon: icon115,
      title: 'MULTIPLE POSITIVE REVIEWS'
    },
    {
      icon: childFriendlyIcon,
      title: 'CHILD FRIENDLY'
    },
    {
      icon: icon115,
      title: 'DENTAL DENTISTRY AT IT\'S BEST'
    }
  ];

  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">
                <img src={benefit.icon} alt={benefit.title} onError={e => {e.target.onerror=null; e.target.src='https://via.placeholder.com/60?text=No+Image';}} />
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;