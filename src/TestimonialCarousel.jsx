import React, { useState } from 'react';
import './TestimonialCarousel.css';

const testimonials = [
  {
    quote: "This is the best mental health service I've ever experienced. Truly life-changing.",
    name: "John Doe",
    image: "https://via.placeholder.com/80" // Replace with an actual image URL
  },
  {
    quote: "The team is so supportive and professional. I felt heard and understood.",
    name: "Jane Smith",
    image: "https://via.placeholder.com/80" // Replace with an actual image URL
  },
  {
    quote: "Their services have greatly helped me in navigating difficult times. I highly recommend them.",
    name: "Emily Johnson",
    image: "https://via.placeholder.com/80" // Replace with an actual image URL
  },
  {
    quote: "I have never felt more comfortable and cared for. A wonderful experience.",
    name: "Mark Williams",
    image: "https://via.placeholder.com/80" // Replace with an actual image URL
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="testimonial-slide">
        <p className="testimonial-quote">“{testimonials[currentIndex].quote}”</p>
        <div className="testimonial-details">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="testimonial-image"
          />
          <p className="testimonial-name">- {testimonials[currentIndex].name}</p>
        </div>
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrev} className="carousel-btn">❮</button>
        <button onClick={handleNext} className="carousel-btn">❯</button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
