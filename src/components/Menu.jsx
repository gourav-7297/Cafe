import React, { useState } from 'react';
import { menuData } from '../data/menu';
import './Menu.css';

const Menu = () => {
  const categories = Object.keys(menuData);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="menu" className="menu-section">
      <div className="menu-container">
        <div className="section-header text-center">
          <h2 className="section-title heading-fancy">Our Menu</h2>
          <h3 className="section-subtitle">Discover Your Taste</h3>
        </div>

        <div className="menu-tabs-wrapper">
          <div className="menu-tabs">
            {categories.map((cat) => (
              <button 
                key={cat} 
                className={`tab-btn glass ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="menu-content fade-in">
          <div className="menu-list glass" key={activeTab}>
            {menuData[activeTab].map((item, index) => (
              <div className="menu-item" key={index}>
                <div className="menu-item-info">
                  <h4 className="item-name">{item.name}</h4>
                  <div className="item-dots"></div>
                  <span className="item-price">₹{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Menu;
