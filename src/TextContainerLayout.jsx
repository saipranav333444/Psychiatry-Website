import React from 'react';
import './TextContainerLayout.css';

const TextContainerLayout = () => {
  return (
    <div className="layout__main-container">
      {/* Wrapper for four text containers side by side */}
      <div className="layout__container-wrapper">
        <div className="layout__text-container">
          <h2 className="layout__heading">Quick Links</h2>
          <p className="layout__text">Who We Are</p>
          <p className="layout__text">What We Treat</p>
          <p className="layout__text">Services</p>
          <p className="layout__text">Contact Us</p>
        </div>
        <div className="layout__text-container">
          <h2 className="layout__heading">Resources</h2>
          <p className="layout__text">FAQs</p>
          <p className="layout__text">Blog</p>
          <p className="layout__text">Fees and Insurance</p>
          
        </div>
        <div className="layout__text-container">
          <h2 className="layout__heading">Legal</h2>
          <p className="layout__text">Terms</p>
          <p className="layout__text">Privacy </p>
          <p className="layout__text">Return Policy</p>
          <p className="layout__text">Cookie Settings</p>
        </div>
        <div className="layout__text-container">
          <h2 className="layout__heading">Business Hours</h2>
          <p className="layout__text">Monday - Thursday</p>
          <p className="layout__text">09:00 am - 4:00 pm</p>
          <br/>
          <h2 className="layout__heading">For Careers</h2>
          <p className="layout__text">Interseted</p>
          <p className="layout__text">Career@psychiatry.com</p>
        </div>

        {/* Psychiatry text beside the text containers */}
        <div className="layout__psychiatry">
          <h1 className="layout__psychiatry-text">PSYCHIATRY</h1>
        </div>
      </div>
    </div>
  );
};

export default TextContainerLayout;
