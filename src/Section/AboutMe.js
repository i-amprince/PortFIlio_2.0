import React from 'react';
import './AboutMe.css';

import WorkingImage from '../Images/workingg.png';
import MongoDBLogo from '../Images/Logos/M.svg';
import ExpressLogo from '../Images/Logos/E.svg';
import ReactLogo from '../Images/Logos/R.svg';
import NodeLogo from '../Images/Logos/N.svg';

const AboutMe = ({ onBack }) => {
  return (
    <div className="about-container">
      <div className="about-card">
        <button
          style={{
            position: 'absolute', left: 24, top: 24, zIndex: 10, padding: '8px 18px', borderRadius: '8px', border: 'none', background: '#223a70', color: '#fff', fontWeight: 600, cursor: 'pointer', boxShadow: '0 2px 8px rgba(34,58,112,0.12)' 
          }}
          onClick={onBack}
        >
          ← Back to Space
        </button>
        <h2 className="about-title">About Me</h2>
        <div className="about-content-wrapper">
          <div className="about-text-content">
            <p className="about-description">
              I'm a <strong style={{ color: '#00ffcc' }}>MERN Stack Developer</strong> and problem-solver passionate about building full-stack applications that are both functional and intuitive. I’ve been working extensively with the MERN stack — creating responsive, user-centric interfaces and scalable backend solutions.
            </p>
            <p className="about-description">
              Alongside development, I'm actively strengthening my foundations in Data Structures and Algorithms. With a <strong style={{ color: '#00BFFF' }}>LeetCode rating of 1700+</strong> and a <strong style={{ color: '#FFD700' }}>CodeChef 2⭐</strong> profile, I enjoy tackling algorithmic challenges that sharpen my logic and coding efficiency.
            </p>
            <p className="about-description">
              I believe in learning by doing — whether it's building real-world projects, collaborating with others, or diving deep into new technologies. I'm currently focused on refining my development workflow, writing clean, maintainable code, and contributing to impactful software solutions.
            </p>

            <div className="mern-section">
              <h3>MERN Stack</h3>
              <div className="mern-logos-row">
                <img src={MongoDBLogo} alt="MongoDB" className="mern-logo" />
                <img src={ExpressLogo} alt="Express.js" className="mern-logo" />
                <img src={ReactLogo} alt="React.js" className="mern-logo" />
                <img src={NodeLogo} alt="Node.js" className="mern-logo" />
              </div>
            </div>
          </div>
          <div className="about-image-section">
            <img src={WorkingImage} alt="Working Illustration" className="working-illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
