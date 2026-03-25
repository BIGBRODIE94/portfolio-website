import { useState, useEffect, useRef } from 'react'
import './ProfessionalAuth.css'

const ProfessionalAuth = ({ onAuthenticated }) => {
  const [password, setPassword] = useState('')
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [error, setError] = useState('')
  const inputRef = useRef(null)

  const CORRECT_PASSWORD = '1994'

  useEffect(() => {
    // Focus input on mount
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsAuthenticating(true)
    setError('')

    // Simulate authentication delay
    setTimeout(() => {
      if (password === CORRECT_PASSWORD) {
        onAuthenticated()
      } else {
        setError('Invalid access code')
        setPassword('')
        setIsAuthenticating(false)
      }
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <div className="professional-auth-container">
      <div className="auth-background">
        <div className="geometric-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="auth-overlay">
        <div className="auth-card">
          <div className="auth-header">
            <div className="logo-container">
              <div className="logo-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                  <path d="M19 15L20.09 18.26L24 19L20.09 19.74L19 23L17.91 19.74L14 19L17.91 18.26L19 15Z" fill="currentColor"/>
                  <path d="M5 15L6.09 18.26L10 19L6.09 19.74L5 23L3.91 19.74L0 19L3.91 18.26L5 15Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <h1 className="auth-title">
              <span className="glitch" data-text="AFFAN CHOWDHURY">AFFAN CHOWDHURY</span>
            </h1>
            <p className="auth-subtitle">Cloud Engineer Portfolio</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="input-group">
              <label className="auth-label">Access Code</label>
              <div className="input-wrapper">
                <input
                  ref={inputRef}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="auth-input"
                  placeholder="Enter access code"
                  disabled={isAuthenticating}
                />
                <div className="input-border"></div>
              </div>
            </div>

            {error && (
              <div className="error-message">
                <svg className="error-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2"/>
                  <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span className="error-text">{error}</span>
              </div>
            )}

            <button 
              type="submit" 
              className={`auth-button ${isAuthenticating ? 'authenticating' : ''}`}
              disabled={isAuthenticating}
            >
              {isAuthenticating ? (
                <>
                  <div className="loading-spinner"></div>
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <svg className="button-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Enter Portfolio</span>
                </>
              )}
            </button>
          </form>

          <div className="auth-footer">
            <p className="hint-text">Hint: Birth year of the Matrix movie</p>
            <div className="security-badge">
              <svg className="security-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Secure Access</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalAuth
