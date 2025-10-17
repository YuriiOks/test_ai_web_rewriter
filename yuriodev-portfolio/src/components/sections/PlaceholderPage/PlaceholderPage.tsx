import React from 'react';
import styles from './PlaceholderPage.module.css';

interface PlaceholderPageProps {
  pageName: string;
  description: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ pageName, description }) => {
  return (
    <div className={styles.placeholderContainer}>
      <div className={styles.terminalWindow}>
        <div className={styles.terminalHeader}>
          <span className={styles.terminalButton} style={{ background: '#ff5f56' }}></span>
          <span className={styles.terminalButton} style={{ background: '#ffbd2e' }}></span>
          <span className={styles.terminalButton} style={{ background: '#27c93f' }}></span>
          <span className={styles.terminalTitle}>yuriodev@terminal:~/{pageName}</span>
        </div>
        <div className={styles.terminalBody}>
          <div className={styles.terminalLine}>
            <span className={styles.terminalPrompt}>yurii@yuriodev:~$</span>
            <span className={styles.terminalCommand}> ./check_status --page={pageName}</span>
          </div>
          <div className={styles.terminalOutput}>
            <div className={styles.outputLine}>
              <span className={styles.outputLabel}>[INFO]</span> Initializing {pageName} module...
            </div>
            <div className={styles.outputLine}>
              <span className={styles.outputLabel}>[STATUS]</span> Module Status: <span className={styles.statusBadge}>UNDER DEVELOPMENT</span>
            </div>
            <div className={styles.outputLine}>
              <span className={styles.outputLabel}>[DESC]</span> {description}
            </div>
            <div className={styles.outputLine}>&nbsp;</div>
            <div className={styles.outputLine}>
              <span className={styles.outputWarning}>⚠ This page is currently under construction</span>
            </div>
            <div className={styles.outputLine}>&nbsp;</div>
            <div className={styles.outputLine}>
              <span className={styles.outputLabel}>[SUGGESTION]</span> In the meantime, check out:
            </div>
            <div className={styles.outputLine} style={{ paddingLeft: '2rem' }}>
              → <a href="/" className={styles.terminalLink}>Portfolio (About)</a> - Learn about my work and experience
            </div>
            <div className={styles.outputLine} style={{ paddingLeft: '2rem' }}>
              → <a href="/#projects" className={styles.terminalLink}>Projects</a> - View my latest work
            </div>
            <div className={styles.outputLine} style={{ paddingLeft: '2rem' }}>
              → <a href="/#connect" className={styles.terminalLink}>Connect</a> - Get in touch with me
            </div>
          </div>
          <div className={styles.terminalLine}>
            <span className={styles.terminalPrompt}>yurii@yuriodev:~$</span>
            <span className={styles.cursor}>_</span>
          </div>
        </div>
      </div>
      <div className={styles.backButtonContainer}>
        <a href="/" className={styles.backButton}>
          ← Back to Portfolio
        </a>
      </div>
    </div>
  );
};

export default PlaceholderPage;
