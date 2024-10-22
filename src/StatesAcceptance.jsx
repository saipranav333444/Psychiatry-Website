import React from 'react';
import './StatesAcceptance.css'; // Importing custom CSS

const StatesAcceptance = () => {
  return (
    <div className='backgorudn-color'>
       <h2 className="heading">Now accepting patients in the <br/>following states</h2>
<div className="main-container">

      <div className="states-container">
        <div className="state-item">
          <div className="half-circle-image-container">
            <img src="https://burst.shopifycdn.com/photos/chicago-city-lights-at-night.jpg?width=1000&format=pjpg&exif=0&iptc=0" alt="State 1" />
          </div>
          <p>Tokyo</p>
        </div>
        <div className="state-item">
          <div className="half-circle-image-container">
            <img src="https://cdn.britannica.com/83/195483-050-62AB0C05/Crowds-people-shopping-district-Shibuya-Japan-Tokyo.jpg" alt="State 2" />
          </div>
          <p>Britannica</p>
        </div>
        <div className="state-item">
          <div className="half-circle-image-container">
            <img src="https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg" alt="State 3" />
          </div>
          <p>Dubai</p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default StatesAcceptance;
