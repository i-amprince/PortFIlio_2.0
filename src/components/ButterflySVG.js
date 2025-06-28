import React from 'react';

const ButterflySVG = () => (
  <svg width="120" height="100" viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="topWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFE4B5" stopOpacity="0.9" />
        <stop offset="30%" stopColor="#FFA07A" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#FFDAB9" stopOpacity="0.7" />
      </linearGradient>
      <linearGradient id="bottomWingGradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#E0BBFF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#B0E0E6" stopOpacity="0.7" />
      </linearGradient>
    </defs>
    {/* Top left wing */}
    <path d="M60,50 Q30,10 10,40 Q30,60 60,50" fill="url(#topWingGradient)" />
    {/* Top right wing */}
    <path d="M60,50 Q90,10 110,40 Q90,60 60,50" fill="url(#topWingGradient)" />
    {/* Bottom left wing */}
    <path d="M60,50 Q35,80 10,70 Q30,60 60,50" fill="url(#bottomWingGradient)" />
    {/* Bottom right wing */}
    <path d="M60,50 Q85,80 110,70 Q90,60 60,50" fill="url(#bottomWingGradient)" />
    {/* Body */}
    <ellipse cx="60" cy="50" rx="6" ry="22" fill="#333" />
    {/* Antennae */}
    <path d="M60,28 Q58,18 50,15" stroke="#333" strokeWidth="2" fill="none" />
    <path d="M60,28 Q62,18 70,15" stroke="#333" strokeWidth="2" fill="none" />
  </svg>
);

export default ButterflySVG;