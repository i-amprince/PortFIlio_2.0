import React, { useEffect, useState, useRef } from 'react'; // <-- Import useRef
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import './index.css';
import AppWrapper from './App';
import App2 from './App2';
import App3 from './App3';
import Project from './Section/Project';
import App5 from './App5';
import reportWebVitals from './reportWebVitals';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/education', label: 'Education & Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' }
];

const getPathIndex = (pathname) => {
  const index = navLinks.findIndex(link => link.path === pathname);
  return index === -1 ? 0 : index;
};

// --- Navbar (No changes needed) ---
function Navbar() {
  const location = useLocation();
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 2000,
      display: 'flex',
      justifyContent: 'center',
      gap: 32,
      padding: '1.2rem 0',
      background: '#fff',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.08)',
      borderRadius: '0 0 24px 24px',
      border: '1.5px solid #eaeaea',
      fontWeight: 600,
      fontSize: '1.1rem',
      transition: 'background 0.3s, box-shadow 0.3s',
    }}>
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          style={{
            color: location.pathname === link.path ? '#007bff' : '#222',
            textDecoration: 'none',
            borderBottom: location.pathname === link.path ? '2.5px solid #007bff' : '2.5px solid transparent',
            padding: '0.2rem 0.5rem',
            transition: 'all 0.2s',
            borderRadius: 2,
            background: location.pathname === link.path ? '#f5faff' : 'transparent',
            boxShadow: location.pathname === link.path ? '0 2px 8px #007bff22' : 'none',
          }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

// --- AnimatedRoutes (CORRECTED LOGIC) ---
function AnimatedRoutes() {
  const location = useLocation();

  // Key Change #1: Use a ref to store the previous index.
  // It's initialized once with the starting page's index.
  const prevPathIndexRef = useRef(getPathIndex(location.pathname));

  // The direction state remains, as changing it SHOULD trigger a re-render to update animations.
  const [direction, setDirection] = useState(1);

  // Key Change #2: The useEffect hook is now simpler and more reliable.
  useEffect(() => {
    const currentIndex = getPathIndex(location.pathname);
    const prevIndex = prevPathIndexRef.current; // Get the previous index from the ref

    if (currentIndex > prevIndex) {
      setDirection(1); // Moving forward
    } else if (currentIndex < prevIndex) {
      setDirection(-1); // Moving backward
    }
    // If indexes are the same, do nothing.

    // VERY IMPORTANT: Update the ref's '.current' value at the end of the effect.
    // This does NOT cause a re-render. It just sets the value for the *next* time this effect runs.
    prevPathIndexRef.current = currentIndex;
    
  }, [location.pathname]); // The effect now ONLY depends on the location changing.

  const pageVariants = {
    initial: {
      opacity: 0,
      x: direction === 1 ? '100vw' : '-100vw',
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    exit: {
      opacity: 0,
      zIndex: -1, // Make exiting page go behind entering page for a cleaner look
      x: direction === 1 ? '-100vw' : '100vw',
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };
  
  const pageStyle = {
    position: 'absolute',
    width: '100%',
  };

  return (
    <div style={{
      position: 'relative',
      marginTop: '90px',
      minHeight: 'calc(100vh - 90px)',
      width: '100%',
      overflow: 'hidden',
      zIndex: 1,
    }}>
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div key="home" style={pageStyle} variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <AppWrapper />
              </motion.div>
            }/>
            <Route path="/about" element={
              <motion.div key="about" style={pageStyle} variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <App2 />
              </motion.div>
            }/>
            <Route path="/education" element={
              <motion.div key="education" style={pageStyle} variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <App3 />
              </motion.div>
            }/>
            <Route path="/projects" element={
              <motion.div key="projects" style={pageStyle} variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Project />
              </motion.div>
            }/>
            <Route path="/contact" element={
              <motion.div key="contact" style={pageStyle} variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <App5 />
              </motion.div>
            }/>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}


// --- BodyScrollManager and Root Render (No changes needed) ---
function BodyScrollManager() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [location.pathname]);
  return null;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <BodyScrollManager />
      <div style={{ minHeight: '100vh' }}>
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  </React.StrictMode>
);

reportWebVitals();