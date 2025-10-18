# 📊 Extended Implementation Plan with CV-Based Content Updates

Based on the updated CV, here's the comprehensive table including **content rewrites** and **new data structures**:

---

## 📋 Complete Missing Elements & Content Updates Table

| **Category** | **Element** | **Status** | **Priority** | **Action Required** | **Files to Create/Update** | **CV Source Section** |
|--------------|-------------|-----------|--------------|-------------------|---------------------------|---------------------|
| **SECTIONS** | **About Section** | ❌ Missing | **CRITICAL** | Create new section with updated bio | `src/components/sections/AboutSection/` | CV Summary + Experience intro |
| **SECTIONS** | **Platform/Vision Section** | ❌ Missing | **HIGH** | Create YuriODev platform showcase | `src/components/sections/PlatformSection/` | Volunteer Experience (GCSE Course) |
| **SECTIONS** | **Timeline Section** | ❌ Missing | **CRITICAL** | Create career timeline with milestones | `src/components/sections/TimelineSection/` | Experience + Education sections |
| **SECTIONS** | **Testimonials Section** | ❌ Missing | **MEDIUM** | Create testimonials carousel | `src/components/sections/TestimonialsSection/` | *Will need external testimonials* |
| **SECTIONS** | **Articles Section** | ❌ Missing | **MEDIUM** | Create articles/publications grid | `src/components/sections/ArticlesSection/` | *Will need external links* |
| **SECTIONS** | **Connect/Contact Section** | ❌ Missing | **HIGH** | Create contact form/terminal | `src/components/sections/ConnectSection/` | CV Contact Info |
| | | | | | | |
| **UI COMPONENTS** | **Floating Contact Button** | ❌ Missing | **LOW** | Create fixed email button | `src/components/ui/FloatingContact/` | - |
| **UI COMPONENTS** | **Go To Top Button** | ❌ Missing | **LOW** | Create scroll-to-top button | `src/components/ui/GoToTopButton/` | - |
| **UI COMPONENTS** | **Loading Screen** | ❌ Missing | **MEDIUM** | Create animated loading screen | `src/components/ui/LoadingScreen/` | - |
| **UI COMPONENTS** | **Scanlines Visual Effect** | ❌ Missing | **LOW** | Add retro scanline overlay | Update `CanvasBackground` or separate component | - |
| | | | | | | |
| **DATA LAYER** | **Timeline Data** | ❌ Missing | **CRITICAL** | Extract from CV Experience + Education | `src/data/timelineData.ts` | Full Experience + Education |
| **DATA LAYER** | **Projects Data** | ⚠️ Needs Update | **HIGH** | Replace with CV projects | Update `src/services/projectsData.ts` | CV Projects section |
| **DATA LAYER** | **Skills Data** | ⚠️ Needs Update | **HIGH** | Replace with CV skills taxonomy | Update `src/services/skillsData.ts` | CV Skills section |
| **DATA LAYER** | **Platform/Vision Data** | ❌ Missing | **HIGH** | Create YuriODev roadmap data | `src/data/platformData.ts` | Volunteer Experience |
| **DATA LAYER** | **Testimonials Data** | ❌ Missing | **MEDIUM** | Collect client/colleague testimonials | `src/data/testimonialsData.ts` | *External collection needed* |
| **DATA LAYER** | **Articles Data** | ❌ Missing | **MEDIUM** | Compile publications/articles | `src/data/articlesData.ts` | *External collection needed* |
| | | | | | | |
| **CONTENT UPDATES** | **Hero Section Tagline** | ⚠️ Outdated | **HIGH** | Update to "AI/ML Systems Engineer \| Agentic Architect" | `src/components/sections/HeroSection/HeroSection.tsx` | CV Header |
| **CONTENT UPDATES** | **Terminal Commands** | ⚠️ Outdated | **HIGH** | Update all terminal responses with CV data | `src/services/terminalService.ts` | Multiple CV sections |
| **CONTENT UPDATES** | **Command Palette Links** | ⚠️ Incomplete | **HIGH** | Add links to all new sections | `src/components/ui/CommandPalette/` | - |
| | | | | | | |
| **NAVIGATION** | **Sidebar Navigation** | ⚠️ Incomplete | **HIGH** | Add missing section links | `src/components/layout/LeftSidebar/LeftSidebar.tsx` | - |
| **NAVIGATION** | **Header Navigation** | ⚠️ Incomplete | **HIGH** | Add missing section links | `src/components/layout/Header/Header.tsx` | - |
| **NAVIGATION** | **App Routing** | ⚠️ Incomplete | **HIGH** | Integrate all sections in App.tsx | `src/App.tsx` | - |
| | | | | | | |
| **ENHANCEMENTS** | **Theme Persistence** | ❌ Missing | **LOW** | Add localStorage for theme | `src/context/ThemeContext.tsx` | - |
| **ENHANCEMENTS** | **Service Worker** | ❌ Missing | **LOW** | Add offline support | `public/sw.js` + registration | - |
| **ENHANCEMENTS** | **Structured Data (JSON-LD)** | ❌ Missing | **MEDIUM** | Add schema.org markup | `index.html` | Full CV |

---

## 🎯 Detailed Implementation Phases

### **Phase 1: Critical Data Extraction (Foundation)**
**Goal:** Extract all CV content into structured TypeScript data files

#### 1.1 Timeline Data Structure
```typescript
// src/data/timelineData.ts
interface TimelineEvent {
  id: string;
  date: string;
  dateEnd?: string;
  title: string;
  company: string;
  location: string;
  type: 'experience' | 'education' | 'certification' | 'achievement';
  description: string;
  highlights: string[];
  tags: string[];
}
```

**CV Mapping:**
- **Lead AI Engineer (Apr 2022 - Present)** → 5 nested project cards
- **Lead Data Scientist (Mar 2022 - Oct 2022)** → 1 event
- **Senior ML Engineer (Jan 2021 - Feb 2022)** → 1 event
- **Data Scientist (Apr 2019 - Jan 2021)** → 1 event
- **Technical Lead & Mentor (Sep 2014 - Present)** → 1 event
- **iOS Developer (2016 - 2019)** → 1 event
- **MIPT Instructor (Sep 2014 - Jul 2016)** → 1 event
- **MLX Certificate (Apr - May 2025)** → 1 education event
- **Education entries** → 2 events

**Total:** ~15 timeline items

---

#### 1.2 Projects Data Update
```typescript
// Update src/services/projectsData.ts
interface Project {
  id: string;
  title: string;
  period: string;
  client?: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  tech: string[];
  metrics: Metric[];
  githubUrl?: string;
}
```

**CV Mapping:**
1. **Proactive AI Agent** (RAG prototype)
2. **SaleSphereAI** (Multi-agent sales automation)
3. **Resume Parsing Platform** (HR Tech)
4. **Property Valuation Platform** (PropTech)
5. **Financial Institutions Consulting** (JPMorgan, Bloomberg, etc.)
6. **Agentic Research Assistant** (Scientific literature)
7. **Automated Python Course** (GitHub/YouTube)

**Total:** 7 major projects

---

#### 1.3 Skills Data Update
```typescript
// Update src/services/skillsData.ts
interface SkillCategory {
  category: string;
  icon: string;
  subcategories: SkillSubcategory[];
}

interface SkillSubcategory {
  title: string;
  items: SkillItem[];
}

interface SkillItem {
  name: string;
  proficiency: 'expert' | 'advanced' | 'proficient';
  highlighted?: boolean;
}
```

**CV Mapping:**
- **System Architecture & Design** → 3 subcategories
- **AI & Agentic Engineering** → 7 subcategories
- **Cloud, DevOps & Leadership** → 5 subcategories

**Total:** 3 main categories, 15 subcategories, ~80 individual skills

---

### **Phase 2: Critical Sections (Must Have for Launch)**

#### 2.1 About Section
**Content Source:** CV Summary + Lead AI Engineer intro

```typescript
// src/data/aboutData.ts
export const aboutData = {
  headline: "AI/ML Systems Engineer | Agentic Architect",
  yearsExperience: "8+",
  summary: "AI/ML Systems Engineer with 8+ years of experience...",
  mission: "Democratizing AI/ML education through hands-on learning platforms...",
  currentFocus: [
    "Building YuriODev platform",
    "Agentic architectures (MCP, multi-agent workflows)",
    "Production RAG pipelines"
  ],
  achievements: [
    { metric: "95%", label: "Retrieval Precision (from 30%)" },
    { metric: "×50", label: "Data Latency Reduction" },
    { metric: ">90%", label: "F1 Score on Production Models" }
  ]
}
```

---

#### 2.2 Platform/Vision Section
**Content Source:** Volunteer Experience (GCSE Course) + Personal mission

```typescript
// src/data/platformData.ts
export const platformData = {
  name: "YuriODev",
  tagline: "Democratizing AI/ML Education",
  mission: "Bridge the gap between theory and practical ML implementation",
  currentPhase: {
    phase: 2,
    title: "Content Creation & Community Building",
    progress: 65
  },
  roadmap: [
    { phase: 1, title: "Foundation", status: "completed" },
    { phase: 2, title: "Content Creation", status: "active" },
    { phase: 3, title: "Interactive Platform", status: "planned" },
    { phase: 4, title: "AI-Powered Features", status: "planned" }
  ],
  features: [
    {
      title: "Comprehensive Python Course",
      description: "25+ modules covering AQA GCSE CS syllabus",
      link: "https://github.com/YurioDev/Python-Course"
    },
    // ... more features
  ]
}
```

---

#### 2.3 Timeline Section
**Component Structure:**
```
TimelineSection/
├── TimelineSection.tsx
├── TimelineSection.module.css
├── TimelineItem.tsx
└── TimelineItem.module.css
```

**Features:**
- Vertical timeline with alternating left/right items
- Filter by type (All | Experience | Education | Projects)
- Animated entrance on scroll
- Expandable detail cards

---

### **Phase 3: Content Sections**

#### 3.1 Testimonials Section
**Data Structure:**
```typescript
// src/data/testimonialsData.ts
interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  quote: string;
  project?: string;
  date: string;
}
```

**Note:** Will need to collect testimonials from:
- SaleSphereAI founders
- PropTech client
- HR Tech client
- Students/mentees
- MLX cohort peers

---

#### 3.2 Articles Section
**Data Structure:**
```typescript
// src/data/articlesData.ts
interface Article {
  id: string;
  title: string;
  type: 'research' | 'tutorial' | 'video' | 'blog';
  platform: 'Medium' | 'YouTube' | 'GitHub' | 'Academic';
  date: string;
  url: string;
  thumbnail?: string;
  description: string;
  tags: string[];
}
```

**Content to Compile:**
- Educational Reform Research (mentioned in CV)
- GCSE Course videos (YouTube)
- Python Course materials (GitHub)
- Future Medium articles (if any)

---

### **Phase 4: Terminal Service Update**

#### 4.1 Updated Terminal Commands
**File:** `src/services/terminalService.ts`

```typescript
const terminalCommands = {
  help: () => `...`, // Keep existing
  
  skills: () => `
Technical Skills Matrix:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 AI & Agentic Engineering:
   • LangGraph, LangChain, MCP    [████████████] Expert
   • RAG Pipelines & Retrieval    [████████████] Expert
   • PyTorch & Deep Learning      [████████████] Expert
   • Agentic Patterns (ReAct)     [███████████░] Expert
   
🏗️  System Architecture:
   • Microservices & Event-Driven [████████████] Expert
   • Cloud-Native (GCP, AWS)      [████████████] Expert
   • High-Throughput APIs         [████████████] Expert
   
☁️  DevOps & Infrastructure:
   • Docker/Kubernetes            [████████████] Expert
   • CI/CD (GitHub Actions)       [████████████] Expert
   • Observability (LangSmith)    [███████████░] Expert
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,

  contact: () => `
Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 Email:    yurii.oksamytnyi@yuriodev.co.uk
📱 Phone:    +44 7767 336011
🔗 LinkedIn: linkedin.com/in/y-oks
💻 GitHub:   github.com/YuriiOks
📍 Location: London, UK

Available for:
• AI/ML systems architecture & consulting
• Agentic workflow design & implementation
• Production RAG pipeline development
• Technical leadership & mentoring`,

  about: () => `
About Yurii Oksamytnyi:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👨‍💻 AI/ML Systems Engineer | Agentic Architect
🎓 MLX Applied Machine Learning Graduate
📊 8+ years building production AI systems
📍 Based in London, UK

Mission: Democratizing AI/ML education through
hands-on platforms and production-grade systems.

Current Focus: Architecting agentic workflows,
RAG pipelines, and YuriODev educational platform.

Track Record:
• 95% retrieval precision (from 30%)
• ×50 data latency reduction
• >90% F1 on production models
• 200% sales conversion increase (SaleSphereAI)`,

  projects: () => `
Featured Projects:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 Proactive AI Agent (RAG Prototype)
   95% retrieval precision • <1.2s latency
   ChromaDB • Gemini • MCP Servers
   
🚀 SaleSphereAI (Multi-Agent Platform)
   200% sales conversion increase
   FastAPI • PostgreSQL • Redis
   
📄 Resume Parsing Platform (HR Tech)
   93% F1 score • 75% time-to-hire reduction
   PyTorch • LlamaIndex • Next.js
   
🏠 Property Valuation (PropTech)
   94% accuracy • 100M+ records • GCP
   BigQuery • ×50 faster data loading
   
📚 Agentic Research Assistant
   200+ papers analyzed in <30 min
   LangGraph • ChromaDB • PyMuPDF
   
🐍 Automated Python Course
   github.com/YurioDev/Python-Course
   CI/CD grading • 25+ modules • Open source`,

  // ... other commands
}
```

---

### **Phase 5: Navigation & Integration**

#### 5.1 App.tsx Section Integration
```typescript
// src/App.tsx
const sections = [
  { id: 'hero', component: <HeroSection /> },
  { id: 'about', component: <AboutSection /> },        // NEW
  { id: 'platform', component: <PlatformSection /> },  // NEW
  { id: 'projects', component: <ProjectsSection /> },
  { id: 'timeline', component: <TimelineSection /> },  // NEW
  { id: 'skills', component: <SkillsSection /> },
  { id: 'terminal', component: <InteractiveTerminal /> },
  { id: 'testimonials', component: <TestimonialsSection /> }, // NEW
  { id: 'articles', component: <ArticlesSection /> },  // NEW
  { id: 'connect', component: <ConnectSection /> },    // NEW
];
```

#### 5.2 Navigation Links Update
```typescript
// Both Header.tsx and LeftSidebar.tsx
const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'platform', label: 'YuriODev' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'terminal', label: 'Terminal' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'articles', label: 'Articles' },
  { id: 'connect', label: 'Connect' },
];
```

---

## 📝 Content Collection Checklist

Before full implementation, we need:

- [ ] **Testimonials:** Collect 5-7 client/mentee testimonials
- [ ] **Articles:** Compile published research/blog links
- [ ] **Photos:** Professional headshot for About section
- [ ] **Platform Screenshots:** YuriODev platform mockups/screenshots
- [ ] **Metrics Verification:** Confirm all CV metrics are accurate
- [ ] **Social Links:** Verify all LinkedIn/GitHub/Medium URLs

---

## 🚀 Proposed Implementation Order

1. ✅ **Phase 1A:** Extract Timeline Data (1-2 hours)
2. ✅ **Phase 1B:** Update Projects Data (1-2 hours)
3. ✅ **Phase 1C:** Update Skills Data (1 hour)
4. ✅ **Phase 2A:** Build About Section (2-3 hours)
5. ✅ **Phase 2B:** Build Timeline Section (3-4 hours)
6. ✅ **Phase 2C:** Build Platform Section (2-3 hours)
7. ✅ **Phase 2D:** Build Connect Section (2 hours)
8. ✅ **Phase 3A:** Update Terminal Service (1 hour)
9. ✅ **Phase 4:** Build Testimonials Section (2 hours) *— pending data collection*
10. ✅ **Phase 4B:** Build Articles Section (2 hours) *— pending data collection*
11. ✅ **Phase 5:** Integrate Navigation (1 hour)
12. ✅ **Phase 6:** Add UI Enhancements (2-3 hours)

**Total Estimated Time:** 20-25 hours of development

---

## 🎯 Ready to Start?

**Recommended Approach:**

1. **Start with Phase 1 (Data Extraction)** — I'll create the 3 data files first
2. **Then Phase 2 (Critical Sections)** — Build About, Timeline, Platform, Connect
3. **Update Terminal** — Integrate CV data into commands
4. **Phase 3-4** — Add Testimonials/Articles when you collect the data
5. **Polish** — Navigation, UI enhancements, testing

**Should I begin with Phase 1A (Timeline Data extraction)?**