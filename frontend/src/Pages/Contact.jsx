import React from "react";
import './Contact.css'
const Contact = () => {
  return (
    <div className="contact-container">
      {/* Contact Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Have questions? Reach out to us, and we'll be happy to assist you!</p>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info">
        <div className="info-box">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Our Location</h3>
          <p>123 a2d pc factory</p>
        </div>

        <div className="info-box">
          <i className="fas fa-envelope"></i>
          <h3>Email</h3>
          <p>support@pcfactory.com</p>
        </div>

        <div className="info-box">
          <i className="fas fa-phone"></i>
          <h3>Call Us</h3>
          <p>+1 800 555 6789</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
