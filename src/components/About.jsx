import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-image-wrapper">
            <div className="about-image glass">
              <img src="/about-img.jpg" alt="Canteen Stories Interior" />
            </div>
            <div className="experience-badge glass">
              <span>5.0</span>
              <p>Rating</p>
            </div>
          </div>
          <div className="about-content">
            <h2 className="section-title heading-fancy the-story-title">The Story</h2>
            <p className="about-text">
              Established with a passion for great food and perfect vibes, <strong>Canteen Stories</strong> / <strong>कैंटीन स्टोरीज</strong> is an eclectic café adorned with warm lights, comfortable seating, and a surreal vibe.
            </p>
            <p className="about-text">
              Our diverse events schedule includes DJ Nights, Acoustic sessions, Sufi Nights, and Bollywood Nights, keeping the evenings lively and entertaining for our clients. Whether you are here for a quick bite, rich coffee, or exploring our diverse small plates, our doors are open until 11 PM.
            </p>
            <p className="about-quote">
              "Canteen Stories in Jaipur is the perfect blend of entertainment and cuisine, with live performances, a diverse menu, and unforgettable nights, all served up with a side of stunning vibes."
            </p>
            <div className="founder-signature">
              <h4 className="founder-name">The Founders</h4>
              <p className="signature-font">Canteen Stories Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Banner */}
      <section className="offerings-banner">
        <div className="offerings-overlay"></div>
        <div className="offerings-container">
          <div className="offering-item glass">
            <span className="icon">🍲</span>
            <h4>Multi-Cuisine</h4>
            <p>One bite and experience a delightful burst of flavours.</p>
          </div>
          <div className="offering-item glass">
            <span className="icon">🍹</span>
            <h4>Delectable Concoctions</h4>
            <p>Explore flavourful mocktails that are crafted to perfection.</p>
          </div>
          <div className="offering-item glass">
            <span className="icon">🛋️</span>
            <h4>Rustic Ambience</h4>
            <p>Explore our cozy, timeless decor with a modern touch.</p>
          </div>
          <div className="offering-item glass">
            <span className="icon">✨</span>
            <h4>Surreal Vibes</h4>
            <p>With an eclectic decor, Canteen Stories is all about the vibes.</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
