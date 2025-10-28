# Deployment Checklist

## Pre-deployment Tasks
- [ ] Run final build test: `npm run build`
- [ ] Run all tests: `npm test`
- [ ] Check all pages render correctly in development
- [ ] Verify all images are optimized (WebP + PNG fallbacks)
- [ ] Ensure all links work correctly
- [ ] Test contact form submission

## Vercel Setup
- [ ] Import GitHub repository (utti-dev/porfolio)
- [ ] Configure environment variables:
  - `VITE_FORM_ENDPOINT` (Formspree endpoint)
  - `VITE_GA_MEASUREMENT_ID` (Google Analytics)
  - `VITE_VERCEL_ANALYTICS_ID` (Vercel Analytics)
  - `VITE_ERROR_ENDPOINT` (Optional: Error tracking)
  - `AUTH_USER` (Preview deployments protection)
  - `AUTH_PASSWORD` (Preview deployments protection)

## Post-deployment Verification
- [ ] Check production URL: https://portfolio-utti-dev.vercel.app
- [ ] Verify all pages load without errors
- [ ] Test contact form in production
- [ ] Verify Google Analytics is tracking
- [ ] Check Vercel Analytics dashboard
- [ ] Run Lighthouse audit
- [ ] Test responsive design on multiple devices
- [ ] Verify meta tags and social sharing cards
- [ ] Check SSL certificate is valid

## Performance Metrics to Check
- [ ] Lighthouse Performance score > 90
- [ ] Lighthouse Accessibility score > 90
- [ ] Lighthouse Best Practices score > 90
- [ ] Lighthouse SEO score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] First Input Delay < 100ms

## Security Checks
- [ ] HTTP headers are properly set
- [ ] Content Security Policy is working
- [ ] SSL/TLS certificate is valid
- [ ] Preview deployment protection is working

## Monitoring Setup
- [ ] Vercel Analytics is collecting data
- [ ] Google Analytics is tracking visitors
- [ ] Error tracking is functional
- [ ] Web Vitals are being monitored

## Documentation
- [ ] Update README with production URL
- [ ] Document any environment-specific configurations
- [ ] Add troubleshooting guides if needed
- [ ] Document custom domain setup process (if applicable)

## Backup & Version Control
- [ ] Tag release version in Git
- [ ] Ensure latest code is pushed to main branch
- [ ] Verify GitHub Actions workflows are passing