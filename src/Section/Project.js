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
];

const Projects = () => {
  return (
    <>
      <ShootingStars />
      <div className="timeline-section">
        {/* === MAIN TITLE ADDED HERE === */}
        <h2 className="projects-title">Projects</h2>

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

        {/* === GITHUB FOOTER ADDED HERE === */}
        <div className="github-footer">
            <p>For a deeper dive into my work and collaborations, feel free to explore my GitHub profile.</p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="github-link">
                View All Projects on GitHub
            </a>
        </div>
      </div>
    </>
  );
};

export default Projects;