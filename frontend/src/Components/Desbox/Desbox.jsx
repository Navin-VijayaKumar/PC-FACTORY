import React from 'react';
import './Desbox.css'; 

export const Desbox = () => {
  return (
    <div className="descriptionbox">
      <div className="description-nav">
        <div className="description-nav-box">
          Description
        </div>
        <div className="description-nav-box fade">
          Reviews(222)
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>
          At PC-Factory, we understand the passion and precision that goes into building the perfect PC.
          Whether you're a seasoned builder or a first-time enthusiast, 
          we are here to provide you with the best components to create a machine that meets your needs and exceeds your expectations.
        </p>
        <p>
          When building your own PC, selecting compatible components is crucial to ensure your system functions optimally and to avoid costly mistakes.
        </p>
      </div>
    </div>
  );
};
