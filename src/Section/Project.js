import React, { useEffect, useRef } from 'react';
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
        title: 'Movie&BAE',
        description: 'An interactive and real-time booking platform designed for effortless browsing and instant reservations, ensuring a smooth and engaging user experience from selection to confirmation.',
        image: IMG7,
        link: 'https://github.com/i-amprince/Movie-Bae',
        tech: ['MERN', 'Socket.io', 'Nodemailer']
    },
    {
        title: 'Cadence Code',
        description: 'A collaborative real-time code editor built with React, supporting multiple users with live syntax highlighting, seamless editing, and instant synchronization.',
        image: IMG1,
        link: 'https://github.com/i-amprince/CadenceCode',
        tech: ['MERN', 'Socket.io', 'WebRTC']
    },
    {
        title: 'Chitzy',
        description: 'A modern chatting application featuring clean UI design, real-time messaging capabilities, and intuitive user interactions for seamless communication.',
        image: IMG2,
        link: 'https://github.com/i-amprince/Chitzy',
        tech: ['MERN', 'Socket.io']
    },
    {
        title: 'AI Agent for Lunar Lander',
        description: 'An advanced reinforcement learning project implementing PSO algorithm to train an intelligent agent for mastering the classic Lunar Lander game environment.',
        image: IMG4,
        link: 'https://github.com/i-amprince/LUNAR_LANDER',
        tech: ['Python', 'TensorFlow', 'OpenAI Gym']
    },
    {
        title: "Hisaab Kitaab - Expense Tracker",
        description: 'A comprehensive expense tracking application with intuitive financial management tools, spending visualization, and detailed analytics for better budget control.',
        image: IMG6,
        link: 'https://github.com/i-amprince/Hisaab_Kitaab',
        tech: ['React', 'MongoDB']
    },
    {
        title: "NotesLuxo - Advanced Notes App",
        description: 'A feature-rich note-taking application with rich text editing capabilities, organized categorization, and seamless cross-platform synchronization.',
        image: IMG3,
        link: 'https://github.com/i-amprince/Notes_App',
        tech: ['React', 'MongoDB', 'Node.js']
    },
    {
        title: "Sorting Algorithm Visualizer",
        description: 'An interactive educational tool providing step-by-step visualization of various sorting algorithms with performance comparisons and detailed explanations.',
        image: IMG5,
        link: 'https://github.com/i-amprince/Sort_Visualiser',
        tech: ['JavaScript', 'HTML5', 'CSS3']
    }
];

const Projects = () => {
    const timelineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            },
            { threshold: 0.1 }
        );

        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item) => {
            observer.observe(item);
        });

        return () => {
            timelineItems.forEach((item) => {
                observer.unobserve(item);
            });
        };
    }, []);

    return (
        <section id="projects" className="projects-section">
            <ShootingStars />
            <UFOHeader/>
            
            <div className="timeline-section" ref={timelineRef}>
                <div className="timeline-line"></div>
                
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
                        style={{ animationDelay: `${idx * 0.2}s` }}
                    >
                        <div className="timeline-thread"></div>
                        <div className="timeline-node"></div>
                        <div className="timeline-content">
                            <div className="laptop-frame">
                                <img src={laptop} alt="Laptop Frame" className="laptop-img" />
                                <img 
                                    src={project.image} 
                                    alt={`${project.title} Screenshot`} 
                                    className="project-screenshot" 
                                />
                            </div>
                            <div className="project-details">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                
                                {/* Technology Stack */}
                                {project.tech && (
                                    <div className="tech-stack">
                                        {project.tech.map((tech, techIdx) => (
                                            <span key={techIdx} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="project-link"
                                    aria-label={`View ${project.title} project`}
                                >
                                    <span>View Project</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Enhanced Arrow with Gradient */}
                <div className="timeline-arrow">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                                <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="url(#arrowGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                
                {/* Enhanced GitHub Footer */}
                <div className="github-footer">
                    <a 
                        href="https://github.com/i-amprince" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="github-link"
                        aria-label="Visit my GitHub profile"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>Explore More on GitHub</span>
                    </a>
                    <p>
                        This curated collection represents my passion for creating innovative solutions. 
                        Visit my GitHub to explore the complete codebase, contributions, and ongoing experiments 
                        that drive my development journey.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Projects;