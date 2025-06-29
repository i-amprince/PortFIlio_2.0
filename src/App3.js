import React, { useState } from 'react';
import Education from './Section/Education';
import Skills from './Section/Skills';

const App3 = () => {
  const [activeSection, setActiveSection] = useState('education');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleSection = (section) => {
    if (section === activeSection || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(section);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: activeSection === 'education' 
        ? 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' 
        : 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      transition: 'background 0.5s ease',
      position: 'relative'
    }}>
      {/* Navigation */}
      <div style={{
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        zIndex: 1000,
        display: 'flex',
        gap: '0.5rem',
        background: '#fff',
        borderRadius: '30px',
        padding: '0.5rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        border: '2px solid #f8f9fa'
      }}>
        <button
          onClick={() => toggleSection('education')}
          style={{
            background: activeSection === 'education' 
              ? 'linear-gradient(135deg, #ff7b54, #ff9068)' 
              : 'transparent',
            color: activeSection === 'education' ? '#fff' : '#2c3e50',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '25px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transform: activeSection === 'education' ? 'scale(1.05)' : 'scale(1)',
            boxShadow: activeSection === 'education' 
              ? '0 4px 12px rgba(255, 123, 84, 0.3)' 
              : 'none'
          }}
          onMouseEnter={(e) => {
            if (activeSection !== 'education') {
              e.target.style.background = '#f8f9fa';
              e.target.style.transform = 'scale(1.02)';
            }
          }}
          onMouseLeave={(e) => {
            if (activeSection !== 'education') {
              e.target.style.background = 'transparent';
              e.target.style.transform = 'scale(1)';
            }
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>🎓</span>
          Education
        </button>

        <button
          onClick={() => toggleSection('skills')}
          style={{
            background: activeSection === 'skills' 
              ? 'linear-gradient(135deg, #667eea, #764ba2)' 
              : 'transparent',
            color: activeSection === 'skills' ? '#fff' : '#2c3e50',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '25px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transform: activeSection === 'skills' ? 'scale(1.05)' : 'scale(1)',
            boxShadow: activeSection === 'skills' 
              ? '0 4px 12px rgba(102, 126, 234, 0.3)' 
              : 'none'
          }}
          onMouseEnter={(e) => {
            if (activeSection !== 'skills') {
              e.target.style.background = '#f8f9fa';
              e.target.style.transform = 'scale(1.02)';
            }
          }}
          onMouseLeave={(e) => {
            if (activeSection !== 'skills') {
              e.target.style.background = 'transparent';
              e.target.style.transform = 'scale(1)';
            }
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>💻</span>
          Skills
        </button>
      </div>

      {/* Content */}
      <div style={{
        opacity: isTransitioning ? 0.7 : 1,
        transform: isTransitioning ? 'scale(0.98)' : 'scale(1)',
        transition: 'opacity 0.2s ease, transform 0.2s ease'
      }}>
        {activeSection === 'education' && <Education />}
        {activeSection === 'skills' && <Skills />}
      </div>

      {/* Simple Status Indicator */}
      <div style={{
        position: 'fixed',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        background: '#fff',
        borderRadius: '20px',
        padding: '0.75rem 1.5rem',
        boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.9rem',
        color: '#2c3e50',
        fontWeight: '500',
        border: '2px solid #f8f9fa'
      }}>
        <span style={{ 
          fontSize: '1.2rem',
          animation: 'bounce 2s infinite'
        }}>
          {activeSection === 'education' ? '🎓' : '💻'}
        </span>
        {activeSection === 'education' ? 'Education' : 'Skills'}
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-5px);
          }
          60% {
            transform: translateY(-3px);
          }
        }
      `}</style>
    </div>
  );
};

export default App3;