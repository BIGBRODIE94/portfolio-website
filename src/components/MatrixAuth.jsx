import { useState, useEffect, useRef } from 'react'
import './MatrixAuth.css'

const MatrixAuth = ({ onAuthenticated }) => {
  const [password, setPassword] = useState('')
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [error, setError] = useState('')
  const [matrixText, setMatrixText] = useState('')
  const inputRef = useRef(null)
  const canvasRef = useRef(null)

  const CORRECT_PASSWORD = '1994'

  useEffect(() => {
    // Focus input on mount
    if (inputRef.current) {
      inputRef.current.focus()
    }

    // Start matrix animation
    startMatrixAnimation()
  }, [])

  const startMatrixAnimation = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}"
    const matrixArray = matrix.split("")

    const fontSize = 14
    const columns = canvas.width / fontSize

    const drops = []
    for (let x = 0; x < columns; x++) {
      drops[x] = 1
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#0F4'
      ctx.font = fontSize + 'px monospace'

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)
    
    return () => clearInterval(interval)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsAuthenticating(true)
    setError('')

    // Simulate authentication delay
    setTimeout(() => {
      if (password === CORRECT_PASSWORD) {
        onAuthenticated()
      } else {
        setError('ACCESS DENIED')
        setPassword('')
        setIsAuthenticating(false)
      }
    }, 1000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <div className="matrix-auth-container">
      <canvas ref={canvasRef} className="matrix-canvas"></canvas>
      
      <div className="auth-overlay">
        <div className="auth-box">
          <div className="matrix-header">
            <h1 className="matrix-title">
              <span className="glitch" data-text="NEO">NEO</span>
            </h1>
            <p className="matrix-subtitle">ENTER THE MATRIX</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="input-group">
              <label className="matrix-label">ACCESS CODE:</label>
              <input
                ref={inputRef}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                className="matrix-input"
                placeholder="Enter password..."
                disabled={isAuthenticating}
              />
            </div>

            {error && (
              <div className="error-message">
                <span className="error-text">{error}</span>
              </div>
            )}

            <button 
              type="submit" 
              className={`matrix-button ${isAuthenticating ? 'authenticating' : ''}`}
              disabled={isAuthenticating}
            >
              {isAuthenticating ? (
                <>
                  <span className="loading-dots">●●●</span>
                  <span>CONNECTING...</span>
                </>
              ) : (
                'ENTER MATRIX'
              )}
            </button>
          </form>

          <div className="matrix-footer">
            <p className="hint-text">Hint: Birth year of the Matrix movie</p>
            <div className="matrix-scanlines"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatrixAuth
