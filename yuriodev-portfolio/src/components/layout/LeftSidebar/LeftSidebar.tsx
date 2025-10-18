import React, { useEffect, useState, useRef } from 'react';
import styles from './LeftSidebar.module.css';

interface SectionInfo {
  id: string;
  label: string;
}

const LeftSidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [sections, setSections] = useState<SectionInfo[]>([]);
  const [overlayState, setOverlayState] = useState<'none' | 'text' | 'full'>('none'); // Default to visible
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true); // Track if sidebar should be visible based on screen size

  // Check if sidebar should be visible based on screen size
  useEffect(() => {
    const checkVisibility = () => {
      setIsVisible(window.innerWidth >= 1475);
    };

    checkVisibility();
    window.addEventListener('resize', checkVisibility);

    return () => window.removeEventListener('resize', checkVisibility);
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

  // Detect zoom level and adjust sidebar visibility
  useEffect(() => {
    const checkZoomLevel = () => {
      // Calculate zoom level based on window.devicePixelRatio and window.innerWidth
      const zoomLevel = Math.round((window.outerWidth / window.innerWidth) * 100);
      
      // Rule 1: If zoom > 165%, hide entire sidebar
      if (zoomLevel > 165) {
        setOverlayState('full');
      }
      // Rule 2: If zoom > 150%, hide text only
      else if (zoomLevel > 150) {
        setOverlayState('text');
      }
      // Rule 3: Normal zoom, show everything
      else {
        setOverlayState('none');
      }
    };

    // Check on resize (which includes zoom changes)
    const handleResize = () => checkZoomLevel();
    
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Initial check
    setTimeout(checkZoomLevel, 500);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Detect overlay state - DISABLED FOR NOW
  // Can be re-enabled later with content-based detection
  /*
  useEffect(() => {
    if (!isReady) return;
    // Overlay detection logic here
  }, [isReady]);
  */

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
      className={`${styles.leftSidebarNav} ${
        overlayState === 'full' ? styles.hidden : 
        overlayState === 'text' ? styles.textHidden : ''
      }`}
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
