import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content glass animate-fade-in">
        <h1 className="heading-fancy">Canteen Stories</h1>
        <h2 className="hero-subtitle">कैंटीन स्टोरीज</h2>
        <p className="hero-tagline">Cafe & Restaurant</p>
        <div className="hero-buttons">
          <a href="#menu" className="btn delay-1">Explore Menu</a>
          <a href="#about" className="btn btn-outline delay-2">Our Vibe</a>
        </div>
      </div>
      <div className="scroll-indicator fade-in delay-3">
        <span>↓</span>
      </div>
    </section>
  );
};
export default Hero;
