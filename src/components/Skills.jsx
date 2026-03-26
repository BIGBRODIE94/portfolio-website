import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('cloud');

  const skillCategories = {
    cloud: {
      title: 'Cloud Platforms',
      icon: '☁️',
      skills: [
        { name: 'AWS', level: 95, description: 'EC2, S3, ECS, EKS, Lambda, CloudWatch, Kinesis, IAM, VPC, CloudFormation' },
        { name: 'Azure', level: 90, description: 'Management Groups, Subscription Landing Zones, Azure SDK, Service Principals, Azure CLI' },
        { name: 'AWS GovCloud', level: 88, description: 'Government cloud compliance, FedRAMP, DoD requirements, secure deployments' },
        { name: 'Multi-Cloud Architecture', level: 92, description: 'Cross-cloud IAM, Organizations, centralized logging, security frameworks, Temporal orchestration' }
      ]
    },
    containers: {
      title: 'DevOps Tools',
      icon: '🔧',
      skills: [
        { name: 'Docker & Kubernetes', level: 95, description: 'Containerization, EKS, Helm charts, workload orchestration, RBAC' },
        { name: 'Terraform & Ansible', level: 90, description: 'Infrastructure automation, configuration management, multi-cloud provisioning' },
        { name: 'CI/CD (Jenkins, GitLab)', level: 88, description: 'Pipeline automation, GitOps workflows, automated testing, deployment strategies' },
        { name: 'GitOps & ArgoCD', level: 92, description: 'Automated deployments, Git-based workflows, continuous delivery' }
      ]
    },
    infrastructure: {
      title: 'Security & Compliance',
      icon: '🛡️',
      skills: [
        { name: 'IAM & Security Groups', level: 92, description: 'Identity management, cross-account policies, network security, access controls' },
        { name: 'CloudTrail & CloudWatch', level: 90, description: 'Audit logging, monitoring, alerting, centralized logging architecture' },
        { name: 'Wiz Security Integration', level: 88, description: 'Automated security scanning, vulnerability management, compliance reporting' },
        { name: 'FedRAMP & DoD Compliance', level: 85, description: 'Government security requirements, compliance frameworks, audit preparation' }
      ]
    },
    devops: {
      title: 'DevOps & CI/CD',
      icon: '🔄',
      skills: [
        { name: 'GitOps', level: 90, description: 'ArgoCD, Flux, automated deployments, Git-based workflows' },
        { name: 'CI/CD Pipelines', level: 88, description: 'GitHub Actions, Jenkins, GitLab CI, automated testing' },
        { name: 'Monitoring', level: 85, description: 'Prometheus, Grafana, CloudWatch, ELK Stack, alerting' },
        { name: 'Security', level: 87, description: 'SAST/DAST, vulnerability scanning, compliance automation' }
      ]
    },
    programming: {
      title: 'Programming',
      icon: '💻',
      skills: [
        { name: 'Python & Bash', level: 90, description: 'Automation scripts, Lambda functions, system administration, deployment automation' },
        { name: 'JavaScript/Node.js', level: 85, description: 'React development, serverless functions, API integration, web applications' },
        { name: 'Infrastructure as Code', level: 92, description: 'Terraform, CloudFormation, YAML, JSON, configuration management' },
        { name: 'Shell Scripting', level: 88, description: 'Bash scripting, automation, system administration, deployment pipelines' }
      ]
    },
    databases: {
      title: 'Databases & Storage',
      icon: '🗄️',
      skills: [
        { name: 'Relational DBs', level: 85, description: 'PostgreSQL, MySQL, RDS, Aurora, performance optimization' },
        { name: 'NoSQL', level: 80, description: 'DynamoDB, MongoDB, Redis, data modeling, scaling strategies' },
        { name: 'Data Storage', level: 90, description: 'S3, EBS, EFS, data lifecycle management, backup strategies' },
        { name: 'Data Processing', level: 75, description: 'Kinesis, Glue, Athena, EMR, data pipelines' }
      ]
    }
  };

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect - Professional',
      issuer: 'Amazon Web Services',
      date: '2024',
      credentialId: 'AWS-SAP-2024',
      description: 'Advanced architectural knowledge for complex AWS solutions and multi-account environments',
      skills: ['AWS Architecture', 'Multi-Account Design', 'Cost Optimization', 'Security Best Practices']
    },
    {
      name: 'AWS Certified DevOps Engineer - Professional',
      issuer: 'Amazon Web Services',
      date: '2024',
      credentialId: 'AWS-DOP-2024',
      description: 'Expertise in DevOps practices, CI/CD pipelines, and AWS deployment automation',
      skills: ['CI/CD Pipelines', 'Infrastructure Automation', 'Monitoring & Logging', 'Security Integration']
    },
    {
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: '2023',
      credentialId: 'CKA-2023',
      description: 'Hands-on expertise in Kubernetes cluster administration and EKS management',
      skills: ['EKS Management', 'Helm Charts', 'RBAC', 'Networking', 'Security']
    },
    {
      name: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      date: '2023',
      credentialId: 'HCT-2023',
      description: 'Infrastructure as Code expertise with Terraform and multi-cloud provisioning',
      skills: ['Terraform Core', 'State Management', 'Modules', 'Multi-Cloud Provisioning']
    }
  ];

  const getLevelColor = (level) => {
    if (level >= 90) return '#00ff00';
    if (level >= 80) return '#00ffff';
    if (level >= 70) return '#ffff00';
    return '#ff6600';
  };

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h1 className="glitch" data-text="SKILLS & CERTIFICATIONS">SKILLS & CERTIFICATIONS</h1>
        <p className="skills-subtitle">Mastering the tools that build the future</p>
      </div>

      <div className="skills-content">
        {/* Skills Section */}
        <div className="skills-section">
          <h2 className="section-title">Technical Skills</h2>
          
          <div className="skill-categories">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                className={`category-btn ${activeCategory === key ? 'active' : ''}`}
                onClick={() => setActiveCategory(key)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.title}</span>
              </button>
            ))}
          </div>

          <div className="skills-display">
            <h3 className="active-category-title">
              {skillCategories[activeCategory].icon} {skillCategories[activeCategory].title}
            </h3>
            
            <div className="skills-grid">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-header">
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-level" style={{ color: getLevelColor(skill.level) }}>
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: getLevelColor(skill.level)
                      }}
                    ></div>
                  </div>
                  
                  <p className="skill-description">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="certifications-section">
          <h2 className="section-title">Professional Certifications</h2>
          
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-header">
                  <h3 className="cert-name">{cert.name}</h3>
                  <span className="cert-date">{cert.date}</span>
                </div>
                
                <div className="cert-issuer">
                  <strong>Issuer:</strong> {cert.issuer}
                </div>
                
                <div className="cert-id">
                  <strong>Credential ID:</strong> {cert.credentialId}
                </div>
                
                <p className="cert-description">{cert.description}</p>
                
                <div className="cert-skills">
                  <strong>Key Skills:</strong>
                  <div className="cert-skill-tags">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="cert-skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="additional-skills">
          <h2 className="section-title">Additional Expertise</h2>
          
          <div className="expertise-grid">
            <div className="expertise-category">
              <h4>Security & Compliance</h4>
              <ul>
                <li>FedRAMP & DoD Compliance</li>
                <li>Wiz Security Integration</li>
                <li>Cross-Account IAM Policies</li>
                <li>CloudTrail & Audit Logging</li>
                <li>Security Group Management</li>
              </ul>
            </div>
            
            <div className="expertise-category">
              <h4>Cloud Architecture</h4>
              <ul>
                <li>Multi-Account AWS Architecture</li>
                <li>Centralized Logging Solutions</li>
                <li>EKS & Container Orchestration</li>
                <li>CloudWatch & Monitoring</li>
                <li>Kinesis Data Processing</li>
              </ul>
            </div>
            
            <div className="expertise-category">
              <h4>Automation & DevOps</h4>
              <ul>
                <li>Infrastructure as Code (Terraform)</li>
                <li>GitOps & ArgoCD</li>
                <li>Automated Deployment Pipelines</li>
                <li>Shell Scripting & Automation</li>
                <li>Configuration Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
