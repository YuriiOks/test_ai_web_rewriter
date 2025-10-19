# Production Deployment Guide

## Overview
This guide walks you through deploying your React SPA (Single Page Application) to your production server at `yuriodev.co.uk`.

---

## Prerequisites
- ✅ React app built successfully (see build output above)
- ✅ SSH access to server: `yurii@135.181.146.97`
- ✅ Nginx installed and configured
- ✅ SSL certificate via Certbot (already set up)

---

## Step 1: Build Your React Application (COMPLETED ✅)

The build has been completed successfully:
```bash
cd yuriodev-portfolio
npm run build
```

**Build Output:**
- `dist/index.html` - Main entry point (0.47 kB)
- `dist/assets/index-Cn4ZFxnr.css` - Compiled CSS (108.76 kB)
- `dist/assets/index-CNjiBA1d.js` - Compiled JavaScript (351.85 kB)

---

## Step 2: Transfer Files to Server

### Option A: Using SCP (Recommended)

1. **Clear old content on server:**
```bash
ssh yurii@135.181.146.97
sudo rm -rf /var/www/yuriodev.co.uk/html/*
exit
```

2. **Upload new build from your Mac:**
```bash
# Make sure you're in the yuriodev-portfolio directory
cd /Users/Oks_WORKSPACE/Desktop/DEV/test_ai_web_rewriter/yuriodev-portfolio

# Upload all files from dist folder
scp -r dist/* yurii@135.181.146.97:/var/www/yuriodev.co.uk/html/
```

### Option B: Using rsync (Alternative)
```bash
rsync -avz --delete dist/ yurii@135.181.146.97:/var/www/yuriodev.co.uk/html/
```

---

## Step 3: Update Nginx Configuration for SPA Routing

### Why This Is Needed
Your React app uses client-side routing (React Router). When users visit routes like `/courses` or `/community`, Nginx needs to serve `index.html` and let React Router handle the routing.

### SSH Into Server
```bash
ssh yurii@135.181.146.97
```

### Edit Nginx Configuration
```bash
sudo nano /etc/nginx/sites-available/yuriodev.co.uk
```

### Update the `location /` Block

**BEFORE (Old Static Config):**
```nginx
location / {
    try_files $uri $uri/ =404;
}
```

**AFTER (SPA Config):**
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### What This Does
- `$uri`: First tries to find an exact file (e.g., `/assets/index-CNjiBA1d.js`)
- `$uri/`: Then tries to find a directory
- `/index.html`: **Falls back to index.html** for any non-existent paths (lets React Router handle routing)

### Full Example Nginx Config
```nginx
server {
    server_name yuriodev.co.uk www.yuriodev.co.uk;
    
    root /var/www/yuriodev.co.uk/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # SSL configuration (added by Certbot)
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/yuriodev.co.uk/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yuriodev.co.uk/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

server {
    if ($host = www.yuriodev.co.uk) {
        return 301 https://$host$request_uri;
    }

    if ($host = yuriodev.co.uk) {
        return 301 https://$host$request_uri;
    }

    listen 80;
    server_name yuriodev.co.uk www.yuriodev.co.uk;
    return 404;
}
```

---

## Step 4: Test and Reload Nginx

### Test Configuration
```bash
sudo nginx -t
```

Expected output:
```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

### Reload Nginx
```bash
sudo systemctl reload nginx
```

### Check Nginx Status
```bash
sudo systemctl status nginx
```

---

## Step 5: Verify Deployment

### Test Your Live Site

1. **Clear browser cache** for `yuriodev.co.uk`
   - Chrome/Edge: `Cmd+Shift+Delete` (Mac) or `Ctrl+Shift+Delete` (Windows)
   - Firefox: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

2. **Test main page:**
   - Visit: `https://yuriodev.co.uk`
   - Should load your React portfolio

3. **Test routing (CRITICAL):**
   - Direct URL: `https://yuriodev.co.uk/portfolio`
   - Direct URL: `https://yuriodev.co.uk/courses`
   - Direct URL: `https://yuriodev.co.uk/community`
   - Direct URL: `https://yuriodev.co.uk/dashboard`
   - All should load correctly (not 404)

4. **Test navigation:**
   - Click navigation links in the app
   - Use browser back/forward buttons
   - Reload page on any route

5. **Test redirects:**
   - Visit: `https://yuriodev.co.uk/home`
   - Should redirect to: `https://yuriodev.co.uk/`

---

## Troubleshooting

### Issue: 404 Not Found on Routes
**Cause:** Nginx not configured for SPA routing  
**Fix:** Ensure `try_files $uri $uri/ /index.html;` is in your Nginx config

### Issue: Blank Page After Reload
**Cause:** Browser cache showing old code  
**Fix:** Hard refresh with `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

### Issue: CSS/JS Files Not Loading
**Cause:** File paths incorrect or files not uploaded  
**Fix:** Check that `dist/assets/` folder was uploaded correctly

### Issue: SSL Certificate Errors
**Cause:** Certbot configuration issue  
**Fix:** Run `sudo certbot renew --dry-run` to test renewal

---

## Future Deployments

### Quick Re-deploy Script
Create a deployment script for faster updates:

```bash
#!/bin/bash
# deploy.sh

echo "🔨 Building React app..."
npm run build

echo "📦 Uploading to server..."
scp -r dist/* yurii@135.181.146.97:/var/www/yuriodev.co.uk/html/

echo "✅ Deployment complete!"
echo "🌐 Visit: https://yuriodev.co.uk"
```

Make it executable:
```bash
chmod +x deploy.sh
```

Run it:
```bash
./deploy.sh
```

---

## Build Optimization Tips

### Analyze Bundle Size
```bash
npm run build -- --mode production --sourcemap
```

### Reduce Bundle Size
- Remove unused dependencies
- Use code splitting with `React.lazy()`
- Optimize images (convert to WebP)
- Enable gzip compression in Nginx

### Enable Gzip in Nginx
Add to your server block:
```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;
```

---

## Checklist

- [ ] Build completed successfully
- [ ] Old files cleared from server
- [ ] New `dist` files uploaded to server
- [ ] Nginx configuration updated for SPA routing
- [ ] Nginx configuration tested (`nginx -t`)
- [ ] Nginx reloaded
- [ ] Homepage loads correctly
- [ ] Direct URL navigation works for all routes
- [ ] In-app navigation works
- [ ] Browser back/forward buttons work
- [ ] Page reloads don't cause 404 errors
- [ ] SSL certificate working
- [ ] Mobile responsive design verified

---

## Production URLs

- **Main Site:** https://yuriodev.co.uk
- **Portfolio:** https://yuriodev.co.uk/ (or `/portfolio`)
- **Community:** https://yuriodev.co.uk/community
- **Courses:** https://yuriodev.co.uk/courses
- **Dashboard:** https://yuriodev.co.uk/dashboard

---

## Support

If you encounter issues:
1. Check Nginx error logs: `sudo tail -f /var/log/nginx/error.log`
2. Check Nginx access logs: `sudo tail -f /var/log/nginx/access.log`
3. Check browser console for JavaScript errors (F12)
4. Verify file permissions: `ls -la /var/www/yuriodev.co.uk/html/`
