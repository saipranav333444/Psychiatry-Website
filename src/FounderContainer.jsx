import React from 'react';
import './FounderContainer.css';

const FounderContainer = () => {
  return (
    <div className="founder-container">
      <div className="founder-content">
        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSGCwfalnqVO-2knIDDvcp7_05L7iYTCDJfoRbl8o9acWqpnytu" // Replace with your founder's image URL
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
