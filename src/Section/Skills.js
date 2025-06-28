import React, { useState } from 'react';
import './Skills.css';

const skillsData = {
  "Programming Languages": {
    icon: "💻",
    skills: [
      { name: "JavaScript", level: 80, category: "Advanced" },
      { name: "Python", level: 85, category: "Advanced" },
      { name: "Java", level: 70, category: "Intermediate" },
      { name: "C++", level: 85, category: "Advanced" },
      { name: "TypeScript", level: 30, category: "Beginner" },
      { name: "C", level: 70, category: "Intermediate" }
    ]
  },
  "Frontend Development": {
    icon: "🎨",
    skills: [
      { name: "React.js", level: 88, category: "Expert" },
      { name: "HTML5", level: 95, category: "Expert" },
      { name: "CSS3", level: 92, category: "Expert" },
      { name: "Tailwind CSS", level: 30, category: "Beginner" },
      { name: "Material-UI", level: 40, category: "Beginner" }
    ]
  },
  "Backend Development": {
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 70, category: "Intermediate" },
      { name: "Express.js", level: 70, category: "Intermediate" },
      { name: "MongoDB", level: 75, category: "Intermediate" },
      { name: "MySQL", level: 87, category: "Advanced" },
      { name: "REST APIs", level: 81, category: "Advanced" }
    ]
  },
  "Tools & Technologies": {
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 70, category: "Intermediate" },
      { name: "VS Code", level: 95, category: "Expert" },
      { name: "Docker", level: 45, category: "Beginner" },
      { name: "Postman", level: 70, category: "Intermediate" },
      { name: "Figma", level: 25, category: "Beginner" },
      { name: "Linux", level: 35, category: "Beginner" }
    ]
  },
  "Data Structures & Algorithms": {
    icon: "🔢",
    skills: [
      { name: "Arrays & Strings", level: 92, category: "Advanced" },
      { name: "Linked Lists", level: 88, category: "Advanced" },
      { name: "Trees & Graphs", level: 75, category: "Intermediate" },
      { name: "Dynamic Programming", level: 70, category: "Intermediate" },
      { name: "Sorting & Searching", level: 90, category: "Expert" },
      { name: "Hash Tables", level: 82, category: "Advanced" },
      { name: "Two Pointers Approach", level: 73, category: "Intermediate"},
    ]
  },
  "Soft Skills": {
    icon: "🤝",
    skills: [
      { name: "Problem Solving", level: 82, category: "Expert" },
      { name: "Team Collaboration", level: 65, category: "Beginner" },
      { name: "Communication", level: 50, category: "Beginner" },
      { name: "Leadership", level: 70, category: "Intermediate" },
      { name: "Time Management", level: 72, category: "Intermediate" },
      { name: "Adaptability", level: 82, category: "Advanced" }
    ]
  }
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Expert': return '#10B981';
      case 'Advanced': return '#3B82F6';
      case 'Intermediate': return '#F59E0B';
      case 'Beginner': return '#EF4444';
      default: return '#6B7280';
    }
  };

  return (
    <>
      {/* Beautiful Transition Section */}
      <div className="section-transition">
        <div className="transition-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
        <div className="transition-content">
          <h2 className="transition-title">Technical Expertise</h2>
          <p className="transition-subtitle">Crafting digital experiences with modern technologies</p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <div className="skills-header">
          <h2 className="skills-title">Skills & Technologies</h2>
          <p className="skills-description">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="skills-grid">
          {Object.entries(skillsData).map(([categoryName, categoryData], index) => (
            <div 
              key={categoryName} 
              className={`skill-category ${activeCategory === categoryName ? 'active' : ''}`}
              onClick={() => setActiveCategory(activeCategory === categoryName ? null : categoryName)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="category-header">
                <span className="category-icon">{categoryData.icon}</span>
                <h3 className="category-title">{categoryName}</h3>
                <span className="category-count">{categoryData.skills.length} skills</span>
              </div>

              <div className="skills-list">
                {categoryData.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item" style={{ animationDelay: `${skillIndex * 0.05}s` }}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span 
                        className="skill-category-badge"
                        style={{ backgroundColor: getCategoryColor(skill.category) }}
                      >
                        {skill.category}
                      </span>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ 
                            width: `${skill.level}%`,
                            backgroundColor: getCategoryColor(skill.category)
                          }}
                        ></div>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="skills-summary">
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">6</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Learning</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;