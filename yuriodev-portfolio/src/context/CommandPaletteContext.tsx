import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import CommandPalette from '../components/ui/CommandPalette/CommandPalette';

export interface CommandDefinition {
  id: string;
  title: string;
  shortcut: string;
  action: () => void;
}

interface CommandPaletteContextValue {
  open: () => void;
  close: () => void;
}

const CommandPaletteContext = createContext<CommandPaletteContextValue | undefined>(undefined);

interface CommandPaletteProviderProps {
  commands: CommandDefinition[];
  children: ReactNode;
}

export const CommandPaletteProvider = ({ commands, children }: CommandPaletteProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const open = useCallback(() => {
    setIsOpen(true);
    setQuery('');
    setSelectedIndex(0);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery('');
    setSelectedIndex(0);
  }, []);

  const filteredCommands = useMemo(() => {
    const normalizedQuery = query.toLowerCase();
    return commands.filter(command => {
      if (!normalizedQuery) return true;
      return (
        command.title.toLowerCase().includes(normalizedQuery) ||
        command.shortcut.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [commands, query]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === 'Escape') {
        event.preventDefault();
        close();
        return;
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setSelectedIndex(index => Math.min(index + 1, Math.max(filteredCommands.length - 1, 0)));
        return;
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault();
        setSelectedIndex(index => Math.max(index - 1, 0));
        return;
      }

      if (event.key === 'Enter') {
        event.preventDefault();
        const command = filteredCommands[selectedIndex];
        if (command) {
          command.action();
          close();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [close, filteredCommands, isOpen, selectedIndex]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    setSelectedIndex(index => Math.min(index, Math.max(filteredCommands.length - 1, 0)));
  }, [filteredCommands]);

  useEffect(() => {
    const handleGlobalShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        open();
      } else if (event.key === 'Escape') {
        close();
      }
    };

    window.addEventListener('keydown', handleGlobalShortcut);
    return () => {
      window.removeEventListener('keydown', handleGlobalShortcut);
    };
  }, [close, open]);

  return (
    <CommandPaletteContext.Provider value={{ open, close }}>
      {children}
      <CommandPalette
        isOpen={isOpen}
        query={query}
        onQueryChange={setQuery}
        commands={filteredCommands}
        selectedIndex={selectedIndex}
        onSelect={index => {
          const command = filteredCommands[index];
          if (command) {
            command.action();
            close();
          }
        }}
      />
    </CommandPaletteContext.Provider>
  );
};

export const useCommandPalette = () => {
  const context = useContext(CommandPaletteContext);
  if (!context) {
    throw new Error('useCommandPalette must be used within a CommandPaletteProvider');
  }
  return context;
};
