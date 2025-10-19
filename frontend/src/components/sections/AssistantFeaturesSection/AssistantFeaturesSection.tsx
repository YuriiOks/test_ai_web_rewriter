import React from 'react';
import styles from './AssistantFeaturesSection.module.css';

const AssistantFeaturesSection: React.FC = () => {
  return (
    <section id="features" className={styles.sectionFullwidthBase}>
      <div className={styles.sectionContentWrapper}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Features & Commands</h2>
          <p className={styles.sectionSubtitle}>
            Interactive banking assistant with intelligent query processing
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {/* Features Card */}
          <div className={styles.featureCard}>
            <div className={styles.cardHeader}>
              <span className={styles.terminalPrompt}>$ cat ./features.md</span>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Key Features</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>▹</span>
                  <span>Natural language banking queries with structured command syntax</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>▹</span>
                  <span>Real-time customer data retrieval and AI-powered responses</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>▹</span>
                  <span>Command history navigation with ↑/↓ arrow keys</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>▹</span>
                  <span>Secure API integration with input validation</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>▹</span>
                  <span>Domain-specific responses with refusal logic for out-of-scope queries</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Commands Card */}
          <div className={styles.featureCard}>
            <div className={styles.cardHeader}>
              <span className={styles.terminalPrompt}>$ ls ./available_commands/</span>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Available Commands</h3>
              <ul className={styles.commandList}>
                <li className={styles.commandItem}>
                  <code className={styles.commandCode}>query --id &lt;id&gt; "&lt;question&gt;"</code>
                  <span className={styles.commandDesc}>Query customer banking information</span>
                </li>
                <li className={styles.commandItem}>
                  <code className={styles.commandCode}>info --products</code>
                  <span className={styles.commandDesc}>List available product types</span>
                </li>
                <li className={styles.commandItem}>
                  <code className={styles.commandCode}>help</code>
                  <span className={styles.commandDesc}>Display all available commands</span>
                </li>
                <li className={styles.commandItem}>
                  <code className={styles.commandCode}>clear</code>
                  <span className={styles.commandDesc}>Clear terminal history</span>
                </li>
                <li className={styles.commandItem}>
                  <code className={styles.commandCode}>exit</code>
                  <span className={styles.commandDesc}>End session</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistantFeaturesSection;
