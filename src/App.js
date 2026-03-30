// Main App component
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import About from './components/About';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Benefits from './components/Benefits';
import Doctor from './components/Doctor';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeatureCards />
      <About />
      <Services />
      <WhyChoose />
      <Benefits />
      <Doctor />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
