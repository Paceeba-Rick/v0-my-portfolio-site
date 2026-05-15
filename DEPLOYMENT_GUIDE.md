# Deployment Guide

Complete instructions for deploying the Paceeba Yakubu portfolio to production.

## Quick Deploy to Vercel (Recommended)

### Option 1: Automatic (GitHub Connected)

1. Push code to GitHub
   ```bash
   git push origin main
   ```

2. Vercel automatically deploys on push to main branch

3. Monitor deployment in Vercel dashboard

### Option 2: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from project directory
vercel

# Production deployment
vercel --prod
```

### Option 3: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub account
3. Click "Add New..." → "Project"
4. Select this repository
5. Configure build settings (auto-detected)
6. Click "Deploy"

## Environment Variables Setup

### 1. Create `.env.production`

```env
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id_here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NODE_ENV=production
```

### 2. In Vercel Dashboard

1. Go to Project Settings
2. Navigate to "Environment Variables"
3. Add each variable:
   - `NEXT_PUBLIC_VERCEL_ANALYTICS_ID`
   - `NEXT_PUBLIC_SITE_URL`

## Custom Domain Setup

### Add Custom Domain in Vercel

1. In Vercel dashboard, go to Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions
4. Update DNS records:
   ```
   CNAME: alias.vercel.app
   ```

### CloudFlare (Optional)

1. Point nameservers to CloudFlare
2. Add DNS record:
   ```
   CNAME: your-domain.com → alias.vercel.app
   ```
3. Enable automatic HTTPS

## Build & Deployment Process

### Local Production Build

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start
```

### Build Output

- `.next/` - Optimized Next.js build
- `public/` - Static assets
- `out/` - Static export (if exported)

## Performance Optimization on Vercel

### Image Optimization
- Automatic WebP conversion
- Responsive image serving
- Vercel Image Optimization enabled by default

### Edge Caching
- Static content: 365 days
- API routes: Configurable per endpoint
- Images: Long-term caching

### Analytics
- Enable Vercel Analytics in project settings
- Monitor Core Web Vitals
- Track real user metrics

## Post-Deployment Tasks

### 1. Verify Deployment

```bash
# Test deployed site
curl -I https://your-domain.com

# Check security headers
https://securityheaders.com/?q=your-domain.com

# Check SEO
https://schema.org/validator

# Check mobile friendliness
https://search.google.com/test/mobile-friendly
```

### 2. SEO & Search Engines

```bash
# Google Search Console
https://search.google.com/search-console

# Add sitemap.xml
# Add robots.txt
# Test rich snippets

# Bing Webmaster Tools
https://www.bing.com/webmaster

# Submit sitemap
```

### 3. Google Analytics (Optional)

```bash
# Add to .env.production
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Implement in layout.tsx (if using GA)
# Verify tracking in Google Analytics
```

### 4. Monitoring Setup

```bash
# Vercel Analytics
# View in Vercel dashboard

# Error Tracking
# Configure Sentry (optional)
npm install @sentry/nextjs

# Performance Monitoring
# Configure in next.config.js if needed
```

## Continuous Deployment

### GitHub Actions (Already Configured)

Vercel automatically deploys on:
- Push to `main` branch
- Pull request creation (preview deployment)
- Manual trigger

### Environment-Specific Deployments

```bash
# Preview deployment
vercel --conf=vercel.json

# Production deployment
vercel --prod --conf=vercel.json
```

## Rollback & Recovery

### Rollback to Previous Version

1. In Vercel dashboard, go to Deployments
2. Find previous successful deployment
3. Click "..." → "Promote to Production"

### Database Backups (If Used)

- Configure automated backups
- Test restore procedures
- Document backup location

## Monitoring & Maintenance

### Daily Checks

```bash
# Monitor Core Web Vitals
# Check error logs in Vercel
# Verify analytics data
```

### Weekly Tasks

- Review performance metrics
- Check for errors/warnings
- Monitor uptime
- Review user feedback

### Monthly Tasks

- Security audit
- Dependency updates
- Performance optimization
- Content updates

## Troubleshooting Deployments

### Build Fails

```bash
# Clear cache and rebuild
vercel build --no-cache

# Check build logs in Vercel dashboard
# Look for errors in error section

# Common issues:
# - Missing environment variables
# - TypeScript errors
# - Dependency conflicts
```

### Images Not Loading

1. Check external image domains in `next.config.js`
2. Verify image URLs are correct
3. Check CORS settings if needed
4. Verify Blob storage access

### Animations Not Working

1. Check `prefers-reduced-motion` setting
2. Verify CSS in `app/globals.css`
3. Check browser console for errors
4. Test in different browsers

### Slow Performance

1. Run Lighthouse audit
2. Check Core Web Vitals
3. Analyze bundle size
4. Optimize images
5. Check network requests in DevTools

## Security Checklist

- [x] HTTPS enabled (automatic on Vercel)
- [x] Security headers configured
- [x] Environment variables secured
- [x] No secrets in code
- [x] Dependencies updated
- [x] Permissions-Policy set
- [ ] SSL certificate valid
- [ ] CORS configured if needed

## Scaling Considerations

### Load Balancing
- Vercel handles automatically
- No configuration needed

### Database Scaling
- Not needed for static site
- Add database when needed

### Image Serving
- Vercel Image Optimization scales automatically
- No manual configuration needed

## Cost Optimization

### Vercel Pricing
- Free tier: Good for portfolio
- Pro tier: Advanced features
- Enterprise: Custom needs

### Reduce Costs
- Use Vercel Blob for images (cost-effective)
- Optimize build times
- Minimize serverless function usage
- Cache aggressively

## Disaster Recovery

### Backup Strategy

1. **Code Backup**
   ```bash
   # Already in GitHub
   # Multiple backup locations recommended
   ```

2. **Database Backup**
   - Not applicable for this static site
   - Add if dynamic content added

3. **Configuration Backup**
   - Save environment variables locally (securely)
   - Document Vercel settings
   - Screenshot important configurations

### Recovery Steps

1. Clone repository from GitHub
2. Install dependencies: `npm install`
3. Deploy to Vercel: `vercel --prod`
4. Restore environment variables
5. Verify all functionality

## Deployment Checklist

Before production deployment:

- [ ] All tests pass
- [ ] Build completes without errors
- [ ] Lighthouse score 95+
- [ ] All links tested
- [ ] Images load correctly
- [ ] Mobile responsive verified
- [ ] Animations working
- [ ] Analytics enabled
- [ ] Security headers set
- [ ] SEO tags verified
- [ ] Environment variables configured
- [ ] Custom domain set up (if applicable)
- [ ] DNS pointing correctly
- [ ] SSL certificate valid
- [ ] Backups configured
- [ ] Monitoring enabled

## Support & Resources

### Vercel Documentation
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Support](https://vercel.com/support)

### Monitoring & Analytics
- [Vercel Analytics](https://vercel.com/analytics)
- [Google Search Console](https://search.google.com/search-console)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Community & Help
- [Next.js Discussions](https://github.com/vercel/next.js/discussions)
- [Vercel Community](https://vercel.com/community)
- Stack Overflow (tag: nextjs)

---

**Last Updated**: May 2026  
**Version**: 1.0.0

For questions or issues: yakubceeba@gmail.com
