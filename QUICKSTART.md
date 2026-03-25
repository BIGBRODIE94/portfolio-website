# 🚀 Quick Start Guide

Get your portfolio website running in 3 simple steps!

## Step 1: Install Dependencies

```bash
cd portfolio-website
npm install
```

## Step 2: Start Development Server

```bash
# Option 1: Use the quick start script
./start.sh

# Option 2: Manual start
npm run dev
```

Your website will be available at: **http://localhost:3000**

## Step 3: Customize Your Portfolio

### 📸 Add Your Profile Picture
Replace the placeholder with your photo:
```bash
# Add your photo as:
public/profile.jpg
# Recommended: 500x500px or larger, square format
```

### 📝 Update Your Information

**Personal Info** (`src/components/Introduction.jsx`):
- Update your name, bio, and description
- Change social media links (GitHub, LinkedIn, Email)
- Modify your skills and tech stack

**Resume** (`src/components/Resume.jsx`):
- Update work experience
- Add your projects
- Update education and certifications
- Modify technical skills

## 🎨 Try the Terminal!

Once the site is running, open the terminal at the bottom and try:

```bash
help              # Show all commands
open intro        # Go to introduction
open resume       # Go to resume
whoami            # Your info
aws s3 ls         # List S3 buckets (demo mode)
aws ec2 describe-instances  # List EC2 instances (demo)
clear             # Clear terminal
```

## 🌐 Deploy Your Site

### Fastest: Netlify or Vercel
1. Push code to GitHub
2. Connect your repo to [Netlify](https://netlify.com) or [Vercel](https://vercel.com)
3. Click Deploy!

### AWS S3 + CloudFront
```bash
# Configure the script first
nano deploy-aws.sh  # Update bucket name and CloudFront ID

# Then deploy
./deploy-aws.sh
```

## 🔐 Connect Real AWS Account (Optional)

The terminal works in **demo mode** by default. To connect real AWS:

1. **Option 1: AWS Cognito** (Recommended for production)
   - Create Cognito Identity Pool
   - Update `src/utils/awsCommands.js`

2. **Option 2: Backend Proxy** (Most secure)
   - Create backend API to handle AWS requests
   - Keep credentials server-side

⚠️ **Never hardcode AWS credentials in frontend code!**

## 📚 Need More Help?

- Full setup guide: `SETUP_GUIDE.md`
- Project documentation: `README.md`
- Check browser console for errors

## ✅ What You Get

✨ **Features:**
- Interactive terminal with AWS integration
- Resume and introduction sections
- Animated UI with cyberpunk/matrix theme
- Fully responsive design
- Navigation via terminal commands
- AWS CLI command demonstrations

🎯 **Perfect for showcasing:**
- Cloud engineering skills
- AWS expertise
- DevOps knowledge
- Your professional experience

---

**Ready to impress in your next interview!** 🚀

Questions? Check the README.md or customize the code to fit your needs.

