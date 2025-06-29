import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import Project from './Section/Project';
import App5 from './App5';
import reportWebVitals from './reportWebVitals';
import { useEffect } from 'react';

const transitions = [
  // App: fade in from bottom
  {
    initial: { opacity: 0, y: 60, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.4, 0.2, 0.2, 1] } },
    exit: { opacity: 0, y: -40, scale: 0.98, transition: { duration: 0.4, ease: [0.4, 0.2, 0.2, 1] } }
  },
  // App2: fade in from lefta
  {
    initial: { opacity: 0, x: -80, scale: 0.98 },
    animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: [0.4, 0.2, 0.2, 1] } },
    exit: { opacity: 0, x: 80, scale: 0.98, transition: { duration: 0.4, ease: [0.4, 0.2, 0.2, 1] } }
  },
  // App3: flip in Y
  {
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0, transition: { duration: 0.6, ease: [0.4, 0.2, 0.2, 1] } },
    exit: { opacity: 0, rotateY: -90, transition: { duration: 0.5, ease: [0.4, 0.2, 0.2, 1] } }
  },
  // Project: fade in from right
  {
    initial: { opacity: 0, x: 80, scale: 0.98 },
    animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: [0.4, 0.2, 0.2, 1] } },
    exit: { opacity: 0, x: -80, scale: 0.98, transition: { duration: 0.4, ease: [0.4, 0.2, 0.2, 1] } }
  },
  // App5: scale up and fade
  {
    initial: { opacity: 0, scale: 0.92 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.4, 0.2, 0.2, 1] } },
    exit: { opacity: 0, scale: 1.08, transition: { duration: 0.4, ease: [0.4, 0.2, 0.2, 1] } }
  }
];

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/education', label: 'Education & Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' }
];

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
      {navLinks.map((link, i) => (
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

// Custom transition for App <-> App2: both slide left and crossfade
const slideLeftCrossFade = {
  initial: { opacity: 0, x: 120 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.4, 0.2, 0.2, 1] } },
  exit: { opacity: 0, x: -120, transition: { duration: 0.7, ease: [0.4, 0.2, 0.2, 1] } }
};

function AnimatedRoutes() {
  const location = useLocation();
  
  // Map paths to transition indices
  const getTransitionIndex = (pathname) => {
    switch(pathname) {
      case '/': return 0;
      case '/about': return 1;
      case '/education': return 2;
      case '/projects': return 3;
      case '/contact': return 4;
      default: return 0;
    }
  };
  
  return (
    <div style={{ 
      marginTop: '90px',
      minHeight: 'calc(100vh - 90px)',
      position: 'relative',
      zIndex: 1
    }}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div 
              key="home"
              {...slideLeftCrossFade}
            >
              <App />
            </motion.div>
          } />
          <Route path="/about" element={
            <motion.div 
              key="about"
              {...slideLeftCrossFade}
            >
              <App2 />
            </motion.div>
          } />
          <Route path="/education" element={
            <motion.div 
              key="education"
              style={{ perspective: 1200 }} 
              {...transitions[2]}
            >
              <App3 />
            </motion.div>
          } />
          <Route path="/projects" element={
            <motion.div 
              key="projects"
              {...transitions[3]}
            >
              <Project />
            </motion.div>
          } />
          <Route path="/contact" element={
            <motion.div 
              key="contact"
              {...transitions[4]}
            >
              <App5 />
            </motion.div>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

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