# Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

### Step 1: Prepare Your Repository
1. Push your code to GitHub, GitLab, or Bitbucket
2. Ensure all dependencies are properly installed
3. Test locally with `npm run build` to ensure no build errors

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your repository
4. Vercel will automatically detect it's a Next.js project
5. Click "Deploy"

### Step 3: Configure Environment Variables (if needed)
- Add any environment variables in the Vercel dashboard
- Redeploy if you make changes

### Step 4: Custom Domain (Optional)
1. Go to your project settings in Vercel
2. Add your custom domain
3. Configure DNS settings as instructed

## 🌐 Deploy to Netlify

### Step 1: Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18 or higher

### Step 2: Deploy
1. Connect your repository to Netlify
2. Configure build settings
3. Deploy

## ☁️ Deploy to AWS Amplify

### Step 1: Connect Repository
1. Go to AWS Amplify Console
2. Connect your repository
3. Configure build settings

### Step 2: Build Configuration
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## 🐳 Deploy with Docker

### Step 1: Create Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Step 2: Build and Run
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 📱 Environment Variables

Create a `.env.local` file for local development:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

## 🔧 Build Optimization

### Before Deployment
1. Run `npm run build` to check for build errors
2. Test the production build locally with `npm start`
3. Optimize images and assets
4. Check bundle size with `npm run build --analyze`

### Performance Tips
- Use Next.js Image component for images
- Implement proper caching strategies
- Optimize third-party scripts
- Use dynamic imports for heavy components

## 🚨 Troubleshooting

### Common Issues
1. **Build Failures**: Check TypeScript errors and dependencies
2. **Runtime Errors**: Test locally with production build
3. **Performance Issues**: Use Lighthouse for optimization
4. **Styling Issues**: Ensure TailwindCSS is properly configured

### Debug Commands
```bash
# Check for TypeScript errors
npx tsc --noEmit

# Analyze bundle
npm run build --analyze

# Check dependencies
npm audit

# Clear cache
rm -rf .next node_modules/.cache
```

## 📊 Monitoring

### Vercel Analytics
- Built-in performance monitoring
- Real-time analytics
- Error tracking

### Other Options
- Google Analytics
- Hotjar for user behavior
- Sentry for error tracking

## 🔄 Continuous Deployment

### GitHub Actions Example
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

**Your portfolio is now ready for deployment! 🎉**

For the best experience, we recommend Vercel as it's optimized for Next.js applications. 