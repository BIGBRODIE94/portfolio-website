import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Texas at Dallas (UTD)',
      period: '2017 - 2021',
      location: 'Dallas, TX',
      description: 'Focused on software engineering, algorithms, and system design with emphasis on cloud computing and distributed systems.',
      relevantCoursework: [
        'Data Structures and Algorithms',
        'Database Systems',
        'Computer Networks',
        'Software Engineering',
        'Operating Systems',
        'Cloud Computing',
        'Distributed Systems',
        'Cybersecurity Fundamentals'
      ],
      achievements: [
        'Dean\'s List for 6 consecutive semesters',
        'President of Computer Science Club',
        'Led team to 2nd place in regional hackathon',
        'Published research paper on cloud security'
      ]
    }
  ];

  const achievements = [
    {
      title: 'AWS Community Builder',
      organization: 'Amazon Web Services',
      date: '2024',
      description: 'Selected as AWS Community Builder for contributions to cloud computing community and technical expertise.',
      impact: 'Mentoring 50+ developers in cloud technologies and contributing to open-source projects'
    },
    {
      title: 'Kubernetes Contributor',
      organization: 'Cloud Native Computing Foundation',
      date: '2023',
      description: 'Active contributor to Kubernetes open-source project with focus on security and automation features.',
      impact: 'Contributed to 15+ pull requests and helped improve cluster security documentation'
    },
    {
      title: 'DevOps Excellence Award',
      organization: 'COSMOS Engineering',
      date: '2024',
      description: 'Recognized for outstanding contribution to infrastructure automation and deployment efficiency.',
      impact: 'Reduced deployment time by 70% and improved system reliability across all projects'
    },
    {
      title: 'Security Champion',
      organization: 'Internal Security Team',
      date: '2023',
      description: 'Designated as security champion for implementing best practices and training team members.',
      impact: 'Improved security posture by 40% and trained 20+ team members on security best practices'
    }
  ];

  const publications = [
    {
      title: 'Implementing Zero-Trust Architecture in Multi-Cloud Environments',
      type: 'Technical Article',
      publication: 'AWS Architecture Blog',
      date: '2024',
      description: 'Comprehensive guide on implementing zero-trust security principles across AWS, Azure, and GCP environments.',
      link: '#',
      impact: '10,000+ views and featured in AWS weekly newsletter'
    },
    {
      title: 'Automating Kubernetes Security with Policy as Code',
      type: 'Conference Talk',
      publication: 'KubeCon + CloudNativeCon',
      date: '2023',
      description: 'Presented on implementing automated security policies using OPA Gatekeeper and custom admission controllers.',
      link: '#',
      impact: '500+ attendees and 4.8/5 rating from audience feedback'
    },
    {
      title: 'Building Resilient Microservices with Service Mesh',
      type: 'Technical Tutorial',
      publication: 'DevOps.com',
      date: '2023',
      description: 'Step-by-step guide on implementing Istio service mesh for improved observability and security.',
      link: '#',
      impact: '5,000+ developers used the tutorial for their implementations'
    }
  ];

  const languages = [
    { name: 'English', proficiency: 'Native', level: 100 },
    { name: 'Spanish', proficiency: 'Conversational', level: 70 },
    { name: 'French', proficiency: 'Basic', level: 40 }
  ];

  const interests = [
    'Cloud Architecture & Design',
    'Open Source Contributions',
    'Technical Writing & Speaking',
    'Mentoring & Teaching',
    'Cybersecurity Research',
    'DevOps Culture & Practices',
    'Machine Learning & AI',
    'Blockchain Technology'
  ];

  return (
    <div className="education-container">
      <div className="education-header">
        <h1 className="glitch" data-text="EDUCATION & ACHIEVEMENTS">EDUCATION & ACHIEVEMENTS</h1>
        <p className="education-subtitle">Continuous learning and professional growth</p>
      </div>

      <div className="education-content">
        {/* Education Section */}
        <div className="education-section">
          <h2 className="section-title">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header-card">
                <div className="education-title-section">
                  <h3 className="degree-title">{edu.degree}</h3>
                  <h4 className="institution-name">{edu.institution}</h4>
                </div>
                <div className="education-meta">
                  <span className="period">{edu.period}</span>
                  <span className="location">{edu.location}</span>
                </div>
              </div>
              
              <p className="education-description">{edu.description}</p>
              
              <div className="coursework-section">
                <h5>Relevant Coursework:</h5>
                <div className="coursework-grid">
                  {edu.relevantCoursework.map((course, idx) => (
                    <span key={idx} className="course-tag">{course}</span>
                  ))}
                </div>
              </div>

              <div className="education-achievements">
                <h5>Achievements:</h5>
                <ul className="achievements-list">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="achievement-item">
                      <span className="achievement-bullet">🏆</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="achievements-section">
          <h2 className="section-title">Professional Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-header">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <span className="achievement-date">{achievement.date}</span>
                </div>
                
                <div className="achievement-organization">
                  <strong>Organization:</strong> {achievement.organization}
                </div>
                
                <p className="achievement-description">{achievement.description}</p>
                
                <div className="achievement-impact">
                  <strong>Impact:</strong> {achievement.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications Section */}
        <div className="publications-section">
          <h2 className="section-title">Publications & Speaking</h2>
          <div className="publications-grid">
            {publications.map((pub, index) => (
              <div key={index} className="publication-card">
                <div className="publication-header">
                  <h3 className="publication-title">{pub.title}</h3>
                  <div className="publication-meta">
                    <span className="publication-type">{pub.type}</span>
                    <span className="publication-date">{pub.date}</span>
                  </div>
                </div>
                
                <div className="publication-venue">
                  <strong>Published in:</strong> {pub.publication}
                </div>
                
                <p className="publication-description">{pub.description}</p>
                
                <div className="publication-impact">
                  <strong>Impact:</strong> {pub.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="additional-info">
          <div className="languages-section">
            <h3>Languages</h3>
            <div className="languages-grid">
              {languages.map((lang, index) => (
                <div key={index} className="language-item">
                  <div className="language-header">
                    <span className="language-name">{lang.name}</span>
                    <span className="language-proficiency">{lang.proficiency}</span>
                  </div>
                  <div className="language-bar">
                    <div 
                      className="language-progress" 
                      style={{ width: `${lang.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="interests-section">
            <h3>Professional Interests</h3>
            <div className="interests-grid">
              {interests.map((interest, index) => (
                <span key={index} className="interest-tag">{interest}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
