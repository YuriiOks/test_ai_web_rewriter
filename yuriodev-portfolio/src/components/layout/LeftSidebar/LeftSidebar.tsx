import styles from './LeftSidebar.module.css';
import type { NavLink } from '../Header/Header';

interface LeftSidebarProps {
  links: NavLink[];
  activeSectionId: string;
  onScrollToSection: (id: string) => void;
}

const LeftSidebar = ({ links, activeSectionId, onScrollToSection }: LeftSidebarProps) => {
  return (
    <nav className={styles.sidebarNav} aria-label="Section navigation">
      {links.map(link => (
        <button
          key={link.id}
          type="button"
          className={`${styles.sidebarLink} ${activeSectionId === link.id ? styles.sidebarLinkActive : ''}`.trim()}
          onClick={() => onScrollToSection(link.id)}
          aria-label={`Go to ${link.label.replace('--', '')} section`}
        >
          <span className={styles.diamond} />
          <span className={styles.linkText}>{link.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default LeftSidebar;
