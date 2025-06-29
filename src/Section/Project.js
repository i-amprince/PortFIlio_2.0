import React from 'react';
import ShootingStars from '../Background/ShootingStar';
import './Project.css';
import laptop from '../Images/Laptop/Laptopp.png';

import IMG1 from '../Images/ProjectImages/Project1.png';
import IMG2 from '../Images/ProjectImages/Project2.png';
import IMG3 from '../Images/ProjectImages/Project3.png';
import IMG4 from '../Images/ProjectImages/Project4.png';
import IMG5 from '../Images/ProjectImages/Project5.png';

const projects = [
  {
    title: 'Personal Portfolio',
    description: 'React-based personal portfolio showcasing skills and projects with dynamic sections.',
    image: IMG1,
    link: '#',
  },
  {
    title: 'Weather App',
    description: 'Weather forecast application using OpenWeatherMap API with elegant UI.',
    image: IMG2,
    link: '#',
  },
  {
    title: 'Chat Application',
    description: 'Real-time chat app with Socket.io and Node.js backend.',
    image: IMG3,
    link: '#',
  },
  {
    title: "Any App",
    description: 'Just Something Amazing.',
    image: IMG4,
    link: '#',

  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <ShootingStars />
      <h2 className="projects-title">Projects</h2>
      <div className="timeline-section">
        <div className="timeline-line"></div>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-thread"></div>
            <div className="timeline-node"></div>
            <div className="timeline-content">
              <div className="laptop-frame">
                <img src={laptop} alt="Laptop" className="laptop-img" />
                <img src={project.image} alt={project.title} className="project-screenshot" />
              </div>
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
              </div>
            </div>
          </div>
        ))}

        {/* --- NEW CONTENT STARTS HERE --- */}
        
        {/* Arrow to guide the user's eye downwards */}
        <div className="timeline-arrow">
          <svg viewBox="0 0 24 24">
            <defs>
              <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#b3b3ff', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#fff', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path d="M12 21l-12-18h24z" transform="rotate(180 12 12)" />
          </svg>
        </div>
        
        {/* GitHub Footer Section with Button and Paragraph */}
        <div className="github-footer">
          <a 
             href="https://github.com/your-username" /* <-- IMPORTANT: Replace with your link */
             target="_blank" 
             rel="noopener noreferrer" 
             className="github-link"
          >
            Check Out More on GitHub
          </a>
          <p>
            This is a curated selection of my work. For a deeper dive into my code, 
            contributions, and other experiments, my GitHub is the place to be.
          </p>
        </div>
        
        {/* --- NEW CONTENT ENDS HERE --- */}

      </div>
    </section>
  );
};

export default Projects;