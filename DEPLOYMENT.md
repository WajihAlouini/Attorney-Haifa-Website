# Deployment Guide

## 🚀 Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# - Link to existing project or create new
# - Set project name: lawyer-website
# - Framework: Vite
# - Build command: npm run build
# - Output directory: dist
```

### Option 2: Deploy via GitHub

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Add environment variables:
   - `VITE_WEB3FORMS_ACCESS_KEY`
   - `VITE_GA_MEASUREMENT_ID`
   - `VITE_CALENDLY_URL`
7. Click "Deploy"

---

## 🌐 Deploy to Netlify

### Via Netlify CLI

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod

# Specify dist folder when prompted
```

### Via Netlify UI

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Add environment variables in Site settings
6. Deploy

---

## ⚙️ Environment Variables

Add these in your hosting platform:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_key_here
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_CALENDLY_URL=https://calendly.com/your-username/30min
VITE_GOOGLE_PLACES_KEY=your_api_key (optional)
VITE_GOOGLE_PLACE_ID=places/ChIJ... (optional)
```

---

## 📋 Post-Deployment Checklist

### Immediate (Day 1)
- [ ] Test all pages load correctly
- [ ] Verify contact form works
- [ ] Check Calendly integration
- [ ] Test WhatsApp links
- [ ] Verify all 3 languages work
- [ ] Check mobile responsiveness
- [ ] Test 404 page

### SEO Setup (Week 1)
- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt is accessible
- [ ] Set up Google Analytics property
- [ ] Configure Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Check structured data with Google Rich Results Test

### Monitoring (Ongoing)
- [ ] Monitor Google Analytics
- [ ] Check Web Vitals in Search Console
- [ ] Review form submissions
- [ ] Monitor error tracking
- [ ] Check Core Web Vitals

---

## 🔧 Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your domain: `hgalouini.com`
3. Update DNS records at your registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Netlify
1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

---

## 🔒 SSL/HTTPS

Both Vercel and Netlify provide **automatic HTTPS** via Let's Encrypt.
- No configuration needed
- Auto-renewal
- Free forever

---

## 📊 Analytics Setup

### Google Analytics
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to environment variables
4. Verify tracking in Real-Time reports

### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://hgalouini.com`
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://hgalouini.com/sitemap.xml`

---

## 🎯 Performance Optimization

### Already Implemented ✅
- Code splitting
- Lazy loading
- Minification
- Gzip compression
- Resource hints
- Image lazy loading

### CDN (Automatic)
- Vercel/Netlify provide global CDN
- No configuration needed
- Automatic edge caching

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Environment Variables Not Working
- Ensure they start with `VITE_`
- Rebuild after adding variables
- Check spelling exactly

### Forms Not Submitting
- Verify `VITE_WEB3FORMS_ACCESS_KEY` is set
- Check network tab for errors
- Verify email in Contact.jsx

---

## 📱 Testing Checklist

### Desktop
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Mobile
- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Responsive design

### Features
- [ ] Language switching
- [ ] Contact form
- [ ] Calendly popup
- [ ] WhatsApp links
- [ ] Gallery lightbox
- [ ] FAQ accordion
- [ ] Cookie consent

---

## 🎉 You're Ready!

Your website is production-ready. Just:
1. Choose hosting (Vercel recommended)
2. Deploy
3. Configure domain
4. Set up analytics
5. Monitor and iterate

**Good luck with your launch! 🚀**
