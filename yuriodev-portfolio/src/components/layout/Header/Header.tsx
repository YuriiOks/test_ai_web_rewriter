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
            <li className={styles.mainSectionLinkLi} role="none"><a href="#projects" className={styles.navLink} role="menuitem">--projects</a></li>
            <li className={styles.mainSectionLinkLi} role="none"><a href="#skills" className={styles.navLink} role="menuitem">--skills</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
