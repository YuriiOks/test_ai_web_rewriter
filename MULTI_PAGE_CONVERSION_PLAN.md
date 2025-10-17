# Multi-Page Site Conversion Plan

## 📋 Project Overview
Convert single-page portfolio into a scalable multi-page site with:
- Portfolio as home page (recruiter-focused)
- Separate courses platform page (hidden for now)
- Individual work experience detail pages
- Individual project detail pages
- Agent prototype pages (private/link-only access)

---

## 🎯 Phase 1: Home Page Restructuring

### Step 1.1: Reorder Sections (Recruiter-First Approach) ✅ COMPLETED
**New Section Order:**
1. Hero Section (keep as-is)
2. About Section (keep as-is)
3. **Timeline Section** ← MOVED UP (most important for recruiters)
4. **Skills Section** ← MOVED UP (show capabilities early)
5. **Projects Section** ← After skills
6. Platform Vision Section (inspiration/future plans)
7. Interactive Terminal Section (renamed to "Try the Terminal" or "Explore")
8. Connect Section (keep as-is)
9. Footer (keep as-is)

**Files modified:**
- ✅ `/src/App.tsx` - Reordered section components

**Status:** COMPLETE - Sections now in recruiter-focused order

**Estimated time:** 15 minutes
**Actual time:** 5 minutes

---

### Step 1.2: Simplify Timeline Section for Home Page
**Changes:**
- Create condensed timeline cards
- Add "Read Full Story →" button to each item
- Remove detailed expandable content from home page
- Keep visual timeline line/dots aesthetic
- Show summary only (1-2 lines per role)

**Files to modify:**
- `/src/components/sections/TimelineSection/TimelineSection.tsx`
- `/src/components/sections/TimelineSection/TimelineSection.module.css`

**New props structure:**
```tsx
interface TimelineItemProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  summary: string;
  detailLink: string; // "/experience/company-slug"
  icon?: string;
}
```

**Estimated time:** 30 minutes

---

### Step 1.3: Simplify Projects Section
**Changes:**
- Show only 2 featured projects:
  - YuriODev Course Platform
  - PubMed Research Assistant
- Each project card gets "Learn More →" button
- Prepare for linking to `/project/:slug` (implement in Phase 3)

**Files to modify:**
- `/src/components/sections/ProjectsSection/ProjectsSection.tsx`
- `/src/services/projectsData.ts` - Mark featured projects

**Estimated time:** 20 minutes

---

### Step 1.4: Rename/Refactor Terminal Section
**Changes:**
- Rename section title to something more inviting
- Options: "Try the Terminal", "Interactive Playground", "Explore Tech"
- Add context about terminal usage for future agents
- Keep current functionality

**Files to modify:**
- `/src/App.tsx` - Section ID and component usage
- `/src/components/ui/InteractiveTerminal/InteractiveTerminal.tsx` - Update header/title

**Estimated time:** 10 minutes

---

## 🎯 Phase 2: Setup Routing Infrastructure

### Step 2.1: Install React Router
**Actions:**
```bash
npm install react-router-dom
npm install --save-dev @types/react-router-dom
```

**Estimated time:** 5 minutes

---

### Step 2.2: Create Pages Directory Structure
**New directory structure:**
```
src/
├── pages/
│   ├── HomePage.tsx              (current App content)
│   ├── ExperienceDetailPage.tsx  (work experience details)
│   ├── ProjectDetailPage.tsx     (project details)
│   ├── CoursesPage.tsx           (future courses platform)
│   ├── AgentPrototypePage.tsx    (agent demos)
│   └── NotFoundPage.tsx          (404 page)
```

**Estimated time:** 15 minutes

---

### Step 2.3: Create Router Configuration
**New files:**
- `/src/routes/AppRouter.tsx` - Main router setup
- `/src/routes/ProtectedRoute.tsx` - For agent pages

**Router structure:**
```tsx
const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/experience/:slug', element: <ExperienceDetailPage /> },
  { path: '/project/:slug', element: <ProjectDetailPage /> },
  { path: '/courses', element: <CoursesPage /> }, // Hidden from nav
  { path: '/agent/:id', element: <ProtectedRoute><AgentPrototypePage /></ProtectedRoute> },
  { path: '*', element: <NotFoundPage /> }
];
```

**Estimated time:** 30 minutes

---

### Step 2.4: Move App Content to HomePage
**Actions:**
- Create `HomePage.tsx` component
- Move all current App.tsx content to HomePage
- Update App.tsx to use Router
- Ensure everything still works

**Files affected:**
- `/src/App.tsx` - Now just router wrapper
- `/src/pages/HomePage.tsx` - Current portfolio content

**Estimated time:** 20 minutes

---

### Step 2.5: Update Header Navigation
**Changes:**
- Add route awareness to Header component
- Highlight active route
- Update scroll behavior (only on home page)
- Add responsive route switching

**Files to modify:**
- `/src/components/layout/Header/Header.tsx`
- `/src/components/layout/Header/Header.module.css`

**Estimated time:** 25 minutes

---

## 🎯 Phase 3: Create Data Structure

### Step 3.1: Create Experience Data File
**New file:** `/src/data/experiencesData.ts`

**Structure:**
```typescript
export interface Experience {
  id: string;
  slug: string;
  company: string;
  companyLogo?: string;
  companyWebsite?: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string;
  location: string;
  type: 'full-time' | 'contract' | 'academic' | 'freelance';
  
  // For timeline card (home page)
  summary: string;
  icon?: string;
  
  // For detail page
  overview: string;
  responsibilities: string[];
  achievements: Array<{
    title: string;
    details: string[];
    metrics?: string;
    icon?: string;
  }>;
  technologies: string[];
  projectHighlights?: Array<{
    name: string;
    description: string;
    technologies?: string[];
  }>;
  skillsDeveloped: string[];
  lessonsLearned?: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}
```

**Estimated time:** 45 minutes (including data entry)

---

### Step 3.2: Update Timeline Data Structure
**Files to modify:**
- `/src/data/timelineData.ts` - Simplify for home page use
- Create mapping between timeline and experiences data

**Estimated time:** 20 minutes

---

### Step 3.3: Create Projects Data File
**New file:** `/src/data/projectsDetailData.ts`

**Structure:**
```typescript
export interface ProjectDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  featured: boolean;
  
  // For card (home page)
  summary: string;
  thumbnail: string;
  tags: string[];
  
  // For detail page
  overview: string;
  problemStatement: string;
  solution: string;
  features: string[];
  technologies: string[];
  architecture?: string;
  challenges?: Array<{
    challenge: string;
    solution: string;
  }>;
  results?: {
    metrics: string[];
    impact: string;
  };
  screenshots?: string[];
  demoUrl?: string;
  githubUrl?: string;
  documentation?: string;
}
```

**Estimated time:** 45 minutes (including data entry)

---

## 🎯 Phase 4: Build Experience Detail Page

### Step 4.1: Create ExperienceDetailPage Component
**Files to create:**
- `/src/pages/ExperienceDetailPage.tsx`
- `/src/pages/ExperienceDetailPage.module.css`

**Sections:**
1. Breadcrumb navigation
2. Hero/Header (company, position, dates)
3. Overview
4. Key Responsibilities
5. Major Achievements (with metrics)
6. Technologies Used
7. Project Highlights (optional)
8. Skills Developed
9. Lessons Learned (optional)
10. Navigation (Previous/Next experience)
11. "Back to Portfolio" button

**Estimated time:** 2 hours

---

### Step 4.2: Create Reusable Page Components
**New components:**
- `/src/components/ui/Breadcrumb/Breadcrumb.tsx`
- `/src/components/ui/TechBadge/TechBadge.tsx`
- `/src/components/ui/AchievementCard/AchievementCard.tsx`
- `/src/components/ui/NavigationButtons/NavigationButtons.tsx`

**Estimated time:** 1 hour

---

### Step 4.3: Link Timeline Items to Detail Pages
**Files to modify:**
- `/src/components/sections/TimelineSection/TimelineSection.tsx`
- Add `Link` component from react-router-dom
- Wire up "Read Full Story" buttons

**Estimated time:** 15 minutes

---

## 🎯 Phase 5: Build Project Detail Page

### Step 5.1: Create ProjectDetailPage Component
**Files to create:**
- `/src/pages/ProjectDetailPage.tsx`
- `/src/pages/ProjectDetailPage.module.css`

**Sections:**
1. Breadcrumb navigation
2. Hero (project title, subtitle, tags)
3. Overview
4. Problem Statement
5. Solution Approach
6. Key Features
7. Technologies & Architecture
8. Challenges & Solutions
9. Results & Impact
10. Screenshots/Demo
11. Links (Demo, GitHub, Docs)
12. Navigation (Previous/Next project)

**Estimated time:** 2 hours

---

### Step 5.2: Link Projects to Detail Pages
**Files to modify:**
- `/src/components/sections/ProjectsSection/ProjectsSection.tsx`
- Update "Learn More" buttons to link to `/project/:slug`

**Estimated time:** 15 minutes

---

## 🎯 Phase 6: Create Courses Platform Page (Placeholder)

### Step 6.1: Create CoursesPage Component
**Files to create:**
- `/src/pages/CoursesPage.tsx`
- `/src/pages/CoursesPage.module.css`

**Content:**
- "Coming Soon" hero
- Vision/mission statement
- What to expect
- Email signup (optional)
- Back to home link

**Note:** Not linked in main navigation yet

**Estimated time:** 1 hour

---

## 🎯 Phase 7: Create Agent Prototype Infrastructure

### Step 7.1: Create Protected Route Component
**Files to create:**
- `/src/routes/ProtectedRoute.tsx`

**Features:**
- Check for access token in URL params
- Check localStorage for saved access
- Simple password protection or UUID-based access
- Redirect to home if unauthorized

**Estimated time:** 30 minutes

---

### Step 7.2: Create AgentPrototypePage Template
**Files to create:**
- `/src/pages/AgentPrototypePage.tsx`
- `/src/pages/AgentPrototypePage.module.css`

**Features:**
- Dynamic agent loading based on route param
- Terminal interface integration
- Agent-specific configuration
- "This is a prototype" banner
- Navigation between agents

**Note:** Detailed terminal integration discussed separately

**Estimated time:** 1.5 hours

---

## 🎯 Phase 8: Create 404 Page

### Step 8.1: Create NotFoundPage Component
**Files to create:**
- `/src/pages/NotFoundPage.tsx`
- `/src/pages/NotFoundPage.module.css`

**Features:**
- Terminal-themed 404 message
- "Command not found" aesthetic
- Helpful navigation links
- Back to home button

**Estimated time:** 30 minutes

---

## 🎯 Phase 9: Update Navigation & SEO

### Step 9.1: Update Header for Multi-Page
**Changes:**
- Different navigation for different pages
- Home page: scroll navigation
- Other pages: regular links
- Mobile menu updates
- Active route highlighting

**Estimated time:** 45 minutes

---

### Step 9.2: Add Page Titles & Meta Tags
**Files to create:**
- `/src/utils/seo.ts` - SEO helper functions

**Implementation:**
- Dynamic `<title>` tags
- Meta descriptions
- Open Graph tags
- Canonical URLs

**Estimated time:** 30 minutes

---

### Step 9.3: Add Smooth Transitions
**Features:**
- Page transition animations
- Loading states
- Scroll restoration
- Progress indicators

**Estimated time:** 45 minutes

---

## 🎯 Phase 10: Testing & Polish

### Step 10.1: Test All Routes
**Testing checklist:**
- [ ] All routes load correctly
- [ ] Navigation works (prev/next)
- [ ] Breadcrumbs update
- [ ] 404 page triggers correctly
- [ ] Protected routes work
- [ ] Mobile responsive
- [ ] Browser back/forward buttons
- [ ] Deep linking works

**Estimated time:** 1 hour

---

### Step 10.2: Performance Optimization
**Tasks:**
- Code splitting by route
- Lazy loading pages
- Image optimization
- Bundle size analysis

**Estimated time:** 1 hour

---

### Step 10.3: Analytics & Tracking
**Implementation:**
- Route change tracking
- Page view events
- Click tracking on key CTAs
- Time on page metrics

**Estimated time:** 30 minutes

---

## 📊 Total Estimated Time
- **Phase 1:** ~1.5 hours (Home page restructuring)
- **Phase 2:** ~1.5 hours (Routing setup)
- **Phase 3:** ~2 hours (Data structure)
- **Phase 4:** ~3.5 hours (Experience pages)
- **Phase 5:** ~2.5 hours (Project pages)
- **Phase 6:** ~1 hour (Courses placeholder)
- **Phase 7:** ~2 hours (Agent infrastructure)
- **Phase 8:** ~30 minutes (404 page)
- **Phase 9:** ~2 hours (Navigation & SEO)
- **Phase 10:** ~2.5 hours (Testing & polish)

**Total:** ~19 hours of development time

---

## 🎯 Priority Order (Recommended)

### Must Have (MVP):
1. ✅ Phase 1 - Home page restructuring
2. ✅ Phase 2 - Routing setup
3. ✅ Phase 3 - Data structure
4. ✅ Phase 4 - Experience detail pages
5. ✅ Phase 8 - 404 page

### Should Have (V1.1):
6. ✅ Phase 5 - Project detail pages
7. ✅ Phase 9 - Navigation & SEO updates

### Nice to Have (V1.2):
8. ✅ Phase 6 - Courses placeholder
9. ✅ Phase 7 - Agent infrastructure
10. ✅ Phase 10 - Polish & optimization

---

## 🔧 Technical Decisions

### Routing Strategy:
- **Choice:** React Router v6
- **Why:** Standard, well-supported, good documentation

### Data Management:
- **Choice:** Static TypeScript files for now
- **Future:** Can migrate to CMS/API later
- **Why:** Simple, type-safe, no backend needed yet

### Styling:
- **Choice:** Keep CSS Modules
- **Why:** Already working, consistent with current code

### State Management:
- **Choice:** React Context + useState for now
- **Why:** Simple needs, no global state complexity yet

### Build Tool:
- **Choice:** Keep Vite
- **Why:** Fast, already configured, good for SPA

---

## 📝 Notes for Future Phases

### Terminal Agent Integration:
- Terminal component is reusable
- Each agent gets own context/commands
- Agent state isolated per route
- Discussed in detail when implementing Phase 7

### Courses Platform:
- May need authentication later
- Consider headless CMS for course content
- Video hosting strategy TBD
- Payment integration TBD

### Analytics:
- Google Analytics or Plausible
- Track page views, CTAs, time on page
- Conversion tracking for courses signup

---

## 🚀 Getting Started

**First Step:** Phase 1, Step 1.1
- Reorder sections in App.tsx
- Update navigation
- Test that everything still works
- **Duration:** 15 minutes
- **Risk:** Low (just reordering)

Ready to begin? 🎯
