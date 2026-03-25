# 📦 Installation Instructions

Complete step-by-step installation guide for your Cloud Engineer Portfolio.

## Prerequisites

Before you begin, ensure you have:

- **Node.js** 18.x or higher ([Download](https://nodejs.org/))
- **npm** 9.x or higher (comes with Node.js)
- **Git** (optional, for version control)
- **AWS CLI** (optional, for AWS deployment)

### Verify Prerequisites

```bash
node --version    # Should be 18.x or higher
npm --version     # Should be 9.x or higher
```

## Installation Steps

### Step 1: Navigate to Project Directory

```bash
cd "/Users/affanchowdhury/Library/CloudStorage/OneDrive-strategicbusiness/Desktop/COSMOS Engineering/portfolio-website"
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install:
- React 18.3.1
- Vite 5.4.3
- xterm.js 5.5.0
- AWS SDK v3 packages
- React Icons
- All development dependencies

**Expected output:**
```
added 234 packages, and audited 235 packages in 15s

89 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

### Step 3: Verify Installation

```bash
npm run dev
```

The development server should start at `http://localhost:3000`

Press `Ctrl+C` to stop the server.

## Configuration

### 1. Add Your Profile Picture

**Option A: Use your own photo**
```bash
# Copy your photo to public folder
cp ~/path/to/your/photo.jpg public/profile.jpg
```

**Option B: Use placeholder** (default)
- The site will automatically use `profile-placeholder.svg` if no photo is found

### 2. Customize Personal Information

**Update Introduction:**
```bash
# Open in your editor
code src/components/Introduction.jsx
# or
nano src/components/Introduction.jsx
```

Key sections to update:
- Line 8: Change the typing text
- Line 43-45: Update your bio
- Line 77-79: Update social media links

**Update Resume:**
```bash
code src/components/Resume.jsx
```

Key sections to update:
- Line 22-42: Work experience
- Line 66-98: Projects
- Line 114-137: Certifications

### 3. (Optional) Configure AWS

**For demo mode:** No configuration needed! Works out of the box.

**For real AWS integration:**

Edit `src/utils/awsCommands.js` and add Cognito configuration:

```javascript
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";

const credentials = fromCognitoIdentityPool({
  client: new CognitoIdentityClient({ region: "us-east-1" }),
  identityPoolId: "YOUR_IDENTITY_POOL_ID"
});
```

## Development Workflow

### Start Development Server

```bash
# Option 1: Using the quick start script
./start.sh

# Option 2: Using npm
npm run dev
```

Access your site at: **http://localhost:3000**

### Build for Production

```bash
npm run build
```

This creates optimized files in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

Preview the production build locally at `http://localhost:4173`

## Troubleshooting

### Issue: Dependencies won't install

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Port 3000 already in use

**Solution:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- --port 3001
```

### Issue: Module not found errors

**Solution:**
```bash
# Ensure you're in the correct directory
pwd  # Should show portfolio-website path

# Reinstall dependencies
npm install
```

### Issue: Profile image not showing

**Solution:**
```bash
# Check if file exists
ls -la public/profile.jpg

# If not, add your photo or use placeholder
# The placeholder will load automatically
```

### Issue: Terminal not rendering

**Solution:**
1. Check browser console for errors (F12)
2. Ensure xterm packages installed:
```bash
npm install @xterm/xterm @xterm/addon-fit
```
3. Clear browser cache and reload

### Issue: AWS commands return errors

**Solution:**
- Verify you're in demo mode (default behavior)
- Check browser console for specific errors
- Ensure AWS SDK packages are installed:
```bash
npm install @aws-sdk/client-ec2 @aws-sdk/client-s3 @aws-sdk/client-sts
```

## Environment Setup

### Development Environment

No environment variables needed for basic functionality.

### Production Environment (Optional)

Create `.env.production` for production settings:

```bash
# .env.production
VITE_AWS_REGION=us-east-1
VITE_COGNITO_POOL_ID=your-pool-id
# Add other production configs
```

**Note:** Variables must be prefixed with `VITE_` to be accessible.

## File Structure

After installation, your structure should look like:

```
portfolio-website/
├── node_modules/          # Dependencies (ignored by git)
├── public/                # Static files
│   ├── cloud-icon.svg
│   └── profile-placeholder.svg
├── src/                   # Source code
│   ├── components/        # React components
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
└── README.md             # Documentation
```

## Next Steps

1. ✅ Run the development server
2. ✅ Customize your information
3. ✅ Add your profile picture
4. ✅ Test all features
5. ✅ Build for production
6. ✅ Deploy (see SETUP_GUIDE.md)

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Use quick start script
./start.sh

# Deploy to AWS (after configuration)
./deploy-aws.sh
```

## Support Resources

- **Main Documentation:** `README.md`
- **Quick Start Guide:** `QUICKSTART.md`
- **Setup Guide:** `SETUP_GUIDE.md`
- **Interview Tips:** `PROJECT_SHOWCASE.md`

## Verification Checklist

After installation, verify:

- [ ] Development server starts without errors
- [ ] Home page loads at localhost:3000
- [ ] Terminal is visible and functional
- [ ] Can type commands in terminal
- [ ] Navigation works (intro, resume sections)
- [ ] Profile section displays (with placeholder or your photo)
- [ ] Resume section displays
- [ ] All styling renders correctly
- [ ] No console errors in browser DevTools

## Success!

If all checks pass, your portfolio is ready for customization and deployment! 🎉

For deployment instructions, see `SETUP_GUIDE.md`

---

**Having issues?** Check the Troubleshooting section above or review the browser console for specific error messages.

