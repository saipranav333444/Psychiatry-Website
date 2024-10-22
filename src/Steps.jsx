import React from 'react';
import './Steps.css';

const services = [
  {
    id: 1,
    title: 'Schedule an appointment',
    image: 'https://img.freepik.com/premium-vector/schedule-appointment-icon-concept_313674-473.jpg', // Replace with your image URL
  },
  {
    id: 2,
    title: 'Connect with your provider',
    image: 'https://static.vecteezy.com/system/resources/previews/004/994/259/non_2x/business-handshake-icon-free-vector.jpg', // Replace with your image URL
  },
  {
    id: 3,
    title: 'Discuss your comphrensive assesment',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOI_dhw1u3MyzSt9Iy_OqdAnylDlR9uaBOg&s', // Replace with your image URL
  },
  {
    id: 4,
    title: 'Receive your individualized treatment plan',
    image: 'https://png.pngtree.com/png-clipart/20190629/original/pngtree-vector-planning-icon-png-image_4090569.jpg', // Replace with your image URL
  },
  
];

const Steps = () => {
  return (
    <div className="steps-container">
      <h1 className="steps-heading">Four Simple Steps To <br/> Get Started</h1>
      <div className="steps-grid">
        {services.map(service => (
          <div key={service.id} className="steps-box">
            <img src={service.image} alt={service.title} className="steps-image" />
            <p className="steps-title">{service.title}</p>
          </div>
        ))}
      </div>
      <button className="steps-button">Schedule a Call </button>
    </div>
  );
};

export default Steps;
