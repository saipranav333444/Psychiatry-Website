import React from 'react';
import './ImageTextContainer.css';

const ImageTextContainer = () => {
  return (
    <div className="main-container">
      <div className="image-container">
        <img
          src="https://via.placeholder.com/200" // Replace with your image URL
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
