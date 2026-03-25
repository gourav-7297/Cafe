import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <section id="blog" className="blog-section">
      <div className="section-header text-center">
        <span className="section-label">BLOG</span>
        <h2 className="section-title heading-fancy">Discover the World of Canteen Stories</h2>
        <p className="section-desc">Our blog is your ultimate guide, featuring famous dishes, chef specials, and the secrets that make us great!</p>
      </div>
      <div className="blog-container">
        <div className="blog-card glass">
          <div className="blog-img">
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800" alt="Pizza" />
          </div>
          <div className="blog-content">
            <div className="blog-meta">
              <span>RESTAURANTS</span>
              <span className="date">FEB 22, 2024</span>
            </div>
            <h3 className="blog-title">Experience the Perfect Hangout Spot: Canteen Stories in Jaipur.</h3>
            <p className="blog-text">Are you looking for the perfect hangout spot that combines delicious food, high-energy vibes, and exciting events? Look no further than Canteen Stories!</p>
            <button className="read-more">Read More...</button>
          </div>
        </div>
        
        <div className="blog-card glass">
          <div className="blog-img">
            <img src="https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=800" alt="Drinks" />
          </div>
          <div className="blog-content">
            <div className="blog-meta">
              <span>RESTAURANTS</span>
              <span className="date">MAR 15, 2024</span>
            </div>
            <h3 className="blog-title">5 Refreshing Mocktails to Quench Your Thirst!</h3>
            <p className="blog-text">Welcome to Canteen Stories, where the summer season is in full swing. We have the perfect remedy to beat the heat - refreshing signature mocktails and shakes!</p>
            <button className="read-more">Read More...</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
