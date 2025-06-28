import React from 'react';
import './App5.css'; // You’ll define this below

const ContactMe = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Get In Touch</h1>

      <div className="contact-content">
        {/* Left Section */}
        <div className="contact-info">
          <h2>Let's Talk</h2>
          <p>Feel free to reach out! I'm open to collaboration, project discussion, or just a friendly chat.</p>
          <div className="info-item">
            <strong>Email:</strong> prince@example.com
          </div>
          <div className="info-item">
            <strong>Phone:</strong> +91-9876543210
          </div>
          <div className="info-item">
            <strong>Address:</strong> Jaipur, Rajasthan, India
          </div>
        </div>

        {/* Right Section */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
