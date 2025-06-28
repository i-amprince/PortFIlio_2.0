import React, { useMemo } from 'react';
import './EveningSky.css';
import CloudSVG from '../components/CloudSVG';
import MountainSVG from '../components/MountainSVG';
import SunSVG from '../components/SunSVG';

const EveningSky = () => {
  const clouds = useMemo(() =>
    Array.from({ length: 5 }).map(() => ({
      top: Math.random() * 30,
      left: Math.random() > 0.5 ? -20 - Math.random() * 20 : 100 + Math.random() * 20,
      size: 60 + Math.random() * 60,
      delay: Math.random() * 6,
      duration: 30 + Math.random() * 20,
      direction: Math.random() > 0.5 ? 'right' : 'left',
    })), []
  );

  return (
    <div className="evening-sky-container">
      <div className="evening-sun">
        <SunSVG />
      </div>

      {clouds.map((cloud, i) => (
        <div
          key={`ecloud-${i}`}
          className={`evening-cloud ${cloud.direction === 'left' ? 'move-left' : 'move-right'}`}
          style={{
            top: `${cloud.top}vh`,
            left: `${cloud.left}vw`,
            width: `${cloud.size}px`,
            height: `${cloud.size * 0.6}px`,
            animationDelay: `${cloud.delay}s`,
            animationDuration: `${cloud.duration}s`,
          }}
        >
          <CloudSVG />
        </div>
      ))}

      <div className="mountains">
        <MountainSVG />
      </div>

      <div className="field"></div>
    </div>
  );
};

export default EveningSky;
