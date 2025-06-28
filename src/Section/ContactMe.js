import React, { useState } from 'react';
import './ContactMe.css';

const WEB3_ACCESS_KEY = 'c3ce29ed-4207-494a-8cbf-ed5854a11e20';

const ContactMe = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3_ACCESS_KEY,
          from_name: form.name,
          email: form.email,
          message: form.message
        })
      });
      const data = await res.json();
      if (data.success) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (err) {
      setStatus('Error sending message.');
    }
    setLoading(false);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Get In Touch</h1>
      <div className="contact-content">
        {/* Left Section */}
        <div className="contact-info">
          <h2>Let's Talk</h2>
          <p>Feel free to reach out! I'm open to collaboration, project discussion, or just a friendly chat.</p>
          <div className="info-item">
            <strong>Email:</strong> <a href="mailto:princeg1608@gmail.com">princeg1608@gmail.com</a>
          </div>
          <div className="info-item">
            <strong>Phone:</strong> +91-7817033158
          </div>
          <div className="info-item">
            <strong>Address:</strong> Madaiyan Shiv Narayan, Ram Lila Road, Etawah, U.P.
          </div>
        </div>
        {/* Right Section */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send'}</button>
          {status && <div style={{ marginTop: '1rem', color: status.includes('success') ? '#00ccff' : '#ff4d4f' }}>{status}</div>}
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
