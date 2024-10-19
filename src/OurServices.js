import React from 'react';
import './OurServices.css';

const services = [
  {
    id: 1,
    title: 'Service 1',
    image: 'https://via.placeholder.com/100', // Replace with your image URL
  },
  {
    id: 2,
    title: 'Service 2',
    image: 'https://via.placeholder.com/100', // Replace with your image URL
  },
  {
    id: 3,
    title: 'Service 3',
    image: 'https://via.placeholder.com/100', // Replace with your image URL
  },
  {
    id: 4,
    title: 'Service 4',
    image: 'https://via.placeholder.com/100', // Replace with your image URL
  },
  {
    id: 5,
    title: 'Service 5',
    image: 'https://via.placeholder.com/100', // Replace with your image URL
  },
  {
    id: 6,
    title: 'Service 6',
    image: 'https://via.placeholder.com/100', // Replace with your image URL
  },
];

const OurServices = () => {
  return (
    <div className="services-container">
      <h1 className="services-heading">Our Services</h1>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-box">
            <img src={service.image} alt={service.title} className="service-image" />
            <p className="service-title">{service.title}</p>
          </div>
        ))}
      </div>
      <button className="view-services-button">View Our Services</button>
    </div>
  );
};

export default OurServices;
