import { useState } from 'react'
import Terminal from './components/Terminal'
import AWSTerminal from './components/AWSTerminal'
import Introduction from './components/Introduction'
import Resume from './components/Resume'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('intro')
  const [terminalMinimized, setTerminalMinimized] = useState(false)

  return (
    <div className="app">
      <div className="cloud-tech-bg"></div>
      
             <nav className="navbar">
               <div className="nav-brand">
                 <span className="nav-prompt">affan@cloud-engineer:~$</span>
               </div>
               <div className="nav-links">
                 <button onClick={() => setCurrentView('intro')} className={currentView === 'intro' ? 'active' : ''}>
                   <span className="cmd">./intro.sh</span>
                 </button>
                 <button onClick={() => setCurrentView('experience')} className={currentView === 'experience' ? 'active' : ''}>
                   <span className="cmd">./experience.sh</span>
                 </button>
                 <button onClick={() => setCurrentView('skills')} className={currentView === 'skills' ? 'active' : ''}>
                   <span className="cmd">./skills.sh</span>
                 </button>
                 <button onClick={() => setCurrentView('projects')} className={currentView === 'projects' ? 'active' : ''}>
                   <span className="cmd">./projects.sh</span>
                 </button>
                 <button onClick={() => setCurrentView('education')} className={currentView === 'education' ? 'active' : ''}>
                   <span className="cmd">./education.sh</span>
                 </button>
                 <button onClick={() => setCurrentView('resume')} className={currentView === 'resume' ? 'active' : ''}>
                   <span className="cmd">./resume.sh</span>
                 </button>
                 <button onClick={() => setCurrentView('contact')} className={currentView === 'contact' ? 'active' : ''}>
                   <span className="cmd">./contact.sh</span>
                 </button>
                 <button onClick={() => setCurrentView('aws')} className={currentView === 'aws' ? 'active' : ''}>
                   <span className="cmd">aws terminal</span>
                 </button>
               </div>
             </nav>

      <main className="main-content">
        {currentView === 'intro' && <Introduction />}
        {currentView === 'experience' && <Experience />}
        {currentView === 'skills' && <Skills />}
        {currentView === 'projects' && <Projects />}
        {currentView === 'education' && <Education />}
        {currentView === 'resume' && <Resume />}
        {currentView === 'contact' && <Contact />}
        {currentView === 'aws' && (
          <div className="aws-terminal-view">
            <AWSTerminal fullScreen={true} onNavigate={setCurrentView} />
          </div>
        )}
      </main>

      {currentView !== 'aws' && (
        <div className={`terminal-footer ${terminalMinimized ? 'minimized' : ''}`}>
          <div className="terminal-header">
            <span className="terminal-title">🖥️ Portfolio Terminal</span>
            <button 
              className="minimize-btn" 
              onClick={() => setTerminalMinimized(!terminalMinimized)}
            >
              {terminalMinimized ? '▲' : '▼'}
            </button>
          </div>
          {!terminalMinimized && <Terminal onNavigate={setCurrentView} />}
        </div>
      )}
    </div>
  )
}

export default App

