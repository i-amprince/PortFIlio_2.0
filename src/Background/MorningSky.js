import React, { useMemo } from 'react';
import './MorningSky.css';
import CloudSVG from '../components/CloudSVG';
import ButterflySVG from '../components/ButterflySVG';
import FlowerSVG from '../components/FlowerSVG';

const MorningSky = () => {
  const clouds = useMemo(() =>
    Array.from({ length: 6 }).map(() => {
      const fromLeft = Math.random() > 0.5;
      return {
        top: Math.random() * 40 + 10,
        left: fromLeft ? -30 - Math.random() * 20 : 100 + Math.random() * 30,
        size: 60 + Math.random() * 80,
        delay: Math.random() * 10,
        duration: 25 + Math.random() * 25,
        direction: fromLeft ? 'right' : 'left',
      };
    }), []
  );

  const butterflies = useMemo(() =>
    Array.from({ length: 3 }).map(() => ({
      top: Math.random() * 40 + 20,
      delay: Math.random() * 8,
      duration: 20 + Math.random() * 15,
    })), []
  );

  const floatingFlowers = useMemo(() =>
    Array.from({ length: 5 }).map(() => ({
      left: Math.random() * 90 + 5,
      delay: Math.random() * 12,
      duration: 15 + Math.random() * 10,
    })), []
  );

  const dewdrops = useMemo(() =>
    Array.from({ length: 15 }).map(() => ({
      top: Math.random() * 70 + 20,
      left: Math.random() * 100,
      delay: Math.random() * 4,
    })), []
  );

  return (
    <div className="morning-sky-container">
      {/* Morning Sun with Rays */}
      <div className="morning-sun">
        <div className="sun-rays">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="sun-ray"></div>
          ))}
        </div>
      </div>

      {/* Morning Clouds */}
      {clouds.map((cloud, i) => (
        <div
          key={`morning-cloud-${i}`}
          className={`morning-cloud ${cloud.direction === 'left' ? 'drift-left' : 'drift-right'}`}
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

      {/* Butterflies */}
      {butterflies.map((butterfly, i) => (
        <div
          key={`butterfly-${i}`}
          className="butterfly"
          style={{
            top: `${butterfly.top}vh`,
            animationDelay: `${butterfly.delay}s`,
            animationDuration: `${butterfly.duration}s`,
          }}
        >
          <ButterflySVG />
        </div>
      ))}

      {/* Floating Flowers */}
      {floatingFlowers.map((flower, i) => (
        <div
          key={`flower-${i}`}
          className="floating-flower"
          style={{
            left: `${flower.left}vw`,
            animationDelay: `${flower.delay}s`,
            animationDuration: `${flower.duration}s`,
          }}
        >
          <FlowerSVG />
        </div>
      ))}

      {/* Dewdrops */}
      {dewdrops.map((drop, i) => (
        <div
          key={`dewdrop-${i}`}
          className="dewdrop"
          style={{
            top: `${drop.top}vh`,
            left: `${drop.left}vw`,
            animationDelay: `${drop.delay}s`,
          }}
        />
      ))}

      {/* Morning Mist */}
      <div className="morning-mist"></div>
    </div>
  );
};

export default MorningSky;