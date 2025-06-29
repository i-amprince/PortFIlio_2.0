import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import App from './App';
import App2 from './App2';
import ShootingStar from './Background/ShootingStar';
import DaySky from './Background/DaySky';

const bgVariants = {
  initial: { opacity: 1, y: 0 },
  fadeOut: { opacity: 0, y: 60, transition: { duration: 1.2, ease: 'easeInOut' } },
  fadeIn: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeInOut' } },
};

const contentVariants = {
  initial: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.7 } },
  enter: { opacity: 1, transition: { duration: 0.7, delay: 0.5 } },
};

const AnimatedAppSwitcher = () => {
  const [showApp2, setShowApp2] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Night Sky Background */}
      <AnimatePresence>
        {!showApp2 && (
          <motion.div
            key="night-bg"
            initial="initial"
            animate={showApp2 ? 'fadeOut' : 'initial'}
            exit="fadeOut"
            variants={bgVariants}
            style={{ position: 'fixed', inset: 0, zIndex: 0 }}
          >
            <ShootingStar />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Day Sky Background */}
      <AnimatePresence>
        {showApp2 && (
          <motion.div
            key="day-bg"
            initial="fadeOut"
            animate="fadeIn"
            exit="fadeOut"
            variants={bgVariants}
            style={{ position: 'fixed', inset: 0, zIndex: 0 }}
          >
            <DaySky />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Foreground Content */}
      <AnimatePresence mode="wait">
        {!showApp2 ? (
          <motion.div
            key="app"
            initial="initial"
            animate="initial"
            exit="exit"
            variants={contentVariants}
            style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 2 }}
          >
            <App onAboutClick={() => setShowApp2(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="app2"
            initial="exit"
            animate="enter"
            exit="exit"
            variants={contentVariants}
            style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 2 }}
          >
            <App2 />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedAppSwitcher;
