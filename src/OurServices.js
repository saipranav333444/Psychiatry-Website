import React from 'react';
import './OurServices.css';

const services = [
  {
    id: 1,
    title: 'Service 1',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtl7NP4FIy1sdPOZBj7sJLPHcgydUsKpNjPg&s', // Replace with your image URL
  },
  {
    id: 2,
    title: 'Service 2',
    image: 'https://www.shutterstock.com/image-vector/psychologist-session-icon-outline-vector-260nw-1804250452.jpg', // Replace with your image URL
  },
  {
    id: 3,
    title: 'Service 3',
    image: 'https://cdn-icons-png.flaticon.com/128/2913/2913000.png', // Replace with your image URL
  },
  {
    id: 4,
    title: 'Service 4',
    image: 'https://cdn-icons-png.flaticon.com/512/10491/10491709.png', // Replace with your image URL
  },
  {
    id: 5,
    title: 'Service 5',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlz9XjkhShftsaEav5qi0pGOM4wE9OejzPGw&s', // Replace with your image URL
  },
  {
    id: 6,
    title: 'Service 6',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzc-aQ8aEGAGHUjApji8lT-oSdf5AfcFhARQ&s', // Replace with your image URL
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