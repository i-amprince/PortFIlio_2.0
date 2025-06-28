import React from 'react';

const SunSVG = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FF6347" />
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="40" fill="url(#sunGradient)" />
  </svg>
);

export default SunSVG;
