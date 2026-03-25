import { useEffect, useRef, useState } from 'react'
import { Terminal as XTerm } from '@xterm/xterm'
import { FitAddon } from '@xterm/addon-fit'
import '@xterm/xterm/css/xterm.css'
import './Terminal.css'
import { executeAWSCommand } from '../utils/awsCommands'
import { AWS_SERVICES, COMMAND_CATEGORIES } from '../utils/awsCommandDatabase'

const AWSTerminal = ({ fullScreen = false, onNavigate }) => {
  const terminalRef = useRef(null)
  const xtermRef = useRef(null)
  const fitAddonRef = useRef(null)
  const [currentCommand, setCurrentCommand] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [isAWSMode, setIsAWSMode] = useState(true)

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

    // AWS-themed welcome message
    term.writeln('\x1b[1;33m╔═══════════════════════════════════════════════════════════════╗\x1b[0m')
    term.writeln('\x1b[1;33m║              AWS CLOUD TERMINAL v2.0                        ║\x1b[0m')
    term.writeln('\x1b[1;33m╚═══════════════════════════════════════════════════════════════╝\x1b[0m')
    term.writeln('')
    term.writeln('\x1b[1;36m🌩️  Welcome to AWS Cloud Terminal\x1b[0m')
    term.writeln('\x1b[1;36mAffan Chowdhury\'s Interactive AWS Command Center\x1b[0m')
    term.writeln('')
    term.writeln('\x1b[1;33m🚀 Quick Start Commands:\x1b[0m')
    term.writeln('  \x1b[32maws help\x1b[0m              - Show comprehensive AWS CLI help')
    term.writeln('  \x1b[32maws services\x1b[0m           - List all available AWS services')
    term.writeln('  \x1b[32maws search <term>\x1b[0m      - Search for specific commands')
    term.writeln('  \x1b[32maws <service>\x1b[0m          - Show commands for a service')
    term.writeln('')
    term.writeln('\x1b[1;35m🔥 Popular AWS Services:\x1b[0m')
    term.writeln('  \x1b[32maws ec2\x1b[0m               - Elastic Compute Cloud')
    term.writeln('  \x1b[32maws s3\x1b[0m                - Simple Storage Service')
    term.writeln('  \x1b[32maws iam\x1b[0m               - Identity & Access Management')
    term.writeln('  \x1b[32maws lambda\x1b[0m            - Serverless Functions')
    term.writeln('  \x1b[32maws rds\x1b[0m               - Relational Database Service')
    term.writeln('  \x1b[32maws cloudwatch\x1b[0m        - Monitoring & Observability')
    term.writeln('  \x1b[32maws vpc\x1b[0m               - Virtual Private Cloud')
    term.writeln('  \x1b[32maws eks\x1b[0m               - Elastic Kubernetes Service')
    term.writeln('')
    term.writeln('\x1b[1;33m💡 Example Commands:\x1b[0m')
    term.writeln('  \x1b[32maws s3 ls\x1b[0m             - List S3 buckets')
    term.writeln('  \x1b[32maws ec2 describe-instances\x1b[0m - List EC2 instances')
    term.writeln('  \x1b[32maws iam list-users\x1b[0m    - List IAM users')
    term.writeln('  \x1b[32maws cloudwatch list-metrics\x1b[0m - List metrics')
    term.writeln('  \x1b[32maws sts get-caller-identity\x1b[0m - Get AWS account info')
    term.writeln('')
    term.writeln('\x1b[1;36m🔧 Navigation Commands:\x1b[0m')
    term.writeln('  \x1b[32mhelp\x1b[0m                  - Show all available commands')
    term.writeln('  \x1b[32mportfolio\x1b[0m             - Switch to portfolio terminal')
    term.writeln('  \x1b[32mclear\x1b[0m                 - Clear terminal screen')
    term.writeln('  \x1b[32mexit\x1b[0m                  - Exit terminal')
    term.writeln('')
    term.writeln('\x1b[1;35m⚡ Ready to manage your AWS infrastructure!\x1b[0m')
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
    term.write('\r\n\x1b[1;33maws@cloud-terminal\x1b[0m:\x1b[1;34m~\x1b[0m$ ')
  }

  const handleCommand = async (cmd, term, onNavigate) => {
    const command = cmd.toLowerCase().trim()

    if (command === 'help') {
      term.writeln('\x1b[1;33m╔═══════════════════════════════════════════════════════════════╗\x1b[0m')
      term.writeln('\x1b[1;33m║              AWS CLOUD TERMINAL COMMANDS                    ║\x1b[0m')
      term.writeln('\x1b[1;33m╚═══════════════════════════════════════════════════════════════╝\x1b[0m')
      term.writeln('')
      term.writeln('\x1b[1;36m🚀 AWS CLI Commands:\x1b[0m')
      term.writeln('  \x1b[32maws help\x1b[0m              - Show comprehensive AWS CLI help')
      term.writeln('  \x1b[32maws services\x1b[0m           - List all available AWS services')
      term.writeln('  \x1b[32maws search <term>\x1b[0m      - Search for specific commands')
      term.writeln('  \x1b[32maws <service>\x1b[0m          - Show commands for a service')
      term.writeln('  \x1b[32maws --version\x1b[0m         - Check AWS CLI version')
      term.writeln('  \x1b[32maws configure\x1b[0m         - Configure AWS credentials')
      term.writeln('')
      term.writeln('\x1b[1;35m🔥 Popular AWS Commands:\x1b[0m')
      term.writeln('  \x1b[32maws s3 ls\x1b[0m             - List S3 buckets')
      term.writeln('  \x1b[32maws ec2 describe-instances\x1b[0m - List EC2 instances')
      term.writeln('  \x1b[32maws iam list-users\x1b[0m    - List IAM users')
      term.writeln('  \x1b[32maws cloudwatch list-metrics\x1b[0m - List metrics')
      term.writeln('  \x1b[32maws sts get-caller-identity\x1b[0m - Get AWS account info')
      term.writeln('  \x1b[32maws lambda list-functions\x1b[0m - List Lambda functions')
      term.writeln('  \x1b[32maws rds describe-db-instances\x1b[0m - List RDS instances')
      term.writeln('  \x1b[32maws vpc describe-vpcs\x1b[0m  - List VPCs')
      term.writeln('')
      term.writeln('\x1b[1;33m🔧 Terminal Commands:\x1b[0m')
      term.writeln('  \x1b[32mportfolio\x1b[0m             - Switch to portfolio terminal')
      term.writeln('  \x1b[32mwhoami\x1b[0m               - Display current user info')
      term.writeln('  \x1b[32mclear\x1b[0m                - Clear terminal screen')
      term.writeln('  \x1b[32mexit\x1b[0m                 - Exit terminal')
      term.writeln('')
      term.writeln('\x1b[1;36m💡 Pro Tips:\x1b[0m')
      term.writeln('  • Use Tab completion for commands')
      term.writeln('  • Use ↑/↓ arrows for command history')
      term.writeln('  • Try "aws search database" to find DB-related commands')
      term.writeln('  • Use "aws <service>" to explore service commands')
    } else if (command === 'portfolio') {
      term.writeln('\x1b[1;32m🔄 Switching to Portfolio...\x1b[0m')
      setTimeout(() => onNavigate && onNavigate('intro'), 500)
    } else if (command === 'whoami') {
      term.writeln('\x1b[1;36mAffan Chowdhury (AWS Cloud Engineer)\x1b[0m')
      term.writeln('\x1b[33mRole:\x1b[0m Senior Cloud Engineer / Solutions Architect')
      term.writeln('\x1b[33mSpecialties:\x1b[0m AWS, DevOps, Infrastructure as Code, Kubernetes')
      term.writeln('\x1b[33mCertifications:\x1b[0m AWS Certified Solutions Architect, AWS Certified DevOps Engineer')
      term.writeln('\x1b[33mExperience:\x1b[0m 5+ years in cloud infrastructure and automation')
      term.writeln('\x1b[1;35mStatus:\x1b[0m Ready to architect your cloud infrastructure!')
    } else if (command === 'clear' || command === 'cls') {
      term.clear()
    } else if (command === 'exit') {
      term.writeln('\x1b[1;31mGoodbye! Thanks for using AWS Cloud Terminal! 👋\x1b[0m')
      setTimeout(() => term.clear(), 1000)
    } else if (command === '') {
      // Empty command, just show prompt
    } else if (command.startsWith('aws')) {
      term.writeln('\x1b[1;33m⚡ Executing AWS command...\x1b[0m')
      await executeAWSCommand(command, term)
    } else {
      term.writeln(`\x1b[1;31mCommand not found: ${cmd}\x1b[0m`)
      term.writeln('\x1b[33m💡 This is an AWS-focused terminal. Try:\x1b[0m')
      term.writeln('  \x1b[32maws help\x1b[0m - for AWS commands')
      term.writeln('  \x1b[32mportfolio\x1b[0m - to switch to portfolio terminal')
      term.writeln('  \x1b[32mhelp\x1b[0m - for all available commands')
    }
    
    prompt(term)
  }

  return (
    <div className={`terminal-container aws-terminal ${fullScreen ? 'fullscreen' : ''}`}>
      <div className="aws-terminal-header">
        <div className="aws-terminal-title">
          <span className="aws-icon">🌩️</span>
          <span>AWS Cloud Terminal</span>
        </div>
        <div className="aws-terminal-status">
          <span className="status-indicator"></span>
          <span>Connected</span>
        </div>
      </div>
      <div ref={terminalRef} className="xterm-wrapper"></div>
    </div>
  )
}

export default AWSTerminal
