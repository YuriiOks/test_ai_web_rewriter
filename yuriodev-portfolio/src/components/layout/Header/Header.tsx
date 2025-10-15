import React, { useState } from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.terminalHeader} role="banner">
      <nav className={styles.terminalNav} role="navigation" aria-label="Main navigation">
        <div className={styles.terminalPrompt}>
          yurii@yuriodev:~$ ./run --module=AI_Education --theme=dark<span className={styles.cursor}>_</span>
        </div>
        <div className={styles.navControls}>
          <button className={styles.themeToggle} onClick={() => { /* toggleTheme */ }} aria-label="Toggle dark/light theme">☾ / ☀</button>
          <button className={styles.helpToggle} onClick={() => { /* toggleHelp */ }} aria-label="Show help panel">?</button>
          <button className={styles.mobileMenuToggle} onClick={toggleMobileMenu} aria-label="Toggle mobile menu">≡ MENU</button>
          <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`} id="navMenu" role="menubar">
            <li className={styles.mainSectionLinkLi} role="none"><a href="#hero" className={styles.navLink} role="menuitem">--hero</a></li>
            <li className={styles.mainSectionLinkLi} role="none"><a href="#about" className={styles.navLink} role="menuitem">--about</a></li>
            <li className={styles.mainSectionLinkLi} role="none"><a href="#platform" className={styles.navLink} role="menuitem">--yuriodev_vision</a></li>
            <li className={styles.mainSectionLinkLi} role="none"><a href="#projects" className={styles.navLink} role="menuitem">--projects</a></li>
            <li className={styles.mainSectionLinkLi} role="none"><a href="#timeline" className={styles.navLink} role="menuitem">--timeline</a></li>
            <li className={styles.mainSectionLinkLi} role="none"><a href="#skills" className={styles.navLink} role="menuitem">--skills</a></li>
            <li className={styles.mainSectionLinkLi} role="none"><a href="#terminal" className={styles.navLink} role="menuitem">--terminal</a></li>
            <li className={styles.mainSectionLinkLi} role="none"><a href="#articles" className={styles.navLink} role="menuitem">--articles</a></li>
            <li className={styles.mainSectionLinkLi} role="none"><a href="#connect" className={styles.navLink} role="menuitem">--connect</a></li>
            <li className={`${styles.navSeparator} ${styles.mainSectionSeparator}`} role="none">|</li>
            <li role="none"><a href="#about" className={styles.navLink} role="menuitem">--about</a></li>
            <li role="none"><a href="#" className={styles.navLink} role="menuitem">--courses</a></li>
            <li role="none"><a href="#" className={styles.navLink} role="menuitem">--dashboard</a></li>
            <li role="none"><a href="#" className={styles.navLink} role="menuitem">--community</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
