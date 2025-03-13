import React from "react";
import './About.css';
// import banner from "../Assets/pc-banner.jpg";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-overlay">
          <h1>Welcome to PC Factory</h1>
          <p>Building High-Performance PCs with Innovation & Excellence</p>
        </div>
      </div>

      {/* Company Details */}
      <section className="about-content">
        <h2>Who We Are</h2>
        <p>
          <span className="highlight">PC Factory</span> is a leading provider of custom-built gaming and professional PCs. 
          We specialize in assembling high-performance desktops using top-tier components, ensuring speed, reliability, and longevity.
        </p>
      </section>

      {/* Our Goal */}
      <section className="about-content goal-section">
        <h2>Our Goal</h2>
        <p>
          Our mission is to empower gamers, creators, and professionals by delivering powerful and optimized PC solutions.  
          We focus on performance, quality, and customer satisfaction, ensuring that every PC we build exceeds expectations.
        </p>
      </section>

      {/* Call to Action */}
      <div className="about-cta">
        <h2>Experience the Future of Performance</h2>
        <p>Explore our collection of high-performance PCs and start building your dream setup today.</p>
        <button className="explore-button">Get Started</button>
      </div>
    </div>
  );
};

export default About;
