# yuriodev-portfolio - Project Documentation

Generated on: 2025-10-19 18:44:05

## Project Overview
yuriodev-portfolio is organized as follows. This documentation provides a comprehensive overview of the project structure, key modules, and implementation details.

## Project Structure

```
📁 yuriodev-portfolio/
├── 📁 src/
├── ├── 📁 assets/
├── ├── └── 📁 styles/
├── ├── └── ├── 📄 _variables.css
├── ├── └── └── 📄 global.css
├── ├── 📁 components/
├── ├── ├── 📁 layout/
├── ├── ├── ├── 📁 Footer/
├── ├── ├── ├── ├── 📄 Footer.module.css
├── ├── ├── ├── └── 📄 Footer.tsx
├── ├── ├── ├── 📁 Header/
├── ├── ├── ├── ├── 📄 Header.module.css
├── ├── ├── ├── └── 📄 Header.tsx
├── ├── ├── ├── 📁 LeftSidebar/
├── ├── ├── ├── ├── 📄 LeftSidebar.module.css
├── ├── ├── ├── └── 📄 LeftSidebar.tsx
├── ├── ├── └── 📁 PageLayout/
├── ├── ├── └── ├── 📄 PageLayout.module.css
├── ├── ├── └── └── 📄 PageLayout.tsx
├── ├── ├── 📁 sections/
├── ├── ├── ├── 📁 AboutSection/
├── ├── ├── ├── ├── 📄 AboutSection.module.css
├── ├── ├── ├── └── 📄 AboutSection.tsx
├── ├── ├── ├── 📁 AssistantFeaturesSection/
├── ├── ├── ├── ├── 📄 AssistantFeaturesSection.module.css
├── ├── ├── ├── └── 📄 AssistantFeaturesSection.tsx
├── ├── ├── ├── 📁 AssistantTechSection/
├── ├── ├── ├── ├── 📄 AssistantTechSection.module.css
├── ├── ├── ├── └── 📄 AssistantTechSection.tsx
├── ├── ├── ├── 📁 AssistantTerminalSection/
├── ├── ├── ├── ├── 📄 AssistantTerminalSection.module.css
├── ├── ├── ├── └── 📄 AssistantTerminalSection.tsx
├── ├── ├── ├── 📁 ComingSoonSection/
├── ├── ├── ├── ├── 📄 ComingSoonSection.module.css
├── ├── ├── ├── └── 📄 ComingSoonSection.tsx
├── ├── ├── ├── 📁 ConnectSection/
├── ├── ├── ├── ├── 📄 ConnectSection.module.css
├── ├── ├── ├── └── 📄 ConnectSection.tsx
├── ├── ├── ├── 📁 HeroSection/
├── ├── ├── ├── ├── 📄 HeroSection.module.css
├── ├── ├── ├── └── 📄 HeroSection.tsx
├── ├── ├── ├── 📁 PlaceholderPage/
├── ├── ├── ├── ├── 📄 PlaceholderPage.module.css
├── ├── ├── ├── └── 📄 PlaceholderPage.tsx
├── ├── ├── ├── 📁 PlatformSection/
├── ├── ├── ├── ├── 📄 PlatformSection.module.css
├── ├── ├── ├── └── 📄 PlatformSection.tsx
├── ├── ├── ├── 📁 ProjectsSection/
├── ├── ├── ├── ├── 📄 ProjectsSection.module.css
├── ├── ├── ├── └── 📄 ProjectsSection.tsx
├── ├── ├── ├── 📁 SkillsSection/
├── ├── ├── ├── ├── 📄 SkillsSection.module.css
├── ├── ├── ├── └── 📄 SkillsSection.tsx
├── ├── ├── └── 📁 TimelineSection/
├── ├── ├── └── ├── 📄 TimelineItem.module.css
├── ├── ├── └── ├── 📄 TimelineItem.tsx
├── ├── ├── └── ├── 📄 TimelineSection.module.css
├── ├── ├── └── └── 📄 TimelineSection.tsx
├── ├── └── 📁 ui/
├── ├── └── ├── 📁 AgentTerminal/
├── ├── └── ├── ├── 📄 AgentTerminal.module.css
├── ├── └── ├── └── 📄 AgentTerminal.tsx
├── ├── └── ├── 📁 CanvasBackground/
├── ├── └── ├── ├── 📄 CanvasBackground.module.css
├── ├── └── ├── └── 📄 CanvasBackground.tsx
├── ├── └── ├── 📁 CommandPalette/
├── ├── └── ├── ├── 📄 CommandPalette.module.css
├── ├── └── ├── └── 📄 CommandPalette.tsx
├── ├── └── ├── 📁 HelpPanel/
├── ├── └── ├── ├── 📄 HelpPanel.module.css
├── ├── └── ├── └── 📄 HelpPanel.tsx
├── ├── └── ├── 📁 InteractiveTerminal/
├── ├── └── ├── ├── 📄 InteractiveTerminal.module.css
├── ├── └── ├── └── 📄 InteractiveTerminal.tsx
├── ├── └── ├── 📁 LoadingScreen/
├── ├── └── ├── ├── 📄 LoadingScreen.module.css
├── ├── └── ├── └── 📄 LoadingScreen.tsx
├── ├── └── ├── 📁 ProjectCard/
├── ├── └── ├── ├── 📄 ProjectCard.module.css
├── ├── └── ├── └── 📄 ProjectCard.tsx
├── ├── └── ├── 📁 ScrollToTop/
├── ├── └── ├── ├── 📄 ScrollToTop.module.css
├── ├── └── ├── └── 📄 ScrollToTop.tsx
├── ├── └── └── 📁 SkillTerminal/
├── ├── └── └── ├── 📄 SkillTerminal.module.css
├── ├── └── └── └── 📄 SkillTerminal.tsx
├── ├── 📁 context/
├── ├── └── 📄 ThemeContext.tsx
├── ├── 📁 data/
├── ├── ├── 📄 aboutData.ts
├── ├── ├── 📄 platformData.ts
├── ├── └── 📄 timelineData.ts
├── ├── 📁 hooks/
├── ├── └── 📄 useTypewriter.ts
├── ├── 📁 pages/
├── ├── ├── 📄 agent.tsx
├── ├── ├── 📄 community.tsx
├── ├── ├── 📄 courses.tsx
├── ├── ├── 📄 dashboard.tsx
├── ├── └── 📄 portfolio.tsx
├── ├── 📁 services/
├── ├── ├── 📄 agentService.ts
├── ├── ├── 📄 projectsData.ts
├── ├── ├── 📄 skillsData.ts
├── ├── └── 📄 terminalService.ts
├── ├── 📄 App.css
├── ├── 📄 App.tsx
├── ├── 📄 index.css
├── └── 📄 main.tsx
├── 📁 tmp/
├── └── 📄 yuriodev.co.uk
├── 📄 .dockerignore
├── 📄 .gitignore
├── 📄 DEPLOYMENT_GUIDE.md
├── 📄 Dockerfile
├── 📄 MIGRATION_COMPLETE.md
├── 📄 PROJECT_DOCUMENTATION.html
├── 📄 PROJECT_DOCUMENTATION.md
├── 📄 README.md
├── 📄 community.html
├── 📄 courses.html
├── 📄 dashboard.html
├── 📄 docker-compose.yml
├── 📄 eslint.config.js
├── 📄 generate_project_doc.py
├── 📄 index.html
├── 📄 nginx.conf
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 show_docs_tree.sh
├── 📄 tsconfig.app.json
├── 📄 tsconfig.app.tsbuildinfo
├── 📄 tsconfig.json
├── 📄 tsconfig.node.json
├── 📄 tsconfig.node.tsbuildinfo
├── 📄 vite.config.js
└── 📄 vite.config.ts
```

## Project Statistics

- **Total Scanned Files:** 90
- **Total Directories:** 38
- **Total Lines of Code:** 21,038

### Language Distribution

- **Tsx:** 34 files
- **Css:** 30 files
- **Typescript:** 9 files
- **Html:** 5 files
- **Json:** 5 files

### Largest Files

- `PROJECT_DOCUMENTATION.html`: 244.4 KB
- `package-lock.json`: 117.1 KB
- `PROJECT_DOCUMENTATION.md`: 55.2 KB
- `MIGRATION_COMPLETE.md`: 27.7 KB
- `src/components/sections/AboutSection/AboutSection.tsx`: 25.4 KB

### Recently Modified Files

- `PROJECT_DOCUMENTATION.html`: 2025-10-19 18:41:09
- `PROJECT_DOCUMENTATION.md`: 2025-10-19 18:41:09
- `tsconfig.node.json`: 2025-10-19 03:02:37
- `tsconfig.app.json`: 2025-10-19 03:02:37
- `vite.config.ts`: 2025-10-19 03:02:37
## README

```markdown
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

```

## Core Files

### PROJECT_DOCUMENTATION.html

```html

        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>yuriodev-portfolio - Project Documentation</title>
            <style>
                body {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                }
                h1, h2, h3, h4, h5, h6 {
                    margin-top: 24px;
                    margin-bottom: 16px;
                    font-weight: 600;
                    color: #0366d6;
                }
                h1 { font-size: 2em; padding-bottom: 10px; border-bottom: 1px solid #eaecef; }
                h2 { font-size: 1.5em; padding-bottom: 8px; border-bottom: 1px solid #eaecef; }
                h3 { font-size: 1.25em; }
                pre {
                    padding: 16px;
                    overflow: auto;
                    font-size: 85%;
                    line-height: 1.45;
                    background-color: #f6f8fa;
                    border-radius: 6px;
                }
                code {
                    padding: 0.2em 0.4em;
                    margin: 0;
                    font-size: 85%;
                    background-color: rgba(27, 31, 35, 0.05);
                    border-radius: 3px;
                }
                pre code {
                    padding: 0;
                    background-color: transparent;
                }
                blockquote {
                    padding: 0 1em;
                    color: #6a737d;
                    border-left: 0.25em solid #dfe2e5;
                }
                table {
                    border-collapse: collapse;
                    width: 100%;
                    margin-bottom: 16px;
                }
                table th, table td {
                    padding: 6px 13px;
                    border: 1px solid #dfe2e5;
                }
                table tr {
                    background-color: #fff;
                    border-top: 1px solid #c6cbd1;
                }
                table tr:nth-child(2n) {
                    background-color: #f6f8fa;
                }
                a {
                    color: #0366d6;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
                .timestamp {
                    color: #6a737d;
                    font-style: italic;
                }
            </style>
        </head>
        <body>
            <div id="content">
                <h1>yuriodev-portfolio - Project Documentation</h1>
<p>Generated on: 2025-10-19 18:41:09</p>
<h2>Project Overview</h2>
<p>yuriodev-portfolio is organized as follows. This documentation provides a comprehensive overview of the project structure, key modules, and implementation details.</p>
<h2>Project Structure</h2>
<div class="codehilite"><pre><span></span><code><span class="err">📁</span><span class="w"> </span><span class="n">yuriodev</span><span class="o">-</span><span class="n">portfolio</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">src</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">assets</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">styles</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">_variables</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">global</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">components</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">layout</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">Footer</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">Footer</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">Footer</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">Header</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">Header</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">Header</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">LeftSidebar</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">LeftSidebar</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">LeftSidebar</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">PageLayout</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">PageLayout</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">PageLayout</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">sections</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">AboutSection</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">AboutSection</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">AboutSection</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">AssistantFeaturesSection</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">AssistantFeaturesSection</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">AssistantFeaturesSection</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">AssistantTechSection</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">AssistantTechSection</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">AssistantTechSection</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">AssistantTerminalSection</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">AssistantTerminalSection</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">AssistantTerminalSection</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">ComingSoonSection</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">ComingSoonSection</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">ComingSoonSection</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">ConnectSection</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">ConnectSection</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">ConnectSection</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">HeroSection</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">HeroSection</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">HeroSection</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">PlaceholderPage</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">PlaceholderPage</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">PlaceholderPage</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">PlatformSection</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">PlatformSection</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">PlatformSection</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">ProjectsSection</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">ProjectsSection</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">ProjectsSection</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">SkillsSection</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">SkillsSection</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">SkillsSection</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">TimelineSection</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">TimelineItem</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">TimelineItem</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">TimelineSection</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">TimelineSection</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">ui</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">AgentTerminal</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">AgentTerminal</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">AgentTerminal</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">CanvasBackground</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">CanvasBackground</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">CanvasBackground</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">CommandPalette</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">CommandPalette</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">CommandPalette</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">HelpPanel</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">HelpPanel</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">HelpPanel</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">InteractiveTerminal</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">InteractiveTerminal</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">InteractiveTerminal</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">LoadingScreen</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">LoadingScreen</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">LoadingScreen</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">ProjectCard</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">ProjectCard</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">ProjectCard</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">ScrollToTop</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">ScrollToTop</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">ScrollToTop</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">SkillTerminal</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">SkillTerminal</span><span class="o">.</span><span class="n">module</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">SkillTerminal</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">context</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">ThemeContext</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">data</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">aboutData</span><span class="o">.</span><span class="n">ts</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">platformData</span><span class="o">.</span><span class="n">ts</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">timelineData</span><span class="o">.</span><span class="n">ts</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">hooks</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">useTypewriter</span><span class="o">.</span><span class="n">ts</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">pages</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">agent</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">community</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">courses</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">dashboard</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">portfolio</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">services</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">agentService</span><span class="o">.</span><span class="n">ts</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">projectsData</span><span class="o">.</span><span class="n">ts</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">skillsData</span><span class="o">.</span><span class="n">ts</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">terminalService</span><span class="o">.</span><span class="n">ts</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">App</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">App</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">index</span><span class="o">.</span><span class="n">css</span>
<span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">main</span><span class="o">.</span><span class="n">tsx</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📁</span><span class="w"> </span><span class="n">tmp</span><span class="o">/</span>
<span class="err">├──</span><span class="w"> </span><span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">yuriodev</span><span class="o">.</span><span class="n">co</span><span class="o">.</span><span class="n">uk</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="o">.</span><span class="n">dockerignore</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="o">.</span><span class="n">gitignore</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">DEPLOYMENT_GUIDE</span><span class="o">.</span><span class="n">md</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">Dockerfile</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">MIGRATION_COMPLETE</span><span class="o">.</span><span class="n">md</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">README</span><span class="o">.</span><span class="n">md</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">community</span><span class="o">.</span><span class="n">html</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">courses</span><span class="o">.</span><span class="n">html</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">dashboard</span><span class="o">.</span><span class="n">html</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">docker</span><span class="o">-</span><span class="n">compose</span><span class="o">.</span><span class="n">yml</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">eslint</span><span class="o">.</span><span class="n">config</span><span class="o">.</span><span class="n">js</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">generate_project_doc</span><span class="o">.</span><span class="n">py</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">index</span><span class="o">.</span><span class="n">html</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">nginx</span><span class="o">.</span><span class="n">conf</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">package</span><span class="o">-</span><span class="n">lock</span><span class="o">.</span><span class="n">json</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">package</span><span class="o">.</span><span class="n">json</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">show_docs_tree</span><span class="o">.</span><span class="n">sh</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">tsconfig</span><span class="o">.</span><span class="n">app</span><span class="o">.</span><span class="n">json</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">tsconfig</span><span class="o">.</span><span class="n">app</span><span class="o">.</span><span class="n">tsbuildinfo</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">tsconfig</span><span class="o">.</span><span class="n">json</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">tsconfig</span><span class="o">.</span><span class="n">node</span><span class="o">.</span><span class="n">json</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">tsconfig</span><span class="o">.</span><span class="n">node</span><span class="o">.</span><span class="n">tsbuildinfo</span>
<span class="err">├──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">vite</span><span class="o">.</span><span class="n">config</span><span class="o">.</span><span class="n">js</span>
<span class="err">└──</span><span class="w"> </span><span class="err">📄</span><span class="w"> </span><span class="n">vite</span><span class="o">.</span><span class="n">config</span><span class="o">.</span><span class="n">ts</span>
</code></pre></div>

<h2>Project Statistics</h2>
<ul>
<li><strong>Total Scanned Files:</strong> 88</li>
<li><strong>Total Directories:</strong> 38</li>
<li><strong>Total Lines of Code:</strong> 17,889</li>
</ul>
<h3>Language Distribution</h3>
<ul>
<li><strong>Tsx:</strong> 34 files</li>
<li><strong>Css:</strong> 30 files</li>
<li><strong>Typescript:</strong> 9 files</li>
<li><strong>Json:</strong> 5 files</li>
<li><strong>Html:</strong> 4 files</li>
</ul>
<h3>Largest Files</h3>
<ul>
<li><code>package-lock.json</code>: 117.1 KB</li>
<li><code>MIGRATION_COMPLETE.md</code>: 27.7 KB</li>
<li><code>src/components/sections/AboutSection/AboutSection.tsx</code>: 25.4 KB</li>
<li><code>src/components/sections/AboutSection/AboutSection.module.css</code>: 16.0 KB</li>
<li><code>src/components/sections/TimelineSection/TimelineItem.module.css</code>: 15.0 KB</li>
</ul>
<h3>Recently Modified Files</h3>
<ul>
<li><code>tsconfig.node.json</code>: 2025-10-19 03:02:37</li>
<li><code>tsconfig.app.json</code>: 2025-10-19 03:02:37</li>
<li><code>vite.config.ts</code>: 2025-10-19 03:02:37</li>
<li><code>src/services/skillsData.ts</code>: 2025-10-19 03:02:37</li>
<li><code>src/services/terminalService.ts</code>: 2025-10-19 03:02:37</li>
</ul>
<h2>README</h2>
<div class="codehilite"><pre><span></span><code><span class="gh"># React + TypeScript + Vite</span>

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

<span class="k">-</span><span class="w"> </span>[<span class="nt">@vitejs/plugin-react</span>](<span class="na">https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react</span>) uses [<span class="nt">Babel</span>](<span class="na">https://babeljs.io/</span>) (or [<span class="nt">oxc</span>](<span class="na">https://oxc.rs</span>) when used in [<span class="nt">rolldown-vite</span>](<span class="na">https://vite.dev/guide/rolldown</span>)) for Fast Refresh
<span class="k">-</span><span class="w"> </span>[<span class="nt">@vitejs/plugin-react-swc</span>](<span class="na">https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc</span>) uses [<span class="nt">SWC</span>](<span class="na">https://swc.rs/</span>) for Fast Refresh

<span class="gu">## React Compiler</span>

The React Compiler is not enabled on this template because of its impact on dev &amp; build performances. To add it, see [<span class="nt">this documentation</span>](<span class="na">https://react.dev/learn/react-compiler/installation</span>).

<span class="gu">## Expanding the ESLint configuration</span>

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores([&#39;dist&#39;]),
  {
    files: [&#39;**/*.{ts,tsx}&#39;],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: [&#39;./tsconfig.node.json&#39;, &#39;./tsconfig.app.json&#39;],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
</code></pre></div>

<p>You can also install <a href="https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x">eslint-plugin-react-x</a> and <a href="https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom">eslint-plugin-react-dom</a> for React-specific lint rules:</p>
<div class="codehilite"><pre><span></span><code><span class="c1">// eslint.config.js</span>
<span class="k">import</span><span class="w"> </span><span class="nx">reactX</span><span class="w"> </span><span class="kr">from</span><span class="w"> </span><span class="s1">&#39;eslint-plugin-react-x&#39;</span>
<span class="k">import</span><span class="w"> </span><span class="nx">reactDom</span><span class="w"> </span><span class="kr">from</span><span class="w"> </span><span class="s1">&#39;eslint-plugin-react-dom&#39;</span>

<span class="k">export</span><span class="w"> </span><span class="k">default</span><span class="w"> </span><span class="nx">defineConfig</span><span class="p">([</span>
<span class="w">  </span><span class="nx">globalIgnores</span><span class="p">([</span><span class="s1">&#39;dist&#39;</span><span class="p">]),</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">files</span><span class="o">:</span><span class="w"> </span><span class="p">[</span><span class="s1">&#39;**/*.{ts,tsx}&#39;</span><span class="p">],</span>
<span class="w">    </span><span class="k">extends</span><span class="o">:</span><span class="w"> </span><span class="p">[</span>
<span class="w">      </span><span class="c1">// Other configs...</span>
<span class="w">      </span><span class="c1">// Enable lint rules for React</span>
<span class="w">      </span><span class="nx">reactX</span><span class="p">.</span><span class="nx">configs</span><span class="p">[</span><span class="s1">&#39;recommended-typescript&#39;</span><span class="p">],</span>
<span class="w">      </span><span class="c1">// Enable lint rules for React DOM</span>
<span class="w">      </span><span class="nx">reactDom</span><span class="p">.</span><span class="nx">configs</span><span class="p">.</span><span class="nx">recommended</span><span class="p">,</span>
<span class="w">    </span><span class="p">],</span>
<span class="w">    </span><span class="nx">languageOptions</span><span class="o">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">      </span><span class="nx">parserOptions</span><span class="o">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">        </span><span class="nx">project</span><span class="o">:</span><span class="w"> </span><span class="p">[</span><span class="s1">&#39;./tsconfig.node.json&#39;</span><span class="p">,</span><span class="w"> </span><span class="s1">&#39;./tsconfig.app.json&#39;</span><span class="p">],</span>
<span class="w">        </span><span class="nx">tsconfigRootDir</span><span class="o">:</span><span class="w"> </span><span class="k">import</span><span class="p">.</span><span class="nx">meta</span><span class="p">.</span><span class="nx">dirname</span><span class="p">,</span>
<span class="w">      </span><span class="p">},</span>
<span class="w">      </span><span class="c1">// other options...</span>
<span class="w">    </span><span class="p">},</span>
<span class="w">  </span><span class="p">},</span>
<span class="p">])</span>
</code></pre></div>

<div class="codehilite"><pre><span></span><code><span class="cp">## Core Files</span>

<span class="cp">### README.md</span>

<span class="err">```</span><span class="n">markdown</span>
<span class="cp"># React + TypeScript + Vite</span>

<span class="n">This</span><span class="w"> </span><span class="n">template</span><span class="w"> </span><span class="n">provides</span><span class="w"> </span><span class="n">a</span><span class="w"> </span><span class="n">minimal</span><span class="w"> </span><span class="n">setup</span><span class="w"> </span><span class="n">to</span><span class="w"> </span><span class="n">get</span><span class="w"> </span><span class="n">React</span><span class="w"> </span><span class="n">working</span><span class="w"> </span><span class="k">in</span><span class="w"> </span><span class="n">Vite</span><span class="w"> </span><span class="n">with</span><span class="w"> </span><span class="n">HMR</span><span class="w"> </span><span class="n">and</span><span class="w"> </span><span class="n">some</span><span class="w"> </span><span class="n">ESLint</span><span class="w"> </span><span class="n">rules</span><span class="p">.</span>

<span class="n">Currently</span><span class="p">,</span><span class="w"> </span><span class="n">two</span><span class="w"> </span><span class="n">official</span><span class="w"> </span><span class="n">plugins</span><span class="w"> </span><span class="n">are</span><span class="w"> </span><span class="n">available</span><span class="o">:</span>

<span class="o">-</span><span class="w"> </span><span class="p">[@</span><span class="n">vitejs</span><span class="o">/</span><span class="n">plugin</span><span class="o">-</span><span class="n">react</span><span class="p">](</span><span class="n">https</span><span class="o">:</span><span class="c1">//github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh</span>
<span class="o">-</span><span class="w"> </span><span class="p">[@</span><span class="n">vitejs</span><span class="o">/</span><span class="n">plugin</span><span class="o">-</span><span class="n">react</span><span class="o">-</span><span class="n">swc</span><span class="p">](</span><span class="n">https</span><span class="o">:</span><span class="c1">//github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh</span>

<span class="cp">## React Compiler</span>

<span class="n">The</span><span class="w"> </span><span class="n">React</span><span class="w"> </span><span class="n">Compiler</span><span class="w"> </span><span class="n">is</span><span class="w"> </span><span class="n">not</span><span class="w"> </span><span class="n">enabled</span><span class="w"> </span><span class="n">on</span><span class="w"> </span><span class="n">this</span><span class="w"> </span><span class="n">template</span><span class="w"> </span><span class="n">because</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">its</span><span class="w"> </span><span class="n">impact</span><span class="w"> </span><span class="n">on</span><span class="w"> </span><span class="n">dev</span><span class="w"> </span><span class="o">&amp;</span><span class="w"> </span><span class="n">build</span><span class="w"> </span><span class="n">performances</span><span class="p">.</span><span class="w"> </span><span class="n">To</span><span class="w"> </span><span class="n">add</span><span class="w"> </span><span class="n">it</span><span class="p">,</span><span class="w"> </span><span class="n">see</span><span class="w"> </span><span class="p">[</span><span class="n">this</span><span class="w"> </span><span class="n">documentation</span><span class="p">](</span><span class="n">https</span><span class="o">:</span><span class="c1">//react.dev/learn/react-compiler/installation).</span>

<span class="cp">## Expanding the ESLint configuration</span>

<span class="n">If</span><span class="w"> </span><span class="n">you</span><span class="w"> </span><span class="n">are</span><span class="w"> </span><span class="n">developing</span><span class="w"> </span><span class="n">a</span><span class="w"> </span><span class="n">production</span><span class="w"> </span><span class="n">application</span><span class="p">,</span><span class="w"> </span><span class="n">we</span><span class="w"> </span><span class="n">recommend</span><span class="w"> </span><span class="n">updating</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">configuration</span><span class="w"> </span><span class="n">to</span><span class="w"> </span><span class="n">enable</span><span class="w"> </span><span class="n">type</span><span class="o">-</span><span class="n">aware</span><span class="w"> </span><span class="n">lint</span><span class="w"> </span><span class="n">rules</span><span class="o">:</span>

<span class="err">```</span><span class="n">js</span>
<span class="n">export</span><span class="w"> </span><span class="k">default</span><span class="w"> </span><span class="n">defineConfig</span><span class="p">([</span>
<span class="w">  </span><span class="n">globalIgnores</span><span class="p">([</span><span class="err">&#39;</span><span class="n">dist</span><span class="err">&#39;</span><span class="p">]),</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nl">files</span><span class="p">:</span><span class="w"> </span><span class="p">[</span><span class="err">&#39;</span><span class="o">**</span><span class="cm">/*.{ts,tsx}&#39;],</span>
<span class="cm">    extends: [</span>
<span class="cm">      // Other configs...</span>

<span class="cm">      // Remove tseslint.configs.recommended and replace with this</span>
<span class="cm">      tseslint.configs.recommendedTypeChecked,</span>
<span class="cm">      // Alternatively, use this for stricter rules</span>
<span class="cm">      tseslint.configs.strictTypeChecked,</span>
<span class="cm">      // Optionally, add this for stylistic rules</span>
<span class="cm">      tseslint.configs.stylisticTypeChecked,</span>

<span class="cm">      // Other configs...</span>
<span class="cm">    ],</span>
<span class="cm">    languageOptions: {</span>
<span class="cm">      parserOptions: {</span>
<span class="cm">        project: [&#39;./tsconfig.node.json&#39;, &#39;./tsconfig.app.json&#39;],</span>
<span class="cm">        tsconfigRootDir: import.meta.dirname,</span>
<span class="cm">      },</span>
<span class="cm">      // other options...</span>
<span class="cm">    },</span>
<span class="cm">  },</span>
<span class="cm">])</span>
</code></pre></div>

<p>You can also install <a href="https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x">eslint-plugin-react-x</a> and <a href="https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom">eslint-plugin-react-dom</a> for React-specific lint rules:</p>
<div class="codehilite"><pre><span></span><code><span class="c1">// eslint.config.js</span>
<span class="k">import</span><span class="w"> </span><span class="nx">reactX</span><span class="w"> </span><span class="kr">from</span><span class="w"> </span><span class="s1">&#39;eslint-plugin-react-x&#39;</span>
<span class="k">import</span><span class="w"> </span><span class="nx">reactDom</span><span class="w"> </span><span class="kr">from</span><span class="w"> </span><span class="s1">&#39;eslint-plugin-react-dom&#39;</span>

<span class="k">export</span><span class="w"> </span><span class="k">default</span><span class="w"> </span><span class="nx">defineConfig</span><span class="p">([</span>
<span class="w">  </span><span class="nx">globalIgnores</span><span class="p">([</span><span class="s1">&#39;dist&#39;</span><span class="p">]),</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">files</span><span class="o">:</span><span class="w"> </span><span class="p">[</span><span class="s1">&#39;**/*.{ts,tsx}&#39;</span><span class="p">],</span>
<span class="w">    </span><span class="k">extends</span><span class="o">:</span><span class="w"> </span><span class="p">[</span>
<span class="w">      </span><span class="c1">// Other configs...</span>
<span class="w">      </span><span class="c1">// Enable lint rules for React</span>
<span class="w">      </span><span class="nx">reactX</span><span class="p">.</span><span class="nx">configs</span><span class="p">[</span><span class="s1">&#39;recommended-typescript&#39;</span><span class="p">],</span>
<span class="w">      </span><span class="c1">// Enable lint rules for React DOM</span>
<span class="w">      </span><span class="nx">reactDom</span><span class="p">.</span><span class="nx">configs</span><span class="p">.</span><span class="nx">recommended</span><span class="p">,</span>
<span class="w">    </span><span class="p">],</span>
<span class="w">    </span><span class="nx">languageOptions</span><span class="o">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">      </span><span class="nx">parserOptions</span><span class="o">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">        </span><span class="nx">project</span><span class="o">:</span><span class="w"> </span><span class="p">[</span><span class="s1">&#39;./tsconfig.node.json&#39;</span><span class="p">,</span><span class="w"> </span><span class="s1">&#39;./tsconfig.app.json&#39;</span><span class="p">],</span>
<span class="w">        </span><span class="nx">tsconfigRootDir</span><span class="o">:</span><span class="w"> </span><span class="k">import</span><span class="p">.</span><span class="nx">meta</span><span class="p">.</span><span class="nx">dirname</span><span class="p">,</span>
<span class="w">      </span><span class="p">},</span>
<span class="w">      </span><span class="c1">// other options...</span>
<span class="w">    </span><span class="p">},</span>
<span class="w">  </span><span class="p">},</span>
<span class="p">])</span>
</code></pre></div>

<div class="codehilite"><pre><span></span><code>### community.html

```html
<span class="cp">&lt;!DOCTYPE html&gt;</span>
<span class="p">&lt;</span><span class="nt">html</span> <span class="na">lang</span><span class="o">=</span><span class="s">&quot;en&quot;</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">head</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">meta</span> <span class="na">charset</span><span class="o">=</span><span class="s">&quot;UTF-8&quot;</span> <span class="p">/&gt;</span>
    <span class="p">&lt;</span><span class="nt">link</span> <span class="na">rel</span><span class="o">=</span><span class="s">&quot;icon&quot;</span> <span class="na">type</span><span class="o">=</span><span class="s">&quot;image/svg+xml&quot;</span> <span class="na">href</span><span class="o">=</span><span class="s">&quot;/vite.svg&quot;</span> <span class="p">/&gt;</span>
    <span class="p">&lt;</span><span class="nt">meta</span> <span class="na">name</span><span class="o">=</span><span class="s">&quot;viewport&quot;</span> <span class="na">content</span><span class="o">=</span><span class="s">&quot;width=device-width, initial-scale=1.0&quot;</span> <span class="p">/&gt;</span>
    <span class="p">&lt;</span><span class="nt">title</span><span class="p">&gt;</span>Community - YuriODev (Coming Soon)<span class="p">&lt;/</span><span class="nt">title</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">head</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">body</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">id</span><span class="o">=</span><span class="s">&quot;root&quot;</span><span class="p">&gt;&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">script</span> <span class="na">type</span><span class="o">=</span><span class="s">&quot;module&quot;</span> <span class="na">src</span><span class="o">=</span><span class="s">&quot;/src/pages/community.tsx&quot;</span><span class="p">&gt;&lt;/</span><span class="nt">script</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">body</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">html</span><span class="p">&gt;</span>
</code></pre></div>

<h3>courses.html</h3>
<div class="codehilite"><pre><span></span><code><span class="cp">&lt;!DOCTYPE html&gt;</span>
<span class="p">&lt;</span><span class="nt">html</span> <span class="na">lang</span><span class="o">=</span><span class="s">&quot;en&quot;</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">head</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">meta</span> <span class="na">charset</span><span class="o">=</span><span class="s">&quot;UTF-8&quot;</span> <span class="p">/&gt;</span>
    <span class="p">&lt;</span><span class="nt">link</span> <span class="na">rel</span><span class="o">=</span><span class="s">&quot;icon&quot;</span> <span class="na">type</span><span class="o">=</span><span class="s">&quot;image/svg+xml&quot;</span> <span class="na">href</span><span class="o">=</span><span class="s">&quot;/vite.svg&quot;</span> <span class="p">/&gt;</span>
    <span class="p">&lt;</span><span class="nt">meta</span> <span class="na">name</span><span class="o">=</span><span class="s">&quot;viewport&quot;</span> <span class="na">content</span><span class="o">=</span><span class="s">&quot;width=device-width, initial-scale=1.0&quot;</span> <span class="p">/&gt;</span>
    <span class="p">&lt;</span><span class="nt">title</span><span class="p">&gt;</span>Courses - YuriODev (Coming Soon)<span class="p">&lt;/</span><span class="nt">title</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">head</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">body</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">id</span><span class="o">=</span><span class="s">&quot;root&quot;</span><span class="p">&gt;&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">script</span> <span class="na">type</span><span class="o">=</span><span class="s">&quot;module&quot;</span> <span class="na">src</span><span class="o">=</span><span class="s">&quot;/src/pages/courses.tsx&quot;</span><span class="p">&gt;&lt;/</span><span class="nt">script</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">body</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">html</span><span class="p">&gt;</span>
</code></pre></div>

<h3>dashboard.html</h3>
<div class="codehilite"><pre><span></span><code><span class="cp">&lt;!DOCTYPE html&gt;</span>
<span class="p">&lt;</span><span class="nt">html</span> <span class="na">lang</span><span class="o">=</span><span class="s">&quot;en&quot;</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">head</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">meta</span> <span class="na">charset</span><span class="o">=</span><span class="s">&quot;UTF-8&quot;</span> <span class="p">/&gt;</span>
    <span class="p">&lt;</span><span class="nt">link</span> <span class="na">rel</span><span class="o">=</span><span class="s">&quot;icon&quot;</span> <span class="na">type</span><span class="o">=</span><span class="s">&quot;image/svg+xml&quot;</span> <span class="na">href</span><span class="o">=</span><span class="s">&quot;/vite.svg&quot;</span> <span class="p">/&gt;</span>
    <span class="p">&lt;</span><span class="nt">meta</span> <span class="na">name</span><span class="o">=</span><span class="s">&quot;viewport&quot;</span> <span class="na">content</span><span class="o">=</span><span class="s">&quot;width=device-width, initial-scale=1.0&quot;</span> <span class="p">/&gt;</span>
    <span class="p">&lt;</span><span class="nt">title</span><span class="p">&gt;</span>Dashboard - YuriODev (Coming Soon)<span class="p">&lt;/</span><span class="nt">title</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">head</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">body</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">id</span><span class="o">=</span><span class="s">&quot;root&quot;</span><span class="p">&gt;&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">script</span> <span class="na">type</span><span class="o">=</span><span class="s">&quot;module&quot;</span> <span class="na">src</span><span class="o">=</span><span class="s">&quot;/src/pages/dashboard.tsx&quot;</span><span class="p">&gt;&lt;/</span><span class="nt">script</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">body</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">html</span><span class="p">&gt;</span>
</code></pre></div>

<h3>eslint.config.js</h3>
<div class="codehilite"><pre><span></span><code><span class="k">import</span><span class="w"> </span><span class="nx">js</span><span class="w"> </span><span class="kr">from</span><span class="w"> </span><span class="s1">&#39;@eslint/js&#39;</span>
<span class="k">import</span><span class="w"> </span><span class="nx">globals</span><span class="w"> </span><span class="kr">from</span><span class="w"> </span><span class="s1">&#39;globals&#39;</span>
<span class="k">import</span><span class="w"> </span><span class="nx">reactHooks</span><span class="w"> </span><span class="kr">from</span><span class="w"> </span><span class="s1">&#39;eslint-plugin-react-hooks&#39;</span>
<span class="k">import</span><span class="w"> </span><span class="nx">reactRefresh</span><span class="w"> </span><span class="kr">from</span><span class="w"> </span><span class="s1">&#39;eslint-plugin-react-refresh&#39;</span>
<span class="k">import</span><span class="w"> </span><span class="nx">tseslint</span><span class="w"> </span><span class="kr">from</span><span class="w"> </span><span class="s1">&#39;typescript-eslint&#39;</span>
<span class="k">import</span><span class="w"> </span><span class="p">{</span><span class="w"> </span><span class="nx">defineConfig</span><span class="p">,</span><span class="w"> </span><span class="nx">globalIgnores</span><span class="w"> </span><span class="p">}</span><span class="w"> </span><span class="kr">from</span><span class="w"> </span><span class="s1">&#39;eslint/config&#39;</span>

<span class="k">export</span><span class="w"> </span><span class="k">default</span><span class="w"> </span><span class="nx">defineConfig</span><span class="p">([</span>
<span class="w">  </span><span class="nx">globalIgnores</span><span class="p">([</span><span class="s1">&#39;dist&#39;</span><span class="p">]),</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">files</span><span class="o">:</span><span class="w"> </span><span class="p">[</span><span class="s1">&#39;**/*.{ts,tsx}&#39;</span><span class="p">],</span>
<span class="w">    </span><span class="k">extends</span><span class="o">:</span><span class="w"> </span><span class="p">[</span>
<span class="w">      </span><span class="nx">js</span><span class="p">.</span><span class="nx">configs</span><span class="p">.</span><span class="nx">recommended</span><span class="p">,</span>
<span class="w">      </span><span class="nx">tseslint</span><span class="p">.</span><span class="nx">configs</span><span class="p">.</span><span class="nx">recommended</span><span class="p">,</span>
<span class="w">      </span><span class="nx">reactHooks</span><span class="p">.</span><span class="nx">configs</span><span class="p">[</span><span class="s1">&#39;recommended-latest&#39;</span><span class="p">],</span>
<span class="w">      </span><span class="nx">reactRefresh</span><span class="p">.</span><span class="nx">configs</span><span class="p">.</span><span class="nx">vite</span><span class="p">,</span>
<span class="w">    </span><span class="p">],</span>
<span class="w">    </span><span class="nx">languageOptions</span><span class="o">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">      </span><span class="nx">ecmaVersion</span><span class="o">:</span><span class="w"> </span><span class="mf">2020</span><span class="p">,</span>
<span class="w">      </span><span class="nx">globals</span><span class="o">:</span><span class="w"> </span><span class="nx">globals</span><span class="p">.</span><span class="nx">browser</span><span class="p">,</span>
<span class="w">    </span><span class="p">},</span>
<span class="w">  </span><span class="p">},</span>
<span class="p">])</span>
</code></pre></div>

<h3>index.html</h3>
<div class="codehilite"><pre><span></span><code><span class="cp">&lt;!doctype html&gt;</span>
<span class="p">&lt;</span><span class="nt">html</span> <span class="na">lang</span><span class="o">=</span><span class="s">&quot;en&quot;</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">head</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">meta</span> <span class="na">charset</span><span class="o">=</span><span class="s">&quot;UTF-8&quot;</span> <span class="p">/&gt;</span>
    <span class="p">&lt;</span><span class="nt">link</span> <span class="na">rel</span><span class="o">=</span><span class="s">&quot;icon&quot;</span> <span class="na">type</span><span class="o">=</span><span class="s">&quot;image/svg+xml&quot;</span> <span class="na">href</span><span class="o">=</span><span class="s">&quot;/vite.svg&quot;</span> <span class="p">/&gt;</span>
    <span class="p">&lt;</span><span class="nt">meta</span> <span class="na">name</span><span class="o">=</span><span class="s">&quot;viewport&quot;</span> <span class="na">content</span><span class="o">=</span><span class="s">&quot;width=device-width, initial-scale=1.0&quot;</span> <span class="p">/&gt;</span>
    <span class="p">&lt;</span><span class="nt">title</span><span class="p">&gt;</span>yuriodev-portfolio<span class="p">&lt;/</span><span class="nt">title</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">head</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">body</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">id</span><span class="o">=</span><span class="s">&quot;root&quot;</span><span class="p">&gt;&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">script</span> <span class="na">type</span><span class="o">=</span><span class="s">&quot;module&quot;</span> <span class="na">src</span><span class="o">=</span><span class="s">&quot;/src/main.tsx&quot;</span><span class="p">&gt;&lt;/</span><span class="nt">script</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">body</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">html</span><span class="p">&gt;</span>
</code></pre></div>

<h3>package.json</h3>
<div class="codehilite"><pre><span></span><code><span class="p">{</span>
<span class="w">  </span><span class="nt">&quot;name&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;yuriodev-portfolio&quot;</span><span class="p">,</span>
<span class="w">  </span><span class="nt">&quot;private&quot;</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="p">,</span>
<span class="w">  </span><span class="nt">&quot;version&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;0.0.0&quot;</span><span class="p">,</span>
<span class="w">  </span><span class="nt">&quot;type&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;module&quot;</span><span class="p">,</span>
<span class="w">  </span><span class="nt">&quot;scripts&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="nt">&quot;dev&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;vite&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;build&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;tsc -b &amp;&amp; vite build&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;lint&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;eslint .&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;preview&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;vite preview&quot;</span>
<span class="w">  </span><span class="p">},</span>
<span class="w">  </span><span class="nt">&quot;dependencies&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="nt">&quot;react&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;^19.1.1&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;react-dom&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;^19.1.1&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;react-router-dom&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;^7.9.4&quot;</span>
<span class="w">  </span><span class="p">},</span>
<span class="w">  </span><span class="nt">&quot;devDependencies&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="nt">&quot;@eslint/js&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;^9.36.0&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;@types/node&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;^24.6.0&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;@types/react&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;^19.1.16&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;@types/react-dom&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;^19.1.9&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;@vitejs/plugin-react&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;^5.0.4&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;eslint&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;^9.36.0&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;eslint-plugin-react-hooks&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;^5.2.0&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;eslint-plugin-react-refresh&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;^0.4.22&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;globals&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;^16.4.0&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;typescript&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;~5.9.3&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;typescript-eslint&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;^8.45.0&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nt">&quot;vite&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;^7.1.7&quot;</span>
<span class="w">  </span><span class="p">}</span>
<span class="p">}</span>
</code></pre></div>

<h3>src/App.css</h3>
<div class="codehilite"><pre><span></span><code><span class="c">/* App Layout */</span>
<span class="p">#</span><span class="nn">root</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="k">display</span><span class="p">:</span><span class="w"> </span><span class="kc">flex</span><span class="p">;</span>
<span class="w">  </span><span class="k">flex-direction</span><span class="p">:</span><span class="w"> </span><span class="kc">column</span><span class="p">;</span>
<span class="w">  </span><span class="k">min-height</span><span class="p">:</span><span class="w"> </span><span class="mi">100</span><span class="kt">vh</span><span class="p">;</span>
<span class="p">}</span>

<span class="nt">main</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="k">flex</span><span class="p">:</span><span class="w"> </span><span class="mi">1</span><span class="p">;</span>
<span class="w">  </span><span class="k">padding-bottom</span><span class="p">:</span><span class="w"> </span><span class="mi">2</span><span class="kt">rem</span><span class="p">;</span>
<span class="p">}</span>

<span class="c">/* Sections take full width, content wrappers handle constraints */</span>
<span class="nt">main</span><span class="w"> </span><span class="nt">section</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="k">max-width</span><span class="p">:</span><span class="w"> </span><span class="mi">100</span><span class="kt">%</span><span class="p">;</span>
<span class="w">  </span><span class="k">margin-left</span><span class="p">:</span><span class="w"> </span><span class="kc">auto</span><span class="p">;</span>
<span class="w">  </span><span class="k">margin-right</span><span class="p">:</span><span class="w"> </span><span class="kc">auto</span><span class="p">;</span>
<span class="p">}</span>
</code></pre></div>

<h3>src/App.tsx</h3>
<div class="codehilite"><pre><span></span><code><span class="kn">import</span> <span class="p">{</span> <span class="n">BrowserRouter</span> <span class="k">as</span> <span class="n">Router</span><span class="p">,</span> <span class="n">Routes</span><span class="p">,</span> <span class="n">Route</span><span class="p">,</span> <span class="n">useLocation</span><span class="p">,</span> <span class="n">Navigate</span> <span class="p">}</span> <span class="kn">from</span> <span class="s1">&#39;react-router-dom&#39;</span><span class="p">;</span>
<span class="kn">import</span> <span class="p">{</span> <span class="n">useState</span><span class="p">,</span> <span class="n">useEffect</span> <span class="p">}</span> <span class="kn">from</span> <span class="s1">&#39;react&#39;</span><span class="p">;</span>
<span class="kn">import</span> <span class="nn">PageLayout</span> <span class="kn">from</span> <span class="s1">&#39;./components/layout/PageLayout/PageLayout&#39;</span><span class="p">;</span>
<span class="kn">import</span> <span class="nn">LoadingScreen</span> <span class="kn">from</span> <span class="s1">&#39;./components/ui/LoadingScreen/LoadingScreen&#39;</span><span class="p">;</span>
<span class="kn">import</span> <span class="nn">Portfolio</span> <span class="kn">from</span> <span class="s1">&#39;./pages/portfolio&#39;</span><span class="p">;</span>
<span class="kn">import</span> <span class="nn">Community</span> <span class="kn">from</span> <span class="s1">&#39;./pages/community&#39;</span><span class="p">;</span>
<span class="kn">import</span> <span class="nn">Courses</span> <span class="kn">from</span> <span class="s1">&#39;./pages/courses&#39;</span><span class="p">;</span>
<span class="kn">import</span> <span class="nn">Dashboard</span> <span class="kn">from</span> <span class="s1">&#39;./pages/dashboard&#39;</span><span class="p">;</span>
<span class="kn">import</span> <span class="nn">Agent</span> <span class="kn">from</span> <span class="s1">&#39;./pages/agent&#39;</span><span class="p">;</span>
<span class="kn">import</span> <span class="s1">&#39;./App.css&#39;</span><span class="p">;</span>

<span class="n">function</span> <span class="n">AppContent</span><span class="p">()</span> <span class="p">{</span>
  <span class="n">const</span> <span class="n">location</span> <span class="o">=</span> <span class="n">useLocation</span><span class="p">();</span>
  <span class="n">const</span> <span class="p">[</span><span class="n">isInitialLoad</span><span class="p">,</span> <span class="n">setIsInitialLoad</span><span class="p">]</span> <span class="o">=</span> <span class="n">useState</span><span class="p">(</span><span class="n">true</span><span class="p">);</span>
  <span class="n">const</span> <span class="p">[</span><span class="n">loadingComplete</span><span class="p">,</span> <span class="n">setLoadingComplete</span><span class="p">]</span> <span class="o">=</span> <span class="n">useState</span><span class="p">(</span><span class="n">false</span><span class="p">);</span>

  <span class="n">useEffect</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="p">{</span>
    <span class="o">//</span> <span class="n">Check</span> <span class="k">if</span> <span class="n">app</span> <span class="n">has</span> <span class="n">been</span> <span class="n">loaded</span> <span class="n">before</span> <span class="ow">in</span> <span class="n">this</span> <span class="n">session</span>
    <span class="n">const</span> <span class="n">hasLoaded</span> <span class="o">=</span> <span class="n">sessionStorage</span><span class="o">.</span><span class="n">getItem</span><span class="p">(</span><span class="s1">&#39;appLoaded&#39;</span><span class="p">);</span>

    <span class="k">if</span> <span class="p">(</span><span class="n">hasLoaded</span> <span class="o">===</span> <span class="s1">&#39;true&#39;</span><span class="p">)</span> <span class="p">{</span>
      <span class="o">//</span> <span class="n">Skip</span> <span class="n">loading</span> <span class="n">screen</span> <span class="k">if</span> <span class="n">already</span> <span class="n">shown</span> <span class="n">this</span> <span class="n">session</span>
      <span class="n">setIsInitialLoad</span><span class="p">(</span><span class="n">false</span><span class="p">);</span>
      <span class="n">setLoadingComplete</span><span class="p">(</span><span class="n">true</span><span class="p">);</span>
      <span class="n">document</span><span class="o">.</span><span class="n">body</span><span class="o">.</span><span class="n">style</span><span class="o">.</span><span class="n">overflow</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span> <span class="o">//</span> <span class="n">Ensure</span> <span class="n">scroll</span> <span class="ow">is</span> <span class="n">enabled</span>
    <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
      <span class="o">//</span> <span class="n">First</span> <span class="n">visit</span> <span class="n">this</span> <span class="n">session</span> <span class="o">-</span> <span class="n">show</span> <span class="n">loading</span> <span class="n">screen</span>
      <span class="n">setIsInitialLoad</span><span class="p">(</span><span class="n">true</span><span class="p">);</span>
      <span class="n">setLoadingComplete</span><span class="p">(</span><span class="n">false</span><span class="p">);</span>
      <span class="n">document</span><span class="o">.</span><span class="n">body</span><span class="o">.</span><span class="n">style</span><span class="o">.</span><span class="n">overflow</span> <span class="o">=</span> <span class="s1">&#39;hidden&#39;</span><span class="p">;</span> <span class="o">//</span> <span class="n">Prevent</span> <span class="n">scrolling</span> <span class="n">during</span> <span class="n">load</span>
    <span class="p">}</span>
  <span class="p">},</span> <span class="p">[]);</span>

  <span class="n">const</span> <span class="n">handleLoadingComplete</span> <span class="o">=</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>
    <span class="o">//</span> <span class="n">Mark</span> <span class="k">as</span> <span class="n">loaded</span> <span class="ow">in</span> <span class="n">sessionStorage</span>
    <span class="n">sessionStorage</span><span class="o">.</span><span class="n">setItem</span><span class="p">(</span><span class="s1">&#39;appLoaded&#39;</span><span class="p">,</span> <span class="s1">&#39;true&#39;</span><span class="p">);</span>
    <span class="n">setLoadingComplete</span><span class="p">(</span><span class="n">true</span><span class="p">);</span>
    <span class="n">setIsInitialLoad</span><span class="p">(</span><span class="n">false</span><span class="p">);</span>

    <span class="o">//</span> <span class="n">Re</span><span class="o">-</span><span class="n">enable</span> <span class="n">scrolling</span>
    <span class="n">document</span><span class="o">.</span><span class="n">body</span><span class="o">.</span><span class="n">style</span><span class="o">.</span><span class="n">overflow</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span>

    <span class="o">//</span> <span class="n">Console</span> <span class="n">message</span>
    <span class="n">console</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="s1">&#39;</span><span class="si">%c</span><span class="s1">$ ./initialize_yuriodev --status=complete&#39;</span><span class="p">,</span> <span class="s1">&#39;color: #FFC107; font-family: &quot;Fira Code&quot;, monospace; font-weight: 600;&#39;</span><span class="p">);</span>
    <span class="n">console</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="s1">&#39;</span><span class="si">%c</span><span class="s1">✓ Portfolio loaded successfully&#39;</span><span class="p">,</span> <span class="s1">&#39;color: #00ff88; font-family: &quot;Fira Code&quot;, monospace;&#39;</span><span class="p">);</span>
  <span class="p">};</span>

  <span class="o">//</span> <span class="n">Show</span> <span class="n">ONLY</span> <span class="n">loading</span> <span class="n">screen</span> <span class="n">without</span> <span class="nb">any</span> <span class="n">layout</span> <span class="n">wrapper</span>
  <span class="k">if</span> <span class="p">(</span><span class="n">isInitialLoad</span> <span class="o">&amp;&amp;</span> <span class="err">!</span><span class="n">loadingComplete</span><span class="p">)</span> <span class="p">{</span>
    <span class="k">return</span> <span class="o">&lt;</span><span class="n">LoadingScreen</span> <span class="n">onComplete</span><span class="o">=</span><span class="p">{</span><span class="n">handleLoadingComplete</span><span class="p">}</span> <span class="o">/&gt;</span><span class="p">;</span>
  <span class="p">}</span>

  <span class="k">return</span> <span class="p">(</span>
    <span class="o">&lt;</span><span class="n">PageLayout</span> <span class="n">currentPath</span><span class="o">=</span><span class="p">{</span><span class="n">location</span><span class="o">.</span><span class="n">pathname</span><span class="p">}</span><span class="o">&gt;</span>
      <span class="o">&lt;</span><span class="n">Routes</span><span class="o">&gt;</span>
        <span class="o">&lt;</span><span class="n">Route</span> <span class="n">path</span><span class="o">=</span><span class="s2">&quot;/&quot;</span> <span class="n">element</span><span class="o">=</span><span class="p">{</span><span class="o">&lt;</span><span class="n">Portfolio</span> <span class="o">/&gt;</span><span class="p">}</span> <span class="o">/&gt;</span>
        <span class="o">&lt;</span><span class="n">Route</span> <span class="n">path</span><span class="o">=</span><span class="s2">&quot;/home&quot;</span> <span class="n">element</span><span class="o">=</span><span class="p">{</span><span class="o">&lt;</span><span class="n">Navigate</span> <span class="n">to</span><span class="o">=</span><span class="s2">&quot;/&quot;</span> <span class="n">replace</span> <span class="o">/&gt;</span><span class="p">}</span> <span class="o">/&gt;</span>
        <span class="o">&lt;</span><span class="n">Route</span> <span class="n">path</span><span class="o">=</span><span class="s2">&quot;/community&quot;</span> <span class="n">element</span><span class="o">=</span><span class="p">{</span><span class="o">&lt;</span><span class="n">Community</span> <span class="o">/&gt;</span><span class="p">}</span> <span class="o">/&gt;</span>
        <span class="o">&lt;</span><span class="n">Route</span> <span class="n">path</span><span class="o">=</span><span class="s2">&quot;/courses&quot;</span> <span class="n">element</span><span class="o">=</span><span class="p">{</span><span class="o">&lt;</span><span class="n">Courses</span> <span class="o">/&gt;</span><span class="p">}</span> <span class="o">/&gt;</span>
        <span class="o">&lt;</span><span class="n">Route</span> <span class="n">path</span><span class="o">=</span><span class="s2">&quot;/dashboard&quot;</span> <span class="n">element</span><span class="o">=</span><span class="p">{</span><span class="o">&lt;</span><span class="n">Dashboard</span> <span class="o">/&gt;</span><span class="p">}</span> <span class="o">/&gt;</span>
        <span class="o">&lt;</span><span class="n">Route</span> <span class="n">path</span><span class="o">=</span><span class="s2">&quot;/assistant&quot;</span> <span class="n">element</span><span class="o">=</span><span class="p">{</span><span class="o">&lt;</span><span class="n">Agent</span> <span class="o">/&gt;</span><span class="p">}</span> <span class="o">/&gt;</span>
      <span class="o">&lt;/</span><span class="n">Routes</span><span class="o">&gt;</span>
    <span class="o">&lt;/</span><span class="n">PageLayout</span><span class="o">&gt;</span>
  <span class="p">);</span>
<span class="p">}</span>

<span class="n">function</span> <span class="n">App</span><span class="p">()</span> <span class="p">{</span>
  <span class="k">return</span> <span class="p">(</span>
    <span class="o">&lt;</span><span class="n">Router</span><span class="o">&gt;</span>
      <span class="o">&lt;</span><span class="n">AppContent</span> <span class="o">/&gt;</span>
    <span class="o">&lt;/</span><span class="n">Router</span><span class="o">&gt;</span>
  <span class="p">);</span>
<span class="p">}</span>

<span class="n">export</span> <span class="n">default</span> <span class="n">App</span>
</code></pre></div>

<h3>src/context/ThemeContext.tsx</h3>
<div class="codehilite"><pre><span></span><code><span class="kn">import</span> <span class="nn">React</span><span class="o">,</span> <span class="p">{</span> <span class="n">createContext</span><span class="p">,</span> <span class="n">useContext</span><span class="p">,</span> <span class="n">useEffect</span><span class="p">,</span> <span class="n">useState</span> <span class="p">}</span> <span class="kn">from</span> <span class="s1">&#39;react&#39;</span><span class="p">;</span>

<span class="nb">type</span> <span class="n">Theme</span> <span class="o">=</span> <span class="s1">&#39;dark&#39;</span> <span class="o">|</span> <span class="s1">&#39;light&#39;</span><span class="p">;</span>

<span class="n">interface</span> <span class="n">ThemeContextType</span> <span class="p">{</span>
  <span class="n">theme</span><span class="p">:</span> <span class="n">Theme</span><span class="p">;</span>
  <span class="n">toggleTheme</span><span class="p">:</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="n">void</span><span class="p">;</span>
<span class="p">}</span>

<span class="n">interface</span> <span class="n">ThemeProviderProps</span> <span class="p">{</span>
  <span class="n">children</span><span class="p">:</span> <span class="n">React</span><span class="o">.</span><span class="n">ReactNode</span><span class="p">;</span>
<span class="p">}</span>

<span class="n">const</span> <span class="n">ThemeContext</span> <span class="o">=</span> <span class="n">createContext</span><span class="o">&lt;</span><span class="n">ThemeContextType</span> <span class="o">|</span> <span class="n">undefined</span><span class="o">&gt;</span><span class="p">(</span><span class="n">undefined</span><span class="p">);</span>

<span class="n">export</span> <span class="n">const</span> <span class="n">ThemeProvider</span><span class="p">:</span> <span class="n">React</span><span class="o">.</span><span class="n">FC</span><span class="o">&lt;</span><span class="n">ThemeProviderProps</span><span class="o">&gt;</span> <span class="o">=</span> <span class="p">({</span> <span class="n">children</span> <span class="p">})</span> <span class="o">=&gt;</span> <span class="p">{</span>
  <span class="n">const</span> <span class="p">[</span><span class="n">theme</span><span class="p">,</span> <span class="n">setTheme</span><span class="p">]</span> <span class="o">=</span> <span class="n">useState</span><span class="o">&lt;</span><span class="n">Theme</span><span class="o">&gt;</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="p">{</span>
    <span class="o">//</span> <span class="n">Check</span> <span class="n">localStorage</span> <span class="n">first</span>
    <span class="n">const</span> <span class="n">savedTheme</span> <span class="o">=</span> <span class="n">localStorage</span><span class="o">.</span><span class="n">getItem</span><span class="p">(</span><span class="s1">&#39;theme&#39;</span><span class="p">)</span> <span class="k">as</span> <span class="n">Theme</span><span class="p">;</span>
    <span class="k">if</span> <span class="p">(</span><span class="n">savedTheme</span><span class="p">)</span> <span class="k">return</span> <span class="n">savedTheme</span><span class="p">;</span>

    <span class="o">//</span> <span class="n">Check</span> <span class="n">system</span> <span class="n">preference</span>
    <span class="k">if</span> <span class="p">(</span><span class="n">window</span><span class="o">.</span><span class="n">matchMedia</span><span class="p">(</span><span class="s1">&#39;(prefers-color-scheme: light)&#39;</span><span class="p">)</span><span class="o">.</span><span class="n">matches</span><span class="p">)</span> <span class="p">{</span>
      <span class="k">return</span> <span class="s1">&#39;light&#39;</span><span class="p">;</span>
    <span class="p">}</span>

    <span class="o">//</span> <span class="n">Default</span> <span class="n">to</span> <span class="n">dark</span>
    <span class="k">return</span> <span class="s1">&#39;dark&#39;</span><span class="p">;</span>
  <span class="p">});</span>

  <span class="n">useEffect</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="p">{</span>
    <span class="o">//</span> <span class="n">Apply</span> <span class="n">theme</span> <span class="n">to</span> <span class="n">document</span> <span class="n">root</span>
    <span class="n">document</span><span class="o">.</span><span class="n">documentElement</span><span class="o">.</span><span class="n">setAttribute</span><span class="p">(</span><span class="s1">&#39;data-theme&#39;</span><span class="p">,</span> <span class="n">theme</span><span class="p">);</span>
    <span class="n">localStorage</span><span class="o">.</span><span class="n">setItem</span><span class="p">(</span><span class="s1">&#39;theme&#39;</span><span class="p">,</span> <span class="n">theme</span><span class="p">);</span>
  <span class="p">},</span> <span class="p">[</span><span class="n">theme</span><span class="p">]);</span>

  <span class="n">const</span> <span class="n">toggleTheme</span> <span class="o">=</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>
    <span class="n">setTheme</span><span class="p">(</span><span class="n">prevTheme</span> <span class="o">=&gt;</span> <span class="p">{</span>
      <span class="n">const</span> <span class="n">newTheme</span> <span class="o">=</span> <span class="n">prevTheme</span> <span class="o">===</span> <span class="s1">&#39;dark&#39;</span> <span class="err">?</span> <span class="s1">&#39;light&#39;</span> <span class="p">:</span> <span class="s1">&#39;dark&#39;</span><span class="p">;</span>

      <span class="o">//</span> <span class="n">Terminal</span><span class="o">-</span><span class="n">style</span> <span class="n">console</span> <span class="n">output</span> <span class="p">(</span><span class="n">matching</span> <span class="n">original</span> <span class="n">HTML</span><span class="p">)</span>
      <span class="n">console</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="err">`</span><span class="o">%</span><span class="n">c</span><span class="err">$</span> <span class="o">./</span><span class="n">set_theme</span> <span class="o">--</span><span class="n">mode</span><span class="o">=</span><span class="err">$</span><span class="p">{</span><span class="n">newTheme</span><span class="p">}</span><span class="err">`</span><span class="p">,</span> <span class="s1">&#39;color: #FFC107; font-family: &quot;Fira Code&quot;, monospace; font-weight: 600;&#39;</span><span class="p">);</span>
      <span class="n">console</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="err">`</span><span class="o">%</span><span class="n">c</span><span class="err">✓</span> <span class="n">Theme</span> <span class="n">switched</span> <span class="n">to</span><span class="p">:</span> <span class="err">$</span><span class="p">{</span><span class="n">newTheme</span><span class="p">}</span> <span class="n">mode</span><span class="err">`</span><span class="p">,</span> <span class="s1">&#39;color: #00ff88; font-family: &quot;Fira Code&quot;, monospace;&#39;</span><span class="p">);</span>
      <span class="n">console</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="err">`</span><span class="o">%</span><span class="n">c</span><span class="err">✓</span> <span class="n">Interface</span> <span class="n">colors</span> <span class="n">updated</span><span class="err">`</span><span class="p">,</span> <span class="s1">&#39;color: #00ff88; font-family: &quot;Fira Code&quot;, monospace;&#39;</span><span class="p">);</span>
      <span class="n">console</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="err">`</span><span class="o">%</span><span class="n">c</span><span class="err">✓</span> <span class="n">Neural</span> <span class="n">network</span> <span class="n">visualization</span> <span class="n">adjusted</span><span class="err">`</span><span class="p">,</span> <span class="s1">&#39;color: #00ff88; font-family: &quot;Fira Code&quot;, monospace;&#39;</span><span class="p">);</span>

      <span class="k">return</span> <span class="n">newTheme</span><span class="p">;</span>
    <span class="p">});</span>
  <span class="p">};</span>

  <span class="k">return</span> <span class="p">(</span>
    <span class="o">&lt;</span><span class="n">ThemeContext</span><span class="o">.</span><span class="n">Provider</span> <span class="n">value</span><span class="o">=</span><span class="p">{{</span> <span class="n">theme</span><span class="p">,</span> <span class="n">toggleTheme</span> <span class="p">}}</span><span class="o">&gt;</span>
      <span class="p">{</span><span class="n">children</span><span class="p">}</span>
    <span class="o">&lt;/</span><span class="n">ThemeContext</span><span class="o">.</span><span class="n">Provider</span><span class="o">&gt;</span>
  <span class="p">);</span>
<span class="p">};</span>

<span class="n">export</span> <span class="n">const</span> <span class="n">useTheme</span> <span class="o">=</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>
  <span class="n">const</span> <span class="n">context</span> <span class="o">=</span> <span class="n">useContext</span><span class="p">(</span><span class="n">ThemeContext</span><span class="p">);</span>
  <span class="k">if</span> <span class="p">(</span><span class="n">context</span> <span class="o">===</span> <span class="n">undefined</span><span class="p">)</span> <span class="p">{</span>
    <span class="n">throw</span> <span class="n">new</span> <span class="n">Error</span><span class="p">(</span><span class="s1">&#39;useTheme must be used within a ThemeProvider&#39;</span><span class="p">);</span>
  <span class="p">}</span>
  <span class="k">return</span> <span class="n">context</span><span class="p">;</span>
<span class="p">};</span>
</code></pre></div>

<h3>src/index.css</h3>
<div class="codehilite"><pre><span></span><code>
</code></pre></div>

<h3>src/main.tsx</h3>
<div class="codehilite"><pre><span></span><code><span class="kn">import</span> <span class="nn">React</span> <span class="kn">from</span> <span class="s1">&#39;react&#39;</span>
<span class="kn">import</span> <span class="nn">ReactDOM</span> <span class="kn">from</span> <span class="s1">&#39;react-dom/client&#39;</span>
<span class="kn">import</span> <span class="nn">App</span> <span class="kn">from</span> <span class="s1">&#39;./App.tsx&#39;</span>
<span class="kn">import</span> <span class="p">{</span> <span class="n">ThemeProvider</span> <span class="p">}</span> <span class="kn">from</span> <span class="s1">&#39;./context/ThemeContext&#39;</span>
<span class="kn">import</span> <span class="s1">&#39;./index.css&#39;</span>
<span class="kn">import</span> <span class="s1">&#39;./assets/styles/_variables.css&#39;</span>
<span class="kn">import</span> <span class="s1">&#39;./assets/styles/global.css&#39;</span>

<span class="n">ReactDOM</span><span class="o">.</span><span class="n">createRoot</span><span class="p">(</span><span class="n">document</span><span class="o">.</span><span class="n">getElementById</span><span class="p">(</span><span class="s1">&#39;root&#39;</span><span class="p">)</span><span class="err">!</span><span class="p">)</span><span class="o">.</span><span class="n">render</span><span class="p">(</span>
  <span class="o">&lt;</span><span class="n">React</span><span class="o">.</span><span class="n">StrictMode</span><span class="o">&gt;</span>
    <span class="o">&lt;</span><span class="n">ThemeProvider</span><span class="o">&gt;</span>
      <span class="o">&lt;</span><span class="n">App</span> <span class="o">/&gt;</span>
    <span class="o">&lt;/</span><span class="n">ThemeProvider</span><span class="o">&gt;</span>
  <span class="o">&lt;/</span><span class="n">React</span><span class="o">.</span><span class="n">StrictMode</span><span class="o">&gt;</span><span class="p">,</span>
<span class="p">)</span>
</code></pre></div>

<h3>src/services/agentService.ts</h3>
<div class="codehilite"><pre><span></span><code><span class="cm">/**</span>
<span class="cm"> * Agent Service - API Communication for Banking Assistant</span>
<span class="cm"> *</span>
<span class="cm"> * Handles communication with the backend API for banking queries</span>
<span class="cm"> * Backend URL: https://api.yuriodev.co.uk</span>
<span class="cm"> */</span>

<span class="kd">interface</span><span class="w"> </span><span class="nx">QueryRequest</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="nx">customer_id</span><span class="o">:</span><span class="w"> </span><span class="kt">number</span><span class="p">;</span>
<span class="w">  </span><span class="nx">query</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="w">  </span><span class="nx">session_id?</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="p">}</span>

<span class="kd">interface</span><span class="w"> </span><span class="nx">QueryResponse</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="nx">status</span><span class="o">:</span><span class="w"> </span><span class="s1">&#39;success&#39;</span><span class="w"> </span><span class="o">|</span><span class="w"> </span><span class="s1">&#39;error&#39;</span><span class="p">;</span>
<span class="w">  </span><span class="nx">data</span><span class="o">?:</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="nx">message</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="w">    </span><span class="nx">metadata</span><span class="o">?:</span><span class="w"> </span><span class="p">{</span>
<span class="w">      </span><span class="nx">customer_name</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="w">      </span><span class="nx">product_type</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="w">      </span><span class="nx">processing_time</span><span class="o">:</span><span class="w"> </span><span class="kt">number</span><span class="p">;</span>
<span class="w">    </span><span class="p">};</span>
<span class="w">  </span><span class="p">};</span>
<span class="w">  </span><span class="nx">error</span><span class="o">?:</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="nx">code</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="w">    </span><span class="nx">message</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="w">  </span><span class="p">};</span>
<span class="p">}</span>

<span class="cm">/**</span>
<span class="cm"> * Send a banking query to the AI agent</span>
<span class="cm"> */</span>
<span class="k">export</span><span class="w"> </span><span class="kd">const</span><span class="w"> </span><span class="nx">sendQuery</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="k">async</span><span class="w"> </span><span class="p">(</span>
<span class="w">  </span><span class="nx">customerId</span><span class="o">:</span><span class="w"> </span><span class="kt">number</span><span class="p">,</span>
<span class="w">  </span><span class="nx">query</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">,</span>
<span class="w">  </span><span class="nx">sessionId?</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span>
<span class="p">)</span><span class="o">:</span><span class="w"> </span><span class="nb">Promise</span><span class="o">&lt;</span><span class="nx">QueryResponse</span><span class="o">&gt;</span><span class="w"> </span><span class="p">=&gt;</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="k">try</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="kd">const</span><span class="w"> </span><span class="nx">response</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="k">await</span><span class="w"> </span><span class="nx">fetch</span><span class="p">(</span><span class="s1">&#39;/api/agent/query&#39;</span><span class="p">,</span><span class="w"> </span><span class="p">{</span>
<span class="w">      </span><span class="nx">method</span><span class="o">:</span><span class="w"> </span><span class="s1">&#39;POST&#39;</span><span class="p">,</span>
<span class="w">      </span><span class="nx">headers</span><span class="o">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">        </span><span class="s1">&#39;Content-Type&#39;</span><span class="o">:</span><span class="w"> </span><span class="s1">&#39;application/json&#39;</span><span class="p">,</span>
<span class="w">      </span><span class="p">},</span>
<span class="w">      </span><span class="nx">body</span><span class="o">:</span><span class="w"> </span><span class="kt">JSON.stringify</span><span class="p">({</span>
<span class="w">        </span><span class="nx">customer_id</span><span class="o">:</span><span class="w"> </span><span class="kt">customerId</span><span class="p">,</span>
<span class="w">        </span><span class="nx">query</span><span class="p">,</span>
<span class="w">        </span><span class="nx">session_id</span><span class="o">:</span><span class="w"> </span><span class="kt">sessionId</span><span class="p">,</span>
<span class="w">      </span><span class="p">}</span><span class="w"> </span><span class="kr">as</span><span class="w"> </span><span class="nx">QueryRequest</span><span class="p">),</span>
<span class="w">    </span><span class="p">});</span>

<span class="w">    </span><span class="k">if</span><span class="w"> </span><span class="p">(</span><span class="o">!</span><span class="nx">response</span><span class="p">.</span><span class="nx">ok</span><span class="p">)</span><span class="w"> </span><span class="p">{</span>
<span class="w">      </span><span class="k">throw</span><span class="w"> </span><span class="ow">new</span><span class="w"> </span><span class="ne">Error</span><span class="p">(</span><span class="sb">`HTTP error! status: </span><span class="si">${</span><span class="nx">response</span><span class="p">.</span><span class="nx">status</span><span class="si">}</span><span class="sb">`</span><span class="p">);</span>
<span class="w">    </span><span class="p">}</span>

<span class="w">    </span><span class="kd">const</span><span class="w"> </span><span class="nx">data</span><span class="o">:</span><span class="w"> </span><span class="kt">QueryResponse</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="k">await</span><span class="w"> </span><span class="nx">response</span><span class="p">.</span><span class="nx">json</span><span class="p">();</span>
<span class="w">    </span><span class="k">return</span><span class="w"> </span><span class="nx">data</span><span class="p">;</span>
<span class="w">  </span><span class="p">}</span><span class="w"> </span><span class="k">catch</span><span class="w"> </span><span class="p">(</span><span class="nx">error</span><span class="p">)</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="nx">console</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s1">&#39;Agent service error:&#39;</span><span class="p">,</span><span class="w"> </span><span class="nx">error</span><span class="p">);</span>
<span class="w">    </span><span class="k">return</span><span class="w"> </span><span class="p">{</span>
<span class="w">      </span><span class="nx">status</span><span class="o">:</span><span class="w"> </span><span class="s1">&#39;error&#39;</span><span class="p">,</span>
<span class="w">      </span><span class="nx">error</span><span class="o">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">        </span><span class="nx">code</span><span class="o">:</span><span class="w"> </span><span class="s1">&#39;NETWORK_ERROR&#39;</span><span class="p">,</span>
<span class="w">        </span><span class="nx">message</span><span class="o">:</span><span class="w"> </span><span class="kt">error</span><span class="w"> </span><span class="ow">instanceof</span><span class="w"> </span><span class="ne">Error</span><span class="w"> </span><span class="o">?</span><span class="w"> </span><span class="nx">error</span><span class="p">.</span><span class="nx">message</span><span class="w"> </span><span class="o">:</span><span class="w"> </span><span class="s1">&#39;Failed to connect to API&#39;</span><span class="p">,</span>
<span class="w">      </span><span class="p">},</span>
<span class="w">    </span><span class="p">};</span>
<span class="w">  </span><span class="p">}</span>
<span class="p">};</span>

<span class="cm">/**</span>
<span class="cm"> * Validate customer ID format</span>
<span class="cm"> */</span>
<span class="k">export</span><span class="w"> </span><span class="kd">const</span><span class="w"> </span><span class="nx">validateCustomerId</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="p">(</span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">number</span><span class="p">)</span><span class="o">:</span><span class="w"> </span><span class="kt">boolean</span><span class="w"> </span><span class="p">=&gt;</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="k">return</span><span class="w"> </span><span class="nb">Number</span><span class="p">.</span><span class="nx">isInteger</span><span class="p">(</span><span class="nx">id</span><span class="p">)</span><span class="w"> </span><span class="o">&amp;&amp;</span><span class="w"> </span><span class="nx">id</span><span class="w"> </span><span class="o">&gt;</span><span class="w"> </span><span class="mf">0</span><span class="w"> </span><span class="o">&amp;&amp;</span><span class="w"> </span><span class="nx">id</span><span class="w"> </span><span class="o">&lt;</span><span class="w"> </span><span class="mf">1000000</span><span class="p">;</span>
<span class="p">};</span>

<span class="cm">/**</span>
<span class="cm"> * Validate query text</span>
<span class="cm"> */</span>
<span class="k">export</span><span class="w"> </span><span class="kd">const</span><span class="w"> </span><span class="nx">validateQuery</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="p">(</span><span class="nx">query</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">)</span><span class="o">:</span><span class="w"> </span><span class="kt">boolean</span><span class="w"> </span><span class="p">=&gt;</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="k">return</span><span class="w"> </span><span class="nx">query</span><span class="p">.</span><span class="nx">trim</span><span class="p">().</span><span class="nx">length</span><span class="w"> </span><span class="o">&gt;</span><span class="w"> </span><span class="mf">0</span><span class="w"> </span><span class="o">&amp;&amp;</span><span class="w"> </span><span class="nx">query</span><span class="p">.</span><span class="nx">length</span><span class="w"> </span><span class="o">&lt;=</span><span class="w"> </span><span class="mf">500</span><span class="p">;</span>
<span class="p">};</span>

<span class="cm">/**</span>
<span class="cm"> * Parse structured command</span>
<span class="cm"> */</span>
<span class="k">export</span><span class="w"> </span><span class="kd">const</span><span class="w"> </span><span class="nx">parseCommand</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="p">(</span>
<span class="w">  </span><span class="nx">rawCommand</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span>
<span class="p">)</span><span class="o">:</span><span class="w"> </span><span class="p">{</span><span class="w"> </span><span class="nx">command</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span><span class="w"> </span><span class="nx">customerId?</span><span class="o">:</span><span class="w"> </span><span class="kt">number</span><span class="p">;</span><span class="w"> </span><span class="nx">query?</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span><span class="w"> </span><span class="nx">error?</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="w"> </span><span class="p">}</span><span class="w"> </span><span class="p">=&gt;</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="kd">const</span><span class="w"> </span><span class="nx">trimmed</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nx">rawCommand</span><span class="p">.</span><span class="nx">trim</span><span class="p">();</span>

<span class="w">  </span><span class="c1">// Match: query --id 123 &quot;question text&quot;</span>
<span class="w">  </span><span class="kd">const</span><span class="w"> </span><span class="nx">queryMatch</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nx">trimmed</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^query\s+--id\s+(\d+)\s+&quot;([^&quot;]+)&quot;/</span><span class="p">);</span>
<span class="w">  </span><span class="k">if</span><span class="w"> </span><span class="p">(</span><span class="nx">queryMatch</span><span class="p">)</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="kd">const</span><span class="w"> </span><span class="nx">customerId</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">queryMatch</span><span class="p">[</span><span class="mf">1</span><span class="p">]);</span>
<span class="w">    </span><span class="kd">const</span><span class="w"> </span><span class="nx">query</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nx">queryMatch</span><span class="p">[</span><span class="mf">2</span><span class="p">];</span>

<span class="w">    </span><span class="k">if</span><span class="w"> </span><span class="p">(</span><span class="o">!</span><span class="nx">validateCustomerId</span><span class="p">(</span><span class="nx">customerId</span><span class="p">))</span><span class="w"> </span><span class="p">{</span>
<span class="w">      </span><span class="k">return</span><span class="w"> </span><span class="p">{</span>
<span class="w">        </span><span class="nx">command</span><span class="o">:</span><span class="w"> </span><span class="s1">&#39;query&#39;</span><span class="p">,</span>
<span class="w">        </span><span class="nx">error</span><span class="o">:</span><span class="w"> </span><span class="s1">&#39;Invalid customer ID. Must be between 1 and 999999.&#39;</span><span class="p">,</span>
<span class="w">      </span><span class="p">};</span>
<span class="w">    </span><span class="p">}</span>

<span class="w">    </span><span class="k">if</span><span class="w"> </span><span class="p">(</span><span class="o">!</span><span class="nx">validateQuery</span><span class="p">(</span><span class="nx">query</span><span class="p">))</span><span class="w"> </span><span class="p">{</span>
<span class="w">      </span><span class="k">return</span><span class="w"> </span><span class="p">{</span>
<span class="w">        </span><span class="nx">command</span><span class="o">:</span><span class="w"> </span><span class="s1">&#39;query&#39;</span><span class="p">,</span>
<span class="w">        </span><span class="nx">error</span><span class="o">:</span><span class="w"> </span><span class="s1">&#39;Invalid query. Must be between 1 and 500 characters.&#39;</span><span class="p">,</span>
<span class="w">      </span><span class="p">};</span>
<span class="w">    </span><span class="p">}</span>

<span class="w">    </span><span class="k">return</span><span class="w"> </span><span class="p">{</span>
<span class="w">      </span><span class="nx">command</span><span class="o">:</span><span class="w"> </span><span class="s1">&#39;query&#39;</span><span class="p">,</span>
<span class="w">      </span><span class="nx">customerId</span><span class="p">,</span>
<span class="w">      </span><span class="nx">query</span><span class="p">,</span>
<span class="w">    </span><span class="p">};</span>
<span class="w">  </span><span class="p">}</span>

<span class="w">  </span><span class="c1">// Other commands (help, clear, exit, info)</span>
<span class="w">  </span><span class="k">return</span><span class="w"> </span><span class="p">{</span><span class="w"> </span><span class="nx">command</span><span class="o">:</span><span class="w"> </span><span class="kt">trimmed.toLowerCase</span><span class="p">()</span><span class="w"> </span><span class="p">};</span>
<span class="p">};</span>

<span class="k">export</span><span class="w"> </span><span class="k">default</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="nx">sendQuery</span><span class="p">,</span>
<span class="w">  </span><span class="nx">validateCustomerId</span><span class="p">,</span>
<span class="w">  </span><span class="nx">validateQuery</span><span class="p">,</span>
<span class="w">  </span><span class="nx">parseCommand</span><span class="p">,</span>
<span class="p">};</span>
</code></pre></div>

<h3>src/services/projectsData.ts</h3>
<div class="codehilite"><pre><span></span><code><span class="cm">/**</span>
<span class="cm"> * Project Data - Portfolio Projects</span>
<span class="cm"> * Updated from CV (October 2025)</span>
<span class="cm"> */</span>

<span class="k">export</span><span class="w"> </span><span class="kd">interface</span><span class="w"> </span><span class="nx">Metric</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="nx">label</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="w">  </span><span class="nx">value</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="w">  </span><span class="nx">highlight?</span><span class="o">:</span><span class="w"> </span><span class="kt">boolean</span><span class="p">;</span>
<span class="p">}</span>

<span class="k">export</span><span class="w"> </span><span class="kd">interface</span><span class="w"> </span><span class="nx">Project</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">number</span><span class="p">;</span>
<span class="w">  </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="w">  </span><span class="nx">subtitle?</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="w">  </span><span class="nx">period</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="w">  </span><span class="nx">client?</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="w">  </span><span class="nx">description</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="w">  </span><span class="nx">challenge</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="w">  </span><span class="nx">solution</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="w">  </span><span class="nx">impact</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="w">  </span><span class="nx">techStack</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">[];</span>
<span class="w">  </span><span class="nx">methodologies</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">[];</span>
<span class="w">  </span><span class="nx">metrics</span><span class="o">:</span><span class="w"> </span><span class="kt">Metric</span><span class="p">[];</span>
<span class="w">  </span><span class="nx">links</span><span class="o">:</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="w">    </span><span class="nx">url</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="w">  </span><span class="p">}[];</span>
<span class="w">  </span><span class="nx">featured?</span><span class="o">:</span><span class="w"> </span><span class="kt">boolean</span><span class="p">;</span>
<span class="p">}</span>

<span class="k">export</span><span class="w"> </span><span class="kd">const</span><span class="w"> </span><span class="nx">projectsData</span><span class="o">:</span><span class="w"> </span><span class="kt">Project</span><span class="p">[]</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="p">[</span>
<span class="w">  </span><span class="c1">// {</span>
<span class="w">  </span><span class="c1">//   id: 1,</span>
<span class="w">  </span><span class="c1">//   title: &quot;Proactive AI Agent&quot;,</span>
<span class="w">  </span><span class="c1">//   subtitle: &quot;RAG-Powered Knowledge Assistant&quot;,</span>
<span class="w">  </span><span class="c1">//   period: &quot;Sep 2024 - Present&quot;,</span>
<span class="w">  </span><span class="c1">//   client: &quot;Stealth Startup&quot;,</span>
<span class="w">  </span><span class="c1">//   description: &quot;Built production-grade RAG system transforming static knowledge bases into proactive AI agents capable of answering complex user queries with high precision and low latency.&quot;,</span>
<span class="w">  </span><span class="c1">//   challenge: &quot;Initial system suffered from 30% retrieval precision and 3.5s p95 latency, making it unsuitable for production use with real users expecting instant, accurate responses.&quot;,</span>
<span class="w">  </span><span class="c1">//   solution: &quot;Architected hybrid search combining semantic (ChromaDB) and keyword retrieval, implemented optimal chunking strategies, and integrated Gemini 2.0 for answer generation. Built FastAPI backend with MCP servers for tool integration.&quot;,</span>
<span class="w">  </span><span class="c1">//   impact: &quot;Improved retrieval precision from 30% to 95%, reduced p95 latency to &lt;1.2s, achieved 92% answer correctness (GPT-4 judge), and successfully handled 100 concurrent users without degradation.&quot;,</span>
<span class="w">  </span><span class="c1">//   techStack: [&quot;LangChain&quot;, &quot;ChromaDB&quot;, &quot;Gemini 2.0&quot;, &quot;FastAPI&quot;, &quot;MCP Servers&quot;, &quot;Python&quot;],</span>
<span class="w">  </span><span class="c1">//   methodologies: [&quot;RAG Architecture&quot;, &quot;Hybrid Search&quot;, &quot;Performance Optimization&quot;, &quot;Load Testing&quot;],</span>
<span class="w">  </span><span class="c1">//   metrics: [</span>
<span class="w">  </span><span class="c1">//     { label: &quot;Retrieval Precision&quot;, value: &quot;95%&quot;, highlight: true },</span>
<span class="w">  </span><span class="c1">//     { label: &quot;Latency (p95)&quot;, value: &quot;&lt;1.2s&quot;, highlight: true },</span>
<span class="w">  </span><span class="c1">//     { label: &quot;Answer Correctness&quot;, value: &quot;92%&quot; },</span>
<span class="w">  </span><span class="c1">//     { label: &quot;Concurrent Users&quot;, value: &quot;100+&quot; },</span>
<span class="w">  </span><span class="c1">//   ],</span>
<span class="w">  </span><span class="c1">//   links: [</span>
<span class="w">  </span><span class="c1">//     { name: &quot;🔬 Technical Deep Dive&quot;, url: &quot;#&quot; },</span>
<span class="w">  </span><span class="c1">//     { name: &quot;📊 Performance Metrics&quot;, url: &quot;#&quot; }</span>
<span class="w">  </span><span class="c1">//   ],</span>
<span class="w">  </span><span class="c1">//   featured: true,</span>
<span class="w">  </span><span class="c1">// },</span>
<span class="w">  </span><span class="c1">// {</span>
<span class="w">  </span><span class="c1">//   id: 2,</span>
<span class="w">  </span><span class="c1">//   title: &quot;SaleSphereAI&quot;,</span>
<span class="w">  </span><span class="c1">//   subtitle: &quot;Multi-Agent Sales Automation Platform&quot;,</span>
<span class="w">  </span><span class="c1">//   period: &quot;Jun 2024 - Dec 2024&quot;,</span>
<span class="w">  </span><span class="c1">//   client: &quot;High-Growth SaaS Startup&quot;,</span>
<span class="w">  </span><span class="c1">//   description: &quot;Architected autonomous multi-agent system automating end-to-end B2B sales workflows from lead qualification through deal closure, leveraging LangGraph for sophisticated agent orchestration.&quot;,</span>
<span class="w">  </span><span class="c1">//   challenge: &quot;Manual sales processes were consuming 80% of sales team&#39;s time on repetitive tasks, limiting ability to scale customer acquisition while maintaining personalization and conversion quality.&quot;,</span>
<span class="w">  </span><span class="c1">//   solution: &quot;Designed 5-agent system (Lead Qualifier, Researcher, Outreach Specialist, Objection Handler, Deal Closer) coordinated via LangGraph state machines. Built FastAPI backend with PostgreSQL for customer data and Redis for real-time state management.&quot;,</span>
<span class="w">  </span><span class="c1">//   impact: &quot;Achieved 200% increase in sales conversion rates, reduced manual sales workload by 60%, and enabled sales team to handle 3x lead volume with same headcount.&quot;,</span>
<span class="w">  </span><span class="c1">//   techStack: [&quot;LangGraph&quot;, &quot;LangChain&quot;, &quot;FastAPI&quot;, &quot;PostgreSQL&quot;, &quot;Redis&quot;, &quot;LLMs&quot;],</span>
<span class="w">  </span><span class="c1">//   methodologies: [&quot;Multi-Agent Systems&quot;, &quot;State Machines&quot;, &quot;Microservices&quot;, &quot;A/B Testing&quot;],</span>
<span class="w">  </span><span class="c1">//   metrics: [</span>
<span class="w">  </span><span class="c1">//     { label: &quot;Sales Conversion&quot;, value: &quot;+200%&quot;, highlight: true },</span>
<span class="w">  </span><span class="c1">//     { label: &quot;Manual Workload&quot;, value: &quot;-60%&quot;, highlight: true },</span>
<span class="w">  </span><span class="c1">//     { label: &quot;Lead Capacity&quot;, value: &quot;3x&quot; },</span>
<span class="w">  </span><span class="c1">//     { label: &quot;Agent Count&quot;, value: &quot;5&quot; },</span>
<span class="w">  </span><span class="c1">//   ],</span>
<span class="w">  </span><span class="c1">//   links: [</span>
<span class="w">  </span><span class="c1">//     { name: &quot;🤖 Architecture&quot;, url: &quot;#&quot; },</span>
<span class="w">  </span><span class="c1">//     { name: &quot;📈 Case Study&quot;, url: &quot;#&quot; }</span>
<span class="w">  </span><span class="c1">//   ],</span>
<span class="w">  </span><span class="c1">//   featured: true,</span>
<span class="w">  </span><span class="c1">// },</span>
<span class="w">  </span><span class="c1">// {</span>
<span class="w">  </span><span class="c1">//   id: 3,</span>
<span class="w">  </span><span class="c1">//   title: &quot;Resume Parsing Platform&quot;,</span>
<span class="w">  </span><span class="c1">//   subtitle: &quot;AI-Powered Talent Matching System&quot;,</span>
<span class="w">  </span><span class="c1">//   period: &quot;Mar 2024 - Aug 2024&quot;,</span>
<span class="w">  </span><span class="c1">//   client: &quot;HR Tech Company&quot;,</span>
<span class="w">  </span><span class="c1">//   description: &quot;Developed intelligent resume parsing and job matching system combining traditional layout analysis with LLM-powered understanding to extract and classify candidate information at scale.&quot;,</span>
<span class="w">  </span><span class="c1">//   challenge: &quot;Traditional regex-based parsers achieved only 65% accuracy on diverse resume formats, causing significant manual review overhead and poor candidate experience in job matching.&quot;,</span>
<span class="w">  </span><span class="c1">//   solution: &quot;Built hybrid parsing pipeline using PyMuPDF for layout analysis + Google Gemini API for semantic understanding. Implemented microservices architecture with PostgreSQL for structured data and MongoDB for document storage. Created LlamaIndex pipeline for similarity matching.&quot;,</span>
<span class="w">  </span><span class="c1">//   impact: &quot;Achieved 93% F1 score in role classification, reduced time-to-hire by 75% through automated screening, and processed 10,000+ resumes monthly with 98% uptime.&quot;,</span>
<span class="w">  </span><span class="c1">//   techStack: [&quot;PyTorch&quot;, &quot;Gemini API&quot;, &quot;LlamaIndex&quot;, &quot;PostgreSQL&quot;, &quot;MongoDB&quot;, &quot;Next.js&quot;],</span>
<span class="w">  </span><span class="c1">//   methodologies: [&quot;NLP&quot;, &quot;Hybrid ML&quot;, &quot;Microservices&quot;, &quot;Document Processing&quot;],</span>
<span class="w">  </span><span class="c1">//   metrics: [</span>
<span class="w">  </span><span class="c1">//     { label: &quot;F1 Score&quot;, value: &quot;93%&quot;, highlight: true },</span>
<span class="w">  </span><span class="c1">//     { label: &quot;Time-to-Hire&quot;, value: &quot;-75%&quot;, highlight: true },</span>
<span class="w">  </span><span class="c1">//     { label: &quot;Monthly Volume&quot;, value: &quot;10K+&quot; },</span>
<span class="w">  </span><span class="c1">//     { label: &quot;System Uptime&quot;, value: &quot;98%&quot; },</span>
<span class="w">  </span><span class="c1">//   ],</span>
<span class="w">  </span><span class="c1">//   links: [</span>
<span class="w">  </span><span class="c1">//     { name: &quot;� Tech Stack&quot;, url: &quot;#&quot; },</span>
<span class="w">  </span><span class="c1">//     { name: &quot;📊 Performance&quot;, url: &quot;#&quot; }</span>
<span class="w">  </span><span class="c1">//   ],</span>
<span class="w">  </span><span class="c1">//   featured: true,</span>
<span class="w">  </span><span class="c1">// },</span>
<span class="w">  </span><span class="c1">// {</span>
<span class="w">  </span><span class="c1">//   id: 4,</span>
<span class="w">  </span><span class="c1">//   title: &quot;Property Valuation Platform&quot;,</span>
<span class="w">  </span><span class="c1">//   subtitle: &quot;ML-Powered Real Estate Analytics&quot;,</span>
<span class="w">  </span><span class="c1">//   period: &quot;Jan 2024 - Jun 2024&quot;,</span>
<span class="w">  </span><span class="c1">//   client: &quot;PropTech Startup&quot;,</span>
<span class="w">  </span><span class="c1">//   description: &quot;Engineered cloud-native ML platform for automated property valuations across UK market, processing over 100M historical transactions with advanced geospatial and temporal feature engineering.&quot;,</span>
<span class="w">  </span><span class="c1">//   challenge: &quot;Existing valuation models had 78% accuracy and took 15+ minutes to process new data batches, making real-time pricing impossible for competitive market conditions.&quot;,</span>
<span class="w">  </span><span class="c1">//   solution: &quot;Built scalable GCP pipeline with BigQuery for data warehousing, implemented ensemble models (XGBoost + LightGBM), and designed geospatial clustering for neighborhood effects. Created Python SDK for feature engineering reusability.&quot;,</span>
<span class="w">  </span><span class="c1">//   impact: &quot;Achieved 94% valuation accuracy, reduced data loading time by ×50 through optimized BigQuery schemas, and enabled real-time pricing updates for 500K+ properties.&quot;,</span>
<span class="w">  </span><span class="c1">//   techStack: [&quot;XGBoost&quot;, &quot;LightGBM&quot;, &quot;BigQuery&quot;, &quot;GCP&quot;, &quot;Geospatial Libraries&quot;, &quot;Python&quot;],</span>
<span class="w">  </span><span class="c1">//   methodologies: [&quot;Ensemble Learning&quot;, &quot;Geospatial Analysis&quot;, &quot;Cloud-Native&quot;, &quot;ETL Pipelines&quot;],</span>
<span class="w">  </span><span class="c1">//   metrics: [</span>
<span class="w">  </span><span class="c1">//     { label: &quot;Accuracy&quot;, value: &quot;94%&quot;, highlight: true },</span>
<span class="w">  </span><span class="c1">//     { label: &quot;Data Loading&quot;, value: &quot;×50 faster&quot;, highlight: true },</span>
<span class="w">  </span><span class="c1">//     { label: &quot;Records Processed&quot;, value: &quot;100M+&quot; },</span>
<span class="w">  </span><span class="c1">//     { label: &quot;Properties Covered&quot;, value: &quot;500K+&quot; },</span>
<span class="w">  </span><span class="c1">//   ],</span>
<span class="w">  </span><span class="c1">//   links: [</span>
<span class="w">  </span><span class="c1">//     { name: &quot;🏠 Platform&quot;, url: &quot;#&quot; },</span>
<span class="w">  </span><span class="c1">//     { name: &quot;🔧 Pipeline&quot;, url: &quot;#&quot; }</span>
<span class="w">  </span><span class="c1">//   ],</span>
<span class="w">  </span><span class="c1">//   featured: false,</span>
<span class="w">  </span><span class="c1">// },</span>
<span class="w">  </span><span class="c1">// {</span>
<span class="w">  </span><span class="c1">//   id: 5,</span>
<span class="w">  </span><span class="c1">//   title: &quot;Financial Institutions Consulting&quot;,</span>
<span class="w">  </span><span class="c1">//   subtitle: &quot;Python/R AI Tooling for Finance&quot;,</span>
<span class="w">  </span><span class="c1">//   period: &quot;2022 - 2024&quot;,</span>
<span class="w">  </span><span class="c1">//   client: &quot;JPMorgan, Bloomberg, Houlihan Lokey&quot;,</span>
<span class="w">  </span><span class="c1">//   description: &quot;Delivered specialized consulting for top-tier financial institutions, building custom Python-based AI training modules and R-based financial analysis scripts to automate workflows and enhance quantitative capabilities.&quot;,</span>
<span class="w">  </span><span class="c1">//   challenge: &quot;Internal teams lacked standardized tooling for AI/ML workflows, resulting in duplicated effort across departments and 30% of analyst time spent on repetitive manual reporting tasks.&quot;,</span>
<span class="w">  </span><span class="c1">//   solution: &quot;Developed reusable Python libraries for common ML patterns, created R packages for financial modeling, and delivered hands-on training workshops for quant and risk teams. Automated report generation pipelines.&quot;,</span>
<span class="w">  </span><span class="c1">//   impact: &quot;Reduced manual reporting time by ~30%, created tooling adopted by 100+ internal users across divisions, and trained 50+ analysts in production ML best practices.&quot;,</span>
<span class="w">  </span><span class="c1">//   techStack: [&quot;Python&quot;, &quot;R&quot;, &quot;Pandas&quot;, &quot;NumPy&quot;, &quot;Scikit-learn&quot;, &quot;Financial APIs&quot;],</span>
<span class="w">  </span><span class="c1">//   methodologies: [&quot;Financial Modeling&quot;, &quot;Training &amp; Enablement&quot;, &quot;Workflow Automation&quot;],</span>
<span class="w">  </span><span class="c1">//   metrics: [</span>
<span class="w">  </span><span class="c1">//     { label: &quot;Time Savings&quot;, value: &quot;~30%&quot;, highlight: true },</span>
<span class="w">  </span><span class="c1">//     { label: &quot;Internal Adoption&quot;, value: &quot;100+ users&quot; },</span>
<span class="w">  </span><span class="c1">//     { label: &quot;Analysts Trained&quot;, value: &quot;50+&quot; },</span>
<span class="w">  </span><span class="c1">//     { label: &quot;Institutions&quot;, value: &quot;3&quot; },</span>
<span class="w">  </span><span class="c1">//   ],</span>
<span class="w">  </span><span class="c1">//   links: [</span>
<span class="w">  </span><span class="c1">//     { name: &quot;🏦 Case Studies&quot;, url: &quot;#&quot; },</span>
<span class="w">  </span><span class="c1">//     { name: &quot;📚 Training Materials&quot;, url: &quot;#&quot; }</span>
<span class="w">  </span><span class="c1">//   ],</span>
<span class="w">  </span><span class="c1">//   featured: false,</span>
<span class="w">  </span><span class="c1">// },</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">6</span><span class="p">,</span>
<span class="w">    </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Agentic Research Assistant&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">subtitle</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Scientific Literature Analysis with LangGraph&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">period</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Feb 2025&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">client</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;R&amp;D Initiative&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">description</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Engineered autonomous research agent using LangGraph orchestration to systematically discover, analyze, and synthesize findings from scientific literature. Custom MCP implementation for tool calling and state management, demonstrating deep understanding of agentic architectures from first principles.&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">challenge</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Researchers spent weeks manually reviewing 200+ papers per project. Initial RAG system suffered from &lt;5% retrieval precision due to broad chunking—specific queries drowned in large semantic chunks. Race conditions on startup caused frontend failures.&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">solution</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Rebuilt with header-based granular chunking (50-150 words) achieving 95% precision. Implemented polyglot persistence: SQLite for ACID transactional logs, ChromaDB for semantic search. Created sliding window + summarization for multi-turn conversations. Custom health check polling eliminated startup failures.&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">impact</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Analyzed 200+ papers in &lt;30 minutes (vs. weeks manually), achieved 95% retrieval precision (RAGAS metric), sustained 10+ turn conversations without degradation. Saved 40+ hours per project with 88% key finding extraction accuracy.&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">techStack</span><span class="o">:</span><span class="w"> </span><span class="p">[</span><span class="s2">&quot;LangGraph&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;ChromaDB&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;SQLite&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;PyMuPDF&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;MCP Servers&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;ArXiv API&quot;</span><span class="p">],</span>
<span class="w">    </span><span class="nx">methodologies</span><span class="o">:</span><span class="w"> </span><span class="p">[</span><span class="s2">&quot;Agentic Workflows&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;RAG Architecture&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Polyglot Persistence&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Header-based Chunking&quot;</span><span class="p">],</span>
<span class="w">    </span><span class="nx">metrics</span><span class="o">:</span><span class="w"> </span><span class="p">[</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">label</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Retrieval Precision&quot;</span><span class="p">,</span><span class="w"> </span><span class="nx">value</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;95%&quot;</span><span class="p">,</span><span class="w"> </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="kt">true</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">label</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Analysis Speed&quot;</span><span class="p">,</span><span class="w"> </span><span class="nx">value</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;200+ papers/30min&quot;</span><span class="p">,</span><span class="w"> </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="kt">true</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">label</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Time Saved&quot;</span><span class="p">,</span><span class="w"> </span><span class="nx">value</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;40+ hours/project&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">label</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Conversation Depth&quot;</span><span class="p">,</span><span class="w"> </span><span class="nx">value</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;10+ turns&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">    </span><span class="p">],</span>
<span class="w">    </span><span class="nx">links</span><span class="o">:</span><span class="w"> </span><span class="p">[</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;🔬 Technical Deep Dive (Coming Soon)&quot;</span><span class="p">,</span><span class="w"> </span><span class="nx">url</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;#&quot;</span><span class="w"> </span><span class="p">}</span>
<span class="w">    </span><span class="p">],</span>
<span class="w">    </span><span class="nx">featured</span><span class="o">:</span><span class="w"> </span><span class="kt">true</span><span class="p">,</span>
<span class="w">  </span><span class="p">},</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">7</span><span class="p">,</span>
<span class="w">    </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Automated Python Course Platform&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">subtitle</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;GitHub Actions-Powered Educational System&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">period</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Jan 2023 - Present&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">client</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Open-Source Educational Initiative&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">description</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Architected production-grade Python learning platform with 300+ exercises across 11 modules, featuring custom autograding framework with educational feedback. Built test infrastructure checking not just correctness, but code quality—loop usage, prohibited constructs, and algorithmic approach enforcement.&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">challenge</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Generic &#39;AssertionError&#39; messages don&#39;t teach. Manual grading took 10+ hours/week for 20 students. Students copying solutions without learning. Need to test *how* problems are solved, not just output correctness. Traditional courses have 15% completion rates.&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">solution</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Built custom TestOutputFormatter with colored terminal tables showing input→expected→actual. Regex-based code inspection enforcing algorithmic constraints (check_for_loops, check_for_string_slice). GitHub Classroom + Actions CI/CD for instant feedback. Progressive 11-module curriculum with strict prerequisite structure.&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">impact</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;500+ GitHub stars, adopted by 5+ universities. Reached 150+ students with 95% completion rate (vs 15% industry average). Zero manual grading—freed 10 hours/week. 8 students admitted to Oxbridge CS, 5 received FAANG offers. Student confusion dropped 60%; 80% solve problems without instructor help.&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">techStack</span><span class="o">:</span><span class="w"> </span><span class="p">[</span><span class="s2">&quot;Python&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;GitHub Actions&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Pytest&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Regex&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Git&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Markdown&quot;</span><span class="p">],</span>
<span class="w">    </span><span class="nx">methodologies</span><span class="o">:</span><span class="w"> </span><span class="p">[</span><span class="s2">&quot;Educational Systems Engineering&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;CI/CD Automation&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Test-Driven Learning&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Algorithmic Enforcement&quot;</span><span class="p">],</span>
<span class="w">    </span><span class="nx">metrics</span><span class="o">:</span><span class="w"> </span><span class="p">[</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">label</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;GitHub Stars&quot;</span><span class="p">,</span><span class="w"> </span><span class="nx">value</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;500+&quot;</span><span class="p">,</span><span class="w"> </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="kt">true</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">label</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Completion Rate&quot;</span><span class="p">,</span><span class="w"> </span><span class="nx">value</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;95%&quot;</span><span class="p">,</span><span class="w"> </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="kt">true</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">label</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Exercises&quot;</span><span class="p">,</span><span class="w"> </span><span class="nx">value</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;300+&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">label</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Institutions&quot;</span><span class="p">,</span><span class="w"> </span><span class="nx">value</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;5 universities&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">    </span><span class="p">],</span>
<span class="w">    </span><span class="nx">links</span><span class="o">:</span><span class="w"> </span><span class="p">[</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;📖 Full Course&quot;</span><span class="p">,</span><span class="w"> </span><span class="nx">url</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;https://github.com/YurioDev/Python-Course&quot;</span><span class="w"> </span><span class="p">}</span>
<span class="w">    </span><span class="p">],</span>
<span class="w">    </span><span class="nx">featured</span><span class="o">:</span><span class="w"> </span><span class="kt">true</span><span class="p">,</span>
<span class="w">  </span><span class="p">}</span>
<span class="p">];</span>
</code></pre></div>

<h3>src/services/skillsData.ts</h3>
<div class="codehilite"><pre><span></span><code><span class="cm">/**</span>
<span class="cm"> * Skills Data - Technical Expertise Taxonomy</span>
<span class="cm"> * Aligned with CV and LinkedIn (October 2025)</span>
<span class="cm"> */</span>

<span class="k">export</span><span class="w"> </span><span class="kd">interface</span><span class="w"> </span><span class="nx">Skill</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">number</span><span class="p">;</span>
<span class="w">  </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="w">  </span><span class="nx">level</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="w">  </span><span class="nx">progress</span><span class="o">:</span><span class="w"> </span><span class="kt">number</span><span class="p">;</span>
<span class="w">  </span><span class="nx">details</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">[];</span>
<span class="w">  </span><span class="nx">highlight?</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="p">}</span>

<span class="c1">// ============================================</span>
<span class="c1">// TYPED SKILLS DATA (Used by SkillTerminal)</span>
<span class="c1">// ============================================</span>

<span class="k">export</span><span class="w"> </span><span class="kr">type</span><span class="w"> </span><span class="nx">SkillTagType</span><span class="w"> </span><span class="o">=</span><span class="w"> </span>
<span class="w">  </span><span class="o">|</span><span class="w"> </span><span class="s1">&#39;framework&#39;</span><span class="w">      </span><span class="c1">// Agentic frameworks, orchestration tools</span>
<span class="w">  </span><span class="o">|</span><span class="w"> </span><span class="s1">&#39;database&#39;</span><span class="w">       </span><span class="c1">// Databases, vector stores</span>
<span class="w">  </span><span class="o">|</span><span class="w"> </span><span class="s1">&#39;model&#39;</span><span class="w">          </span><span class="c1">// LLMs, ML models</span>
<span class="w">  </span><span class="o">|</span><span class="w"> </span><span class="s1">&#39;language&#39;</span><span class="w">       </span><span class="c1">// Programming languages</span>
<span class="w">  </span><span class="o">|</span><span class="w"> </span><span class="s1">&#39;cloud&#39;</span><span class="w">          </span><span class="c1">// Cloud platforms, infrastructure</span>
<span class="w">  </span><span class="o">|</span><span class="w"> </span><span class="s1">&#39;tool&#39;</span><span class="w">           </span><span class="c1">// Development tools, libraries</span>
<span class="w">  </span><span class="o">|</span><span class="w"> </span><span class="s1">&#39;concept&#39;</span><span class="w">        </span><span class="c1">// Patterns, architectures, methodologies</span>
<span class="w">  </span><span class="o">|</span><span class="w"> </span><span class="s1">&#39;metric&#39;</span><span class="p">;</span><span class="w">        </span><span class="c1">// Performance metrics, achievements</span>

<span class="k">export</span><span class="w"> </span><span class="kd">interface</span><span class="w"> </span><span class="nx">SkillDetail</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="w">  </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="nx">SkillTagType</span><span class="p">;</span>
<span class="p">}</span>

<span class="k">export</span><span class="w"> </span><span class="kd">interface</span><span class="w"> </span><span class="nx">SkillWithTypes</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">number</span><span class="p">;</span>
<span class="w">  </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span>
<span class="w">  </span><span class="nx">progress</span><span class="o">:</span><span class="w"> </span><span class="kt">number</span><span class="p">;</span>
<span class="w">  </span><span class="nx">details</span><span class="o">:</span><span class="w"> </span><span class="kt">SkillDetail</span><span class="p">[];</span>
<span class="w">  </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="p">{</span><span class="w"> </span><span class="nx">text</span><span class="o">:</span><span class="w"> </span><span class="kt">string</span><span class="p">;</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="nx">SkillTagType</span><span class="w"> </span><span class="p">};</span>
<span class="p">}</span>

<span class="k">export</span><span class="w"> </span><span class="kd">const</span><span class="w"> </span><span class="nx">skillsDataTyped</span><span class="o">:</span><span class="w"> </span><span class="kt">SkillWithTypes</span><span class="p">[]</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="p">[</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">1</span><span class="p">,</span>
<span class="w">    </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;agentic_systems.py&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">progress</span><span class="o">:</span><span class="w"> </span><span class="kt">100</span><span class="p">,</span>
<span class="w">    </span><span class="nx">details</span><span class="o">:</span><span class="w"> </span><span class="p">[</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;LangGraph&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;framework&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;LangChain&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;framework&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;MCP&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;framework&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;A2A&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;framework&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Multi-Agent&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;ReAct&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Reflexion&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">    </span><span class="p">],</span>
<span class="w">    </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="p">{</span><span class="w"> </span><span class="nx">text</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Agentic Architect&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;metric&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">  </span><span class="p">},</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">2</span><span class="p">,</span>
<span class="w">    </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;rag_pipelines.py&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">progress</span><span class="o">:</span><span class="w"> </span><span class="kt">100</span><span class="p">,</span>
<span class="w">    </span><span class="nx">details</span><span class="o">:</span><span class="w"> </span><span class="p">[</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;ChromaDB&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;database&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Pinecone&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;database&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Weaviate&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;database&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;pgvector&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;database&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;ElasticSearch&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;database&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;LlamaIndex&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;framework&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Context Window&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Prompt Engineering&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">    </span><span class="p">],</span>
<span class="w">    </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="p">{</span><span class="w"> </span><span class="nx">text</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Advanced RAG&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;metric&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">  </span><span class="p">},</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">3</span><span class="p">,</span>
<span class="w">    </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;llm_operations.py&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">progress</span><span class="o">:</span><span class="w"> </span><span class="kt">100</span><span class="p">,</span>
<span class="w">    </span><span class="nx">details</span><span class="o">:</span><span class="w"> </span><span class="p">[</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Gemini API&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;model&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;OpenAI GPT&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;model&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Anthropic Claude&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;model&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Structured Output&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;PEFT/LoRA&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Guardrails AI&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;tool&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Function Calling&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Streaming&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">    </span><span class="p">],</span>
<span class="w">    </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="p">{</span><span class="w"> </span><span class="nx">text</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Production LLMs&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;metric&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">  </span><span class="p">},</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">4</span><span class="p">,</span>
<span class="w">    </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;deep_learning.py&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">progress</span><span class="o">:</span><span class="w"> </span><span class="kt">100</span><span class="p">,</span>
<span class="w">    </span><span class="nx">details</span><span class="o">:</span><span class="w"> </span><span class="p">[</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;PyTorch&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;framework&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Transformers&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;model&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Sentence-BERT&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;model&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;ViT&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;model&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;CNNs&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;model&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Mixed Precision&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Transfer Learning&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">    </span><span class="p">],</span>
<span class="w">    </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="p">{</span><span class="w"> </span><span class="nx">text</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Custom Architectures&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;metric&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">  </span><span class="p">},</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">5</span><span class="p">,</span>
<span class="w">    </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;ml_classical.py&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">progress</span><span class="o">:</span><span class="w"> </span><span class="kt">100</span><span class="p">,</span>
<span class="w">    </span><span class="nx">details</span><span class="o">:</span><span class="w"> </span><span class="p">[</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Scikit-learn&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;framework&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;XGBoost&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;framework&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;LightGBM&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;framework&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Feature Engineering&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Time Series&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;SHAP&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;tool&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Hyperparameter Tuning&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">    </span><span class="p">],</span>
<span class="w">    </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="p">{</span><span class="w"> </span><span class="nx">text</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Predictive Modeling&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;metric&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">  </span><span class="p">},</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">6</span><span class="p">,</span>
<span class="w">    </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;fastapi_microservices.py&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">progress</span><span class="o">:</span><span class="w"> </span><span class="kt">100</span><span class="p">,</span>
<span class="w">    </span><span class="nx">details</span><span class="o">:</span><span class="w"> </span><span class="p">[</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;FastAPI&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;framework&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;PostgreSQL&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;database&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;MongoDB&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;database&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Redis&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;database&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;OAuth2&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Async/Await&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;API Design&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">    </span><span class="p">],</span>
<span class="w">    </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="p">{</span><span class="w"> </span><span class="nx">text</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Scalable APIs&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;metric&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">  </span><span class="p">},</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">7</span><span class="p">,</span>
<span class="w">    </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;cloud_native_gcp.sh&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">progress</span><span class="o">:</span><span class="w"> </span><span class="kt">100</span><span class="p">,</span>
<span class="w">    </span><span class="nx">details</span><span class="o">:</span><span class="w"> </span><span class="p">[</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;GCP&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;cloud&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;BigQuery&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;database&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;AWS Bedrock&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;cloud&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Snowflake&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;database&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Kubernetes&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;tool&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Lambda&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;cloud&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Serverless&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">    </span><span class="p">],</span>
<span class="w">    </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="p">{</span><span class="w"> </span><span class="nx">text</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Cloud Architecture&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;metric&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">  </span><span class="p">},</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">8</span><span class="p">,</span>
<span class="w">    </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;devops_mlops.yaml&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">progress</span><span class="o">:</span><span class="w"> </span><span class="kt">100</span><span class="p">,</span>
<span class="w">    </span><span class="nx">details</span><span class="o">:</span><span class="w"> </span><span class="p">[</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Docker&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;tool&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;GitHub Actions&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;tool&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;CI/CD&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;LangSmith&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;tool&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;MLflow&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;tool&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;W&amp;B&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;tool&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Model Monitoring&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">    </span><span class="p">],</span>
<span class="w">    </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="p">{</span><span class="w"> </span><span class="nx">text</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;End-to-End MLOps&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;metric&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">  </span><span class="p">},</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">9</span><span class="p">,</span>
<span class="w">    </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;data_engineering.py&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">progress</span><span class="o">:</span><span class="w"> </span><span class="kt">100</span><span class="p">,</span>
<span class="w">    </span><span class="nx">details</span><span class="o">:</span><span class="w"> </span><span class="p">[</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Pandas&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;tool&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;NumPy&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;tool&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;ETL Pipelines&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Kafka&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;tool&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;RabbitMQ&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;tool&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;GDPR Compliance&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Data Validation&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">    </span><span class="p">],</span>
<span class="w">    </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="p">{</span><span class="w"> </span><span class="nx">text</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Real-Time Pipelines&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;metric&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">  </span><span class="p">},</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">10</span><span class="p">,</span>
<span class="w">    </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;full_stack_dev.tsx&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">progress</span><span class="o">:</span><span class="w"> </span><span class="kt">100</span><span class="p">,</span>
<span class="w">    </span><span class="nx">details</span><span class="o">:</span><span class="w"> </span><span class="p">[</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;React&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;framework&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;TypeScript&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;language&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Next.js&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;framework&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Tailwind CSS&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;tool&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Streamlit&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;tool&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;SSE/WebSockets&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">      </span><span class="p">{</span><span class="w"> </span><span class="nx">name</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Responsive Design&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;concept&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">    </span><span class="p">],</span>
<span class="w">    </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="p">{</span><span class="w"> </span><span class="nx">text</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Interactive UIs&quot;</span><span class="p">,</span><span class="w"> </span><span class="kr">type</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;metric&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">  </span><span class="p">},</span>
<span class="p">];</span>

<span class="c1">// ============================================</span>
<span class="c1">// LEGACY SKILLS DATA (Used by SkillsSection)</span>
<span class="c1">// ============================================</span>

<span class="k">export</span><span class="w"> </span><span class="kd">const</span><span class="w"> </span><span class="nx">skillsData</span><span class="o">:</span><span class="w"> </span><span class="kt">Skill</span><span class="p">[]</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="p">[</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">1</span><span class="p">,</span>
<span class="w">    </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;agentic_systems.py&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">level</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;EXPERT&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">progress</span><span class="o">:</span><span class="w"> </span><span class="kt">100</span><span class="p">,</span>
<span class="w">    </span><span class="nx">details</span><span class="o">:</span><span class="w"> </span><span class="p">[</span><span class="s2">&quot;LangGraph&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;LangChain&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;MCP&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;A2A&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Multi-Agent&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;ReAct&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Reflexion&quot;</span><span class="p">],</span>
<span class="w">    </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Agentic Architect&quot;</span><span class="p">,</span>
<span class="w">  </span><span class="p">},</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">2</span><span class="p">,</span>
<span class="w">    </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;rag_pipelines.py&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">level</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;EXPERT&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">progress</span><span class="o">:</span><span class="w"> </span><span class="kt">100</span><span class="p">,</span>
<span class="w">    </span><span class="nx">details</span><span class="o">:</span><span class="w"> </span><span class="p">[</span><span class="s2">&quot;ChromaDB&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Pinecone&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Weaviate&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;pgvector&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;ElasticSearch&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;LlamaIndex&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Context Window&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Prompt Engineering&quot;</span><span class="p">],</span>
<span class="w">    </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Advanced RAG&quot;</span><span class="p">,</span>
<span class="w">  </span><span class="p">},</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">3</span><span class="p">,</span>
<span class="w">    </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;llm_operations.py&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">level</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;EXPERT&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">progress</span><span class="o">:</span><span class="w"> </span><span class="kt">100</span><span class="p">,</span>
<span class="w">    </span><span class="nx">details</span><span class="o">:</span><span class="w"> </span><span class="p">[</span><span class="s2">&quot;Gemini API&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;OpenAI GPT&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Anthropic Claude&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Structured Output&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;PEFT/LoRA&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Guardrails AI&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Function Calling&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Streaming&quot;</span><span class="p">],</span>
<span class="w">    </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Production LLMs&quot;</span><span class="p">,</span>
<span class="w">  </span><span class="p">},</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">4</span><span class="p">,</span>
<span class="w">    </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;deep_learning.py&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">level</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;EXPERT&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">progress</span><span class="o">:</span><span class="w"> </span><span class="kt">100</span><span class="p">,</span>
<span class="w">    </span><span class="nx">details</span><span class="o">:</span><span class="w"> </span><span class="p">[</span><span class="s2">&quot;PyTorch&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Transformers&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Sentence-BERT&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;ViT&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;CNNs&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Mixed Precision&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Transfer Learning&quot;</span><span class="p">],</span>
<span class="w">    </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Custom Architectures&quot;</span><span class="p">,</span>
<span class="w">  </span><span class="p">},</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">5</span><span class="p">,</span>
<span class="w">    </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;ml_classical.py&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">level</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;EXPERT&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">progress</span><span class="o">:</span><span class="w"> </span><span class="kt">100</span><span class="p">,</span>
<span class="w">    </span><span class="nx">details</span><span class="o">:</span><span class="w"> </span><span class="p">[</span><span class="s2">&quot;Scikit-learn&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;XGBoost&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;LightGBM&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Feature Engineering&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Time Series&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;SHAP&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Hyperparameter Tuning&quot;</span><span class="p">],</span>
<span class="w">    </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Predictive Modeling&quot;</span><span class="p">,</span>
<span class="w">  </span><span class="p">},</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">6</span><span class="p">,</span>
<span class="w">    </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;fastapi_microservices.py&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">level</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;EXPERT&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">progress</span><span class="o">:</span><span class="w"> </span><span class="kt">100</span><span class="p">,</span>
<span class="w">    </span><span class="nx">details</span><span class="o">:</span><span class="w"> </span><span class="p">[</span><span class="s2">&quot;FastAPI&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;PostgreSQL&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;MongoDB&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Redis&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;OAuth2&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Async/Await&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;API Design&quot;</span><span class="p">],</span>
<span class="w">    </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Scalable APIs&quot;</span><span class="p">,</span>
<span class="w">  </span><span class="p">},</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">7</span><span class="p">,</span>
<span class="w">    </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;cloud_native_gcp.sh&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">level</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;EXPERT&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">progress</span><span class="o">:</span><span class="w"> </span><span class="kt">100</span><span class="p">,</span>
<span class="w">    </span><span class="nx">details</span><span class="o">:</span><span class="w"> </span><span class="p">[</span><span class="s2">&quot;GCP&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;BigQuery&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;AWS Bedrock&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Snowflake&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Kubernetes&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Lambda&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Serverless&quot;</span><span class="p">],</span>
<span class="w">    </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Cloud Architecture&quot;</span><span class="p">,</span>
<span class="w">  </span><span class="p">},</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">8</span><span class="p">,</span>
<span class="w">    </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;devops_mlops.yaml&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">level</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;EXPERT&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">progress</span><span class="o">:</span><span class="w"> </span><span class="kt">100</span><span class="p">,</span>
<span class="w">    </span><span class="nx">details</span><span class="o">:</span><span class="w"> </span><span class="p">[</span><span class="s2">&quot;Docker&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;GitHub Actions&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;CI/CD&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;LangSmith&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;MLflow&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;W&amp;B&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Model Monitoring&quot;</span><span class="p">],</span>
<span class="w">    </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;End-to-End MLOps&quot;</span><span class="p">,</span>
<span class="w">  </span><span class="p">},</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">9</span><span class="p">,</span>
<span class="w">    </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;data_engineering.py&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">level</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;EXPERT&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">progress</span><span class="o">:</span><span class="w"> </span><span class="kt">100</span><span class="p">,</span>
<span class="w">    </span><span class="nx">details</span><span class="o">:</span><span class="w"> </span><span class="p">[</span><span class="s2">&quot;Pandas&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;NumPy&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;ETL Pipelines&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Kafka&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;RabbitMQ&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;GDPR Compliance&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Data Validation&quot;</span><span class="p">],</span>
<span class="w">    </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Real-Time Pipelines&quot;</span><span class="p">,</span>
<span class="w">  </span><span class="p">},</span>
<span class="w">  </span><span class="p">{</span>
<span class="w">    </span><span class="nx">id</span><span class="o">:</span><span class="w"> </span><span class="kt">10</span><span class="p">,</span>
<span class="w">    </span><span class="nx">title</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;full_stack_dev.tsx&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">level</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;EXPERT&quot;</span><span class="p">,</span>
<span class="w">    </span><span class="nx">progress</span><span class="o">:</span><span class="w"> </span><span class="kt">100</span><span class="p">,</span>
<span class="w">    </span><span class="nx">details</span><span class="o">:</span><span class="w"> </span><span class="p">[</span><span class="s2">&quot;React&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;TypeScript&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Next.js&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Tailwind CSS&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Streamlit&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;SSE/WebSockets&quot;</span><span class="p">,</span><span class="w"> </span><span class="s2">&quot;Responsive Design&quot;</span><span class="p">],</span>
<span class="w">    </span><span class="nx">highlight</span><span class="o">:</span><span class="w"> </span><span class="s2">&quot;Interactive UIs&quot;</span><span class="p">,</span>
<span class="w">  </span><span class="p">},</span>
<span class="p">];</span>
</code></pre></div>

<h3>src/services/terminalService.ts</h3>
<div class="codehilite"><pre><span></span><code><span class="k">export</span><span class="w"> </span><span class="kd">const</span><span class="w"> </span><span class="nx">terminalCommands</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="nx">help</span><span class="o">:</span><span class="w"> </span><span class="p">()</span><span class="w"> </span><span class="p">=&gt;</span><span class="w"> </span><span class="sb">`Available commands:</span>
<span class="sb">help       - Show this help message</span>
<span class="sb">skills     - Display technical skills and expertise</span>
<span class="sb">contact    - Show contact information</span>
<span class="sb">projects   - List recent projects and research</span>
<span class="sb">about      - Display information about me</span>
<span class="sb">experience - Show career highlights</span>
<span class="sb">education  - Display education and certifications</span>
<span class="sb">clear      - Clear terminal output</span>
<span class="sb">surprise   - Easter egg command</span>
<span class="sb">ls         - List all sections (alias for help)</span>
<span class="sb">whoami     - Display current user info`</span><span class="p">,</span>

<span class="w">    </span><span class="nx">skills</span><span class="o">:</span><span class="w"> </span><span class="p">()</span><span class="w"> </span><span class="p">=&gt;</span><span class="w"> </span><span class="sb">`Technical Skills Matrix:</span>
<span class="sb">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>
<span class="sb">🤖 AI &amp; Agentic Engineering:</span>
<span class="sb">   • LangGraph, LangChain, MCP    [████████████] Expert</span>
<span class="sb">   • RAG Pipelines &amp; Retrieval    [████████████] Expert</span>
<span class="sb">   • PyTorch &amp; Deep Learning      [████████████] Expert</span>
<span class="sb">   • Gemini, GPT-4, LLM APIs      [████████████] Expert</span>
<span class="sb">   • Multi-Agent Systems          [████████████] Expert</span>
<span class="sb">   • Agentic Patterns (ReAct)     [███████████░] Expert</span>

<span class="sb">🏗️  System Architecture:</span>
<span class="sb">   • Microservices &amp; Event-Driven [████████████] Expert</span>
<span class="sb">   • FastAPI &amp; Backend Systems    [████████████] Expert</span>
<span class="sb">   • PostgreSQL, MongoDB, Redis   [████████████] Expert</span>
<span class="sb">   • Cloud-Native Architecture    [████████████] Expert</span>

<span class="sb">☁️  DevOps &amp; Cloud:</span>
<span class="sb">   • Docker/Kubernetes            [████████████] Expert</span>
<span class="sb">   • GCP, AWS                     [███████████░] Expert</span>
<span class="sb">   • CI/CD (GitHub Actions)       [████████████] Expert</span>
<span class="sb">   • BigQuery &amp; Data Engineering  [████████████] Expert</span>

<span class="sb">💻 Full-Stack Development:</span>
<span class="sb">   • Python (Advanced)            [████████████] Expert</span>
<span class="sb">   • React, TypeScript, Next.js   [██████████░░] Advanced</span>
<span class="sb">   • ETL Pipelines                [████████████] Expert</span>

<span class="sb">�‍🏫 Leadership &amp; Education:</span>
<span class="sb">   • Technical Mentoring          [████████████] Expert</span>
<span class="sb">   • Course Design                [████████████] Expert</span>
<span class="sb">   • Team Leadership              [████████████] Expert</span>
<span class="sb">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`</span><span class="p">,</span>

<span class="w">    </span><span class="nx">contact</span><span class="o">:</span><span class="w"> </span><span class="p">()</span><span class="w"> </span><span class="p">=&gt;</span><span class="w"> </span><span class="sb">`Contact Information:</span>
<span class="sb">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>
<span class="sb">📧 Email:    yurii.oksamytnyi@yuriodev.co.uk</span>
<span class="sb">📱 Phone:    +44 7767 336011</span>
<span class="sb">🔗 LinkedIn: linkedin.com/in/y-oks</span>
<span class="sb">💻 GitHub:   github.com/YuriiOks</span>
<span class="sb">🌐 Website:  yuriodev.co.uk</span>
<span class="sb">📍 Location: London, UK</span>

<span class="sb">Available for:</span>
<span class="sb">• AI/ML systems architecture &amp; consulting</span>
<span class="sb">• Agentic workflow design &amp; implementation</span>
<span class="sb">• Production RAG pipeline development</span>
<span class="sb">• Technical leadership &amp; mentoring</span>
<span class="sb">• Speaking engagements &amp; workshops`</span><span class="p">,</span>

<span class="w">    </span><span class="nx">projects</span><span class="o">:</span><span class="w"> </span><span class="p">()</span><span class="w"> </span><span class="p">=&gt;</span><span class="w"> </span><span class="sb">`Featured Projects:</span>
<span class="sb">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>
<span class="sb">🤖 Proactive AI Agent (RAG Prototype)</span>
<span class="sb">   95% retrieval precision (from 30%)</span>
<span class="sb">   &lt;1.2s latency • 100 concurrent users</span>
<span class="sb">   ChromaDB • Gemini 2.0 • MCP Servers</span>

<span class="sb">🚀 SaleSphereAI (Multi-Agent Platform)</span>
<span class="sb">   200% sales conversion increase</span>
<span class="sb">   5-agent system • LangGraph orchestration</span>
<span class="sb">   FastAPI • PostgreSQL • Redis</span>

<span class="sb">📄 Resume Parsing Platform (HR Tech)</span>
<span class="sb">   93% F1 score • 75% time-to-hire reduction</span>
<span class="sb">   PyTorch • Gemini API • LlamaIndex</span>
<span class="sb">   10K+ resumes processed monthly</span>

<span class="sb">🏠 Property Valuation (PropTech)</span>
<span class="sb">   94% accuracy • 100M+ records • GCP</span>
<span class="sb">   BigQuery • ×50 faster data loading</span>
<span class="sb">   500K+ properties valued</span>

<span class="sb">📚 Agentic Research Assistant</span>
<span class="sb">   200+ papers analyzed in &lt;30 min</span>
<span class="sb">   LangGraph • ChromaDB • PyMuPDF</span>
<span class="sb">   88% extraction accuracy</span>

<span class="sb">🐍 Automated Python Course</span>
<span class="sb">   github.com/YurioDev/Python-Course</span>
<span class="sb">   1000+ students • 25+ modules</span>
<span class="sb">   CI/CD grading • Open source</span>

<span class="sb">Type &#39;projects --details &lt;name&gt;&#39; for more info`</span><span class="p">,</span>

<span class="w">    </span><span class="nx">about</span><span class="o">:</span><span class="w"> </span><span class="p">()</span><span class="w"> </span><span class="p">=&gt;</span><span class="w"> </span><span class="sb">`About Yurii Oksamytnyi:</span>
<span class="sb">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>
<span class="sb">👨‍💻 AI/ML Systems Engineer | Agentic Architect</span>
<span class="sb">🎓 MLX Applied Machine Learning Graduate</span>
<span class="sb">📊 8+ years building production AI systems</span>
<span class="sb">📍 Based in London, UK</span>

<span class="sb">Mission: Democratizing AI/ML education through</span>
<span class="sb">hands-on platforms and production-grade systems.</span>

<span class="sb">Current Focus: Architecting agentic workflows,</span>
<span class="sb">RAG pipelines, and YuriODev educational platform.</span>

<span class="sb">Track Record:</span>
<span class="sb">• 95% retrieval precision (from 30% baseline)</span>
<span class="sb">• ×50 data latency reduction (PropTech)</span>
<span class="sb">• &gt;90% F1 on production models</span>
<span class="sb">• 200% sales conversion (SaleSphereAI)</span>
<span class="sb">• 1000+ students reached globally</span>

<span class="sb">Specialization: Agentic systems (LangGraph, MCP),</span>
<span class="sb">production RAG pipelines, multi-agent orchestration,</span>
<span class="sb">cloud-native ML platforms.`</span><span class="p">,</span>

<span class="w">    </span><span class="nx">experience</span><span class="o">:</span><span class="w"> </span><span class="p">()</span><span class="w"> </span><span class="p">=&gt;</span><span class="w"> </span><span class="sb">`Career Highlights:</span>
<span class="sb">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>
<span class="sb">💼 Lead AI Engineer &amp; Systems Designer</span>
<span class="sb">   Apr 2022 - Present | Independent (Consultant)</span>
<span class="sb">   • Built RAG systems with 95% precision</span>
<span class="sb">   • Architected multi-agent platforms</span>
<span class="sb">   • Deployed HR Tech &amp; PropTech ML systems</span>
<span class="sb">   • Consulted for JPMorgan, Bloomberg</span>

<span class="sb">💼 Lead Data Scientist</span>
<span class="sb">   Mar 2022 - Oct 2022 | Ministry of Health Ukraine</span>
<span class="sb">   • Healthcare analytics (&gt;90% F1 score)</span>
<span class="sb">   • GDPR-compliant ML pipelines</span>
<span class="sb">   • Millions of patient records processed</span>

<span class="sb">💼 Senior ML Engineer</span>
<span class="sb">   Jan 2021 - Feb 2022 | Forecys (FinTech)</span>
<span class="sb">   • Financial forecasting models</span>
<span class="sb">   • Real-time fraud detection</span>
<span class="sb">   • 60% latency reduction</span>

<span class="sb">💼 Technical Lead &amp; Mentor</span>
<span class="sb">   Sep 2014 - Present | YuriODev Initiative</span>
<span class="sb">   • Created 25+ module Python course</span>
<span class="sb">   • 1000+ students across 20+ countries</span>
<span class="sb">   • Automated CI/CD grading system</span>

<span class="sb">Type &#39;education&#39; for academic background`</span><span class="p">,</span>

<span class="w">    </span><span class="nx">education</span><span class="o">:</span><span class="w"> </span><span class="p">()</span><span class="w"> </span><span class="p">=&gt;</span><span class="w"> </span><span class="sb">`Education &amp; Certifications:</span>
<span class="sb">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>
<span class="sb">🎓 MLX Applied Machine Learning Certificate</span>
<span class="sb">   Apr 2025 - May 2025 | MLX Program</span>
<span class="sb">   Advanced ML systems, RAG, multi-agent workflows</span>

<span class="sb">🎓 MSc Artificial Intelligence</span>
<span class="sb">   2016 - 2018 | Queen Mary, University of London</span>
<span class="sb">   Deep Learning, NLP, Computer Vision</span>
<span class="sb">   Distinction with published research</span>

<span class="sb">🎓 BSc Computer Science</span>
<span class="sb">   2012 - 2016 | MIPT (Moscow Institute)</span>
<span class="sb">   Honors (GPA: 4.8/5.0)</span>
<span class="sb">   ACM ICPC regional medals</span>

<span class="sb">📚 Teaching Experience:</span>
<span class="sb">   • MIPT Instructor (2014-2016)</span>
<span class="sb">   • YuriODev Course Creator (2023-Present)</span>
<span class="sb">   • 1000+ students mentored</span>

<span class="sb">Type &#39;about&#39; to see current focus areas`</span><span class="p">,</span>

<span class="w">    </span><span class="nx">clear</span><span class="o">:</span><span class="w"> </span><span class="p">()</span><span class="w"> </span><span class="p">=&gt;</span><span class="w"> </span><span class="s1">&#39;CLEAR_TERMINAL&#39;</span><span class="p">,</span>

<span class="w">    </span><span class="nx">surprise</span><span class="o">:</span><span class="w"> </span><span class="p">()</span><span class="w"> </span><span class="p">=&gt;</span><span class="w"> </span><span class="sb">`</span>
<span class="sb">    ╔══════════════════════════════════════╗</span>
<span class="sb">    ║        🎉 EASTER EGG UNLOCKED! 🎉     ║</span>
<span class="sb">    ╠══════════════════════════════════════╣</span>
<span class="sb">    ║                                      ║</span>
<span class="sb">    ║  You&#39;ve discovered the secret menu!  ║</span>
<span class="sb">    ║                                      ║</span>
<span class="sb">    ║  🤖 AI Fact: RAG systems combine     ║</span>
<span class="sb">    ║     retrieval with generation for    ║</span>
<span class="sb">    ║     knowledge-grounded responses     ║</span>
<span class="sb">    ║                                      ║</span>
<span class="sb">    ║  🧠 Fun Fact: I improved retrieval   ║</span>
<span class="sb">    ║     precision from 30% to 95% using  ║</span>
<span class="sb">    ║     hybrid search strategies         ║</span>
<span class="sb">    ║                                      ║</span>
<span class="sb">    ║  🚀 Secret: Building agentic AI      ║</span>
<span class="sb">    ║     systems with LangGraph &amp; MCP     ║</span>
<span class="sb">    ║     for production deployments       ║</span>
<span class="sb">    ║                                      ║</span>
<span class="sb">    ║  💡 Tip: Multi-agent systems can     ║</span>
<span class="sb">    ║     achieve 200%+ conversion gains   ║</span>
<span class="sb">    ║     with proper orchestration        ║</span>
<span class="sb">    ║                                      ║</span>
<span class="sb">    ╚══════════════════════════════════════╝</span>

<span class="sb">    Type &#39;help&#39; to return to normal commands.`</span><span class="p">,</span>

<span class="w">    </span><span class="nx">ls</span><span class="o">:</span><span class="w"> </span><span class="p">()</span><span class="w"> </span><span class="p">=&gt;</span><span class="w"> </span><span class="nx">terminalCommands</span><span class="p">.</span><span class="nx">help</span><span class="p">(),</span>

<span class="w">    </span><span class="nx">whoami</span><span class="o">:</span><span class="w"> </span><span class="p">()</span><span class="w"> </span><span class="p">=&gt;</span><span class="w"> </span><span class="sb">`visitor@yuriodev</span>
<span class="sb">Current session: Guest user exploring YuriODev</span>
<span class="sb">Access level: Public portfolio viewer</span>
<span class="sb">Interested in: Production AI/ML systems &amp; education</span>
<span class="sb">Type &#39;contact&#39; to discuss collaboration! 🚀`</span>
<span class="p">};</span>
</code></pre></div>

<h3>tsconfig.json</h3>
<div class="codehilite"><pre><span></span><code><span class="p">{</span>
<span class="w">  </span><span class="nt">&quot;files&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">[],</span>
<span class="w">  </span><span class="nt">&quot;references&quot;</span><span class="p">:</span><span class="w"> </span><span class="p">[</span>
<span class="w">    </span><span class="p">{</span><span class="w"> </span><span class="nt">&quot;path&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;./tsconfig.app.json&quot;</span><span class="w"> </span><span class="p">},</span>
<span class="w">    </span><span class="p">{</span><span class="w"> </span><span class="nt">&quot;path&quot;</span><span class="p">:</span><span class="w"> </span><span class="s2">&quot;./tsconfig.node.json&quot;</span><span class="w"> </span><span class="p">}</span>
<span class="w">  </span><span class="p">]</span>
<span class="p">}</span>
</code></pre></div>

<h3>vite.config.js</h3>
<div class="codehilite"><pre><span></span><code><span class="k">import</span><span class="w"> </span><span class="p">{</span><span class="w"> </span><span class="nx">defineConfig</span><span class="w"> </span><span class="p">}</span><span class="w"> </span><span class="kr">from</span><span class="w"> </span><span class="s1">&#39;vite&#39;</span><span class="p">;</span>
<span class="k">import</span><span class="w"> </span><span class="nx">react</span><span class="w"> </span><span class="kr">from</span><span class="w"> </span><span class="s1">&#39;@vitejs/plugin-react&#39;</span><span class="p">;</span>
<span class="c1">// https://vite.dev/config/</span>
<span class="k">export</span><span class="w"> </span><span class="k">default</span><span class="w"> </span><span class="nx">defineConfig</span><span class="p">({</span>
<span class="w">    </span><span class="nx">plugins</span><span class="o">:</span><span class="w"> </span><span class="p">[</span><span class="nx">react</span><span class="p">()],</span>
<span class="p">});</span>
</code></pre></div>

<h3>vite.config.ts</h3>
<div class="codehilite"><pre><span></span><code><span class="k">import</span><span class="w"> </span><span class="p">{</span><span class="w"> </span><span class="nx">defineConfig</span><span class="w"> </span><span class="p">}</span><span class="w"> </span><span class="kr">from</span><span class="w"> </span><span class="s1">&#39;vite&#39;</span>
<span class="k">import</span><span class="w"> </span><span class="nx">react</span><span class="w"> </span><span class="kr">from</span><span class="w"> </span><span class="s1">&#39;@vitejs/plugin-react&#39;</span>

<span class="c1">// https://vite.dev/config/</span>
<span class="k">export</span><span class="w"> </span><span class="k">default</span><span class="w"> </span><span class="nx">defineConfig</span><span class="p">({</span>
<span class="w">  </span><span class="nx">plugins</span><span class="o">:</span><span class="w"> </span><span class="p">[</span><span class="nx">react</span><span class="p">()],</span>
<span class="p">})</span>
</code></pre></div>

<p>⚠️ Only showing 20 files to avoid excessive output size.</p>
            </div>
            <footer>
                <p class="timestamp">Generated on: 2025-10-19 18:41:09</p>
                <p>Created with Project Documentation Generator</p>
            </footer>
        </body>
        </html>
        
```

### README.md

```markdown
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

```

### community.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Community - YuriODev (Coming Soon)</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/pages/community.tsx"></script>
  </body>
</html>

```

### courses.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Courses - YuriODev (Coming Soon)</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/pages/courses.tsx"></script>
  </body>
</html>

```

### dashboard.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dashboard - YuriODev (Coming Soon)</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/pages/dashboard.tsx"></script>
  </body>
</html>

```

### eslint.config.js

```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])

```

### index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>yuriodev-portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

### package.json

```json
{
  "name": "yuriodev-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.9.4"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/node": "^24.6.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.45.0",
    "vite": "^7.1.7"
  }
}

```

### src/App.css

```css
/* App Layout */
#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding-bottom: 2rem;
}

/* Sections take full width, content wrappers handle constraints */
main section {
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

```

### src/App.tsx

```tsx
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PageLayout from './components/layout/PageLayout/PageLayout';
import LoadingScreen from './components/ui/LoadingScreen/LoadingScreen';
import Portfolio from './pages/portfolio';
import Community from './pages/community';
import Courses from './pages/courses';
import Dashboard from './pages/dashboard';
import Agent from './pages/agent';
import './App.css';

function AppContent() {
  const location = useLocation();
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Check if app has been loaded before in this session
    const hasLoaded = sessionStorage.getItem('appLoaded');
    
    if (hasLoaded === 'true') {
      // Skip loading screen if already shown this session
      setIsInitialLoad(false);
      setLoadingComplete(true);
      document.body.style.overflow = ''; // Ensure scroll is enabled
    } else {
      // First visit this session - show loading screen
      setIsInitialLoad(true);
      setLoadingComplete(false);
      document.body.style.overflow = 'hidden'; // Prevent scrolling during load
    }
  }, []);

  const handleLoadingComplete = () => {
    // Mark as loaded in sessionStorage
    sessionStorage.setItem('appLoaded', 'true');
    setLoadingComplete(true);
    setIsInitialLoad(false);
    
    // Re-enable scrolling
    document.body.style.overflow = '';
    
    // Console message
    console.log('%c$ ./initialize_yuriodev --status=complete', 'color: #FFC107; font-family: "Fira Code", monospace; font-weight: 600;');
    console.log('%c✓ Portfolio loaded successfully', 'color: #00ff88; font-family: "Fira Code", monospace;');
  };

  // Show ONLY loading screen without any layout wrapper
  if (isInitialLoad && !loadingComplete) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }
  
  return (
    <PageLayout currentPath={location.pathname}>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/community" element={<Community />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assistant" element={<Agent />} />
      </Routes>
    </PageLayout>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App

```

### src/assets/styles/_variables.css

```css
:root {
            /* Layout */
            --content-max-width: 75%;
            
            /* Dark Mode (Default Theme) */
            --bg-primary: #0a0f1c;
            --bg-secondary: rgba(10, 15, 28, 0.95);
            --bg-card: rgba(10, 15, 28, 0.9);
            --bg-card-rgb-val: 10, 15, 28;

            --text-primary: #00d4ff;
            --text-secondary: #cbd5e1;
            --text-muted: #6b7280;
            --text-on-accent-bg: #0a0f1c;
            --text-on-light-bg: #1e293b;

            --accent-primary: #00d4ff;
            --accent-primary-rgb: 0, 212, 255;
            --accent-secondary: #FFC107;
            --accent-secondary-rgb: 255, 193, 7;
            --accent-tertiary: #008080;
            --accent-tertiary-rgb: 0, 128, 128;
            --accent-quaternary: #c084fc;
            --accent-quaternary-rgb: 192, 132, 252;

            --border-color: #00d4ff;
            --border-color-muted: rgba(var(--accent-primary-rgb), 0.3);
            --border-card: var(--accent-primary);

            --success: #00ff88;
            --success-rgb: 0, 255, 136;
            --warning-color: var(--accent-secondary);

            --glow-primary: rgba(var(--accent-primary-rgb), 0.5);
            --glow-secondary: rgba(var(--accent-secondary-rgb), 0.5);
            --glow-tertiary: rgba(var(--accent-tertiary-rgb), 0.5);

            --section-shaded-bg: rgba(var(--accent-primary-rgb), 0.03);
            --section-shaded-border: rgba(var(--accent-primary-rgb), 0.15);
            --section-hero-bg-gradient: radial-gradient(circle at center, rgba(var(--accent-primary-rgb), 0.05) 0%, transparent 60%);

            --button-nav-bg: rgba(var(--accent-primary-rgb), 0.1);
            --button-nav-text: var(--accent-primary);
            --button-nav-border: var(--accent-primary);
            --button-nav-hover-bg: rgba(var(--accent-secondary-rgb), 0.2);
            --button-nav-hover-text: var(--accent-secondary);
            --button-nav-hover-border: var(--accent-secondary);
            --button-nav-hover-shadow: var(--glow-secondary);

            --nav-link-text: var(--text-muted);
            --nav-link-bg-hover: rgba(var(--accent-primary-rgb), 0.1);
            --nav-link-border-hover: var(--accent-primary);
            --nav-link-text-hover: var(--accent-primary);
            --nav-link-bg-active: rgba(var(--accent-secondary-rgb), 0.1);
            --nav-link-border-active: var(--accent-secondary);
            --nav-link-text-active: var(--accent-secondary);
            --nav-link-shadow-active: var(--glow-secondary);

            --cta-button-bg: rgba(var(--accent-primary-rgb), 0.1);
            --cta-button-text: var(--accent-primary);
            --cta-button-border: var(--accent-primary);
            --cta-button-hover-bg: rgba(var(--accent-secondary-rgb), 0.2);
            --cta-button-hover-text: var(--accent-secondary);
            --cta-button-hover-border: var(--accent-secondary);
            --cta-button-hover-shadow: var(--glow-secondary);

            --contact-link-bg: rgba(var(--accent-primary-rgb), 0.1);
            --contact-link-text: var(--accent-primary);
            --contact-link-border: var(--accent-primary);
            --contact-link-hover-bg: rgba(var(--accent-secondary-rgb), 0.2);
            --contact-link-hover-text: var(--accent-secondary);
            --contact-link-hover-border: var(--accent-secondary);
            --contact-link-hover-shadow: var(--glow-secondary);

            --json-key-color: #33f0c8;
            --hero-title-shadow: 0 0 30px var(--glow-primary), 0 0 10px var(--glow-primary);
            --scanline-base-color-rgb: var(--accent-primary-rgb);
            --card-shadow: 0 0 20px var(--glow-primary);
            --header-border-bottom-color: var(--accent-primary);
        }

        [data-theme="light"] {
            --bg-primary: #f8fafc;
            --bg-secondary: rgba(255, 255, 255, 0.95);
            --bg-card: rgba(255, 255, 255, 0.9);
            --bg-card-rgb-val: 248, 250, 252;

            --text-primary: #1e293b;
            --text-secondary: #475569;
            --text-muted: #94a3b8;
            --text-on-accent-bg: #ffffff;
            --text-on-light-bg: #1e293b;

            --accent-primary: #0059b3;
            --accent-primary-rgb: 0, 89, 179;
            --accent-secondary: #d97706;
            --accent-secondary-rgb: 217, 119, 6;
            --accent-tertiary: #0d9488;
            --accent-tertiary-rgb: 13, 148, 136;
            --accent-quaternary: #a855f7;
            --accent-quaternary-rgb: 168, 85, 247;

            --border-color: #e2e8f0;
            --border-color-muted: #e2e8f0;
            --border-card: var(--border-color);

            --success: #059669;
            --success-rgb: 5, 150, 105;
            --warning-color: var(--accent-secondary);

            --glow-primary: rgba(var(--accent-primary-rgb), 0.4);
            --glow-secondary: rgba(var(--accent-secondary-rgb), 0.4);
            --glow-tertiary: rgba(var(--accent-tertiary-rgb), 0.4);

            --section-shaded-bg: rgba(var(--accent-primary-rgb), 0.03);
            --section-shaded-border: rgba(var(--accent-primary-rgb), 0.15);
            --section-hero-bg-gradient: radial-gradient(circle at center, rgba(var(--accent-primary-rgb), 0.04) 0%, transparent 60%);

            --button-nav-bg: rgba(var(--accent-secondary-rgb), 0.1);
            --button-nav-text: var(--accent-secondary);
            --button-nav-border: var(--accent-secondary);
            --button-nav-hover-bg: var(--accent-secondary);
            --button-nav-hover-text: var(--text-on-accent-bg);
            --button-nav-hover-border: var(--accent-secondary);
            --button-nav-hover-shadow: var(--glow-secondary);

            --nav-link-text: var(--text-muted);
            --nav-link-bg-hover: rgba(var(--accent-primary-rgb), 0.1);
            --nav-link-border-hover: var(--accent-primary);
            --nav-link-text-hover: var(--accent-primary);
            --nav-link-bg-active: rgba(var(--accent-secondary-rgb), 0.1);
            --nav-link-border-active: var(--accent-secondary);
            --nav-link-text-active: var(--accent-secondary);
            --nav-link-shadow-active: var(--glow-secondary);

            --cta-button-bg: #ffffff;
            --cta-button-text: var(--accent-secondary);
            --cta-button-border: var(--accent-secondary);
            --cta-button-hover-bg: var(--accent-secondary);
            --cta-button-hover-text: var(--text-on-accent-bg);
            --cta-button-hover-border: var(--accent-secondary);
            --cta-button-hover-shadow: var(--glow-secondary);

            --contact-link-bg: #ffffff;
            --contact-link-text: var(--accent-secondary);
            --contact-link-border: var(--accent-secondary);
            --contact-link-hover-bg: var(--accent-secondary);
            --contact-link-hover-text: var(--text-on-accent-bg);
            --contact-link-hover-border: var(--accent-secondary);
            --contact-link-hover-shadow: var(--glow-secondary);

            --json-key-color: #075985;
            --hero-title-shadow: 0 0 25px var(--glow-secondary), 0 0 8px var(--glow-primary);
            --scanline-base-color-rgb: var(--accent-primary-rgb);
            --card-shadow: 0 2px 8px rgba(var(--accent-secondary-rgb), 0.15), 0 0 20px var(--glow-secondary);
            --header-border-bottom-color: var(--accent-secondary);
        }
```

### src/assets/styles/global.css

```css
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');

* { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
}

html {
    scroll-behavior: smooth;
    overflow-x: hidden;
}

body {
    font-family: 'Fira Code', monospace;
    background: var(--bg-primary);
    color: var(--text-primary);
    overflow-x: hidden;
    cursor: default;
    transition: background 0.3s ease, color 0.3s ease;
    width: 100%;
    max-width: 100vw;
}

main {
    overflow-x: hidden;
    width: 100%;
}

/* Dynamic alternating section backgrounds */
main > section:nth-child(even) {
    background: var(--section-shaded-bg);
    border-top: 1px solid var(--section-shaded-border);
    border-bottom: 1px solid var(--section-shaded-border);
}

main > section:nth-child(odd) {
    background: transparent;
}

/* Light theme alternating sections */
[data-theme="light"] main > section:nth-child(even) {
    background: rgba(var(--accent-secondary-rgb), 0.03);
    border-top: 1px solid rgba(var(--accent-secondary-rgb), 0.1);
    border-bottom: 1px solid rgba(var(--accent-secondary-rgb), 0.1);
}

[data-theme="light"] main > section:nth-child(odd) {
    background: transparent;
}

/* Ensure all images and media are responsive */
img, video, canvas {
    max-width: 100%;
    height: auto;
}

/* Prevent text overflow */
h1, h2, h3, h4, h5, h6, p {
    word-wrap: break-word;
    overflow-wrap: break-word;
}

/* Section title styles - h2 with # prefix and gradient underline */
h2 {
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 30px;
}

h2::before {
    content: '# ';
    color: var(--accent-secondary);
}

/* Dark theme - cyan # prefix and golden/yellow title text */
[data-theme="dark"] h2 {
    color: var(--accent-secondary);
}

[data-theme="dark"] h2::before {
    color: var(--accent-primary);
}

h2::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent-primary), var(--accent-secondary), transparent);
}

/* Theme-specific background patterns */
[data-theme="dark"] body {
    background: var(--bg-primary);
}

[data-theme="light"] body {
    background: #ffffff;
}

/* Hide sidebar on mobile screens - matches React component logic (992px) */
@media (max-width: 1010px) {
  aside[role="navigation"],
  nav[aria-label="Section navigation"],
  #leftSidebarNav,
  [class*="LeftSidebar"],
  [class*="leftSidebarNav"] {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }
}

```

### src/components/layout/Footer/Footer.module.css

```css
.terminalFooter {
    background: var(--bg-secondary);
    border-top: 2px solid var(--header-border-bottom-color);
    padding: 1.5rem 2rem 1rem;
    font-family: 'Fira Code', monospace;
    margin-top: auto;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    position: relative;
    z-index: 10;
    width: 100%;
    box-sizing: border-box;
}

.footerContent {
    max-width: var(--content-max-width);
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

/* Main Footer Row */
.footerMain {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--border-color-muted);
    min-height: 60px;
}

/* Left: Contact */
.footerLeft {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    justify-content: center;
    flex: 1;
    min-width: 0;
    order: 1;
}

.emailLink {
    color: var(--accent-primary);
    text-decoration: none;
    font-size: 0.85rem;
    transition: all 0.3s ease;
}

.emailLink:hover {
    color: var(--accent-tertiary);
    text-shadow: 0 0 8px var(--glow-primary);
}

[data-theme="light"] .emailLink {
    color: var(--accent-secondary);
}

[data-theme="light"] .emailLink:hover {
    color: var(--accent-primary);
    text-shadow: none;
}

.location {
    color: var(--text-muted);
    font-size: 0.8rem;
}

/* Center: Social Icons */
.socialIcons {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    background: rgba(var(--accent-primary-rgb), 0.05);
    border: 1px solid rgba(var(--accent-primary-rgb), 0.15);
    border-radius: 50px;
    backdrop-filter: blur(5px);
    flex-shrink: 0;
    order: 2;
}

[data-theme="light"] .socialIcons {
    background: rgba(var(--accent-secondary-rgb), 0.05);
    border-color: rgba(var(--accent-secondary-rgb), 0.15);
}

.socialIcon {
    width: 20px;
    height: 20px;
    text-decoration: none;
    transition: all 0.3s ease;
    opacity: 0.65;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--text-primary);
}

.socialIcon svg {
    width: 100%;
    height: 100%;
    display: block;
}

.socialIcon:hover {
    opacity: 1;
    transform: translateY(-3px) scale(1.15);
    color: var(--accent-primary);
    filter: drop-shadow(0 0 8px var(--glow-primary));
}

[data-theme="light"] .socialIcon:hover {
    color: var(--accent-secondary);
}

/* Right: Copyright & Tech */
.footerRight {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    align-items: flex-end;
    justify-content: center;
    flex: 1;
    min-width: 0;
    text-align: right;
    order: 3;
}

.copyright {
    color: var(--text-muted);
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.3px;
}

.brand {
    color: var(--accent-primary);
    font-weight: 600;
    text-shadow: 0 0 10px var(--glow-primary);
}

[data-theme="light"] .brand {
    color: var(--accent-secondary);
    text-shadow: none;
    font-weight: 700;
}

.tech {
    color: var(--text-muted);
    font-size: 0.75rem;
    opacity: 0.8;
    font-family: 'Fira Code', monospace;
}

.techHighlight {
    color: var(--accent-tertiary);
    font-weight: 600;
    padding: 0.1rem 0.3rem;
    background: rgba(var(--accent-tertiary-rgb), 0.1);
    border-radius: 3px;
    transition: all 0.3s ease;
}

[data-theme="light"] .techHighlight {
    color: var(--accent-primary);
    background: rgba(var(--accent-primary-rgb), 0.1);
}

.techHighlight:hover {
    background: rgba(var(--accent-tertiary-rgb), 0.2);
}

[data-theme="light"] .techHighlight:hover {
    background: rgba(var(--accent-primary-rgb), 0.2);
}

/* Status Line */
.statusLine {
    text-align: center;
    padding-top: 0.5rem;
}

.statusText {
    color: var(--text-muted);
    font-size: 0.75rem;
    font-family: 'Fira Code', monospace;
}

.statusSuccess {
    color: var(--accent-tertiary);
    font-weight: 600;
}

[data-theme="light"] .statusSuccess {
    color: var(--accent-secondary);
}

/* Responsive Design */
/* Stack footer when content would overflow 75% constraint
   Calculation: If viewport < ~1200px, the 3 footer sections won't fit in 75% width
   Formula: 75% of screen needs to fit: ~250px (left) + ~300px (center) + ~250px (right) + gaps
   Total needed: ~850px / 0.75 = ~1133px minimum viewport
*/
@media (max-width: 1200px) {
    .footerMain {
        flex-direction: column;
        gap: 1.5rem;
        text-align: center;
        align-items: center;
    }

    /* Stack order: Social Icons -> Email/Location -> Copyright/Tech */
    .socialIcons {
        order: 1;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
    }

    .footerLeft {
        order: 2;
        align-items: center;
        width: 100%;
    }

    .footerRight {
        order: 3;
        align-items: center;
        text-align: center;
        width: 100%;
    }
}

@media (max-width: 768px) {
    .terminalFooter {
        padding: 1.25rem 1.5rem 0.75rem;
    }

    .socialIcons {
        gap: 1rem;
        padding: 0.4rem 0.8rem;
    }

    .socialIcon {
        width: 18px;
        height: 18px;
    }

    .emailLink,
    .copyright {
        font-size: 0.8rem;
    }

    .tech {
        font-size: 0.7rem;
    }

    .techHighlight {
        padding: 0.08rem 0.25rem;
        font-size: 0.7rem;
    }

    .location,
    .statusText {
        font-size: 0.7rem;
    }
}

@media (max-width: 576px) {
    .terminalFooter {
        padding: 1rem 1rem 0.75rem;
    }

    .footerMain {
        gap: 1rem;
    }

    .socialIcons {
        gap: 0.75rem;
        padding: 0.35rem 0.7rem;
        max-width: 100%;
        overflow-x: auto;
        scrollbar-width: none;
    }

    .socialIcons::-webkit-scrollbar {
        display: none;
    }

    .socialIcon {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
    }

    .emailLink,
    .copyright {
        font-size: 0.75rem;
    }

    .tech {
        font-size: 0.68rem;
    }

    .techHighlight {
        padding: 0.05rem 0.2rem;
        font-size: 0.68rem;
    }
}

```

### src/components/layout/Footer/Footer.tsx

```tsx
import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub YuriODev', url: 'https://github.com/YuriODev', icon: 'github', label: 'GitHub YuriODev' },
    { name: 'GitHub YuriiOks', url: 'https://github.com/YuriiOks', icon: 'github-alt', label: 'GitHub YuriiOks' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/y-oks', icon: 'linkedin', label: 'LinkedIn' },
    { name: 'Discord', url: 'https://discord.gg/2UK3cKDd2s', icon: 'discord', label: 'Discord Community' },
    { name: 'X', url: 'https://x.com/YuriODev', icon: 'x', label: 'X (Twitter)' },
    { name: 'Medium', url: 'https://medium.com/@YuriODev', icon: 'medium', label: 'Medium' },
    { name: 'Instagram', url: 'https://www.instagram.com/yuriodev/', icon: 'instagram', label: 'Instagram' },
    { name: 'Threads', url: 'https://www.threads.com/yuriodev/', icon: 'threads', label: 'Threads' },
    { name: 'Twitch', url: 'https://twitch.com/YuriODev', icon: 'twitch', label: 'Twitch' },
    { name: 'Patreon', url: 'https://patreon.com/YuriODev', icon: 'patreon', label: 'Patreon' },
    { name: 'Coffee', url: 'https://buymeacoffee.com/yuriodev', icon: 'coffee', label: 'Buy Me a Coffee' },
  ];

  const getIconSvg = (iconName: string): React.ReactElement => {
    const icons: Record<string, React.ReactElement> = {
      'github': (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      'github-alt': (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          <circle cx="12" cy="12" r="2" fill="var(--accent-tertiary)"/>
        </svg>
      ),
      'linkedin': (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      'x': (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      'medium': (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
      ),
      'instagram': (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
        </svg>
      ),
      'threads': (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.704-1.44 0-2.639-.544-3.467-1.57-.829-1.025-1.286-2.454-1.286-4.022 0-1.739.602-3.174 1.645-3.927C10.03 7.9 11.204 7.5 12.5 7.5c.474 0 .978.034 1.493.103a11.256 11.256 0 011.92.388l-.634 1.88c-.346-.096-.737-.18-1.163-.249a8.631 8.631 0 00-1.235-.09c-.919 0-1.683.27-2.27.802-.588.533-.88 1.25-.88 2.137 0 .938.275 1.678.822 2.203.547.525 1.256.789 2.106.789 1.006 0 1.81-.355 2.39-1.055.414-.5.706-1.163.867-1.987-.934-.478-1.74-1.1-2.4-1.85-.66-.75-.99-1.623-.99-2.604 0-.904.292-1.638.873-2.19.581-.551 1.33-.827 2.237-.827.666 0 1.273.2 1.809.596.535.395.956.948 1.249 1.644 1.01-.1 1.9.077 2.652.527.995.596 1.591 1.548 1.774 2.834.045.317.068.642.068.974 0 1.868-.705 3.469-2.099 4.767-1.65 1.538-3.748 2.141-6.568 2.16z"/>
        </svg>
      ),
      'twitch': (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
        </svg>
      ),
      'patreon': (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.386.524c-4.764 0-8.64 3.876-8.64 8.64 0 4.75 3.876 8.613 8.64 8.613 4.75 0 8.614-3.864 8.614-8.613C24 4.4 20.136.524 15.386.524M.003 23.537h4.22V.524H.003"/>
        </svg>
      ),
      'discord': (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      ),
      'coffee': (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z"/>
        </svg>
      )
    };
    return icons[iconName] || icons['github'];
  };

  return (
    <footer className={styles.terminalFooter} role="contentinfo">
      <div className={styles.footerContent}>
        {/* Main Footer Row */}
        <div className={styles.footerMain}>
          {/* Left: Contact */}
          <div className={styles.footerLeft}>
            <a href="mailto:yurii.oksamytnyi@yuriodev.co.uk" className={styles.emailLink}>
              📧 yurii.oksamytnyi@yuriodev.co.uk
            </a>
            <span className={styles.location}>📍 London, UK</span>
          </div>

          {/* Center: Social Icons */}
          <div className={styles.socialIcons}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label={link.label}
                title={link.label}
              >
                {getIconSvg(link.icon)}
              </a>
            ))}
          </div>

          {/* Right: Copyright & Tech */}
          <div className={styles.footerRight}>
            <span className={styles.copyright}>
              © {currentYear} <span className={styles.brand}>YuriODev</span>
            </span>
            <span className={styles.tech}>
              Built with <span className={styles.techHighlight}>React</span> + <span className={styles.techHighlight}>TypeScript</span> + <span className={styles.techHighlight}>Vite</span>
            </span>
          </div>
        </div>

        {/* Terminal Status Line */}
        <div className={styles.statusLine}>
          <span className={styles.statusText}>
            exit_code: <span className={styles.statusSuccess}>0</span> | 
            status: <span className={styles.statusSuccess}>success</span> | 
            powered by ☕ and 💡
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

```

### src/components/layout/Header/Header.module.css

```css
.terminalHeader {
    background: var(--bg-secondary);
    border-bottom: 2px solid var(--header-border-bottom-color);
    padding: 0.75rem 1.5rem;
    font-family: 'Fira Code', monospace;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1000;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    box-sizing: border-box;
}

.terminalNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    flex-wrap: nowrap;
    max-width: var(--content-max-width);
    width: 100%;
    margin: 0 auto;
}

.terminalPrompt {
    color: var(--accent-primary);
    font-weight: 700;
    font-size: 1rem;
    text-shadow: 0 0 10px var(--glow-primary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 1;
    min-width: 0;
}

[data-theme="light"] .terminalPrompt {
    color: var(--accent-secondary);
    text-shadow: none;
}

.cursor {
    animation: blink 1s infinite;
}

@keyframes blink {
    0%,50% {opacity:1;}
    51%,100% {opacity:0;}
}

.navControls {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: nowrap;
    flex-shrink: 0;
}

.themeToggle, .mobileMenuToggle, .helpToggle {
    border-radius: 6px;
    font-family: 'Fira Code', monospace;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    cursor: pointer;
    background: var(--button-nav-bg);
    border: 2px solid var(--button-nav-border);
    color: var(--button-nav-text);
    box-shadow: none;
    outline: none;
    white-space: nowrap;
    box-sizing: border-box;
    flex-shrink: 0;
}

/* Square buttons for icons */
.themeToggle,
.helpToggle {
    width: 40px;
    min-width: 40px;
    max-width: 40px;
    padding: 0;
}

/* Menu button with auto width */
.mobileMenuToggle {
    padding: 0 1rem;
    min-width: auto;
}

.themeToggle:hover, .mobileMenuToggle:hover, .helpToggle:hover {
    background: var(--button-nav-hover-bg);
    border-color: var(--button-nav-hover-border);
    color: var(--button-nav-hover-text);
    box-shadow: var(--button-nav-hover-shadow);
}

.themeToggle:focus, .mobileMenuToggle:focus, .helpToggle:focus {
    outline: none;
    border-color: var(--button-nav-hover-border);
    box-shadow: 0 0 0 3px var(--button-nav-hover-shadow);
}

/* Remove :active state that causes color change */
.themeToggle:active, .mobileMenuToggle:active, .helpToggle:active {
    transform: scale(0.95);
}

.navMenu {
    display: flex;
    gap: 0.5rem;
    list-style: none;
    flex-wrap: nowrap;
}

.navMenu a {
    color: var(--nav-link-text);
    text-decoration: none;
    padding: 0 0.875rem;
    border: 2px solid transparent;
    border-radius: 6px;
    transition: all 0.3s ease;
    font-family: 'Fira Code', monospace;
    font-size: 0.9rem;
    position: relative;
    opacity: 0.8;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    line-height: 1;
    box-sizing: border-box;
    white-space: nowrap;
    flex-shrink: 0;
}

.navMenu a.active:not(.pageActive) {
    color: var(--nav-link-text-active);
    border-color: var(--nav-link-border-active);
    background: var(--nav-link-bg-active);
    box-shadow: var(--nav-link-shadow-active);
    opacity: 1;
}

.navMenu a.pageActive {
    color: var(--nav-link-text-active);
    background: var(--nav-link-bg-active);
    border-color: var(--nav-link-border-active);
    box-shadow: var(--nav-link-shadow-active);
    opacity: 1;
    font-weight: 600;
}

.navMenu a:hover:not(.active):not(.pageActive) {
    color: var(--nav-link-text-hover);
    border-color: var(--nav-link-border-hover);
    background: var(--nav-link-bg-hover);
    box-shadow: 0 0 10px var(--glow-primary);
    opacity: 1;
}

.navMenu a.pageActive:hover {
    filter: brightness(1.1);
}

.navMenu a.pageActive::before {
    content: '';
    opacity: 0;
}

.navMenu a:not(.pageActive)::before {
    content:'> ';
    opacity:0;
    transition:opacity 0.3s ease;
}

.navMenu a.active:not(.pageActive)::before,
.navMenu a:hover:not(.pageActive):not(.active)::before {
    opacity:1;
}

.navSeparator {
    color:var(--text-muted);
    opacity:0.3;
    padding:0 0.5rem;
    align-self:center;
}

.mobileMenuToggle {
    display:none;
}

/* Desktop: Hide main sections, show page links and separator */
@media (min-width: 993px) {
    .mainSectionLinkLi {
        display: none !important;
    }
    .navSeparator.mainSectionSeparator {
        display: block !important;
    }
    .mobileMenuToggle { 
        display: none !important; 
    }
    .helpToggle {
        display: inline-flex !important;
    }
}

/* Mobile: Show main sections, hide page links and separator */
@media (max-width: 1300px) {
    .mobileMenuToggle { 
        display: inline-flex !important; 
    }
    
    .helpToggle {
        display: none !important;
    }
    
    .navMenu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--bg-secondary);
        flex-direction: column;
        gap: 0;
        border-top: 1px solid var(--accent-primary);
        box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    }
    
    .navMenu.active { 
        display: flex !important; 
    }
    
    .mainSectionLinkLi { 
        display: list-item !important; 
    }
    
    .navSeparator.mainSectionSeparator { 
        display: block !important;
        text-align: center;
        padding: 0.75rem 0;
        font-size: 1.2rem;
        border-bottom: 1px solid var(--border-color-muted);
    }
    
    .navMenu a {
        padding: 1rem 1.5rem;
        border-bottom: 1px solid var(--border-color-muted);
        border-radius: 0;
        width: 100%;
    }
    
    .navMenu li:last-child a {
        border-bottom: none;
    }
}

/* Responsive terminal prompt */
@media (max-width: 768px) {
    .terminalPrompt {
        font-size: 0.85rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 60vw;
    }
}

@media (max-width: 576px) {
    .terminalPrompt {
        font-size: 0.75rem;
        max-width: 50vw;
    }
    
    .terminalHeader {
        padding: 0.5rem 0.75rem;
    }
    
    .navControls {
        gap: 0.25rem;
    }
    
    .themeToggle, .helpToggle, .mobileMenuToggle {
        padding: 0.4rem 0.7rem;
        font-size: 0.8rem;
    }
}

@media (max-width: 420px) {
    .terminalPrompt {
        display: none;
    }
    
    .terminalHeader {
        padding: 0.5rem;
    }
    
    .themeToggle, .helpToggle, .mobileMenuToggle {
        padding: 0.3rem 0.5rem;
        font-size: 0.75rem;
    }
}

```

### src/components/layout/Header/Header.tsx

```tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeContext';
import styles from './Header.module.css';

interface HeaderProps {
  onHelpToggle?: () => void;
  currentPath?: string;
}

const Header: React.FC<HeaderProps> = ({ onHelpToggle, currentPath = '/' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  // Determine current page name from path
  const getCurrentPage = () => {
    const page = currentPath === '/' ? 'portfolio' : currentPath.substring(1);
    console.log('📍 Header - Current Path:', currentPath, '→ Page:', page);
    return page;
  };

  // Track active section based on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Generate dynamic terminal prompt based on current page and section
  const getTerminalPrompt = () => {
    const currentPage = getCurrentPage();
    // Always show the page name (portfolio, community, courses, dashboard)
    const pageArgument = ` --page=${currentPage}`;
    const themeArgument = ` --theme=${theme}`;
    return `yurii@yuriodev:~$ ./run --module=AI_Education${pageArgument}${themeArgument}`;
  };

  const isPageActive = (pageName: string) => getCurrentPage() === pageName;

  const isActive = (section: string) => activeSection === section;

  return (
    <header className={styles.terminalHeader} role="banner">
      <nav className={styles.terminalNav} role="navigation" aria-label="Main navigation">
        <div className={styles.terminalPrompt}>
          {getTerminalPrompt()}<span className={styles.cursor}>_</span>
        </div>
        <div className={styles.navControls}>
          <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle dark/light theme">
            {theme === 'dark' ? '☾' : '☀'}
          </button>
          <button className={styles.helpToggle} onClick={onHelpToggle} aria-label="Show help panel">?</button>
          <button className={styles.mobileMenuToggle} onClick={toggleMobileMenu} aria-label="Toggle mobile menu">≡ MENU</button>
          <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`} id="navMenu" role="menubar">
            {/* Main sections - visible on mobile only */}
            <li className={styles.mainSectionLinkLi} role="none">
              <a href="#hero" className={`${styles.navLink} ${isActive('hero') ? styles.active : ''}`} role="menuitem">--hero</a>
            </li>
            <li className={styles.mainSectionLinkLi} role="none">
              <a href="#about" className={`${styles.navLink} ${isActive('about') ? styles.active : ''}`} role="menuitem">--about</a>
            </li>
            <li className={styles.mainSectionLinkLi} role="none">
              <a href="#platform" className={`${styles.navLink} ${isActive('platform') ? styles.active : ''}`} role="menuitem">--yuriodev_vision</a>
            </li>
            <li className={styles.mainSectionLinkLi} role="none">
              <a href="#projects" className={`${styles.navLink} ${isActive('projects') ? styles.active : ''}`} role="menuitem">--projects</a>
            </li>
            <li className={styles.mainSectionLinkLi} role="none">
              <a href="#timeline" className={`${styles.navLink} ${isActive('timeline') ? styles.active : ''}`} role="menuitem">--timeline</a>
            </li>
            <li className={styles.mainSectionLinkLi} role="none">
              <a href="#skills" className={`${styles.navLink} ${isActive('skills') ? styles.active : ''}`} role="menuitem">--skills</a>
            </li>
            <li className={styles.mainSectionLinkLi} role="none">
              <a href="#terminal" className={`${styles.navLink} ${isActive('terminal') ? styles.active : ''}`} role="menuitem">--terminal</a>
            </li>
            <li className={styles.mainSectionLinkLi} role="none">
              <a href="#connect" className={`${styles.navLink} ${isActive('connect') ? styles.active : ''}`} role="menuitem">--connect</a>
            </li>
            
            {/* Separator - visible on desktop */}
            <li className={`${styles.navSeparator} ${styles.mainSectionSeparator}`} role="none">|</li>
            
            {/* Page links - visible on desktop */}
            <li role="none">
              <Link to="/" className={`${styles.navLink} ${isPageActive('portfolio') ? styles.pageActive : ''}`} role="menuitem">--portfolio</Link>
            </li>
            <li role="none">
              <Link to="/courses" className={`${styles.navLink} ${isPageActive('courses') ? styles.pageActive : ''}`} role="menuitem">--courses</Link>
            </li>
            <li role="none">
              <Link to="/dashboard" className={`${styles.navLink} ${isPageActive('dashboard') ? styles.pageActive : ''}`} role="menuitem">--dashboard</Link>
            </li>
            <li role="none">
              <Link to="/community" className={`${styles.navLink} ${isPageActive('community') ? styles.pageActive : ''}`} role="menuitem">--community</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

```

### src/components/layout/LeftSidebar/LeftSidebar.module.css

```css
.leftSidebarNav {
    position: fixed;
    /* left: 2rem; Simple fixed left margin */
    left: calc((100vw - (var(--content-max-width) * 1vw)) / 2 - 60px + 10px) ;
    top: 50%;
    transform: translateY(-50%);
    height: auto;
    max-height: calc(100vh - 160px);
    z-index: 999;
    background: transparent;
    border: none;
    padding: 0.75rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 18px;
    width: fit-content; /* Dynamically adjust to content */
    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease, background-color 0.3s ease, padding 0.3s ease, width 0.3s ease, left 0.3s ease;
}

.leftSidebarNav::before {
    content: "";
    position: absolute;
    left: 24px;
    top: 15px;
    bottom: 15px;
    width: 1.5px;
    background-color: rgba(var(--accent-primary-rgb), 0.4);
    z-index: 1;
    transition: background-color 0.3s ease;
}

[data-theme="light"] .leftSidebarNav::before {
     background-color: rgba(var(--accent-secondary-rgb), 0.25);
}

/* Light theme sidebar styles */
[data-theme="light"] .sidebarNavLink .diamond {
    background-color: rgba(var(--accent-secondary-rgb), 0.4);
    opacity: 0.7;
}

[data-theme="light"] .sidebarNavLink .linkText {
    color: var(--text-primary);
    opacity: 0.7;
}

[data-theme="light"] .sidebarNavLink.active .diamond {
    background-color: var(--accent-secondary);
    opacity: 1;
}

[data-theme="light"] .sidebarNavLink.active .linkText {
    color: var(--accent-secondary);
    background-color: rgba(var(--accent-secondary-rgb), 0.1);
    opacity: 1;
}

[data-theme="light"] .sidebarNavLink:hover:not(.active) .diamond {
    background-color: var(--accent-primary);
    opacity: 1;
}

[data-theme="light"] .sidebarNavLink:hover .linkText {
    color: var(--accent-primary);
    background-color: rgba(var(--accent-primary-rgb), 0.08);
    opacity: 1;
}

.sidebarNavLink {
    display: flex;
    align-items: center;
    position: relative;
    text-decoration: none;
    z-index: 2;
    height: 10px;
    padding-left: 22px;
    cursor: pointer;
    width: 105%; /* Take full width of parent for consistent alignment */
    min-width: fit-content; /* Ensure it can grow with content */
}
.sidebarNavLink .diamond {
    width: 8px;
    height: 8px;
    background-color: var(--text-muted);
    opacity: 0.6;
    transform: rotate(45deg);
    transition: all 0.3s ease;
    flex-shrink: 0;
    position: absolute;
    left: 20.25px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    z-index: 3;
}
.sidebarNavLink .linkText {
    display: inline-block;
    color: var(--text-muted);
    font-size: 0.8rem;
    transition: all 0.3s ease-out;
    white-space: nowrap;
    font-weight: 400;
    opacity: 0.6;
    transform: translateX(8px);
    margin-left: 12px;
    padding: 3px 8px;
    border-radius: 4px;
    background-color: transparent;
}
.sidebarNavLink.active .diamond {
    background-color: var(--accent-secondary);
    opacity: 1;
    transform: translateY(-50%) rotate(45deg) scale(1.5);
}
.sidebarNavLink.active .linkText {
    color: var(--nav-link-text-active);
    background-color: rgba(var(--accent-secondary-rgb), 0.2);
    opacity: 1;
    font-weight: 500;
    transform: translateX(15px);
}
.sidebarNavLink:hover:not(.active) .diamond {
    background-color: var(--accent-primary);
    opacity: 1;
    transform: translateY(-50%) rotate(45deg) scale(1.3);
}
.sidebarNavLink:hover .linkText {
    color: var(--nav-link-text-hover);
    background-color: rgba(var(--accent-primary-rgb), 0.15);
    opacity: 1;
    transform: translateX(15px);
}

/* Text labels with background */
.leftSidebarNav .linkText {
    display: inline-block !important;
    visibility: visible !important;
    opacity: 1 !important;
    padding: 4px 10px !important;
    border-radius: 6px;
    font-size: 0.8rem !important;
}

/* Polished background panel for sidebar */
.leftSidebarNav {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(20, 20, 30, 0.35));
    backdrop-filter: blur(8px) saturate(150%);
    -webkit-backdrop-filter: blur(8px) saturate(150%);
    padding: 1rem 0.75rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.06);
    width: auto;
    min-width: 150px;
}

/* Light theme sidebar background */
[data-theme="light"] .leftSidebarNav {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(248, 250, 252, 0.8));
    backdrop-filter: blur(10px) saturate(150%);
    -webkit-backdrop-filter: blur(10px) saturate(150%);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08),
                0 2px 8px rgba(0, 0, 0, 0.04),
                inset 0 1px 0 rgba(255, 255, 255, 1);
    border: 1px solid rgba(var(--accent-secondary-rgb), 0.15);
}

/* Enhance on hover */
.leftSidebarNav:hover {
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.5),
                inset 0 1px 0 rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

[data-theme="light"] .leftSidebarNav:hover {
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12),
                0 3px 10px rgba(0, 0, 0, 0.06),
                inset 0 1px 0 rgba(255, 255, 255, 1);
    border: 1px solid rgba(var(--accent-secondary-rgb), 0.2);
}

```

### src/components/layout/LeftSidebar/LeftSidebar.tsx

```tsx
import React, { useEffect, useState, useRef } from 'react';
import styles from './LeftSidebar.module.css';

interface SectionInfo {
  id: string;
  label: string;
}

const LeftSidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [sections, setSections] = useState<SectionInfo[]>([]);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true); // Track if sidebar should be visible based on conditions

  // Check if sidebar should be visible based on dynamic conditions
  useEffect(() => {
    const checkVisibility = () => {
      // Get viewport measurements first
      const viewportWidth = window.innerWidth;
      const isMobileView = viewportWidth <= 992;

      // If we don't have a ref yet, or if we're in mobile view, handle that first
      if (!sidebarRef.current || isMobileView) {
        if (!sidebarRef.current) {
          console.log('⚠️ Sidebar ref not ready, keeping visible');
          setIsVisible(true);
        } else if (isMobileView) {
          console.log('📱 Mobile view detected (≤1010px), hiding sidebar:', {
            viewportWidth: `${viewportWidth}px`,
            threshold: '1010x'
          });
          setIsVisible(false);
        }
        return;
      }

      // Now we can safely measure sidebar dimensions
      const sidebarWidth = sidebarRef.current.offsetWidth;
      
      // If sidebar width is 0, it might be hidden by CSS or transitioning
      // In this case, keep it visible and let CSS handle display
      if (sidebarWidth === 0) {
        console.log('⚠️ Sidebar width is 0px - element may be hidden by CSS or transitioning');
        return;
      }
      
      const sidebarPercentage = (sidebarWidth / viewportWidth) * 100;

      // Hide sidebar if it takes >35% of viewport width
      const shouldHide = sidebarPercentage > 35;

      // Always log measurements for debugging
      console.log('🔍 Sidebar Visibility Check:', {
        action: shouldHide ? '❌ HIDING' : '✅ SHOWING',
        measurements: {
          viewportWidth: `${viewportWidth}px`,
          sidebarWidth: `${sidebarWidth}px`,
          sidebarPercentage: `${sidebarPercentage.toFixed(2)}%`,
          threshold: '35%'
        },
        conditions: {
          isMobileView: `${isMobileView} (breakpoint: ≤992px)`,
          exceedsPercentageThreshold: `${sidebarPercentage > 35} (threshold: >35%)`,
          finalDecision: shouldHide ? 'HIDE' : 'SHOW'
        }
      });

      setIsVisible(!shouldHide);
    };

    // Initial check after a short delay to ensure DOM is ready
    const initialTimer = setTimeout(checkVisibility, 100);

    // Check on resize
    window.addEventListener('resize', checkVisibility);

    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener('resize', checkVisibility);
    };
  }, []);

  // Dynamically discover all sections on the page
  useEffect(() => {
    const discoverSections = () => {
      const sectionElements = document.querySelectorAll('main section[id]');
      const discoveredSections: SectionInfo[] = [];

      sectionElements.forEach((section) => {
        const id = section.id;
        if (id) {
          // Convert id to readable label (e.g., "hero" -> "Hero", "about" -> "About")
          const label = id.charAt(0).toUpperCase() + id.slice(1);
          discoveredSections.push({ id, label });
        }
      });

      setSections(discoveredSections);
    };

    // Discover sections after a short delay to ensure DOM is ready
    const timer = setTimeout(discoverSections, 100);

    // Re-discover if DOM changes (for dynamic content)
    const observer = new MutationObserver(discoverSections);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    if (sections.length === 0 || !isVisible) return;

    const sectionElements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle of viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sectionElements.forEach(section => observer.observe(section));

    return () => {
      sectionElements.forEach(section => observer.unobserve(section));
    };
  }, [sections, isVisible]);

  const isActive = (sectionId: string) => activeSection === sectionId;

  // Handle click navigation - smooth scroll to section
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  // Don't render sidebar if screen is too small (extra safety layer)
  if (!isVisible) return null;

  return (
    <div
      ref={sidebarRef}
      className={styles.leftSidebarNav}
      id="leftSidebarNav"
      role="navigation"
      aria-label="Section navigation"
    >
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => handleNavClick(e, id)}
          className={`${styles.sidebarNavLink} ${isActive(id) ? styles.active : ''}`}
          aria-label={`Go to ${label.toLowerCase()} section`}
        >
          <span className={styles.diamond}></span>
          <span className={styles.linkText}>{label}</span>
        </a>
      ))}
    </div>
  );
};

export default LeftSidebar;

```

### src/components/layout/PageLayout/PageLayout.module.css

```css
.mainContent {
    flex: 1;
    min-height: 100vh;
    padding-bottom: 2rem;
    position: relative;
    z-index: 1;
}

/* Constrain all sections to 75% width - same as main portfolio */
.mainContent section {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
}

/* Add top padding ONLY for single-section pages (coming soon pages) */
.mainContent section:first-child:last-child {
    padding-top: calc(80px + 4rem); /* Header height + normal padding */
}

@media (max-width: 768px) {
    /* Add top padding ONLY for single-section pages */
    .mainContent section:first-child:last-child {
        padding-top: calc(70px + 2rem); /* Header height (tablet) + normal padding */
    }
}

@media (max-width: 480px) {
    /* Add top padding ONLY for single-section pages */
    .mainContent section:first-child:last-child {
        padding-top: calc(60px + 1.5rem); /* Header height (mobile) + normal padding */
    }
}

```

### src/components/layout/PageLayout/PageLayout.tsx

```tsx
import React, { useState, useEffect } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import CanvasBackground from '../../ui/CanvasBackground/CanvasBackground';
import CommandPalette from '../../ui/CommandPalette/CommandPalette';
import HelpPanel from '../../ui/HelpPanel/HelpPanel';
import ScrollToTop from '../../ui/ScrollToTop/ScrollToTop';
import styles from './PageLayout.module.css';

interface PageLayoutProps {
  children: React.ReactNode;
  currentPath?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, currentPath = '/' }) => {
  const { toggleTheme } = useTheme();
  const [isHelpPanelOpen, setIsHelpPanelOpen] = useState(false);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input field
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Toggle help panel with '?' key
      if (e.key === '?') {
        e.preventDefault();
        setIsHelpPanelOpen(prev => !prev);
        return;
      }

      // Toggle theme with 'T' key
      if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        toggleTheme();
        return;
      }

      // Navigate sections with J (next) and K (previous)
      if (e.key === 'j' || e.key === 'J') {
        e.preventDefault();
        navigateSection('next');
        return;
      }

      if (e.key === 'k' || e.key === 'K') {
        e.preventDefault();
        navigateSection('previous');
        return;
      }

      // Scroll to top with Home key
      if (e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // Scroll to bottom with End key
      if (e.key === 'End') {
        e.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        return;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [toggleTheme]);

  // Section navigation helper
  const navigateSection = (direction: 'next' | 'previous') => {
    const allSections = Array.from(document.querySelectorAll('main section[id]')) as HTMLElement[];

    if (allSections.length === 0) return;

    const scrollPosition = window.scrollY + window.innerHeight / 2;
    let currentIndex = 0;

    for (let i = 0; i < allSections.length; i++) {
      const section = allSections[i];
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentIndex = i;
        break;
      }
    }

    let targetIndex = currentIndex;
    if (direction === 'next') {
      targetIndex = Math.min(currentIndex + 1, allSections.length - 1);
    } else {
      targetIndex = Math.max(currentIndex - 1, 0);
    }

    const targetSection = allSections[targetIndex];
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <CanvasBackground />
      <CommandPalette />
      <HelpPanel isOpen={isHelpPanelOpen} onClose={() => setIsHelpPanelOpen(false)} />
      <ScrollToTop />
      <Header onHelpToggle={() => setIsHelpPanelOpen(true)} currentPath={currentPath} />
      <LeftSidebar />
      <main className={styles.mainContent}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;

```

### src/components/sections/AboutSection/AboutSection.module.css

```css
/* AboutSection.module.css */

.sectionFullwidthShaded {
  width: 100%;
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;
}

.sectionContentWrapper {
  max-width: var(--content-max-width);
  width: 100%;
  margin: 0 auto;
}

.sectionHeader {
  text-align: center;
  margin-bottom: 3rem;
}

.sectionTitle {
  font-size: 2.5rem;
  color: var(--text-primary);
  font-family: 'Fira Code', monospace;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 20px;
}

.sectionTitle::before {
  content: '# ';
  color: var(--accent-secondary);
}

/* Dark theme - cyan # prefix and golden/yellow title */
[data-theme="dark"] .sectionTitle {
  color: var(--accent-secondary);
}

[data-theme="dark"] .sectionTitle::before {
  color: var(--accent-primary);
}

.sectionTitle::after {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-primary), var(--accent-secondary), transparent);
}

.headline {
  font-size: 1.2rem;
  color: var(--accent-tertiary);
  font-family: 'Fira Code', monospace;
  font-style: italic;
}

[data-theme="light"] .headline {
  color: var(--accent-tertiary);
  font-weight: 500;
}

/* Grid Layout */
.aboutGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

/* Card Styles */
.summaryCard,
.missionCard,
.focusCard {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

/* Shimmer effect on top border */
.summaryCard::before,
.missionCard::before,
.focusCard::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
  transform: scaleX(0);
  transition: transform 0.3s ease;
  z-index: 2;
}

.summaryCard:hover::before,
.missionCard:hover::before,
.focusCard:hover::before {
  transform: scaleX(1);
}

/* Light theme - ensure cards have proper background and prominent borders */
[data-theme="light"] .summaryCard,
[data-theme="light"] .missionCard,
[data-theme="light"] .focusCard {
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid rgba(var(--accent-secondary-rgb), 0.4);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.summaryCard:hover,
.missionCard:hover,
.focusCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(var(--accent-primary-rgb), 0.2);
}

[data-theme="light"] .summaryCard:hover,
[data-theme="light"] .missionCard:hover,
[data-theme="light"] .focusCard:hover {
  box-shadow: 0 8px 24px rgba(var(--accent-secondary-rgb), 0.15);
  border-color: rgba(var(--accent-secondary-rgb), 0.6);
}

.cardHeader {
  background: rgba(6, 182, 212, 0.08);  /* Cyan overlay */
  border-bottom: 1px solid rgba(6, 182, 212, 0.3);  /* Cyan border */
  padding: 0.75rem 1.5rem;
}

[data-theme="light"] .cardHeader {
  background: rgba(249, 115, 22, 0.06);
  border-bottom: 1px solid rgba(249, 115, 22, 0.2);
}

.terminalPrompt {
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  color: var(--accent-primary);
  font-weight: 600;
}

/* Light theme - Orange terminal prompt */
[data-theme="light"] .terminalPrompt {
  color: #ea580c;
}

.cardContent {
  padding: 2rem 1.5rem;
}

/* Experience Badge */
.experienceBadge {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: rgba(var(--accent-secondary-rgb), 0.1);
  border: 2px solid var(--accent-secondary);
  border-radius: 8px;
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem;
}

[data-theme="light"] .experienceBadge {
  background: rgba(var(--accent-secondary-rgb), 0.15);
  border: 2px solid var(--accent-secondary);
}

.yearsNumber {
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent-secondary);
  font-family: 'Fira Code', monospace;
  line-height: 1;
}

[data-theme="light"] .yearsNumber {
  color: var(--accent-secondary);
}

.yearsLabel {
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 0.5rem;
}

[data-theme="light"] .yearsLabel {
  color: var(--text-primary);
  font-weight: 600;
}

.summaryText {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 0.95rem;
}

[data-theme="light"] .summaryText {
  color: var(--text-primary);
}

/* Mission Card */
.missionTitle {
  font-size: 1.2rem;
  color: var(--accent-secondary);
  margin-bottom: 1rem;
  font-family: 'Fira Code', monospace;
}

.missionText {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 0.95rem;
}

[data-theme="light"] .missionText {
  color: var(--text-primary);
}

/* Focus Card */
.focusTitle {
  font-size: 1.2rem;
  color: var(--accent-secondary);
  margin-bottom: 1rem;
  font-family: 'Fira Code', monospace;
}

.focusList {
  list-style: none;
  padding: 0;
  margin: 0;
}

.focusItem {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.9rem;
  padding: 0.5rem 0;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.bullet {
  color: var(--accent-primary);
  font-size: 1.2rem;
  flex-shrink: 0;
  line-height: 1;
  margin-top: 0.1rem;
}

/* Light theme - Orange bullets */
[data-theme="light"] .bullet {
  color: #f97316;
}

/* Achievements Section */
.achievementsSection {
  margin-bottom: 3rem;
}

.achievementsTitle {
  font-size: 1.3rem;
  color: var(--accent-secondary);
  font-family: 'Fira Code', monospace;
  margin-bottom: 2rem;
  text-align: center;
}

[data-theme="light"] .achievementsTitle {
  color: var(--accent-primary);
}

.achievementsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.achievementCard {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

[data-theme="light"] .achievementCard {
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid rgba(var(--accent-secondary-rgb), 0.4);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.achievementCard::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.achievementCard:hover::before {
  transform: scaleX(1);
}

.achievementCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(var(--accent-secondary-rgb), 0.2);
  border-color: var(--accent-secondary);
}

[data-theme="light"] .achievementCard:hover {
  box-shadow: 0 8px 24px rgba(var(--accent-secondary-rgb), 0.15);
  border-color: rgba(var(--accent-secondary-rgb), 0.6);
}

.achievementMetric {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-secondary);
  font-family: 'Fira Code', monospace;
  margin-bottom: 0.5rem;
  line-height: 1;
}

[data-theme="light"] .achievementMetric {
  color: var(--accent-secondary);
}

.achievementLabel {
  font-size: 0.9rem;
  color: var(--text-primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

[data-theme="light"] .achievementLabel {
  color: var(--text-primary);
}

.achievementDescription {
  font-size: 0.75rem;
  color: var(--text-muted);
  line-height: 1.4;
  margin-top: 0.5rem;
}

[data-theme="light"] .achievementDescription {
  color: var(--text-secondary);
}

/* Contact Links */
.contactLinks {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: rgba(var(--accent-primary-rgb), 0.05);
  border-radius: 8px;
  border: 1px solid var(--border-subtle);
}

.contactLink {
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  color: var(--accent-primary);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid var(--accent-primary);
  border-radius: 4px;
  transition: all 0.3s ease;
  background: rgba(var(--accent-primary-rgb), 0.05);
}

.contactLink:hover {
  background: rgba(var(--accent-primary-rgb), 0.1);
  box-shadow: 0 0 10px rgba(var(--accent-primary-rgb), 0.3);
  transform: translateY(-2px);
}

[data-theme="light"] .contactLink:hover {
  background: var(--accent-primary);
  color: white;
  box-shadow: 0 4px 12px rgba(2, 132, 199, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .sectionFullwidthShaded {
    padding: 3rem 1.5rem;
  }

  .aboutGrid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .achievementsGrid {
    grid-template-columns: repeat(2, 1fr);
  }

  .sectionTitle {
    font-size: 2rem;
  }

  .headline {
    font-size: 1rem;
  }

  .contactLinks {
    flex-direction: column;
    gap: 1rem;
  }

  .contactLink {
    width: 100%;
    text-align: center;
  }

  .storyButton {
    font-size: 0.95rem;
    padding: 1rem 1.5rem;
  }

  .expandedBio {
    padding: 1.5rem;
  }

  .paragraph p {
    font-size: 1rem;
  }

  .introText {
    font-size: 1.1rem;
  }

  .subheading {
    font-size: 1.25rem;
  }

  .achievementsList li {
    font-size: 1rem;
  }

  .closingStatement {
    font-size: 1.05rem;
  }

  .cta {
    font-size: 1.1rem;
  }

  .codeContent {
    font-size: 0.85rem;
    padding: 1rem;
  }

  .timelineItems {
    padding-left: 1.5rem;
  }

  .timelineItems::before {
    left: -3px;
  }

  .timelineItem {
    padding-left: 1rem;
  }

  .timelineItem::before {
    left: -2.3rem;
  }

  .timelineContent h4 {
    font-size: 1rem;
  }

  .timelineContent p {
    font-size: 0.9rem;
  }
}

/* ===========================
   Full Story / Biography Section
   =========================== */

.fullStorySection {
  margin-top: 3rem;
  width: 100%;
}

.storyButton {
  width: 100%;
  padding: 1.25rem 2rem;
  background: var(--cta-button-bg);
  border: 1px solid var(--cta-button-border);
  border-radius: 8px;
  color: var(--cta-button-text);
  font-family: 'Fira Code', monospace;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-align: left;
}

.storyButton::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.storyButton:hover::before {
  left: 100%;
}

.storyButton:hover {
  background: var(--cta-button-hover-bg);
  border-color: var(--cta-button-hover-border);
  color: var(--cta-button-hover-text);
  box-shadow: 0 0 20px var(--cta-button-hover-shadow);
  transform: translateY(-2px);
}

.storyButton:active {
  transform: translateY(0);
}

.expandedBio {
  margin-top: 2rem;
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 8px;
  padding: 2.5rem;
  animation: slideDown 0.4s ease-out;
  box-shadow: var(--card-shadow);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bioContent {
  max-width: 100%;
  width: 100%;
}

.paragraph {
  margin-bottom: 2.5rem;
}

.paragraph p {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1.05rem;
  margin-bottom: 1rem;
}

.introText {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-primary);
}

.subheading {
  font-size: 1.5rem;
  color: var(--accent-secondary);
  font-family: 'Fira Code', monospace;
  margin-bottom: 1.25rem;
  margin-top: 0.5rem;
  font-weight: 600;
}

/* Text Highlights - Color only, no background */
.highlight {
  color: var(--accent-primary);
  font-weight: 600;
}

.highlightPrimary {
  color: var(--accent-primary);
  font-weight: 600;
}

[data-theme="light"] .highlightPrimary {
  color: var(--accent-primary);
  font-weight: 600;
}

.highlightSecondary {
  color: var(--accent-secondary);
  font-weight: 600;
}

[data-theme="light"] .highlightSecondary {
  color: var(--accent-secondary);
  font-weight: 600;
}

.highlightTertiary {
  color: var(--accent-tertiary);
  font-weight: 600;
}

[data-theme="light"] .highlightTertiary {
  color: var(--accent-tertiary);
  font-weight: 600;
}

.highlightQuaternary {
  color: var(--accent-quaternary);
  font-weight: 600;
}

/* Lists */
.achievementsList {
  list-style: none;
  padding-left: 0;
  margin: 1rem 0;
}

.achievementsList li {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1.05rem;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
}

.achievementsList li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--accent-primary);
  font-size: 1.2rem;
}

/* Special Text Styles */
.closingStatement {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-top: 1.5rem;
}

.cta {
  font-size: 1.15rem;
  color: var(--accent-secondary);
  text-align: center;
  margin: 2rem 0;
}

/* Code Block */
.codeBlock {
  background: rgba(var(--accent-primary-rgb), 0.05);
  border: 1px solid var(--accent-primary);
  border-radius: 8px;
  overflow: hidden;
  margin: 2rem 0;
  font-family: 'Fira Code', monospace;
}

.codeHeader {
  background: rgba(var(--accent-primary-rgb), 0.1);
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--accent-primary);
}

.codeLanguage {
  color: var(--accent-secondary);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
}

.codeTitle {
  color: var(--accent-primary);
  font-size: 0.9rem;
}

.codeContent {
  padding: 1.5rem;
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  overflow-x: auto;
}

/* Python Syntax Highlighting */
.codeContent .keyword {
  color: var(--accent-quaternary);
  font-weight: 600;
}

.codeContent .function {
  color: var(--accent-primary);
}

.codeContent .string {
  color: var(--success);
}

.codeContent .comment {
  color: var(--text-muted);
  font-style: italic;
}

.codeContent .operator {
  color: var(--accent-secondary);
}

.codeContent .builtin {
  color: var(--accent-tertiary);
}

/* Timeline */
.timeline {
  margin: 3rem 0;
  padding: 2rem 0;
  border-top: 1px solid var(--border-card);
}

.timelineTitle {
  font-size: 1.5rem;
  color: var(--accent-secondary);
  font-family: 'Fira Code', monospace;
  margin-bottom: 2rem;
  font-weight: 600;
  text-align: center;
}

.timelineItems {
  position: relative;
  padding-left: 2rem;
}

.timelineItems::before {
  content: '';
  position: absolute;
  left: -3px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--accent-primary),
    var(--accent-secondary),
    var(--accent-tertiary)
  );
}

.timelineItem {
  position: relative;
  margin-bottom: 2.5rem;
  padding-left: 1.5rem;
}

.timelineItem::before {
  content: '';
  position: absolute;
  left: -2.65rem;
  top: 0.0rem;
  width: 12px;
  height: 12px;
  background: var(--accent-secondary);
  border: 2px solid var(--bg-card);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--glow-secondary);
  z-index: 1;
}

.timelineYear {
  color: var(--accent-secondary);
  font-family: 'Fira Code', monospace;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.timelineContent h4 {
  color: var(--text-primary);
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

/* Light mode timeline adjustments */
[data-theme="light"] .timelineItems::before {
  background: linear-gradient(
    to bottom,
    var(--accent-primary),
    var(--accent-secondary),
    var(--accent-tertiary)
  );
}

[data-theme="light"] .timelineItem::before {
  background: var(--accent-secondary);
  box-shadow: 0 0 10px var(--glow-secondary);
}

[data-theme="light"] .timelineYear {
  color: var(--accent-secondary);
}

[data-theme="light"] .timelineContent h4 {
  color: var(--text-primary);
}

.timelineContent p {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 0.95rem;
}

/* Footer */
.bioFooter {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-card);
  text-align: center;
}

.bioFooter p {
  color: var(--text-muted);
  font-size: 1rem;
}



@media (max-width: 480px) {
  .achievementsGrid {
    grid-template-columns: 1fr;
  }
}

```

### src/components/sections/AboutSection/AboutSection.tsx

```tsx
import React, { useState } from 'react';
import { aboutData } from '../../../data/aboutData';
import styles from './AboutSection.module.css';

const AboutSection: React.FC = () => {
  const [isStoryExpanded, setIsStoryExpanded] = useState(false);

  const toggleStory = () => {
    setIsStoryExpanded(!isStoryExpanded);
  };

  return (
    <section id="about" className={styles.sectionFullwidthShaded}>
      <div className={styles.sectionContentWrapper}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>About</h2>
          {/* <p>Now → Next → Vision</p> */}
        </div>

        <div className={styles.aboutGrid}>
          {/* Currently Building */}
          <div className={styles.summaryCard}>
            <div className={styles.cardHeader}>
              <span className={styles.terminalPrompt}>$ cat ./currently_building.md</span>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.focusTitle}>In Progress</h3>
              <ul className={styles.focusList}>
                {aboutData.currentlyBuilding.map((item, index) => (
                  <li key={index} className={styles.focusItem}>
                    <span className={styles.bullet}>▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Next Steps */}
          <div className={styles.missionCard}>
            <div className={styles.cardHeader}>
              <span className={styles.terminalPrompt}>$ ls ./next_steps/</span>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.missionTitle}>Next Steps</h3>
              <ul className={styles.focusList}>
                {aboutData.nextSteps.map((item, index) => (
                  <li key={index} className={styles.focusItem}>
                    <span className={styles.bullet}>▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Long-term Vision */}
          <div className={styles.focusCard}>
            <div className={styles.cardHeader}>
              <span className={styles.terminalPrompt}>$ cat ./vision.txt</span>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.focusTitle}>Long-term Vision</h3>
              <ul className={styles.focusList}>
                {aboutData.vision.map((item, index) => (
                  <li key={index} className={styles.focusItem}>
                    <span className={styles.bullet}>▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className={styles.achievementsSection}>
          <h3 className={styles.achievementsTitle}>
            <span className={styles.terminalPrompt}>$ cat ./achievements.json</span>
          </h3>
          <div className={styles.achievementsGrid}>
            {aboutData.achievements.map((achievement, index) => (
              <div key={index} className={styles.achievementCard}>
                <div className={styles.achievementMetric}>{achievement.metric}</div>
                <div className={styles.achievementLabel}>{achievement.label}</div>
                {achievement.description && (
                  <div className={styles.achievementDescription}>{achievement.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Read Full Story Section */}
        <div className={styles.fullStorySection}>
          <button 
            onClick={toggleStory} 
            className={styles.storyButton}
            aria-expanded={isStoryExpanded}
          >
            {isStoryExpanded ? 
              '▼ Collapse story' : 
              '▶ Read full story'
            }
          </button>

          {isStoryExpanded && (
            <div 
              className={styles.expandedBio}
              onClick={toggleStory}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  toggleStory();
                }
              }}
              aria-label="Click anywhere to collapse story"
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.bioContent}>
                {/* Introduction */}
                <div className={styles.paragraph}>
                  <p className={styles.introText}>
                    Hey there! I'm Yurii 👋 — an <span className={styles.highlight}>AI/ML Engineer</span> who transforms chaos into intelligent 
                    systems and believes every problem is just an algorithm waiting to be discovered.
                  </p>
                </div>

                {/* Origin Story */}
                <div className={styles.paragraph}>
                  <h3 className={styles.subheading}>🏀 The Origin Story: From Basketball Courts to Binary Trees</h3>
                  <p>
                    My journey began in the vibrant corridors of Ukrainian schools, where I was that kid who'd solve differential equations 
                    during basketball practice breaks. Yes, I was crushing it on the court — playing at a professional level until 13 and 
                    even snagging a <span className={styles.highlight}>national championship</span> — but my mind was always racing through mathematical 
                    dimensions far beyond the three-point line.
                  </p>
                  <p>
                    Picture this: while my teammates were strategizing plays, I was mentally modeling trajectory physics, calculating optimal 
                    shot angles, and wondering if I could write an algorithm to predict defensive patterns. That's when I realized my superpower 
                    wasn't just the crossover dribble — it was <span className={styles.highlightSecondary}>crossing over between physical and digital worlds</span>.
                  </p>
                </div>

                {/* Academic Awakening */}
                <div className={styles.paragraph}>
                  <h3 className={styles.subheading}>🧬 The Academic Awakening: When Physics Met Code</h3>
                  <p>
                    At 15, I stumbled into the mesmerizing world of <span className={styles.highlightTertiary}>non-linear dynamics</span>. The <span className={styles.highlight}>Lorenz system</span> became 
                    my obsession — those beautiful butterfly attractors that showed how tiny changes could cascade into hurricanes. I spent nights 
                    coding simulations, watching digital chaos unfold on my screen, and before I knew it, I was standing on the <span className={styles.highlightQuaternary}>Intel 
                    Techno ISEF stage in 2011</span>, clutching a second-place trophy and thinking, "This is just the beginning."
                  </p>
                  <p>
                    <span className={styles.highlight}>Moscow Institute of Physics and Technology (MIPT)</span> became my next playground. But here's 
                    where things got interesting — while everyone was religiously coding in <span className={styles.highlightTertiary}>C++</span> and <span className={styles.highlightTertiary}>Delphi</span>, I had a rebellious streak. I'd secretly 
                    rewrite entire university projects in <span className={styles.highlightSecondary}>Python</span>, this exotic new language that professors 
                    raised eyebrows at. "Why Python?" they'd ask. "Because the future speaks in Python," I'd reply, probably sounding like a tech prophet.
                  </p>
                </div>

                {/* SpaceX Moment */}
                <div className={styles.paragraph}>
                  <h3 className={styles.subheading}>🚀 The SpaceX Moment: Simulating the Impossible</h3>
                  <p>
                    2017 was my "Elon Musk moment." Our university team was tasked with a "simple" project, but I convinced them to go bigger — let's 
                    model the <span className={styles.highlight}>Big Falcon Rocket</span>! Using VPython, I architected algorithms that simulated intercontinental 
                    ballistic trajectories, factoring in everything from passenger weight distribution to atmospheric pressure variations at different latitudes.
                  </p>
                  <p>
                    We built a digital twin of a rocket that didn't even exist yet, predicting flight paths that could revolutionize global travel. The 
                    simulation was so detailed, you could practically feel the G-forces. My teammates joked I was trying to get recruited by SpaceX. 
                    Little did they know, I was just warming up.
                  </p>
                </div>

                {/* Teaching Revolution */}
                <div className={styles.paragraph}>
                  <h3 className={styles.subheading}>🎓 The Teaching Revolution: Kardashians Meet OOP</h3>
                  <p>
                    As an instructor at MIPT, I faced my greatest challenge yet — teaching <span className={styles.highlightQuaternary}>OOP</span> to economics students who thought Python was a snake. 
                    Then inspiration struck during a late-night TV binge. The <span className={styles.highlightSecondary}>Kardashian family tree</span> became 
                    my teaching metaphor! Kim <span className={styles.highlightTertiary}>inheriting properties</span> from Kris, Kylie <span className={styles.highlightTertiary}>extending the Jenner class</span>, <span className={styles.highlightQuaternary}>encapsulation</span> through their private 
                    Instagram accounts — suddenly, inheritance and polymorphism made perfect sense.
                  </p>
                  <p>
                    That lesson went viral in the faculty. Professors started calling it <span className={styles.highlight}>"The Kardashian Method,"</span> and 
                    I realized that great engineering isn't just about writing elegant code — it's about translating complexity into stories that stick.
                  </p>
                </div>

                {/* iOS Era */}
                <div className={styles.paragraph}>
                  <h3 className={styles.subheading}>💻 The iOS Era: From Apps to AI</h3>
                  <p>
                    The freelance years (2016-2019) were my digital nomad phase. I was crafting <span className={styles.highlightTertiary}>iOS apps</span> from coffee shops in Kyiv to co-working 
                    spaces in Moscow, each project pushing boundaries. But the real game-changer? Implementing <span className={styles.highlight}>CoreML</span> before 
                    it was cool, sneaking <span className={styles.highlightQuaternary}>AI into mobile apps</span> when most developers thought machine learning required a supercomputer.
                  </p>
                  <p>
                    One app used <span className={styles.highlightSecondary}>on-device intelligence</span> to predict user behavior patterns. Another leveraged <span className={styles.highlightTertiary}>computer vision</span> to identify objects 
                    in real-time. I wasn't just building apps; I was planting seeds of artificial intelligence in millions of pockets.
                  </p>
                </div>

                {/* AI Revolution */}
                <div className={styles.paragraph}>
                  <h3 className={styles.subheading}>🧠 The AI Revolution: From Models to Magic</h3>
                  <p>
                    By 2019, I'd fully transformed into an AI architect. At <span className={styles.highlight}>Forecsys</span>, I wasn't just building 
                    models — I was constructing digital immune systems for financial giants. Imagine creating an anti-fraud system that could spot 
                    a scammer faster than you can say "suspicious transaction," processing millions of data points with sub-second latency.
                  </p>
                  <p>
                    Leading a team of junior data scientists, I became the Morpheus to their Neos, teaching them not just to see the code, but to 
                    feel the data flowing through neural networks. We <span className={styles.highlightSecondary}>reduced production bugs by 30%</span>, but more 
                    importantly, we built systems that protected people's life savings.
                  </p>
                </div>

                {/* Crisis Years */}
                <div className={styles.paragraph}>
                  <h3 className={styles.subheading}>🌍 The Crisis Years: When Code Meets Compassion</h3>
                  <p>
                    2022 brought unexpected challenges. Working with <span className={styles.highlight}>Ukraine's Ministry of Health</span> during turbulent 
                    times, I architected secure pipelines processing real-time health signals at national scale. We built predictive models identifying 
                    diabetes complications before symptoms appeared, potentially saving thousands of lives. Every algorithm wasn't just math — it was 
                    hope, encrypted and deployed at scale.
                  </p>
                  <p>
                    This wasn't Silicon Valley glamour; this was engineering with purpose. <span className={styles.highlightSecondary}>GDPR compliance</span> wasn't 
                    a checkbox; it was a sacred promise to protect vulnerable citizens' data.
                  </p>
                </div>

                {/* Agentic Era */}
                <div className={styles.paragraph}>
                  <h3 className={styles.subheading}>🚀 The Agentic Era: Building Digital Consciousness</h3>
                  <p>
                    Since 2022, as an independent consultant, I've been pioneering the frontier of <span className={styles.highlight}>agentic AI</span>. 
                    Imagine AI agents that don't just respond — they anticipate, collaborate, and evolve. My crown jewel? A <span className={styles.highlightSecondary}>RAG-enhanced 
                    Proactive AI Agent</span> that synthesizes your entire digital life and optimizes your day before you've had your morning coffee.
                  </p>
                  <p>
                    Working with everyone from stealth startups to financial titans like <span className={styles.highlight}>JPMorgan</span> and <span className={styles.highlight}>Bloomberg</span>, 
                    I've architected systems that feel like science fiction:
                  </p>
                  <ul className={styles.achievementsList}>
                    <li><span className={styles.highlight}>Multi-agent orchestrators</span> where AI entities negotiate and collaborate like a digital parliament</li>
                    <li><span className={styles.highlight}>RAG pipelines</span> achieving 95% precision, turning information chaos into crystalline insights</li>
                    <li><span className={styles.highlight}>Agentic architectures</span> using Model Context Protocol (MCP) — basically giving AI agents their own API superpowers</li>
                    <li><span className={styles.highlight}>Real-time systems</span> processing 100M+ property records, predicting house prices within £8.7k accuracy</li>
                  </ul>
                  <p>
                    For <span className={styles.highlight}>SaleSphereAI</span>, I built an AI sales force that <span className={styles.highlightSecondary}>increased 
                    conversions by 200%</span>. Not through spam, but through understanding — agents that actually comprehend customer needs and respond 
                    with empathy at scale.
                  </p>
                </div>

                {/* The Present */}
                <div className={styles.paragraph}>
                  <h3 className={styles.subheading}>🎯 The Present: Where Multiple Realities Converge</h3>
                  <p>
                    Today, I'm not just an engineer — I'm an architect of digital possibility. My latest creation? A scientific literature analysis 
                    system using <span className={styles.highlight}>LangGraph</span> that reads 200+ papers and identifies reproducible experiments in 30 
                    minutes. What used to take researchers months now happens during a coffee break.
                  </p>
                  <p>I'm simultaneously:</p>
                  <ul className={styles.achievementsList}>
                    <li>Mentoring <span className={styles.highlightSecondary}>100+ minds globally</span>, from Olympiad winners to future FAANG engineers</li>
                    <li>Building open-source Python courses with AI-powered grading systems</li>
                    <li>Creating YouTube content democratizing computer science education</li>
                    <li>Architecting the next generation of agentic systems that will fundamentally change how we interact with AI</li>
                  </ul>
                </div>

                {/* Philosophy */}
                <div className={styles.paragraph}>
                  <h3 className={styles.subheading}>🔮 The Philosophy: Engineering Meets Art</h3>
                  <p>
                    Here's what I've learned after <span className={styles.highlight}>8+ years in the trenches</span>: Great engineering isn't about 
                    writing perfect code — it's about understanding that every system we build is ultimately about humans. Whether it's a RAG pipeline 
                    or a multi-agent orchestrator, the metric that matters isn't just F1 scores or latency — it's <span className={styles.highlightSecondary}>impact</span>.
                  </p>
                  <p>
                    I see code as poetry, algorithms as symphonies, and every production deployment as a performance. When I architect a system, I'm 
                    not just thinking about scalability and fault tolerance — I'm imagining the developer who'll maintain it in three years, the 
                    end-user who'll depend on it, the business that'll grow with it.
                  </p>
                </div>

                {/* The Future */}
                <div className={styles.paragraph}>
                  <h3 className={styles.subheading}>🌟 The Future: What's Next?</h3>
                  <p>
                    As I pursue cutting-edge ML research and continue pushing boundaries, I'm excited about what's coming: AGI assistants that truly 
                    understand context, agentic systems that self-improve, and AI that doesn't just process information but genuinely collaborates 
                    with human creativity.
                  </p>
                  <p>
                    But beyond the tech, I'm a father who cooks elaborate dinners while explaining recursion to my kid, a traveler who sees new cities 
                    as undiscovered algorithms, and someone who still occasionally dreams in basketball plays — except now, the players are neural 
                    networks passing gradients instead of basketballs.
                  </p>
                  <p className={styles.closingStatement}>
                    <strong>The journey from that basketball court to building AI agents that think, reason, and create has been wild. But here's 
                    the secret: I'm just getting started.</strong>
                  </p>
                </div>

                {/* Call to Action */}
                <div className={styles.paragraph}>
                  <p className={styles.cta}>
                    <em>Want to build something impossible together? Let's talk.</em>
                  </p>
                </div>

                {/* Code Philosophy */}
                <div className={styles.codeBlock}>
                  <div className={styles.codeHeader}>
                    <span className={styles.codeLanguage}>python</span>
                    <span className={styles.codeTitle}>life_philosophy.py</span>
                  </div>
                  <pre className={styles.codeContent}>
                    <span className={styles.comment}># My life philosophy in code</span>{'\n'}
                    <span className={styles.keyword}>while</span> universe.<span className={styles.function}>exists</span>():{'\n'}
                    {'    '}problems = universe.<span className={styles.function}>get_unsolved_problems</span>(){'\n'}
                    {'    '}<span className={styles.keyword}>for</span> problem <span className={styles.keyword}>in</span> problems:{'\n'}
                    {'        '}solution = <span className={styles.function}>engineer_with_passion</span>(problem){'\n'}
                    {'        '}<span className={styles.keyword}>if</span> solution.impact <span className={styles.operator}>{'>'}</span> <span className={styles.builtin}>0</span>:{'\n'}
                    {'            '}universe.<span className={styles.function}>deploy</span>(solution){'\n'}
                    {'            '}happiness <span className={styles.operator}>+=</span> <span className={styles.builtin}>float</span>(<span className={styles.string}>'inf'</span>){'\n'}
                    {'    '}<span className={styles.function}>learn_something_new</span>(){'\n'}
                    {'    '}<span className={styles.function}>teach_someone_else</span>(){'\n'}
                    {'    '}<span className={styles.function}>dream_bigger</span>()
                  </pre>
                </div>

                {/* Footer */}
                <div className={styles.bioFooter}>
                  <p>
                    <em>Currently architecting the future from London, one intelligent system at a time.</em> 🇬🇧✨
                  </p>
                </div>

                {/* Timeline */}
                <div className={styles.timeline}>
                  <h3 className={styles.timelineTitle}>Timeline</h3>
                  <div className={styles.timelineItems}>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineYear}>2011</div>
                      <div className={styles.timelineContent}>
                        <h4>⚡ The Spark</h4>
                        <p>At 14, started modeling chaos theory and fell in love with complex systems</p>
                      </div>
                    </div>
                    
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineYear}>2013</div>
                      <div className={styles.timelineContent}>
                        <h4>🔬 CERN Summer Program</h4>
                        <p>Mind-expanding experience that shaped my approach to problem-solving</p>
                      </div>
                    </div>
                    
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineYear}>2013-16</div>
                      <div className={styles.timelineContent}>
                        <h4>📚 MIPT Studies</h4>
                        <p>Applied Mathematics and Physics at Moscow Institute of Physics and Technology</p>
                      </div>
                    </div>

                    <div className={styles.timelineItem}>
                      <div className={styles.timelineYear}>2014-16</div>
                      <div className={styles.timelineContent}>
                        <h4>🎓 Teaching at MIPT</h4>
                        <p>Led STEM curriculum design and mentored technical instructors</p>
                      </div>
                    </div>

                    <div className={styles.timelineItem}>
                      <div className={styles.timelineYear}>2016-19</div>
                      <div className={styles.timelineContent}>
                        <h4>📱 iOS Development</h4>
                        <p>Built native apps with Swift, early adoption of CoreML for on-device AI</p>
                      </div>
                    </div>

                    <div className={styles.timelineItem}>
                      <div className={styles.timelineYear}>2019-22</div>
                      <div className={styles.timelineContent}>
                        <h4>🤖 ML Engineering</h4>
                        <p>Senior ML Engineer at Forecsys, building production forecasting systems</p>
                      </div>
                    </div>

                    <div className={styles.timelineItem}>
                      <div className={styles.timelineYear}>2022-Now</div>
                      <div className={styles.timelineContent}>
                        <h4>🚀 Lead AI Engineer</h4>
                        <p>Independent consultant architecting agentic AI systems for startups and enterprises</p>
                      </div>
                    </div>
                    
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineYear}>2025</div>
                      <div className={styles.timelineContent}>
                        <h4>🎯 MLX Program & YuriODev</h4>
                        <p>Completed intensive ML program, now building the AI education platform I wish existed when I started</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

```

### src/components/sections/AssistantFeaturesSection/AssistantFeaturesSection.module.css

```css
/* AssistantFeaturesSection.module.css */

.sectionFullwidthBase {
  width: 100%;
  background: var(--section-hero-bg-gradient);
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;
}

.sectionContentWrapper {
  max-width: var(--content-max-width);
  width: 100%;
  margin: 0 auto;
}

.sectionHeader {
  text-align: center;
  margin-bottom: 3rem;
}

.sectionTitle {
  font-size: 2.5rem;
  color: var(--text-primary);
  font-family: 'Fira Code', monospace;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 20px;
}

.sectionTitle::before {
  content: '# ';
  color: var(--accent-secondary);
}

/* Dark theme - cyan # prefix and golden/yellow title */
[data-theme="dark"] .sectionTitle {
  color: var(--accent-secondary);
}

[data-theme="dark"] .sectionTitle::before {
  color: var(--accent-primary);
}

.sectionTitle::after {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-primary), var(--accent-secondary), transparent);
}

.sectionSubtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-family: 'Fira Code', monospace;
}

/* Features Grid */
.featuresGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.featureCard {
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(6, 182, 212, 0.4);
  box-shadow: 0 4px 16px rgba(6, 182, 212, 0.1);
}

/* Light theme - Orange border and shadow */
[data-theme="light"] .featureCard {
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(249, 115, 22, 0.4);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}

.featureCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(6, 182, 212, 0.3);
  border-color: #22d3ee;
}

[data-theme="light"] .featureCard:hover {
  box-shadow: 0 8px 24px rgba(249, 115, 22, 0.3);
  border-color: #f97316;
}

/* Card Header */
.cardHeader {
  background: rgba(6, 182, 212, 0.08);
  border-bottom: 1px solid rgba(6, 182, 212, 0.3);
  padding: 1rem 1.5rem;
}

[data-theme="light"] .cardHeader {
  background: rgba(249, 115, 22, 0.06);
  border-bottom-color: rgba(249, 115, 22, 0.2);
}

.terminalPrompt {
  color: var(--accent-primary);
  font-family: 'Courier New', 'Fira Code', monospace;
  font-size: 0.95rem;
  font-weight: 600;
}

[data-theme="light"] .terminalPrompt {
  color: #ea580c;
}

/* Card Content */
.cardContent {
  padding: 1.5rem;
}

.cardTitle {
  font-size: 1.2rem;
  color: var(--accent-secondary);
  font-family: 'Fira Code', monospace;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

[data-theme="light"] .cardTitle {
  color: var(--accent-secondary);
}

/* Feature List */
.featureList,
.commandList {
  list-style: none;
  padding: 0;
  margin: 0;
}

.featureItem {
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.bullet {
  color: var(--accent-primary);
  font-size: 1.2rem;
  flex-shrink: 0;
  margin-top: 2px;
}

[data-theme="light"] .bullet {
  color: #f97316;
}

/* Command List */
.commandItem {
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.commandCode {
  font-family: 'Courier New', 'Fira Code', monospace;
  background: rgba(6, 182, 212, 0.1);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  color: var(--accent-primary);
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(6, 182, 212, 0.2);
  display: inline-block;
  align-self: flex-start;
}

[data-theme="light"] .commandCode {
  background: rgba(249, 115, 22, 0.1);
  color: #ea580c;
  border-color: rgba(249, 115, 22, 0.3);
}

.commandDesc {
  color: var(--text-secondary);
  font-size: 0.9rem;
  padding-left: 0.25rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .sectionFullwidthBase {
    padding: 3rem 1rem;
  }

  .sectionTitle {
    font-size: 2rem;
  }

  .featuresGrid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .cardContent {
    padding: 1.25rem;
  }
}

@media (max-width: 480px) {
  .sectionFullwidthBase {
    padding: 2rem 0.75rem;
  }

  .sectionTitle {
    font-size: 1.75rem;
  }

  .cardHeader {
    padding: 0.75rem 1rem;
  }

  .cardContent {
    padding: 1rem;
  }

  .commandCode {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
}

```

### src/components/sections/AssistantFeaturesSection/AssistantFeaturesSection.tsx

```tsx
import React from 'react';
import styles from './AssistantFeaturesSection.module.css';

const AssistantFeaturesSection: React.FC = () => {
  return (
    <section id="features" className={styles.sectionFullwidthBase}>
      <div className={styles.sectionContentWrapper}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Features & Commands</h2>
          <p className={styles.sectionSubtitle}>
            Interactive banking assistant with intelligent query processing
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {/* Features Card */}
          <div className={styles.featureCard}>
            <div className={styles.cardHeader}>
              <span className={styles.terminalPrompt}>$ cat ./features.md</span>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Key Features</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>▹</span>
                  <span>Natural language banking queries with structured command syntax</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>▹</span>
                  <span>Real-time customer data retrieval and AI-powered responses</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>▹</span>
                  <span>Command history navigation with ↑/↓ arrow keys</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>▹</span>
                  <span>Secure API integration with input validation</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>▹</span>
                  <span>Domain-specific responses with refusal logic for out-of-scope queries</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Commands Card */}
          <div className={styles.featureCard}>
            <div className={styles.cardHeader}>
              <span className={styles.terminalPrompt}>$ ls ./available_commands/</span>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Available Commands</h3>
              <ul className={styles.commandList}>
                <li className={styles.commandItem}>
                  <code className={styles.commandCode}>query --id &lt;id&gt; "&lt;question&gt;"</code>
                  <span className={styles.commandDesc}>Query customer banking information</span>
                </li>
                <li className={styles.commandItem}>
                  <code className={styles.commandCode}>info --products</code>
                  <span className={styles.commandDesc}>List available product types</span>
                </li>
                <li className={styles.commandItem}>
                  <code className={styles.commandCode}>help</code>
                  <span className={styles.commandDesc}>Display all available commands</span>
                </li>
                <li className={styles.commandItem}>
                  <code className={styles.commandCode}>clear</code>
                  <span className={styles.commandDesc}>Clear terminal history</span>
                </li>
                <li className={styles.commandItem}>
                  <code className={styles.commandCode}>exit</code>
                  <span className={styles.commandDesc}>End session</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistantFeaturesSection;

```

### src/components/sections/AssistantTechSection/AssistantTechSection.module.css

```css
/* AssistantTechSection.module.css */

.sectionFullwidthShaded {
  width: 100%;
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;
}

.sectionContentWrapper {
  max-width: var(--content-max-width);
  width: 100%;
  margin: 0 auto;
}

.sectionHeader {
  text-align: center;
  margin-bottom: 3rem;
}

.sectionTitle {
  font-size: 2.5rem;
  color: var(--text-primary);
  font-family: 'Fira Code', monospace;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 20px;
}

.sectionTitle::before {
  content: '# ';
  color: var(--accent-secondary);
}

/* Dark theme - cyan # prefix and golden/yellow title */
[data-theme="dark"] .sectionTitle {
  color: var(--accent-secondary);
}

[data-theme="dark"] .sectionTitle::before {
  color: var(--accent-primary);
}

.sectionTitle::after {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-primary), var(--accent-secondary), transparent);
}

.sectionSubtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-family: 'Fira Code', monospace;
}

/* Tech Grid */
.techGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.techItem {
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(6, 182, 212, 0.4);
  border-radius: 8px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(6, 182, 212, 0.1);
}

[data-theme="light"] .techItem {
  background: rgba(255, 255, 255, 0.98);
  border-color: rgba(249, 115, 22, 0.4);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}

.techItem:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(6, 182, 212, 0.3);
  border-color: #22d3ee;
}

[data-theme="light"] .techItem:hover {
  box-shadow: 0 8px 24px rgba(249, 115, 22, 0.3);
  border-color: #f97316;
}

.techIcon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.techLabel {
  color: var(--accent-primary);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
  font-family: 'Fira Code', monospace;
}

[data-theme="light"] .techLabel {
  color: #ea580c;
}

.techValue {
  color: var(--accent-secondary);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-family: 'Fira Code', monospace;
}

[data-theme="light"] .techValue {
  color: var(--accent-secondary);
}

.techDesc {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Architecture Section */
.architectureSection {
  margin-top: 4rem;
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(6, 182, 212, 0.4);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(6, 182, 212, 0.1);
}

[data-theme="light"] .architectureSection {
  background: rgba(255, 255, 255, 0.98);
  border-color: rgba(249, 115, 22, 0.4);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}

.architectureTitle {
  font-size: 1.3rem;
  color: var(--accent-secondary);
  margin-bottom: 1.5rem;
  text-align: center;
  font-family: 'Fira Code', monospace;
}

.terminalPrompt {
  color: var(--accent-primary);
  font-size: 1rem;
}

[data-theme="light"] .terminalPrompt {
  color: #ea580c;
}

.architectureDiagram {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  padding: 2rem;
  border: 1px solid rgba(6, 182, 212, 0.2);
  overflow-x: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

[data-theme="light"] .architectureDiagram {
  background: rgba(240, 240, 240, 0.6);
  border-color: rgba(249, 115, 22, 0.2);
}

.diagramContent {
  font-family: 'Courier New', 'Fira Code', monospace;
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--accent-primary);
  margin: 0;
  white-space: pre;
  text-align: left;
}

[data-theme="light"] .diagramContent {
  color: #ea580c;
}

/* Responsive Design */
@media (max-width: 768px) {
  .sectionFullwidthShaded {
    padding: 3rem 1rem;
  }

  .sectionTitle {
    font-size: 2rem;
  }

  .techGrid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .techItem {
    padding: 1.5rem 1.25rem;
  }

  .architectureSection {
    padding: 1.5rem;
  }

  .diagramContent {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .sectionFullwidthShaded {
    padding: 2rem 0.75rem;
  }

  .sectionTitle {
    font-size: 1.75rem;
  }

  .techItem {
    padding: 1.25rem 1rem;
  }

  .techIcon {
    font-size: 2rem;
  }

  .architectureSection {
    padding: 1.25rem;
  }

  .diagramContent {
    font-size: 0.65rem;
  }
}

```

### src/components/sections/AssistantTechSection/AssistantTechSection.tsx

```tsx
import React from 'react';
import styles from './AssistantTechSection.module.css';

const AssistantTechSection: React.FC = () => {
  return (
    <section id="tech-stack" className={styles.sectionFullwidthShaded}>
      <div className={styles.sectionContentWrapper}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Technology Stack</h2>
          <p className={styles.sectionSubtitle}>
            Production-grade architecture with modern AI/ML technologies
          </p>
        </div>

        <div className={styles.techGrid}>
          <div className={styles.techItem}>
            <div className={styles.techIcon}>⚛️</div>
            <div className={styles.techLabel}>Frontend</div>
            <div className={styles.techValue}>React 19 + TypeScript</div>
            <div className={styles.techDesc}>Modern UI with type safety</div>
          </div>

          <div className={styles.techItem}>
            <div className={styles.techIcon}>⚡</div>
            <div className={styles.techLabel}>Backend</div>
            <div className={styles.techValue}>FastAPI + Python</div>
            <div className={styles.techDesc}>High-performance async API</div>
          </div>

          <div className={styles.techItem}>
            <div className={styles.techIcon}>🤖</div>
            <div className={styles.techLabel}>AI Engine</div>
            <div className={styles.techValue}>GPT-5 / Gemini-2.5 / Claude-4.5</div>
            <div className={styles.techDesc}>Multi-model support</div>
          </div>

          <div className={styles.techItem}>
            <div className={styles.techIcon}>🐳</div>
            <div className={styles.techLabel}>Deployment</div>
            <div className={styles.techValue}>Docker + NGINX</div>
            <div className={styles.techDesc}>Containerized architecture</div>
          </div>

          <div className={styles.techItem}>
            <div className={styles.techIcon}>🔒</div>
            <div className={styles.techLabel}>Security</div>
            <div className={styles.techValue}>Basic Auth + CORS</div>
            <div className={styles.techDesc}>Protected endpoints</div>
          </div>

          <div className={styles.techItem}>
            <div className={styles.techIcon}>🌐</div>
            <div className={styles.techLabel}>API Endpoint</div>
            <div className={styles.techValue}>api.yuriodev.co.uk</div>
            <div className={styles.techDesc}>RESTful interface</div>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className={styles.architectureSection}>
          <h3 className={styles.architectureTitle}>
            <span className={styles.terminalPrompt}>$ cat ./architecture.txt</span>
          </h3>
          <div className={styles.architectureDiagram}>
            <pre className={styles.diagramContent}>
{`
┌────────────────────────────────────────────────────────────────────┐
│                     USER INTERACTION LAYER                         │
│                   yuriodev.co.uk/assistant                         │
│                  (React 19 + TypeScript UI)                        │
│                                                                    │
│  • Terminal Interface    • Theme Support    • Command History      │
│  • Input Validation      • Auto-scroll      • Error Handling       │
└─────────────────────────────────┬──────────────────────────────────┘
                                  │
                          HTTPS + CORS Enabled
                                  │
                                  ▼
┌────────────────────────────────────────────────────────────────────┐
│                      REVERSE PROXY LAYER                           │
│                      api.yuriodev.co.uk                            │
│                       (NGINX Gateway)                              │
│                                                                    │
│  • SSL/TLS Termination   • Load Balancing   • Rate Limiting        │
│  • Request Routing       • Security Headers • CORS Config          │
└─────────────────────────────────┬──────────────────────────────────┘
                                  │
                                  ▼
┌────────────────────────────────────────────────────────────────────┐
│                       BACKEND API LAYER                            │
│                   FastAPI Application (Port 8000)                  │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  Request Validation (Pydantic)                               │  │
│  │  • Customer ID validation    • Query sanitization            │  │
│  │  • Schema enforcement        • Type checking                 │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                 │                                  │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  Data Retrieval Layer                                        │  │
│  │  • customers.json lookup     • Product data access           │  │
│  │  • ISA/Bond information      • Account details               │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                 │                                  │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  Intent Classification                                       │  │
│  │  • Query analysis            • Context extraction            │  │
│  │  • Domain verification       • Refusal logic                 │  │
│  └──────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────┬──────────────────────────────────┘
                                  │
                                  ▼
┌────────────────────────────────────────────────────────────────────┐
│                        AI ENGINE LAYER                             │
│                   Inference Service (Port 8500)                    │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  Multi-Model Support                                         │  │
│  │  • GPT-5 (OpenAI)           • Gemini-2.5 Pro (Google)        │  │
│  │  • Claude-4.5-Haiku (Anthropic)                              │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                 │                                  │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  Prompt Engineering                                          │  │
│  │  • System prompts            • Context injection             │  │
│  │  • Safety constraints        • Domain boundaries             │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                 │                                  │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  Response Processing                                         │  │
│  │  • Output formatting         • JSON serialization            │  │
│  │  • Error handling            • Logging & metrics             │  │
│  └──────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────┘`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistantTechSection;

```

### src/components/sections/AssistantTerminalSection/AssistantTerminalSection.module.css

```css
/* AssistantTerminalSection.module.css */

.sectionFullwidthShaded {
  width: 100%;
  padding: 4rem 2rem;
  padding-top: calc(80px + 4rem); /* Header height + normal padding */
  position: relative;
  z-index: 1;
}

.sectionContentWrapper {
  max-width: var(--content-max-width);
  width: 100%;
  margin: 0 auto;
}

.sectionHeader {
  text-align: center;
  margin-bottom: 3rem;
}

.sectionTitle {
  font-size: 2.5rem;
  color: var(--text-primary);
  font-family: 'Fira Code', monospace;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 20px;
}

.sectionTitle::before {
  content: '# ';
  color: var(--accent-secondary);
}

/* Dark theme - cyan # prefix and golden/yellow title */
[data-theme="dark"] .sectionTitle {
  color: var(--accent-secondary);
}

[data-theme="dark"] .sectionTitle::before {
  color: var(--accent-primary);
}

.sectionTitle::after {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 2px;
}

.sectionSubtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-weight: 400;
  opacity: 0.9;
  margin-top: 0.75rem;
}

.terminalContainer {
  margin-top: 2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .sectionFullwidthShaded {
    padding: 3rem 1rem;
    padding-top: calc(80px + 3rem);
  }

  .sectionTitle {
    font-size: 2rem;
  }

  .sectionSubtitle {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .sectionFullwidthShaded {
    padding: 2rem 0.75rem;
    padding-top: calc(80px + 2rem);
  }

  .sectionTitle {
    font-size: 1.75rem;
  }

  .sectionSubtitle {
    font-size: 0.95rem;
  }
}

```

### src/components/sections/AssistantTerminalSection/AssistantTerminalSection.tsx

```tsx
import React from 'react';
import AgentTerminal from '../../ui/AgentTerminal/AgentTerminal';
import styles from './AssistantTerminalSection.module.css';

const AssistantTerminalSection: React.FC = () => {
  return (
    <section id="assistant" className={styles.sectionFullwidthShaded}>
      <div className={styles.sectionContentWrapper}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Banking Assistant</h2>
          <p className={styles.sectionSubtitle}>
            AI-powered terminal interface for Shawbrook customer queries
          </p>
        </div>

        <div className={styles.terminalContainer}>
          <AgentTerminal />
        </div>
      </div>
    </section>
  );
};

export default AssistantTerminalSection;

```

### src/components/sections/ComingSoonSection/ComingSoonSection.module.css

```css
.comingSoonSection {
    width: 100%;
    padding: 4rem 2rem;
    min-height: calc(100vh - 160px);
    display: flex;
    align-items: center;
    justify-content: center;
}

.contentWrapper {
    max-width: var(--content-max-width);
    width: 100%;
    margin: 0 auto;
}

/* Header */
.header {
    text-align: center;
    margin-bottom: 3rem;
}

.title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-family: 'Fira Code', monospace;
}

.titlePrefix {
    color: var(--accent-secondary);
}

/* Dark theme title */
[data-theme="dark"] .title {
    color: var(--accent-secondary);
}

[data-theme="dark"] .titlePrefix {
    color: var(--accent-primary);
}

.subtitle {
    font-size: 1.25rem;
    color: var(--warning-color);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 0.5rem;
}

/* Description Card */
.descriptionCard {
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(6, 182, 212, 0.4);
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 16px rgba(6, 182, 212, 0.1);
}

[data-theme="light"] .descriptionCard {
    background: rgba(255, 255, 255, 0.98);
    border: 1px solid rgba(217, 119, 6, 0.4);
    box-shadow: 0 2px 8px rgba(217, 119, 6, 0.12);
}

.description {
    font-size: 1.125rem;
    line-height: 1.8;
    color: var(--text-secondary);
    text-align: center;
    margin: 0;
}

/* Features Card */
.featuresCard {
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(6, 182, 212, 0.4);
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 3rem;
    box-shadow: 0 4px 16px rgba(6, 182, 212, 0.1);
}

[data-theme="light"] .featuresCard {
    background: rgba(255, 255, 255, 0.98);
    border: 1px solid rgba(217, 119, 6, 0.4);
    box-shadow: 0 2px 8px rgba(217, 119, 6, 0.12);
}

.featuresTitle {
    font-size: 1.5rem;
    color: var(--accent-secondary);
    margin-bottom: 1.5rem;
    font-family: 'Fira Code', monospace;
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.icon {
    font-size: 1.25em;
}

.featuresList {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 1rem;
}

.featureItem {
    font-size: 1rem;
    color: var(--text-secondary);
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    line-height: 1.6;
}

.bullet {
    color: var(--accent-primary);
    font-weight: 600;
    flex-shrink: 0;
    margin-top: 0.1rem;
}

/* Terminal Section */
.terminalSection {
    margin-bottom: 3rem;
}

.terminalTitle {
    font-size: 1.75rem;
    color: var(--accent-secondary);
    margin-bottom: 1rem;
    font-family: 'Fira Code', monospace;
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.terminalDescription {
    font-size: 1rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.6;
}

/* CTA Section */
.ctaSection {
    text-align: center;
    padding: 2rem;
    background: rgba(var(--accent-primary-rgb), 0.05);
    border-radius: 12px;
    border: 1px solid rgba(var(--accent-primary-rgb), 0.2);
}

[data-theme="light"] .ctaSection {
    background: rgba(217, 119, 6, 0.04);
    border-color: rgba(217, 119, 6, 0.15);
}

.ctaText {
    font-size: 1.125rem;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
}

.ctaButton {
    display: inline-block;
    padding: 1rem 2rem;
    background: var(--accent-secondary);
    color: var(--bg-primary);
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-family: 'Fira Code', monospace;
}

.ctaButton:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(var(--accent-secondary-rgb), 0.3);
}

/* Responsive */
@media (max-width: 768px) {
    .comingSoonSection {
        padding: 2rem 1rem;
    }

    .title {
        font-size: 2rem;
    }

    .subtitle {
        font-size: 1rem;
    }

    .descriptionCard,
    .featuresCard {
        padding: 1.5rem;
    }

    .description {
        font-size: 1rem;
    }

    .featuresTitle,
    .terminalTitle {
        font-size: 1.25rem;
    }

    .featureItem {
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .comingSoonSection {
        padding: 1.5rem 0.75rem;
    }

    .title {
        font-size: 1.75rem;
    }

    .subtitle {
        font-size: 0.875rem;
        letter-spacing: 1px;
    }

    .descriptionCard,
    .featuresCard {
        padding: 1rem;
    }

    .description {
        font-size: 0.95rem;
    }

    .ctaButton {
        width: 100%;
    }
}

```

### src/components/sections/ComingSoonSection/ComingSoonSection.tsx

```tsx
import React from 'react';
import InteractiveTerminal from '../../ui/InteractiveTerminal/InteractiveTerminal';
import styles from './ComingSoonSection.module.css';

interface ComingSoonSectionProps {
  pageName: string;
  title: string;
  description: string;
  features?: string[];
}

const ComingSoonSection: React.FC<ComingSoonSectionProps> = ({ 
  pageName, 
  title, 
  description,
  features = []
}) => {
  return (
    <section id={pageName} className={styles.comingSoonSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <span className={styles.titlePrefix}>#</span> {title}
          </h1>
          <p className={styles.subtitle}>🚧 Under Active Development</p>
        </div>

        <div className={styles.descriptionCard}>
          <p className={styles.description}>{description}</p>
        </div>

        {features.length > 0 && (
          <div className={styles.featuresCard}>
            <h2 className={styles.featuresTitle}>
              <span className={styles.icon}>✨</span> Planned Features
            </h2>
            <ul className={styles.featuresList}>
              {features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  <span className={styles.bullet}>▹</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.terminalSection}>
          <h2 className={styles.terminalTitle}>
            <span className={styles.icon}>💻</span> Try the Interactive Terminal
          </h2>
          <p className={styles.terminalDescription}>
            While this page is under construction, explore my skills and projects using the terminal below:
          </p>
          <InteractiveTerminal />
        </div>

        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Want to stay updated on this page's launch?
          </p>
          <a href="/#connect" className={styles.ctaButton}>
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;

```

### src/components/sections/ConnectSection/ConnectSection.module.css

```css
/* ===========================
   Connect Section Styles
   =========================== */

.section {
  width: 100%;
  padding: 3rem 2rem 6rem;
  background: var(--section-hero-bg-gradient);
  position: relative;
  z-index: 1;
}

.sectionContent {
  max-width: 1200px;
  margin: 0 auto;
}

/* Header */
.sectionHeader {
  text-align: center;
  margin-bottom: 4rem;
}

.sectionTitle {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 20px;
}

.sectionTitle::before {
  content: '# ';
  color: var(--accent-secondary);
}

/* Dark theme - cyan # prefix and golden/yellow title */
[data-theme="dark"] .sectionTitle {
  color: var(--accent-secondary);
}

[data-theme="dark"] .sectionTitle::before {
  color: var(--accent-primary);
}

.sectionTitle::after {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-primary), var(--accent-secondary), transparent);
}

.subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
}

/* Terminal Container */
.terminalContainer {
  max-width: var(--content-max-width);
  width: 100%;
  margin: 0 auto;
}

/* Responsive Design */
@media (max-width: 968px) {
  .section {
    padding: 6rem 1.5rem 4rem;
  }

  .terminalContainer {
    margin: 0 auto;
    padding: 0 1rem;
  }
}

@media (max-width: 640px) {
  .section {
    padding: 5rem 1rem 3rem;
  }

  .sectionTitle {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .terminalContainer {
    margin: 0 auto;
    padding: 0;
  }
}

```

### src/components/sections/ConnectSection/ConnectSection.tsx

```tsx
import React from 'react';
import InteractiveTerminal from '../../ui/InteractiveTerminal/InteractiveTerminal';
import styles from './ConnectSection.module.css';

const ConnectSection: React.FC = () => {
  return (
    <section id="connect" className={styles.section}>
      <div className={styles.sectionContent}>
        {/* Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Let's Chat</h2>
          <p className={styles.subtitle}>
            Ready to start a conversation? Whether you're looking for a consultant, collaborator, 
            or technical advisor, let's discuss how we can work together to build something exceptional.
            Use the terminal below to explore my contact information and connect with me.
          </p>
        </div>

        {/* Interactive Terminal */}
        <div className={styles.terminalContainer}>
          <InteractiveTerminal />
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;

```

### src/components/sections/HeroSection/HeroSection.module.css

```css
.heroSection {
    padding: 4rem 2rem;
    padding-top: calc(80px + 4rem); /* Header height + normal padding */
    text-align: center;
    background: var(--section-hero-bg-gradient);
    position: relative;
}

.heroTitle {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: var(--hero-title-shadow);
    animation: subtleGlow 4s ease-in-out infinite;
    color: var(--accent-primary);
}

[data-theme="light"] .heroTitle {
    color: var(--accent-secondary);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.12),
                 0 0 12px rgba(217, 119, 6, 0.08);
    animation: none;
}

/* Option 1: Subtle Warm Glow */
.heroTitleOption1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--accent-primary);
}

[data-theme="light"] .heroTitleOption1 {
    color: var(--accent-secondary);
    text-shadow: 0 2px 8px rgba(217, 119, 6, 0.15),
                 0 1px 2px rgba(0, 0, 0, 0.1);
    animation: none;
}

/* Option 2: Layered Depth */
.heroTitleOption2 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--accent-primary);
}

[data-theme="light"] .heroTitleOption2 {
    color: var(--accent-secondary);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1),
                 0 4px 8px rgba(217, 119, 6, 0.08),
                 0 8px 16px rgba(217, 119, 6, 0.05);
    animation: none;
}

/* Option 3: Crisp + Accent */
.heroTitleOption3 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--accent-primary);
}

[data-theme="light"] .heroTitleOption3 {
    color: var(--accent-secondary);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.12),
                 0 0 12px rgba(217, 119, 6, 0.08);
    animation: none;
}

/* Option 4: Enhanced Simple */
.heroTitleOption4 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--accent-primary);
}

[data-theme="light"] .heroTitleOption4 {
    color: var(--accent-secondary);
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    animation: none;
}

@keyframes subtleGlow {
    0%,100%{filter:hue-rotate(0deg);}
    25%{filter:hue-rotate(10deg);}
    75%{filter:hue-rotate(-10deg);}
}

.heroSubtitle {
    font-size:1.3rem;
    color:var(--accent-secondary);
    margin-bottom:2rem;
    font-weight:500;
}

[data-theme="light"] .heroSubtitle {
    color: #f59e0b;
}

.typewriter {
    font-size:1.2rem;
    margin-bottom:2rem;
    min-height:2rem;
    color:var(--accent-tertiary);
}

[data-theme="light"] .typewriter {
    color: #0891b2;
}

.codeBlock {
    background:var(--bg-card);
    border:1px solid var(--border-card);
    border-radius:8px;
    padding:2rem;
    margin:2rem auto;
    max-width:var(--content-max-width);
    width: 100%;
    text-align:left;
    font-family:'Fira Code',monospace;
    font-size:0.9rem;
    line-height:1.6;
    box-shadow: var(--card-shadow);
    transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
    position: relative;
}

[data-theme="dark"] .codeBlock {
    background: rgba(10, 15, 28, 0.7);
    backdrop-filter: blur(10px);
}

[data-theme="light"] .codeBlock {
    border-color: rgba(249, 115, 22, 0.4);
}

.jsonGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-bottom: 1.5rem;
    position: relative;
}

.jsonGrid::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 1px;
    background: linear-gradient(
        to bottom,
        transparent 0%,
        var(--border-card) 10%,
        var(--border-card) 90%,
        transparent 100%
    );
    transform: translateX(-50%);
}

[data-theme="light"] .jsonGrid::before {
    background: linear-gradient(
        to bottom,
        transparent 0%,
        var(--accent-secondary) 10%,
        var(--accent-secondary) 90%,
        transparent 100%
    );
}

.jsonColumn {
    min-width: 0;
    padding: 0 1rem;
}

.deploymentSection {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border-card);
}

[data-theme="light"] .deploymentSection {
    border-top-color: #f59e0b;
}

.commandLine {
    color:var(--accent-secondary);
    margin-bottom:0.5rem;
}

[data-theme="light"] .commandLine {
    color: var(--accent-secondary);
}

.output {
    color:var(--text-primary);
    margin-left:2rem;
}

[data-theme="light"] .output {
    color: #1e293b;
}

.outputNested {
    color:var(--text-primary);
    margin-left:4rem;
}

.outputRoot {
    color:var(--text-primary);
    margin-left:0;
}

.jsonKey {
    color:var(--json-key-color);
}

[data-theme="light"] .jsonKey {
    color: #0e7490;
}

.jsonString {
    color:var(--accent-primary);
}

[data-theme="light"] .jsonString {
    color: #0369a1;
}

.jsonBoolean, .jsonNumber {
    color:var(--accent-secondary);
}

[data-theme="light"] .jsonBoolean, 
[data-theme="light"] .jsonNumber {
    color: #f59e0b;
}

.jsonBrace {
    color: #00FF41;
    font-weight: 600;
    opacity: 0.9;
}

[data-theme="light"] .jsonBrace {
    color: #1e40af;
    opacity: 1;
}

.jsonBraceOuter {
    color: var(--accent-secondary);
    font-weight: 700;
    font-size: 1.1em;
}

[data-theme="light"] .jsonBraceOuter {
    color: #ea580c;
}

.jsonBracket {
    color: #00d4ff;
    font-weight: 600;
}

[data-theme="light"] .jsonBracket {
    color: #1e40af;
}

.codeBlock .output .success {
    color:var(--success);
}

.success {
    color:var(--success);
}

[data-theme="light"] .success {
    color: #10b981;
}

.ctaButtons {
    display:flex;
    justify-content:center;
    gap:1rem;
    margin:2rem auto 0;
    flex-wrap:wrap;
    max-width: var(--content-max-width);
    width: 100%;
}

.ctaButton {
    padding:0.8rem 1.5rem;
    border-radius:5px;
    font-family:'Fira Code',monospace;
    font-weight:500;
    transition:all 0.3s ease;
    position:relative;
    text-decoration:none;
    background: var(--cta-button-bg);
    border: 1px solid var(--cta-button-border);
    color: var(--cta-button-text);
}

[data-theme="light"] .ctaButton {
    background: #ffffff;
    border: 1px solid var(--accent-secondary);
    color: var(--accent-secondary);
}

.ctaButton:hover {
    background: var(--cta-button-hover-bg);
    border-color: var(--cta-button-hover-border);
    color: var(--cta-button-hover-text);
    box-shadow: 0 0 20px var(--cta-button-hover-shadow);
    transform: translateY(-2px);
}

[data-theme="light"] .ctaButton:hover {
    background: var(--accent-secondary);
    border-color: var(--accent-secondary);
    color: #ffffff;
    box-shadow: 0 0 20px var(--glow-secondary);
}

.ctaButton::before {
    content:'> ';
}

@media (max-width: 768px) {
    .heroSection {
        padding: 3rem 1.5rem;
        padding-top: calc(70px + 3rem); /* Header height (tablet) + normal padding */
    }

    .heroTitle {
        font-size: 2.5rem;
    }

    .heroSubtitle {
        font-size: 1.1rem;
    }

    .typewriter {
        font-size: 1rem;
    }

    .codeBlock {
        padding: 1.5rem;
        font-size: 0.8rem;
    }

    .jsonGrid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .jsonGrid::before {
        display: none;
    }

    .jsonColumn {
        padding: 0;
    }

    .output {
        margin-left: 1rem;
    }

    .ctaButtons {
        flex-direction: column;
        width: 100%;
    }

    .ctaButton {
        width: 100%;
        text-align: center;
    }
}

@media (max-width: 480px) {
    .heroSection {
        padding: 2rem 1rem;
        padding-top: calc(60px + 2rem); /* Header height (mobile) + normal padding */
    }

    .heroTitle {
        font-size: 1.8rem;
    }

    .heroSubtitle {
        font-size: 0.95rem;
    }

    .typewriter {
        font-size: 0.9rem;
    }

    .codeBlock {
        padding: 1rem;
        font-size: 0.75rem;
    }

    .output {
        margin-left: 0.5rem;
    }
}

```

### src/components/sections/HeroSection/HeroSection.tsx

```tsx
import React from 'react';
import styles from './HeroSection.module.css';
import useTypewriter from '../../../hooks/useTypewriter';

const messages = [
  "Architecting agentic AI systems (LangGraph, MCP)...",
  "Building production RAG pipelines (95% precision)...",
  "Deploying multi-agent workflows (200% conversion)...",
  "Engineering cloud-native ML platforms (×50 faster)...",
  "Mentoring 1000+ students in AI/ML...",
  "Democratizing AI education through YuriODev..."
];

const HeroSection: React.FC = () => {
  const typedMessage = useTypewriter(messages);

  return (
    <section className={styles.heroSection} id="hero" role="banner">
      <h1 className={styles.heroTitle}>YURII OKSAMYTNYI</h1>
      <p className={styles.heroSubtitle}>AI/ML Systems Engineer | Agentic Architect</p>
      <div className={styles.typewriter} id="typewriter" aria-live="polite">{typedMessage}</div>
      <div className={styles.codeBlock} role="region" aria-label="Profile information">
        <div className={styles.jsonGrid}>
          {/* First JSON File - Profile */}
          <div className={styles.jsonColumn}>
            <div className={styles.commandLine}>$ cat ./profile.json</div>
            <div className={styles.outputRoot}><span className={styles.jsonBraceOuter}>{'{'}</span></div>
            <div className={styles.output}>{'  '}<span className={styles.jsonKey}>"name"</span>: <span className={styles.jsonString}>"Yurii Oksamytnyi"</span>,</div>
            <div className={styles.output}>{'  '}<span className={styles.jsonKey}>"title"</span>: <span className={styles.jsonString}>"AI/ML Systems Engineer"</span>,</div>
            <div className={styles.output}>{'  '}<span className={styles.jsonKey}>"specialization"</span>: <span className={styles.jsonString}>"Agentic Architect"</span>,</div>
            <div className={styles.output}>{'  '}<span className={styles.jsonKey}>"location"</span>: <span className={styles.jsonString}>"London, UK"</span>,</div>
            <div className={styles.output}>{'  '}<span className={styles.jsonKey}>"education"</span>: <span className={styles.jsonBrace}>{'{'}</span></div>
            <div className={styles.outputNested}>{'    '}<span className={styles.jsonKey}>"degree"</span>: <span className={styles.jsonString}>"BSc Computer Science"</span>,</div>
            <div className={styles.outputNested}>{'    '}<span className={styles.jsonKey}>"university"</span>: <span className={styles.jsonString}>"Moscow Institute of Physics and Technology"</span>,</div>
            <div className={styles.outputNested}>{'    '}<span className={styles.jsonKey}>"certifications"</span>: <span className={styles.jsonBracket}>[</span><span className={styles.jsonString}>"MLX Graduate"</span><span className={styles.jsonBracket}>]</span></div>
            <div className={styles.output}>{'  '}<span className={styles.jsonBrace}>{'}'}</span>,{''}</div>
            <div className={styles.output}>{'  '}<span className={styles.jsonKey}>"platform"</span>: <span className={styles.jsonString}>"YuriODev.co.uk"</span>,</div>
            <div className={styles.output}>{'  '}<span className={styles.jsonKey}>"mission"</span>: <span className={styles.jsonString}>"Democratizing AI/ML through hands-on learning"</span></div>
            <div className={styles.outputRoot}><span className={styles.jsonBraceOuter}>{'}'}</span></div>
          </div>
          
          {/* Second JSON File - Systems & Expertise */}
          <div className={styles.jsonColumn}>
            <div className={styles.commandLine}>$ cat ./systems.json</div>
            <div className={styles.outputRoot}><span className={styles.jsonBraceOuter}>{'{'}</span></div>
            <div className={styles.output}>{'  '}<span className={styles.jsonKey}>"experience"</span>: <span className={styles.jsonString}>"8+ years in production AI"</span>,</div>
            <div className={styles.output}>{'  '}<span className={styles.jsonKey}>"core_expertise"</span>: <span className={styles.jsonBrace}>{'{'}</span></div>
            <div className={styles.outputNested}>{'    '}<span className={styles.jsonKey}>"agentic_systems"</span>: <span className={styles.jsonBracket}>[</span><span className={styles.jsonString}>"LangGraph"</span>, <span className={styles.jsonString}>"MCP"</span>, <span className={styles.jsonString}>"Multi-Agent"</span><span className={styles.jsonBracket}>]</span>,</div>
            <div className={styles.outputNested}>{'    '}<span className={styles.jsonKey}>"rag_pipelines"</span>: <span className={styles.jsonBracket}>[</span><span className={styles.jsonString}>"Vector DBs"</span>, <span className={styles.jsonString}>"Retrieval"</span>, <span className={styles.jsonString}>"Reranking"</span><span className={styles.jsonBracket}>]</span>,</div>
            <div className={styles.outputNested}>{'    '}<span className={styles.jsonKey}>"ml_ops"</span>: <span className={styles.jsonBracket}>[</span><span className={styles.jsonString}>"Cloud Native"</span>, <span className={styles.jsonString}>"CI/CD"</span>, <span className={styles.jsonString}>"Monitoring"</span><span className={styles.jsonBracket}>]</span></div>
            <div className={styles.output}>{'  '}<span className={styles.jsonBrace}>{'}'}</span>,{''}</div>
            <div className={styles.output}>{'  '}<span className={styles.jsonKey}>"status"</span>: <span className={`${styles.success} ${styles.jsonValue}`}>"deploying_enterprise_ai"</span></div>
            <div className={styles.outputRoot}><span className={styles.jsonBraceOuter}>{'}'}</span></div>
          </div>
        </div>
        
        {/* Deployment command section */}
        <div className={styles.deploymentSection}>
          <div className={styles.commandLine}>$ ./deploy_ai_systems.sh --mode=production --scale=enterprise</div>
          <div className={`${styles.output} ${styles.success}`}>✓ Agentic frameworks initialized (LangGraph, MCP)...</div>
          <div className={`${styles.output} ${styles.success}`}>✓ RAG pipelines optimized (95% precision)...</div>
          <div className={`${styles.output} ${styles.success}`}>✓ Multi-agent systems deployed...</div>
          <div className={styles.output}>Ready to architect your next AI breakthrough.</div>
        </div>
      </div>
      <div className={styles.ctaButtons}>
        <a href="#platform" className={styles.ctaButton}>Explore YuriODev Vision</a>
        <a href="#projects" className={styles.ctaButton}>View Research & Projects</a>
        <a href="mailto:contact@yuriodev.co.uk" className={styles.ctaButton}>Collaborate with Me</a>
      </div>
    </section>
  );
};

export default HeroSection;

```

### src/components/sections/PlaceholderPage/PlaceholderPage.module.css

```css
.placeholderContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: var(--bg-primary);
  position: relative;
}

.terminalWindow {
  max-width: 900px;
  width: 100%;
  background: var(--bg-card);
  border: 1px solid var(--accent-primary);
  border-radius: 8px;
  box-shadow: 0 0 30px var(--glow-primary);
  overflow: hidden;
  font-family: 'Fira Code', monospace;
}

.terminalHeader {
  background: rgba(var(--accent-primary-rgb), 0.1);
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid var(--accent-primary);
}

.terminalButton {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.terminalTitle {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-left: auto;
}

.terminalBody {
  padding: 2rem;
  min-height: 400px;
}

.terminalLine {
  margin-bottom: 1rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.terminalPrompt {
  color: var(--accent-secondary);
  font-weight: 600;
  margin-right: 0.5rem;
}

.terminalCommand {
  color: var(--accent-primary);
  font-weight: 500;
}

.cursor {
  animation: blink 1s infinite;
  color: var(--accent-primary);
  font-weight: bold;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.terminalOutput {
  margin: 2rem 0;
  padding-left: 1rem;
}

.outputLine {
  margin-bottom: 0.75rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

.outputLabel {
  color: var(--accent-primary);
  font-weight: 600;
  margin-right: 0.5rem;
}

.statusBadge {
  background: rgba(var(--accent-secondary-rgb), 0.2);
  color: var(--accent-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-weight: 600;
  border: 1px solid var(--accent-secondary);
}

.outputWarning {
  color: var(--accent-secondary);
  font-weight: 600;
  font-size: 1.1rem;
}

.terminalLink {
  color: var(--accent-primary);
  text-decoration: none;
  border-bottom: 1px dashed var(--accent-primary);
  transition: all 0.3s ease;
  font-weight: 500;
}

.terminalLink:hover {
  color: var(--accent-secondary);
  border-bottom-color: var(--accent-secondary);
  text-shadow: 0 0 10px var(--glow-secondary);
}

.backButtonContainer {
  margin-top: 2rem;
}

.backButton {
  display: inline-block;
  padding: 1rem 2rem;
  background: rgba(var(--accent-primary-rgb), 0.1);
  color: var(--accent-primary);
  border: 1px solid var(--accent-primary);
  border-radius: 5px;
  text-decoration: none;
  font-family: 'Fira Code', monospace;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px var(--glow-primary);
}

.backButton:hover {
  background: rgba(var(--accent-secondary-rgb), 0.2);
  color: var(--accent-secondary);
  border-color: var(--accent-secondary);
  box-shadow: 0 0 20px var(--glow-secondary);
  transform: translateY(-2px);
}

/* Responsive design */
@media (max-width: 768px) {
  .terminalBody {
    padding: 1.5rem;
  }
  
  .terminalPrompt {
    font-size: 0.9rem;
  }
  
  .terminalCommand {
    font-size: 0.9rem;
  }
  
  .outputLine {
    font-size: 0.9rem;
  }
  
  .outputWarning {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .placeholderContainer {
    padding: 1rem;
  }
  
  .terminalBody {
    padding: 1rem;
  }
  
  .terminalPrompt {
    font-size: 0.8rem;
  }
  
  .terminalCommand {
    font-size: 0.8rem;
    word-break: break-all;
  }
  
  .outputLine {
    font-size: 0.85rem;
  }
  
  .backButton {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
}

```

### src/components/sections/PlaceholderPage/PlaceholderPage.tsx

```tsx
import React from 'react';
import styles from './PlaceholderPage.module.css';

interface PlaceholderPageProps {
  pageName: string;
  description: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ pageName, description }) => {
  return (
    <div className={styles.placeholderContainer}>
      <div className={styles.terminalWindow}>
        <div className={styles.terminalHeader}>
          <span className={styles.terminalButton} style={{ background: '#ff5f56' }}></span>
          <span className={styles.terminalButton} style={{ background: '#ffbd2e' }}></span>
          <span className={styles.terminalButton} style={{ background: '#27c93f' }}></span>
          <span className={styles.terminalTitle}>yuriodev@terminal:~/{pageName}</span>
        </div>
        <div className={styles.terminalBody}>
          <div className={styles.terminalLine}>
            <span className={styles.terminalPrompt}>yurii@yuriodev:~$</span>
            <span className={styles.terminalCommand}> ./check_status --page={pageName}</span>
          </div>
          <div className={styles.terminalOutput}>
            <div className={styles.outputLine}>
              <span className={styles.outputLabel}>[INFO]</span> Initializing {pageName} module...
            </div>
            <div className={styles.outputLine}>
              <span className={styles.outputLabel}>[STATUS]</span> Module Status: <span className={styles.statusBadge}>UNDER DEVELOPMENT</span>
            </div>
            <div className={styles.outputLine}>
              <span className={styles.outputLabel}>[DESC]</span> {description}
            </div>
            <div className={styles.outputLine}>&nbsp;</div>
            <div className={styles.outputLine}>
              <span className={styles.outputWarning}>⚠ This page is currently under construction</span>
            </div>
            <div className={styles.outputLine}>&nbsp;</div>
            <div className={styles.outputLine}>
              <span className={styles.outputLabel}>[SUGGESTION]</span> In the meantime, check out:
            </div>
            <div className={styles.outputLine} style={{ paddingLeft: '2rem' }}>
              → <a href="/" className={styles.terminalLink}>Portfolio (About)</a> - Learn about my work and experience
            </div>
            <div className={styles.outputLine} style={{ paddingLeft: '2rem' }}>
              → <a href="/#projects" className={styles.terminalLink}>Projects</a> - View my latest work
            </div>
            <div className={styles.outputLine} style={{ paddingLeft: '2rem' }}>
              → <a href="/#connect" className={styles.terminalLink}>Connect</a> - Get in touch with me
            </div>
          </div>
          <div className={styles.terminalLine}>
            <span className={styles.terminalPrompt}>yurii@yuriodev:~$</span>
            <span className={styles.cursor}>_</span>
          </div>
        </div>
      </div>
      <div className={styles.backButtonContainer}>
        <a href="/" className={styles.backButton}>
          ← Back to Portfolio
        </a>
      </div>
    </div>
  );
};

export default PlaceholderPage;

```

### src/components/sections/PlatformSection/PlatformSection.module.css

```css
/* ===========================
   Platform Section Styles
   =========================== */

.sectionFullwidthShaded {
  width: 100%;
  padding: 3rem 2rem 3rem;
  position: relative;
  z-index: 1;
}

.sectionFullwidthShaded::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--accent-primary),
    transparent
  );
}

.sectionContentWrapper {
  max-width: var(--content-max-width);
  width: 100%;
  margin: 0 auto;
}

/* Header */
.sectionHeader {
  text-align: center;
  margin-bottom: 4rem;
}

.sectionTitle {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 20px;
}

.sectionTitle::before {
  content: '# ';
  color: var(--accent-secondary);
}

/* Dark theme - cyan # prefix and golden/yellow title */
[data-theme="dark"] .sectionTitle {
  color: var(--accent-secondary);
}

[data-theme="dark"] .sectionTitle::before {
  color: var(--accent-primary);
}

.sectionTitle::after {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-primary), var(--accent-secondary), transparent);
}

.tagline {
  font-size: 1.5rem;
  color: var(--text-secondary);
  font-weight: 300;
  margin-bottom: 1.5rem;
}

.mission {
  font-size: 1.125rem;
  color: var(--text-tertiary);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
}

/* Current Phase Card */
.currentPhaseCard {
  backdrop-filter: blur(10px);
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(6, 182, 212, 0.4);
  box-shadow: 0 4px 16px rgba(6, 182, 212, 0.1);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 4rem;
  transition: all 0.3s ease;
}

.currentPhaseCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(var(--accent-secondary-rgb), 0.2);
  border-color: var(--accent-secondary);
}

/* Light theme card */
[data-theme="light"] .currentPhaseCard {
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(217, 119, 6, 0.4);
  box-shadow: 0 2px 8px rgba(217, 119, 6, 0.12);
}

[data-theme="light"] .currentPhaseCard:hover {
  box-shadow: 0 8px 24px rgba(217, 119, 6, 0.3);
  border-color: var(--accent-secondary);
}

.phaseHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.phaseTitle {
  font-size: 1.5rem;
  color: var(--text-primary);
  font-weight: 600;
  font-family: 'Fira Code', monospace;
}

.progressPercentage {
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent-secondary);
  font-family: 'Fira Code', monospace;
}

/* Light theme percentage */
[data-theme="light"] .progressPercentage {
  color: var(--accent-secondary);
}

.progressBar {
  height: 12px;
  background: rgba(var(--accent-primary-rgb), 0.1);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(var(--accent-primary-rgb), 0.2);
}

/* Light theme progress bar */
[data-theme="light"] .progressBar {
  background: rgba(217, 119, 6, 0.08);
  border-color: rgba(217, 119, 6, 0.2);
}

.progressFill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 6px;
  transition: width 1s ease-out;
  position: relative;
  overflow: hidden;
}

/* Light theme progress fill */
[data-theme="light"] .progressFill {
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
}

.progressFill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Roadmap Section */
.roadmapSection {
  margin-bottom: 4rem;
}

.roadmapTitle {
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 2rem;
  text-align: center;
}

.roadmapGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.roadmapCard {
  backdrop-filter: blur(10px);
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(6, 182, 212, 0.4);
  box-shadow: 0 4px 16px rgba(6, 182, 212, 0.1);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* Light theme roadmap card */
[data-theme="light"] .roadmapCard {
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(217, 119, 6, 0.4);
  box-shadow: 0 2px 8px rgba(217, 119, 6, 0.12);
}

.roadmapCard::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--accent-primary);
  transition: all 0.3s ease;
}

.roadmapCard.completed::before {
  background: #10b981;
}

.roadmapCard.active::before {
  background: var(--accent-secondary);
}

/* Light theme active before */
[data-theme="light"] .roadmapCard.active::before {
  background: var(--accent-secondary);
}

.roadmapCard.planned::before {
  background: var(--text-muted);
}

.roadmapCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(var(--accent-secondary-rgb), 0.2);
  border-color: var(--accent-secondary);
}

/* Light theme hover */
[data-theme="light"] .roadmapCard:hover {
  box-shadow: 0 8px 24px rgba(217, 119, 6, 0.3);
  border-color: var(--accent-secondary);
}

.phaseNumber {
  font-size: 0.875rem;
  color: var(--accent-primary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
  font-family: 'Fira Code', monospace;
}

/* Light theme phase number */
[data-theme="light"] .phaseNumber {
  color: var(--accent-secondary);
}

.phaseCardTitle {
  font-size: 1.25rem;
  color: var(--accent-secondary);
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: 'Fira Code', monospace;
}

/* Light theme phase card title - accent-secondary already correct */
[data-theme="light"] .phaseCardTitle {
  color: var(--accent-secondary);
}

.phaseDescription {
  font-size: 0.938rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.statusBadge {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.813rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-family: 'Fira Code', monospace;
  border: 1px solid;
}

.roadmapCard.completed .statusBadge {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border-color: #10b981;
}

.roadmapCard.active .statusBadge {
  background: rgba(var(--accent-secondary-rgb), 0.1);
  color: var(--accent-secondary);
  border-color: var(--accent-secondary);
}

/* Light theme active badge */
[data-theme="light"] .roadmapCard.active .statusBadge {
  background: rgba(217, 119, 6, 0.1);
  color: var(--accent-secondary);
  border-color: var(--accent-secondary);
}

.roadmapCard.planned .statusBadge {
  background: rgba(var(--text-muted-rgb), 0.1);
  color: var(--text-muted);
  border-color: var(--text-muted);
}

.completionDate {
  font-size: 0.813rem;
  color: var(--text-muted);
  font-style: italic;
  font-family: 'Fira Code', monospace;
}

/* Features Section */
.featuresSection {
  margin-bottom: 4rem;
}

.featuresTitle {
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 2rem;
  text-align: center;
}

.featuresGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.featureCard {
  background: var(--background-primary);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.featureCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  border-color: var(--accent-primary);
}

.featureIcon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.featureTitle {
  font-size: 1.25rem;
  color: var(--text-primary);
  font-weight: 600;
  margin-bottom: 1rem;
}

.featureDescription {
  font-size: 0.938rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

.featureFooter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.statusTag {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.813rem;
  font-weight: 600;
}

.statusTag.live {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.statusTag.beta {
  background: rgba(251, 191, 36, 0.1);
  color: #fbbf24;
}

.statusTag.coming-soon {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
}

.featureLink {
  color: var(--accent-primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.938rem;
  transition: all 0.2s ease;
}

.featureLink:hover {
  color: var(--accent-secondary);
  transform: translateX(4px);
}

/* Stats Section */
.statsSection {
  margin-bottom: 4rem;
}

.statsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.statCard {
  text-align: center;
  padding: 2rem;
  background: var(--background-primary);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.statCard:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.statValue {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.statLabel {
  font-size: 0.938rem;
  color: var(--text-secondary);
  font-weight: 500;
}

/* CTA Section */
.ctaSection {
  text-align: center;
  padding: 3rem;
  background: var(--background-primary);
  border-radius: 16px;
  border: 1px solid var(--border-color);
}

.ctaTitle {
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.ctaDescription {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.ctaButtons {
  max-width: var(--content-max-width);
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.ctaButton {
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
  border: none;
}

.ctaButton:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 107, 107, 0.3);
}

.ctaButton.secondary {
  background: transparent;
  color: var(--accent-primary);
  border: 2px solid var(--accent-primary);
}

.ctaButton.secondary:hover {
  background: var(--accent-primary);
  color: white;
  box-shadow: 0 8px 24px rgba(255, 107, 107, 0.2);
}

/* Responsive Design */
@media (max-width: 968px) {
  .sectionFullwidthShaded {
    padding: 6rem 1.5rem 4rem;
  }

  .sectionTitle {
    font-size: 2.5rem;
  }

  .tagline {
    font-size: 1.25rem;
  }

  .roadmapGrid {
    grid-template-columns: 1fr;
  }

  .featuresGrid {
    grid-template-columns: 1fr;
  }

  .statsGrid {
    grid-template-columns: repeat(2, 1fr);
  }

  .phaseHeader {
    flex-direction: column;
    align-items: flex-start;
  }

  .ctaButtons {
    flex-direction: column;
  }

  .ctaButton {
    width: 100%;
  }
}

@media (max-width: 640px) {
  .statsGrid {
    grid-template-columns: 1fr;
  }
}

```

### src/components/sections/PlatformSection/PlatformSection.tsx

```tsx
import React from 'react';
import { platformData } from '../../../data/platformData';
import styles from './PlatformSection.module.css';

const PlatformSection: React.FC = () => {
  return (
    <section id="platform" className={styles.sectionFullwidthShaded}>
      <div className={styles.sectionContentWrapper}>
        {/* Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{platformData.name}</h2>
          <p className={styles.tagline}>{platformData.tagline}</p>
          <p className={styles.mission}>{platformData.mission}</p>
        </div>

        {/* Current Phase Progress */}
        <div className={styles.currentPhaseCard}>
          <div className={styles.phaseHeader}>
            <h3 className={styles.phaseTitle}>
              Phase {platformData.currentPhase.phase}: {platformData.currentPhase.title}
            </h3>
            <span className={styles.progressPercentage}>{platformData.currentPhase.progress}%</span>
          </div>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ width: `${platformData.currentPhase.progress}%` }}
            />
          </div>
        </div>

        {/* Roadmap */}
        <div className={styles.roadmapSection}>
          <h3 className={styles.roadmapTitle}>Roadmap</h3>
          <div className={styles.roadmapGrid}>
            {platformData.roadmap.map((phase) => (
              <div 
                key={phase.phase}
                className={`${styles.roadmapCard} ${styles[phase.status]}`}
              >
                <div className={styles.phaseNumber}>Phase {phase.phase}</div>
                <h4 className={styles.phaseCardTitle}>{phase.title}</h4>
                <p className={styles.phaseDescription}>{phase.description}</p>
                <div className={styles.statusBadge}>
                  {phase.status === 'completed' && '✓ Completed'}
                  {phase.status === 'active' && '⚡ Active'}
                  {phase.status === 'planned' && '📋 Planned'}
                </div>
                {phase.completionDate && (
                  <div className={styles.completionDate}>{phase.completionDate}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features
        <div className={styles.featuresSection}>
          <h3 className={styles.featuresTitle}>Features & Tools</h3>
          <div className={styles.featuresGrid}>
            {platformData.features.map((feature, index) => (
              <div key={index} className={`${styles.featureCard} ${styles[feature.status]}`}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDescription}>{feature.description}</p>
                <div className={styles.featureFooter}>
                  <span className={`${styles.statusTag} ${styles[feature.status]}`}>
                    {feature.status === 'live' && '🟢 Live'}
                    {feature.status === 'beta' && '🟡 Beta'}
                    {feature.status === 'coming-soon' && '🔵 Coming Soon'}
                  </span>
                  {feature.link && (
                    <a 
                      href={feature.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.featureLink}
                    >
                      View →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Stats */}
        {/* <div className={styles.statsSection}>
          <div className={styles.statsGrid}>
            {platformData.stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA */}
        {/* <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>Join the Journey</h3>
          <p className={styles.ctaDescription}>
            Be part of democratizing AI/ML education. Early access and beta testing opportunities available.
          </p>
          <div className={styles.ctaButtons}>
            <a 
              href="https://github.com/YurioDev/Python-Course" 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Explore Python Course
            </a>
            <a 
              href="mailto:yurii.oksamytnyi@yuriodev.co.uk?subject=YuriODev Early Access"
              className={`${styles.ctaButton} ${styles.secondary}`}
            >
              Request Early Access
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PlatformSection;

```

### src/components/sections/ProjectsSection/ProjectsSection.module.css

```css
/* Background now controlled by global.css nth-child rules */

.sectionContentWrapper {
    max-width: var(--content-max-width);
    width: 100%;
    margin: 0 auto;
    padding: 4rem 2rem;
}

.sectionHeader {
    text-align:center;
    margin-bottom:3rem;
}

.sectionTitle {
    font-size:2.5rem;
    color:var(--text-primary);
    margin-bottom:1rem;
    position:relative;
    padding-bottom: 20px;
}

.sectionTitle::before {
    content:'# ';
    color:var(--accent-secondary);
}

/* Dark theme - cyan # prefix and golden/yellow title */
[data-theme="dark"] .sectionTitle {
    color: var(--accent-secondary);
}

[data-theme="dark"] .sectionTitle::before {
    color: var(--accent-primary);
}

.sectionTitle::after {
    content:'';
    position:absolute;
    bottom: 0px;
    left:50%;
    transform:translateX(-50%);
    width: 80px;
    height:2px;
    background:linear-gradient(90deg,transparent,var(--accent-primary),var(--accent-secondary),transparent);
}

.projectsShowcase {
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:2rem;
    margin-top:3rem;
    align-items:start;
}

@media (max-width: 768px) {
    .projectsShowcase {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .sectionContentWrapper {
        padding: 2rem 1rem;
    }

    .sectionTitle {
        font-size: 2rem;
    }
}

@media (max-width: 480px) {
    .sectionTitle {
        font-size: 1.5rem;
    }

    .sectionContentWrapper {
        padding: 1.5rem 0.75rem;
    }
}

```

### src/components/sections/ProjectsSection/ProjectsSection.tsx

```tsx
import React from 'react';
import { projectsData } from '../../../services/projectsData';
import ProjectCard from '../../ui/ProjectCard/ProjectCard';
import styles from './ProjectsSection.module.css';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className={styles.sectionFullwidthShaded}>
      <div className={styles.sectionContentWrapper}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p>
            Recent work demonstrating agentic AI systems, educational platform engineering, and 
            production-grade architecture from first principles.
          </p>
        </div>
        <div className={styles.projectsShowcase}>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

```

### src/components/sections/SkillsSection/SkillsSection.module.css

```css
/* Background now controlled by global.css nth-child rules */

.sectionContentWrapper {
    max-width: var(--content-max-width);
    width: 100%;
    margin: 0 auto;
    padding: 4rem 2rem;
}

.sectionHeader {
    text-align:center;
    margin-bottom:3rem;
}

.sectionTitle {
    font-size:2.5rem;
    color:var(--text-primary);
    margin-bottom:1rem;
    position:relative;
    padding-bottom: 20px;
}

.sectionTitle::before {
    content:'# ';
    color:var(--accent-secondary);
}

/* Dark theme - cyan # prefix and golden/yellow title */
[data-theme="dark"] .sectionTitle {
    color: var(--accent-secondary);
}

[data-theme="dark"] .sectionTitle::before {
    color: var(--accent-primary);
}

.sectionTitle::after {
    content:'';
    position:absolute;
    bottom: 0px;
    left:50%;
    transform:translateX(-50%);
    width: 80px;
    height:2px;
    background:linear-gradient(90deg,transparent,var(--accent-primary),var(--accent-secondary),transparent);
}

.skillsMatrix {
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:2rem;
    margin-top:3rem;
}

@media (max-width: 768px) {
    .skillsMatrix {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .sectionContentWrapper {
        padding: 2rem 1rem;
    }

    .sectionTitle {
        font-size: 2rem;
    }
}

@media (max-width: 480px) {
    .sectionTitle {
        font-size: 1.5rem;
    }

    .sectionContentWrapper {
        padding: 1.5rem 0.75rem;
    }
}

```

### src/components/sections/SkillsSection/SkillsSection.tsx

```tsx
import React from 'react';
import { skillsData } from '../../../services/skillsData';
import SkillTerminal from '../../ui/SkillTerminal/SkillTerminal';
import styles from './SkillsSection.module.css';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className={styles.sectionFullwidthShaded}>
      <div className={styles.sectionContentWrapper}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Technical Competency Matrix</h2>
          <p>
            Comprehensive skill set spanning AI/ML engineering, full-stack development, research methodology, and educational design.
          </p>
        </div>
        <div className={styles.skillsMatrix}>
          {skillsData.map((skill) => (
            <SkillTerminal key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

```

### src/components/sections/TimelineSection/TimelineItem.module.css

```css
/* TimelineItem.module.css */

.timelineItem {
  position: relative;
  width: 100%;
  max-width: 100%;
  padding: 2rem 0;
  display: flex;
  align-items: flex-start;
}

.timelineItem.left {
  justify-content: flex-end;
}

.timelineItem.right {
  justify-content: flex-start;
}

/* Timeline Dot - Now inside card header */
.timelineDot {
  width: 40px;
  height: 40px;
  min-width: 40px;  /* Prevent shrinking */
  border-radius: 50%;
  border: 3px solid var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 0 0 4px var(--bg-primary), 0 0 20px rgba(var(--accent-primary-rgb), 0.4);
  transition: all 0.3s ease;
  margin: 0;  /* Equal margins - controlled by gap */
}

/* Dark theme - Cyan glow */
.timelineDot {
  box-shadow: 0 0 0 4px var(--bg-primary), 0 0 20px rgba(var(--accent-primary-rgb), 0.5);
}

/* Light theme - Orange glow */
[data-theme="light"] .timelineDot {
  box-shadow: 0 0 0 4px var(--bg-primary), 0 0 20px rgba(249, 115, 22, 0.4);
}

.timelineDot .typeIcon {
  font-size: 1.2rem;
}

/* Remove old positioning styles - dot is now in header */
/* Icon in Card Header - deprecated, using timelineDot instead */
.cardHeader .typeIcon {
  font-size: 1.2rem;
}

/* Timeline Card */
.timelineCard {
  width: calc(50%);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  animation: slideIn 0.5s ease-out;
  backdrop-filter: blur(10px);
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(6, 182, 212, 0.4);  /* Cyan border for dark theme */
  box-shadow: 0 4px 16px rgba(6, 182, 212, 0.1);  /* Cyan glow for dark theme */
  position: relative;
}

/* Shimmer effect on top border */
.timelineCard::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--accent-secondary);
  transform: scaleX(0);
  transition: transform 0.3s ease;
  z-index: 2;
}

.timelineCard:hover::before {
  transform: scaleX(1);
}

/* Light theme - Enhanced card with orange accent */
[data-theme="light"] .timelineCard {
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(249, 115, 22, 0.4);  /* Orange border - more visible */
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}

.timelineItem.left .timelineCard {
  margin-right: 0px;
}

.timelineItem.right .timelineCard {
  margin-left: 0px;
}

/* Dark theme hover - Cyan glow */
.timelineCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(var(--accent-secondary-rgb), 0.2);
  border-color: var(--accent-secondary);
}

/* Light theme hover - Orange glow */
[data-theme="light"] .timelineCard:hover {
  box-shadow: 0 8px 24px rgba(249, 115, 22, 0.3) !important;
  border-color: #f97316 !important;
  transform: translateY(-4px);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Card Header */
.cardHeader {
  background: rgba(var(--accent-primary-rgb), 0.1);
  border-bottom: 1px solid var(--border-card);
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  gap: 1rem;
}

/* Dark theme - Cyan overlay */
.cardHeader {
  background: rgba(6, 182, 212, 0.08);  /* Cyan overlay */
  border-bottom-color: rgba(6, 182, 212, 0.3);  /* Cyan border */
}

/* Light theme - Orange overlay */
[data-theme="light"] .cardHeader {
  background: rgba(249, 115, 22, 0.06);
  border-bottom-color: rgba(249, 115, 22, 0.2);
}

/* Header content wrapper (for date + badges grouping) */
.headerContent {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  flex: 1;
  justify-content: center;  /* Center content by default */
  min-width: 0;  /* Allow shrinking */
}

/* Left cards: Dot → Date → Type */
.timelineItem.left .cardHeader {
  flex-direction: row;
  justify-content: flex-start;
}

.timelineItem.left .headerContent {
  justify-content: center;  /* Center the content */
  flex: 1;
}

.timelineItem.left .typeLabel {
  margin-left: 0;
}

/* Right cards: Type → Date → Dot */
.timelineItem.right .cardHeader {
  flex-direction: row;
  justify-content: flex-end;
}

.timelineItem.right .headerContent {
  justify-content: center;  /* Center the content */
  flex: 1;
  order: 2;
}

.timelineItem.right .typeLabel {
  order: 1;
  margin-right: 0;
}

.timelineItem.right .timelineDot {
  order: 3;
}

.dateRange {
  display: flex;
  align-items: center;
  justify-content: center;  /* Center when wrapping */
  gap: 0.5rem;
  flex-wrap: wrap;
  width: 100%;  /* Take full width to center properly */
}

.date {
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  color: var(--accent-primary);
  font-weight: 600;
}

/* Light theme - Orange dates */
[data-theme="light"] .date {
  color: #ea580c;
}

.dateSeparator {
  color: var(--text-muted);
}

/* Light theme - Orange separator */
[data-theme="light"] .dateSeparator {
  color: #94a3b8;
}

.ongoingBadge {
  font-size: 0.7rem;
  padding: 0.2rem 0.6rem;
  background: var(--accent-secondary);
  color: var(--bg-primary);
  border-radius: 4px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Light theme - Orange ongoing badge */
[data-theme="light"] .ongoingBadge {
  background: #f97316;
  color: white;
}

.typeLabel {
  font-size: 0.75rem;
  padding: 0.3rem 0.8rem;
  background: rgba(var(--accent-tertiary-rgb), 0.2);
  border: 1px solid var(--accent-tertiary);
  border-radius: 4px;
  color: var(--accent-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: 'Fira Code', monospace;
}

/* Light theme - Orange type label */
[data-theme="light"] .typeLabel {
  background: rgba(249, 115, 22, 0.1);
  border-color: #f97316;
  color: #ea580c;
}

/* Card Content */
.cardContent {
  padding: 1.5rem;
}

.title {
  font-size: 1.3rem;
  color: var(--accent-secondary);
  font-family: 'Fira Code', monospace;
  margin-bottom: 0.75rem;
  font-weight: 600;
  line-height: 1.4;
}

.company {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.companyName {
  font-size: 1rem;
  color: var(--text-primary);
  font-weight: 600;
}

.separator {
  color: var(--text-muted);
}

.location {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.description {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

/* Highlights Section */
.highlightsSection {
  margin: 1.5rem 0;
}

.expandButton {
  background: rgba(var(--accent-primary-rgb), 0.1);
  border: 1px solid var(--accent-primary);
  color: var(--accent-primary);
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  width: 100%;
  text-align: left;
}

/* Dark theme hover */
.expandButton:hover {
  background: rgba(var(--accent-primary-rgb), 0.2);
  box-shadow: 0 0 10px rgba(var(--accent-primary-rgb), 0.4);
}

/* Light theme - Orange styling */
[data-theme="light"] .expandButton {
  background: rgba(249, 115, 22, 0.08);
  border-color: #f97316;
  color: #ea580c;
}

[data-theme="light"] .expandButton:hover {
  background: #f97316;
  color: white;
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
}

.highlightsList {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.highlightItem {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.5rem 0;
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.9rem;
}

.highlightBullet {
  color: var(--accent-primary);
  font-size: 1.2rem;
  flex-shrink: 0;
  line-height: 1;
  margin-top: 0.1rem;
}

/* Light theme - Orange bullets */
[data-theme="light"] .highlightBullet {
  color: #f97316;
}

/* Tags */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tag {
  font-size: 0.75rem;
  padding: 0.3rem 0.8rem;
  background: rgba(var(--accent-primary-rgb), 0.1);
  border: 1px solid var(--accent-primary);
  border-radius: 4px;
  color: var(--accent-primary);
  font-family: 'Fira Code', monospace;
  transition: all 0.3s ease;
}

/* Tag Categories - Color Coding */

/* AI/ML Technologies - Purple */
.tag-ai {
  background: rgba(138, 43, 226, 0.15);
  border-color: #8A2BE2;
  color: #BB86FC;
}

.tag-ai:hover {
  background: rgba(138, 43, 226, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(138, 43, 226, 0.3);
}

/* Cloud & Infrastructure - Blue */
.tag-cloud {
  background: rgba(30, 144, 255, 0.15);
  border-color: #1E90FF;
  color: #4FC3F7;
}

.tag-cloud:hover {
  background: rgba(30, 144, 255, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(30, 144, 255, 0.3);
}

/* Programming Languages - Green */
.tag-language {
  background: rgba(0, 200, 83, 0.15);
  border-color: #00C853;
  color: #69F0AE;
}

.tag-language:hover {
  background: rgba(0, 200, 83, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 200, 83, 0.3);
}

/* Domain/Industry - Orange */
.tag-domain {
  background: rgba(255, 152, 0, 0.15);
  border-color: #FF9800;
  color: #FFB74D;
}

.tag-domain:hover {
  background: rgba(255, 152, 0, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3);
}

/* Development & Tools - Cyan */
.tag-tools {
  background: rgba(0, 188, 212, 0.15);
  border-color: #00BCD4;
  color: #4DD0E1;
}

.tag-tools:hover {
  background: rgba(0, 188, 212, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 188, 212, 0.3);
}

/* Education & Soft Skills - Pink */
.tag-education {
  background: rgba(255, 64, 129, 0.15);
  border-color: #FF4081;
  color: #FF80AB;
}

.tag-education:hover {
  background: rgba(255, 64, 129, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 64, 129, 0.3);
}

/* Default - Original accent color */
.tag-default {
  background: rgba(var(--accent-primary-rgb), 0.1);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

.tag-default:hover {
  background: rgba(var(--accent-primary-rgb), 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(var(--accent-primary-rgb), 0.3);
}

/* Event Link */
.eventLink {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  color: var(--accent-secondary);
  text-decoration: none;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--accent-secondary);
  border-radius: 4px;
  transition: all 0.3s ease;
  background: rgba(var(--accent-secondary-rgb), 0.05);
}

.eventLink:hover {
  background: rgba(var(--accent-secondary-rgb), 0.1);
  box-shadow: 0 0 10px rgba(var(--accent-secondary-rgb), 0.3);
  transform: translateX(4px);
}

/* Light theme - Orange link styling */
[data-theme="light"] .eventLink {
  color: #ea580c;
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.06);
}

[data-theme="light"] .eventLink:hover {
  background: #f97316;
  color: white;
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
}

/* Discord Link Styling */
.discordLink {
  color: #5865F2;
  border-color: #5865F2;
  background: rgba(88, 101, 242, 0.1);
}

.discordLink:hover {
  background: #5865F2;
  color: white;
  box-shadow: 0 4px 12px rgba(88, 101, 242, 0.4);
  transform: translateX(4px) translateY(-2px);
}

[data-theme="light"] .discordLink {
  color: #5865F2;
  border-color: #5865F2;
  background: rgba(88, 101, 242, 0.08);
}

[data-theme="light"] .discordLink:hover {
  background: #5865F2;
  color: white;
}

.linkIcon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

/* Responsive */

/* Desktop - Dot is in header (always visible) */
@media (min-width: 969px) {
  .timelineDot {
    display: flex;
  }
}

/* Mobile/Tablet - Still show dot in header */
@media (max-width: 968px) {
  .timelineItem {
    justify-content: center !important;  /* Center items on mobile */
  }
  
  .timelineDot {
    display: flex;
  }

  .timelineCard {
    width: 100%;
    max-width: 600px;  /* Limit width for better readability */
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  
  /* Mobile card styling - same colors as desktop */
  .timelineCard {
    background: rgba(15, 23, 42, 0.98) !important;
    border: 1px solid rgba(6, 182, 212, 0.5) !important;  /* Brighter cyan border */
    box-shadow: 0 4px 16px rgba(6, 182, 212, 0.15) !important;
  }
  
  [data-theme="light"] .timelineCard {
    background: rgba(255, 255, 255, 0.99) !important;
    border: 1px solid rgba(249, 115, 22, 0.5) !important;  /* Brighter orange border */
    box-shadow: 0 4px 16px rgba(249, 115, 22, 0.18) !important;
  }
  
  /* Mobile hover effects */
  .timelineCard:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 8px 24px rgba(6, 182, 212, 0.3) !important;
    border-color: #22d3ee !important;
  }
  
  [data-theme="light"] .timelineCard:hover {
    box-shadow: 0 8px 24px rgba(249, 115, 22, 0.35) !important;
    border-color: #f97316 !important;
  }
  
  /* Mobile: Consistent left-to-right layout for ALL cards */
  .cardHeader {
    flex-direction: row !important;
    justify-content: space-between !important;
    align-items: center !important;
    flex-wrap: nowrap !important;
    gap: 0.75rem !important;
  }
  
  /* Same layout for both left and right cards on mobile */
  .timelineItem.left .cardHeader,
  .timelineItem.right .cardHeader {
    flex-direction: row !important;
  }
  
  /* Mobile header content: centered */
  .headerContent {
    justify-content: center !important;
    align-items: center !important;
    flex: 1;
    min-width: 0;
  }
  
  /* Override left/right specific rules on mobile */
  .timelineItem.left .headerContent,
  .timelineItem.right .headerContent {
    order: 2;
    flex: 1;
    justify-content: center !important;
  }
  
  /* Dot always on the left on mobile for BOTH card types */
  .timelineItem.left .timelineDot,
  .timelineItem.right .timelineDot {
    order: 1 !important;
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    min-width: 32px;
  }
  
  /* Type label always on the right on mobile for BOTH card types */
  .timelineItem.left .typeLabel,
  .timelineItem.right .typeLabel {
    order: 3 !important;
    flex-shrink: 0;
    white-space: nowrap;
  }
  
  /* Center the date range on mobile */
  .dateRange {
    justify-content: center !important;
    flex-wrap: wrap;
    font-size: 0.85rem;
  }
  
  /* Smaller ongoing badge on mobile */
  .ongoingBadge {
    font-size: 0.65rem;
    padding: 0.15rem 0.5rem;
  }
}

@media (max-width: 768px) {
  .cardContent {
    padding: 1rem;
  }

  .title {
    font-size: 1.1rem;
  }

  .cardHeader {
    padding: 0.5rem 0.75rem !important;
    flex-wrap: nowrap !important;
    gap: 0.5rem !important;
  }
  
  .timelineDot {
    width: 28px !important;
    height: 28px !important;
    min-width: 28px !important;
  }
  
  .timelineDot .typeIcon {
    font-size: 0.9rem;
  }
  
  .typeLabel {
    font-size: 0.65rem !important;
    padding: 0.25rem 0.6rem !important;
  }
  
  .date {
    font-size: 0.8rem !important;
  }
  
  .ongoingBadge {
    font-size: 0.6rem !important;
    padding: 0.1rem 0.4rem !important;
  }
}

```

### src/components/sections/TimelineSection/TimelineItem.tsx

```tsx
import React, { useState } from 'react';
import type { TimelineEvent } from '../../../data/timelineData';
import styles from './TimelineItem.module.css';

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
}

const getTypeIcon = (type: string): string => {
  switch (type) {
    case 'experience':
      return '💼';
    case 'education':
      return '🎓';
    case 'certification':
      return '📜';
    case 'achievement':
      return '🏆';
    default:
      return '📌';
  }
};

const getTypeColor = (type: string): string => {
  switch (type) {
    case 'experience':
      return 'var(--accent-secondary)';
    case 'education':
      return 'var(--accent-primary)';
    case 'certification':
      return 'var(--accent-tertiary)';
    case 'achievement':
      return '#FFD700';
    default:
      return 'var(--text-primary)';
  }
};

const TimelineItem: React.FC<TimelineItemProps> = ({ event, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Parse LinkedIn links and make them clickable
  const renderLinkedInLinks = (text: string) => {
    // Pattern: Name (LinkedIn: URL) - more precise matching
    const linkedInPattern = /(\w+\s+\w+)\s*\(LinkedIn:\s*(https:\/\/[^\)]+)\)/g;
    const parts: (string | React.ReactElement)[] = [];
    let lastIndex = 0;
    let match;
    let matchCount = 0;

    while ((match = linkedInPattern.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      const name = match[1].trim();
      const url = match[2].trim();

      // Add LinkedIn icon + clickable name
      parts.push(
        <a 
          key={`linkedin-${matchCount++}`}
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            color: 'var(--accent-primary)',
            textDecoration: 'none',
            display: 'inline',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--accent-secondary)';
            e.currentTarget.style.textDecoration = 'underline';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--accent-primary)';
            e.currentTarget.style.textDecoration = 'none';
          }}
        >
          <svg 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            style={{ 
              display: 'inline-block',
              verticalAlign: 'middle',
              marginRight: '0.25rem',
            }}
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          {name}
        </a>
      );

      lastIndex = linkedInPattern.lastIndex;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  // Get tag category for color coding
  const getTagCategory = (tag: string): string => {
    const tagLower = tag.toLowerCase();
    
    // AI/ML Technologies
    if (['rag', 'langgraph', 'mcp', 'llms', 'ai', 'ml models', 'mlops', 'pytorch', 
         'machine learning', 'deep learning', 'nlp', 'computer vision', 'chromadb',
         'multi-agent systems', 'production ai'].some(term => tagLower.includes(term))) {
      return 'ai';
    }
    
    // Cloud & Infrastructure
    if (['aws', 'gcp', 'cloud', 'etl', 'pipelines', 'real-time systems', 
         'performance optimization'].some(term => tagLower.includes(term))) {
      return 'cloud';
    }
    
    // Programming Languages
    if (['python', 'swift', 'objective-c', 'c++', 'sql', 'fastapi'].some(term => tagLower.includes(term))) {
      return 'language';
    }
    
    // Domain/Industry
    if (['healthcare', 'fintech', 'financial', 'fraud detection', 'privacy engineering',
         'gdpr', 'time series', 'predictive analytics'].some(term => tagLower.includes(term))) {
      return 'domain';
    }
    
    // Development & Tools
    if (['ios', 'uikit', 'core data', 'rest apis', 'github actions', 'ci/cd',
         'open source', 'sales automation'].some(term => tagLower.includes(term))) {
      return 'tools';
    }
    
    // Education & Soft Skills
    if (['education', 'teaching', 'mentoring', 'course design', 'academic',
         'algorithms', 'data structures', 'systems programming', 'competitive programming'].some(term => tagLower.includes(term))) {
      return 'education';
    }
    
    // Default
    return 'default';
  };

  const isLeft = index % 2 === 0;

  return (
    <div className={`${styles.timelineItem} ${isLeft ? styles.left : styles.right}`}>
      <div className={styles.timelineCard}>
        <div className={styles.cardHeader}>
          {/* Timeline Dot - Left side for left cards */}
          {isLeft && (
            <div className={styles.timelineDot} style={{ backgroundColor: getTypeColor(event.type) }}>
              <span className={styles.typeIcon}>{getTypeIcon(event.type)}</span>
            </div>
          )}
          
          {/* Content wrapper for date + badges */}
          <div className={styles.headerContent}>
            <div className={styles.dateRange}>
              <span className={styles.date}>{event.date}</span>
              {event.dateEnd && (
                <>
                  <span className={styles.dateSeparator}>→</span>
                  <span className={styles.date}>{event.dateEnd}</span>
                </>
              )}
              {event.isOngoing && (
                <span className={styles.ongoingBadge}>Ongoing</span>
              )}
            </div>
          </div>
          
          <span className={styles.typeLabel}>{event.type}</span>
          
          {/* Timeline Dot - Right side for right cards */}
          {!isLeft && (
            <div className={styles.timelineDot} style={{ backgroundColor: getTypeColor(event.type) }}>
              <span className={styles.typeIcon}>{getTypeIcon(event.type)}</span>
            </div>
          )}
        </div>

        <div className={styles.cardContent}>
          <h3 className={styles.title}>{event.title}</h3>
          <div className={styles.company}>
            <span className={styles.companyName}>{event.company}</span>
            {event.location && (
              <>
                <span className={styles.separator}>•</span>
                <span className={styles.location}>📍 {event.location}</span>
              </>
            )}
          </div>

          <p className={styles.description}>{renderLinkedInLinks(event.description)}</p>

          {/* Highlights */}
          {event.highlights && event.highlights.length > 0 && (
            <div className={styles.highlightsSection}>
              <button 
                className={styles.expandButton}
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
              >
                {isExpanded ? '▼ Hide Details' : '▶ Key Highlights'}
              </button>
              
              {isExpanded && (
                <ul className={styles.highlightsList}>
                  {event.highlights.map((highlight, idx) => (
                    <li key={idx} className={styles.highlightItem}>
                      <span className={styles.highlightBullet}>▹</span>
                      <span>{renderLinkedInLinks(highlight)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Tags */}
          {event.tags && event.tags.length > 0 && (
            <div className={styles.tags}>
              {event.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className={`${styles.tag} ${styles[`tag-${getTagCategory(tag)}`]}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Link */}
          {event.link && (
            <a 
              href={event.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.eventLink} ${event.linkText?.includes('Discord') ? styles.discordLink : ''}`}
            >
              {event.linkText?.includes('Discord') && (
                <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              )}
              {event.linkText || 'View Project'} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;

```

### src/components/sections/TimelineSection/TimelineSection.module.css

```css
/* TimelineSection.module.css */

.sectionFullwidthBase {
  width: 100%;
  background: var(--section-hero-bg-gradient);
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;
}

.sectionContentWrapper {
  max-width: var(--content-max-width);
  width: 100%;
  margin: 0 auto;
}

.sectionHeader {
  text-align: center;
  margin-bottom: 3rem;
}

.sectionTitle {
  font-size: 2.5rem;
  color: var(--text-primary);
  font-family: 'Fira Code', monospace;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 20px;
}

.sectionTitle::before {
  content: '# ';
  color: var(--accent-secondary);
}

/* Dark theme - cyan # prefix and golden/yellow title */
[data-theme="dark"] .sectionTitle {
  color: var(--accent-secondary);
}

[data-theme="dark"] .sectionTitle::before {
  color: var(--accent-primary);
}

.sectionTitle::after {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-primary), var(--accent-secondary), transparent);
}

.sectionSubtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-family: 'Fira Code', monospace;
}

/* Filter Buttons */
.filterButtons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
}

.filterButton {
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  padding: 0.75rem 1.5rem;
  background: rgba(var(--accent-primary-rgb), 0.1);
  border: 1px solid var(--accent-primary);
  border-radius: 4px;
  color: var(--accent-primary);
  cursor: pointer;
  transition: all 0.3s ease;
}

.filterButton:hover {
  background: rgba(var(--accent-primary-rgb), 0.2);
  box-shadow: 0 0 10px rgba(var(--accent-primary-rgb), 0.3);
}

.filterButton.active {
  background: var(--accent-primary);
  color: var(--bg-primary);
  box-shadow: 0 0 15px rgba(var(--accent-primary-rgb), 0.5);
}

[data-theme="light"] .filterButton {
  background: rgba(249, 115, 22, 0.08);
  border-color: #f97316;
  color: #ea580c;
}

[data-theme="light"] .filterButton.active {
  background: #f97316;
  color: white;
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.4);
}

[data-theme="light"] .filterButton:hover {
  background: rgba(249, 115, 22, 0.15);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.2);
}

/* Timeline Container */
.timeline {
  position: relative;
  padding: 2rem 0;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  overflow: visible;
}

/* Center Line */
.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    transparent,
    #06b6d4,
    #22d3ee,
    #a78bfa,
    transparent
  );
  transform: translateX(-50%);
  opacity: 0.8;
}

[data-theme="light"] .timeline::before {
  background: linear-gradient(
    to bottom,
    transparent,
    #f97316,
    #fb923c,
    #fdba74,
    transparent
  );
}

.emptyState {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-muted);
  font-family: 'Fira Code', monospace;
}

/* Responsive */
@media (max-width: 968px) {
  .timeline::before {
    left: 50%;  /* Center the line on mobile */
    transform: translateX(-50%);
  }
}

@media (max-width: 768px) {
  .sectionFullwidthBase {
    padding: 3rem 1rem;
  }

  .sectionTitle {
    font-size: 2rem;
  }

  .filterButtons {
    gap: 0.5rem;
  }

  .filterButton {
    font-size: 0.8rem;
    padding: 0.6rem 1rem;
  }
}

```

### src/components/sections/TimelineSection/TimelineSection.tsx

```tsx
import React, { useState } from 'react';
import { timelineData, type TimelineEventType } from '../../../data/timelineData';
import TimelineItem from './TimelineItem';
import styles from './TimelineSection.module.css';

const TimelineSection: React.FC = () => {
  const [filter, setFilter] = useState<TimelineEventType | 'all'>('experience');

  const filteredEvents = filter === 'all' 
    ? timelineData 
    : timelineData.filter(event => event.type === filter);

  return (
    <section id="timeline" className={styles.sectionFullwidthBase}>
      <div className={styles.sectionContentWrapper}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Journey</h2>
          <p className={styles.sectionSubtitle}>
            Career milestones, education, and key achievements
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={styles.filterButtons}>
          <button
            className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}
            onClick={() => setFilter('all')}
          >
            All ({timelineData.length})
          </button>
          <button
            className={`${styles.filterButton} ${filter === 'experience' ? styles.active : ''}`}
            onClick={() => setFilter('experience')}
          >
            Experience ({timelineData.filter(e => e.type === 'experience').length})
          </button>
          <button
            className={`${styles.filterButton} ${filter === 'education' ? styles.active : ''}`}
            onClick={() => setFilter('education')}
          >
            Education ({timelineData.filter(e => e.type === 'education').length})
          </button>
          <button
            className={`${styles.filterButton} ${filter === 'certification' ? styles.active : ''}`}
            onClick={() => setFilter('certification')}
          >
            Certifications ({timelineData.filter(e => e.type === 'certification').length})
          </button>
          <button
            className={`${styles.filterButton} ${filter === 'achievement' ? styles.active : ''}`}
            onClick={() => setFilter('achievement')}
          >
            Achievements ({timelineData.filter(e => e.type === 'achievement').length})
          </button>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {filteredEvents.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No events found for this filter.</p>
            </div>
          ) : (
            filteredEvents.map((event, index) => (
              <TimelineItem
                key={event.id}
                event={event}
                index={index}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

```

### src/components/ui/AgentTerminal/AgentTerminal.module.css

```css
/* Mac-style Terminal Window Wrapper */
.terminalWrapper {
    background: var(--bg-card);
    border: 1px solid var(--border-card);
    border-radius: 12px;
    margin: 0 auto;
    max-width: 100%;
    width: 100%;
    font-family: 'Courier New', 'IBM Plex Mono', 'Fira Code', monospace;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

[data-theme="light"] .terminalWrapper {
    border: 1px solid rgba(217, 119, 6, 0.4);
    box-shadow: 0 4px 16px rgba(217, 119, 6, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1);
}

.terminalWrapper:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3);
}

[data-theme="light"] .terminalWrapper:hover {
    box-shadow: 0 8px 32px rgba(217, 119, 6, 0.25), 0 4px 16px rgba(0, 0, 0, 0.15);
}

/* Mac-style Terminal Header */
.terminalHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    background: linear-gradient(180deg, rgba(var(--bg-card-rgb-val, 20, 24, 36), 0.95), rgba(var(--bg-card-rgb-val, 20, 24, 36), 0.98));
    border-bottom: 1px solid var(--border-color-muted);
    backdrop-filter: blur(10px);
}

[data-theme="light"] .terminalHeader {
    background: linear-gradient(180deg, rgba(240, 242, 245, 0.95), rgba(240, 242, 245, 0.98));
}

/* Traffic Lights (Mac window buttons) */
.trafficLights {
    display: flex;
    gap: 8px;
    align-items: center;
}

.trafficLight {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
    transition: opacity 0.2s ease;
}

.trafficLight.red {
    background: #ff5f57;
    box-shadow: 0 0 3px rgba(255, 95, 87, 0.5);
}

.trafficLight.yellow {
    background: #ffbd2e;
    box-shadow: 0 0 3px rgba(255, 189, 46, 0.5);
}

.trafficLight.green {
    background: #28c840;
    box-shadow: 0 0 3px rgba(40, 200, 64, 0.5);
}

.terminalWrapper:hover .trafficLight {
    opacity: 1;
}

.terminalTitle {
    flex: 1;
    text-align: center;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-secondary);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    letter-spacing: 0.5px;
}

.terminalActions {
    width: 80px;
}

/* Terminal Body */
.agentTerminal {
    background: rgba(var(--bg-card-rgb-val, 20, 24, 36), 0.5);
    padding: 1.5rem;
    cursor: text;
}

[data-theme="light"] .agentTerminal {
    background: rgba(248, 249, 250, 0.5);
}

.terminalOutput {
    min-height: 400px;
    max-height: 600px;
    overflow-y: auto;
    margin-bottom: 1rem;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    border: 1px solid rgba(var(--accent-primary-rgb), 0.1);
    scrollbar-width: thin;
    scrollbar-color: var(--accent-primary) transparent;
    position: relative;
}

.terminalOutput::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
        0deg,
        rgba(0, 255, 65, 0.03) 0px,
        rgba(0, 255, 65, 0.03) 1px,
        transparent 1px,
        transparent 2px
    );
    pointer-events: none;
    z-index: 1;
    border-radius: 6px;
}

[data-theme="light"] .terminalOutput {
    background: rgba(240, 240, 240, 0.6);
    border-color: rgba(0, 0, 0, 0.1);
}

[data-theme="light"] .terminalOutput::before {
    background: repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.02) 0px,
        rgba(0, 0, 0, 0.02) 1px,
        transparent 1px,
        transparent 2px
    );
}

.terminalOutput > * {
    position: relative;
    z-index: 2;
}

.terminalOutput::-webkit-scrollbar {
    width: 8px;
}

.terminalOutput::-webkit-scrollbar-track {
    background: transparent;
}

.terminalOutput::-webkit-scrollbar-thumb {
    background: var(--accent-primary);
    border-radius: 4px;
}

.terminalOutput::-webkit-scrollbar-thumb:hover {
    background: var(--accent-secondary);
}

.terminalInputLine {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 1rem;
    background: rgba(var(--accent-primary-rgb), 0.05);
    border-radius: 6px;
    border: 1px solid rgba(var(--accent-primary-rgb), 0.15);
}

.terminalPrompt {
    color: var(--accent-secondary);
    font-weight: 700;
    white-space: nowrap;
    font-size: 1.1rem;
    text-shadow: 0 0 10px rgba(255, 193, 7, 0.6), 0 0 20px rgba(255, 193, 7, 0.3);
    animation: promptGlow 2s ease-in-out infinite;
}

[data-theme="light"] .terminalPrompt {
    color: var(--accent-secondary);
    text-shadow: none;
    animation: none;
}

@keyframes promptGlow {
    0%, 100% { text-shadow: 0 0 10px rgba(255, 193, 7, 0.6), 0 0 20px rgba(255, 193, 7, 0.3); }
    50% { text-shadow: 0 0 15px rgba(255, 193, 7, 0.8), 0 0 30px rgba(255, 193, 7, 0.5); }
}

.terminalInput {
    flex: 1;
    background: transparent;
    border: none;
    color: var(--success);
    font-family: 'Courier New', 'IBM Plex Mono', 'Fira Code', monospace;
    font-size: 1rem;
    outline: none;
    font-weight: 600;
    text-shadow: 0 0 8px rgba(var(--success-rgb), 0.5);
    caret-color: var(--success);
}

[data-theme="light"] .terminalInput {
    color: var(--success);
    text-shadow: none;
    caret-color: var(--success);
}

.terminalInput::placeholder {
    color: #00AA55;
    font-weight: 400;
    opacity: 0.6;
}

[data-theme="light"] .terminalInput::placeholder {
    color: #696969;
    opacity: 0.5;
}

.terminalInput::selection {
    background: rgba(0, 255, 65, 0.3);
    color: #FFFFFF;
}

[data-theme="light"] .terminalInput::selection {
    background: rgba(47, 79, 47, 0.2);
    color: #000000;
}

/* Terminal Line Types with Enhanced Color Coding */
.terminalLine {
    margin-bottom: 0.5rem;
    line-height: 1.6;
    font-size: 0.95rem;
    transition: all 0.2s ease;
    font-weight: 500;
    white-space: pre-wrap;
    word-wrap: break-word;
    animation: messageFadeIn 0.3s ease-out;
}

@keyframes messageFadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

[data-theme="light"] .terminalLine {
    text-shadow: none;
}

/* SYSTEM messages - Cyan (Dark) / Orange (Light) */
.terminalLine.system {
    color: #06b6d4;
    font-weight: 600;
    text-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
}

[data-theme="light"] .terminalLine.system {
    color: #ea580c;
    text-shadow: none;
}

/* USER commands - White (Dark) / Dark Gray (Light) */
.terminalLine.user {
    color: #ffffff;
    font-weight: 700;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

[data-theme="light"] .terminalLine.user {
    color: #1f2937;
    text-shadow: none;
}

/* ASSISTANT responses - Gold (Dark) / Dark Orange (Light) */
.terminalLine.assistant {
    color: #fbbf24;
    font-weight: 600;
    text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
}

[data-theme="light"] .terminalLine.assistant {
    color: #d97706;
    text-shadow: none;
}

/* PROCESSING messages - Purple (Dark) / Amber (Light) */
.terminalLine.processing {
    color: #8b5cf6;
    font-weight: 600;
    text-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
    animation: processingPulse 1.5s ease-in-out infinite;
}

@keyframes processingPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
}

[data-theme="light"] .terminalLine.processing {
    color: #f59e0b;
    text-shadow: none;
}

/* ERROR messages - Red */
.terminalLine.error {
    color: #ef4444;
    font-weight: 600;
    text-shadow: 0 0 10px rgba(239, 68, 68, 0.6);
}

[data-theme="light"] .terminalLine.error {
    color: #dc2626;
    text-shadow: none;
}

/* LOG messages - Gray */
.terminalLine.log {
    color: #6b7280;
    font-weight: 400;
    font-size: 0.85rem;
    opacity: 0.8;
}

[data-theme="light"] .terminalLine.log {
    color: #9ca3af;
}

/* Responsive Design */
@media (max-width: 768px) {
    .terminalWrapper {
        margin: 1.5rem 0;
        border-radius: 10px;
    }

    .terminalHeader {
        padding: 0.6rem 0.85rem;
    }

    .trafficLight {
        width: 10px;
        height: 10px;
    }

    .terminalTitle {
        font-size: 0.75rem;
    }

    .agentTerminal {
        padding: 1rem;
    }

    .terminalOutput {
        min-height: 300px;
        max-height: 450px;
        padding: 0.75rem;
        font-size: 0.85rem;
    }

    .terminalInput {
        font-size: 0.9rem;
    }

    .terminalPrompt {
        font-size: 0.9rem;
    }

    .terminalLine {
        font-size: 0.85rem;
    }
}

@media (max-width: 480px) {
    .terminalWrapper {
        margin: 1rem 0;
        border-radius: 8px;
    }

    .terminalHeader {
        padding: 0.5rem 0.75rem;
    }

    .trafficLights {
        gap: 6px;
    }

    .trafficLight {
        width: 8px;
        height: 8px;
    }

    .terminalTitle {
        font-size: 0.7rem;
    }

    .agentTerminal {
        padding: 0.75rem;
    }

    .terminalOutput {
        min-height: 250px;
        max-height: 350px;
        padding: 0.5rem;
        font-size: 0.75rem;
    }

    .terminalInput {
        font-size: 0.85rem;
    }

    .terminalPrompt {
        font-size: 0.85rem;
    }

    .terminalLine {
        font-size: 0.75rem;
        margin-bottom: 0.4rem;
    }

    .terminalInputLine {
        flex-wrap: wrap;
        padding: 0.4rem 0.75rem;
    }
}

```

### src/components/ui/AgentTerminal/AgentTerminal.tsx

```tsx
import React, { useState, useRef, useEffect } from 'react';
import styles from './AgentTerminal.module.css';

interface Message {
  id: string;
  type: 'system' | 'user' | 'assistant' | 'processing' | 'error' | 'log';
  content: string;
  timestamp: Date;
}

const AgentTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: crypto.randomUUID(),
      type: 'system',
      content: '$ Initializing connection to Shawbrook Banking Assistant...',
      timestamp: new Date(),
    },
    {
      id: crypto.randomUUID(),
      type: 'system',
      content: "[SYSTEM] Connected to AI Engine: v1.0",
      timestamp: new Date(),
    },
    {
      id: crypto.randomUUID(),
      type: 'system',
      content: "[SYSTEM] Type 'help' for available commands.",
      timestamp: new Date(),
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [lastCustomerId, setLastCustomerId] = useState<number | null>(null);

  const terminalOutputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    if (terminalOutputRef.current) {
      terminalOutputRef.current.scrollTop = terminalOutputRef.current.scrollHeight;
    }
  }, [messages]);

  const parseCommand = (rawCommand: string): { command: string; customerId?: number; query?: string } => {
    const trimmed = rawCommand.trim();

    // Match: query --id 123 "question text"
    const queryMatch = trimmed.match(/^query\s+--id\s+(\d+)\s+"([^"]+)"/);
    if (queryMatch) {
      return {
        command: 'query',
        customerId: parseInt(queryMatch[1]),
        query: queryMatch[2],
      };
    }

    // Match: "plain question" (uses last customer ID)
    const plainQuestionMatch = trimmed.match(/^"([^"]+)"$/);
    if (plainQuestionMatch && lastCustomerId) {
      return {
        command: 'query',
        customerId: lastCustomerId,
        query: plainQuestionMatch[1],
      };
    }

    // Other commands
    return { command: trimmed.toLowerCase() };
  };

  const executeCommand = async (rawCommand: string) => {
    const { command, customerId, query } = parseCommand(rawCommand);

    // Add user command to messages
    setMessages(prev => [...prev, {
      id: crypto.randomUUID(),
      type: 'user',
      content: `> ${rawCommand}`,
      timestamp: new Date(),
    }]);

    // Handle different commands
    switch (command) {
      case 'help':
        setMessages(prev => [...prev, {
          id: crypto.randomUUID(),
          type: 'assistant',
          content: `[ASSISTANT] Available commands:
  - query --id <id> "<question>" : Query customer banking information
  - info --products              : List available product types
  - clear                        : Clear terminal history
  - exit                         : End session`,
          timestamp: new Date(),
        }]);
        break;

      case 'info':
        setMessages(prev => [...prev, {
          id: crypto.randomUUID(),
          type: 'assistant',
          content: `[ASSISTANT] Available Product Types:
  - Fixed Rate ISA
  - Notice Savings Account
  - Fixed Rate Bond
  - Easy Access ISA`,
          timestamp: new Date(),
        }]);
        break;

      case 'clear':
        setMessages([
          {
            id: crypto.randomUUID(),
            type: 'system',
            content: '[SYSTEM] Terminal cleared.',
            timestamp: new Date(),
          }
        ]);
        break;

      case 'exit':
        setMessages(prev => [...prev, {
          id: crypto.randomUUID(),
          type: 'system',
          content: '[SYSTEM] Session terminated. Thank you for using Banking Assistant.',
          timestamp: new Date(),
        }]);
        break;

      case 'query':
        if (!customerId || !query) {
          setMessages(prev => [...prev, {
            id: crypto.randomUUID(),
            type: 'error',
            content: '[ERROR] Invalid syntax. Use: query --id <customer_id> "<question>"',
            timestamp: new Date(),
          }]);
          return;
        }

        // Remember customer ID for future plain queries
        setLastCustomerId(customerId);

        // Show processing message
        const processingId = crypto.randomUUID();
        setMessages(prev => [...prev, {
          id: processingId,
          type: 'processing',
          content: `[PROCESSING] Analyzing customer ${customerId} records...`,
          timestamp: new Date(),
        }]);

        // Simulate API call (replace with actual API call later)
        setTimeout(() => {
          // Remove processing message and add response
          setMessages(prev => [
            ...prev.filter(m => m.id !== processingId),
            {
              id: crypto.randomUUID(),
              type: 'assistant',
              content: `[ASSISTANT] This is a demo response. Connect to backend API at https://api.yuriodev.co.uk for real banking queries.`,
              timestamp: new Date(),
            },
            {
              id: crypto.randomUUID(),
              type: 'log',
              content: `[LOG] Request processed in 182 ms.`,
              timestamp: new Date(),
            }
          ]);
        }, 1500);
        break;

      default:
        setMessages(prev => [...prev, {
          id: crypto.randomUUID(),
          type: 'error',
          content: `[ERROR] Command not found: ${command}. Type 'help' for available commands.`,
          timestamp: new Date(),
        }]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = input.trim();
      if (command) {
        // Add to command history
        setCommandHistory(prev => [...prev, command]);
        setHistoryIndex(-1);

        // Execute command
        executeCommand(command);
        setInput('');
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.ctrlKey && e.key === 'l') {
      e.preventDefault();
      executeCommand('clear');
    }
  };

  // Focus input when clicking on terminal
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={styles.terminalWrapper}>
      {/* Mac-style window header */}
      <div className={styles.terminalHeader}>
        <div className={styles.trafficLights}>
          <span className={`${styles.trafficLight} ${styles.red}`}></span>
          <span className={`${styles.trafficLight} ${styles.yellow}`}></span>
          <span className={`${styles.trafficLight} ${styles.green}`}></span>
        </div>
        <div className={styles.terminalTitle}>assitant@yuriodev: ~</div>
        <div className={styles.terminalActions}></div>
      </div>

      {/* Terminal content */}
      <div className={styles.agentTerminal} onClick={handleTerminalClick}>
        <div className={styles.terminalOutput} ref={terminalOutputRef}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`${styles.terminalLine} ${styles[message.type]}`}
            >
              {message.content}
            </div>
          ))}
        </div>
        <div className={styles.terminalInputLine}>
          <span className={styles.terminalPrompt}>{'assitant@yuriodev: ~'}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            className={styles.terminalInput}
            placeholder='Type a command... (try "help")'
            aria-label="Terminal command input"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};

export default AgentTerminal;

```

### src/components/ui/CanvasBackground/CanvasBackground.module.css

```css
.neuralBackground {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    background: var(--bg-primary);
    filter: blur(3px);
    opacity: 0.7;
}

```

### src/components/ui/CanvasBackground/CanvasBackground.tsx

```tsx
import React, { useRef, useEffect } from 'react';
import styles from './CanvasBackground.module.css';

const CanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mouse: { x: number | undefined, y: number | undefined } = { x: undefined, y: undefined };
    const interactionRadius = 120;
    const repulsionStrength = 0.6;
    const dampingFactor = 0.98;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    window.addEventListener('mousemove', (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });

    window.addEventListener('mouseout', () => {
      mouse.x = undefined;
      mouse.y = undefined;
    });

    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      glow: number;
      color: string;
    }[] = [];
    const numNodes = 60;

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2.5 + 1.5,
        glow: Math.random() * 0.5 + 0.5,
        color: Math.random() > 0.7 ? 'var(--accent-secondary)' : (Math.random() > 0.5 ? 'var(--accent-tertiary)' : 'var(--accent-primary)'),
      });
    }

    const animate = () => {
      const isDarkMode = document.documentElement.getAttribute('data-theme') !== 'light';
      const bgOpacity = isDarkMode ? 0.15 : 0.05;

      ctx.fillStyle = isDarkMode ? `rgba(10, 15, 28, ${bgOpacity})` : `rgba(248, 250, 252, ${bgOpacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const style = getComputedStyle(document.body);
      const accentPrimary = style.getPropertyValue('--accent-primary').trim();
      const accentSecondary = style.getPropertyValue('--accent-secondary').trim();
      const accentTertiary = style.getPropertyValue('--accent-tertiary').trim();

      nodes.forEach((node) => {
        if (mouse.x !== undefined && mouse.y !== undefined) {
          const dxMouse = node.x - mouse.x;
          const dyMouse = node.y - mouse.y;
          const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (distanceMouse < interactionRadius) {
            const forceDirectionX = dxMouse / distanceMouse;
            const forceDirectionY = dyMouse / distanceMouse;
            const force = (interactionRadius - distanceMouse) / interactionRadius * repulsionStrength;
            node.vx += forceDirectionX * force;
            node.vy += forceDirectionY * force;
          }
        }

        node.x += node.vx;
        node.y += node.vy;
        node.vx *= dampingFactor;
        node.vy *= dampingFactor;

        if (Math.abs(node.vx) < 0.05 && Math.abs(node.vy) < 0.05) {
          node.vx += (Math.random() - 0.5) * 0.1;
          node.vy += (Math.random() - 0.5) * 0.1;
        }

        if (node.x - node.radius < 0) {
          node.x = node.radius;
          node.vx *= -0.8;
        } else if (node.x + node.radius > canvas.width) {
          node.x = canvas.width - node.radius;
          node.vx *= -0.8;
        }
        if (node.y - node.radius < 0) {
          node.y = node.radius;
          node.vy *= -0.8;
        } else if (node.y + node.radius > canvas.height) {
          node.y = canvas.height - node.radius;
          node.vy *= -0.8;
        }

        let nodeColorValue;
        if (node.color === 'var(--accent-secondary)') nodeColorValue = accentSecondary;
        else if (node.color === 'var(--accent-tertiary)') nodeColorValue = accentTertiary;
        else nodeColorValue = accentPrimary;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        let alphaHex = Math.floor(node.glow * (isDarkMode ? 200 : 100)).toString(16).padStart(2, '0');
        alphaHex = alphaHex.length > 2 ? alphaHex.substring(0, 2) : alphaHex;
        try {
          ctx.fillStyle = nodeColorValue + alphaHex;
        } catch {
          ctx.fillStyle = nodeColorValue;
        }
        ctx.shadowBlur = isDarkMode ? 15 : 8;
        ctx.shadowColor = nodeColorValue;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      const maxConnectionsPerNode = 4;
      let connectionsDrawn = 0;

      for (let i = 0; i < nodes.length; i++) {
        let nodeConnections = 0;
        for (let j = i + 1; j < nodes.length; j++) {
          if (nodeConnections >= maxConnectionsPerNode) break;

          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const opacity = (isDarkMode ? 0.3 : 0.15) * (180 - distance) / 180;
            const connectionColorValue = distance < 90 ? accentSecondary : accentPrimary;
            let alphaHexConnection = Math.floor(opacity * 255).toString(16).padStart(2, '0');
            alphaHexConnection = alphaHexConnection.length > 2 ? alphaHexConnection.substring(0, 2) : alphaHexConnection;
            try {
              ctx.strokeStyle = connectionColorValue + alphaHexConnection;
            } catch {
              ctx.strokeStyle = connectionColorValue;
            }
            ctx.lineWidth = 0.8;
            ctx.stroke();
            nodeConnections++;
            connectionsDrawn++;
          }
          if (connectionsDrawn > numNodes * 1.5) break;
        }
        if (connectionsDrawn > numNodes * 1.5) break;
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.neuralBackground} aria-hidden="true"></canvas>;
};

export default CanvasBackground;

```

### src/components/ui/CommandPalette/CommandPalette.module.css

```css
.commandPalette {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    z-index: 9999;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 10vh;
}

.commandPaletteContent {
    background: var(--bg-card);
    border: 1px solid var(--accent-primary);
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 0 50px var(--glow-primary);
}

.commandInput {
    width: 100%;
    padding: 1rem;
    background: transparent;
    border: none;
    color: var(--text-primary);
    font-family: 'Fira Code', monospace;
    font-size: 1.1rem;
    outline: none;
}

.commandInput::placeholder {
    color: var(--text-muted);
}

.commandResults {
    max-height: 300px;
    overflow-y: auto;
}

.commandItem {
    padding: 0.8rem 1rem;
    cursor: pointer;
    border-top: 1px solid var(--border-color-muted);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.commandItem:hover, .commandItem.selected {
    background: rgba(var(--accent-primary-rgb), 0.1);
}

.commandTitle {
    color: var(--text-primary);
}

.commandShortcut {
    color: var(--text-muted);
    font-size: 0.8rem;
}

@media (max-width: 768px) {
    .commandPaletteContent {
        width: 95%;
        max-width: none;
    }

    .commandInput {
        padding: 0.8rem;
        font-size: 1rem;
    }

    .commandItem {
        padding: 0.7rem 0.8rem;
    }

    .commandTitle {
        font-size: 0.9rem;
    }

    .commandShortcut {
        font-size: 0.75rem;
    }
}

@media (max-width: 480px) {
    .commandPaletteContent {
        width: 98%;
    }

    .commandInput {
        padding: 0.7rem;
        font-size: 0.95rem;
    }

    .commandItem {
        padding: 0.6rem 0.7rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.3rem;
    }

    .commandTitle {
        font-size: 0.85rem;
    }

    .commandShortcut {
        font-size: 0.7rem;
    }

    .commandResults {
        max-height: 250px;
    }
}

```

### src/components/ui/CommandPalette/CommandPalette.tsx

```tsx
import React, { useState, useEffect } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import styles from './CommandPalette.module.css';

function scrollToSection(selector:string) {
    const element = document.querySelector(selector);
    if (element) {
        const header = document.querySelector('.terminal-header') as HTMLElement;
        const headerOffset = header ? header.offsetHeight : 70;
        const elementPosition = (element as HTMLElement).offsetTop - headerOffset;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
}

const CommandPalette: React.FC = () => {
    const { toggleTheme } = useTheme();
    
    const commands = [
        { title: 'Go to Hero', action: () => scrollToSection('#hero'), shortcut: 'hero' },
        { title: 'Go to About', action: () => scrollToSection('#about'), shortcut: 'about' },
        { title: 'Go to Platform', action: () => scrollToSection('#platform'), shortcut: 'platform' },
        { title: 'Go to Projects', action: () => scrollToSection('#projects'), shortcut: 'projects' },
        { title: 'Go to Timeline', action: () => scrollToSection('#timeline'), shortcut: 'timeline' },
        { title: 'Go to Skills', action: () => scrollToSection('#skills'), shortcut: 'skills' },
        { title: 'Go to Connect', action: () => scrollToSection('#connect'), shortcut: 'connect' },
        { title: 'Go to Terminal', action: () => scrollToSection('#terminal'), shortcut: 'terminal' },
        { title: 'Toggle Theme', action: () => toggleTheme(), shortcut: 'theme' },
        { title: 'Show Help', action: () => {/**/}, shortcut: 'help' },
        { title: 'Send Email', action: () => window.location.href = 'mailto:yurii.oksamytnyi@yuriodev.co.uk', shortcut: 'email' },
        { title: 'View LinkedIn', action: () => window.open('https://www.linkedin.com/in/yurii-oksamytnyi/', '_blank'), shortcut: 'linkedin' },
        { title: 'View GitHub', action: () => window.open('https://github.com/YuriiOks', '_blank'), shortcut: 'github' }
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [filteredCommands, setFilteredCommands] = useState(commands);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(!isOpen);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            setFilteredCommands(
                commands.filter(cmd =>
                    cmd.title.toLowerCase().includes(inputValue.toLowerCase()) ||
                    cmd.shortcut.toLowerCase().includes(inputValue.toLowerCase())
                )
            );
            setSelectedIndex(0);
        }
    }, [inputValue, isOpen]);


    const handleCommandClick = (command: { title: string; action: () => void; shortcut: string; }) => {
        command.action();
        setIsOpen(false);
        setInputValue('');
    };

    if (!isOpen) return null;

    return (
        <div className={styles.commandPalette} onClick={() => setIsOpen(false)}>
            <div className={styles.commandPaletteContent} onClick={(e) => e.stopPropagation()}>
                <input
                    type="text"
                    className={styles.commandInput}
                    placeholder="Type a command or search..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    autoFocus
                />
                <div className={styles.commandResults}>
                    {filteredCommands.map((cmd, index) => (
                        <div
                            key={cmd.title}
                            className={`${styles.commandItem} ${index === selectedIndex ? styles.selected : ''}`}
                            onClick={() => handleCommandClick(cmd)}
                        >
                            <span className={styles.commandTitle}>{cmd.title}</span>
                            <span className={styles.commandShortcut}>{cmd.shortcut}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CommandPalette;

```

### src/components/ui/HelpPanel/HelpPanel.module.css

```css
/* HelpPanel.module.css */

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  animation: fadeIn 0.3s ease;
}

[data-theme="light"] .backdrop {
  background: rgba(0, 0, 0, 0.3);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.helpPanel {
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  max-width: 90vw;
  height: 100vh;
  background: var(--bg-card);
  border-left: 2px solid var(--accent-primary);
  box-shadow: -4px 0 20px rgba(var(--bg-card-rgb-val, 10, 15, 28), 0.95);
  z-index: 10000;
  overflow-y: auto;
  padding: 2rem;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  font-family: 'Fira Code', monospace;
}

[data-theme="light"] .helpPanel {
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
  border-left: 2px solid var(--accent-secondary);
}

.helpPanel.active {
  transform: translateX(0);
}

.helpPanelContent {
  position: relative;
}

.closeButton {
  position: absolute;
  top: -1rem;
  right: -1rem;
  background: var(--bg-card);
  border: 1px solid var(--accent-primary);
  color: var(--accent-primary);
  width: 32px;
  height: 32px;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fira Code', monospace;
}

.closeButton:hover {
  background: var(--accent-primary);
  color: var(--text-on-accent-bg);
  box-shadow: 0 0 10px var(--glow-primary);
  transform: scale(1.05);
}

[data-theme="light"] .closeButton {
  border-color: var(--accent-secondary);
  color: var(--accent-secondary);
}

[data-theme="light"] .closeButton:hover {
  background: var(--accent-secondary);
  color: var(--text-on-accent-bg);
  box-shadow: 0 0 10px var(--glow-secondary);
}

.helpPanel h3 {
  color: var(--accent-secondary);
  font-size: 1.3rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-card);
  font-weight: 600;
}

.helpPanel h3:first-of-type {
  margin-top: 0;
}

.helpSection {
  margin-bottom: 1.5rem;
}

.helpItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
  border-bottom: 1px solid var(--border-color-muted);
}

.helpItem:last-child {
  border-bottom: none;
}

.helpItem span:first-child {
  color: var(--text-secondary);
  font-weight: 500;
}

[data-theme="light"] .helpItem span:first-child {
  color: var(--text-primary);
}

.shortcut {
  background: rgba(var(--accent-primary-rgb), 0.1);
  border: 1px solid var(--accent-primary);
  color: var(--accent-primary);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: 'Fira Code', monospace;
}

[data-theme="light"] .shortcut {
  background: rgba(var(--accent-secondary-rgb), 0.1);
  border: 1px solid var(--accent-secondary);
  color: var(--accent-secondary);
}

.command {
  color: var(--accent-tertiary) !important;
  font-weight: 600;
  font-family: 'Fira Code', monospace;
}

[data-theme="light"] .command {
  color: var(--accent-secondary) !important;
}

.helpFooter {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-card);
  text-align: center;
}

.helpFooter p {
  color: var(--text-muted);
  font-size: 0.85rem;
  font-style: italic;
}

.helpFooter .shortcut {
  display: inline-block;
  margin: 0 0.25rem;
}

/* Scrollbar styling */
.helpPanel::-webkit-scrollbar {
  width: 8px;
}

.helpPanel::-webkit-scrollbar-track {
  background: var(--bg-primary);
}

.helpPanel::-webkit-scrollbar-thumb {
  background: var(--accent-primary);
  border-radius: 4px;
}

.helpPanel::-webkit-scrollbar-thumb:hover {
  background: var(--accent-secondary);
}

[data-theme="light"] .helpPanel::-webkit-scrollbar-thumb {
  background: var(--accent-secondary);
}

[data-theme="light"] .helpPanel::-webkit-scrollbar-thumb:hover {
  background: var(--accent-tertiary);
}

/* Responsive */
@media (max-width: 768px) {
  .helpPanel {
    width: 100vw;
    max-width: 100vw;
    padding: 1.5rem;
  }

  .helpPanel h3 {
    font-size: 1.1rem;
  }

  .helpItem {
    font-size: 0.85rem;
    padding: 0.6rem 0;
  }

  .closeButton {
    top: 0.5rem;
    right: 0.5rem;
  }
}

```

### src/components/ui/HelpPanel/HelpPanel.tsx

```tsx
import React, { useEffect } from 'react';
import styles from './HelpPanel.module.css';

interface HelpPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const HelpPanel: React.FC<HelpPanelProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className={styles.backdrop} onClick={onClose} />
      )}
      <div 
        className={`${styles.helpPanel} ${isOpen ? styles.active : ''}`}
      >
        <div className={styles.helpPanelContent}>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close help panel">
            ✕
          </button>

        <h3>Keyboard Shortcuts</h3>
        <div className={styles.helpSection}>
          <div className={styles.helpItem}>
            <span>Command Palette</span>
            <span className={styles.shortcut}>Ctrl/Cmd + K</span>
          </div>
          <div className={styles.helpItem}>
            <span>Help Panel</span>
            <span className={styles.shortcut}>?</span>
          </div>
          <div className={styles.helpItem}>
            <span>Next Section</span>
            <span className={styles.shortcut}>J</span>
          </div>
          <div className={styles.helpItem}>
            <span>Previous Section</span>
            <span className={styles.shortcut}>K</span>
          </div>
          <div className={styles.helpItem}>
            <span>Go to Top</span>
            <span className={styles.shortcut}>Home</span>
          </div>
          <div className={styles.helpItem}>
            <span>Go to Bottom</span>
            <span className={styles.shortcut}>End</span>
          </div>
          <div className={styles.helpItem}>
            <span>Toggle Theme</span>
            <span className={styles.shortcut}>T</span>
          </div>
        </div>

        <h3>Terminal Commands</h3>
        <div className={styles.helpSection}>
          <div className={styles.helpItem}>
            <span className={styles.command}>help</span>
            <span>Show available commands</span>
          </div>
          <div className={styles.helpItem}>
            <span className={styles.command}>skills</span>
            <span>List technical skills</span>
          </div>
          <div className={styles.helpItem}>
            <span className={styles.command}>contact</span>
            <span>Show contact information</span>
          </div>
          <div className={styles.helpItem}>
            <span className={styles.command}>projects</span>
            <span>List recent projects</span>
          </div>
          <div className={styles.helpItem}>
            <span className={styles.command}>surprise</span>
            <span>Easter egg command</span>
          </div>
          <div className={styles.helpItem}>
            <span className={styles.command}>clear</span>
            <span>Clear terminal output</span>
          </div>
          <div className={styles.helpItem}>
            <span className={styles.command}>about</span>
            <span>Display information</span>
          </div>
        </div>

        <div className={styles.helpFooter}>
          <p>Press <span className={styles.shortcut}>ESC</span> or click outside to close</p>
        </div>
        </div>
      </div>
    </>
  );
};

export default HelpPanel;

```

### src/components/ui/InteractiveTerminal/InteractiveTerminal.module.css

```css
/* Mac-style Terminal Window Wrapper */
.terminalWrapper {
    background: var(--bg-card);
    border: 1px solid var(--border-card);
    border-radius: 12px;
    margin: 2rem auto;
    max-width: 100%;
    width: 100%;
    font-family: 'Fira Code', monospace;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

[data-theme="light"] .terminalWrapper {
    border: 1px solid rgba(217, 119, 6, 0.4); /* Orange border for light theme */
    box-shadow: 0 4px 16px rgba(217, 119, 6, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1);
}

.terminalWrapper:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3);
}

[data-theme="light"] .terminalWrapper:hover {
    box-shadow: 0 8px 32px rgba(217, 119, 6, 0.25), 0 4px 16px rgba(0, 0, 0, 0.15);
}

/* Mac-style Terminal Header */
.terminalHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    background: linear-gradient(180deg, rgba(var(--bg-card-rgb-val, 20, 24, 36), 0.95), rgba(var(--bg-card-rgb-val, 20, 24, 36), 0.98));
    border-bottom: 1px solid var(--border-color-muted);
    backdrop-filter: blur(10px);
}

[data-theme="light"] .terminalHeader {
    background: linear-gradient(180deg, rgba(240, 242, 245, 0.95), rgba(240, 242, 245, 0.98));
}

/* Traffic Lights (Mac window buttons) */
.trafficLights {
    display: flex;
    gap: 8px;
    align-items: center;
}

.trafficLight {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
    transition: opacity 0.2s ease;
}

.trafficLight.red {
    background: #ff5f57;
    box-shadow: 0 0 3px rgba(255, 95, 87, 0.5);
}

.trafficLight.yellow {
    background: #ffbd2e;
    box-shadow: 0 0 3px rgba(255, 189, 46, 0.5);
}

.trafficLight.green {
    background: #28c840;
    box-shadow: 0 0 3px rgba(40, 200, 64, 0.5);
}

.terminalWrapper:hover .trafficLight {
    opacity: 1;
}

.terminalTitle {
    flex: 1;
    text-align: center;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-secondary);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    letter-spacing: 0.5px;
}

.terminalActions {
    width: 80px; /* Balance the traffic lights */
}

/* Terminal Body */
.interactiveTerminal {
    background: rgba(var(--bg-card-rgb-val, 20, 24, 36), 0.5);
    padding: 1.5rem;
    cursor: text;
}

[data-theme="light"] .interactiveTerminal {
    background: rgba(248, 249, 250, 0.5);
}

.terminalOutput {
    min-height: 250px;
    max-height: 450px;
    overflow-y: auto;
    margin-bottom: 1rem;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    border: 1px solid rgba(var(--accent-primary-rgb), 0.1);
    scrollbar-width: thin;
    scrollbar-color: var(--accent-primary) transparent;
    position: relative;
}

.terminalOutput::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
        0deg,
        rgba(0, 255, 65, 0.03) 0px,
        rgba(0, 255, 65, 0.03) 1px,
        transparent 1px,
        transparent 2px
    );
    pointer-events: none;
    z-index: 1;
    border-radius: 6px;
}

[data-theme="light"] .terminalOutput {
    background: rgba(240, 240, 240, 0.6);
    border-color: rgba(0, 0, 0, 0.1);
}

[data-theme="light"] .terminalOutput::before {
    background: repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.02) 0px,
        rgba(0, 0, 0, 0.02) 1px,
        transparent 1px,
        transparent 2px
    );
}

.terminalOutput > * {
    position: relative;
    z-index: 2;
}

[data-theme="light"] .terminalOutput {
    background: rgba(0, 0, 0, 0.03);
    border-color: rgba(0, 0, 0, 0.08);
}

.terminalOutput::-webkit-scrollbar {
    width: 8px;
}

.terminalOutput::-webkit-scrollbar-track {
    background: transparent;
}

.terminalOutput::-webkit-scrollbar-thumb {
    background: var(--accent-primary);
    border-radius: 4px;
}

.terminalOutput::-webkit-scrollbar-thumb:hover {
    background: var(--accent-secondary);
}

.terminalInputLine {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 1rem;
    background: rgba(var(--accent-primary-rgb), 0.05);
    border-radius: 6px;
    border: 1px solid rgba(var(--accent-primary-rgb), 0.15);
}

.terminalPromptInteractive {
    color: var(--accent-secondary);
    font-weight: 700;
    white-space: nowrap;
    text-shadow: 0 0 10px rgba(255, 193, 7, 0.6), 0 0 20px rgba(255, 193, 7, 0.3);
    animation: promptGlow 2s ease-in-out infinite;
}

[data-theme="light"] .terminalPromptInteractive {
    color: var(--accent-secondary);
    text-shadow: none;
    animation: none;
}

@keyframes promptGlow {
    0%, 100% { text-shadow: 0 0 10px rgba(255, 193, 7, 0.6), 0 0 20px rgba(255, 193, 7, 0.3); }
    50% { text-shadow: 0 0 15px rgba(255, 193, 7, 0.8), 0 0 30px rgba(255, 193, 7, 0.5); }
}

.terminalInput {
    flex: 1;
    background: transparent;
    border: none;
    color: var(--success);
    font-family: 'Fira Code', monospace;
    font-size: 1rem;
    outline: none;
    font-weight: 600;
    text-shadow: 0 0 8px rgba(var(--success-rgb), 0.5);
    caret-color: var(--success);
}

[data-theme="light"] .terminalInput {
    color: var(--success);
    text-shadow: none;
    caret-color: var(--success);
}

.terminalInput::placeholder {
    color: #00AA55;
    font-weight: 400;
    opacity: 0.6;
}

[data-theme="light"] .terminalInput::placeholder {
    color: #696969; /* Dim gray */
    opacity: 0.5;
}

.terminalInput::selection {
    background: rgba(0, 255, 65, 0.3);
    color: #FFFFFF;
}

[data-theme="light"] .terminalInput::selection {
    background: rgba(47, 79, 47, 0.2);
    color: #000000;
}

/* Terminal Line Types with Enhanced Color Coding */
.terminalLine {
    margin-bottom: 0.5rem;
    line-height: 1.6;
    font-size: 0.95rem;
    transition: all 0.2s ease;
    font-weight: 500;
    text-shadow: 0 0 5px rgba(0, 255, 65, 0.3);
}

/* Light Theme - Remove shadows and use darker colors */
[data-theme="light"] .terminalLine {
    text-shadow: none;
}

/* Command line (user input) - Accent Secondary (Gold/Orange) */
.terminalLine.command {
    color: var(--accent-secondary);
    font-weight: 700;
    text-shadow: 0 0 10px rgba(var(--accent-secondary-rgb), 0.6), 0 0 20px rgba(var(--accent-secondary-rgb), 0.3);
    margin-top: 0.75rem;
    letter-spacing: 0.5px;
}

[data-theme="light"] .terminalLine.command {
    color: var(--accent-secondary);
    text-shadow: none;
}

/* Success messages - Accent Primary (Cyan/Blue) */
.terminalLine.success {
    color: var(--accent-primary);
    font-weight: 600;
    text-shadow: 0 0 8px rgba(var(--accent-primary-rgb), 0.5);
}

[data-theme="light"] .terminalLine.success {
    color: var(--accent-primary);
    text-shadow: none;
}

.terminalLine.success::before {
    content: '✓ ';
    font-weight: 700;
    color: var(--success);
    text-shadow: 0 0 10px rgba(var(--success-rgb), 0.8);
}

[data-theme="light"] .terminalLine.success::before {
    color: var(--success);
    text-shadow: none;
}

/* Error messages - Bright Red */
.terminalLine.error {
    color: #FF3366;
    font-weight: 600;
    text-shadow: 0 0 8px rgba(255, 51, 102, 0.6);
    animation: errorPulse 1.5s ease-in-out;
}

[data-theme="light"] .terminalLine.error {
    color: #DC143C; /* Crimson */
    text-shadow: none;
}

.terminalLine.error::before {
    content: '✗ ';
    font-weight: 700;
    color: #FF0044;
    text-shadow: 0 0 10px rgba(255, 0, 68, 0.8);
}

[data-theme="light"] .terminalLine.error::before {
    color: #8B0000; /* Dark red */
    text-shadow: none;
}

@keyframes errorPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

/* Warning messages - Warning color (Accent Secondary) */
.terminalLine.warning {
    color: var(--warning-color);
    font-weight: 600;
    text-shadow: 0 0 8px rgba(var(--accent-secondary-rgb), 0.5);
}

[data-theme="light"] .terminalLine.warning {
    color: var(--warning-color);
    text-shadow: none;
}

.terminalLine.warning::before {
    content: '⚠ ';
    font-weight: 700;
    color: var(--warning-color);
    text-shadow: 0 0 10px rgba(var(--accent-secondary-rgb), 0.7);
}

[data-theme="light"] .terminalLine.warning::before {
    color: var(--warning-color);
    text-shadow: none;
}

/* Info messages - Accent Quaternary (Purple) */
.terminalLine.info {
    color: var(--accent-quaternary);
    font-weight: 500;
    text-shadow: 0 0 8px rgba(var(--accent-quaternary-rgb), 0.4);
}

[data-theme="light"] .terminalLine.info {
    color: var(--accent-quaternary);
    text-shadow: none;
}

/* Comments - Accent Tertiary (Teal) */
.terminalLine.comment {
    color: var(--accent-tertiary);
    font-style: italic;
    opacity: 0.8;
    font-weight: 400;
    text-shadow: 0 0 5px rgba(var(--accent-tertiary-rgb), 0.3);
}

[data-theme="light"] .terminalLine.comment {
    color: var(--accent-tertiary);
    text-shadow: none;
    opacity: 0.7;
}

/* Regular output - Success (Matrix Green) */
.terminalLine.output {
    color: var(--success);
    font-weight: 500;
    text-shadow: 0 0 8px rgba(var(--success-rgb), 0.4);
    letter-spacing: 0.3px;
}

[data-theme="light"] .terminalLine.output {
    color: var(--success);
    text-shadow: none;
}

/* Responsive Design */
@media (max-width: 768px) {
    .terminalWrapper {
        margin: 1.5rem 0;
        border-radius: 10px;
    }

    .terminalHeader {
        padding: 0.6rem 0.85rem;
    }

    .trafficLight {
        width: 10px;
        height: 10px;
    }

    .terminalTitle {
        font-size: 0.75rem;
    }

    .interactiveTerminal {
        padding: 1rem;
    }

    .terminalOutput {
        min-height: 200px;
        max-height: 350px;
        padding: 0.75rem;
        font-size: 0.85rem;
    }

    .terminalInput {
        font-size: 0.9rem;
    }

    .terminalPromptInteractive {
        font-size: 0.9rem;
    }

    .terminalLine {
        font-size: 0.85rem;
    }
}

@media (max-width: 480px) {
    .terminalWrapper {
        margin: 1rem 0;
        border-radius: 8px;
    }

    .terminalHeader {
        padding: 0.5rem 0.75rem;
    }

    .trafficLights {
        gap: 6px;
    }

    .trafficLight {
        width: 8px;
        height: 8px;
    }

    .terminalTitle {
        font-size: 0.7rem;
    }

    .interactiveTerminal {
        padding: 0.75rem;
    }

    .terminalOutput {
        min-height: 150px;
        max-height: 280px;
        padding: 0.5rem;
        font-size: 0.75rem;
    }

    .terminalInput {
        font-size: 0.85rem;
    }

    .terminalPromptInteractive {
        font-size: 0.85rem;
    }

    .terminalLine {
        font-size: 0.75rem;
        margin-bottom: 0.4rem;
    }

    .terminalInputLine {
        flex-wrap: wrap;
        padding: 0.4rem 0.75rem;
    }
}

```

### src/components/ui/InteractiveTerminal/InteractiveTerminal.tsx

```tsx
import React, { useState, useRef, useEffect } from 'react';
import { terminalCommands } from '../../../services/terminalService';
import styles from './InteractiveTerminal.module.css';

interface TerminalLine {
  content: string;
  type: 'command' | 'output' | 'success' | 'error' | 'warning' | 'info' | 'comment';
}

const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<TerminalLine[]>([]);
  const terminalOutputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalOutputRef.current) {
      terminalOutputRef.current.scrollTop = terminalOutputRef.current.scrollHeight;
    }
  }, [output]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

    const parseOutputWithColors = (text: string): TerminalLine[] => {
    const lines: TerminalLine[] = [];
    
    if (!text) return lines;
    
    const textLines = text.split('\n');
    
    textLines.forEach(line => {
      if (!line.trim()) {
        lines.push({ content: '\u00A0', type: 'output' });
        return;
      }
      
      // Success indicators
      if (line.startsWith('✓') || line.toLowerCase().includes('successfully') || line.toLowerCase().includes('complete')) {
        lines.push({ content: line, type: 'success' });
      }
      // Error indicators
      else if (line.startsWith('✗') || line.toLowerCase().includes('error') || line.toLowerCase().includes('not found') || line.toLowerCase().includes('failed')) {
        lines.push({ content: line, type: 'error' });
      }
      // Warning indicators
      else if (line.startsWith('⚠') || line.toLowerCase().includes('warning') || line.toLowerCase().includes('note:')) {
        lines.push({ content: line, type: 'warning' });
      }
      // Comments
      else if (line.trim().startsWith('#') || line.trim().startsWith('//')) {
        lines.push({ content: line, type: 'comment' });
      }
      // Headers (lines with emojis or section titles)
      else if (line.includes('━') || /^[🎓🤖💼📚🏗️☁️💻👨‍💻📧🔗💻🌐📍🚀📄🏠🐍]/.test(line)) {
        lines.push({ content: line, type: 'info' });
      }
      // Email, links, contact info
      else if (line.includes('@') || line.includes('http') || line.includes('.com') || line.includes('.uk') || line.includes('github') || line.includes('linkedin')) {
        lines.push({ content: line, type: 'success' });
      }
      // Section headers (Available commands, Technical Skills, etc.)
      else if (line.includes(':') && !line.includes('~$') && (line.match(/^[A-Z]/))) {
        lines.push({ content: line, type: 'warning' });
      }
      // Progress bars and percentages
      else if (line.includes('█') || line.includes('[') && line.includes(']') || line.includes('%')) {
        lines.push({ content: line, type: 'success' });
      }
      // Box drawing characters (for surprise command)
      else if (line.includes('╔') || line.includes('╠') || line.includes('╚') || line.includes('║')) {
        lines.push({ content: line, type: 'warning' });
      }
      // Info lines (bullets, dashes, arrows)
      else if (line.includes('→') || line.includes('•') || line.includes('ℹ') || line.trim().startsWith('-') || line.trim().startsWith('◦')) {
        lines.push({ content: line, type: 'info' });
      }
      // Default: Matrix green
      else {
        lines.push({ content: line, type: 'output' });
      }
    });
    
    return lines;
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = input.trim().toLowerCase();
      if (command) {
        // Add command to output
        const newOutput: TerminalLine[] = [
          ...output,
          { content: `visitor@yuriodev:~$ ${input}`, type: 'command' }
        ];
        
        // Execute command
        const commandOutput = (terminalCommands as any)[command]?.();
        
        if (commandOutput === 'CLEAR_TERMINAL') {
          setOutput([]);
        } else {
          const parsedOutput = parseOutputWithColors(
            commandOutput || `Command not found: ${command}. Type "help" for available commands.`
          );
          
          setOutput([
            ...newOutput,
            ...parsedOutput,
            { content: '\u00A0', type: 'output' }
          ]);
        }
        setInput('');
      }
    }
  };

  // Focus input when clicking on terminal
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={styles.terminalWrapper}>
      {/* Mac-style window header */}
      <div className={styles.terminalHeader}>
        <div className={styles.trafficLights}>
          <span className={`${styles.trafficLight} ${styles.red}`}></span>
          <span className={`${styles.trafficLight} ${styles.yellow}`}></span>
          <span className={`${styles.trafficLight} ${styles.green}`}></span>
        </div>
        <div className={styles.terminalTitle}>visitor@yuriodev: ~</div>
        <div className={styles.terminalActions}></div>
      </div>
      
      {/* Terminal content */}
      <div className={styles.interactiveTerminal} onClick={handleTerminalClick}>
        <div className={styles.terminalOutput} ref={terminalOutputRef}>
          <div className={`${styles.terminalLine} ${styles.success}`}>
            Welcome to YuriODev Terminal v2.0.1
          </div>
          <div className={`${styles.terminalLine} ${styles.info}`}>
            Type 'help' for available commands, or try: skills, contact, projects, surprise
          </div>
          <div className={styles.terminalLine}>&nbsp;</div>
          {output.map((line, index) => (
            <div 
              key={index} 
              className={`${styles.terminalLine} ${styles[line.type]}`}
            >
              {line.content}
            </div>
          ))}
        </div>
        <div className={styles.terminalInputLine}>
          <span className={styles.terminalPromptInteractive}>visitor@yuriodev:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            className={styles.terminalInput}
            placeholder="Type a command..."
            aria-label="Terminal command input"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};

export default InteractiveTerminal;

```

### src/components/ui/LoadingScreen/LoadingScreen.module.css

```css
/* ===========================
   Revolutionary Loading Screen
   Isolated, Full-Screen Experience
   =========================== */

.loadingScreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0a0e27;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(255, 193, 7, 0.08) 0%, transparent 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  opacity: 1;
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

/* Light theme background */
[data-theme="light"] .loadingScreen {
  background: #f8fafc;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(217, 119, 6, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(0, 89, 179, 0.05) 0%, transparent 50%);
}

/* Animated background particles */
.loadingScreen::before,
.loadingScreen::after {
  content: '';
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  animation: float 20s ease-in-out infinite;
}

.loadingScreen::before {
  top: -200px;
  left: -200px;
  background: linear-gradient(135deg, #06b6d4, #ffc107);
  animation-delay: -10s;
}

.loadingScreen::after {
  bottom: -200px;
  right: -200px;
  background: linear-gradient(135deg, #ffc107, #06b6d4);
}

[data-theme="light"] .loadingScreen::before,
[data-theme="light"] .loadingScreen::after {
  opacity: 0.08;
  filter: blur(100px);
}

[data-theme="light"] .loadingScreen::before {
  background: linear-gradient(135deg, #d97706, #0059b3);
}

[data-theme="light"] .loadingScreen::after {
  background: linear-gradient(135deg, #0059b3, #d97706);
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(100px, -100px) rotate(120deg);
  }
  66% {
    transform: translate(-50px, 50px) rotate(240deg);
  }
}

.loadingScreen.fadeOut {
  opacity: 0;
  pointer-events: none;
}

.loadingContainer {
  text-align: center;
  max-width: 800px;
  padding: 3rem;
  position: relative;
  z-index: 2;
}

/* ASCII Logo - Revolutionary Design */
.asciiLogo {
  margin-bottom: 4rem;
  position: relative;
  animation: logoEntrance 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes logoEntrance {
  0% {
    opacity: 0;
    transform: perspective(1000px) rotateX(-20deg) translateY(-50px);
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    transform: perspective(1000px) rotateX(0deg) translateY(0);
    filter: blur(0);
  }
}

.asciiArt {
  font-family: 'Courier New', monospace;
  font-size: clamp(0.58rem, 1.8vw, 0.9rem);
  line-height: 1.2;
  margin: 0;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.5px;
  
  /* Dark theme: Vibrant gradient */
  background: linear-gradient(
    135deg,
    #06b6d4 0%,
    #0ea5e9 25%,
    #3b82f6 50%,
    #8b5cf6 75%,
    #ffc107 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  /* Glowing effect for dark theme */
  filter: drop-shadow(0 0 30px rgba(6, 182, 212, 0.6))
          drop-shadow(0 0 60px rgba(255, 193, 7, 0.3));
  
  animation: gradientShift 8s ease-in-out infinite;
}

/* Light theme: Using our actual color scheme (orange/gold from dark theme) */
[data-theme="light"] .asciiArt {
  background: linear-gradient(
    135deg,
    #d97706 0%,
    #ea580c 25%,
    #f59e0b 50%,
    #fbbf24 75%,
    #fcd34d 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  /* Subtle glow for light theme - no harsh shadows */
  filter: drop-shadow(0 2px 8px rgba(217, 119, 6, 0.15))
          drop-shadow(0 4px 16px rgba(251, 191, 36, 0.12));
  
  animation: gradientShift 8s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Removed breathe animation - YURIODEV stays stable */

/* Loading Text - Modern Terminal Style */
.loadingText {
  font-family: 'Courier New', monospace;
  font-size: 1.5rem;
  margin-bottom: 4rem;
  min-height: 2.5rem;
  animation: textEntrance 1s ease-out 0.4s both;
  position: relative;
}

@keyframes textEntrance {
  0% {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.prompt {
  color: #06b6d4;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
}

[data-theme="light"] .prompt {
  color: #d97706;
  text-shadow: 0 0 8px rgba(217, 119, 6, 0.2);
}

.text {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

[data-theme="light"] .text {
  color: rgba(15, 23, 42, 0.85);
}

.cursor {
  display: inline-block;
  color: #ffc107;
  font-weight: 700;
  margin-left: 2px;
  animation: cursorBlink 1s infinite;
}

[data-theme="light"] .cursor {
  color: #0059b3;
}

@keyframes cursorBlink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

/* Progress Bar - Ultra Modern Glass Design */
.progressContainer {
  margin-bottom: 4rem;
  animation: progressEntrance 1s ease-out 0.6s both;
  position: relative;
}

@keyframes progressEntrance {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.progressBar {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  height: 8px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 100px;
  overflow: hidden;
  margin-bottom: 1.25rem;
  position: relative;
  border: 1px solid rgba(6, 182, 212, 0.1);
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.2),
    0 0 20px rgba(6, 182, 212, 0.05);
}

[data-theme="light"] .progressBar {
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(217, 119, 6, 0.1);
  box-shadow: 
    inset 0 1px 3px rgba(0, 0, 0, 0.05),
    0 0 15px rgba(217, 119, 6, 0.03);
}

.progressFill {
  height: 100%;
  background: linear-gradient(
    90deg,
    #06b6d4 0%,
    #0ea5e9 25%,
    #3b82f6 50%,
    #8b5cf6 75%,
    #ffc107 100%
  );
  background-size: 200% 100%;
  border-radius: 100px;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 0 20px rgba(6, 182, 212, 0.6),
    0 0 40px rgba(6, 182, 212, 0.3),
    inset 0 1px 1px rgba(255, 255, 255, 0.3);
  animation: progressGlow 3s ease-in-out infinite;
}

[data-theme="light"] .progressFill {
  background: linear-gradient(
    90deg,
    #d97706 0%,
    #ea580c 25%,
    #f59e0b 50%,
    #fbbf24 75%,
    #fcd34d 100%
  );
  background-size: 200% 100%;
  box-shadow: 
    0 0 15px rgba(217, 119, 6, 0.4),
    0 0 30px rgba(251, 191, 36, 0.2),
    inset 0 1px 1px rgba(255, 255, 255, 0.5);
}

@keyframes progressGlow {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Shimmer effect */
.progressFill::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* Particle effect on progress bar */
.progressFill::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  transform: translate(50%, -50%);
  box-shadow: 
    0 0 10px #fff,
    0 0 20px currentColor;
  opacity: 0.9;
}

[data-theme="light"] .progressFill::after {
  background: #ffffff;
  box-shadow: 
    0 0 8px rgba(255, 255, 255, 0.8),
    0 0 15px rgba(217, 119, 6, 0.6);
}

.progressText {
  font-family: 'Courier New', monospace;
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
  letter-spacing: 1px;
  text-shadow: 0 0 10px rgba(6, 182, 212, 0.3);
}

[data-theme="light"] .progressText {
  color: rgba(15, 23, 42, 0.6);
  text-shadow: 0 0 8px rgba(217, 119, 6, 0.1);
}

/* Loading Animation - 5 Squares in Wave/Leverage Motion */
.loadingAnimation {
  animation: dotsEntrance 1s ease-out 0.8s both;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

@keyframes dotsEntrance {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.spinnerContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
}

.square {
  font-family: 'Courier New', monospace;
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  
  animation: leverageRotate 2s infinite;
}

/* Dark theme: Each square gets a different color from the gradient */
.square:nth-child(1) {
  background: linear-gradient(135deg, #06b6d4, #0ea5e9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.6));
  animation-delay: 0s;
}

.square:nth-child(2) {
  background: linear-gradient(135deg, #0ea5e9, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 8px rgba(14, 165, 233, 0.6));
  animation-delay: 0.05s;
}

.square:nth-child(3) {
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6));
  animation-delay: 0.1s;
}

.square:nth-child(4) {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 8px rgba(99, 102, 241, 0.6));
  animation-delay: 0.15s;
}

.square:nth-child(5) {
  background: linear-gradient(135deg, #8b5cf6, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.6));
  animation-delay: 0.2s;
}

.square:nth-child(6) {
  background: linear-gradient(135deg, #a855f7, #c026d3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.6));
  animation-delay: 0.25s;
}

.square:nth-child(7) {
  background: linear-gradient(135deg, #c026d3, #d946ef);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 8px rgba(192, 38, 211, 0.6));
  animation-delay: 0.3s;
}

.square:nth-child(8) {
  background: linear-gradient(135deg, #d946ef, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 8px rgba(217, 70, 239, 0.6));
  animation-delay: 0.35s;
}

.square:nth-child(9) {
  background: linear-gradient(135deg, #ec4899, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 8px rgba(236, 72, 153, 0.6));
  animation-delay: 0.4s;
}

.square:nth-child(10) {
  background: linear-gradient(135deg, #f59e0b, #ffc107);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 8px rgba(255, 193, 7, 0.6));
  animation-delay: 0.45s;
}

/* Light theme: Orange to gold gradient across squares */
[data-theme="light"] .square:nth-child(1) {
  background: linear-gradient(135deg, #d97706, #ea580c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 1px 4px rgba(217, 119, 6, 0.4));
}

[data-theme="light"] .square:nth-child(2) {
  background: linear-gradient(135deg, #ea580c, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 1px 4px rgba(234, 88, 12, 0.4));
}

[data-theme="light"] .square:nth-child(3) {
  background: linear-gradient(135deg, #f59e0b, #f97316);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 1px 4px rgba(245, 158, 11, 0.4));
}

[data-theme="light"] .square:nth-child(4) {
  background: linear-gradient(135deg, #f97316, #fb923c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 1px 4px rgba(249, 115, 22, 0.4));
}

[data-theme="light"] .square:nth-child(5) {
  background: linear-gradient(135deg, #fb923c, #fbbf24);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 1px 4px rgba(251, 146, 60, 0.4));
}

[data-theme="light"] .square:nth-child(6) {
  background: linear-gradient(135deg, #fbbf24, #fcd34d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 1px 4px rgba(251, 191, 36, 0.4));
}

[data-theme="light"] .square:nth-child(7) {
  background: linear-gradient(135deg, #fcd34d, #fde68a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 1px 4px rgba(252, 211, 77, 0.4));
}

[data-theme="light"] .square:nth-child(8) {
  background: linear-gradient(135deg, #fde68a, #fef3c7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 1px 4px rgba(253, 230, 138, 0.4));
}

[data-theme="light"] .square:nth-child(9) {
  background: linear-gradient(135deg, #fef3c7, #fef9e7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 1px 4px rgba(254, 243, 199, 0.4));
}

[data-theme="light"] .square:nth-child(10) {
  background: linear-gradient(135deg, #fef9e7, #fffbeb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 1px 4px rgba(254, 249, 231, 0.4));
}

@keyframes leverageRotate {
  0%, 100% {
    transform: rotate(0deg) scale(1);
  }
  25% {
    transform: rotate(90deg) scale(1.1);
  }
  50% {
    transform: rotate(180deg) scale(1);
  }
  75% {
    transform: rotate(270deg) scale(1.1);
  }
}

/* Responsive Design */
@media (max-width: 640px) {
  .asciiArt {
    font-size: 0.4rem;
  }

  .loadingText {
    font-size: 1rem;
  }

  .loadingContainer {
    padding: 1rem;
  }
}

```

### src/components/ui/LoadingScreen/LoadingScreen.tsx

```tsx
import React, { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

interface LoadingScreenProps {
  onComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing systems...');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const loadingStages = [
      { progress: 0, text: 'Initializing systems...' },
      { progress: 15, text: 'Loading AI modules...' },
      { progress: 30, text: 'Bootstrapping ML pipelines...' },
      { progress: 50, text: 'Configuring agentic workflows...' },
      { progress: 70, text: 'Compiling portfolio data...' },
      { progress: 90, text: 'Finalizing deployment...' },
      { progress: 100, text: 'Ready!' }
    ];

    let currentStage = 0;
    const interval = setInterval(() => {
      if (currentStage < loadingStages.length) {
        const stage = loadingStages[currentStage];
        setProgress(stage.progress);
        setLoadingText(stage.text);
        currentStage++;
      } else {
        clearInterval(interval);
        // Wait a bit on "Ready!" then fade out
        setTimeout(() => {
          setIsVisible(false);
          // Call completion callback after fade
          setTimeout(() => {
            onComplete?.();
          }, 500); // Match CSS transition duration
        }, 300);
      }
    }, 600); // 600ms per stage = ~4.2 seconds total

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`${styles.loadingScreen} ${progress === 100 ? styles.fadeOut : ''}`}>
      <div className={styles.loadingContainer}>
        {/* ASCII Art Logo */}
        <div className={styles.asciiLogo}>
          <pre className={styles.asciiArt}>
{`
██╗   ██╗  ██╗   ██╗  ██████╗   ██╗   ██████╗  ██████╗   ███████╗  ██╗   ██╗
╚██╗ ██╔╝  ██║   ██║  ██╔══██╗  ██║  ██╔═══██╗ ██╔══██╗  ██╔════╝  ██║   ██║
 ╚████╔╝   ██║   ██║  ██████╔╝  ██║  ██║   ██║ ██║  ██║  █████╗    ╚██╗ ██╔╝
  ╚██╔╝    ██║   ██║  ██╔══██╗  ██║  ██║   ██║ ██║  ██║  ██╔══╝     ╚████╔╝ 
   ██║     ╚██████╔╝  ██║  ██║  ██║  ╚██████╔╝ ██████╔╝  ███████╗    ╚██╔╝  
   ╚═╝      ╚═════╝   ╚═╝  ╚═╝  ╚═╝  ╚═════╝   ╚═════╝   ╚══════╝     ╚═╝ 
`}
          </pre>
        </div>

        {/* Loading Text */}
        <div className={styles.loadingText}>
          <span className={styles.prompt}>$ </span>
          <span className={styles.text}>{loadingText}</span>
          <span className={styles.cursor}>_</span>
        </div>

        {/* Progress Bar */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className={styles.progressText}>{progress}%</div>
        </div>

        {/* Loading Animation - Rotating ASCII Squares */}
        <div className={styles.loadingAnimation}>
          <div className={styles.spinnerContainer}>
            <div className={styles.square}>▪</div>
            <div className={styles.square}>▪</div>
            <div className={styles.square}>▪</div>
            <div className={styles.square}>▪</div>
            <div className={styles.square}>▪</div>
            <div className={styles.square}>▪</div>
            <div className={styles.square}>▪</div>
            <div className={styles.square}>▪</div>
            <div className={styles.square}>▪</div>
            <div className={styles.square}>▪</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

```

### src/components/ui/ProjectCard/ProjectCard.module.css

```css
.projectCard {
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
    animation: slideIn 0.5s ease-out;
    backdrop-filter: blur(10px);
    background: rgba(15, 23, 42, 0.95);
    border: 1px solid rgba(6, 182, 212, 0.4);
    box-shadow: 0 4px 16px rgba(6, 182, 212, 0.1);
    position: relative;
    display: flex;
    flex-direction: column;
    font-family: 'Fira Code', monospace;
}

/* Shimmer effect on top border */
.projectCard::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--accent-secondary);
    transform: scaleX(0);
    transition: transform 0.3s ease;
    z-index: 2;
}

.projectCard:hover::before {
    transform: scaleX(1);
}

/* Light theme card styling */
[data-theme="light"] .projectCard {
    background: rgba(255, 255, 255, 0.98);
    border: 1px solid rgba(217, 119, 6, 0.4);
    box-shadow: 0 2px 8px rgba(217, 119, 6, 0.12);
}

/* Featured badge styling */
.projectCard.featured {
    border-color: var(--accent-secondary);
    box-shadow: 0 4px 20px rgba(var(--accent-secondary-rgb), 0.2);
}

/* Dark theme hover */
.projectCard:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(var(--accent-secondary-rgb), 0.2);
    border-color: var(--accent-secondary);
}

/* Light theme hover */
[data-theme="light"] .projectCard:hover {
    box-shadow: 0 8px 24px rgba(217, 119, 6, 0.3) !important;
    border-color: var(--accent-secondary) !important;
    transform: translateY(-4px);
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Card Header - matching TimelineItem with fixed height */
.projectHeader {
    background: rgba(6, 182, 212, 0.08);
    border-bottom: 1px solid rgba(6, 182, 212, 0.3);
    padding: 1rem 1.5rem;
    min-height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

/* Light theme header */
[data-theme="light"] .projectHeader {
    background: rgba(217, 119, 6, 0.06);
    border-bottom-color: rgba(217, 119, 6, 0.2);
}

/* Header content wrapper */
.headerContent {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
    min-width: 0;
}

.projectTitle {
    color: var(--accent-secondary);
    font-size: clamp(1.1rem, 2vw, 1.3rem);
    font-weight: 600;
    margin-bottom: 0.3rem;
    word-break: break-word;
    overflow-wrap: break-word;
    white-space: normal;
    line-height: 1.3;
    font-family: 'Fira Code', monospace;
}

.projectTitle::before {
    content: '$ ';
    color: var(--accent-primary);
}

/* Light theme title */
[data-theme="light"] .projectTitle::before {
    color: var(--accent-secondary);
}

.featuredBadge {
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
    background: var(--accent-secondary);
    color: var(--bg-primary);
    border-radius: 4px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    flex-shrink: 0;
    align-self: flex-start;
    height: fit-content;
}

/* Light theme featured badge */
[data-theme="light"] .featuredBadge {
    background: var(--accent-secondary);
    color: white;
}

.projectSubtitle {
    color: var(--accent-tertiary);
    font-size: clamp(0.85rem, 1.5vw, 0.95rem);
    margin-bottom: 0.25rem;
    font-style: italic;
    line-height: 1.3;
}

/* Light theme subtitle */
[data-theme="light"] .projectSubtitle {
    color: var(--accent-secondary);
}

.projectMeta {
    color: var(--text-muted);
    font-size: clamp(0.75rem, 1.5vw, 0.85rem);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    line-height: 1.3;
}

.period {
    color: var(--accent-primary);
    font-family: 'Fira Code', monospace;
    font-weight: 600;
}

/* Light theme period */
[data-theme="light"] .period {
    color: var(--accent-secondary);
}

.client {
    color: var(--text-secondary);
}

/* Card Content - with padding */
.projectDescription {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
    padding: 0 1.5rem;
    padding-top: 1.5rem;
}

/* Highlighted Metrics in Text */
.highlightedMetric {
    color: var(--accent-secondary);
    font-weight: 700;
    font-size: 1.1em;
    padding: 0 0.2em;
    background: rgba(var(--accent-secondary-rgb), 0.15);
    border-radius: 3px;
    white-space: nowrap;
    font-family: 'Fira Code', monospace;
}

/* Light theme highlighted metrics */
[data-theme="light"] .highlightedMetric {
    color: var(--accent-secondary);
    background: rgba(217, 119, 6, 0.12);
}

/* Highlighted Code Elements (quoted text) */
.highlightedCode {
    color: var(--accent-primary);
    font-weight: 600;
    font-size: 0.95em;
    padding: 0.1em 0.4em;
    background: rgba(var(--accent-primary-rgb), 0.15);
    border-radius: 3px;
    font-family: 'Fira Code', monospace;
    border: 1px solid rgba(var(--accent-primary-rgb), 0.3);
}

/* Light theme highlighted code */
[data-theme="light"] .highlightedCode {
    color: var(--accent-primary);
    background: rgba(0, 89, 179, 0.1);
    border-color: rgba(0, 89, 179, 0.25);
}

/* Expandable Section */
.expandableSection {
    margin: 1.5rem 1.5rem;
}

.expandButton {
    background: rgba(var(--accent-primary-rgb), 0.1);
    border: 1px solid var(--accent-primary);
    color: var(--accent-primary);
    padding: 0.6rem 1.2rem;
    border-radius: 4px;
    cursor: pointer;
    font-family: 'Fira Code', monospace;
    font-size: 0.85rem;
    transition: all 0.3s ease;
    width: 100%;
    text-align: left;
}

/* Dark theme hover */
.expandButton:hover {
    background: rgba(var(--accent-primary-rgb), 0.2);
    box-shadow: 0 0 10px rgba(var(--accent-primary-rgb), 0.4);
}

/* Light theme expand button */
[data-theme="light"] .expandButton {
    background: rgba(217, 119, 6, 0.08);
    border-color: var(--accent-secondary);
    color: var(--accent-secondary);
}

.projectDetails {
    margin-top: 1rem;
    padding: 1rem;
    background: rgba(var(--accent-primary-rgb), 0.05);
    border-left: 3px solid var(--accent-primary);
    border-radius: 4px;
    animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Light theme details */
[data-theme="light"] .projectDetails {
    background: rgba(217, 119, 6, 0.04);
    border-left-color: var(--accent-secondary);
}

.detailBlock {
    margin-bottom: 1rem;
}

.detailBlock:last-child {
    margin-bottom: 0;
}

.detailBlock h4 {
    color: var(--accent-tertiary);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Fira Code', monospace;
}

/* Light theme detail headers */
[data-theme="light"] .detailBlock h4 {
    color: var(--accent-secondary);
}

.detailBlock p {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 0.85rem;
}

/* Tech Stack */
.techStack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1rem 1.5rem;
    margin-top: auto;
}

.techTag {
    font-size: 0.75rem;
    padding: 0.3rem 0.8rem;
    background: rgba(var(--accent-primary-rgb), 0.1);
    border: 1px solid var(--accent-primary);
    border-radius: 4px;
    color: var(--accent-primary);
    font-family: 'Fira Code', monospace;
    transition: all 0.3s ease;
}

.techTag:hover {
    background: rgba(var(--accent-primary-rgb), 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(var(--accent-primary-rgb), 0.3);
}

/* Light theme tech tags */
[data-theme="light"] .techTag {
    background: rgba(2, 132, 199, 0.08);
    border-color: #0284c7;
    color: #0369a1;
}

[data-theme="light"] .techTag:hover {
    background: rgba(2, 132, 199, 0.15);
    box-shadow: 0 4px 12px rgba(2, 132, 199, 0.2);
}

.techTag.methodology {
    background: rgba(var(--accent-tertiary-rgb), 0.1);
    border-color: var(--accent-tertiary);
    color: var(--accent-tertiary);
}

.techTag.methodology:hover {
    background: rgba(var(--accent-tertiary-rgb), 0.2);
    box-shadow: 0 4px 12px rgba(var(--accent-tertiary-rgb), 0.3);
}

/* Light theme methodology tags */
[data-theme="light"] .techTag.methodology {
    background: rgba(217, 119, 6, 0.08);
    border-color: var(--accent-secondary);
    color: var(--accent-secondary);
}

[data-theme="light"] .techTag.methodology:hover {
    background: rgba(217, 119, 6, 0.15);
    box-shadow: 0 4px 12px rgba(217, 119, 6, 0.2);
}

/* Links */
.projectLinks {
    display: flex;
    gap: 1rem;
    margin: 1rem 1.5rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
}

.projectLink {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--accent-secondary);
    text-decoration: none;
    font-family: 'Fira Code', monospace;
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    border: 1px solid var(--accent-secondary);
    border-radius: 4px;
    transition: all 0.3s ease;
    background: rgba(var(--accent-secondary-rgb), 0.05);
}

.projectLink:hover {
    background: rgba(var(--accent-secondary-rgb), 0.1);
    box-shadow: 0 0 10px rgba(var(--accent-secondary-rgb), 0.3);
    transform: translateX(4px);
}

/* Disabled/Coming Soon link */
.projectLink.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    color: var(--text-muted);
    border-color: var(--text-muted);
    background: rgba(var(--text-muted-rgb), 0.05);
    pointer-events: none;
}

.projectLink.disabled:hover {
    transform: none;
    box-shadow: none;
}

/* Light theme disabled */
[data-theme="light"] .projectLink.disabled {
    opacity: 0.5;
    color: #94a3b8;
    border-color: #cbd5e1;
    background: rgba(148, 163, 184, 0.05);
}

/* Light theme links */
[data-theme="light"] .projectLink {
    color: var(--accent-secondary);
    border-color: var(--accent-secondary);
    background: rgba(217, 119, 6, 0.06);
}

[data-theme="light"] .projectLink:hover {
    background: var(--accent-secondary);
    color: white;
    box-shadow: 0 4px 12px rgba(217, 119, 6, 0.3);
}

/* Light theme expand button hover */
[data-theme="light"] .expandButton:hover {
    background: var(--accent-secondary);
    color: white;
    box-shadow: 0 4px 12px rgba(217, 119, 6, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
    .projectHeader {
        padding: 1rem;
        gap: 0.75rem;
        min-height: 4.5rem;
    }
    
    .projectDescription {
        padding: 1rem;
        padding-top: 1rem;
        font-size: 0.85rem;
    }
    
    .projectTitle {
        font-size: clamp(1rem, 2.5vw, 1.1rem);
    }
    
    .featuredBadge {
        font-size: 0.65rem;
        padding: 0.15rem 0.5rem;
    }
    
    .highlightedMetric {
        font-size: 1.05em;
        padding: 0 0.15em;
    }
    
    .highlightedCode {
        font-size: 0.9em;
        padding: 0.1em 0.3em;
    }
    
    .expandableSection {
        margin: 1.5rem 1rem;
    }
    
    .techStack {
        gap: 0.4rem;
        margin: 1rem;
    }
    
    .techTag {
        font-size: 0.75rem;
        padding: 0.25rem 0.6rem;
    }
    
    .projectLinks {
        flex-direction: column;
        gap: 0.75rem;
        margin: 1rem;
    }
    
    .projectLink {
        width: 100%;
        text-align: center;
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .projectHeader {
        padding: 0.75rem;
        gap: 0.5rem;
        min-height: 4rem;
        align-items: flex-start;
    }
    
    .projectDescription {
        padding: 0.75rem;
        padding-top: 0.75rem;
        font-size: 0.8rem;
    }
    
    .projectTitle {
        font-size: clamp(0.95rem, 3vw, 1rem);
    }
    
    .featuredBadge {
        font-size: 0.6rem;
        padding: 0.15rem 0.4rem;
    }
    
    .highlightedMetric {
        font-size: 1em;
        padding: 0 0.1em;
    }
    
    .highlightedCode {
        font-size: 0.85em;
        padding: 0.1em 0.25em;
    }
    
    .expandableSection {
        margin: 1rem 0.75rem;
    }
    
    .techStack {
        margin: 0.75rem;
    }
    
    .projectLinks {
        margin: 0.75rem;
    }
}

```

### src/components/ui/ProjectCard/ProjectCard.tsx

```tsx
import React, { useState } from 'react';
import type { Project } from '../../../services/projectsData';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

// Helper function to highlight numbers, metrics, and code elements in text
const highlightMetrics = (text: string) => {
  // Combined pattern to match:
  // 1. Numbers with optional units/suffixes (95%, 200+, <30, etc.)
  // 2. Single-quoted code elements ('AssertionError', 'check_for_loops')
  // 3. Technical terms in backticks
  const pattern = /(<?\d+\.?\d*[+%]?|[<>≤≥]\d+)|'([^']+)'|`([^`]+)`/g;
  const parts: (string | React.ReactElement)[] = [];
  let lastIndex = 0;
  let match;
  
  while ((match = pattern.exec(text)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    
    // Determine type and add highlighted element
    if (match[1]) {
      // Numeric metric
      parts.push(
        <span key={match.index} className={styles.highlightedMetric}>
          {match[1]}
        </span>
      );
    } else if (match[2] || match[3]) {
      // Code element (single quote or backtick)
      const code = match[2] || match[3];
      parts.push(
        <span key={match.index} className={styles.highlightedCode}>
          {code}
        </span>
      );
    }
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  
  return parts.length > 0 ? parts : text;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}>
      <div className={styles.projectHeader}>
        <div className={styles.headerContent}>
          <h3 className={styles.projectTitle}>
            {project.title}
          </h3>
          {project.subtitle && <p className={styles.projectSubtitle}>{project.subtitle}</p>}
          <div className={styles.projectMeta}>
            <span className={styles.period}>{project.period}</span>
            {project.client && <span className={styles.client}>• {project.client}</span>}
          </div>
        </div>
        {project.featured && <span className={styles.featuredBadge}>Featured</span>}
      </div>

      <p className={styles.projectDescription}>{project.description}</p>

      {/* Expandable Details */}
      {(project.challenge || project.solution || project.impact) && (
        <div className={styles.expandableSection}>
          <button 
            className={styles.expandButton}
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? '▼ Hide Details' : '▶ Show Details'}
          </button>
          
          {isExpanded && (
            <div className={styles.projectDetails}>
              {project.challenge && (
                <div className={styles.detailBlock}>
                  <h4>Challenge</h4>
                  <p>{highlightMetrics(project.challenge)}</p>
                </div>
              )}
              {project.solution && (
                <div className={styles.detailBlock}>
                  <h4>Solution</h4>
                  <p>{highlightMetrics(project.solution)}</p>
                </div>
              )}
              {project.impact && (
                <div className={styles.detailBlock}>
                  <h4>Impact</h4>
                  <p>{highlightMetrics(project.impact)}</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Tech Stack */}
      <div className={styles.techStack}>
        {project.techStack.map((tech) => (
          <span key={tech} className={styles.techTag}>{tech}</span>
        ))}
        {project.methodologies.map((method) => (
          <span key={method} className={`${styles.techTag} ${styles.methodology}`}>{method}</span>
        ))}
      </div>

      {/* Links */}
      <div className={styles.projectLinks}>
        {project.links.map((link) => {
          const isComingSoon = link.name.toLowerCase().includes('coming soon');
          return isComingSoon ? (
            <span 
              key={link.name} 
              className={`${styles.projectLink} ${styles.disabled}`}
              title="Coming soon"
            >
              {link.name}
            </span>
          ) : (
            <a 
              key={link.name} 
              href={link.url} 
              className={styles.projectLink}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;

```

### src/components/ui/ScrollToTop/ScrollToTop.module.css

```css
.scrollToTop {
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  width: 60px;
  height: 60px;
  background: var(--bg-secondary);
  border: 2px solid var(--accent-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  color: var(--accent-primary);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.scrollToTop:hover {
  background: var(--accent-primary);
  color: var(--bg-primary);
  border-color: var(--accent-primary);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
}

.scrollToTop:active {
  transform: translateY(0);
  box-shadow: 0 4px 15px rgba(0, 212, 255, 0.2);
}

.scrollToTop.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.scrollToTop svg {
  width: 24px;
  height: 24px;
  transition: transform 0.2s ease;
}

.scrollToTop:hover svg {
  transform: translateY(-2px);
}

/* Light theme adjustments */
[data-theme="light"] .scrollToTop {
  background: var(--bg-primary);
  border-color: var(--accent-secondary);
  color: var(--accent-secondary);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

[data-theme="light"] .scrollToTop:hover {
  background: var(--accent-secondary);
  color: var(--bg-primary);
  border-color: var(--accent-secondary);
  box-shadow: 0 8px 25px rgba(44, 82, 130, 0.3);
}

/* Responsive design */
@media (max-width: 768px) {
  .scrollToTop {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 45px;
    height: 45px;
  }

  .scrollToTop svg {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 576px) {
  .scrollToTop {
    bottom: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
  }

  .scrollToTop svg {
    width: 18px;
    height: 18px;
  }
}
```

### src/components/ui/ScrollToTop/ScrollToTop.tsx

```tsx
import React, { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`${styles.scrollToTop} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
```

### src/components/ui/SkillTerminal/SkillTerminal.module.css

```css
.skillTerminal {
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(6, 182, 212, 0.4);
    border-radius: 8px;
    padding: 0;
    font-family: 'Fira Code', monospace;
    font-size: 0.9rem;
    line-height: 1.6;
    box-shadow: 0 4px 16px rgba(6, 182, 212, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

/* Shimmer effect on top border */
.skillTerminal::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--accent-secondary);
    transform: scaleX(0);
    transition: transform 0.3s ease;
    z-index: 2;
}

.skillTerminal:hover::before {
    transform: scaleX(1);
}

.skillTerminal:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(var(--accent-secondary-rgb), 0.2);
    border-color: var(--accent-secondary);
}

[data-theme="light"] .skillTerminal {
    background: rgba(255, 255, 255, 0.98);
    border: 1px solid rgba(249, 115, 22, 0.4);
    box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}

[data-theme="light"] .skillTerminal:hover {
    box-shadow: 0 8px 24px rgba(249, 115, 22, 0.3) !important;
    border-color: #f97316 !important;
    transform: translateY(-4px);
}

.skillHeader {
    background: rgba(6, 182, 212, 0.08);
    color: var(--accent-secondary);
    font-weight: 600;
    padding: 0 1.5rem;
    height: 3.5rem;
    min-height: 3.5rem;
    display: flex;
    align-items: center;
    font-size: clamp(0.85rem, 2vw, 1rem);
    border-bottom: 1px solid rgba(6, 182, 212, 0.3);
}

[data-theme="light"] .skillHeader {
    background: rgba(249, 115, 22, 0.06);
    border-bottom-color: rgba(249, 115, 22, 0.2);
}

.terminalPrompt {
    color: var(--accent-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
}

.skillContent {
    padding: 1rem;
}

.progressBar {
    background:rgba(0,0,0,0.5);
    height:8px;
    border-radius:4px;
    margin:0rem 0;
    border:1px solid var(--text-on-light-bg);
    overflow:hidden;
    position:relative;
}

[data-theme="light"] .progressBar {
    background:rgba(0,0,0,0.1);
    border:1px solid var(--border-color);
}

.progressFill {
    height:100%;
    background:linear-gradient(90deg,var(--accent-primary),var(--accent-secondary),var(--accent-tertiary));
    border-radius:4px;
    position:relative;
    width: 0%;
    transition: width 2s ease-out;
}

.progressFill.animate {
    animation: progressLoad 2s ease-out forwards;
}

@keyframes progressLoad {
    from { width: 0; }
}

.progressFill::after {
    content:'';
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent);
    animation:shimmer 2s infinite;
}

@keyframes shimmer {
    0%{transform:translateX(-100%);}
    100%{transform:translateX(100%);}
}

.skillLevel {
    position:absolute;
    top:1.5rem;
    right:1.5rem;
    font-size:0.8rem;
    font-weight:600;
    color:var(--accent-secondary);
    text-transform:uppercase;
}

.skillDetails {
    margin-top:0.75rem;
    display:flex;
    flex-wrap:wrap;
    gap:0.5rem;
}

.skillTagDetail {
    background:rgba(var(--accent-tertiary-rgb),0.2);
    border:1px solid var(--accent-tertiary);
    color:var(--accent-tertiary);
    padding:0.2rem 0.6rem;
    border-radius:4px;
    font-size:0.75rem;
    transition: all 0.2s ease;
    cursor: default;
}

.skillTagDetail.highlightSkill {
    background:rgba(var(--accent-secondary-rgb),0.2);
    border-color:var(--accent-secondary);
    color:var(--accent-secondary);
    font-weight:600;
}

/* ============================================ */
/* Color-Coded Tag Types */
/* ============================================ */

/* Framework Tags - Purple/Violet */
.tag_framework {
    background: rgba(147, 51, 234, 0.15);
    border-color: #9333ea;
    color: #c084fc;
}

[data-theme="light"] .tag_framework {
    background: rgba(147, 51, 234, 0.1);
    border-color: #9333ea;
    color: #7c3aed;
}

.tag_framework:hover {
    background: rgba(147, 51, 234, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(147, 51, 234, 0.3);
}

/* Database Tags - Cyan/Teal */
.tag_database {
    background: rgba(6, 182, 212, 0.15);
    border-color: #06b6d4;
    color: #22d3ee;
}

[data-theme="light"] .tag_database {
    background: rgba(6, 182, 212, 0.1);
    border-color: #0891b2;
    color: #0e7490;
}

.tag_database:hover {
    background: rgba(6, 182, 212, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(6, 182, 212, 0.3);
}

/* Model Tags - Pink/Rose */
.tag_model {
    background: rgba(236, 72, 153, 0.15);
    border-color: #ec4899;
    color: #f9a8d4;
}

[data-theme="light"] .tag_model {
    background: rgba(236, 72, 153, 0.1);
    border-color: #db2777;
    color: #be185d;
}

.tag_model:hover {
    background: rgba(236, 72, 153, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(236, 72, 153, 0.3);
}

/* Language Tags - Green/Emerald */
.tag_language {
    background: rgba(16, 185, 129, 0.15);
    border-color: #10b981;
    color: #6ee7b7;
}

[data-theme="light"] .tag_language {
    background: rgba(16, 185, 129, 0.1);
    border-color: #059669;
    color: #047857;
}

.tag_language:hover {
    background: rgba(16, 185, 129, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

/* Cloud Tags - Blue/Sky */
.tag_cloud {
    background: rgba(59, 130, 246, 0.15);
    border-color: #3b82f6;
    color: #93c5fd;
}

[data-theme="light"] .tag_cloud {
    background: rgba(59, 130, 246, 0.1);
    border-color: #2563eb;
    color: #1d4ed8;
}

.tag_cloud:hover {
    background: rgba(59, 130, 246, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

/* Tool Tags - Amber/Yellow */
.tag_tool {
    background: rgba(245, 158, 11, 0.15);
    border-color: #f59e0b;
    color: #fbbf24;
}

[data-theme="light"] .tag_tool {
    background: rgba(245, 158, 11, 0.1);
    border-color: #d97706;
    color: #b45309;
}

.tag_tool:hover {
    background: rgba(245, 158, 11, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}

/* Concept Tags - Indigo */
.tag_concept {
    background: rgba(99, 102, 241, 0.15);
    border-color: #6366f1;
    color: #a5b4fc;
}

[data-theme="light"] .tag_concept {
    background: rgba(99, 102, 241, 0.1);
    border-color: #4f46e5;
    color: #4338ca;
}

.tag_concept:hover {
    background: rgba(99, 102, 241, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}

/* Metric Tags - Orange (Highlight) */
.tag_metric {
    background: rgba(249, 115, 22, 0.2);
    border-color: #f97316;
    color: #fb923c;
    font-weight: 600;
}

[data-theme="light"] .tag_metric {
    background: rgba(249, 115, 22, 0.15);
    border-color: #ea580c;
    color: #c2410c;
    font-weight: 600;
}

.tag_metric:hover {
    background: rgba(249, 115, 22, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(249, 115, 22, 0.4);
}

/* ============================================ */

@media (max-width: 768px) {
    .skillHeader {
        height: 3rem;
        min-height: 3rem;
        padding: 0 1rem;
        font-size: clamp(0.8rem, 2.5vw, 0.95rem);
    }

    .skillContent {
        padding: 1rem;
    }

    .skillLevel {
        position: static;
        display: block;
        margin-bottom: 0.5rem;
        font-size: 0.75rem;
    }

    .progressBar {
        height: 6px;
        margin: 0.75rem 0;
    }

    .skillDetails {
        gap: 0.4rem;
    }

    .skillTagDetail {
        font-size: 0.7rem;
        padding: 0.15rem 0.5rem;
    }
}

@media (max-width: 480px) {
    .skillHeader {
        height: 2.75rem;
        min-height: 2.75rem;
        padding: 0 0.875rem;
        font-size: clamp(0.75rem, 3vw, 0.85rem);
    }

    .skillContent {
        padding: 0.875rem;
    }
}

```

### src/components/ui/SkillTerminal/SkillTerminal.tsx

```tsx
import React from 'react';
import type { Skill, SkillTagType } from '../../../services/skillsData';
import { skillsDataTyped } from '../../../services/skillsData';
import styles from './SkillTerminal.module.css';

interface SkillTerminalProps {
  skill: Skill;
}

const SkillTerminal: React.FC<SkillTerminalProps> = ({ skill }) => {
  // Find the typed version of this skill for color-coded tags
  const typedSkill = skillsDataTyped.find(s => s.id === skill.id);

  const getTagClassName = (type: SkillTagType): string => {
    return `${styles.skillTagDetail} ${styles[`tag_${type}`]}`;
  };

  return (
    <div className={styles.skillTerminal}>
      <div className={styles.skillHeader}>
        <span className={styles.terminalPrompt}>$ {skill.title}</span>
      </div>
      <div className={styles.skillContent}>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${skill.progress}%` }}
          ></div>
        </div>
        <div className={styles.skillDetails}>
        {typedSkill ? (
          <>
            {typedSkill.details.map((detail) => (
              <span key={detail.name} className={getTagClassName(detail.type)}>
                {detail.name}
              </span>
            ))}
            <span className={getTagClassName(typedSkill.highlight.type)}>
              {typedSkill.highlight.text}
            </span>
          </>
        ) : (
          <>
            {skill.details.map((detail) => (
              <span key={detail} className={styles.skillTagDetail}>{detail}</span>
            ))}
            {skill.highlight && (
              <span className={`${styles.skillTagDetail} ${styles.highlightSkill}`}>
                {skill.highlight}
              </span>
            )}
          </>
        )}
        </div>
      </div>
    </div>
  );
};

export default SkillTerminal;

```

### src/context/ThemeContext.tsx

```tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) return savedTheme;
    
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    
    // Default to dark
    return 'dark';
  });

  useEffect(() => {
    // Apply theme to document root
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      
      // Terminal-style console output (matching original HTML)
      console.log(`%c$ ./set_theme --mode=${newTheme}`, 'color: #FFC107; font-family: "Fira Code", monospace; font-weight: 600;');
      console.log(`%c✓ Theme switched to: ${newTheme} mode`, 'color: #00ff88; font-family: "Fira Code", monospace;');
      console.log(`%c✓ Interface colors updated`, 'color: #00ff88; font-family: "Fira Code", monospace;');
      console.log(`%c✓ Neural network visualization adjusted`, 'color: #00ff88; font-family: "Fira Code", monospace;');
      
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

```

### src/data/aboutData.ts

```typescript
/**
 * About Data - Personal Information & Mission
 * Updated from CV (October 2025)
 */

export interface Achievement {
  metric: string;
  label: string;
  description?: string;
}

export interface AboutData {
  headline: string;
  yearsExperience: string;
  summary: string;
  mission: string;
  currentlyBuilding: string[];
  nextSteps: string[];
  vision: string[];
  achievements: Achievement[];
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
}

export const aboutData: AboutData = {
  headline: "AI/ML Systems Engineer | Agentic Architect",
  yearsExperience: "8+",
  summary: `Specialized in building production-grade AI/ML systems with focus on agentic architectures, RAG pipelines, and cloud-native platforms. Currently architecting intelligent agents and democratizing ML education through hands-on learning.`,
  
  mission: `Building the next generation of AI education — moving beyond theory to production-ready skills. Creating open-source resources and learning platforms that bridge the gap between knowing and doing.`,
  
  currentlyBuilding: [
    "YuriODev Platform",
    "MCP Server Architecture",
    "Multi-Agent Workflows",
    "RAG Pipeline Systems",
  ],
  
  nextSteps: [
    "Advanced Agentic Patterns Course",
    "Open-Source MCP Templates",
    "Production ML Playbooks",
    "Community Workshops & Mentoring",
  ],
  
  vision: [
    "Democratize AI/ML education",
    "Production-first learning",
    "Global developer community",
    "Open knowledge sharing",
  ],
  
  achievements: [
    {
      metric: "×50",
      label: "Data Latency Reduction",
      description: "Optimized BigQuery pipeline for property valuation platform",
    },
    {
      metric: "200%",
      label: "Sales Conversion Increase",
      description: "Multi-agent sales automation platform (SaleSphereAI)",
    },
    {
      metric: "1000+",
      label: "Students Reached",
      description: "Through YuriODev educational initiatives",
    },
  ],
  
  contact: {
    email: "yurii.oksamytnyi@yuriodev.co.uk",
    phone: "+44 7767 336011",
    location: "London, UK",
    linkedin: "https://linkedin.com/in/y-oks",
    github: "https://github.com/YuriiOks",
  },
};

```

### src/data/platformData.ts

```typescript
/**
 * Platform Data - YuriODev Educational Initiative
 * Updated from CV (October 2025)
 */

export interface RoadmapPhase {
  phase: number;
  title: string;
  status: 'completed' | 'active' | 'planned';
  description: string;
  completionDate?: string;
}

export interface PlatformFeature {
  title: string;
  description: string;
  icon: string;
  link?: string;
  status: 'live' | 'beta' | 'coming-soon';
}

export interface PlatformData {
  name: string;
  tagline: string;
  mission: string;
  currentPhase: {
    phase: number;
    title: string;
    progress: number;
  };
  roadmap: RoadmapPhase[];
  features: PlatformFeature[];
  stats: {
    label: string;
    value: string;
  }[];
}

export const platformData: PlatformData = {
  name: "YuriODev",
  tagline: "Democratizing AI/ML Education",
  mission: "Bridge the gap between theoretical ML knowledge and practical production systems through hands-on learning, automated feedback, and real-world projects.",
  
  currentPhase: {
    phase: 2,
    title: "Content Creation & Community Building",
    progress: 65,
  },
  
  roadmap: [
    {
      phase: 1,
      title: "Foundation & Infrastructure",
      status: "completed",
      description: "Built core platform infrastructure, CI/CD pipelines, and automated grading systems",
      completionDate: "Dec 2023",
    },
    {
      phase: 2,
      title: "Content Creation & Community",
      status: "active",
      description: "Developing comprehensive courses, video tutorials, and building learner community",
    },
    {
      phase: 3,
      title: "Interactive Platform Launch",
      status: "planned",
      description: "Full-stack web platform with code sandboxes, progress tracking, and live collaboration",
    },
    {
      phase: 4,
      title: "AI-Powered Features",
      status: "planned",
      description: "Intelligent tutoring system, personalized learning paths, and automated mentoring",
    },
  ],
  
  features: [
    {
      title: "Comprehensive Python Course",
      description: "25+ modules covering AQA GCSE CS syllabus from fundamentals to OOP with automated testing",
      icon: "🐍",
      link: "https://github.com/YurioDev/Python-Course",
      status: "live",
    },
    {
      title: "Automated CI/CD Grading",
      description: "GitHub Actions-powered testing workflow providing instant feedback on student submissions",
      icon: "🔄",
      link: "https://github.com/YurioDev/Python-Course",
      status: "live",
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step YouTube tutorials explaining concepts with practical examples and best practices",
      icon: "🎥",
      link: "#youtube",
      status: "live",
    },
    {
      title: "Interactive Code Sandboxes",
      description: "Browser-based Python environments with real-time execution and collaborative coding",
      icon: "💻",
      status: "coming-soon",
    },
    {
      title: "ML Project Templates",
      description: "Production-ready templates for RAG systems, agent workflows, and deployment pipelines",
      icon: "🤖",
      status: "beta",
    },
    {
      title: "AI Mentor Assistant",
      description: "Intelligent tutoring system providing personalized guidance and code reviews",
      icon: "🧠",
      status: "coming-soon",
    },
  ],
  
  stats: [
    { label: "Students Reached", value: "1,000+" },
    { label: "Course Modules", value: "25+" },
    { label: "Countries", value: "20+" },
    { label: "Satisfaction Rating", value: "95%+" },
    { label: "GitHub Stars", value: "50+" },
    { label: "Video Tutorials", value: "30+" },
  ],
};

```

### src/data/timelineData.ts

```typescript
/**
 * Timeline Data - Career Journey & Education
 * Extracted from CV (Updated: October 2025)
 */

export type TimelineEventType = 'experience' | 'education' | 'certification' | 'achievement';

export interface TimelineEvent {
  id: string;
  date: string;
  dateEnd?: string;
  title: string;
  company: string;
  location: string;
  type: TimelineEventType;
  description: string;
  highlights: string[];
  tags: string[];
  link?: string;
  linkText?: string;
  isOngoing?: boolean;
}

export const timelineData: TimelineEvent[] = [
  // ============================================
  // CURRENT ROLES
  // ============================================
  {
    id: 'lead-ai-engineer',
    date: 'Apr 2022',
    dateEnd: 'Present',
    title: 'Lead AI Engineer & Systems Designer',
    company: 'Independent (Consultant)',
    location: 'London, UK (Hybrid)',
    type: 'experience',
    description: 'Architecting and delivering end-to-end, production-grade AI systems for a portfolio of clients, from high-growth startups to global financial institutions. Specializing in custom agentic workflows, retrieval-augmented generation (RAG) pipelines, and the full-stack, cloud-native infrastructure required to support them.',
    highlights: [
      'Built RAG prototype improving retrieval precision from 30% to 95% with <1.2s p95 latency (100 concurrent users)',
      'Architected multi-agent sales platform (SaleSphereAI) increasing sales conversion by 200%',
      'Delivered HR Tech resume parsing platform achieving 93% F1 score and reducing time-to-hire by 75%',
      'Engineered property valuation platform processing 100M+ records with 94% accuracy and ×50 faster data loading',
      'Provided specialized consulting for JPMorgan, Bloomberg, and Houlihan Lokey on Python/R AI tooling',
    ],
    tags: ['RAG', 'LangGraph', 'MCP', 'Multi-Agent Systems', 'FastAPI', 'PyTorch', 'GCP', 'AWS'],
    isOngoing: true,
  },
  {
    id: 'technical-lead-mentor',
    date: 'Sep 2014',
    dateEnd: 'Present',
    title: 'Technical Lead & Mentor',
    company: 'YuriODev Educational Initiative',
    location: 'Remote',
    type: 'experience',
    description: 'Leading the YuriODev platform development - democratizing AI/ML education through hands-on learning. Building comprehensive programming courses with automated grading systems and interactive learning tools.',
    highlights: [
      'Created 25+ module Python course covering AQA GCSE CS syllabus with automated CI/CD grading',
      'Developed automated code review system using GitHub Actions',
      'Published educational content on YouTube reaching 1000+ learners',
      'Mentored students from beginner to professional level in Python, ML, and system design',
    ],
    tags: ['Education', 'Python', 'GitHub Actions', 'Mentoring', 'Course Design'],
    link: 'https://discord.gg/2UK3cKDd2s',
    linkText: 'Join Discord Community',
    isOngoing: true,
  },

  // ============================================
  // EXPERIENCE - CHRONOLOGICAL
  // ============================================
  {
    id: 'lead-data-scientist-moh',
    date: 'Mar 2022',
    dateEnd: 'Oct 2022',
    title: 'Lead Data Scientist (Indirect Contract)',
    company: 'Ministry of Health of Ukraine',
    location: 'Kyiv, Ukraine (Remote)',
    type: 'experience',
    description: 'Led development of national healthcare analytics platform processing millions of patient records while ensuring GDPR compliance and healthcare data privacy standards.',
    highlights: [
      'Designed and implemented ML models for patient prognosis (>90% F1 score)',
      'Built end-to-end data pipelines processing millions of patient records',
      'Engineered system for full GDPR compliance and healthcare data privacy',
      'Delivered real-time analytics dashboards for healthcare decision-making',
    ],
    tags: ['Healthcare Analytics', 'ML Models', 'GDPR', 'ETL Pipelines', 'Privacy Engineering'],
  },
  {
    id: 'senior-ml-engineer-forecys',
    date: 'Jan 2021',
    dateEnd: 'Feb 2022',
    title: 'Senior ML Engineer',
    company: 'Forecys (FinTech)',
    location: 'London, UK (Hybrid)',
    type: 'experience',
    description: 'Architected and deployed production ML systems for financial forecasting and risk analysis, handling high-volume transaction data with real-time processing requirements. Worked with Pavel Yakovlev (LinkedIn: https://www.linkedin.com/in/pavel-yakovlev/).',
    highlights: [
      'Built scalable ML pipelines for financial time-series forecasting',
      'Implemented real-time fraud detection systems processing millions of transactions',
      'Optimized model serving infrastructure reducing latency by 60%',
      'Mentored junior ML engineers on best practices and system design',
    ],
    tags: ['FinTech', 'Time Series', 'Fraud Detection', 'MLOps', 'Real-time Systems'],
  },
  {
    id: 'data-scientist-forecys',
    date: 'Apr 2019',
    dateEnd: 'Jan 2021',
    title: 'Data Scientist',
    company: 'Forecys (FinTech)',
    location: 'London, UK',
    type: 'experience',
    description: 'Developed predictive models for financial markets and implemented data-driven solutions for risk assessment and portfolio optimization.',
    highlights: [
      'Created predictive models for market trend analysis with 85%+ accuracy',
      'Built automated reporting systems reducing manual analysis time by 40%',
      'Designed ETL pipelines for multi-source financial data integration',
      'Collaborated with quant teams on algorithmic trading strategies',
    ],
    tags: ['Financial Modeling', 'Predictive Analytics', 'ETL', 'Python', 'SQL'],
  },
  {
    id: 'ios-developer',
    date: '2016',
    dateEnd: '2019',
    title: 'iOS Developer',
    company: 'Freelance',
    location: 'Remote',
    type: 'experience',
    description: 'Developed native iOS applications with focus on clean architecture, performance optimization, and user experience.',
    highlights: [
      'Built and deployed 5+ iOS apps to App Store',
      'Implemented MVC/MVVM architectures with clean code principles',
      'Integrated RESTful APIs and local data persistence',
      'Optimized app performance and memory management',
    ],
    tags: ['Swift', 'Objective-C', 'iOS', 'UIKit', 'Core Data', 'REST APIs'],
  },
  {
    id: 'mipt-instructor',
    date: 'Sep 2014',
    dateEnd: 'Jul 2016',
    title: 'Instructor - Programming & Algorithms',
    company: 'Moscow Institute of Physics and Technology (MIPT)',
    location: 'Moscow, Russia',
    type: 'experience',
    description: 'Taught undergraduate courses in programming fundamentals, data structures, and algorithm design. Developed curriculum and mentored students in competitive programming.',
    highlights: [
      'Designed and delivered courses on C++, Python, and algorithm design',
      'Mentored students for ACM ICPC competitive programming competitions',
      'Created hands-on lab assignments and automated grading systems',
      'Achieved 95%+ student satisfaction rating',
    ],
    tags: ['Teaching', 'C++', 'Python', 'Algorithms', 'Data Structures', 'Academic'],
  },

  // ============================================
  // EDUCATION & CERTIFICATIONS
  // ============================================
  {
    id: 'coursera-vertex-ai',
    date: 'Oct 2024',
    title: 'Generative AI with Vertex AI: Prompt Design',
    company: 'Google Cloud Training (Coursera)',
    location: 'Online',
    type: 'certification',
    description: 'Hands-on project covering prompt engineering with the PaLM API and text generation use cases with Google Cloud Vertex AI.',
    highlights: [
      'Mastered prompt engineering with PaLM API',
      'Explored text generation use cases',
      'Learned prompt patterns and LLM application',
      'Built practical projects with Google Cloud Platform',
    ],
    tags: ['Generative AI', 'Prompt Engineering', 'Google Cloud', 'Vertex AI', 'PaLM API'],
    link: 'https://www.coursera.org/projects/googlecloud-generative-ai-with-vertex-ai-prompt-design-hajry',
  },
  {
    id: 'coursera-math-ml',
    // date: 'Jul 2019',
    date: 'Jul 2019',
    title: 'Mathematics for Machine Learning Specialization',
    company: 'Imperial College London (Coursera)',
    location: 'Online',
    type: 'certification',
    description: 'Comprehensive specialization covering the mathematical foundations for machine learning including linear algebra, multivariate calculus, and PCA.',
    highlights: [
      'Linear Algebra: vectors, matrices, eigenvalues',
      'Multivariate Calculus: optimization and gradients',
      'Principal Component Analysis (PCA)',
      'Applied mathematics to ML algorithms in Python',
    ],
    tags: ['Mathematics', 'Linear Algebra', 'Calculus', 'Machine Learning', 'Python'],
    link: 'https://www.coursera.org/account/accomplishments/specialization/RV7U3JCUFD2A',
  },
  {
    id: 'mlx-certificate',
    date: 'Apr 2025',
    dateEnd: 'May 2025',
    title: 'MLX Applied Machine Learning Certificate',
    company: 'ML Institute',
    location: '27 Dingley Place, EC1V 8BR, London, UK',
    type: 'education',
    description: 'Intensive on-site program covering advanced ML systems, production deployment, and real-world AI applications with hands-on projects. Mentored by Besart Shyti (LinkedIn: https://www.linkedin.com/in/besart-shyti-20616956/) and Izaak Sofer (LinkedIn: https://www.linkedin.com/in/izaakrogan/).',
    highlights: [
      'Completed capstone project on agentic AI systems',
      'Implemented production-grade ML pipelines',
      'Studied advanced topics: RAG, multi-agent systems, LLM fine-tuning',
      'Collaborated with industry practitioners on real-world problems',
      'On-site intensive training in London',
    ],
    tags: ['Machine Learning', 'MLOps', 'LLMs', 'Production AI'],
    link: 'https://ml.institute/',
  },
  {
    id: 'bsc-cs',
    date: '2012',
    dateEnd: '2016',
    title: 'BSc Computer Science',
    company: 'Moscow Institute of Physics and Technology (MIPT)',
    location: 'Moscow, Russia',
    type: 'education',
    description: 'Rigorous computer science program with emphasis on theoretical foundations, algorithms, and systems programming. Participated in competitive programming and research projects.',
    highlights: [
      'Graduated with honors (GPA: 4.8/5.0)',
      'Competitive programming: Multiple ACM ICPC regional medals',
      'Research focus: Algorithms and computational complexity',
      'Teaching assistant for undergraduate programming courses',
    ],
    tags: ['Computer Science', 'Algorithms', 'Systems Programming', 'Competitive Programming', 'Academic'],
  },

  // ============================================
  // KEY ACHIEVEMENTS/MILESTONES
  // ============================================
  {
    id: 'achievement-python-course',
    date: 'Jan 2024',
    title: 'Python Course 1.0 Release',
    company: 'YuriODev',
    location: 'Remote',
    type: 'achievement',
    description: 'Launched comprehensive open-source Python course with automated grading system, reaching 1000+ students worldwide.',
    highlights: [
      'Published 25+ modules covering full GCSE CS syllabus',
      'Implemented CI/CD automated grading with GitHub Actions',
      'Released YouTube video tutorials (10+ hours content)',
      'Reached 1000+ students across 20+ countries',
    ],
    tags: ['Education', 'Open Source', 'Python', 'CI/CD'],
    link: 'https://github.com/YurioDev/Python-Course',
  },
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get events filtered by type
 */
export const getEventsByType = (type: TimelineEventType): TimelineEvent[] => {
  return timelineData.filter((event) => event.type === type);
};

/**
 * Get ongoing/current events
 */
export const getCurrentEvents = (): TimelineEvent[] => {
  return timelineData.filter((event) => event.isOngoing);
};

/**
 * Get events sorted chronologically (newest first)
 */
export const getEventsSortedByDate = (ascending = false): TimelineEvent[] => {
  return [...timelineData].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return ascending ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
  });
};

/**
 * Get events by tag
 */
export const getEventsByTag = (tag: string): TimelineEvent[] => {
  return timelineData.filter((event) => 
    event.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase()))
  );
};

/**
 * Get all unique tags
 */
export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  timelineData.forEach((event) => {
    event.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
};

/**
 * Calculate total years of experience
 */
export const getTotalExperience = (): number => {
  const experienceEvents = getEventsByType('experience');
  const earliestDate = new Date(
    Math.min(...experienceEvents.map((e) => new Date(e.date).getTime()))
  );
  const now = new Date();
  return Math.floor((now.getTime() - earliestDate.getTime()) / (1000 * 60 * 60 * 24 * 365));
};

```

### src/hooks/useTypewriter.ts

```typescript
import { useState, useEffect } from 'react';

const useTypewriter = (messages: string[]) => {
  const [text, setText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentMessage = messages[messageIndex];

    const type = () => {
      if (isPaused) {
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, 2000);
        return;
      }

      if (isDeleting) {
        setText(currentMessage.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setMessageIndex((prev) => (prev + 1) % messages.length);
        }
      } else {
        setText(currentMessage.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentMessage.length) {
          setIsPaused(true);
        }
      }
    };

    const timeout = setTimeout(type, isDeleting ? 50 : isPaused ? 0 : 100);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, isPaused, charIndex, messageIndex, messages]);

  return text;
};

export default useTypewriter;

```

### src/index.css

```css

```

### src/main.tsx

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'
import './assets/styles/_variables.css'
import './assets/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

```

### src/pages/agent.tsx

```tsx
import AssistantTerminalSection from '../components/sections/AssistantTerminalSection/AssistantTerminalSection';
import AssistantFeaturesSection from '../components/sections/AssistantFeaturesSection/AssistantFeaturesSection';
import AssistantTechSection from '../components/sections/AssistantTechSection/AssistantTechSection';

const Agent = () => {
  return (
    <>
      <AssistantTerminalSection />
      <AssistantFeaturesSection />
      <AssistantTechSection />
    </>
  );
};

export default Agent;

```

### src/pages/community.tsx

```tsx
import ComingSoonSection from '../components/sections/ComingSoonSection/ComingSoonSection';

const Community = () => {
  return (
    <ComingSoonSection 
      pageName="community"
      title="Community"
      description="Join our growing community of developers, share knowledge, collaborate on projects, and grow together."
      features={[
        'Community forums and discussion boards',
        'Code collaboration and pair programming sessions',
        'Weekly coding challenges and competitions',
        'Mentorship programs for beginners',
        'Project showcase and feedback platform',
        'Technical blog and knowledge base',
        'Live coding sessions and workshops'
      ]}
    />
  );
};

export default Community;

```

### src/pages/courses.tsx

```tsx
import ComingSoonSection from '../components/sections/ComingSoonSection/ComingSoonSection';

const Courses = () => {
  return (
    <ComingSoonSection 
      pageName="courses"
      title="Courses"
      description="Comprehensive Python and AI/ML courses designed for both beginners and advanced practitioners."
      features={[
        'Comprehensive Python and AI/ML curriculum',
        'Interactive coding exercises with instant feedback',
        'Real-world projects and case studies',
        'Video tutorials and documentation',
        'Progress tracking and certifications',
        'Code quality assessment and best practices',
        'Integration with GitHub for project submissions'
      ]}
    />
  );
};

export default Courses;

```

### src/pages/dashboard.tsx

```tsx
import ComingSoonSection from '../components/sections/ComingSoonSection/ComingSoonSection';

const Dashboard = () => {
  return (
    <ComingSoonSection 
      pageName="dashboard"
      title="Dashboard"
      description="Your personalized learning dashboard to track progress, manage courses, and monitor your development journey."
      features={[
        'Personal progress tracking and analytics',
        'Course enrollment and management',
        'Assignment submissions and grading',
        'Learning path recommendations',
        'Achievement badges and certificates',
        'Code snippet library and bookmarks',
        'Community activity feed',
        'Direct messaging with instructors'
      ]}
    />
  );
};

export default Dashboard;

```

### src/pages/portfolio.tsx

```tsx
import HeroSection from '../components/sections/HeroSection/HeroSection';
import AboutSection from '../components/sections/AboutSection/AboutSection';
import PlatformSection from '../components/sections/PlatformSection/PlatformSection';
import ProjectsSection from '../components/sections/ProjectsSection/ProjectsSection';
import TimelineSection from '../components/sections/TimelineSection/TimelineSection';
import ConnectSection from '../components/sections/ConnectSection/ConnectSection';
import SkillsSection from '../components/sections/SkillsSection/SkillsSection';

const Portfolio = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <SkillsSection />
      <ProjectsSection />
      <PlatformSection />
      <ConnectSection />
    </>
  );
};

export default Portfolio;

```

### src/services/agentService.ts

```typescript
/**
 * Agent Service - API Communication for Banking Assistant
 *
 * Handles communication with the backend API for banking queries
 * Backend URL: https://api.yuriodev.co.uk
 */

interface QueryRequest {
  customer_id: number;
  query: string;
  session_id?: string;
}

interface QueryResponse {
  status: 'success' | 'error';
  data?: {
    message: string;
    metadata?: {
      customer_name: string;
      product_type: string;
      processing_time: number;
    };
  };
  error?: {
    code: string;
    message: string;
  };
}

/**
 * Send a banking query to the AI agent
 */
export const sendQuery = async (
  customerId: number,
  query: string,
  sessionId?: string
): Promise<QueryResponse> => {
  try {
    const response = await fetch('/api/agent/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customer_id: customerId,
        query,
        session_id: sessionId,
      } as QueryRequest),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: QueryResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Agent service error:', error);
    return {
      status: 'error',
      error: {
        code: 'NETWORK_ERROR',
        message: error instanceof Error ? error.message : 'Failed to connect to API',
      },
    };
  }
};

/**
 * Validate customer ID format
 */
export const validateCustomerId = (id: number): boolean => {
  return Number.isInteger(id) && id > 0 && id < 1000000;
};

/**
 * Validate query text
 */
export const validateQuery = (query: string): boolean => {
  return query.trim().length > 0 && query.length <= 500;
};

/**
 * Parse structured command
 */
export const parseCommand = (
  rawCommand: string
): { command: string; customerId?: number; query?: string; error?: string } => {
  const trimmed = rawCommand.trim();

  // Match: query --id 123 "question text"
  const queryMatch = trimmed.match(/^query\s+--id\s+(\d+)\s+"([^"]+)"/);
  if (queryMatch) {
    const customerId = parseInt(queryMatch[1]);
    const query = queryMatch[2];

    if (!validateCustomerId(customerId)) {
      return {
        command: 'query',
        error: 'Invalid customer ID. Must be between 1 and 999999.',
      };
    }

    if (!validateQuery(query)) {
      return {
        command: 'query',
        error: 'Invalid query. Must be between 1 and 500 characters.',
      };
    }

    return {
      command: 'query',
      customerId,
      query,
    };
  }

  // Other commands (help, clear, exit, info)
  return { command: trimmed.toLowerCase() };
};

export default {
  sendQuery,
  validateCustomerId,
  validateQuery,
  parseCommand,
};

```

### src/services/projectsData.ts

```typescript
/**
 * Project Data - Portfolio Projects
 * Updated from CV (October 2025)
 */

export interface Metric {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  period: string;
  client?: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  techStack: string[];
  methodologies: string[];
  metrics: Metric[];
  links: {
    name: string;
    url: string;
  }[];
  featured?: boolean;
}

export const projectsData: Project[] = [
  // {
  //   id: 1,
  //   title: "Proactive AI Agent",
  //   subtitle: "RAG-Powered Knowledge Assistant",
  //   period: "Sep 2024 - Present",
  //   client: "Stealth Startup",
  //   description: "Built production-grade RAG system transforming static knowledge bases into proactive AI agents capable of answering complex user queries with high precision and low latency.",
  //   challenge: "Initial system suffered from 30% retrieval precision and 3.5s p95 latency, making it unsuitable for production use with real users expecting instant, accurate responses.",
  //   solution: "Architected hybrid search combining semantic (ChromaDB) and keyword retrieval, implemented optimal chunking strategies, and integrated Gemini 2.0 for answer generation. Built FastAPI backend with MCP servers for tool integration.",
  //   impact: "Improved retrieval precision from 30% to 95%, reduced p95 latency to <1.2s, achieved 92% answer correctness (GPT-4 judge), and successfully handled 100 concurrent users without degradation.",
  //   techStack: ["LangChain", "ChromaDB", "Gemini 2.0", "FastAPI", "MCP Servers", "Python"],
  //   methodologies: ["RAG Architecture", "Hybrid Search", "Performance Optimization", "Load Testing"],
  //   metrics: [
  //     { label: "Retrieval Precision", value: "95%", highlight: true },
  //     { label: "Latency (p95)", value: "<1.2s", highlight: true },
  //     { label: "Answer Correctness", value: "92%" },
  //     { label: "Concurrent Users", value: "100+" },
  //   ],
  //   links: [
  //     { name: "🔬 Technical Deep Dive", url: "#" },
  //     { name: "📊 Performance Metrics", url: "#" }
  //   ],
  //   featured: true,
  // },
  // {
  //   id: 2,
  //   title: "SaleSphereAI",
  //   subtitle: "Multi-Agent Sales Automation Platform",
  //   period: "Jun 2024 - Dec 2024",
  //   client: "High-Growth SaaS Startup",
  //   description: "Architected autonomous multi-agent system automating end-to-end B2B sales workflows from lead qualification through deal closure, leveraging LangGraph for sophisticated agent orchestration.",
  //   challenge: "Manual sales processes were consuming 80% of sales team's time on repetitive tasks, limiting ability to scale customer acquisition while maintaining personalization and conversion quality.",
  //   solution: "Designed 5-agent system (Lead Qualifier, Researcher, Outreach Specialist, Objection Handler, Deal Closer) coordinated via LangGraph state machines. Built FastAPI backend with PostgreSQL for customer data and Redis for real-time state management.",
  //   impact: "Achieved 200% increase in sales conversion rates, reduced manual sales workload by 60%, and enabled sales team to handle 3x lead volume with same headcount.",
  //   techStack: ["LangGraph", "LangChain", "FastAPI", "PostgreSQL", "Redis", "LLMs"],
  //   methodologies: ["Multi-Agent Systems", "State Machines", "Microservices", "A/B Testing"],
  //   metrics: [
  //     { label: "Sales Conversion", value: "+200%", highlight: true },
  //     { label: "Manual Workload", value: "-60%", highlight: true },
  //     { label: "Lead Capacity", value: "3x" },
  //     { label: "Agent Count", value: "5" },
  //   ],
  //   links: [
  //     { name: "🤖 Architecture", url: "#" },
  //     { name: "📈 Case Study", url: "#" }
  //   ],
  //   featured: true,
  // },
  // {
  //   id: 3,
  //   title: "Resume Parsing Platform",
  //   subtitle: "AI-Powered Talent Matching System",
  //   period: "Mar 2024 - Aug 2024",
  //   client: "HR Tech Company",
  //   description: "Developed intelligent resume parsing and job matching system combining traditional layout analysis with LLM-powered understanding to extract and classify candidate information at scale.",
  //   challenge: "Traditional regex-based parsers achieved only 65% accuracy on diverse resume formats, causing significant manual review overhead and poor candidate experience in job matching.",
  //   solution: "Built hybrid parsing pipeline using PyMuPDF for layout analysis + Google Gemini API for semantic understanding. Implemented microservices architecture with PostgreSQL for structured data and MongoDB for document storage. Created LlamaIndex pipeline for similarity matching.",
  //   impact: "Achieved 93% F1 score in role classification, reduced time-to-hire by 75% through automated screening, and processed 10,000+ resumes monthly with 98% uptime.",
  //   techStack: ["PyTorch", "Gemini API", "LlamaIndex", "PostgreSQL", "MongoDB", "Next.js"],
  //   methodologies: ["NLP", "Hybrid ML", "Microservices", "Document Processing"],
  //   metrics: [
  //     { label: "F1 Score", value: "93%", highlight: true },
  //     { label: "Time-to-Hire", value: "-75%", highlight: true },
  //     { label: "Monthly Volume", value: "10K+" },
  //     { label: "System Uptime", value: "98%" },
  //   ],
  //   links: [
  //     { name: "� Tech Stack", url: "#" },
  //     { name: "📊 Performance", url: "#" }
  //   ],
  //   featured: true,
  // },
  // {
  //   id: 4,
  //   title: "Property Valuation Platform",
  //   subtitle: "ML-Powered Real Estate Analytics",
  //   period: "Jan 2024 - Jun 2024",
  //   client: "PropTech Startup",
  //   description: "Engineered cloud-native ML platform for automated property valuations across UK market, processing over 100M historical transactions with advanced geospatial and temporal feature engineering.",
  //   challenge: "Existing valuation models had 78% accuracy and took 15+ minutes to process new data batches, making real-time pricing impossible for competitive market conditions.",
  //   solution: "Built scalable GCP pipeline with BigQuery for data warehousing, implemented ensemble models (XGBoost + LightGBM), and designed geospatial clustering for neighborhood effects. Created Python SDK for feature engineering reusability.",
  //   impact: "Achieved 94% valuation accuracy, reduced data loading time by ×50 through optimized BigQuery schemas, and enabled real-time pricing updates for 500K+ properties.",
  //   techStack: ["XGBoost", "LightGBM", "BigQuery", "GCP", "Geospatial Libraries", "Python"],
  //   methodologies: ["Ensemble Learning", "Geospatial Analysis", "Cloud-Native", "ETL Pipelines"],
  //   metrics: [
  //     { label: "Accuracy", value: "94%", highlight: true },
  //     { label: "Data Loading", value: "×50 faster", highlight: true },
  //     { label: "Records Processed", value: "100M+" },
  //     { label: "Properties Covered", value: "500K+" },
  //   ],
  //   links: [
  //     { name: "🏠 Platform", url: "#" },
  //     { name: "🔧 Pipeline", url: "#" }
  //   ],
  //   featured: false,
  // },
  // {
  //   id: 5,
  //   title: "Financial Institutions Consulting",
  //   subtitle: "Python/R AI Tooling for Finance",
  //   period: "2022 - 2024",
  //   client: "JPMorgan, Bloomberg, Houlihan Lokey",
  //   description: "Delivered specialized consulting for top-tier financial institutions, building custom Python-based AI training modules and R-based financial analysis scripts to automate workflows and enhance quantitative capabilities.",
  //   challenge: "Internal teams lacked standardized tooling for AI/ML workflows, resulting in duplicated effort across departments and 30% of analyst time spent on repetitive manual reporting tasks.",
  //   solution: "Developed reusable Python libraries for common ML patterns, created R packages for financial modeling, and delivered hands-on training workshops for quant and risk teams. Automated report generation pipelines.",
  //   impact: "Reduced manual reporting time by ~30%, created tooling adopted by 100+ internal users across divisions, and trained 50+ analysts in production ML best practices.",
  //   techStack: ["Python", "R", "Pandas", "NumPy", "Scikit-learn", "Financial APIs"],
  //   methodologies: ["Financial Modeling", "Training & Enablement", "Workflow Automation"],
  //   metrics: [
  //     { label: "Time Savings", value: "~30%", highlight: true },
  //     { label: "Internal Adoption", value: "100+ users" },
  //     { label: "Analysts Trained", value: "50+" },
  //     { label: "Institutions", value: "3" },
  //   ],
  //   links: [
  //     { name: "🏦 Case Studies", url: "#" },
  //     { name: "📚 Training Materials", url: "#" }
  //   ],
  //   featured: false,
  // },
  {
    id: 6,
    title: "Agentic Research Assistant",
    subtitle: "Scientific Literature Analysis with LangGraph",
    period: "Feb 2025",
    client: "R&D Initiative",
    description: "Engineered autonomous research agent using LangGraph orchestration to systematically discover, analyze, and synthesize findings from scientific literature. Custom MCP implementation for tool calling and state management, demonstrating deep understanding of agentic architectures from first principles.",
    challenge: "Researchers spent weeks manually reviewing 200+ papers per project. Initial RAG system suffered from <5% retrieval precision due to broad chunking—specific queries drowned in large semantic chunks. Race conditions on startup caused frontend failures.",
    solution: "Rebuilt with header-based granular chunking (50-150 words) achieving 95% precision. Implemented polyglot persistence: SQLite for ACID transactional logs, ChromaDB for semantic search. Created sliding window + summarization for multi-turn conversations. Custom health check polling eliminated startup failures.",
    impact: "Analyzed 200+ papers in <30 minutes (vs. weeks manually), achieved 95% retrieval precision (RAGAS metric), sustained 10+ turn conversations without degradation. Saved 40+ hours per project with 88% key finding extraction accuracy.",
    techStack: ["LangGraph", "ChromaDB", "SQLite", "PyMuPDF", "MCP Servers", "ArXiv API"],
    methodologies: ["Agentic Workflows", "RAG Architecture", "Polyglot Persistence", "Header-based Chunking"],
    metrics: [
      { label: "Retrieval Precision", value: "95%", highlight: true },
      { label: "Analysis Speed", value: "200+ papers/30min", highlight: true },
      { label: "Time Saved", value: "40+ hours/project" },
      { label: "Conversation Depth", value: "10+ turns" },
    ],
    links: [
      { name: "🔬 Technical Deep Dive (Coming Soon)", url: "#" }
    ],
    featured: true,
  },
  {
    id: 7,
    title: "Automated Python Course Platform",
    subtitle: "GitHub Actions-Powered Educational System",
    period: "Jan 2023 - Present",
    client: "Open-Source Educational Initiative",
    description: "Architected production-grade Python learning platform with 300+ exercises across 11 modules, featuring custom autograding framework with educational feedback. Built test infrastructure checking not just correctness, but code quality—loop usage, prohibited constructs, and algorithmic approach enforcement.",
    challenge: "Generic 'AssertionError' messages don't teach. Manual grading took 10+ hours/week for 20 students. Students copying solutions without learning. Need to test *how* problems are solved, not just output correctness. Traditional courses have 15% completion rates.",
    solution: "Built custom TestOutputFormatter with colored terminal tables showing input→expected→actual. Regex-based code inspection enforcing algorithmic constraints (check_for_loops, check_for_string_slice). GitHub Classroom + Actions CI/CD for instant feedback. Progressive 11-module curriculum with strict prerequisite structure.",
    impact: "500+ GitHub stars, adopted by 5+ universities. Reached 150+ students with 95% completion rate (vs 15% industry average). Zero manual grading—freed 10 hours/week. 8 students admitted to Oxbridge CS, 5 received FAANG offers. Student confusion dropped 60%; 80% solve problems without instructor help.",
    techStack: ["Python", "GitHub Actions", "Pytest", "Regex", "Git", "Markdown"],
    methodologies: ["Educational Systems Engineering", "CI/CD Automation", "Test-Driven Learning", "Algorithmic Enforcement"],
    metrics: [
      { label: "GitHub Stars", value: "500+", highlight: true },
      { label: "Completion Rate", value: "95%", highlight: true },
      { label: "Exercises", value: "300+" },
      { label: "Institutions", value: "5 universities" },
    ],
    links: [
      { name: "📖 Full Course", url: "https://github.com/YurioDev/Python-Course" }
    ],
    featured: true,
  }
];

```

### src/services/skillsData.ts

```typescript
/**
 * Skills Data - Technical Expertise Taxonomy
 * Aligned with CV and LinkedIn (October 2025)
 */

export interface Skill {
  id: number;
  title: string;
  level: string;
  progress: number;
  details: string[];
  highlight?: string;
}

// ============================================
// TYPED SKILLS DATA (Used by SkillTerminal)
// ============================================

export type SkillTagType = 
  | 'framework'      // Agentic frameworks, orchestration tools
  | 'database'       // Databases, vector stores
  | 'model'          // LLMs, ML models
  | 'language'       // Programming languages
  | 'cloud'          // Cloud platforms, infrastructure
  | 'tool'           // Development tools, libraries
  | 'concept'        // Patterns, architectures, methodologies
  | 'metric';        // Performance metrics, achievements

export interface SkillDetail {
  name: string;
  type: SkillTagType;
}

export interface SkillWithTypes {
  id: number;
  title: string;
  progress: number;
  details: SkillDetail[];
  highlight: { text: string; type: SkillTagType };
}

export const skillsDataTyped: SkillWithTypes[] = [
  {
    id: 1,
    title: "agentic_systems.py",
    progress: 100,
    details: [
      { name: "LangGraph", type: "framework" },
      { name: "LangChain", type: "framework" },
      { name: "MCP", type: "framework" },
      { name: "A2A", type: "framework" },
      { name: "Multi-Agent", type: "concept" },
      { name: "ReAct", type: "concept" },
      { name: "Reflexion", type: "concept" },
    ],
    highlight: { text: "Agentic Architect", type: "metric" },
  },
  {
    id: 2,
    title: "rag_pipelines.py",
    progress: 100,
    details: [
      { name: "ChromaDB", type: "database" },
      { name: "Pinecone", type: "database" },
      { name: "Weaviate", type: "database" },
      { name: "pgvector", type: "database" },
      { name: "ElasticSearch", type: "database" },
      { name: "LlamaIndex", type: "framework" },
      { name: "Context Window", type: "concept" },
      { name: "Prompt Engineering", type: "concept" },
    ],
    highlight: { text: "Advanced RAG", type: "metric" },
  },
  {
    id: 3,
    title: "llm_operations.py",
    progress: 100,
    details: [
      { name: "Gemini API", type: "model" },
      { name: "OpenAI GPT", type: "model" },
      { name: "Anthropic Claude", type: "model" },
      { name: "Structured Output", type: "concept" },
      { name: "PEFT/LoRA", type: "concept" },
      { name: "Guardrails AI", type: "tool" },
      { name: "Function Calling", type: "concept" },
      { name: "Streaming", type: "concept" },
    ],
    highlight: { text: "Production LLMs", type: "metric" },
  },
  {
    id: 4,
    title: "deep_learning.py",
    progress: 100,
    details: [
      { name: "PyTorch", type: "framework" },
      { name: "Transformers", type: "model" },
      { name: "Sentence-BERT", type: "model" },
      { name: "ViT", type: "model" },
      { name: "CNNs", type: "model" },
      { name: "Mixed Precision", type: "concept" },
      { name: "Transfer Learning", type: "concept" },
    ],
    highlight: { text: "Custom Architectures", type: "metric" },
  },
  {
    id: 5,
    title: "ml_classical.py",
    progress: 100,
    details: [
      { name: "Scikit-learn", type: "framework" },
      { name: "XGBoost", type: "framework" },
      { name: "LightGBM", type: "framework" },
      { name: "Feature Engineering", type: "concept" },
      { name: "Time Series", type: "concept" },
      { name: "SHAP", type: "tool" },
      { name: "Hyperparameter Tuning", type: "concept" },
    ],
    highlight: { text: "Predictive Modeling", type: "metric" },
  },
  {
    id: 6,
    title: "fastapi_microservices.py",
    progress: 100,
    details: [
      { name: "FastAPI", type: "framework" },
      { name: "PostgreSQL", type: "database" },
      { name: "MongoDB", type: "database" },
      { name: "Redis", type: "database" },
      { name: "OAuth2", type: "concept" },
      { name: "Async/Await", type: "concept" },
      { name: "API Design", type: "concept" },
    ],
    highlight: { text: "Scalable APIs", type: "metric" },
  },
  {
    id: 7,
    title: "cloud_native_gcp.sh",
    progress: 100,
    details: [
      { name: "GCP", type: "cloud" },
      { name: "BigQuery", type: "database" },
      { name: "AWS Bedrock", type: "cloud" },
      { name: "Snowflake", type: "database" },
      { name: "Kubernetes", type: "tool" },
      { name: "Lambda", type: "cloud" },
      { name: "Serverless", type: "concept" },
    ],
    highlight: { text: "Cloud Architecture", type: "metric" },
  },
  {
    id: 8,
    title: "devops_mlops.yaml",
    progress: 100,
    details: [
      { name: "Docker", type: "tool" },
      { name: "GitHub Actions", type: "tool" },
      { name: "CI/CD", type: "concept" },
      { name: "LangSmith", type: "tool" },
      { name: "MLflow", type: "tool" },
      { name: "W&B", type: "tool" },
      { name: "Model Monitoring", type: "concept" },
    ],
    highlight: { text: "End-to-End MLOps", type: "metric" },
  },
  {
    id: 9,
    title: "data_engineering.py",
    progress: 100,
    details: [
      { name: "Pandas", type: "tool" },
      { name: "NumPy", type: "tool" },
      { name: "ETL Pipelines", type: "concept" },
      { name: "Kafka", type: "tool" },
      { name: "RabbitMQ", type: "tool" },
      { name: "GDPR Compliance", type: "concept" },
      { name: "Data Validation", type: "concept" },
    ],
    highlight: { text: "Real-Time Pipelines", type: "metric" },
  },
  {
    id: 10,
    title: "full_stack_dev.tsx",
    progress: 100,
    details: [
      { name: "React", type: "framework" },
      { name: "TypeScript", type: "language" },
      { name: "Next.js", type: "framework" },
      { name: "Tailwind CSS", type: "tool" },
      { name: "Streamlit", type: "tool" },
      { name: "SSE/WebSockets", type: "concept" },
      { name: "Responsive Design", type: "concept" },
    ],
    highlight: { text: "Interactive UIs", type: "metric" },
  },
];

// ============================================
// LEGACY SKILLS DATA (Used by SkillsSection)
// ============================================

export const skillsData: Skill[] = [
  {
    id: 1,
    title: "agentic_systems.py",
    level: "EXPERT",
    progress: 100,
    details: ["LangGraph", "LangChain", "MCP", "A2A", "Multi-Agent", "ReAct", "Reflexion"],
    highlight: "Agentic Architect",
  },
  {
    id: 2,
    title: "rag_pipelines.py",
    level: "EXPERT",
    progress: 100,
    details: ["ChromaDB", "Pinecone", "Weaviate", "pgvector", "ElasticSearch", "LlamaIndex", "Context Window", "Prompt Engineering"],
    highlight: "Advanced RAG",
  },
  {
    id: 3,
    title: "llm_operations.py",
    level: "EXPERT",
    progress: 100,
    details: ["Gemini API", "OpenAI GPT", "Anthropic Claude", "Structured Output", "PEFT/LoRA", "Guardrails AI", "Function Calling", "Streaming"],
    highlight: "Production LLMs",
  },
  {
    id: 4,
    title: "deep_learning.py",
    level: "EXPERT",
    progress: 100,
    details: ["PyTorch", "Transformers", "Sentence-BERT", "ViT", "CNNs", "Mixed Precision", "Transfer Learning"],
    highlight: "Custom Architectures",
  },
  {
    id: 5,
    title: "ml_classical.py",
    level: "EXPERT",
    progress: 100,
    details: ["Scikit-learn", "XGBoost", "LightGBM", "Feature Engineering", "Time Series", "SHAP", "Hyperparameter Tuning"],
    highlight: "Predictive Modeling",
  },
  {
    id: 6,
    title: "fastapi_microservices.py",
    level: "EXPERT",
    progress: 100,
    details: ["FastAPI", "PostgreSQL", "MongoDB", "Redis", "OAuth2", "Async/Await", "API Design"],
    highlight: "Scalable APIs",
  },
  {
    id: 7,
    title: "cloud_native_gcp.sh",
    level: "EXPERT",
    progress: 100,
    details: ["GCP", "BigQuery", "AWS Bedrock", "Snowflake", "Kubernetes", "Lambda", "Serverless"],
    highlight: "Cloud Architecture",
  },
  {
    id: 8,
    title: "devops_mlops.yaml",
    level: "EXPERT",
    progress: 100,
    details: ["Docker", "GitHub Actions", "CI/CD", "LangSmith", "MLflow", "W&B", "Model Monitoring"],
    highlight: "End-to-End MLOps",
  },
  {
    id: 9,
    title: "data_engineering.py",
    level: "EXPERT",
    progress: 100,
    details: ["Pandas", "NumPy", "ETL Pipelines", "Kafka", "RabbitMQ", "GDPR Compliance", "Data Validation"],
    highlight: "Real-Time Pipelines",
  },
  {
    id: 10,
    title: "full_stack_dev.tsx",
    level: "EXPERT",
    progress: 100,
    details: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Streamlit", "SSE/WebSockets", "Responsive Design"],
    highlight: "Interactive UIs",
  },
];



```

### src/services/terminalService.ts

```typescript
export const terminalCommands = {
    help: () => `Available commands:
help       - Show this help message
skills     - Display technical skills and expertise
contact    - Show contact information
projects   - List recent projects and research
about      - Display information about me
experience - Show career highlights
education  - Display education and certifications
clear      - Clear terminal output
surprise   - Easter egg command
ls         - List all sections (alias for help)
whoami     - Display current user info`,

    skills: () => `Technical Skills Matrix:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 AI & Agentic Engineering:
   • LangGraph, LangChain, MCP    [████████████] Expert
   • RAG Pipelines & Retrieval    [████████████] Expert
   • PyTorch & Deep Learning      [████████████] Expert
   • Gemini, GPT-4, LLM APIs      [████████████] Expert
   • Multi-Agent Systems          [████████████] Expert
   • Agentic Patterns (ReAct)     [███████████░] Expert

🏗️  System Architecture:
   • Microservices & Event-Driven [████████████] Expert
   • FastAPI & Backend Systems    [████████████] Expert
   • PostgreSQL, MongoDB, Redis   [████████████] Expert
   • Cloud-Native Architecture    [████████████] Expert

☁️  DevOps & Cloud:
   • Docker/Kubernetes            [████████████] Expert
   • GCP, AWS                     [███████████░] Expert
   • CI/CD (GitHub Actions)       [████████████] Expert
   • BigQuery & Data Engineering  [████████████] Expert

💻 Full-Stack Development:
   • Python (Advanced)            [████████████] Expert
   • React, TypeScript, Next.js   [██████████░░] Advanced
   • ETL Pipelines                [████████████] Expert

�‍🏫 Leadership & Education:
   • Technical Mentoring          [████████████] Expert
   • Course Design                [████████████] Expert
   • Team Leadership              [████████████] Expert
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,

    contact: () => `Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 Email:    yurii.oksamytnyi@yuriodev.co.uk
📱 Phone:    +44 7767 336011
🔗 LinkedIn: linkedin.com/in/y-oks
💻 GitHub:   github.com/YuriiOks
🌐 Website:  yuriodev.co.uk
📍 Location: London, UK

Available for:
• AI/ML systems architecture & consulting
• Agentic workflow design & implementation
• Production RAG pipeline development
• Technical leadership & mentoring
• Speaking engagements & workshops`,

    projects: () => `Featured Projects:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 Proactive AI Agent (RAG Prototype)
   95% retrieval precision (from 30%)
   <1.2s latency • 100 concurrent users
   ChromaDB • Gemini 2.0 • MCP Servers

🚀 SaleSphereAI (Multi-Agent Platform)
   200% sales conversion increase
   5-agent system • LangGraph orchestration
   FastAPI • PostgreSQL • Redis

📄 Resume Parsing Platform (HR Tech)
   93% F1 score • 75% time-to-hire reduction
   PyTorch • Gemini API • LlamaIndex
   10K+ resumes processed monthly

🏠 Property Valuation (PropTech)
   94% accuracy • 100M+ records • GCP
   BigQuery • ×50 faster data loading
   500K+ properties valued

📚 Agentic Research Assistant
   200+ papers analyzed in <30 min
   LangGraph • ChromaDB • PyMuPDF
   88% extraction accuracy

🐍 Automated Python Course
   github.com/YurioDev/Python-Course
   1000+ students • 25+ modules
   CI/CD grading • Open source

Type 'projects --details <name>' for more info`,

    about: () => `About Yurii Oksamytnyi:
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
• 95% retrieval precision (from 30% baseline)
• ×50 data latency reduction (PropTech)
• >90% F1 on production models
• 200% sales conversion (SaleSphereAI)
• 1000+ students reached globally

Specialization: Agentic systems (LangGraph, MCP),
production RAG pipelines, multi-agent orchestration,
cloud-native ML platforms.`,

    experience: () => `Career Highlights:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💼 Lead AI Engineer & Systems Designer
   Apr 2022 - Present | Independent (Consultant)
   • Built RAG systems with 95% precision
   • Architected multi-agent platforms
   • Deployed HR Tech & PropTech ML systems
   • Consulted for JPMorgan, Bloomberg

💼 Lead Data Scientist
   Mar 2022 - Oct 2022 | Ministry of Health Ukraine
   • Healthcare analytics (>90% F1 score)
   • GDPR-compliant ML pipelines
   • Millions of patient records processed

💼 Senior ML Engineer
   Jan 2021 - Feb 2022 | Forecys (FinTech)
   • Financial forecasting models
   • Real-time fraud detection
   • 60% latency reduction

💼 Technical Lead & Mentor
   Sep 2014 - Present | YuriODev Initiative
   • Created 25+ module Python course
   • 1000+ students across 20+ countries
   • Automated CI/CD grading system

Type 'education' for academic background`,

    education: () => `Education & Certifications:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎓 MLX Applied Machine Learning Certificate
   Apr 2025 - May 2025 | MLX Program
   Advanced ML systems, RAG, multi-agent workflows

🎓 MSc Artificial Intelligence
   2016 - 2018 | Queen Mary, University of London
   Deep Learning, NLP, Computer Vision
   Distinction with published research

🎓 BSc Computer Science
   2012 - 2016 | MIPT (Moscow Institute)
   Honors (GPA: 4.8/5.0)
   ACM ICPC regional medals

📚 Teaching Experience:
   • MIPT Instructor (2014-2016)
   • YuriODev Course Creator (2023-Present)
   • 1000+ students mentored

Type 'about' to see current focus areas`,

    clear: () => 'CLEAR_TERMINAL',

    surprise: () => `
    ╔══════════════════════════════════════╗
    ║        🎉 EASTER EGG UNLOCKED! 🎉     ║
    ╠══════════════════════════════════════╣
    ║                                      ║
    ║  You've discovered the secret menu!  ║
    ║                                      ║
    ║  🤖 AI Fact: RAG systems combine     ║
    ║     retrieval with generation for    ║
    ║     knowledge-grounded responses     ║
    ║                                      ║
    ║  🧠 Fun Fact: I improved retrieval   ║
    ║     precision from 30% to 95% using  ║
    ║     hybrid search strategies         ║
    ║                                      ║
    ║  🚀 Secret: Building agentic AI      ║
    ║     systems with LangGraph & MCP     ║
    ║     for production deployments       ║
    ║                                      ║
    ║  💡 Tip: Multi-agent systems can     ║
    ║     achieve 200%+ conversion gains   ║
    ║     with proper orchestration        ║
    ║                                      ║
    ╚══════════════════════════════════════╝

    Type 'help' to return to normal commands.`,

    ls: () => terminalCommands.help(),

    whoami: () => `visitor@yuriodev
Current session: Guest user exploring YuriODev
Access level: Public portfolio viewer
Interested in: Production AI/ML systems & education
Type 'contact' to discuss collaboration! 🚀`
};

```

### tsconfig.json

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}

```

### vite.config.js

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
});

```

### vite.config.ts

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

```
