import { useState, useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import CanvasBackground from './components/ui/CanvasBackground/CanvasBackground';
import CommandPalette from './components/ui/CommandPalette/CommandPalette';
import HelpPanel from './components/ui/HelpPanel/HelpPanel';
import LoadingScreen from './components/ui/LoadingScreen/LoadingScreen';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import LeftSidebar from './components/layout/LeftSidebar/LeftSidebar';
import HeroSection from './components/sections/HeroSection/HeroSection';
import AboutSection from './components/sections/AboutSection/AboutSection';
import PlatformSection from './components/sections/PlatformSection/PlatformSection';
import ProjectsSection from './components/sections/ProjectsSection/ProjectsSection';
import TimelineSection from './components/sections/TimelineSection/TimelineSection';
import ConnectSection from './components/sections/ConnectSection/ConnectSection';
import SkillsSection from './components/sections/SkillsSection/SkillsSection';

function App() {
  const { toggleTheme } = useTheme();
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [isHelpPanelOpen, setIsHelpPanelOpen] = useState(false);

  useEffect(() => {
    // Check if portfolio has been loaded before in this session
    const hasLoaded = sessionStorage.getItem('portfolioLoaded');
    
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

      // Note: Ctrl+K/Cmd+K for Command Palette is handled by CommandPalette component itself

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

  // Section navigation helper - dynamically discovers sections
  const navigateSection = (direction: 'next' | 'previous') => {
    // Dynamically discover all sections in the DOM order
    const allSections = Array.from(document.querySelectorAll('main section[id]')) as HTMLElement[];

    if (allSections.length === 0) return;

    // Find current section based on scroll position
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

    // Calculate target index
    let targetIndex = currentIndex;
    if (direction === 'next') {
      targetIndex = Math.min(currentIndex + 1, allSections.length - 1);
    } else {
      targetIndex = Math.max(currentIndex - 1, 0);
    }

    // Scroll to target section
    const targetSection = allSections[targetIndex];
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLoadingComplete = () => {
    // Mark as loaded in sessionStorage
    sessionStorage.setItem('portfolioLoaded', 'true');
    setLoadingComplete(true);
    setIsInitialLoad(false);
    
    // Re-enable scrolling
    document.body.style.overflow = '';
    
    // Console message matching original HTML
    console.log('%c$ ./initialize_yuriodev --status=complete', 'color: #FFC107; font-family: "Fira Code", monospace; font-weight: 600;');
    console.log('%c✓ Portfolio loaded successfully', 'color: #00ff88; font-family: "Fira Code", monospace;');
  };

  return (
    <>
      {isInitialLoad && !loadingComplete ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <>
          <CanvasBackground />
          <CommandPalette />
          <HelpPanel isOpen={isHelpPanelOpen} onClose={() => setIsHelpPanelOpen(false)} />
          <Header onHelpToggle={() => setIsHelpPanelOpen(true)} />
          <LeftSidebar />
          <main>
            <HeroSection />
            <AboutSection />
            <TimelineSection />
            <SkillsSection />
            <ProjectsSection />
            <PlatformSection />
            <ConnectSection />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App
