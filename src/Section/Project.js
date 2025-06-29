import React from 'react';
import ShootingStars from '../Background/ShootingStar';
import './Project.css';
import laptop from '../Images/Laptop/Laptopp.png';
import UFOHeader from '../components/UFOHeader';

import IMG1 from '../Images/ProjectImages/Project1.png';
import IMG2 from '../Images/ProjectImages/Project2.png';
import IMG3 from '../Images/ProjectImages/Project3.png';
import IMG4 from '../Images/ProjectImages/Project4.png';
import IMG5 from '../Images/ProjectImages/Project5.png';
import IMG6 from '../Images/ProjectImages/Project6.png';
import IMG7 from '../Images/ProjectImages/Project7.png';

const projects = [
    {
        title: 'Personal Portfolio',
        description: 'A visually dynamic React-based portfolio website featuring animated backgrounds, interactive sections, and a showcase of my skills and projects.',
        image: IMG7,
        link: 'https://github.com/i-amprince/PortFIlio_2.0',
    },
  {
    title: 'Cadence Code',
    description: 'A collaborative code editor built with React, supporting real-time editing and syntax highlighting for multiple users.',
    image: IMG1,
    link: 'https://github.com/i-amprince/CadenceCode',
  },
  {
    title: 'Chitzy',
    description: 'An interesting Chatting Application with modern and Clean UI, to interact with others with fun.',
    image: IMG2,
    link: 'https://github.com/i-amprince/Chitzy',
  },
  {
    title: 'AI Agent trained for Lunar Lander Game',
    description: 'A reinforcement learning project where an AI agent is trained to master the classic Lunar Lander game using PSO algorithm and RL.',
    image: IMG4,
    link: 'https://github.com/i-amprince/LUNAR_LANDER',
  },
  {
    title: "Hisaab Kitaab App (An Expense Tracker App)",
    description: 'A user-friendly expense tracker app to manage daily finances, visualize spending.',
    image: IMG6,
    link: 'https://github.com/i-amprince/Hisaab_Kitaab',
  },
  {
    title: "NotesLuxo (Notes Taking App)",
    description: 'A feature-rich note-taking app with support for rich text.',
    image: IMG3,
    link: 'https://github.com/i-amprince/Notes_App',
  },
  {
    title: "Sorting Algorithm Visualiser",
    description: 'An interactive tool to visualize and compare different sorting algorithms step-by-step for educational purposes.',
    image: IMG5,
    link: 'https://github.com/i-amprince/Sort_Visualiser'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <ShootingStars />
      <UFOHeader/>
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
             href="https://github.com/i-amprince" /* <-- IMPORTANT: Replace with your link */
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