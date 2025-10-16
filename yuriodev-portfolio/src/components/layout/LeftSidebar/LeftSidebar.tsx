import React from 'react';
import styles from './LeftSidebar.module.css';

const LeftSidebar: React.FC = () => {
  return (
    <div className={styles.leftSidebarNav} id="leftSidebarNav" role="navigation" aria-label="Section navigation">
      <a href="#hero" className={styles.sidebarNavLink} aria-label="Go to hero section"><span className={styles.diamond}></span><span className={styles.linkText}>Hero</span></a>
      <a href="#projects" className={styles.sidebarNavLink} aria-label="Go to projects section"><span className={styles.diamond}></span><span className={styles.linkText}>Projects</span></a>
      <a href="#skills" className={styles.sidebarNavLink} aria-label="Go to skills section"><span className={styles.diamond}></span><span className={styles.linkText}>Skills</span></a>
    </div>
  );
};

export default LeftSidebar;
