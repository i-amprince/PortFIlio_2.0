// App.jsx
import React from 'react';
import ShootingStar from './Background/ShootingStar';
import TypingText from './components/typingText';
import './App.css';
import Logo from './Images/Group 1.png';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import UFO from './components/UFO';
import { useNavigate } from 'react-router-dom';

function App({ onAboutClick, navigate }) {
  const handleAbout = () => {
    if (navigate) {
      navigate('/about');
    } else if (onAboutClick) {
      onAboutClick();
    }
  };
  return (
    <div className="app-no-scroll">
      <ShootingStar />
      <div className="hero-section">
        {/* Left content */}
        <div className="hero-left">
          <h1 className="hero-name">Prince Goyal</h1>
          <div className="hero-typing"><TypingText /></div>
          <button className="about-button" onClick={handleAbout}>
            About Me
            <span className="arrow">→</span>
          </button>
        </div>
        {/* Logo and UFO container */}
        <div className="Logo">
          <img src={Logo} alt="Prince Logo" />
        </div>
        {/* UFO placed separately below logo but before social links */}
        <div className="UFO-container">
          <UFO />
        </div>
        {/* Socials */}
        <div className="social-links">
          <a href="https://github.com/i-amprince" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.instagram.com/wydo.prince__/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/prince-goyal-9123372b1/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:princeg1608@gmail.com"><FaEnvelope /></a>
        </div>
      </div>
      {/* Next button for flow (optional, hidden on landing) */}
    </div>
  );
}

function AppWrapper(props) {
  const navigate = useNavigate();
  return <App {...props} navigate={navigate} />;
}

export default AppWrapper;
