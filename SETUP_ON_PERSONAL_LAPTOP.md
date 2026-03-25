# 💻 Setup on Your Personal Laptop

## 📦 You have the zip file: `portfolio-website.zip` (77KB)

This file contains your entire portfolio project (excluding node_modules to keep it small).

---

## 🚀 Setup Instructions for Personal Laptop

### Step 1: Extract the Zip File

**On Mac/Linux:**
```bash
# Navigate to where you saved the zip
cd ~/Downloads  # or wherever you saved it

# Extract
unzip portfolio-website.zip

# Navigate into the folder
cd portfolio-website
```

**On Windows:**
- Right-click `portfolio-website.zip`
- Click "Extract All"
- Choose destination folder
- Open terminal/PowerShell in that folder

---

### Step 2: Install Dependencies

```bash
# Make sure you have Node.js installed first
node --version  # Should be 18+

# Install all packages (this downloads node_modules)
npm install
```

This will download all dependencies (~265 packages, ~100MB).

---

### Step 3: Run the Portfolio

```bash
# Start development server
npm run dev

# Or use the quick start script
./start.sh
```

Visit: **http://localhost:3000** 🎉

---

## 🌐 Deploy from Personal Laptop

Once you have it running on your personal laptop:

### Fastest Deploy (No GitHub needed):

```bash
# 1. Build the project
npm run build

# 2. Go to Netlify Drop
# Visit: https://app.netlify.com/drop

# 3. Drag and drop the 'dist' folder

# 4. Get your live URL instantly!
```

**You'll get a URL like:** `https://random-name-12345.netlify.app`

Share this with friends, family, and employers!

---

## 📧 How to Send Yourself the Zip

### Option 1: Email
- The zip is only **77KB** - perfect for email!
- Email yourself: `portfolio-website.zip`
- Download on personal laptop

### Option 2: Cloud Storage
- Upload to Google Drive, Dropbox, or OneDrive
- Download on personal laptop

### Option 3: USB/AirDrop
- Copy to USB drive
- Or use AirDrop if both are Macs

---

## ✅ Verification Checklist (On Personal Laptop)

After setup, verify:

- [ ] `npm install` completed successfully
- [ ] `npm run dev` starts without errors
- [ ] Can access http://localhost:3000
- [ ] Terminal at bottom is functional
- [ ] Can type commands: `help`, `open intro`, `aws s3 ls`
- [ ] All sections load (intro, resume)
- [ ] Animations work smoothly

---

## 🎯 Customization (On Personal Laptop)

Before deploying publicly:

1. **Add Your Photo:**
   ```bash
   # Copy your photo to:
   public/profile.jpg
   ```

2. **Update Your Info:**
   - Edit `src/components/Introduction.jsx`
   - Edit `src/components/Resume.jsx`

3. **Test Everything:**
   ```bash
   npm run dev
   ```

4. **Build & Deploy:**
   ```bash
   npm run build
   # Then upload 'dist' folder to Netlify Drop
   ```

---

## 🚀 Deploy Options from Personal Laptop

### Option 1: Netlify Drop (Easiest)
1. `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag `dist` folder
4. Get live URL!

### Option 2: Vercel (With GitHub)
1. Push to GitHub
2. Import to Vercel
3. Auto-deploy!

### Option 3: GitHub Pages (Free)
1. Push to GitHub
2. Enable GitHub Pages
3. Set source to `gh-pages` branch

---

## 📝 Commands Quick Reference

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Quick start
./start.sh
```

---

## 🆘 Troubleshooting

### Issue: npm install fails
```bash
# Clear cache and retry
npm cache clean --force
npm install
```

### Issue: Port 3000 in use
```bash
# Use different port
npm run dev -- --port 3001
```

### Issue: Build errors
```bash
# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 🎉 Success!

Once setup on your personal laptop, you can:
- ✅ Develop and customize freely
- ✅ Deploy publicly to share with friends
- ✅ Use in job applications
- ✅ Demo in interviews
- ✅ Keep updating with new projects

---

## 📍 File Location

Your zip file is here:
```
/Users/affanchowdhury/Library/CloudStorage/OneDrive-strategicbusiness/Desktop/COSMOS Engineering/portfolio-website.zip
```

**Size:** 77KB (perfect for email!)

---

**Happy coding on your personal laptop!** 🚀

