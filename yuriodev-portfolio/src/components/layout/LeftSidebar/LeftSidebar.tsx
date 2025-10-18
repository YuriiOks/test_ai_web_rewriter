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
