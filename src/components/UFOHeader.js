import React from 'react';

// Usage example in your Projects component:
// Replace: <h2 className="projects-title">Projects</h2>
// With: <UFOHeader title="PROJECTS" />

const UFOHeader = ({ title = "PROJECTS" }) => {
  return (
    <div className="ufo-header-container">
      {/* UFO SVG */}
      <div className="ufo-wrapper">
        <svg className="ufo-svg" width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* UFO Dome */}
          <ellipse cx="60" cy="25" rx="32" ry="16" fill="url(#domeGradient)" stroke="#00bfff" strokeWidth="2" />
          {/* UFO Body */}
          <ellipse cx="60" cy="42" rx="55" ry="20" fill="url(#bodyGradient)" stroke="#444" strokeWidth="3" />
          {/* UFO Lights */}
          <circle cx="25" cy="42" r="5" fill="#fffb00">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="45" cy="55" r="5" fill="#00ffea">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="75" cy="55" r="5" fill="#ff00c8">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite"/>
          </circle>
          <circle cx="95" cy="42" r="5" fill="#00ffea">
            <animate attributeName="opacity" values="1;0.2;1" dur="2.2s" repeatCount="indefinite"/>
          </circle>
          
          {/* Gradients */}
          <defs>
            <linearGradient id="domeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e6f3ff" />
              <stop offset="100%" stopColor="#b3e6ff" />
            </linearGradient>
            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#bbb" />
              <stop offset="50%" stopColor="#888" />
              <stop offset="100%" stopColor="#555" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Light Beam Container */}
      <div className="light-beam">
        {/* Animated particles in the beam */}
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>
      
      {/* Header Text - Outside the beam container */}
      <h1 className="beam-title">{title}</h1>

      <style jsx>{`
        .ufo-header-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          padding: 2rem 0;
          margin-bottom: 3rem;
        }

        .ufo-wrapper {
          position: relative;
          z-index: 10;
          animation: ufoFloat 4s ease-in-out infinite;
        }

        .ufo-svg {
          filter: drop-shadow(0 0 15px #00ffea) drop-shadow(0 0 30px rgba(0, 255, 234, 0.3));
        }

        .light-beam {
          position: relative;
          width: 320px;
          height: 180px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(0, 255, 234, 0.7) 15%,
            rgba(255, 251, 0, 0.6) 30%,
            rgba(0, 255, 234, 0.4) 50%,
            rgba(255, 255, 255, 0.3) 70%,
            rgba(0, 255, 234, 0.1) 90%,
            transparent 100%
          );
          clip-path: polygon(40% 0%, 60% 0%, 90% 100%, 10% 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: -10px;
          animation: beamPulse 3s ease-in-out infinite;
        }

        .beam-title {
          position: absolute;
          top: 70%;
          left: 50%;
          transform: translate(-50%, -50%) rotateX(15deg);
          font-size: 2.8rem;
          font-weight: 900;
          color: #00ffea;
          text-shadow: 
            0 0 15px rgba(0, 255, 234, 1),
            0 0 25px rgba(0, 255, 234, 0.8),
            0 0 35px rgba(255, 251, 0, 0.6),
            0 0 45px rgba(0, 255, 234, 0.4),
            2px 2px 0px rgba(0, 0, 0, 0.9),
            -2px -2px 0px rgba(0, 0, 0, 0.9);
          letter-spacing: 4px;
          text-align: center;
          white-space: nowrap;
          animation: textGlow 2s ease-in-out infinite alternate;
          z-index: 20;
          filter: drop-shadow(0 0 15px #00ffea) drop-shadow(0 0 25px rgba(0, 255, 234, 0.5));
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: #fff;
          border-radius: 50%;
          animation: particleFloat 4s linear infinite;
          box-shadow: 0 0 6px #00ffea;
        }

        .particle-1 {
          left: 30%;
          animation-delay: 0s;
          animation-duration: 3s;
        }

        .particle-2 {
          left: 70%;
          animation-delay: 1s;
          animation-duration: 4s;
        }

        .particle-3 {
          left: 50%;
          animation-delay: 2s;
          animation-duration: 3.5s;
        }

        .particle-4 {
          left: 25%;
          animation-delay: 0.5s;
          animation-duration: 4.5s;
        }

        @keyframes ufoFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-8px) rotate(1deg);
          }
          50% {
            transform: translateY(-4px) rotate(0deg);
          }
          75% {
            transform: translateY(-12px) rotate(-1deg);
          }
        }

        @keyframes beamPulse {
          0%, 100% {
            opacity: 0.8;
            transform: scaleX(1);
          }
          50% {
            opacity: 1;
            transform: scaleX(1.05);
          }
        }

        @keyframes textGlow {
          0% {
            text-shadow: 
              0 0 15px rgba(0, 255, 234, 1),
              0 0 25px rgba(0, 255, 234, 0.8),
              0 0 35px rgba(255, 251, 0, 0.6),
              0 0 45px rgba(0, 255, 234, 0.4),
              2px 2px 0px rgba(0, 0, 0, 0.9),
              -2px -2px 0px rgba(0, 0, 0, 0.9);
            filter: drop-shadow(0 0 15px #00ffea) drop-shadow(0 0 25px rgba(0, 255, 234, 0.5));
          }
          100% {
            text-shadow: 
              0 0 20px rgba(0, 255, 234, 1),
              0 0 30px rgba(0, 255, 234, 1),
              0 0 40px rgba(255, 251, 0, 0.8),
              0 0 50px rgba(0, 255, 234, 0.6),
              2px 2px 0px rgba(0, 0, 0, 0.9),
              -2px -2px 0px rgba(0, 0, 0, 0.9);
            filter: drop-shadow(0 0 20px #00ffea) drop-shadow(0 0 30px rgba(0, 255, 234, 0.7));
          }
        }

        @keyframes particleFloat {
          0% {
            top: 10%;
            opacity: 0;
            transform: translateX(0px);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 90%;
            opacity: 0;
            transform: translateX(20px);
          }
        }

        /* Responsive Design */
        @media screen and (max-width: 768px) {
          .beam-title {
            font-size: 2.2rem;
            letter-spacing: 2px;
          }
          
          .light-beam {
            width: 280px;
            height: 150px;
            clip-path: polygon(35% 0%, 65% 0%, 85% 100%, 15% 100%);
          }
        }

        @media screen and (max-width: 480px) {
          .beam-title {
            font-size: 1.8rem;
            letter-spacing: 1px;
          }
          
          .light-beam {
            width: 240px;
            height: 130px;
            clip-path: polygon(30% 0%, 70% 0%, 80% 100%, 20% 100%);
          }
          
          .ufo-svg {
            width: 100px;
            height: 66px;
          }
        }
      `}</style>
    </div>
  );
};

export default UFOHeader;