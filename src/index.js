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

// Simple fade transition for all routes
const fadeTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  exit: { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
};

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

function AnimatedRoutes() {
  const location = useLocation();
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
              {...fadeTransition}
            >
              <App />
            </motion.div>
          } />
          <Route path="/about" element={
            <motion.div 
              key="about"
              {...fadeTransition}
            >
              <App2 />
            </motion.div>
          } />
          <Route path="/education" element={
            <motion.div 
              key="education"
              {...fadeTransition}
            >
              <App3 />
            </motion.div>
          } />
          <Route path="/projects" element={
            <motion.div 
              key="projects"
              {...fadeTransition}
            >
              <Project />
            </motion.div>
          } />
          <Route path="/contact" element={
            <motion.div 
              key="contact"
              {...fadeTransition}
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