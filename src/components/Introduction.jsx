import { useState, useEffect } from 'react'
import './Introduction.css'
import { FaAws, FaDocker, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { SiKubernetes, SiTerraform, SiMicrosoftazure } from 'react-icons/si'

const Introduction = () => {
  const [text, setText] = useState('')
  const fullText = 'Sr. Cloud Engineer – DevEx'
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [])

  return (
    <div className="intro-container">
      <div className="intro-content">
        <div className="intro-left">
          <div className="profile-image-container">
            <div className="profile-ring"></div>
            <div className="profile-image">
              <img src="/profile.jpg?v=1" alt="Affan Chowdhury" onError={(e) => { e.target.src = '/profile-placeholder.svg' }} />
            </div>
          </div>
          
          <div className="tech-stack">
            <h3>Tech Stack</h3>
            <div className="tech-icons">
              <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer" className="tech-icon aws">
                <FaAws />
                <span>AWS</span>
              </a>
              <a href="https://azure.microsoft.com/" target="_blank" rel="noopener noreferrer" className="tech-icon azure">
                <SiMicrosoftazure />
                <span>Azure</span>
              </a>
              <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer" className="tech-icon docker">
                <FaDocker />
                <span>Docker</span>
              </a>
              <a href="https://kubernetes.io/" target="_blank" rel="noopener noreferrer" className="tech-icon k8s">
                <SiKubernetes />
                <span>Kubernetes</span>
              </a>
              <a href="https://developer.hashicorp.com/terraform" target="_blank" rel="noopener noreferrer" className="tech-icon terraform">
                <SiTerraform />
                <span>Terraform</span>
              </a>
            </div>
          </div>
        </div>

        <div className="intro-right">
          <div className="intro-header">
            <h1 className="glitch" data-text="AFFAN CHOWDHURY">AFFAN CHOWDHURY</h1>
            <div className="typing-container">
              <h2 className="typing-text">
                {text}
                <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
              </h2>
            </div>
            <p className="location-info">New York, NY</p>
          </div>

          <div className="intro-description">
            <p className="terminal-output">
              <span className="prompt">$ cat about.txt</span>
            </p>
            <div className="about-content">
              <p>
                Sr. Cloud Engineer at PwC, specializing in AWS and Azure cloud migration automation,
                developer experience platforms, and enterprise-grade governance frameworks. Expert in 
                building scalable, secure, and cost-effective multi-cloud solutions.
              </p>
              <p>
                Currently automating Azure subscription migrations across 500+ subscriptions and 57,000+ 
                cloud resources using Temporal orchestration, Python, and Azure SDK — reducing migration 
                time from 3 days to under 10 seconds per subscription.
              </p>
              <p>
                Previously at AWS, Amazon Web Services, and multiple enterprise clients including 
                Bank of America and Bell Flight, with deep expertise across the full cloud stack.
              </p>
            </div>

            <div className="skills-grid">
              <div className="skill-category">
                <h4>☁️ Cloud Platforms</h4>
                <ul>
                  <li>AWS (EC2, S3, ECS, EKS, Lambda)</li>
                  <li>Azure (SDK, Management Groups, Entra ID)</li>
                  <li>GCP (Cloud Functions, GKE)</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h4>🔧 DevOps & IaC</h4>
                <ul>
                  <li>Terraform, CloudFormation, CDK</li>
                  <li>Docker, Kubernetes, Helm</li>
                  <li>CI/CD (Jenkins, GitLab, ArgoCD)</li>
                </ul>
              </div>

              <div className="skill-category">
                <h4>🛡️ Security & Compliance</h4>
                <ul>
                  <li>FISMA, NIST, DoD, SOC 2, FedRAMP</li>
                  <li>IAM, Wiz, RegScale, Netskope</li>
                  <li>Azure Policy, RBAC, Key Vault</li>
                </ul>
              </div>

              <div className="skill-category">
                <h4>💻 Programming</h4>
                <ul>
                  <li>Python, Bash, JavaScript, TypeScript</li>
                  <li>C, C#, C++, Java, Go</li>
                  <li>ReactJS, AngularJS, Node.js</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/BIGBRODIE94" target="_blank" rel="noopener noreferrer" className="social-link github">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/affan-chowdhury/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="mailto:affanc94@outlook.com" className="social-link email">
              <FaEnvelope /> Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
