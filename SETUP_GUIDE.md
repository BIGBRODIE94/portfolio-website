# Portfolio Website Setup Guide

## Quick Start

Follow these steps to get your portfolio website up and running:

### 1. Install Dependencies

```bash
cd portfolio-website
npm install
```

### 2. Add Your Profile Picture

Replace the placeholder image with your actual profile photo:

```bash
# Add your photo to: /public/profile.jpg
# Recommended size: 500x500px or larger (square format)
```

### 3. Customize Your Information

#### Update Introduction Section
Edit `src/components/Introduction.jsx`:
- Line 43-45: Update your bio/description
- Line 51-53: Update skills and experience
- Line 77-79: Update social media links (GitHub, LinkedIn, Email)

#### Update Resume Section
Edit `src/components/Resume.jsx`:
- Line 22-42: Update work experience
- Line 46-60: Update additional work history
- Line 66-98: Update your projects
- Line 104-108: Update education
- Line 114-137: Update certifications

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

## Terminal Commands

Your portfolio includes an interactive terminal with these commands:

### Navigation
- `help` - Show all commands
- `open intro` - Go to introduction
- `open resume` - Go to resume
- `whoami` - Show your info
- `clear` - Clear terminal

### AWS Commands (Demo Mode by default)
- `aws --version`
- `aws s3 ls`
- `aws ec2 describe-instances`

## Deployment Options

### Option 1: Netlify (Easiest)

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import from Git"
4. Select your repository
5. Netlify will auto-detect Vite settings
6. Click "Deploy"

Your site will be live at `https://your-site.netlify.app`

### Option 2: Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Add New" → "Project"
4. Import your repository
5. Vercel will auto-detect settings
6. Click "Deploy"

Your site will be live at `https://your-site.vercel.app`

### Option 3: AWS S3 + CloudFront

1. Update `deploy-aws.sh` with your bucket name and CloudFront ID
2. Make the script executable:
```bash
chmod +x deploy-aws.sh
```

3. Run deployment:
```bash
./deploy-aws.sh
```

#### First-time AWS Setup:

**Create S3 Bucket:**
```bash
aws s3 mb s3://your-portfolio-bucket-name
aws s3 website s3://your-portfolio-bucket-name \
    --index-document index.html \
    --error-document index.html
```

**Set Bucket Policy:**
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::your-portfolio-bucket-name/*"
  }]
}
```

**Create CloudFront Distribution:**
- Origin: Your S3 bucket website endpoint
- Default Root Object: index.html
- Error Pages: 404 → /index.html (for SPA routing)

## AWS Integration (Optional)

The terminal works in demo mode by default. To connect real AWS:

### Recommended: AWS Cognito (Secure)

1. Create Cognito Identity Pool
2. Enable unauthenticated access or configure authentication
3. Update `src/utils/awsCommands.js` to use Cognito credentials:

```javascript
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";

const credentials = fromCognitoIdentityPool({
  client: new CognitoIdentityClient({ region: "us-east-1" }),
  identityPoolId: "us-east-1:xxxxx-xxxx-xxxx-xxxx-xxxxxxxxx"
});
```

### Alternative: Backend Proxy (Most Secure)

1. Create a backend API (Lambda, Express, etc.)
2. Store AWS credentials server-side
3. Frontend calls your API
4. API executes AWS commands and returns results

## Customization Tips

### Change Color Scheme

Main colors are defined in component CSS files:
- **Green** (`#00ff00`): Primary color
- **Cyan** (`#00ffff`): Secondary color
- **Magenta** (`#ff00ff`): Accent color
- **Yellow** (`#ffff00`): Warning/highlight

Search and replace these hex codes to change the theme.

### Add More AWS Commands

Edit `src/utils/awsCommands.js` to add more AWS CLI commands:

```javascript
if (command.includes('aws dynamodb list-tables')) {
  // Add your implementation
}
```

### Modify Terminal Behavior

Edit `src/components/Terminal.jsx`:
- Change prompt: Line 54 (terminal-prompt)
- Add command aliases: Line 95-110
- Customize welcome message: Lines 45-60

## Building for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

The `dist` folder contains your production-ready files.

## Troubleshooting

### Terminal not showing
- Check browser console for errors
- Ensure xterm.js CSS is loading
- Verify terminal container has height

### AWS commands not working
- Check browser console for CORS errors
- Verify AWS credentials configuration
- Ensure AWS SDK packages are installed

### Styling issues
- Clear browser cache
- Check for CSS conflicts
- Verify all CSS files are imported

### Build errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Ensure Node.js version is 18+

## Performance Tips

1. **Optimize images**: Compress profile photo
2. **Lazy loading**: Consider lazy loading components
3. **CDN**: Use CloudFront or similar CDN
4. **Caching**: Configure proper cache headers

## Security Best Practices

⚠️ **Never commit:**
- AWS credentials
- API keys
- Private keys
- Environment files with secrets

✅ **Always:**
- Use `.gitignore` for sensitive files
- Implement backend proxy for production AWS access
- Use temporary credentials with minimal permissions
- Enable CORS properly

## Next Steps

1. ✅ Customize your information
2. ✅ Add your profile picture
3. ✅ Test locally
4. ✅ Deploy to hosting platform
5. ✅ Share your portfolio URL!

## Support

For issues or questions:
- Check the README.md
- Review component code comments
- Test in demo mode first
- Verify AWS credentials setup

---

Good luck with your portfolio! 🚀

