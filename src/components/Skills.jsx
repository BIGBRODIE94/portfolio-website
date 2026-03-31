import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('cloud');

  const skillCategories = {
    cloud: {
      title: 'Cloud Platforms',
      icon: '☁️',
      skills: [
        { name: 'AWS Cloud', level: 95, description: 'EC2, S3, ECS, EKS, Lambda, CloudWatch, Kinesis, IAM, VPC, CloudFormation, CDK, GovCloud, Bedrock, SageMaker' },
        { name: 'Azure Cloud', level: 92, description: 'Management Groups, Subscription Landing Zones, Azure SDK, Azure REST APIs, Entra ID, Key Vault, Cosmos DB, Resource Graph API, Azure DevOps, Azure Policy' },
        { name: 'Google Cloud Platform', level: 85, description: 'App Engine, Data Plex, DataFlow, Gemini, GKE, Cloud Scheduler, Cloud Functions' },
        { name: 'Multi-Cloud Architecture', level: 90, description: 'Cross-cloud IAM, Organizations, centralized logging, security frameworks, Temporal orchestration' }
      ]
    },
    containers: {
      title: 'Containers & Orchestration',
      icon: '🐳',
      skills: [
        { name: 'Docker & Kubernetes', level: 95, description: 'Containerization, EKS, AKS, GKE, Helm charts, workload orchestration, RBAC' },
        { name: 'Container Platforms', level: 88, description: 'Tanzu, Rancher, Nomad, ECS, auto-scaling groups' },
        { name: 'Chaos Engineering', level: 82, description: 'Chaos Mesh, fault injection, resilience testing, cascading failure simulation' },
        { name: 'Observability Stack', level: 90, description: 'Prometheus, Grafana, Jaeger, ClickHouse, Datadog, Dynatrace, Kibana, Splunk, ELK Stack' }
      ]
    },
    iac: {
      title: 'Infrastructure as Code',
      icon: '🏗️',
      skills: [
        { name: 'Terraform', level: 92, description: 'Multi-cloud provisioning, modules, state management, custom providers' },
        { name: 'AWS CloudFormation & CDK', level: 90, description: 'Nested stacks, custom resources, Service Catalog, Control Tower, SAM' },
        { name: 'Configuration Management', level: 88, description: 'Ansible, Puppet, Chef, OpsWorks, configuration automation' },
        { name: 'Azure ARM & Policy', level: 85, description: 'ARM templates, Azure Policy Exemptions, Management Group hierarchy, RBAC provisioning' }
      ]
    },
    devops: {
      title: 'DevOps & CI/CD',
      icon: '🔄',
      skills: [
        { name: 'CI/CD Pipelines', level: 92, description: 'Jenkins, GitLab CI, GitHub Actions, AWS CodePipeline, CodeBuild, CodeDeploy, Azure DevOps' },
        { name: 'GitOps', level: 90, description: 'ArgoCD, Flux, automated deployments, Git-based workflows' },
        { name: 'Workflow Orchestration', level: 88, description: 'Temporal, event-driven architectures, EventBridge, batch parallel processing' },
        { name: 'Version Control & Collaboration', level: 92, description: 'Git, GitLab, Bitbucket, Jira, SDLC' }
      ]
    },
    security: {
      title: 'Security & Compliance',
      icon: '🛡️',
      skills: [
        { name: 'Cloud Security', level: 92, description: 'IAM, IAM Identity Center, Wiz Security, AWS Inspector, Security Groups, Service Principals' },
        { name: 'Compliance Frameworks', level: 90, description: 'FISMA, NIST, DoD, SOC 2, FedRAMP, GovCloud, Azure Policy compliance' },
        { name: 'Monitoring & Audit', level: 88, description: 'CloudTrail, CloudWatch, RegScale, Netskope, audit logging, centralized logging' },
        { name: 'ITSM Integration', level: 85, description: 'ServiceNow, RITM ticket automation, governance review, compliance reporting' }
      ]
    },
    programming: {
      title: 'Programming',
      icon: '💻',
      skills: [
        { name: 'Python & Bash', level: 92, description: 'Automation scripts, Lambda functions, Azure SDK automation, system administration, PySpark, TensorFlow' },
        { name: 'JavaScript & TypeScript', level: 88, description: 'ReactJS, AngularJS, Node.js, Vue, Webpack, serverless functions' },
        { name: 'Systems Languages', level: 80, description: 'C, C#, C++, Java, Go, Golang, .NET, Spring' },
        { name: 'Data & Query Languages', level: 85, description: 'SQL, OracleSQL, KQL (Kusto), GraphQL, YAML, JSON' }
      ]
    },
    data: {
      title: 'Data & AI',
      icon: '🗄️',
      skills: [
        { name: 'Data Processing', level: 88, description: 'Databricks, Glue ETL, Athena, EMR, Kinesis, Kafka, Apache Spark, Flink' },
        { name: 'Databases', level: 85, description: 'PostgreSQL, MySQL, RDS, Aurora, DynamoDB, MongoDB, Redis, Cosmos DB, ClickHouse' },
        { name: 'Data Storage', level: 90, description: 'S3, EBS, EFS, Data Lake, Hadoop, Delta Lake, FSx for Lustre' },
        { name: 'AI & ML', level: 78, description: 'AWS Bedrock, SageMaker, LLM pipelines, TensorFlow, Anaconda, AI Pipelines' }
      ]
    },
    tools: {
      title: 'Tools & Platforms',
      icon: '🔧',
      skills: [
        { name: 'CLI Tools', level: 92, description: 'AWS CLI, Azure CLI, CFN CLI, EB CLI, SAM CLI' },
        { name: 'Development Tools', level: 90, description: 'Cursor, Windsurf, Postman, Cypress, Heroku, Figma, Excel' },
        { name: 'Operating Systems', level: 88, description: 'Unix, Linux, CentOS, Kali Linux, Windows, MacOS, VirtualBox, VMWare' },
        { name: 'Messaging & CDN', level: 82, description: 'RabbitMQ, Kafka, CloudFront, CDN, NGINX, ElasticSearch' }
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

        <div className="additional-skills">
          <h2 className="section-title">Additional Expertise</h2>
          
          <div className="expertise-grid">
            <div className="expertise-category">
              <h4>Security & Compliance</h4>
              <ul>
                <li>FISMA, NIST, DoD, SOC 2, FedRAMP</li>
                <li>Wiz Security & AWS Inspector</li>
                <li>Azure Policy & RBAC</li>
                <li>ServiceNow ITSM Integration</li>
                <li>IAM & IAM Identity Center</li>
              </ul>
            </div>
            
            <div className="expertise-category">
              <h4>Cloud Architecture</h4>
              <ul>
                <li>Multi-Cloud (AWS, Azure, GCP)</li>
                <li>Temporal Workflow Orchestration</li>
                <li>Landing Zone Accelerator (LZA)</li>
                <li>HPC (Parallel Cluster, Slurm, FSx)</li>
                <li>Serverless (Lambda, SAM, EventBridge)</li>
              </ul>
            </div>
            
            <div className="expertise-category">
              <h4>Data & Observability</h4>
              <ul>
                <li>Databricks, Glue ETL, Delta Lake</li>
                <li>Prometheus, Grafana, Jaeger</li>
                <li>ClickHouse, Datadog, Dynatrace</li>
                <li>Kafka, Spark, Flink</li>
                <li>AI/ML Pipelines (Bedrock, SageMaker)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
