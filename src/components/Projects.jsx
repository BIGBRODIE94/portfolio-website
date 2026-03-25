import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 'centralized-logging',
      title: 'Centralized Logging Architecture',
      category: 'Infrastructure',
      status: 'Production',
      description: 'Multi-account AWS logging solution with real-time processing, compliance reporting, and automated alerting across 15+ AWS accounts.',
      longDescription: 'Designed and implemented a comprehensive centralized logging solution that aggregates logs from multiple AWS accounts into a single, searchable repository. The solution includes real-time log processing, automated compliance reporting, and intelligent alerting systems.',
      technologies: ['AWS CloudWatch', 'Kinesis Data Firehose', 'S3', 'Lambda', 'Terraform', 'IAM', 'CloudTrail'],
      features: [
        'Real-time log aggregation from 15+ AWS accounts',
        'Automated compliance reporting for FedRAMP/DoD requirements',
        'Intelligent alerting with custom CloudWatch metrics',
        'Cost-optimized storage with lifecycle policies',
        'Cross-account IAM policies for secure access',
        'Automated log parsing and categorization'
      ],
      impact: 'Reduced log analysis time by 80% and improved compliance reporting efficiency by 90%',
      metrics: {
        accounts: '15+',
        logs: '10TB+',
        uptime: '99.9%',
        cost: '60% reduction'
      },
      challenges: [
        'Managing cross-account permissions securely',
        'Optimizing costs for large-scale log storage',
        'Ensuring real-time processing without data loss',
        'Meeting strict compliance requirements'
      ],
      solutions: [
        'Implemented least-privilege IAM policies with automated rotation',
        'Designed tiered storage strategy with intelligent lifecycle management',
        'Built fault-tolerant processing pipeline with dead letter queues',
        'Created automated compliance validation and reporting'
      ]
    },
    {
      id: 'wiz-security-automation',
      title: 'Wiz Security Sensor Automation',
      category: 'Security',
      status: 'Production',
      description: 'Automated deployment and management of Wiz security sensors across EKS clusters and EC2 instances with zero-touch deployment.',
      longDescription: 'Developed a comprehensive automation solution for deploying and managing Wiz security sensors across diverse environments. The solution includes automated discovery, deployment, and lifecycle management of security sensors.',
      technologies: ['Kubernetes', 'Helm', 'AWS EKS', 'EC2', 'Shell Scripting', 'Docker', 'AWS Systems Manager'],
      features: [
        'Zero-touch deployment across 50+ instances',
        'Automated sensor discovery and registration',
        'Health monitoring and auto-remediation',
        'Multi-environment support (dev, staging, prod)',
        'Automated updates and version management',
        'Comprehensive logging and audit trails'
      ],
      impact: 'Reduced security sensor deployment time from hours to minutes and improved coverage from 60% to 95%',
      metrics: {
        instances: '50+',
        coverage: '95%',
        deployment: '5 minutes',
        uptime: '99.8%'
      },
      challenges: [
        'Managing sensors across different environments',
        'Ensuring consistent deployment without manual intervention',
        'Handling network connectivity issues',
        'Maintaining security compliance during automation'
      ],
      solutions: [
        'Created environment-specific Helm charts with parameterized configurations',
        'Implemented automated health checks and self-healing mechanisms',
        'Built network connectivity validation and retry logic',
        'Designed secure credential management with AWS Secrets Manager'
      ]
    },
    {
      id: 'cross-account-iam',
      title: 'Cross-Account IAM Framework',
      category: 'Security',
      status: 'Production',
      description: 'Secure multi-account architecture with automated IAM policy management and centralized access control across 20+ AWS accounts.',
      longDescription: 'Architected and implemented a comprehensive IAM framework that enables secure cross-account access while maintaining least-privilege principles. The solution includes automated policy management and centralized access governance.',
      technologies: ['AWS IAM', 'CloudFormation', 'Terraform', 'AWS Organizations', 'Lambda', 'CloudTrail', 'AWS Config'],
      features: [
        'Centralized IAM policy management across 20+ accounts',
        'Automated policy deployment and updates',
        'Role-based access control with temporary credentials',
        'Comprehensive audit logging and compliance monitoring',
        'Automated policy validation and drift detection',
        'Integration with existing identity providers'
      ],
      impact: 'Streamlined access management across all accounts and reduced policy deployment time by 85%',
      metrics: {
        accounts: '20+',
        policies: '200+',
        deployment: '85% faster',
        compliance: '100%'
      },
      challenges: [
        'Managing complex cross-account trust relationships',
        'Ensuring policy consistency across multiple accounts',
        'Implementing automated policy validation',
        'Maintaining audit trails for compliance'
      ],
      solutions: [
        'Designed standardized trust relationship templates',
        'Created automated policy validation and testing framework',
        'Implemented comprehensive CloudTrail logging and monitoring',
        'Built automated compliance reporting and alerting'
      ]
    },
    {
      id: 'matrix-portfolio',
      title: 'Matrix-Themed Interactive Portfolio',
      category: 'Web Development',
      status: 'Live',
      description: 'Interactive portfolio website with terminal interface, Matrix theme, and AWS integration showcasing technical skills and creativity.',
      longDescription: 'Built a unique portfolio website that combines technical expertise with creative design. Features include an interactive terminal interface, Matrix-themed authentication, and real-time AWS integration.',
      technologies: ['React', 'Vite', 'xterm.js', 'AWS SDK', 'CSS3', 'JavaScript', 'Netlify'],
      features: [
        'Interactive terminal with real AWS commands',
        'Matrix-themed authentication system',
        'Responsive design with cyberpunk aesthetics',
        'Real-time AWS resource monitoring',
        'Animated Matrix rain effects',
        'Resume PDF integration via terminal'
      ],
      impact: 'Showcased technical skills through interactive experience and received positive feedback from recruiters',
      metrics: {
        visitors: '500+',
        engagement: '85%',
        loadTime: '<2s',
        mobile: '100% responsive'
      },
      challenges: [
        'Creating realistic terminal experience in browser',
        'Implementing Matrix-themed animations',
        'Integrating AWS SDK with proper error handling',
        'Ensuring cross-browser compatibility'
      ],
      solutions: [
        'Used xterm.js for authentic terminal emulation',
        'Implemented CSS animations and canvas-based effects',
        'Built robust error handling and fallback mechanisms',
        'Conducted extensive cross-browser testing'
      ]
    },
    {
      id: 'monitoring-dashboard',
      title: 'Real-Time Monitoring Dashboard',
      category: 'DevOps',
      status: 'Production',
      description: 'Comprehensive monitoring solution with custom dashboards, automated alerting, and predictive analytics for infrastructure health.',
      longDescription: 'Developed a comprehensive monitoring solution that provides real-time visibility into infrastructure health, performance metrics, and business KPIs with automated alerting and predictive analytics.',
      technologies: ['Prometheus', 'Grafana', 'AWS CloudWatch', 'Python', 'Docker', 'Kubernetes', 'AlertManager'],
      features: [
        'Real-time infrastructure monitoring across multiple environments',
        'Custom dashboards with business and technical metrics',
        'Automated alerting with intelligent escalation',
        'Predictive analytics for capacity planning',
        'Integration with multiple data sources',
        'Mobile-responsive dashboard design'
      ],
      impact: 'Improved system reliability by 40% and reduced mean time to resolution by 60%',
      metrics: {
        metrics: '1000+',
        alerts: '50+',
        mttr: '60% reduction',
        reliability: '40% improvement'
      },
      challenges: [
        'Aggregating metrics from diverse sources',
        'Creating meaningful alerting without noise',
        'Building predictive models for capacity planning',
        'Ensuring dashboard performance with large datasets'
      ],
      solutions: [
        'Implemented unified metrics collection with Prometheus',
        'Created intelligent alerting rules with severity levels',
        'Built machine learning models for capacity prediction',
        'Optimized queries and implemented data caching'
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'production': return '#00ff00';
      case 'live': return '#00ffff';
      case 'development': return '#ffff00';
      default: return '#ff6600';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'infrastructure': return '🏗️';
      case 'security': return '🔒';
      case 'web development': return '🌐';
      case 'devops': return '🔄';
      default: return '⚙️';
    }
  };

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1 className="glitch" data-text="PROJECTS">PROJECTS</h1>
        <p className="projects-subtitle">Building solutions that scale and secure the cloud</p>
      </div>

      <div className="projects-content">
        {/* Project Navigation */}
        <div className="project-navigation">
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={`project-nav-btn ${activeProject === index ? 'active' : ''}`}
              onClick={() => setActiveProject(index)}
            >
              <span className="project-nav-icon">{getCategoryIcon(project.category)}</span>
              <span className="project-nav-title">{project.title}</span>
              <span 
                className="project-nav-status" 
                style={{ color: getStatusColor(project.status) }}
              >
                {project.status}
              </span>
            </button>
          ))}
        </div>

        {/* Project Details */}
        <div className="project-details">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-detail ${activeProject === index ? 'active' : ''}`}
            >
              <div className="project-detail-header">
                <div className="project-detail-title-section">
                  <h2 className="project-detail-title">
                    {getCategoryIcon(project.category)} {project.title}
                  </h2>
                  <div className="project-detail-meta">
                    <span className="project-category">{project.category}</span>
                    <span 
                      className="project-status" 
                      style={{ color: getStatusColor(project.status) }}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="project-detail-content">
                <div className="project-description-section">
                  <h3>Project Overview</h3>
                  <p className="project-short-desc">{project.description}</p>
                  <p className="project-long-desc">{project.longDescription}</p>
                </div>

                <div className="project-metrics">
                  <h3>Key Metrics</h3>
                  <div className="metrics-grid">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="metric-card">
                        <div className="metric-value">{value}</div>
                        <div className="metric-label">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="project-features">
                  <h3>Key Features</h3>
                  <ul className="features-list">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <span className="feature-bullet">▶</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  <h3>Technologies Used</h3>
                  <div className="tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-impact">
                  <h3>Impact & Results</h3>
                  <p className="impact-text">{project.impact}</p>
                </div>

                <div className="project-challenges-solutions">
                  <div className="challenges-section">
                    <h3>Challenges</h3>
                    <ul className="challenges-list">
                      {project.challenges.map((challenge, idx) => (
                        <li key={idx} className="challenge-item">
                          <span className="challenge-bullet">⚠️</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="solutions-section">
                    <h3>Solutions</h3>
                    <ul className="solutions-list">
                      {project.solutions.map((solution, idx) => (
                        <li key={idx} className="solution-item">
                          <span className="solution-bullet">✅</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
