import React from 'react';
import './UFO.css';

const UFO = () => {
  return (
    <div className="ufo-svg-wrapper">
      <svg className="ufo-svg" width="80" height="40" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Dome */}
        <ellipse cx="60" cy="25" rx="28" ry="14" fill="#b3e6ff" stroke="#00bfff" strokeWidth="2" />
        {/* Body */}
        <ellipse cx="60" cy="40" rx="50" ry="18" fill="#888" stroke="#444" strokeWidth="3" />
        {/* Lights */}
        <circle cx="30" cy="40" r="4" fill="#fffb00" />
        <circle cx="50" cy="52" r="4" fill="#00ffea" />
        <circle cx="70" cy="52" r="4" fill="#ff00c8" />
        <circle cx="90" cy="40" r="4" fill="#00ffea" />
        {/* Beam */}
        <ellipse cx="60" cy="70" rx="16" ry="18" fill="url(#beamGradient)" opacity="0.5" />
        <defs>
          <radialGradient id="beamGradient" cx="0.5" cy="0.2" r="1" fx="0.5" fy="0.2">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#00ffea" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default UFO;
