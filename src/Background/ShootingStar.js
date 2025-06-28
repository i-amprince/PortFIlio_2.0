import React, { useMemo, useEffect, useState } from 'react';
import './ShootingStars.css';

const ShootingStars = () => {
  const stars = useMemo(() =>
    Array.from({ length: 10 }).map(() => {
      const fromLeft = Math.random() < 0.3;
      return {
        fromLeft,
        left: Math.random() * 100,
        top: Math.random() * 60,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 3,
      };
    }), []
  );

  const staticStars = useMemo(() =>
    Array.from({ length: 120 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    })), []
  );

  const [sunKey, setSunKey] = useState(0); // Used to reset sun animation
  const [sunLeft, setSunLeft] = useState(`${Math.random() * 90}vw`);

  useEffect(() => {
    const interval = setInterval(() => {
      setSunKey(prev => prev + 1); // Trigger re-render for animation
      setSunLeft(`${Math.random() * 90}vw`); // New random position
    }, 10000); // Every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="shooting-stars-container">
      {/* Static background stars */}
      {staticStars.map((dot, i) => (
        <div
          key={`dot-${i}`}
          className="static-star"
          style={{
            top: `${dot.top}vh`,
            left: `${dot.left}vw`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}

      {/* Shooting stars */}
      {stars.map((star, index) => (
        <div
          key={index}
          className={`shooting-star ${star.fromLeft ? 'from-left' : 'from-top'}`}
          style={{
            top: star.fromLeft ? `${star.top}vh` : `-10vh`,
            left: star.fromLeft ? `-5vw` : `${star.left}vw`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {/* Sun Ray (triggered manually every 10s) */}
      <div
        key={`sun-${sunKey}`} // key forces restart of animation
        className="shooting-sun"
        style={{
          top: `-20vh`,
          left: sunLeft,
          animationDuration: `2s`,
        }}
      />

      {/* Moon */}
      <div className="moon" />
    </div>
  );
};

export default ShootingStars;
