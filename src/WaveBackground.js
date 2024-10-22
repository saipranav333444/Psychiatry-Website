import React from 'react';
import './WaveBackground.css';

const WaveBackground = () => {
  return (
    <div className="wave-container">
      <svg className="wave" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,0 C480,100 960,100 1440,0 L1440,120 L0,120 Z" />
      </svg>
      <div className="content">
      <p className="quote-text-1">
''         </p>
        <p className="quote-text">
          "We help people living with and experiencing difficult times"
        </p>
      </div>
    </div>
  );
};

export default WaveBackground;
