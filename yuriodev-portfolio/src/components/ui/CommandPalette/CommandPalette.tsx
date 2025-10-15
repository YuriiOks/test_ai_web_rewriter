import { ChangeEvent } from 'react';
import { CommandDefinition } from '../../../context/CommandPaletteContext';
import styles from './CommandPalette.module.css';

interface CommandPaletteProps {
  isOpen: boolean;
  query: string;
  onQueryChange: (value: string) => void;
  commands: CommandDefinition[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

const CommandPalette = ({
  isOpen,
  query,
  onQueryChange,
  commands,
  selectedIndex,
  onSelect,
}: CommandPaletteProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onQueryChange(event.target.value);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Command palette">
      <div className={styles.container}>
        <input
          className={styles.input}
          value={query}
          onChange={handleChange}
          placeholder="Type a command or search..."
          autoFocus
        />
        <div className={styles.results}>
          {commands.length === 0 ? (
            <div className={styles.emptyState}>No commands found. Try a different search.</div>
          ) : (
            commands.map((command, index) => (
              <button
                type="button"
                key={command.id}
                className={`${styles.commandItem} ${index === selectedIndex ? styles.selected : ''}`.trim()}
                onClick={() => onSelect(index)}
              >
                <span className={styles.commandTitle}>{command.title}</span>
                <span className={styles.commandShortcut}>{command.shortcut}</span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
