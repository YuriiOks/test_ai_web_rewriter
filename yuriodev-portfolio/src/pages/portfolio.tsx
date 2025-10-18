import { useState, useEffect } from 'react';
import LoadingScreen from '../components/ui/LoadingScreen/LoadingScreen';
import HeroSection from '../components/sections/HeroSection/HeroSection';
import AboutSection from '../components/sections/AboutSection/AboutSection';
import PlatformSection from '../components/sections/PlatformSection/PlatformSection';
import ProjectsSection from '../components/sections/ProjectsSection/ProjectsSection';
import TimelineSection from '../components/sections/TimelineSection/TimelineSection';
import ConnectSection from '../components/sections/ConnectSection/ConnectSection';
import SkillsSection from '../components/sections/SkillsSection/SkillsSection';

const Portfolio = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);

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
          <HeroSection />
          <AboutSection />
          <TimelineSection />
          <SkillsSection />
          <ProjectsSection />
          <PlatformSection />
          <ConnectSection />
        </>
      )}
    </>
  );
};

export default Portfolio;
