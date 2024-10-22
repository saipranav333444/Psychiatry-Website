import React, { useState } from 'react';
import './TestimonialCarousel.css';

const testimonials = [
  {
    quote: "This is the best mental health service I've ever experienced. Truly life-changing.",
    name: "John Doe",
    image: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/82bec838-05c8-4d68-b173-2284a6ad4e52/how-to-stop-being-a-people-pleaser" // Replace with an actual image URL
  },
  {
    quote: "The team is so supportive and professional. I felt heard and understood.",
    name: "Jane Smith",
    image: "https://media.istockphoto.com/id/638359780/photo/business-woman-rolling-up-her-sleeves.jpg?s=612x612&w=0&k=20&c=61oz4PozT--opEZpthBBGBEn9F1m-SFh5oVKy7t1yvM=" // Replace with an actual image URL
  },
  {
    quote: "Their services have greatly helped me in navigating difficult times. I highly recommend them.",
    name: "Emily Johnson",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3CBbaiNoT2NSJNzgL0ynkuUbdXjrzRPtkhcnnYakkNHWv3vIeSy8jVtS0R-AZF_IfISA&usqp=CAU" // Replace with an actual image URL
  },
  {
    quote: "I have never felt more comfortable and cared for. A wonderful experience.",
    name: "Mark Williams",
    image: "https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg" // Replace with an actual image URL
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
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
      {/* Dots Indicator */}
      <div className="carousel-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
