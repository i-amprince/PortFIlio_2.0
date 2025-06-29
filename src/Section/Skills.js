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