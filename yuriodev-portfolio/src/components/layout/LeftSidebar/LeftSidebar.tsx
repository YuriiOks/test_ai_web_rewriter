import React, { useEffect, useState } from 'react';
import styles from './LeftSidebar.module.css';

const LeftSidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
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
    
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const isActive = (sectionId: string) => activeSection === sectionId;

  return (
    <div className={styles.leftSidebarNav} id="leftSidebarNav" role="navigation" aria-label="Section navigation">
      <a href="#hero" className={`${styles.sidebarNavLink} ${isActive('hero') ? styles.active : ''}`} aria-label="Go to hero section"><span className={styles.diamond}></span><span className={styles.linkText}>Hero</span></a>
      <a href="#about" className={`${styles.sidebarNavLink} ${isActive('about') ? styles.active : ''}`} aria-label="Go to about section"><span className={styles.diamond}></span><span className={styles.linkText}>About</span></a>
      <a href="#platform" className={`${styles.sidebarNavLink} ${isActive('platform') ? styles.active : ''}`} aria-label="Go to platform section"><span className={styles.diamond}></span><span className={styles.linkText}>Platform</span></a>
      <a href="#projects" className={`${styles.sidebarNavLink} ${isActive('projects') ? styles.active : ''}`} aria-label="Go to projects section"><span className={styles.diamond}></span><span className={styles.linkText}>Projects</span></a>
      <a href="#timeline" className={`${styles.sidebarNavLink} ${isActive('timeline') ? styles.active : ''}`} aria-label="Go to timeline section"><span className={styles.diamond}></span><span className={styles.linkText}>Timeline</span></a>
      <a href="#skills" className={`${styles.sidebarNavLink} ${isActive('skills') ? styles.active : ''}`} aria-label="Go to skills section"><span className={styles.diamond}></span><span className={styles.linkText}>Skills</span></a>
      <a href="#terminal" className={`${styles.sidebarNavLink} ${isActive('terminal') ? styles.active : ''}`} aria-label="Go to terminal section"><span className={styles.diamond}></span><span className={styles.linkText}>Terminal</span></a>
      <a href="#connect" className={`${styles.sidebarNavLink} ${isActive('connect') ? styles.active : ''}`} aria-label="Go to connect section"><span className={styles.diamond}></span><span className={styles.linkText}>Connect</span></a>
    </div>
  );
};

export default LeftSidebar;
