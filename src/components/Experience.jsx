import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Cloud Engineer",
      company: "Strategic Business Systems - COSMOS Engineering",
      period: "July 2025 - Present",
      location: "On-Site",
      description: "Building and maintaining CI/CD pipelines and establishing comprehensive security and compliance frameworks for mission-critical applications.",
      achievements: [
        "Built and maintained CI/CD pipelines using AWS CodePipeline, CodeBuild, and CodeDeploy, reducing deployment time by 75% and enabling automated testing and rollback capabilities for mission-critical applications",
        "Implemented end-to-end CI/CD pipelines using AWS CodePipeline, CodeBuild, and CodeDeploy with Wiz security scanning integration, reducing deployment time by 75% while ensuring automated security validation and compliance checks throughout the development lifecycle",
        "Established comprehensive security and compliance frameworks using CloudWatch, CloudTrail, RegScale for automated governance and risk management, and Netskope for cloud security monitoring",
        "Ensured 99.9% uptime and adherence to government security standards including FISMA, NIST, and DoD compliance requirements"
      ],
      technologies: ["AWS", "CodePipeline", "CodeBuild", "CodeDeploy", "CloudWatch", "CloudTrail", "Wiz", "RegScale", "Netskope", "FISMA", "NIST", "DoD"],
      impact: "Reduced deployment time by 75% while ensuring 99.9% uptime and full compliance with government security standards"
    },
    {
      title: "AWS Cloud Engineer",
      company: "Amazon Web Services",
      period: "Jun 2022 - Nov 2024",
      location: "Remote",
      description: "Deployed self-healing infrastructure and restructured automation frameworks to optimize cloud operations and reduce incident response times.",
      achievements: [
        "Deployed self-healing infrastructure using AWS CloudFormation and CI/CD pipelines to remediate errors, decreasing mean time to repair (MTTR) by 30% and saving over 200 hours monthly",
        "Restructured a Python-driven internal automation framework with AWS CDK, CloudFormation, and CI/CD integration to auto diagnose and remediate production infrastructure, saving 200 developer-hours monthly and accelerating incident resolution by 30%",
        "Integrated AWS CloudWatch Insights and Event Bridge to detect anomalies via custom metrics and alerts, reducing mean time to recovery (MTTR) by 35%, improving system uptime to 99.95%, and cutting incident investigation by 45%",
        "Architected secure batch data pipelines integrating AWS S3, Glue ETL, and Databricks Delta Lake—implementing end-to-end encryption, scaling to process 5 TB daily, reducing ETL runtime by 45%, and boosting analytics throughput by 60%",
        "Automated Terraform-driven GCP deployment pipelines using custom Terraform modules, integrated with Jenkins and GitLab CI to automate infrastructure provisioning and application delivery, reducing deployment durations by 55%, cutting configuration errors by 45%"
      ],
      technologies: ["AWS", "CloudFormation", "CDK", "CloudWatch", "Event Bridge", "S3", "Glue ETL", "Databricks", "Terraform", "GCP", "Jenkins", "GitLab CI", "Python"],
      impact: "Saved 200+ hours monthly, improved system uptime to 99.95%, and reduced deployment durations by 55%"
    },
    {
      title: "Associate AWS Cloud Engineer",
      company: "Amazon Web Services",
      period: "Aug 2021 - May 2022",
      location: "Remote",
      description: "Engineered CloudFormation blueprints and established migration of GCP workloads to AWS with comprehensive automation and security frameworks.",
      achievements: [
        "Engineered CloudFormation, Service Catalog, and Control Tower IaC blueprints for multi-account AWS provisioning, reducing environment setup time by 40% and manual configuration errors by 70% across 500+ accounts",
        "Established migration of 150+ GCP workloads to AWS with Terraform and CloudFormation, architecting VPCs, IAM policies, and CI/CD pipelines, increasing application performance by 30%, reducing cloud spend by 20%, and enhancing resource utilization by 25%",
        "Deployed blue/green CI/CD pipelines using AWS tools; slashed deployment errors by 45% by integrating tooling with GitHub Actions and Parameter Store; boosted release frequency by 50%",
        "Architected secure batch data pipelines integrating AWS S3, Glue ETL, and Databricks Delta Lake implementing end-to-end encryption, scaling to process 5 TB daily, reducing ETL runtime by 45%, and boosting analytics throughput by 60%"
      ],
      technologies: ["AWS", "CloudFormation", "Service Catalog", "Control Tower", "Terraform", "VPC", "IAM", "CI/CD", "GitHub Actions", "S3", "Glue ETL", "Databricks", "GCP"],
      impact: "Reduced environment setup time by 40%, decreased cloud spend by 20%, and boosted release frequency by 50%"
    },
    {
      title: "Cloud Operations Engineer II",
      company: "TEKSystems – Arctic IT",
      period: "Jun 2021 - Jul 2021",
      location: "Plano, TX",
      description: "Orchestrated configuration management automation and integrated comprehensive CI/CD pipelines with security compliance frameworks.",
      achievements: [
        "Orchestrated configuration management automation via Puppet, Chef, and OpsWorks to standardize 80+ operational tasks, boosting team productivity by 25%, reducing configuration errors by 30%, and cutting incident triage time by 40%",
        "Integrated Terraform and Ansible automation into GitLab CI/CD pipelines, eliminating 40% of manual deployment steps, accelerating release frequency by 50%, ensuring consistent environment provisioning across staging and production, and boosting developer efficiency by 35%",
        "Collaborated with data engineering teams to integrate Databricks job monitoring into AWS CloudWatch with custom alarms and Lambda notifications, reducing failure detection time by 80%, improving pipeline reliability to 99.8%, and automating incident remediation workflows",
        "Implemented AWS CloudFormation and CDK secure deployment pipelines with integrated IAM least-privilege policies and AWS Config guardrails, achieving 100% SOC 2 and GovCloud compliance, reducing audit remediation tasks by 80% and compliance validation time by 60%"
      ],
      technologies: ["Puppet", "Chef", "OpsWorks", "Terraform", "Ansible", "GitLab CI/CD", "Databricks", "CloudWatch", "Lambda", "CloudFormation", "CDK", "IAM", "AWS Config", "SOC 2", "GovCloud"],
      impact: "Boosted team productivity by 25%, accelerated release frequency by 50%, and achieved 100% SOC 2 and GovCloud compliance"
    }
  ];

  const projects = [
    {
      title: "Self-Healing Infrastructure Framework",
      description: "AWS CloudFormation and CI/CD pipeline automation for automated error remediation and incident response",
      technologies: ["AWS CloudFormation", "CDK", "CloudWatch", "Event Bridge", "Python", "CI/CD"],
      status: "Production",
      impact: "Decreased MTTR by 30% and saved over 200 hours monthly across production environments"
    },
    {
      title: "Multi-Account AWS Provisioning System",
      description: "CloudFormation, Service Catalog, and Control Tower IaC blueprints for enterprise-scale multi-account provisioning",
      technologies: ["AWS CloudFormation", "Service Catalog", "Control Tower", "Terraform", "IAM", "VPC"],
      status: "Production",
      impact: "Reduced environment setup time by 40% and manual configuration errors by 70% across 500+ accounts"
    },
    {
      title: "GCP to AWS Migration Framework",
      description: "Comprehensive migration solution for 150+ GCP workloads to AWS with automated provisioning and optimization",
      technologies: ["Terraform", "CloudFormation", "VPC", "IAM", "CI/CD", "GitHub Actions", "GCP", "AWS"],
      status: "Production",
      impact: "Increased application performance by 30%, reduced cloud spend by 20%, and enhanced resource utilization by 25%"
    },
    {
      title: "Secure Data Pipeline Architecture",
      description: "End-to-end encrypted batch data processing pipeline with AWS S3, Glue ETL, and Databricks Delta Lake integration",
      technologies: ["AWS S3", "Glue ETL", "Databricks", "Delta Lake", "CloudWatch", "Lambda", "Encryption"],
      status: "Production",
      impact: "Processes 5 TB daily, reduced ETL runtime by 45%, and boosted analytics throughput by 60%"
    },
    {
      title: "Compliance Automation Platform",
      description: "Automated security and compliance framework with RegScale, Netskope, and AWS Config integration",
      technologies: ["RegScale", "Netskope", "AWS Config", "CloudWatch", "CloudTrail", "FISMA", "NIST", "DoD"],
      status: "Production",
      impact: "Achieved 100% SOC 2 and GovCloud compliance with 99.9% uptime and automated governance"
    }
  ];

  return (
    <div className="experience-container">
      <div className="experience-header">
        <h1>EXPERIENCE</h1>
        <p className="experience-subtitle">Building the future of cloud infrastructure</p>
      </div>

      <div className="experience-content">
        <div className="experience-section">
          <h2 className="section-title">Professional Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header-card">
                <div className="experience-title-section">
                  <h3 className="job-title">{exp.title}</h3>
                  <h4 className="company-name">{exp.company}</h4>
                </div>
                <div className="experience-meta">
                  <span className="period">{exp.period}</span>
                  <span className="location">{exp.location}</span>
                </div>
              </div>
              
              <p className="job-description">{exp.description}</p>
              
              <div className="achievements-section">
                <h5>Achievements & Responsibilities:</h5>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="achievement-item">
                      <span className="achievement-bullet">▶</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="technologies-section">
                <h5>Technologies Used:</h5>
                <div className="tech-tags">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="impact-section">
                <h5>Impact:</h5>
                <p className="impact-text">{exp.impact}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-section">
          <h2 className="section-title">Key Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className={`project-status ${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="project-tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-impact">
                  <strong>Impact:</strong> {project.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
