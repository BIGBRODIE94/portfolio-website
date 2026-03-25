# 🏗️ Portfolio Website Architecture

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      USER BROWSER                           │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │              React Application (SPA)                │  │
│  │                                                     │  │
│  │  ┌─────────────┐  ┌──────────────┐  ┌───────────┐ │  │
│  │  │Introduction │  │   Resume     │  │  AWS CLI  │ │  │
│  │  │  Section    │  │   Section    │  │  Terminal │ │  │
│  │  └─────────────┘  └──────────────┘  └───────────┘ │  │
│  │         │                 │                │       │  │
│  │         └─────────────────┴────────────────┘       │  │
│  │                          │                          │  │
│  │                     ┌────▼────┐                     │  │
│  │                     │ App.jsx │                     │  │
│  │                     └─────────┘                     │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │            xterm.js Terminal Emulator               │  │
│  │  • Command parsing                                  │  │
│  │  • Command history                                  │  │
│  │  • Output rendering                                 │  │
│  └─────────────────────────────────────────────────────┘  │
│                            │                                │
└────────────────────────────┼────────────────────────────────┘
                             │
                             ▼
                   ┌──────────────────┐
                   │  AWS SDK v3      │
                   │  (Demo Mode)     │
                   │                  │
                   │  • EC2 Client    │
                   │  • S3 Client     │
                   │  • STS Client    │
                   └──────────────────┘
                             │
                             ▼
              ┌──────────────────────────────┐
              │  Production Options:         │
              │  ┌────────────────────────┐  │
              │  │ 1. AWS Cognito         │  │
              │  │    (Identity Pool)     │  │
              │  └────────────────────────┘  │
              │  ┌────────────────────────┐  │
              │  │ 2. Backend Proxy       │  │
              │  │    (Lambda/API GW)     │  │
              │  └────────────────────────┘  │
              └──────────────────────────────┘
```

## Component Structure

```
App.jsx (Main Container)
│
├── Introduction.jsx
│   ├── Profile Image
│   ├── Bio & Description
│   ├── Tech Stack Icons
│   └── Social Links
│
├── Resume.jsx
│   ├── Experience Section
│   ├── Projects Section
│   ├── Education Section
│   ├── Certifications Section
│   └── Skills Matrix
│
└── Terminal.jsx
    ├── xterm.js Instance
    ├── Command Parser
    ├── AWS Command Handler
    └── Navigation Handler
```

## Data Flow

### Terminal Command Execution

```
User Types Command
       │
       ▼
Terminal.jsx (onKey event)
       │
       ▼
Command Parser
       │
       ├─── Navigation Command? ──> Update View State
       │
       ├─── AWS Command? ──> awsCommands.js
       │                          │
       │                          ├─── Demo Mode: Return Sample Data
       │                          │
       │                          └─── Production: Call AWS SDK
       │
       └─── Help/System Command? ──> Display Info
```

### View Navigation Flow

```
Terminal Command: "open intro"
       │
       ▼
Terminal.jsx calls onNavigate('intro')
       │
       ▼
App.jsx updates currentView state
       │
       ▼
React re-renders with Introduction component
```

## Technology Stack

### Frontend Framework
- **React 18.3.1**
  - Functional components with hooks
  - useState for state management
  - useEffect for lifecycle
  - useRef for terminal instance

### Build System
- **Vite 5.4.3**
  - Lightning-fast HMR
  - Optimized production builds
  - ES modules support

### Terminal Emulation
- **xterm.js 5.5.0**
  - Full terminal emulator
  - FitAddon for responsive sizing
  - Custom key handling
  - ANSI color support

### Cloud Integration
- **AWS SDK v3**
  - `@aws-sdk/client-ec2` - EC2 operations
  - `@aws-sdk/client-s3` - S3 operations
  - `@aws-sdk/client-sts` - Identity operations
  - Modular imports for smaller bundle

### Styling
- **Custom CSS**
  - CSS Grid & Flexbox layouts
  - CSS Animations (no external libs)
  - Responsive design with media queries
  - Cyberpunk/Matrix theme

### Icons
- **React Icons 5.3.0**
  - Font Awesome icons
  - Simple Icons (tech logos)
  - Zero config

## Deployment Architecture

### Option 1: Static Hosting (S3 + CloudFront)

```
┌──────────┐    ┌──────────────┐    ┌─────────────┐
│  User    │───▶│  CloudFront  │───▶│  S3 Bucket  │
└──────────┘    │  (CDN)       │    │  (Static)   │
                └──────────────┘    └─────────────┘
                       │
                       ▼
                ┌──────────────┐
                │  Route 53    │
                │  (DNS)       │
                └──────────────┘
```

### Option 2: Vercel/Netlify

```
┌──────────┐    ┌──────────────┐    ┌─────────────┐
│  User    │───▶│  Vercel CDN  │───▶│  Git Repo   │
└──────────┘    │  (Auto)      │    │  (Source)   │
                └──────────────┘    └─────────────┘
                                           │
                                           ▼
                                    Auto-deploy on push
```

## Security Model

### Demo Mode (Current)
```
Browser → AWS SDK (No Credentials) → Return Demo Data
```
✅ Safe for public viewing
✅ No credentials needed
✅ Showcases AWS knowledge

### Production Mode (Optional)

#### Option A: AWS Cognito
```
Browser → Cognito Identity Pool → Temporary Credentials → AWS Services
```

#### Option B: Backend Proxy
```
Browser → API Gateway → Lambda → AWS Services (with IAM role)
```

## Performance Optimization

### Bundle Size Strategy
- Tree-shaking with Vite
- Modular AWS SDK imports (only needed clients)
- Code splitting by route (if extended)
- Lazy loading components (future)

### Loading Strategy
- Critical CSS inline
- Fonts preloaded
- Images optimized
- Service Worker (future enhancement)

### Caching Strategy
```
Static Assets (1 year):
  - *.js, *.css, *.svg, *.jpg

HTML (No cache):
  - index.html

API Responses (5 min):
  - AWS command responses
```

## Terminal Command Architecture

### Command Types

**Navigation Commands:**
```javascript
'open intro'   → setCurrentView('intro')
'open resume'  → setCurrentView('resume')
```

**System Commands:**
```javascript
'help'   → Display command list
'clear'  → Clear terminal
'whoami' → Display user info
```

**AWS Commands:**
```javascript
'aws s3 ls'                    → List S3 buckets
'aws ec2 describe-instances'   → List EC2 instances
'aws sts get-caller-identity'  → Get AWS identity
```

### Command Parser Flow

```javascript
// Pseudo-code
function handleCommand(cmd) {
  const command = cmd.toLowerCase().trim()
  
  if (isNavigationCommand(command)) {
    navigateToSection(command)
  } else if (isAWSCommand(command)) {
    executeAWSCommand(command)
  } else if (isSystemCommand(command)) {
    executeSystemCommand(command)
  } else {
    displayError('Command not found')
  }
}
```

## State Management

### Global State (App.jsx)
```javascript
{
  currentView: 'intro' | 'resume' | 'aws',
  terminalMinimized: boolean
}
```

### Component State

**Terminal.jsx:**
```javascript
{
  currentCommand: string,
  commandHistory: string[],
  historyIndex: number
}
```

**Introduction.jsx:**
```javascript
{
  text: string,            // Typing animation
  showCursor: boolean      // Cursor blink
}
```

## File Organization

```
src/
├── components/
│   ├── Terminal.jsx         # Terminal emulator
│   ├── Terminal.css        # Terminal styles
│   ├── Introduction.jsx    # Intro section
│   ├── Introduction.css    # Intro styles
│   ├── Resume.jsx          # Resume section
│   └── Resume.css          # Resume styles
│
├── utils/
│   └── awsCommands.js      # AWS SDK integration
│
├── App.jsx                 # Main app component
├── App.css                 # App-level styles
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## Extension Points

### Easy to Add:

1. **New Terminal Commands**
   - Add to `handleCommand()` in Terminal.jsx
   - Implement in awsCommands.js

2. **New Sections**
   - Create component in `src/components/`
   - Add route in App.jsx
   - Add navigation command

3. **Real AWS Integration**
   - Update awsCommands.js
   - Add Cognito configuration
   - Or create backend proxy

4. **New AWS Services**
   - Import SDK client
   - Add command handler
   - Update help text

5. **Themes**
   - Modify CSS color variables
   - Create theme switcher
   - Store preference in localStorage

## Future Enhancements

### Phase 2 Ideas:
- [ ] Authentication system (AWS Cognito)
- [ ] Real-time AWS resource monitoring
- [ ] WebSocket for live updates
- [ ] CloudFormation stack visualization
- [ ] Cost calculator integration
- [ ] Blog section with Markdown support
- [ ] Dark/Light theme toggle
- [ ] Terminal session recording/playback

### Phase 3 Ideas:
- [ ] AI assistant integration (ChatGPT/Claude)
- [ ] Infrastructure diagram generator
- [ ] Multi-cloud support (Azure, GCP)
- [ ] Collaborative terminal sessions
- [ ] Custom plugin system
- [ ] Terminal themes/customization

## Monitoring & Analytics

### Recommended Additions:
```javascript
// Google Analytics
// Posthog
// CloudWatch RUM (for AWS deployment)
// Sentry (error tracking)
```

### Key Metrics to Track:
- Page views per section
- Terminal command usage
- AWS command popularity
- User session duration
- Deployment performance

---

## Quick Reference

### Key Files
- `App.jsx` - Main application logic
- `Terminal.jsx` - Terminal implementation
- `awsCommands.js` - AWS integration
- `vite.config.js` - Build configuration

### Key Dependencies
- React 18.3.1
- Vite 5.4.3
- xterm.js 5.5.0
- AWS SDK v3

### Environment
- Node.js 18+
- npm 9+
- Modern browser (ES2020+)

---

Built with modern architecture principles for scalability and maintainability.

