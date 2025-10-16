import React, { useState, useRef, useEffect } from 'react';
import { terminalCommands } from '../../../services/terminalService';
import styles from './InteractiveTerminal.module.css';

const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const terminalOutputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalOutputRef.current) {
      terminalOutputRef.current.scrollTop = terminalOutputRef.current.scrollHeight;
    }
  }, [output]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = input.trim().toLowerCase();
      if (command) {
        const commandOutput = (terminalCommands as any)[command]?.();
        if (commandOutput === 'CLEAR_TERMINAL') {
          setOutput([]);
        } else {
          setOutput([
            ...output,
            `visitor@yuriodev:~$ ${input}`,
            commandOutput || `Command not found: ${command}. Type "help" for available commands.`,
            '',
          ]);
        }
        setInput('');
      }
    }
  };

  return (
    <div className={styles.interactiveTerminal}>
      <div className={styles.terminalOutput} ref={terminalOutputRef}>
        <div className={styles.terminalLine} style={{ color: 'var(--accent-secondary)' }}>Welcome to YuriODev Terminal v2.0.1</div>
        <div className={styles.terminalLine} style={{ color: 'var(--text-secondary)' }}>Type 'help' for available commands, or try: skills, contact, projects, surprise</div>
        <div className={styles.terminalLine}>&nbsp;</div>
        {output.map((line, index) => (
          <div key={index} className={styles.terminalLine}>{line}</div>
        ))}
      </div>
      <div className={styles.terminalInputLine}>
        <span className={styles.terminalPromptInteractive}>visitor@yuriodev:~$</span>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          className={styles.terminalInput}
          placeholder="Try: help, skills, contact, surprise"
          aria-label="Terminal command input"
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default InteractiveTerminal;
