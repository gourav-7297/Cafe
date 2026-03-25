import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600", title: "Food" },
    { src: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=600", title: "Drinks" },
    { src: "/about-img.jpg", title: "Ambience" }
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="section-header text-center">
        <span className="section-label" style={{marginBottom:'10px'}}>GALLERY</span>
        <h2 className="section-title heading-fancy" style={{fontSize: '3rem', color: 'var(--text-primary)'}}>GALLERY</h2>
      </div>
      <div className="gallery-container">
        <div className="gallery-cards-grid">
          {images.map((item, i) => (
            <div className="gallery-card glass" key={i}>
              <div className="gallery-card-img">
                <img src={item.src} alt={item.title} loading="lazy" />
              </div>
              <h3 className="gallery-card-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Gallery;
