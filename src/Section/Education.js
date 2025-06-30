import React, { useState, useEffect } from 'react';

const educationData = [
  {
    id: 1,
    title: "Bachelor of Technology",
    subtitle: "Computer Science and Engineering",
    institution: "Indian Institute of Information Technology Guwahati",
    duration: "2023 – 2027",
    status: "Ongoing",
    gpa: "7.7 CPI",
    details: "Focusing on full-stack development, data structures & algorithms, and hands-on project work with comprehensive understanding of modern software engineering practices.",
    highlights: ["Full-Stack Development", "Data Structures & Algorithms", "Software Engineering", "Project Management"],
    level: "undergraduate",
    icon: "🎓"
  },
  {
    id: 2,
    title: "Senior Secondary",
    subtitle: "Physics, Chemistry, Mathematics",
    institution: "St. Vivekanand Sr. Sec. Public School, Etawah (U.P)",
    duration: "2021 – 2022",
    status: "Completed",
    gpa: "95.2%",
    details: "Completed with distinction in PCM stream. Built strong foundational knowledge in mathematics, physics, and logical reasoning essential for engineering studies.",
    highlights: ["Mathematics Excellence", "Physics Fundamentals", "Analytical Thinking", "Problem Solving"],
    level: "senior-secondary",
    icon: "📚"
  },
  {
    id: 3,
    title: "Secondary Education",
    subtitle: "Class X Board Examination",
    institution: "St. Vivekanand Sr. Sec. Public School",
    duration: "2019 – 2020",
    status: "Completed",
    gpa: "96%",
    details: "Achieved excellent academic performance, sparking early interest in technology and computational thinking with strong foundation in core subjects.",
    highlights: ["Academic Excellence", "Technology Interest", "Core Subjects", "Foundation Building"],
    level: "secondary",
    icon: "📖"
  },
  {
    id: 4,
    title: "Primary Education",
    subtitle: "Class VIII Completion",
    institution: "Royal Oxford International Sr. Sec. School",
    duration: "Till 2017",
    status: "Completed",
    gpa: "98.8%",
    details: "Outstanding academic performance in primary education, establishing strong learning habits and curiosity for knowledge acquisition.",
    highlights: ["Outstanding Performance", "Learning Foundation", "Academic Discipline", "Knowledge Curiosity"],
    level: "primary",
    icon: "🌟"
  }
];

const Education = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards(educationData.map(item => item.id));
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const getLevelColor = (level) => {
    switch(level) {
      case 'undergraduate': return { bg: 'rgba(16, 185, 129, 0.1)', border: '#10B981', accent: '#10B981' };
      case 'senior-secondary': return { bg: 'rgba(59, 130, 246, 0.1)', border: '#3B82F6', accent: '#3B82F6' };
      case 'secondary': return { bg: 'rgba(245, 158, 11, 0.1)', border: '#F59E0B', accent: '#F59E0B' };
      case 'primary': return { bg: 'rgba(239, 68, 68, 0.1)', border: '#EF4444', accent: '#EF4444' };
      default: return { bg: 'rgba(107, 114, 128, 0.1)', border: '#6B7280', accent: '#6B7280' };
    }
  };

  return (
    <>
      {/* Education Section */}
      <div className="education-container" style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #ff8c50 0%, #ffb75e 25%, #ffdec9 50%, #fff5eb 75%, #ffffff 100%)',
        minHeight: '100vh',
        padding: '6rem 2rem',
        zIndex: 4
      }}>
        {/* Header */}
        <div className="education-header" style={{
          textAlign: 'center',
          marginBottom: '4rem',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <h2 className="education-title" style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            color: '#2c3e50',
            marginBottom: '1.5rem',
            textShadow: '0 2px 8px rgba(44, 62, 80, 0.2)',
            letterSpacing: '2px',
            position: 'relative'
          }}>
            Education & Qualifications
            <div style={{
              position: 'absolute',
              bottom: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '120px',
              height: '4px',
              background: 'linear-gradient(90deg, #ff8c50, rgba(255, 140, 80, 0.5))',
              borderRadius: '2px',
              boxShadow: '0 2px 8px rgba(255, 140, 80, 0.3)'
            }}></div>
          </h2>
          <p className="education-subtitle" style={{
            fontSize: '1.2rem',
            color: '#5a6c7d',
            fontWeight: '400',
            lineHeight: '1.6',
            marginTop: '2rem'
          }}>
            A comprehensive overview of my academic journey and achievements
          </p>
        </div>

        {/* Education Timeline */}
        <div className="education-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '2.5rem',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '2rem 0'
        }}>
          {educationData.map((edu, index) => {
            const colors = getLevelColor(edu.level);
            const isVisible = visibleCards.includes(edu.id);
            
            return (
              <div
                key={edu.id}
                className="education-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  borderRadius: '24px',
                  padding: '2.5rem',
                  border: `2px solid ${colors.border}20`,
                  boxShadow: activeCard === edu.id 
                    ? `0 25px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px ${colors.accent}40`
                    : '0 12px 32px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible 
                    ? (activeCard === edu.id ? 'translateY(-12px) scale(1.02)' : 'translateY(0)')
                    : 'translateY(30px)',
                  animationDelay: `${index * 0.15}s`
                }}
                onClick={() => setActiveCard(activeCard === edu.id ? null : edu.id)}
                onMouseEnter={() => setActiveCard(edu.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Top accent line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${colors.accent}, ${colors.accent}80, ${colors.accent}40)`,
                  opacity: activeCard === edu.id ? 1 : 0.6,
                  transition: 'opacity 0.3s ease'
                }}></div>

                {/* Header */}
                <div className="education-card-header" style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '1.5rem',
                  gap: '1rem'
                }}>
                  <div className="education-icon" style={{
                    fontSize: '2.5rem',
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                  }}>
                    {edu.icon}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <div className="education-title-row" style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '0.5rem'
                    }}>
                      <h3 className="education-card-title" style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: colors.accent,
                        margin: 0,
                        lineHeight: '1.3'
                      }}>
                        {edu.title}
                      </h3>
                      <div className="education-status" style={{
                        background: colors.bg,
                        color: colors.accent,
                        padding: '0.4rem 0.8rem',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        border: `1px solid ${colors.accent}30`,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        {edu.status}
                      </div>
                    </div>
                    
                    <h4 className="education-card-subtitle" style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: '#4a5568',
                      margin: '0 0 0.5rem 0'
                    }}>
                      {edu.subtitle}
                    </h4>
                  </div>
                </div>

                {/* Institution & Duration */}
                <div className="education-meta" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <div className="education-institution" style={{
                    background: 'rgba(0, 0, 0, 0.05)',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '25px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#2d3748',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span>🏫</span>
                    {edu.institution}
                  </div>
                  
                  <div className="education-duration" style={{
                    background: colors.bg,
                    color: colors.accent,
                    padding: '0.6rem 1.2rem',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    border: `1px solid ${colors.accent}20`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span>📅</span>
                    {edu.duration}
                  </div>

                  {edu.gpa && (
                    <div className="education-gpa" style={{
                      background: `linear-gradient(135deg, ${colors.accent}15, ${colors.accent}25)`,
                      color: colors.accent,
                      padding: '0.6rem 1.2rem',
                      borderRadius: '25px',
                      fontSize: '0.9rem',
                      fontWeight: '700',
                      border: `1px solid ${colors.accent}30`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <span>⭐</span>
                      {edu.gpa}
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="education-details" style={{
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  color: '#4a5568',
                  marginBottom: '1.5rem',
                  textAlign: 'justify'
                }}>
                  {edu.details}
                </p>

                {/* Highlights */}
                <div className="education-highlights" style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {edu.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="education-highlight"
                      style={{
                        background: 'rgba(0, 0, 0, 0.05)',
                        color: '#2d3748',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: '500',
                        border: '1px solid rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Decorative corner */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  width: '40px',
                  height: '40px',
                  background: `linear-gradient(135deg, ${colors.accent}10, ${colors.accent}20)`,
                  borderRadius: '50%',
                  opacity: activeCard === edu.id ? 1 : 0.5,
                  transition: 'all 0.4s ease',
                  transform: activeCard === edu.id ? 'scale(1.2)' : 'scale(1)'
                }}></div>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="education-stats" style={{
          marginTop: '4rem',
          padding: '3rem 2rem',
          background: 'rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '4rem auto 0'
        }}>
          <div className="education-stats-grid" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '4rem',
            flexWrap: 'wrap'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span className="stat-number" style={{
                fontSize: '3rem',
                fontWeight: '800',
                color: '#2c3e50',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                lineHeight: 1
              }}>4</span>
              <span className="stat-label" style={{
                fontSize: '1.1rem',
                color: '#5a6c7d',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Qualifications</span>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span className="stat-number" style={{
                fontSize: '3rem',
                fontWeight: '800',
                color: '#2c3e50',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                lineHeight: 1
              }}>7.7</span>
              <span className="stat-label" style={{
                fontSize: '1.1rem',
                color: '#5a6c7d',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Current CPI</span>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span className="stat-number" style={{
                fontSize: '3rem',
                fontWeight: '800',
                color: '#2c3e50',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                lineHeight: 1
              }}>2027</span>
              <span className="stat-label" style={{
                fontSize: '1.1rem',
                color: '#5a6c7d',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Graduation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        /* Mobile Styles */
        @media (max-width: 768px) {
          .education-container {
            padding: 1rem 1rem 2rem 1rem !important;
            min-height: calc(100vh - 70px) !important;
          }
          
          .education-header {
            margin-bottom: 2rem !important;
            padding: 0 0.5rem !important;
          }
          
          .education-title {
            font-size: 2rem !important;
            margin-bottom: 1rem !important;
            letter-spacing: 1px !important;
          }
          
          .education-subtitle {
            font-size: 1rem !important;
            margin-top: 1rem !important;
          }
          
          .education-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding: 1rem 0 !important;
          }
          
          .education-card {
            padding: 1.5rem !important;
            border-radius: 16px !important;
          }
          
          .education-card-header {
            flex-direction: column !important;
            gap: 1rem !important;
            margin-bottom: 1rem !important;
          }
          
          .education-icon {
            font-size: 2rem !important;
            align-self: flex-start !important;
          }
          
          .education-title-row {
            flex-direction: column !important;
            gap: 0.5rem !important;
            align-items: flex-start !important;
          }
          
          .education-card-title {
            font-size: 1.2rem !important;
          }
          
          .education-card-subtitle {
            font-size: 0.95rem !important;
          }
          
          .education-status {
            font-size: 0.75rem !important;
            padding: 0.3rem 0.6rem !important;
            align-self: flex-start !important;
          }
          
          .education-meta {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.75rem !important;
          }
          
          .education-institution {
            font-size: 0.8rem !important;
            padding: 0.5rem 1rem !important;
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
          }
          
          .education-duration,
          .education-gpa {
            font-size: 0.8rem !important;
            padding: 0.5rem 1rem !important;
          }
          
          .education-details {
            font-size: 0.9rem !important;
            margin-bottom: 1rem !important;
          }
          
          .education-highlights {
            gap: 0.4rem !important;
          }
          
          .education-highlight {
            font-size: 0.75rem !important;
            padding: 0.25rem 0.6rem !important;
          }
          
          .education-stats {
            margin-top: 2rem !important;
            padding: 2rem 1rem !important;
            margin-left: 1rem !important;
            margin-right: 1rem !important;
          }
          
          .education-stats-grid {
            gap: 2rem !important;
          }
          
          .stat-number {
            font-size: 2.5rem !important;
          }
          
          .stat-label {
            font-size: 0.9rem !important;
          }
        }
        
        /* Extra small mobile */
        @media (max-width: 480px) {
          .education-container {
            padding: 0.5rem 0.5rem 1.5rem 0.5rem !important;
          }
          
          .education-title {
            font-size: 1.75rem !important;
          }
          
          .education-subtitle {
            font-size: 0.9rem !important;
          }
          
          .education-card {
            padding: 1rem !important;
          }
          
          .education-card-title {
            font-size: 1.1rem !important;
          }
          
          .education-institution {
            font-size: 0.75rem !important;
          }
          
          .education-stats {
            padding: 1.5rem 0.5rem !important;
          }
          
          .education-stats-grid {
            gap: 1.5rem !important;
          }
          
          .stat-number {
            font-size: 2rem !important;
          }
          
          .stat-label {
            font-size: 0.8rem !important;
          }
        }
        
        /* Ensure proper spacing from navbar */
        @media (max-width: 768px) {
          .education-container {
            margin-top: 0 !important;
            padding-top: 1.5rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default Education;