import React from 'react';
import './Events.css';

const Events = () => {
  return (
    <section id="events" className="events-section">
      <div className="events-container">
        <div className="section-header text-center">
          <h2 className="section-title heading-fancy">What's Happening</h2>
          <h3 className="section-subtitle">Nights to Remember</h3>
        </div>
        <div className="events-grid">
          <div className="event-card glass">
            <div className="event-date">Every Friday</div>
            <h4 className="event-title">Sufi Nights</h4>
            <p className="event-desc">Experience soul-stirring live Sufi music with your favorite drinks under the stars.</p>
          </div>
          <div className="event-card glass active-event">
            <div className="event-date">Saturdays</div>
            <h4 className="event-title">DJ & Bollywood</h4>
            <p className="event-desc">Dance the night away to the biggest Bollywood and commercial anthems.</p>
          </div>
          <div className="event-card glass">
            <div className="event-date">Sundays</div>
            <h4 className="event-title">Acoustic Sessions</h4>
            <p className="event-desc">Relax and unwind with soothing unplugged performances to close out your weekend.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Events;
