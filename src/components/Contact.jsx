import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'affanc94@outlook.com',
      link: 'mailto:affanc94@outlook.com',
      description: 'Send me an email anytime'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/affan-chowdhury',
      link: 'https://www.linkedin.com/in/affan-chowdhury/',
      description: 'Connect with me professionally'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/BIGBRODIE94',
      link: 'https://github.com/BIGBRODIE94',
      description: 'Check out my code and projects'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (214) 518-1366',
      link: 'tel:+12145181366',
      description: 'Call or text anytime'
    }
  ];

  const availability = {
    status: 'Available for opportunities',
    responseTime: 'Within 24 hours',
    timezone: 'EST (UTC-5) — Greater Philadelphia Area',
    preferredContact: 'Email or LinkedIn'
  };

  const quickActions = [
    {
      title: 'Download Resume',
      description: 'Get my latest resume in PDF format',
      action: () => window.open('/Affan_Chowdhury_Resume.pdf', '_blank'),
      icon: '📄'
    },
    {
      title: 'Schedule a Call',
      description: 'Book a time to discuss opportunities',
      action: () => window.open('https://calendly.com/affanchowdhury', '_blank'),
      icon: '📅'
    },
    {
      title: 'View Portfolio',
      description: 'Explore my projects and case studies',
      action: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
      icon: '🎯'
    },
    {
      title: 'Connect on LinkedIn',
      description: 'Let\'s connect and network',
      action: () => window.open('https://www.linkedin.com/in/affan-chowdhury/', '_blank'),
      icon: '🤝'
    }
  ];

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="glitch" data-text="CONTACT">CONTACT</h1>
        <p className="contact-subtitle">Let's build something amazing together</p>
      </div>

      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info-section">
          <h2 className="section-title">Get In Touch</h2>
          
          <div className="availability-card">
            <div className="availability-header">
              <span className="availability-icon">🟢</span>
              <h3>Current Status</h3>
            </div>
            <div className="availability-details">
              <p><strong>Status:</strong> {availability.status}</p>
              <p><strong>Response Time:</strong> {availability.responseTime}</p>
              <p><strong>Timezone:</strong> {availability.timezone}</p>
              <p><strong>Preferred Contact:</strong> {availability.preferredContact}</p>
            </div>
          </div>

          <div className="contact-methods">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
              >
                <div className="contact-method-icon">{info.icon}</div>
                <div className="contact-method-content">
                  <h4 className="contact-method-title">{info.title}</h4>
                  <p className="contact-method-value">{info.value}</p>
                  <p className="contact-method-description">{info.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-section">
          <h2 className="section-title">Send a Message</h2>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="What's this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                placeholder="Tell me about your project or opportunity..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  <span>🚀</span>
                  Send Message
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="submit-success">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions-section">
          <h2 className="section-title">Quick Actions</h2>
          
          <div className="quick-actions-grid">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="quick-action-btn"
                onClick={action.action}
              >
                <div className="quick-action-icon">{action.icon}</div>
                <div className="quick-action-content">
                  <h4 className="quick-action-title">{action.title}</h4>
                  <p className="quick-action-description">{action.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="additional-contact-info">
          <div className="info-card">
            <h3>💡 What I'm Looking For</h3>
            <ul>
              <li>Senior Cloud Engineer positions</li>
              <li>DevOps/Platform Engineering roles</li>
              <li>Technical leadership opportunities</li>
              <li>Remote or hybrid work arrangements</li>
              <li>Companies with strong engineering culture</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>🎯 Ideal Projects</h3>
            <ul>
              <li>Multi-cloud architecture design</li>
              <li>Kubernetes and container orchestration</li>
              <li>Infrastructure automation and IaC</li>
              <li>Security and compliance implementations</li>
              <li>DevOps transformation initiatives</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>⏰ Best Times to Reach Me</h3>
            <ul>
              <li>Monday - Friday: 9 AM - 6 PM EST</li>
              <li>Response time: Within 24 hours</li>
              <li>Emergency contact: Available via email</li>
              <li>Video calls: Flexible scheduling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
