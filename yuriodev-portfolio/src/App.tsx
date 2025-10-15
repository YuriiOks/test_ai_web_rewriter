import { useCallback, useEffect, useMemo, useState } from 'react';
import CanvasBackground from './components/visuals/CanvasBackground/CanvasBackground';
import Header, { NavLink, SecondaryLink } from './components/layout/Header/Header';
import LeftSidebar from './components/layout/LeftSidebar/LeftSidebar';
import HeroSection from './components/sections/HeroSection/HeroSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import InteractiveTerminal from './components/sections/InteractiveTerminal';
import HelpPanel from './components/ui/HelpPanel/HelpPanel';
import { CommandDefinition, CommandPaletteProvider } from './context/CommandPaletteContext';
import styles from './App.module.css';

const mainLinks: NavLink[] = [
  { id: 'hero', label: '--hero' },
  { id: 'projects', label: '--projects' },
  { id: 'skills', label: '--skills' },
  { id: 'terminal', label: '--terminal' },
];

const secondaryLinks: SecondaryLink[] = [
  { href: '#', label: '--courses' },
  { href: '#', label: '--dashboard' },
  { href: '#', label: '--community' },
];

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const stored = window.localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
    } catch (error) {
      // ignore storage read errors
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('light-mode', theme === 'light');
    try {
      window.localStorage.setItem('theme', theme);
    } catch (error) {
      // ignore storage write errors
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(current => (current === 'light' ? 'dark' : 'light'));
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const header = document.querySelector('[data-header]') as HTMLElement | null;
    const headerOffset = header?.offsetHeight ?? 70;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0.2, 0.4, 0.6, 0.8] },
    );

    const elements = mainLinks
      .map(link => document.getElementById(link.id))
      .filter((el): el is HTMLElement => Boolean(el));

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const goToRelativeSection = useCallback((offset: number) => {
    const currentIndex = mainLinks.findIndex(link => link.id === activeSection);
    if (currentIndex === -1) {
      scrollToSection(mainLinks[0].id);
      return;
    }
    const nextIndex = (currentIndex + offset + mainLinks.length) % mainLinks.length;
    scrollToSection(mainLinks[nextIndex].id);
  }, [activeSection, scrollToSection]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }

      const key = event.key;
      switch (key) {
        case 'j':
        case 'J':
          event.preventDefault();
          goToRelativeSection(1);
          break;
        case 'k':
        case 'K':
          event.preventDefault();
          goToRelativeSection(-1);
          break;
        case 'Home':
          event.preventDefault();
          scrollToSection(mainLinks[0].id);
          break;
        case 'End':
          event.preventDefault();
          scrollToSection(mainLinks[mainLinks.length - 1].id);
          break;
        case '?':
          event.preventDefault();
          setIsHelpOpen(prev => !prev);
          break;
        case 't':
        case 'T':
          event.preventDefault();
          toggleTheme();
          break;
        case 'Escape':
          setIsHelpOpen(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToRelativeSection, scrollToSection, toggleTheme]);

  const commands: CommandDefinition[] = useMemo(
    () => [
      { id: 'hero', title: 'Go to Hero', shortcut: 'hero', action: () => scrollToSection('hero') },
      { id: 'projects', title: 'Go to Projects', shortcut: 'projects', action: () => scrollToSection('projects') },
      { id: 'skills', title: 'Go to Skills', shortcut: 'skills', action: () => scrollToSection('skills') },
      { id: 'terminal', title: 'Go to Terminal', shortcut: 'terminal', action: () => scrollToSection('terminal') },
      { id: 'help', title: 'Show Help', shortcut: 'help', action: () => setIsHelpOpen(true) },
      {
        id: 'theme',
        title: theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme',
        shortcut: 'theme',
        action: toggleTheme,
      },
      {
        id: 'email',
        title: 'Send Email',
        shortcut: 'email',
        action: () => {
          window.location.href = 'mailto:contact@yuriodev.co.uk';
        },
      },
    ],
    [scrollToSection, theme, toggleTheme],
  );

  return (
    <CommandPaletteProvider commands={commands}>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <CanvasBackground />
      <HelpPanel isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
      <Header
        mainLinks={mainLinks}
        secondaryLinks={secondaryLinks}
        activeSectionId={activeSection}
        onScrollToSection={scrollToSection}
        onToggleHelp={() => setIsHelpOpen(prev => !prev)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <LeftSidebar links={mainLinks} activeSectionId={activeSection} onScrollToSection={scrollToSection} />
      <main id="main-content" className={styles.mainContent}>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <InteractiveTerminal />
      </main>
    </CommandPaletteProvider>
  );
};

export default App;
