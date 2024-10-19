import React from 'react';
import './TextContainerLayout.css';

const TextContainerLayout = () => {
  return (
    <div className="layout__main-container">
      {/* Wrapper for four text containers side by side */}
      <div className="layout__container-wrapper">
        <div className="layout__text-container">
          <h2 className="layout__heading">Heading 1</h2>
          <p className="layout__text">Paragraph 1</p>
          <p className="layout__text">Paragraph 2</p>
          <p className="layout__text">Paragraph 3</p>
          <p className="layout__text">Paragraph 4</p>
        </div>
        <div className="layout__text-container">
          <h2 className="layout__heading">Heading 2</h2>
          <p className="layout__text">Paragraph 1</p>
          <p className="layout__text">Paragraph 2</p>
          <p className="layout__text">Paragraph 3</p>
          <p className="layout__text">Paragraph 4</p>
        </div>
        <div className="layout__text-container">
          <h2 className="layout__heading">Heading 3</h2>
          <p className="layout__text">Paragraph 1</p>
          <p className="layout__text">Paragraph 2</p>
          <p className="layout__text">Paragraph 3</p>
          <p className="layout__text">Paragraph 4</p>
        </div>
        <div className="layout__text-container">
          <h2 className="layout__heading">Heading 4</h2>
          <p className="layout__text">Paragraph 1</p>
          <p className="layout__text">Paragraph 2</p>
          <p className="layout__text">Paragraph 3</p>
          <p className="layout__text">Paragraph 4</p>
        </div>

        {/* Psychiatry text beside the text containers */}
        <div className="layout__psychiatry">
          <h1 className="layout__psychiatry-text">Psychiatry</h1>
        </div>
      </div>
    </div>
  );
};

export default TextContainerLayout;
