import React from 'react';
import './FounderContainer.css';

const FounderContainer = () => {
  return (
    <div className="founder-container">
      <div className="founder-content">
        <img
          src="https://as2.ftcdn.net/v2/jpg/01/24/04/85/1000_F_124048525_am4lMMG4T5S964BXS647M6O68eM7hQf7.jpg" // Replace with your founder's image URL
          alt="Lakeisha Appleton"
          className="founder-image"
        />
        <div className="founder-text">
          <h2 className="founder-heading">Meet The Founder</h2>
          <p className="founder-name">Lakeisha Appleton</p>
          <p className="founder-title">FNP-C, PMHNP-BC</p>
          <p className="founder-quote">
            Mental health problems don't define who you are <br />
            They are something you experience. You walk in the <br />
            rain and you feel the rain, but, importantly, YOU ARE <br />
            NOT THE RAIN." -- Matt Halg
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default FounderContainer;
