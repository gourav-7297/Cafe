import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({ name: '', date: '', guests: '2', time: '' });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for your request, ${formData.name}! We'll confirm your table shortly for ${formData.guests} guests.`);
  };

  return (
    <section id="book" className="booking-section">
      <div className="booking-container">
        <div className="booking-content text-center">
          <h2 className="section-title heading-fancy">Reserve a Table</h2>
          <h3 className="section-subtitle">Secure Your Spot</h3>
          <p className="booking-info">Planning a big night or a special group celebration? Let us know!</p>
        </div>
        <form className="booking-form glass" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Your Name or Group Name" required onChange={e => setFormData({...formData, name: e.target.value})} />
          </div>
          <div className="form-group row">
            <input type="date" required onChange={e => setFormData({...formData, date: e.target.value})} />
            <input type="time" required onChange={e => setFormData({...formData, time: e.target.value})} />
            <select onChange={e => setFormData({...formData, guests: e.target.value})}>
              <option value="1">1 Guest</option>
              <option value="2" selected>2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5+">5+ Guests (Group)</option>
            </select>
          </div>
          <button type="submit" className="btn btn-full">Submit Request</button>
        </form>
      </div>
    </section>
  );
};
export default Booking;
