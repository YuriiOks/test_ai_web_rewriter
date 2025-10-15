import { FormEvent, useState } from 'react';
import { executeTerminalCommand } from '../../services/terminalService';
import styles from './InteractiveTerminal.module.css';

interface TerminalLine {
  text: string;
  tone?: 'accent' | 'warning' | 'success' | 'muted';
}

const initialLines: TerminalLine[] = [
  { text: 'Welcome to YuriODev Terminal v2.0.1', tone: 'accent' },
  { text: "Type 'help' for available commands, or try: skills, contact, projects, surprise", tone: 'muted' },
  { text: '' },
];

const toneToClass: Record<NonNullable<TerminalLine['tone']>, string> = {
  accent: styles.accent,
  warning: styles.warning,
  success: styles.success,
  muted: styles.muted,
};

const InteractiveTerminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>(initialLines);
  const [command, setCommand] = useState('');

  const pushLines = (newLines: TerminalLine[]) => {
    setLines(previous => [...previous, ...newLines]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = command.trim();
    if (!trimmed) return;

    pushLines([{ text: `visitor@yuriodev:~$ ${trimmed}`, tone: 'accent' }]);

    const result = executeTerminalCommand(trimmed);

    if ('clear' in result) {
      setLines(initialLines);
    } else {
      const mapped = result.lines.map<TerminalLine>(line => ({
        text: line,
        tone: result.isUnknown && line.startsWith('Command not found') ? 'warning' : undefined,
      }));
      pushLines([...mapped, { text: '' }]);
    }

    setCommand('');
  };

  return (
    <section id="terminal" className={styles.section}>
      <div className={styles.contentWrapper}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Interactive Terminal Playground</h2>
          <p className={styles.sectionDescription}>
            Try out some commands! Type 'help' to see available options, or explore the system yourself.
          </p>
        </header>
        <div className={styles.terminal}>
          <div className={styles.output} role="log" aria-live="polite">
            {lines.map((line, index) => (
              <div key={`${line.text}-${index}`} className={line.tone ? toneToClass[line.tone] : undefined}>
                {line.text || '\u00a0'}
              </div>
            ))}
          </div>
          <form className={styles.inputLine} onSubmit={handleSubmit}>
            <span className={styles.prompt}>visitor@yuriodev:~$</span>
            <input
              className={styles.input}
              value={command}
              onChange={event => setCommand(event.target.value)}
              placeholder="Try: help, skills, contact, surprise"
              aria-label="Terminal command input"
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTerminal;
