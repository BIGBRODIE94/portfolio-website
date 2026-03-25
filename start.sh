#!/bin/bash

# Quick Start Script for Portfolio Website
# This script helps you get started quickly

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}"
echo "╔═══════════════════════════════════════════════════════════╗"
echo "║     Cloud Engineer Portfolio - Quick Start Script        ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 Installing dependencies...${NC}"
    npm install
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Installation failed!${NC}"
        exit 1
    fi
    echo -e "${GREEN}✅ Dependencies installed!${NC}"
    echo ""
fi

# Check for profile image
if [ ! -f "public/profile.jpg" ] && [ ! -f "public/profile.png" ]; then
    echo -e "${YELLOW}📸 No profile image found!${NC}"
    echo -e "${BLUE}Please add your profile photo to:${NC}"
    echo "   public/profile.jpg or public/profile.png"
    echo ""
    echo -e "${BLUE}Using placeholder for now...${NC}"
    echo ""
fi

# Display customization reminders
echo -e "${BLUE}📝 Don't forget to customize:${NC}"
echo "   1. Add your profile picture: public/profile.jpg"
echo "   2. Update your info: src/components/Introduction.jsx"
echo "   3. Update your resume: src/components/Resume.jsx"
echo "   4. Update social links in Introduction.jsx"
echo ""

# Start dev server
echo -e "${GREEN}🚀 Starting development server...${NC}"
echo -e "${BLUE}Your portfolio will open at: http://localhost:3000${NC}"
echo ""
echo -e "${YELLOW}Terminal Commands Available:${NC}"
echo "   • help - Show all commands"
echo "   • open intro - View introduction"
echo "   • open resume - View resume"
echo "   • aws --version - AWS CLI version"
echo "   • aws s3 ls - List S3 buckets (demo mode)"
echo ""

npm run dev

