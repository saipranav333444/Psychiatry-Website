import React, { useState } from 'react';
import './Carousel.css';

const slides = [
  {
    heading1: "NEED A MENTAL",
    heading2: "HEALTH PROVIDER",
    text: "No look further",
    description: "Our goal is to provide a safe, comfortable, and warm environment so that you can openly discuss your mental health needs.",
    buttonText: "Learn More",
    backgroundImage: "url('https://images.everydayhealth.com/images/senior-health/psychiatrist-vs-therapist-featured-image.jpg?sfvrsn=4d2eed6d_5')" // Replace with your image URL
  },
  {
    heading1: "YOUR MENTAL",
    heading2: "HEALTH MATTERS",
    text: "We are here for you",
    description: "Join our community and receive the care and support you deserve for your mental well-being.",
    buttonText: "Get Started",
    backgroundImage: "url('https://images.everydayhealth.com/images/senior-health/psychiatrist-vs-therapist-featured-image.jpg?sfvrsn=4d2eed6d_5')" // Replace with your image URL
  },
  {
    heading1: "FIND PEACE",
    heading2: "AND SUPPORT",
    text: "Your journey begins here",
    description: "Take the first step towards a brighter future with our compassionate mental health professionals.",
    buttonText: "Contact Us",
    backgroundImage: "url('https://images.everydayhealth.com/images/senior-health/psychiatrist-vs-therapist-featured-image.jpg?sfvrsn=4d2eed6d_5')" // Replace with your image URL
  }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div
      className="carousel-container"
      style={{ backgroundImage: slides[currentSlide].backgroundImage }}
    >
      <div className="carousel-content">
        <h1 className="carousel-heading">{slides[currentSlide].heading1}</h1>
        <h1 className="carousel-heading">{slides[currentSlide].heading2}</h1>
        <p className="carousel-text">{slides[currentSlide].text}</p>
        <p className="carousel-description">{slides[currentSlide].description}</p>
        <button className="learn-more-button">
          ${slides[currentSlide].buttonText} ->
        </button>
      </div>
      <div className="carousel-navigation">
        <button onClick={handlePrevSlide} className="nav-button">❮</button>
        <button onClick={handleNextSlide} className="nav-button">❯</button>
      </div>
    </div>
  );
};

export default Carousel;
