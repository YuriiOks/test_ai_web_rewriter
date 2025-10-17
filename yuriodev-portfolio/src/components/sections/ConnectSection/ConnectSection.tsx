import React, { useState } from 'react';
import { aboutData } from '../../../data/aboutData';
import styles from './ConnectSection.module.css';

const ConnectSection: React.FC = () => {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    '$ ./connect.sh',
    'Initializing connection protocols...',
    'Ready to connect! Type "help" for available commands.',
    ''
  ]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!terminalInput.trim()) return;

    const command = terminalInput.trim().toLowerCase();
    const newOutput = [...terminalOutput, `$ ${terminalInput}`];

    switch (command) {
      case 'help':
        newOutput.push(
          'Available commands:',
          '  email    - Display email address',
          '  linkedin - Open LinkedIn profile',
          '  github   - Open GitHub profile',
          '  location - Display location',
          '  all      - Display all contact information',
          '  clear    - Clear terminal',
          ''
        );
        break;
      
      case 'email':
        newOutput.push(`📧 ${aboutData.contact.email}`, '');
        break;
      
      case 'linkedin':
        newOutput.push(
          `🔗 Opening LinkedIn profile...`,
          `${aboutData.contact.linkedin}`,
          ''
        );
        window.open(aboutData.contact.linkedin, '_blank');
        break;
      
      case 'github':
        newOutput.push(
          `🔗 Opening GitHub profile...`,
          `${aboutData.contact.github}`,
          ''
        );
        window.open(aboutData.contact.github, '_blank');
        break;
      
      case 'location':
        newOutput.push(`📍 ${aboutData.contact.location}`, '');
        break;
      
      case 'all':
        newOutput.push(
          '='.repeat(50),
          'CONTACT INFORMATION',
          '='.repeat(50),
          `📧 Email:    ${aboutData.contact.email}`,
          `🔗 LinkedIn: ${aboutData.contact.linkedin}`,
          `💻 GitHub:   ${aboutData.contact.github}`,
          `📍 Location: ${aboutData.contact.location}`,
          '='.repeat(50),
          ''
        );
        break;
      
      case 'clear':
        setTerminalOutput([
          '$ ./connect.sh',
          'Terminal cleared.',
          ''
        ]);
        setTerminalInput('');
        return;
      
      default:
        newOutput.push(
          `Command not found: ${command}`,
          'Type "help" for available commands.',
          ''
        );
    }

    setTerminalOutput(newOutput);
    setTerminalInput('');
  };

  return (
    <section id="connect" className={styles.section}>
      <div className={styles.sectionContent}>
        {/* Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Let's Connect</h2>
          <p className={styles.subtitle}>
            Interested in collaboration, consultation, or just want to chat about AI/ML? 
            I'm always open to discussing new opportunities and innovative projects.
          </p>
        </div>

        <div className={styles.connectGrid}>
          {/* Terminal Interface */}
          <div className={styles.terminalCard}>
            <div className={styles.terminalHeader}>
              <div className={styles.terminalButtons}>
                <span className={styles.terminalButton} style={{ background: '#ff5f56' }}></span>
                <span className={styles.terminalButton} style={{ background: '#ffbd2e' }}></span>
                <span className={styles.terminalButton} style={{ background: '#27c93f' }}></span>
              </div>
              <div className={styles.terminalTitle}>contact@terminal</div>
            </div>
            <div className={styles.terminalBody}>
              <div className={styles.terminalOutput}>
                {terminalOutput.map((line, index) => (
                  <div key={index} className={styles.terminalLine}>
                    {line}
                  </div>
                ))}
              </div>
              <form onSubmit={handleTerminalSubmit} className={styles.terminalInputForm}>
                <span className={styles.terminalPrompt}>$ </span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  className={styles.terminalInputField}
                  placeholder="Type 'help' for commands..."
                  autoComplete="off"
                  spellCheck="false"
                />
              </form>
            </div>
          </div>
        </div>
        {/* CTA */}

        <div className={styles.ctaCard}>
          <h3 className={styles.ctaTitle}>Ready to start a conversation?</h3>
          <p className={styles.ctaText}>
            Whether you're looking for a consultant, collaborator, or technical advisor, 
            let's discuss how we can work together to build something exceptional.
          </p>
          <a 
            href={`mailto:${aboutData.contact.email}?subject=Let's Connect - Portfolio Inquiry`}
            className={styles.ctaButton}
          >
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
