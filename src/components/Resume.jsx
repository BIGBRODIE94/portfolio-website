import './Resume.css'
import { FaDownload, FaBriefcase, FaGraduationCap, FaCertificate, FaCode } from 'react-icons/fa'

const Resume = () => {
  const handleDownload = () => {
    // Download the actual resume PDF
    const link = document.createElement('a')
    link.href = '/Affan_Chowdhury_Resume.pdf'
    link.download = 'Affan_Chowdhury_Cloud_Engineer_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  
  const handleView = () => {
    // Open resume in new tab
    window.open('/Affan_Chowdhury_Resume.pdf', '_blank')
  }

  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1>
          <span className="terminal-prompt">$ cat resume.json |</span> jq
        </h1>
        <div className="resume-actions">
          <button className="download-btn view-btn" onClick={handleView}>
            📄 View PDF
          </button>
          <button className="download-btn" onClick={handleDownload}>
            <FaDownload /> Download PDF
          </button>
        </div>
      </div>

      <div className="resume-content">
        <section className="resume-section">
          <h2><FaBriefcase /> Professional Experience</h2>
          <div className="experience-item">
            <div className="exp-header">
              <h3>Cloud Engineer</h3>
              <span className="date">2023 - Present</span>
            </div>
            <h4>COSMOS Engineering - Strategic Business</h4>
            <ul className="exp-list">
              <li>Architected and implemented centralized logging infrastructure for AWS GovCloud environments serving multiple government accounts</li>
              <li>Deployed and managed ECS/EKS clusters with automated Wiz security sensor integration for compliance monitoring</li>
              <li>Developed CloudFormation templates and Infrastructure as Code solutions for repeatable, scalable deployments</li>
              <li>Implemented CloudWatch agent automation across EC2 fleet using Systems Manager and Lambda functions</li>
              <li>Created cross-account logging solutions using Kinesis Firehose and S3 for centralized audit trails</li>
              <li>Managed AWS SSM patch compliance and automated instance maintenance across multiple regions</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h3>DevOps Engineer</h3>
              <span className="date">2021 - 2023</span>
            </div>
            <h4>Cloud Solutions Inc.</h4>
            <ul className="exp-list">
              <li>Built CI/CD pipelines using Jenkins, GitLab CI, and AWS CodePipeline</li>
              <li>Containerized applications using Docker and orchestrated with Kubernetes</li>
              <li>Implemented infrastructure automation using Terraform and Ansible</li>
              <li>Reduced deployment time by 60% through automation and optimization</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2><FaCode /> Key Projects</h2>
          <div className="project-item">
            <h3>🔐 COSMOS Centralized Logging System</h3>
            <p>Enterprise-grade logging infrastructure for AWS GovCloud environments</p>
            <ul className="project-tech">
              <li>AWS CloudWatch</li>
              <li>Kinesis Firehose</li>
              <li>Lambda</li>
              <li>S3</li>
              <li>KMS</li>
            </ul>
          </div>

          <div className="project-item">
            <h3>🛡️ Wiz Security Sensor Deployment</h3>
            <p>Automated security compliance monitoring across ECS/EKS infrastructure</p>
            <ul className="project-tech">
              <li>AWS ECS/EKS</li>
              <li>Wiz Security</li>
              <li>CloudFormation</li>
              <li>Helm Charts</li>
            </ul>
          </div>

          <div className="project-item">
            <h3>⚙️ EC2 Automated Logging System</h3>
            <p>Event-driven CloudWatch agent deployment for new EC2 instances</p>
            <ul className="project-tech">
              <li>EventBridge</li>
              <li>Lambda</li>
              <li>SSM</li>
              <li>CloudWatch</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2><FaGraduationCap /> Education</h2>
          <div className="education-item">
            <h3>Bachelor of Science in Computer Science</h3>
            <p>University Name</p>
            <span className="date">2017 - 2021</span>
          </div>
        </section>

        <section className="resume-section">
          <h2><FaCertificate /> Certifications</h2>
          <div className="cert-grid">
            <div className="cert-item">
              <div className="cert-badge aws">AWS</div>
              <h4>AWS Certified Solutions Architect</h4>
              <p>Professional Level</p>
            </div>
            <div className="cert-item">
              <div className="cert-badge aws">AWS</div>
              <h4>AWS Certified Developer</h4>
              <p>Associate Level</p>
            </div>
            <div className="cert-item">
              <div className="cert-badge k8s">K8S</div>
              <h4>Certified Kubernetes Administrator</h4>
              <p>CNCF</p>
            </div>
            <div className="cert-item">
              <div className="cert-badge terraform">HC</div>
              <h4>HashiCorp Certified: Terraform</h4>
              <p>Associate</p>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h2>💻 Technical Skills</h2>
          <div className="skills-matrix">
            <div className="skill-row">
              <span className="skill-label">Cloud Platforms:</span>
              <div className="skill-bars">
                <div className="skill-bar aws-bar">AWS (Advanced)</div>
              </div>
            </div>
            <div className="skill-row">
              <span className="skill-label">Containers:</span>
              <div className="skill-bars">
                <div className="skill-bar docker-bar">Docker, ECS, EKS, Kubernetes</div>
              </div>
            </div>
            <div className="skill-row">
              <span className="skill-label">IaC Tools:</span>
              <div className="skill-bars">
                <div className="skill-bar iac-bar">Terraform, CloudFormation, CDK</div>
              </div>
            </div>
            <div className="skill-row">
              <span className="skill-label">Languages:</span>
              <div className="skill-bars">
                <div className="skill-bar lang-bar">Python, Bash, JavaScript, YAML</div>
              </div>
            </div>
            <div className="skill-row">
              <span className="skill-label">CI/CD:</span>
              <div className="skill-bars">
                <div className="skill-bar cicd-bar">Jenkins, GitLab CI, AWS CodePipeline</div>
              </div>
            </div>
            <div className="skill-row">
              <span className="skill-label">Monitoring:</span>
              <div className="skill-bars">
                <div className="skill-bar monitor-bar">CloudWatch, Prometheus, Grafana</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Resume

