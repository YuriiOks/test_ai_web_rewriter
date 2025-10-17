import React, { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

interface LoadingScreenProps {
  onComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing systems...');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const loadingStages = [
      { progress: 0, text: 'Initializing systems...' },
      { progress: 15, text: 'Loading AI modules...' },
      { progress: 30, text: 'Bootstrapping ML pipelines...' },
      { progress: 50, text: 'Configuring agentic workflows...' },
      { progress: 70, text: 'Compiling portfolio data...' },
      { progress: 90, text: 'Finalizing deployment...' },
      { progress: 100, text: 'Ready!' }
    ];

    let currentStage = 0;
    const interval = setInterval(() => {
      if (currentStage < loadingStages.length) {
        const stage = loadingStages[currentStage];
        setProgress(stage.progress);
        setLoadingText(stage.text);
        currentStage++;
      } else {
        clearInterval(interval);
        // Wait a bit on "Ready!" then fade out
        setTimeout(() => {
          setIsVisible(false);
          // Call completion callback after fade
          setTimeout(() => {
            onComplete?.();
          }, 500); // Match CSS transition duration
        }, 300);
      }
    }, 600); // 600ms per stage = ~4.2 seconds total

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`${styles.loadingScreen} ${progress === 100 ? styles.fadeOut : ''}`}>
      <div className={styles.loadingContainer}>
        {/* ASCII Art Logo */}
        <div className={styles.asciiLogo}>
          <pre className={styles.asciiArt}>
{`
██╗   ██╗██╗   ██╗██████╗ ██╗ ██████╗ 
╚██╗ ██╔╝██║   ██║██╔══██╗██║██╔═══██╗
 ╚████╔╝ ██║   ██║██████╔╝██║██║   ██║
  ╚██╔╝  ██║   ██║██╔══██╗██║██║   ██║
   ██║   ╚██████╔╝██║  ██║██║╚██████╔╝
   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝ ╚═════╝ 
`}
          </pre>
        </div>

        {/* Loading Text */}
        <div className={styles.loadingText}>
          <span className={styles.prompt}>$ </span>
          <span className={styles.text}>{loadingText}</span>
          <span className={styles.cursor}>_</span>
        </div>

        {/* Progress Bar */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className={styles.progressText}>{progress}%</div>
        </div>

        {/* Loading Animation */}
        <div className={styles.loadingDots}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
