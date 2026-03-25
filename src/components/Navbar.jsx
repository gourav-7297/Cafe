import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="navbar-container">
        <div className="nav-logo">
          <span className="heading-fancy">Canteen Stories</span>
        </div>
        
        <div className={`nav-links-wrapper ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#events" onClick={() => setMenuOpen(false)}>Events</a></li>
            <li><a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a></li>
            <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>

        <div className="nav-action">
          <a href="#book" className="btn btn-small">Book a Table</a>
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
             {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
