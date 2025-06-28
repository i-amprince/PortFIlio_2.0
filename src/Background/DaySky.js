import React, { useMemo } from 'react';
import './DaySky.css';
import CloudSVG from '../components/CloudSVG';
import HotAirBalloonSVG from '../components/HotAirBalloon';
import BirdSVG from '../components/BirdSVG';

const DaySky = () => {
  const clouds = useMemo(
    () =>
      Array.from({ length: 8 }).map(() => {
        const fromLeft = Math.random() > 0.5;
        return {
          top: Math.random() * 60,
          left: fromLeft ? -20 - Math.random() * 20 : 100 + Math.random() * 20,
          size: 80 + Math.random() * 100,
          delay: Math.random() * 8,
          duration: 20 + Math.random() * 20,
          direction: fromLeft ? 'right' : 'left',
        };
      }),
    []
  );

  const hotAirBalloons = useMemo(
    () =>
      Array.from({ length: 4 }).map(() => ({
        left: Math.random() * 100,
        size: 50 + Math.random() * 50,
        delay: Math.random() * 10,
        duration: 25 + Math.random() * 15,
        driftX: Math.random() * 20 - 10, // -10vw to +10vw horizontal drift
      })),
    []
  );

  const birds = useMemo(
    () =>
      Array.from({ length: 3 }).map(() => ({
        top: Math.random() * 40,
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 10,
      })),
    []
  );

  return (
    <div className="day-sky-container">
      <div className="day-sun" style={{ top: '5vh', left: '45vw' }} />

      {clouds.map((cloud, i) => (
        <div
          key={`cloud-${i}`}
          className={`day-cloud ${cloud.direction === 'left' ? 'move-left' : 'move-right'}`}
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

      {hotAirBalloons.map((balloon, i) => (
        <div
          key={`balloon-${i}`}
          className="hot-air-balloon"
          style={{
            left: `${balloon.left}vw`,
            width: `${balloon.size}px`,
            height: `${balloon.size * 1.2}px`,
            animationDelay: `${balloon.delay}s`,
            animationDuration: `${balloon.duration}s`,
            '--driftX': `${balloon.driftX}vw`,
          }}
        >
          <HotAirBalloonSVG />
        </div>
      ))}

      {birds.map((bird, i) => (
        <div
          key={`bird-${i}`}
          className="bird"
          style={{
            top: `${bird.top}vh`,
            animationDelay: `${bird.delay}s`,
            animationDuration: `${bird.duration}s`,
          }}
        >
          <BirdSVG />
        </div>
      ))}
    </div>
  );
};

export default DaySky;
