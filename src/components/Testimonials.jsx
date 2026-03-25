import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    { name: "Rahul S.", text: "The Bollywood night was incredible! Perfectly paired with their Paneer Tikka pizza and a cold Mocktail. The vibe is exactly what Jaipur needed.", rating: 5 },
    { name: "Neha K.", text: "Best coffee in the area. The ambiance is beautifully lit and the staff treats you like family. Will definitely be returning for the Acoustic sessions.", rating: 5 },
    { name: "Amit V.", text: "A go-to spot for group hangouts! The open seating and vibe is unmatched, especially on weekends when they bring live DJs.", rating: 5 }
  ];

  return (
    <section id="reviews" className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header text-center">
          <h2 className="section-title heading-fancy">Wall of Love</h2>
          <h3 className="section-subtitle">What Our Guests Say</h3>
        </div>
        <div className="testimonials-grid">
          {reviews.map((r, i) => (
            <div className="testimonial-card glass" key={i}>
              <div className="stars">{"★".repeat(r.rating)}</div>
              <p className="testimonial-text">"{r.text}"</p>
              <h4 className="testimonial-name">— {r.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
