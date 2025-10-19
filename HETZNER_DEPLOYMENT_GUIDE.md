# Hetzner Deployment Guide - YurioDev Portfolio

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Current Frontend Structure](#current-frontend-structure)
3. [Agent Terminal Connection Flow](#agent-terminal-connection-flow)
4. [Frontend Deployment to Hetzner](#frontend-deployment-to-hetzner)
5. [Backend API Requirements](#backend-api-requirements)
6. [Next Steps](#next-steps)

---

## 1. Project Overview

### Technology Stack
- **Frontend**: React 19.1.1 + TypeScript 5.9.3 + Vite 7.1.7
- **Routing**: React Router DOM 7.9.4
- **Styling**: CSS Modules
- **Build Tool**: Vite (SPA mode)

### Domain Structure
- **Main Website**: `yuriodev.co.uk` (Frontend)
- **API Backend**: `api.yuriodev.co.uk` (To be deployed separately)

### Project Structure
```
yuriodev-portfolio/
├── src/
│   ├── pages/
│   │   ├── portfolio.tsx          # Main portfolio page
│   │   ├── agent.tsx              # Banking assistant page
│   │   ├── community.tsx          # Community page (coming soon)
│   │   ├── courses.tsx            # Courses page (coming soon)
│   │   └── dashboard.tsx          # Dashboard page (coming soon)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header/            # Fixed navigation header
│   │   │   ├── Footer/            # Page footer
│   │   │   ├── PageLayout/        # Main layout wrapper
│   │   │   └── LeftSidebar/       # Section navigation sidebar
│   │   ├── sections/
│   │   │   ├── HeroSection/
│   │   │   ├── AboutSection/
│   │   │   ├── TimelineSection/
│   │   │   ├── SkillsSection/
│   │   │   ├── ProjectsSection/
│   │   │   ├── PlatformSection/
│   │   │   ├── ConnectSection/
│   │   │   ├── AssistantTerminalSection/     # Banking terminal UI
│   │   │   ├── AssistantFeaturesSection/     # Features & commands
│   │   │   └── AssistantTechSection/         # Tech stack
│   │   └── ui/
│   │       ├── InteractiveTerminal/           # Portfolio terminal
│   │       ├── AgentTerminal/                 # Banking assistant terminal
│   │       └── LoadingScreen/                 # Initial loading animation
│   ├── services/
│   │   ├── terminalService.ts     # Portfolio terminal commands
│   │   └── agentService.ts        # Banking assistant API service
│   ├── data/
│   │   ├── aboutData.ts
│   │   ├── timelineData.ts
│   │   ├── projectsData.ts
│   │   └── skillsData.ts
│   ├── context/
│   │   └── ThemeContext.tsx       # Dark/Light theme management
│   ├── assets/
│   │   └── styles/
│   │       ├── _variables.css     # CSS custom properties
│   │       └── global.css         # Global styles
│   ├── App.tsx                    # Main app component with routing
│   ├── main.tsx                   # React entry point
│   └── index.css
├── public/                        # Static assets
├── dist/                          # Build output (after npm run build)
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 2. Current Frontend Structure

### Pages and Routes

| Route | Component | Description | Status |
|-------|-----------|-------------|--------|
| `/` | Portfolio | Main portfolio page with all sections | ✅ Complete |
| `/home` | Navigate to `/` | Redirect to main page | ✅ Complete |
| `/community` | Community | Coming soon page | ⏳ Placeholder |
| `/courses` | Courses | Coming soon page | ⏳ Placeholder |
| `/dashboard` | Dashboard | Coming soon page | ⏳ Placeholder |
| `/assistant` | Agent | Banking assistant terminal (3 sections) | ✅ Complete |

### Agent Page Sections

The `/assistant` route consists of **3 sections**:

1. **AssistantTerminalSection** (`#assistant`)
   - Shaded background
   - Main terminal interface for banking queries
   - Interactive command-line UI
   - Theme-aware styling (cyan/orange)

2. **AssistantFeaturesSection** (`#features`)
   - Base background (gradient)
   - Features card (5 key features)
   - Commands card (available commands)
   - Glassmorphic cards with borders

3. **AssistantTechSection** (`#tech-stack`)
   - Shaded background
   - Tech stack grid (6 technology items)
   - Detailed architecture diagram (4 layers)
   - Shows full system architecture

### Build Configuration

**package.json scripts:**
```json
{
  "dev": "vite",                    // Development server (port 5173)
  "build": "tsc -b && vite build",  // TypeScript compile + Vite build
  "preview": "vite preview"         // Preview production build
}
```

**Build output:**
```
dist/
├── index.html                      // Single HTML entry point
├── assets/
│   ├── index-[hash].css           // Bundled CSS (~134 KB)
│   └── index-[hash].js            // Bundled JavaScript (~373 KB)
└── [public assets]                // Copied from /public
```

---

## 3. Agent Terminal Connection Flow

### Current Implementation (Frontend Only)

```
┌─────────────────────────────────────────────────┐
│  User types command in AgentTerminal           │
│  Example: query --id 102 "When does my ISA mature?" │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│  AgentTerminal.tsx                              │
│  • parseCommand() - Extract ID & query         │
│  • Validate format                              │
│  • Add to message history                       │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│  AgentTerminal executeCommand()                 │
│  • Switch on command type                       │
│  • Handle: help, info, clear, exit, query      │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│  For "query" command:                           │
│  • Show [PROCESSING] message                    │
│  • setTimeout (1.5s) - DEMO ONLY                │
│  • Show demo response:                          │
│    "Connect to backend API at                   │
│     https://api.yuriodev.co.uk"                 │
└─────────────────────────────────────────────────┘
```

### Target Implementation (With Backend API)

```
┌─────────────────────────────────────────────────┐
│  User Command:                                  │
│  > query --id 102 "When does my ISA mature?"    │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│  AgentTerminal.tsx (Frontend)                   │
│  • Parse & validate command                     │
│  • Show [PROCESSING] message                    │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│  agentService.ts                                │
│  File: src/services/agentService.ts             │
│                                                 │
│  export const sendQuery = async (              │
│    customerId: number,                          │
│    query: string,                               │
│    sessionId?: string                           │
│  ): Promise<QueryResponse>                      │
└────────────────┬────────────────────────────────┘
                 │
                 │ POST /api/agent/query
                 │ {
                 │   "customer_id": 102,
                 │   "query": "When does my ISA mature?",
                 │   "session_id": "uuid-xxx"
                 │ }
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│  https://api.yuriodev.co.uk/api/agent/query    │
│  (Backend FastAPI - TO BE DEPLOYED)             │
│                                                 │
│  1. Validate customer_id                        │
│  2. Retrieve customer data (customers.json)     │
│  3. Classify intent (ISA maturity query)        │
│  4. Forward to AI Engine                        │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│  AI Engine (Port 8500)                          │
│  • Select model (GPT-5/Gemini-2.5/Claude-4.5)   │
│  • Build prompt with context                    │
│  • Get AI response                              │
│  • Format JSON response                         │
└────────────────┬────────────────────────────────┘
                 │
                 │ Response:
                 │ {
                 │   "status": "success",
                 │   "data": {
                 │     "message": "Your ISA matures on 14 March 2026.",
                 │     "metadata": {
                 │       "customer_name": "John Smith",
                 │       "product_type": "Fixed Rate ISA",
                 │       "processing_time": 182
                 │     }
                 │   }
                 │ }
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│  AgentTerminal.tsx (Frontend)                   │
│  • Remove [PROCESSING] message                  │
│  • Display [ASSISTANT] response                 │
│  • Display [LOG] with processing time           │
└─────────────────────────────────────────────────┘
```

### Key Files for Backend Integration

**1. agentService.ts** (`src/services/agentService.ts`)
```typescript
// Currently configured for: '/api/agent/query'
// This will proxy to: 'https://api.yuriodev.co.uk/api/agent/query'

// Function signatures:
sendQuery(customerId, query, sessionId?) → Promise<QueryResponse>
validateCustomerId(id) → boolean
validateQuery(query) → boolean
parseCommand(rawCommand) → { command, customerId?, query?, error? }
```

**2. AgentTerminal.tsx** (`src/components/ui/AgentTerminal/AgentTerminal.tsx`)
```typescript
// Lines to modify for API integration:
// Line 135-155: Replace setTimeout() with actual API call

// Current (demo):
setTimeout(() => {
  setMessages(prev => [...prev, {
    type: 'assistant',
    content: '[ASSISTANT] This is a demo response...'
  }]);
}, 1500);

// Target (production):
import { sendQuery } from '../../../services/agentService';

const result = await sendQuery(customerId, query);
if (result.status === 'success') {
  setMessages(prev => [...prev, {
    type: 'assistant',
    content: `[ASSISTANT] ${result.data.message}`
  }]);
}
```

---

## 4. Frontend Deployment to Hetzner

### Prerequisites

1. **Hetzner Server**
   - Ubuntu 22.04 or 24.04
   - SSH access
   - Root or sudo privileges

2. **Domain DNS Configuration**
   - `yuriodev.co.uk` → Hetzner server IP
   - `api.yuriodev.co.uk` → Hetzner server IP (for later)

3. **Local Tools**
   - Node.js 18+ (for building)
   - SSH client
   - Git (optional)

### Deployment Steps

#### Step 1: Build the Frontend Locally

```bash
cd yuriodev-portfolio
npm install
npm run build
```

**Output:**
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
└── [static assets]
```

#### Step 2: Server Setup (Hetzner)

SSH into your Hetzner server:

```bash
ssh root@YOUR_HETZNER_IP
```

Install required packages:

```bash
# Update system
apt update && apt upgrade -y

# Install NGINX
apt install nginx -y

# Install Certbot for SSL
apt install certbot python3-certbot-nginx -y

# Enable and start NGINX
systemctl enable nginx
systemctl start nginx
```

#### Step 3: Create NGINX Configuration

Create NGINX config for yuriodev.co.uk:

```bash
nano /etc/nginx/sites-available/yuriodev.co.uk
```

**Initial Configuration (HTTP only):**

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name yuriodev.co.uk www.yuriodev.co.uk;

    root /var/www/yuriodev.co.uk;
    index index.html;

    # Logging
    access_log /var/log/nginx/yuriodev_access.log;
    error_log /var/log/nginx/yuriodev_error.log;

    # Main location - serve React app
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript
               application/x-javascript application/xml+rss
               application/javascript application/json;
}
```

Enable the site:

```bash
# Create web root directory
mkdir -p /var/www/yuriodev.co.uk

# Enable site
ln -s /etc/nginx/sites-available/yuriodev.co.uk /etc/nginx/sites-enabled/

# Test configuration
nginx -t

# Reload NGINX
systemctl reload nginx
```

#### Step 4: Upload Build Files

From your **local machine**:

```bash
cd yuriodev-portfolio

# Upload dist folder contents to server
scp -r dist/* root@YOUR_HETZNER_IP:/var/www/yuriodev.co.uk/
```

Or using rsync (recommended):

```bash
rsync -avz --delete dist/ root@YOUR_HETZNER_IP:/var/www/yuriodev.co.uk/
```

#### Step 5: Set Permissions

On **Hetzner server**:

```bash
# Set ownership
chown -R www-data:www-data /var/www/yuriodev.co.uk

# Set permissions
find /var/www/yuriodev.co.uk -type d -exec chmod 755 {} \;
find /var/www/yuriodev.co.uk -type f -exec chmod 644 {} \;
```

#### Step 6: Enable SSL with Let's Encrypt

```bash
# Obtain SSL certificate
certbot --nginx -d yuriodev.co.uk -d www.yuriodev.co.uk

# Follow prompts:
# - Enter email address
# - Agree to terms
# - Choose whether to redirect HTTP to HTTPS (recommend: yes)
```

Certbot will automatically update your NGINX configuration to:
- Add SSL certificate paths
- Redirect HTTP to HTTPS
- Add security headers

**Auto-renewal** (certbot sets this up automatically):
```bash
# Test renewal
certbot renew --dry-run

# Check cron job
systemctl status certbot.timer
```

#### Step 7: Verify Deployment

1. **Check NGINX status:**
   ```bash
   systemctl status nginx
   ```

2. **Visit your site:**
   - HTTP: `http://yuriodev.co.uk` (should redirect to HTTPS)
   - HTTPS: `https://yuriodev.co.uk`

3. **Test routing:**
   - `https://yuriodev.co.uk/` → Portfolio page
   - `https://yuriodev.co.uk/assistant` → Banking assistant page
   - `https://yuriodev.co.uk/community` → Coming soon page

4. **Check browser console:**
   - No 404 errors for assets
   - Theme switching works
   - Sidebar navigation works

---

## 5. Backend API Requirements

### What Needs to Be Deployed Next

The Banking Assistant Terminal currently shows demo responses. To make it functional, we need to deploy:

#### 1. FastAPI Backend (`api.yuriodev.co.uk`)

**Technologies:**
- Python 3.11+
- FastAPI (async web framework)
- Pydantic (data validation)
- Uvicorn (ASGI server)

**Endpoints needed:**
```
POST /api/agent/query
  Request:
    - customer_id: int
    - query: string
    - session_id: string (optional)

  Response:
    - status: "success" | "error"
    - data: { message, metadata }
    - error: { code, message }
```

**File structure:**
```
banking-assistant-backend/
├── app/
│   ├── main.py              # FastAPI app entry
│   ├── models.py            # Pydantic models
│   ├── routers/
│   │   └── agent.py         # /api/agent routes
│   ├── services/
│   │   ├── validation.py    # Input validation
│   │   ├── data_service.py  # Customer data retrieval
│   │   └── intent.py        # Intent classification
│   └── config.py            # Configuration
├── data/
│   └── customers.json       # Customer database
├── requirements.txt
├── Dockerfile
└── .env
```

#### 2. AI Engine Service (Port 8500)

**Technologies:**
- Python 3.11+
- OpenAI SDK (GPT-5)
- Google GenerativeAI SDK (Gemini-2.5 Pro)
- Anthropic SDK (Claude-4.5-Haiku)

**Key features:**
- Multi-model support with fallback
- Prompt engineering templates
- Response formatting
- Error handling & retries

**File structure:**
```
ai-engine/
├── engine/
│   ├── main.py              # Service entry point
│   ├── models/
│   │   ├── gpt5.py          # OpenAI GPT-5
│   │   ├── gemini.py        # Google Gemini-2.5 Pro
│   │   └── claude.py        # Anthropic Claude-4.5-Haiku
│   ├── prompts/
│   │   └── banking.py       # Banking-specific prompts
│   └── utils/
│       ├── formatter.py     # Response formatting
│       └── logger.py        # Logging
├── requirements.txt
├── Dockerfile
└── .env
```

#### 3. NGINX Reverse Proxy Configuration

**For api.yuriodev.co.uk:**

```nginx
server {
    listen 80;
    server_name api.yuriodev.co.uk;

    # Proxy to FastAPI backend
    location / {
        proxy_pass http://localhost:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # CORS headers
    add_header Access-Control-Allow-Origin "https://yuriodev.co.uk" always;
    add_header Access-Control-Allow-Methods "GET, POST, OPTIONS" always;
    add_header Access-Control-Allow-Headers "Content-Type, Authorization" always;
}
```

#### 4. Docker Compose Setup

**docker-compose.yml:**
```yaml
version: '3.8'

services:
  backend:
    build: ./banking-assistant-backend
    container_name: banking-backend
    ports:
      - "8000:8000"
    environment:
      - AI_ENGINE_URL=http://ai-engine:8500
    volumes:
      - ./data:/app/data
    restart: unless-stopped
    networks:
      - banking-network

  ai-engine:
    build: ./ai-engine
    container_name: ai-engine
    ports:
      - "8500:8500"
    env_file:
      - ./ai-engine/.env
    restart: unless-stopped
    networks:
      - banking-network

networks:
  banking-network:
    driver: bridge
```

### Environment Variables Needed

**Backend (.env):**
```env
# Server
ENVIRONMENT=production
DEBUG=false
HOST=0.0.0.0
PORT=8000

# AI Engine
AI_ENGINE_URL=http://ai-engine:8500

# Security
API_KEY_HEADER=X-API-Key
ALLOWED_ORIGINS=https://yuriodev.co.uk

# Logging
LOG_LEVEL=INFO
```

**AI Engine (.env):**
```env
# OpenAI
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-5

# Google Gemini
GOOGLE_API_KEY=...
GEMINI_MODEL=gemini-2.5-pro

# Anthropic Claude
ANTHROPIC_API_KEY=...
CLAUDE_MODEL=claude-4.5-haiku

# Service
HOST=0.0.0.0
PORT=8500
```

---

## 6. Next Steps

### Phase 1: Frontend Deployment (Current) ✅

**Tasks:**
1. ✅ Build React app locally
2. ✅ Set up NGINX on Hetzner
3. ✅ Upload build files
4. ✅ Configure SSL with Let's Encrypt
5. ✅ Test website deployment

**Expected outcome:**
- `https://yuriodev.co.uk` is live
- Banking assistant shows demo responses
- All pages and routing work correctly

### Phase 2: Backend Deployment (Next)

**Tasks:**
1. Create FastAPI backend application
2. Create AI Engine service
3. Create Docker containers for both services
4. Deploy backend to Hetzner
5. Configure NGINX reverse proxy for `api.yuriodev.co.uk`
6. Set up SSL for API subdomain
7. Update frontend API endpoint (rebuild and redeploy)
8. Test end-to-end banking queries

**Expected outcome:**
- `https://api.yuriodev.co.uk/api/agent/query` accepts requests
- Banking assistant terminal shows real AI responses
- Multi-model support (GPT-5, Gemini-2.5 Pro, Claude-4.5-Haiku) working

### Phase 3: Testing & Monitoring

**Tasks:**
1. Load testing
2. Error monitoring (Sentry/LogRocket)
3. Analytics (Google Analytics/Plausible)
4. Performance optimization
5. SEO optimization
6. Mobile testing

---

## 7. Quick Reference Commands

### Local Development
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Hetzner Server Management
```bash
# SSH into server
ssh root@YOUR_HETZNER_IP

# Check NGINX status
systemctl status nginx

# Reload NGINX after config changes
systemctl reload nginx

# View NGINX logs
tail -f /var/log/nginx/yuriodev_access.log
tail -f /var/log/nginx/yuriodev_error.log

# Check SSL certificate
certbot certificates

# Renew SSL (manual)
certbot renew
```

### Deployment Updates
```bash
# From local machine:
# 1. Build
cd yuriodev-portfolio && npm run build

# 2. Upload
rsync -avz --delete dist/ root@YOUR_HETZNER_IP:/var/www/yuriodev.co.uk/

# 3. Clear browser cache and test
```

---

## 8. Current Status Summary

### ✅ Completed
- Frontend React application with 3-section Banking Assistant page
- AgentTerminal component with command parsing
- Theme-aware styling (dark/light modes)
- Responsive design (desktop, tablet, mobile)
- Client-side routing with React Router
- Build configuration with Vite

### ⏳ In Progress
- Hetzner server deployment
- NGINX configuration
- SSL certificate setup

### 📋 To Do
- FastAPI backend creation
- AI Engine service creation
- Docker containerization
- Backend deployment to Hetzner
- API subdomain configuration
- Frontend-backend integration
- End-to-end testing

---

## 9. Support & Resources

### Documentation
- [Vite Deploy Guide](https://vitejs.dev/guide/static-deploy.html)
- [NGINX Documentation](https://nginx.org/en/docs/)
- [Certbot Instructions](https://certbot.eff.org/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Docker Documentation](https://docs.docker.com/)

### Monitoring
After deployment, monitor:
- Server resources (CPU, RAM, disk)
- NGINX logs
- SSL certificate expiration (auto-renewed)
- Website uptime
- API response times (when deployed)

---

**Document Version**: 1.0
**Last Updated**: 19 October 2025
**Author**: AI Assistant
**Project**: YurioDev Portfolio - Hetzner Deployment
