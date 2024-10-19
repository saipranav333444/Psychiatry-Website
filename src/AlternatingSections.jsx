import React from 'react';
import './AlternatingSections.css';

const sections = [
  {
    image: "https://via.placeholder.com/100", // Replace with your image URL
    heading: "Heading 1",
    paragraph: "This is a description for the first section.",
  },
  {
    image: "https://via.placeholder.com/100", // Replace with your image URL
    heading: "Heading 2",
    paragraph: "This is a description for the second section.",
  },
  {
    image: "https://via.placeholder.com/100", // Replace with your image URL
    heading: "Heading 3",
    paragraph: "This is a description for the third section.",
  },
];

const AlternatingSections = () => {
  return (
    <div className="alternating-container">
        <div>
            <h1>Our Treatment Focus</h1>
        </div>
      {sections.map((section, index) => (
        <div key={index} className={`section ${index % 2 === 0 ? 'left' : 'right'}`}>
          {index % 2 === 0 ? (
            <>
              <img src={section.image} alt={`Image ${index + 1}`} className="section-image" />
              <div className="section-text">
                <h2 className="section-heading">{section.heading}</h2>
                <p className="section-paragraph">{section.paragraph}</p>
                <button className="learn-more-button">Learn More</button>
              </div>
            </>
          ) : (
            <>
              <div className="section-text">
                <h2 className="section-heading">{section.heading}</h2>
                <p className="section-paragraph">{section.paragraph}</p>
                <button className="learn-more-button">Learn More</button>
              </div>
              <img src={section.image} alt={`Image ${index + 1}`} className="section-image" />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default AlternatingSections;
