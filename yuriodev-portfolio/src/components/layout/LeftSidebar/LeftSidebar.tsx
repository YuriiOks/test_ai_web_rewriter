import React from 'react';
import styles from './LeftSidebar.module.css';

const LeftSidebar: React.FC = () => {
  return (
    <div className={styles.leftSidebarNav} id="leftSidebarNav" role="navigation" aria-label="Section navigation">
      <a href="#hero" className={styles.sidebarNavLink} aria-label="Go to hero section"><span className={styles.diamond}></span><span className={styles.linkText}>Hero</span></a>
      <a href="#about" className={styles.sidebarNavLink} aria-label="Go to about section"><span className={styles.diamond}></span><span className={styles.linkText}>About Me</span></a>
      <a href="#platform" className={styles.sidebarNavLink} aria-label="Go to platform section"><span className={styles.diamond}></span><span className={styles.linkText}>Vision</span></a>
      <a href="#projects" className={styles.sidebarNavLink} aria-label="Go to projects section"><span className={styles.diamond}></span><span className={styles.linkText}>Projects</span></a>
      <a href="#timeline" className={styles.sidebarNavLink} aria-label="Go to timeline section"><span className={styles.diamond}></span><span className={styles.linkText}>Timeline</span></a>
      <a href="#skills" className={styles.sidebarNavLink} aria-label="Go to skills section"><span className={styles.diamond}></span><span className={styles.linkText}>Skills</span></a>
      <a href="#terminal" className={styles.sidebarNavLink} aria-label="Go to terminal section"><span className={styles.diamond}></span><span className={styles.linkText}>Terminal</span></a>
      <a href="#testimonials" className={styles.sidebarNavLink} aria-label="Go to testimonials section"><span className={styles.diamond}></span><span className={styles.linkText}>Reviews</span></a>
      <a href="#articles" className={styles.sidebarNavLink} aria-label="Go to articles section"><span className={styles.diamond}></span><span className={styles.linkText}>Articles</span></a>
      <a href="#connect" className={styles.sidebarNavLink} aria-label="Go to connect section"><span className={styles.diamond}></span><span className={styles.linkText}>Connect</span></a>
    </div>
  );
};

export default LeftSidebar;
