import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-overlay"></div>
      <div className="footer-container glass">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="heading-fancy">Canteen Stories</h2>
            <p>Cafe & Restaurant</p>
            <p className="footer-tagline">“Thanks For Visiting Us.”</p>
            <p className="footer-quote">“One cannot think well, love well, sleep well, if one has not dined well.”</p>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p><span className="icon">📍</span> 104, Kanji Nagar, Near ICFAI University,<br/>Agra Road, Jaipur, Rajasthan 302031.</p>
            <p><span className="icon">📞</span> +91-9799966229</p>
            <p><span className="icon">⌚</span> Open • Closes 11 PM</p>
          </div>

          <div className="footer-social">
            <h3>Connect</h3>
            <a href="https://instagram.com/CANTEEN_STORIES_JAIPUR" target="_blank" rel="noreferrer" className="social-link">@CANTEEN_STORIES_JAIPUR</a>
            <div className="qr-wrapper">
              <div className="qr-placeholder glass">
                <span>IG QR</span>
              </div>
              <a href="https://share.google/WKMhV5cg4CDeGcQbt" target="_blank" rel="noreferrer" className="nav-link-btn">Google Maps Direction</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Canteen Stories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
