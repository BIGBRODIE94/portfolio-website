#!/bin/bash

# AWS S3 + CloudFront Deployment Script
# This script builds and deploys the portfolio website to AWS

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting deployment process...${NC}"

# Configuration - Update these values
S3_BUCKET="your-portfolio-bucket-name"
CLOUDFRONT_DIST_ID="YOUR_DISTRIBUTION_ID"
AWS_PROFILE="default"

# Check if bucket name is set
if [ "$S3_BUCKET" = "your-portfolio-bucket-name" ]; then
    echo -e "${RED}❌ Error: Please update S3_BUCKET in deploy-aws.sh${NC}"
    exit 1
fi

# Build the project
echo -e "${BLUE}📦 Building project...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build successful!${NC}"

# Sync to S3
echo -e "${BLUE}☁️  Uploading to S3...${NC}"
aws s3 sync dist/ s3://$S3_BUCKET --delete --profile $AWS_PROFILE

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ S3 upload failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Upload successful!${NC}"

# Invalidate CloudFront cache
if [ "$CLOUDFRONT_DIST_ID" != "YOUR_DISTRIBUTION_ID" ]; then
    echo -e "${BLUE}🔄 Invalidating CloudFront cache...${NC}"
    aws cloudfront create-invalidation \
        --distribution-id $CLOUDFRONT_DIST_ID \
        --paths "/*" \
        --profile $AWS_PROFILE
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ CloudFront invalidation failed!${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ CloudFront cache invalidated!${NC}"
else
    echo -e "${BLUE}ℹ️  Skipping CloudFront invalidation (not configured)${NC}"
fi

echo -e "${GREEN}🎉 Deployment complete!${NC}"
echo -e "${BLUE}Your site is live at: https://$S3_BUCKET${NC}"

