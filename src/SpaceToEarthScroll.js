import React, { useRef, useState } from 'react';
import App from './App';
import AboutMe from './Section/AboutMe';
import ShootingStar from './Background/ShootingStar';
import DaySky from './Background/DaySky';
import './App.css';

const NIGHT_HEIGHT = 100;
const GRADIENT_HEIGHT = 90; // Increased for longer transition
const DAY_HEIGHT = 100;
const TOTAL_HEIGHT = NIGHT_HEIGHT + GRADIENT_HEIGHT + DAY_HEIGHT;

const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

const SpaceToEarthScroll = () => {
  const scrollRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Listen to scroll position
  const handleScroll = () => {
    if (scrollRef.current) {
      setScrollY(scrollRef.current.scrollTop);
    }
  };

  // Handles the scroll animation
  const handleAboutClick = () => {
    if (scrollRef.current) {
      const target = (NIGHT_HEIGHT + GRADIENT_HEIGHT) * window.innerHeight / 100;
      scrollRef.current.scrollTo({
        top: target,
        behavior: 'smooth',
      });
      setTimeout(() => setScrolled(true), 2000); // After scroll, show AboutMe
    }
  };

  // Handles reverse scroll
  const handleBackToSpace = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      setTimeout(() => setScrolled(false), 2000);
    }
  };

  // Calculate fade for backgrounds
  const nightFade = 1 - clamp(scrollY / (NIGHT_HEIGHT * window.innerHeight / 100), 0, 1);
  const dayFade = clamp((scrollY - (NIGHT_HEIGHT * window.innerHeight / 100)) / (DAY_HEIGHT * window.innerHeight / 100), 0, 1);

  return (
    <div
      ref={scrollRef}
      style={{
        height: '100vh',
        width: '100vw',
        overflow: scrolled ? 'hidden' : 'auto',
        scrollBehavior: 'smooth',
        position: 'relative',
      }}
      onScroll={handleScroll}
      tabIndex={-1}
    >
      {/* Fixed gradient background at the very back */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -2, pointerEvents: 'none' }}>
        <div style={{ width: '100vw', height: '100vh', background: 'linear-gradient(to bottom, #0a0a23 0%, #0a0a23 15%, #223a70 35%, #87ceeb 65%, #e6f7ff 85%, #fff 100%)' }} />
      </div>
      {/* Fixed animated backgrounds above the gradient */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: -1 }}>
        <div style={{ opacity: nightFade, transition: 'opacity 0.5s linear', width: '100%', height: '100%' }}>
          <ShootingStar />
        </div>
        <div style={{ opacity: dayFade, transition: 'opacity 0.5s linear', width: '100%', height: '100%' }}>
          <DaySky />
        </div>
      </div>
      {/* Tall invisible container for scroll effect */}
      <div style={{ height: `${TOTAL_HEIGHT}vh`, width: '100vw', position: 'relative', zIndex: 1 }}>
        {/* App content at top (night only) */}
        <div style={{ height: `${NIGHT_HEIGHT}vh`, width: '100vw', position: 'relative' }}>
          {!scrolled && nightFade > 0.1 && (
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
              <App onAboutClick={handleAboutClick} />
            </div>
          )}
        </div>
        {/* Spacer for gradient */}
        <div style={{ height: `${GRADIENT_HEIGHT}vh`, width: '100vw' }} />
        {/* AboutMe at bottom (day only) */}
        <div style={{ height: `${DAY_HEIGHT}vh`, width: '100vw', position: 'relative' }}>
          {scrolled && dayFade > 0.1 && (
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
              <AboutMe onBack={handleBackToSpace} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpaceToEarthScroll;
