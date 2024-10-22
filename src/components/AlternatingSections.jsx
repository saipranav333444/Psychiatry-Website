import React from 'react';
import './AlternatingSections.css';

const sections = [
  {
    image: "https://www.professionalleadershipinstitute.com/wp-content/uploads/2022/03/shutterstock_569993581.jpg", // Replace with your image URL
    heading: "Heading 1",
    paragraph: "This is a description for the first section.",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsYHvYMprOPukK1gqXd5dc-0u9mDlYca-cTDZCGgE5UtQGJs7Q8OPIKueXdtyLZ-Qx5A&usqp=CAU", // Replace with your image URL
    heading: "Heading 2",
    paragraph: "This is a description for the second section.",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQUqvjtb9RFctpeqs5RjfN7zEV8nqcb_vMsH0vpvlFdd5QfcV6eoYMVHahELI_DhQSKIE&usqp=CAU", // Replace with your image URL
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
              <img src={section.image} alt={`Image ${index + 1}`} className="section-image-left" />
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
              <img src={section.image} alt={`Image ${index + 1}`} className="section-image-right" />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default AlternatingSections;
