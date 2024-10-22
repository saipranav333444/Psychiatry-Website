import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1 className='logo-name'>PSYCHIATRY</h1>
      </div>
      <ul className="nav-items">
        <li className='item-1'>Who We Are</li>
        <li className='item-1'>Who We Treat</li>
        <li className='item-1'>Services</li>
        <li>
          <button className="appointment-button">Book Appointment</button>
        </li>
      </ul>
    </nav>
  );
};

export default Home;
