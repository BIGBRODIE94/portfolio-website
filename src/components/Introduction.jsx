import { useState, useEffect } from 'react'
import './Introduction.css'
import { FaAws, FaDocker, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiKubernetes, SiTerraform } from 'react-icons/si'

const Introduction = () => {
  const [text, setText] = useState('')
  const fullText = 'Cloud Engineer & AWS Solutions Architect'
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
          </div>

          <div className="intro-description">
            <p className="terminal-output">
              <span className="prompt">$ cat about.txt</span>
            </p>
            <div className="about-content">
              <p>
                Passionate Cloud Engineer specializing in AWS infrastructure, automation, 
                and DevOps practices. Expert in designing scalable, secure, and cost-effective 
                cloud solutions that drive business transformation.
              </p>
              <p>
                With extensive experience in AWS services including EC2, S3, ECS, EKS, Lambda, 
                and CloudFormation, I build robust cloud architectures that power modern applications.
              </p>
              <p>
                Currently working on COSMOS Engineering projects, implementing enterprise-grade 
                centralized logging, security compliance, and infrastructure automation for 
                government cloud environments.
              </p>
            </div>

            <div className="skills-grid">
              <div className="skill-category">
                <h4>☁️ Cloud Platforms</h4>
                <ul>
                  <li>AWS (EC2, S3, ECS, EKS, Lambda)</li>
                  <li>AWS GovCloud</li>
                  <li>CloudFormation & CDK</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h4>🔧 DevOps Tools</h4>
                <ul>
                  <li>Docker & Kubernetes</li>
                  <li>Terraform & Ansible</li>
                  <li>CI/CD (Jenkins, GitLab)</li>
                </ul>
              </div>

              <div className="skill-category">
                <h4>🛡️ Security & Compliance</h4>
                <ul>
                  <li>IAM & Security Groups</li>
                  <li>CloudTrail & CloudWatch</li>
                  <li>Wiz Security Integration</li>
                </ul>
              </div>

              <div className="skill-category">
                <h4>💻 Programming</h4>
                <ul>
                  <li>Python & Bash</li>
                  <li>JavaScript/Node.js</li>
                  <li>Infrastructure as Code</li>
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

