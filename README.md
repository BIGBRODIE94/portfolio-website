# Cloud Engineer Portfolio Website

An interactive portfolio website featuring a live terminal that can connect to AWS services, showcasing cloud engineering expertise.

## 🚀 Features

- **Interactive Terminal**: Built-in terminal emulator using xterm.js
- **AWS Integration**: Execute real AWS CLI commands directly from the browser
- **Resume Section**: Professional experience and skills showcase
- **Introduction Section**: Personal branding with animated effects
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Cyberpunk/terminal aesthetic with matrix-style animations

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Terminal**: xterm.js with FitAddon
- **AWS SDK**: AWS SDK v3 for JavaScript
- **Styling**: Custom CSS with animations
- **Icons**: React Icons

## 📋 Prerequisites

- Node.js 18+ and npm
- AWS Account (optional, works in demo mode without credentials)
- AWS CLI configured locally (optional)

## 🔧 Installation

1. Clone the repository:
```bash
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Add your profile picture:
   - Replace `/public/profile.jpg` with your actual photo

4. Customize content:
   - Edit `src/components/Introduction.jsx` for personal info
   - Edit `src/components/Resume.jsx` for your experience
   - Update social media links in Introduction component

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```
Visit `http://localhost:3000`

### Production Build
```bash
npm run build
npm run preview
```

## 🔐 AWS Configuration

### Demo Mode (Default)
The terminal works in demo mode showing sample data without real AWS credentials.

### Real AWS Integration

**Option 1: Environment Variables** (Not recommended for browser)
```bash
export AWS_ACCESS_KEY_ID="your-access-key"
export AWS_SECRET_ACCESS_KEY="your-secret-key"
export AWS_DEFAULT_REGION="us-east-1"
```

**Option 2: AWS Cognito** (Recommended for production)
- Set up AWS Cognito Identity Pool
- Use temporary credentials
- Implement in `src/utils/awsCommands.js`

**Option 3: Backend Proxy** (Most Secure)
- Create a backend API to proxy AWS requests
- Keep credentials server-side
- Terminal calls your API instead of AWS directly

## 💻 Terminal Commands

### Navigation Commands
- `help` - Show all available commands
- `open intro` - Navigate to introduction
- `open resume` - Navigate to resume
- `whoami` - Display user information
- `clear` - Clear terminal
- `exit` - Exit terminal

### AWS Commands
- `aws --version` - Check AWS CLI version
- `aws configure` - View configuration info
- `aws s3 ls` - List S3 buckets
- `aws ec2 describe-instances` - List EC2 instances
- `aws sts get-caller-identity` - Get AWS account info

## 🎨 Customization

### Colors
Edit CSS variables in component stylesheets:
- Primary: `#00ff00` (Green)
- Secondary: `#00ffff` (Cyan)
- Accent: `#ff00ff` (Magenta)
- Warning: `#ffff00` (Yellow)
- Background: `#000000` (Black)

### Content
- **Introduction**: `src/components/Introduction.jsx`
- **Resume**: `src/components/Resume.jsx`
- **AWS Commands**: `src/utils/awsCommands.js`

## 📦 Deployment

### Deploy to AWS S3 + CloudFront

1. Build the project:
```bash
npm run build
```

2. Upload to S3:
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
```

3. Invalidate CloudFront cache:
```bash
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### Deploy to Vercel/Netlify

Simply connect your GitHub repository and these platforms will auto-deploy.

## 🔒 Security Notes

⚠️ **IMPORTANT**: Never hardcode AWS credentials in the frontend code!

- Use AWS Cognito for browser-based authentication
- Implement a backend proxy for sensitive operations
- Use temporary credentials with minimal permissions
- Enable CORS properly on AWS resources
- Consider using AWS Amplify for authentication

## 📝 To-Do Enhancements

- [ ] Add AWS Cognito authentication
- [ ] Implement contact form
- [ ] Add blog section
- [ ] Dark/Light theme toggle
- [ ] Add more AWS service integrations
- [ ] Create downloadable PDF resume
- [ ] Add project portfolio gallery
- [ ] Implement WebSocket for real-time updates

## 🤝 Contributing

This is a personal portfolio project, but feel free to fork and customize for your own use!

## 📄 License

MIT License - Feel free to use this as a template for your own portfolio

## 👤 Author

**Affan Chowdhury**
- Role: Cloud Engineer
- Specialties: AWS, DevOps, Infrastructure as Code

---

Built with ☁️ and 💚 by Affan Chowdhury

