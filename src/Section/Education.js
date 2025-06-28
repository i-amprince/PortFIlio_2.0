import React from 'react';
import './Education.css';

const educationData = [
  {
    title: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Indian Institute of Information Technology Guwahati",
    duration: "2023 – 2027 (Ongoing)",
    details: "Focusing on full-stack development, data structures & algorithms, and hands-on project work with current CPI of 7.7."
  },
  {
    title: "Senior Secondary (Class XII)",
    institution: "St. Vivekanand Sr. Sec. Public School, Etawah (U.P)",
    duration: "2021 – 2022",
    details: "Completed with 95.2% in PCM stream. Built strong foundational knowledge in math and logic."
  },
  {
    title: "Secondary (Class X)",
    institution: "Senior Secondary (Class XII)",
    duration: "2019 – 2020",
    details: "Achieved 96%, sparking early interest in technology."
  },
  {
    title: "Primary School (Class VIII)",
    institution: "Royal Oxford International Sr. Sec. School",
    duration: "till 2017",
    details: "Achieved 98.8%."
  }
];

const Education = () => {
  return (
    <div className="education-section">
      <h2 className="education-title">Education</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <h3>{edu.title}</h3>
              <h4>{edu.institution}</h4>
              <p className="timeline-duration">{edu.duration}</p>
              <p>{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
