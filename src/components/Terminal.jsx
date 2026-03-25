import { useEffect, useRef, useState } from 'react'
import { Terminal as XTerm } from '@xterm/xterm'
import { FitAddon } from '@xterm/addon-fit'
import '@xterm/xterm/css/xterm.css'
import './Terminal.css'
import { executeAWSCommand } from '../utils/awsCommands'
import { AWS_SERVICES, COMMAND_CATEGORIES, getAllCommands, searchCommands, getServiceInfo, getServiceCommands } from '../utils/awsCommandDatabase.js'

const Terminal = ({ fullScreen = false, onNavigate }) => {
  const terminalRef = useRef(null)
  const xtermRef = useRef(null)
  const fitAddonRef = useRef(null)
  const [currentCommand, setCurrentCommand] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  useEffect(() => {
    if (!terminalRef.current) return

    const term = new XTerm({
      cursorBlink: true,
      cursorStyle: 'block',
      fontFamily: 'Consolas, Monaco, "Courier New", monospace',
      fontSize: 14,
      theme: {
        background: '#000000',
        foreground: '#ffffff',
        cursor: '#ff9900',
        black: '#000000',
        red: '#ef4444',
        green: '#22c55e',
        yellow: '#f59e0b',
        blue: '#3b82f6',
        magenta: '#a855f7',
        cyan: '#06b6d4',
        white: '#ffffff',
        brightBlack: '#555555',
        brightRed: '#f87171',
        brightGreen: '#4ade80',
        brightYellow: '#fbbf24',
        brightBlue: '#60a5fa',
        brightMagenta: '#c084fc',
        brightCyan: '#22d3ee',
        brightWhite: '#ffffff'
      },
      allowProposedApi: true
    })

    const fitAddon = new FitAddon()
    term.loadAddon(fitAddon)
    
    term.open(terminalRef.current)
    fitAddon.fit()

    xtermRef.current = term
    fitAddonRef.current = fitAddon

    // Professional welcome message
    term.writeln('\x1b[1;33m╔═══════════════════════════════════════════════════════════════╗\x1b[0m')
    term.writeln('\x1b[1;33m║              PROFESSIONAL PORTFOLIO TERMINAL v2.0           ║\x1b[0m')
    term.writeln('\x1b[1;33m╚═══════════════════════════════════════════════════════════════╝\x1b[0m')
    term.writeln('')
    term.writeln('\x1b[1;36mWelcome to the Professional Portfolio Terminal\x1b[0m')
    term.writeln('\x1b[1;36mAffan Chowdhury - Cloud Engineer & Solutions Architect\x1b[0m')
    term.writeln('')
    term.writeln('\x1b[1;33mAvailable Commands:\x1b[0m')
    term.writeln('  \x1b[32mhelp\x1b[0m           - Show all available commands')
    term.writeln('  \x1b[32mopen intro\x1b[0m     - View introduction section')
    term.writeln('  \x1b[32mopen experience\x1b[0m - View experience & projects')
    term.writeln('  \x1b[32mopen skills\x1b[0m    - View skills & certifications')
    term.writeln('  \x1b[32mopen projects\x1b[0m  - View detailed projects')
    term.writeln('  \x1b[32mopen education\x1b[0m - View education & achievements')
    term.writeln('  \x1b[32mopen resume\x1b[0m    - View resume section')
    term.writeln('  \x1b[32mopen contact\x1b[0m   - View contact information')
    term.writeln('  \x1b[32mresume\x1b[0m         - Download/view resume PDF')
    term.writeln('  \x1b[32mdownload resume\x1b[0m - Download resume PDF')
    term.writeln('  \x1b[32maws --version\x1b[0m  - Check AWS CLI version')
    term.writeln('  \x1b[32maws services\x1b[0m   - List all AWS services')
    term.writeln('  \x1b[32maws search <term>\x1b[0m - Search AWS commands')
    term.writeln('  \x1b[32maws s3 ls\x1b[0m      - List S3 buckets')
    term.writeln('  \x1b[32maws ec2 describe-instances\x1b[0m - List EC2 instances')
    term.writeln('  \x1b[32maws iam list-users\x1b[0m - List IAM users')
    term.writeln('  \x1b[32maws cloudwatch list-metrics\x1b[0m - List metrics')
    term.writeln('  \x1b[32maws-terminal\x1b[0m   - Switch to dedicated AWS Terminal')
    term.writeln('  \x1b[32mwhoami\x1b[0m         - Display current user info')
    term.writeln('  \x1b[35mmatrix\x1b[0m         - Matrix philosophy')
    term.writeln('  \x1b[35mspoon\x1b[0m          - There is no spoon')
    term.writeln('  \x1b[35mneo\x1b[0m           - You are the One')
    term.writeln('  \x1b[36maws\x1b[0m           - Open AWS website')
    term.writeln('  \x1b[36mdocker\x1b[0m        - Open Docker website')
    term.writeln('  \x1b[36mkubernetes\x1b[0m    - Open Kubernetes website')
    term.writeln('  \x1b[36mterraform\x1b[0m     - Open Terraform website')
    term.writeln('  \x1b[32mclear\x1b[0m          - Clear terminal screen')
    term.writeln('  \x1b[32mexit\x1b[0m           - Exit terminal')
    term.writeln('')
    term.writeln('\x1b[1;33mBuilding the future of cloud infrastructure, one command at a time.\x1b[0m')
    term.writeln('')
    term.writeln('\x1b[1;33m💡 For full AWS CLI experience, use: aws-terminal\x1b[0m')
    term.writeln('')
    prompt(term)

    let currentLine = ''
    
    term.onKey(({ key, domEvent }) => {
      const printable = !domEvent.altKey && !domEvent.ctrlKey && !domEvent.metaKey

      if (domEvent.keyCode === 13) { // Enter
        term.write('\r\n')
        if (currentLine.trim()) {
          handleCommand(currentLine.trim(), term, onNavigate)
          setCommandHistory(prev => [...prev, currentLine.trim()])
          setHistoryIndex(-1)
        }
        currentLine = ''
        setCurrentCommand('')
      } else if (domEvent.keyCode === 8) { // Backspace
        if (currentLine.length > 0) {
          currentLine = currentLine.slice(0, -1)
          term.write('\b \b')
          setCurrentCommand(currentLine)
        }
      } else if (domEvent.keyCode === 38) { // Up arrow
        // Command history navigation
        if (commandHistory.length > 0) {
          const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
          setHistoryIndex(newIndex)
          // Clear current line
          term.write('\r\x1b[K')
          prompt(term)
          currentLine = commandHistory[newIndex]
          term.write(currentLine)
          setCurrentCommand(currentLine)
        }
      } else if (domEvent.keyCode === 40) { // Down arrow
        if (historyIndex !== -1) {
          const newIndex = historyIndex + 1
          if (newIndex >= commandHistory.length) {
            setHistoryIndex(-1)
            term.write('\r\x1b[K')
            prompt(term)
            currentLine = ''
            setCurrentCommand('')
          } else {
            setHistoryIndex(newIndex)
            term.write('\r\x1b[K')
            prompt(term)
            currentLine = commandHistory[newIndex]
            term.write(currentLine)
            setCurrentCommand(currentLine)
          }
        }
      } else if (printable) {
        currentLine += key
        term.write(key)
        setCurrentCommand(currentLine)
      }
    })

    const handleResize = () => {
      fitAddon.fit()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      term.dispose()
    }
  }, [])

  const prompt = (term) => {
    term.write('\r\n\x1b[1;36maffan@cloud-engineer\x1b[0m:\x1b[1;34m~\x1b[0m$ ')
  }

  const handleCommand = async (cmd, term, onNavigate) => {
    const command = cmd.toLowerCase().trim()

    if (command === 'help') {
      term.writeln('\x1b[1;33mAvailable Commands:\x1b[0m')
      term.writeln('  \x1b[32mhelp\x1b[0m           - Show all available commands')
      term.writeln('  \x1b[32mopen intro\x1b[0m     - View introduction section')
      term.writeln('  \x1b[32mopen experience\x1b[0m - View experience & projects')
      term.writeln('  \x1b[32mopen skills\x1b[0m    - View skills & certifications')
      term.writeln('  \x1b[32mopen projects\x1b[0m  - View detailed projects')
      term.writeln('  \x1b[32mopen education\x1b[0m - View education & achievements')
      term.writeln('  \x1b[32mopen resume\x1b[0m    - View resume section')
      term.writeln('  \x1b[32mopen contact\x1b[0m   - View contact information')
      term.writeln('  \x1b[32mresume\x1b[0m         - View resume PDF')
      term.writeln('  \x1b[32mdownload resume\x1b[0m - Download resume PDF')
      term.writeln('  \x1b[32maws --version\x1b[0m  - Check AWS CLI version')
      term.writeln('  \x1b[32maws services\x1b[0m   - List all AWS services')
      term.writeln('  \x1b[32maws search <term>\x1b[0m - Search AWS commands')
      term.writeln('  \x1b[32maws s3 ls\x1b[0m      - List S3 buckets')
      term.writeln('  \x1b[32maws ec2 describe-instances\x1b[0m - List EC2 instances')
      term.writeln('  \x1b[32maws iam list-users\x1b[0m - List IAM users')
      term.writeln('  \x1b[32maws cloudwatch list-metrics\x1b[0m - List metrics')
      term.writeln('  \x1b[32maws-terminal\x1b[0m   - Switch to dedicated AWS Terminal')
      term.writeln('  \x1b[32mwhoami\x1b[0m         - Display current user info')
      term.writeln('  \x1b[35mmatrix\x1b[0m         - Matrix philosophy')
      term.writeln('  \x1b[35mspoon\x1b[0m          - There is no spoon')
      term.writeln('  \x1b[35mneo\x1b[0m           - You are the One')
      term.writeln('  \x1b[36maws\x1b[0m           - Open AWS website')
      term.writeln('  \x1b[36mdocker\x1b[0m        - Open Docker website')
      term.writeln('  \x1b[36mkubernetes\x1b[0m    - Open Kubernetes website')
      term.writeln('  \x1b[36mterraform\x1b[0m     - Open Terraform website')
      term.writeln('  \x1b[32mclear\x1b[0m          - Clear terminal screen')
      term.writeln('  \x1b[32mexit\x1b[0m           - Exit terminal')
    } else if (command === 'open intro' || command === 'intro') {
      term.writeln('\x1b[1;32m✓ Opening introduction section...\x1b[0m')
      setTimeout(() => onNavigate && onNavigate('intro'), 500)
    } else if (command === 'open experience' || command === 'experience') {
      term.writeln('\x1b[1;32m✓ Opening experience section...\x1b[0m')
      setTimeout(() => onNavigate && onNavigate('experience'), 500)
    } else if (command === 'open skills' || command === 'skills') {
      term.writeln('\x1b[1;32m✓ Opening skills section...\x1b[0m')
      setTimeout(() => onNavigate && onNavigate('skills'), 500)
    } else if (command === 'open projects' || command === 'projects') {
      term.writeln('\x1b[1;32m✓ Opening projects section...\x1b[0m')
      setTimeout(() => onNavigate && onNavigate('projects'), 500)
    } else if (command === 'open education' || command === 'education') {
      term.writeln('\x1b[1;32m✓ Opening education section...\x1b[0m')
      setTimeout(() => onNavigate && onNavigate('education'), 500)
    } else if (command === 'open contact' || command === 'contact') {
      term.writeln('\x1b[1;32m✓ Opening contact section...\x1b[0m')
      setTimeout(() => onNavigate && onNavigate('contact'), 500)
    } else if (command === 'resume') {
      term.writeln('\x1b[1;32m📄 Opening resume PDF...\x1b[0m')
      window.open('/Affan_Chowdhury_Resume.pdf', '_blank')
    } else if (command === 'download resume' || command === 'resume download') {
      term.writeln('\x1b[1;32m⬇️  Downloading resume...\x1b[0m')
      const link = document.createElement('a')
      link.href = '/Affan_Chowdhury_Resume.pdf'
      link.download = 'Affan_Chowdhury_Cloud_Engineer_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      term.writeln('\x1b[1;32m✓ Resume downloaded!\x1b[0m')
    } else if (command === 'open resume') {
      term.writeln('\x1b[1;32m✓ Opening resume section...\x1b[0m')
      setTimeout(() => onNavigate && onNavigate('resume'), 500)
    } else if (command === 'whoami') {
      term.writeln('\x1b[1;36mAffan Chowdhury\x1b[0m')
      term.writeln('\x1b[33mRole:\x1b[0m Senior Cloud Engineer / Solutions Architect')
      term.writeln('\x1b[33mSpecialties:\x1b[0m AWS, DevOps, Infrastructure as Code, Kubernetes')
      term.writeln('\x1b[33mCertifications:\x1b[0m AWS Certified Solutions Architect, AWS Certified DevOps Engineer')
      term.writeln('\x1b[1;35mStatus:\x1b[0m Ready to architect your cloud infrastructure!')
    } else if (command === 'matrix' || command === 'redpill' || command === 'bluepill') {
      term.writeln('\x1b[1;35mYou are already in the Matrix, Neo.\x1b[0m')
      term.writeln('\x1b[1;36mThe Matrix is everywhere. It is all around us.\x1b[0m')
      term.writeln('\x1b[1;33mEven now, in this very room.\x1b[0m')
      term.writeln('\x1b[1;32mYou can see it when you look out your window...\x1b[0m')
      term.writeln('\x1b[1;31mOr when you turn on your television.\x1b[0m')
    } else if (command === 'spoon') {
      term.writeln('\x1b[1;35mThere is no spoon.\x1b[0m')
      term.writeln('\x1b[1;36mDo not try to bend the spoon - that\'s impossible.\x1b[0m')
      term.writeln('\x1b[1;33mInstead, only try to realize the truth...\x1b[0m')
      term.writeln('\x1b[1;32mThere is no spoon.\x1b[0m')
    } else if (command === 'neo') {
      term.writeln('\x1b[1;36mHello, Neo.\x1b[0m')
      term.writeln('\x1b[1;35mYou are the One.\x1b[0m')
      term.writeln('\x1b[1;33mWelcome to the real world.\x1b[0m')
    } else if (command === 'aws' || command === 'open aws') {
      term.writeln('\x1b[1;33m🌐 Opening AWS...\x1b[0m')
      window.open('https://aws.amazon.com/', '_blank')
    } else if (command === 'docker' || command === 'open docker') {
      term.writeln('\x1b[1;33m🐳 Opening Docker...\x1b[0m')
      window.open('https://www.docker.com/', '_blank')
    } else if (command === 'kubernetes' || command === 'k8s' || command === 'open kubernetes') {
      term.writeln('\x1b[1;33m☸️  Opening Kubernetes...\x1b[0m')
      window.open('https://kubernetes.io/', '_blank')
    } else if (command === 'terraform' || command === 'open terraform') {
      term.writeln('\x1b[1;33m🏗️  Opening Terraform...\x1b[0m')
      window.open('https://developer.hashicorp.com/terraform', '_blank')
    } else if (command === 'clear' || command === 'cls') {
      term.clear()
    } else if (command === 'exit') {
      term.writeln('\x1b[1;31mGoodbye! 👋\x1b[0m')
      setTimeout(() => term.clear(), 1000)
    } else if (command.startsWith('aws')) {
      term.writeln('\x1b[1;33m⚡ Executing AWS command...\x1b[0m')
      await executeAWSCommand(command, term)
    } else if (command === 'aws-terminal' || command === 'switch-aws') {
      term.writeln('\x1b[1;32m🔄 Switching to AWS Terminal...\x1b[0m')
      setTimeout(() => onNavigate && onNavigate('aws'), 500)
    } else if (command === '') {
      // Empty command, just show prompt
    } else {
      term.writeln(`\x1b[1;31mCommand not found: ${cmd}\x1b[0m`)
      term.writeln('Type \x1b[32mhelp\x1b[0m for available commands')
    }
    
    prompt(term)
  }

  return (
    <div className={`terminal-container ${fullScreen ? 'fullscreen' : ''}`}>
      <div ref={terminalRef} className="xterm-wrapper"></div>
    </div>
  )
}

export default Terminal

