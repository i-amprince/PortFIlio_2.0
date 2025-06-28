import React from 'react';
import './AboutMe.css';

// Import placeholder images (replace with actual paths)
import WorkingImage from '../Images/workingg.png';
import MongoDBLogo from '../Images/Logos/M.svg';
import ExpressLogo from '../Images/Logos/E.svg';
import ReactLogo from '../Images/Logos/R.svg';
import NodeLogo from '../Images/Logos/N.svg';

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h2 className="about-title">About Me</h2>
        <div className="about-content-wrapper">
          <div className="about-text-content">
            <p className="about-description">
              A passionate second-year student diving deep into web development. I've recently enhanced my skills by mastering the MERN stack (MongoDB, Express.js, React.js, Node.js) and have been actively building projects. I'm eager to create dynamic and user-centric web applications.
            </p>
            <p className="about-description skills-intro">
              Technologies and tools I use to craft exceptional web solutions:
            </p>
            <div className="tag-grid">
              {[
                "JavaScript", "React.js", "React Context API", "Node.js", "Express.js", "MongoDB", "Mongoose",
                "HTML", "CSS", "Tailwind CSS", "Figma",
                "Git", "GitHub", "Terminal",
                "Java", "Python", "C", "C++"
              ].map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
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