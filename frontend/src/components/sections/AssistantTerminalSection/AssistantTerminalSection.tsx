import React from 'react';
import AgentTerminal from '../../ui/AgentTerminal/AgentTerminal';
import styles from './AssistantTerminalSection.module.css';

const AssistantTerminalSection: React.FC = () => {
  return (
    <section id="assistant" className={styles.sectionFullwidthShaded}>
      <div className={styles.sectionContentWrapper}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Banking Assistant</h2>
          <p className={styles.sectionSubtitle}>
            AI-powered terminal interface for Shawbrook customer queries
          </p>
        </div>

        <div className={styles.terminalContainer}>
          <AgentTerminal />
        </div>
      </div>
    </section>
  );
};

export default AssistantTerminalSection;
