import styles from './HelpPanel.module.css';

interface HelpPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const HelpPanel = ({ isOpen, onClose }: HelpPanelProps) => {
  return (
    <aside
      className={`${styles.panel} ${isOpen ? styles.open : ''}`.trim()}
      aria-label="Keyboard shortcuts"
      aria-hidden={!isOpen}
    >
      <div className={styles.header}>
        <h3>Keyboard Shortcuts</h3>
        <button type="button" onClick={onClose} className={styles.closeButton} aria-label="Close help panel">
          ×
        </button>
      </div>
      <section className={styles.section}>
        <h4>Navigation</h4>
        <div className={styles.row}>
          <span>Next section</span>
          <span>J</span>
        </div>
        <div className={styles.row}>
          <span>Previous section</span>
          <span>K</span>
        </div>
        <div className={styles.row}>
          <span>Go to top</span>
          <span>Home</span>
        </div>
        <div className={styles.row}>
          <span>Go to connect</span>
          <span>End</span>
        </div>
      </section>
      <section className={styles.section}>
        <h4>Utilities</h4>
        <div className={styles.row}>
          <span>Command palette</span>
          <span>Ctrl/Cmd + K</span>
        </div>
        <div className={styles.row}>
          <span>Toggle theme</span>
          <span>T</span>
        </div>
        <div className={styles.row}>
          <span>Show help</span>
          <span>?</span>
        </div>
        <div className={styles.row}>
          <span>Close overlays</span>
          <span>Esc</span>
        </div>
      </section>
    </aside>
  );
};

export default HelpPanel;
