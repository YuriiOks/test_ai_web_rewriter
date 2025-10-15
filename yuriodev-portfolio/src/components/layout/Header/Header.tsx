import { useCallback, useMemo, useState } from 'react';
import { useCommandPalette } from '../../../context/CommandPaletteContext';
import styles from './Header.module.css';

export interface NavLink {
  id: string;
  label: string;
}

export interface SecondaryLink {
  href: string;
  label: string;
}

interface HeaderProps {
  mainLinks: NavLink[];
  secondaryLinks: SecondaryLink[];
  activeSectionId: string;
  onScrollToSection: (id: string) => void;
  onToggleHelp: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const Header = ({ mainLinks, secondaryLinks, activeSectionId, onScrollToSection, onToggleHelp, theme, onToggleTheme }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { open } = useCommandPalette();

  const handleLinkClick = useCallback(
    (linkId: string) => {
      onScrollToSection(linkId);
      setIsMobileMenuOpen(false);
    },
    [onScrollToSection],
  );

  const promptText = useMemo(() => {
    const mode = theme === 'light' ? 'light' : 'dark';
    return `yurii@yuriodev:~$ ./run --module=AI_Education --theme=${mode}`;
  }, [theme]);

  return (
    <header className={styles.terminalHeader} role="banner" data-header>
      <nav className={styles.terminalNav} role="navigation" aria-label="Main navigation">
        <div className={styles.terminalPrompt}>
          {promptText}
          <span className={styles.cursor}>_</span>
        </div>
        <div className={styles.navControls}>
          <button type="button" className={styles.navButton} onClick={onToggleTheme} aria-label="Toggle dark/light theme">
            ☾ / ☀
          </button>
          <button type="button" className={styles.navButton} onClick={onToggleHelp} aria-label="Show help panel">
            ?
          </button>
          <button type="button" className={styles.navButton} onClick={open} aria-label="Open command palette">
            ⌘K
          </button>
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setIsMobileMenuOpen(open => !open)}
            aria-label="Toggle mobile menu"
          >
            ≡ MENU
          </button>
          <ul className={`${styles.navMenu} ${isMobileMenuOpen ? styles.navMenuActive : ''}`} role="menubar">
            {mainLinks.map(link => (
              <li key={link.id} className={styles.navItem} role="none">
                <button
                  type="button"
                  onClick={() => handleLinkClick(link.id)}
                  className={`${styles.navLink} ${activeSectionId === link.id ? styles.navLinkActive : ''}`.trim()}
                  role="menuitem"
                >
                  {link.label}
                </button>
              </li>
            ))}
            {secondaryLinks.length > 0 && <li className={`${styles.navSeparator}`} role="none">|</li>}
            {secondaryLinks.map(link => (
              <li key={link.label} className={styles.navItem} role="none">
                <a className={styles.navLink} href={link.href} role="menuitem">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
