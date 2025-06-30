import React, { useState } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside or on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 1.5rem',
        background: '#fff',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.08)',
        borderRadius: '0 0 24px 24px',
        border: '1.5px solid #eaeaea',
        fontWeight: 600,
        fontSize: '1.1rem',
        transition: 'background 0.3s, box-shadow 0.3s',
        height: '70px', // Fixed height for consistency
      }}>
        
        {/* Logo/Brand */}
        <div style={{ 
          fontSize: '1.3rem', 
          fontWeight: 700, 
          color: '#007bff',
          display: 'block'
        }}>
          Portfolio
        </div>

        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
        }} className="desktop-nav">
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
                whiteSpace: 'nowrap',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          style={{
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'space-around',
            width: '2rem',
            height: '2rem',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            zIndex: 2001,
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <span style={{
            width: '2rem',
            height: '0.25rem',
            background: '#007bff',
            borderRadius: '10px',
            transition: 'all 0.3s linear',
            position: 'relative',
            transformOrigin: '1px',
            transform: isMenuOpen ? 'rotate(45deg)' : 'rotate(0)',
          }} />
          <span style={{
            width: '2rem',
            height: '0.25rem',
            background: '#007bff',
            borderRadius: '10px',
            transition: 'all 0.3s linear',
            position: 'relative',
            transformOrigin: '1px',
            opacity: isMenuOpen ? 0 : 1,
            transform: isMenuOpen ? 'translateX(20px)' : 'translateX(0)',
          }} />
          <span style={{
            width: '2rem',
            height: '0.25rem',
            background: '#007bff',
            borderRadius: '10px',
            transition: 'all 0.3s linear',
            position: 'relative',
            transformOrigin: '1px',
            transform: isMenuOpen ? 'rotate(-45deg)' : 'rotate(0)',
          }} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                background: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1998,
              }}
              onClick={closeMenu}
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '100%',
                height: '100vh',
                background: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(10px)',
                zIndex: 1999,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem',
                fontSize: '1.5rem',
                fontWeight: 600,
              }}
              className="mobile-menu"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    onClick={closeMenu}
                    style={{
                      color: location.pathname === link.path ? '#007bff' : '#222',
                      textDecoration: 'none',
                      padding: '1rem 2rem',
                      borderRadius: '12px',
                      background: location.pathname === link.path ? '#f5faff' : 'transparent',
                      border: location.pathname === link.path ? '2px solid #007bff' : '2px solid transparent',
                      transition: 'all 0.2s',
                      display: 'block',
                      textAlign: 'center',
                      minWidth: '200px',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Global CSS for responsive behavior and About component fixes */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          
          /* Fix About component for mobile */
          .about-container {
            padding: 1rem 0.75rem 2rem 0.75rem !important;
            height: auto !important;
            min-height: calc(100vh - 70px) !important;
            margin-top: 0 !important;
          }
          
          .about-card {
            padding: 1.5rem !important;
            margin-top: 0 !important;
          }
          
          .about-title {
            font-size: 1.75rem !important;
            margin-bottom: 1rem !important;
          }
          
          .about-description {
            font-size: 0.95rem !important;
            margin-bottom: 1rem !important;
          }
          
          .about-content-wrapper {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
          
          .working-illustration {
            max-width: 280px !important;
            height: auto !important;
          }
          
          .mern-logos-row {
            gap: 1rem !important;
            padding: 0.75rem !important;
          }
          
          .mern-logo {
            height: 2.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .about-container {
            padding: 0.5rem 0.5rem 1.5rem 0.5rem !important;
          }
          
          .about-card {
            padding: 1rem !important;
          }
          
          .about-title {
            font-size: 1.5rem !important;
          }
          
          .about-description {
            font-size: 0.9rem !important;
          }
          
          .working-illustration {
            max-width: 250px !important;
          }
          
          .mern-logo {
            height: 2rem !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
          
          /* Ensure About component has proper spacing on desktop */
          .about-container {
            padding: 2rem !important;
          }
        }
        
        /* Fix navbar overlap with content */
        .about-container {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div style={{ 
      marginTop: '70px', // Reduced from 90px to match navbar height
      minHeight: 'calc(100vh - 70px)',
      position: 'relative',
      zIndex: 1
    }}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div 
              key="home"
              {...fadeTransition}
              style={{ marginTop: location.pathname === '/' ? '-70px' : '0' }} // Home page can overlap navbar
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