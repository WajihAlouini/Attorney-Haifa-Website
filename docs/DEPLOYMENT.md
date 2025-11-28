# Deployment Guide

## Overview

This application is built with Vite and can be deployed to various platforms. The build output is static HTML, CSS, and JavaScript files in the `dist` directory.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` directory.

### Build Output

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other-assets]
└── [public-files]
```

## Deployment Platforms

### Vercel (Recommended)

#### Automatic Deployment

1. Push code to GitHub
2. Import project in Vercel
3. Configure build settings:

   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. Add environment variables in Vercel dashboard

#### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Netlify

#### Automatic Deployment

1. Connect GitHub repository
2. Configure build settings:

   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

3. Add environment variables in Netlify dashboard

#### Manual Deployment

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### GitHub Pages

1. Install gh-pages:

   ```bash
   npm install -D gh-pages
   ```

2. Add to `package.json`:

   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:

   ```javascript
   export default defineConfig({
     base: "/repository-name/",
     // ... rest of config
   });
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Custom Server (VPS/Dedicated)

#### Using Nginx

1. Build the application:

   ```bash
   npm run build
   ```

2. Copy `dist` folder to server:

   ```bash
   scp -r dist/* user@server:/var/www/html/
   ```

3. Configure Nginx:

   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/html;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Gzip compression
       gzip on;
       gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

       # Cache static assets
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

4. Enable HTTPS with Let's Encrypt:
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

#### Using Apache

1. Build and copy files (same as Nginx)

2. Configure Apache:

   ```apache
   <VirtualHost *:80>
       ServerName yourdomain.com
       DocumentRoot /var/www/html

       <Directory /var/www/html>
           Options -Indexes +FollowSymLinks
           AllowOverride All
           Require all granted
       </Directory>

       # Rewrite for SPA
       <IfModule mod_rewrite.c>
           RewriteEngine On
           RewriteBase /
           RewriteRule ^index\.html$ - [L]
           RewriteCond %{REQUEST_FILENAME} !-f
           RewriteCond %{REQUEST_FILENAME} !-d
           RewriteRule . /index.html [L]
       </IfModule>
   </VirtualHost>
   ```

### Docker

Create `Dockerfile`:

```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Create `nginx.conf`:

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
}
```

Build and run:

```bash
# Build image
docker build -t lawyer-website .

# Run container
docker run -p 80:80 lawyer-website
```

## Environment Variables

### Production Environment Variables

Set these in your deployment platform:

```env
VITE_GOOGLE_PLACES_KEY=your_production_key
VITE_WEB3FORMS_ACCESS_KEY=your_production_key
VITE_GA_TRACKING_ID=your_ga_id
```

### Security Notes

- Never commit `.env` files
- Use different keys for production
- Rotate keys regularly
- Use environment-specific configurations

## CI/CD Pipeline

### GitHub Actions (Already Configured)

The project includes `.github/workflows/ci-cd.yml`:

```yaml
name: CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: npm run build
```

### Extending CI/CD

Add deployment step:

```yaml
- name: Deploy to Vercel
  uses: amondnet/vercel-action@v20
  with:
    vercel-token: ${{ secrets.VERCEL_TOKEN }}
    vercel-org-id: ${{ secrets.ORG_ID }}
    vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## Performance Optimization

### Pre-deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test production build locally (`npm run preview`)
- [ ] Check bundle sizes
- [ ] Optimize images (WebP format)
- [ ] Enable gzip/brotli compression
- [ ] Configure CDN (if applicable)
- [ ] Set up proper caching headers
- [ ] Enable HTTPS
- [ ] Test on multiple devices
- [ ] Run Lighthouse audit

### CDN Configuration

For static assets, consider using a CDN:

1. Upload `dist/assets` to CDN
2. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     build: {
       assetsDir: "assets",
       rollupOptions: {
         output: {
           assetFileNames: "assets/[name]-[hash][extname]",
         },
       },
     },
   });
   ```

## Monitoring

### Error Tracking

Consider integrating:

- Sentry for error tracking
- LogRocket for session replay
- Google Analytics for user behavior

### Performance Monitoring

- Google PageSpeed Insights
- WebPageTest
- Lighthouse CI

## Rollback Strategy

### Quick Rollback

If deployment fails:

1. **Vercel/Netlify**: Use dashboard to rollback to previous deployment
2. **Custom Server**: Keep previous build:

   ```bash
   # Before deploying
   cp -r dist dist-backup

   # Rollback if needed
   rm -rf dist
   mv dist-backup dist
   ```

3. **Git**: Revert to previous commit and redeploy

## Post-Deployment

### Verification Checklist

- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] Forms work (contact form)
- [ ] External integrations work (Google Places, Web3Forms)
- [ ] Analytics tracking works
- [ ] Mobile responsiveness
- [ ] Cross-browser compatibility
- [ ] HTTPS is enabled
- [ ] Performance is acceptable (Lighthouse score > 90)

### DNS Configuration

If using custom domain:

1. Add A record or CNAME to DNS
2. Wait for propagation (up to 48 hours)
3. Configure SSL certificate
4. Test with `https://yourdomain.com`

## Troubleshooting

### Common Deployment Issues

#### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

#### Environment Variables Not Working

- Ensure variables start with `VITE_`
- Check deployment platform configuration
- Rebuild after adding variables

#### 404 on Refresh

Configure server to serve `index.html` for all routes (see server configs above)

#### Assets Not Loading

- Check `base` in `vite.config.js`
- Verify asset paths are relative
- Check CDN configuration

## Support

For deployment issues:

- Check deployment platform documentation
- Review build logs
- Test locally with `npm run preview`
- Open an issue on GitHub
