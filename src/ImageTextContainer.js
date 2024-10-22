import React from 'react';
import './ImageTextContainer.css';

const ImageTextContainer = () => {
  return (
    <div className="main-container">
      <div className="image-container">
        <img
          src="https://www.livemint.com/lm-img/img/2024/10/10/600x338/FILES-INDIA-BUSINESS-TATA-0_1728529479202_1728529502774.jpg" // Replace with your image URL
          alt="Placeholder"
          className="content-image"
        />
      </div>
      <div className="text-container">
        <h1 className="content-heading">Our Vision</h1>
        <p className="content-paragraph">We believe in a future where mental health care is accessible to all.</p>
        <p className="content-paragraph">Our approach is centered on compassion and understanding.</p>
        <p className="content-paragraph">We provide tailored solutions for individual needs.</p>
        <p className="content-paragraph">Join us on a journey towards mental wellness and growth.</p>
      </div>
    </div>
  );
};

export default ImageTextContainer;
