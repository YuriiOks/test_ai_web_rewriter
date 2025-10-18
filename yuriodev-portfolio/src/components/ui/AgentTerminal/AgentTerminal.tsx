import React, { useState, useRef, useEffect } from 'react';
import styles from './AgentTerminal.module.css';

interface Message {
  id: string;
  type: 'system' | 'user' | 'assistant' | 'processing' | 'error' | 'log';
  content: string;
  timestamp: Date;
}

const AgentTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: crypto.randomUUID(),
      type: 'system',
      content: '$ Initializing connection to Shawbrook Banking Assistant...',
      timestamp: new Date(),
    },
    {
      id: crypto.randomUUID(),
      type: 'system',
      content: "[SYSTEM] Connected to AI Engine: v1.0",
      timestamp: new Date(),
    },
    {
      id: crypto.randomUUID(),
      type: 'system',
      content: "[SYSTEM] Type 'help' for available commands.",
      timestamp: new Date(),
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [lastCustomerId, setLastCustomerId] = useState<number | null>(null);

  const terminalOutputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    if (terminalOutputRef.current) {
      terminalOutputRef.current.scrollTop = terminalOutputRef.current.scrollHeight;
    }
  }, [messages]);

  const parseCommand = (rawCommand: string): { command: string; customerId?: number; query?: string } => {
    const trimmed = rawCommand.trim();

    // Match: query --id 123 "question text"
    const queryMatch = trimmed.match(/^query\s+--id\s+(\d+)\s+"([^"]+)"/);
    if (queryMatch) {
      return {
        command: 'query',
        customerId: parseInt(queryMatch[1]),
        query: queryMatch[2],
      };
    }

    // Match: "plain question" (uses last customer ID)
    const plainQuestionMatch = trimmed.match(/^"([^"]+)"$/);
    if (plainQuestionMatch && lastCustomerId) {
      return {
        command: 'query',
        customerId: lastCustomerId,
        query: plainQuestionMatch[1],
      };
    }

    // Other commands
    return { command: trimmed.toLowerCase() };
  };

  const executeCommand = async (rawCommand: string) => {
    const { command, customerId, query } = parseCommand(rawCommand);

    // Add user command to messages
    setMessages(prev => [...prev, {
      id: crypto.randomUUID(),
      type: 'user',
      content: `> ${rawCommand}`,
      timestamp: new Date(),
    }]);

    // Handle different commands
    switch (command) {
      case 'help':
        setMessages(prev => [...prev, {
          id: crypto.randomUUID(),
          type: 'assistant',
          content: `[ASSISTANT] Available commands:
  - query --id <id> "<question>" : Query customer banking information
  - info --products              : List available product types
  - clear                        : Clear terminal history
  - exit                         : End session`,
          timestamp: new Date(),
        }]);
        break;

      case 'info':
        setMessages(prev => [...prev, {
          id: crypto.randomUUID(),
          type: 'assistant',
          content: `[ASSISTANT] Available Product Types:
  - Fixed Rate ISA
  - Notice Savings Account
  - Fixed Rate Bond
  - Easy Access ISA`,
          timestamp: new Date(),
        }]);
        break;

      case 'clear':
        setMessages([
          {
            id: crypto.randomUUID(),
            type: 'system',
            content: '[SYSTEM] Terminal cleared.',
            timestamp: new Date(),
          }
        ]);
        break;

      case 'exit':
        setMessages(prev => [...prev, {
          id: crypto.randomUUID(),
          type: 'system',
          content: '[SYSTEM] Session terminated. Thank you for using Banking Assistant.',
          timestamp: new Date(),
        }]);
        break;

      case 'query':
        if (!customerId || !query) {
          setMessages(prev => [...prev, {
            id: crypto.randomUUID(),
            type: 'error',
            content: '[ERROR] Invalid syntax. Use: query --id <customer_id> "<question>"',
            timestamp: new Date(),
          }]);
          return;
        }

        // Remember customer ID for future plain queries
        setLastCustomerId(customerId);

        // Show processing message
        const processingId = crypto.randomUUID();
        setMessages(prev => [...prev, {
          id: processingId,
          type: 'processing',
          content: `[PROCESSING] Analyzing customer ${customerId} records...`,
          timestamp: new Date(),
        }]);

        // Simulate API call (replace with actual API call later)
        setTimeout(() => {
          // Remove processing message and add response
          setMessages(prev => [
            ...prev.filter(m => m.id !== processingId),
            {
              id: crypto.randomUUID(),
              type: 'assistant',
              content: `[ASSISTANT] This is a demo response. Connect to backend API at https://api.yuriodev.co.uk for real banking queries.`,
              timestamp: new Date(),
            },
            {
              id: crypto.randomUUID(),
              type: 'log',
              content: `[LOG] Request processed in 182 ms.`,
              timestamp: new Date(),
            }
          ]);
        }, 1500);
        break;

      default:
        setMessages(prev => [...prev, {
          id: crypto.randomUUID(),
          type: 'error',
          content: `[ERROR] Command not found: ${command}. Type 'help' for available commands.`,
          timestamp: new Date(),
        }]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = input.trim();
      if (command) {
        // Add to command history
        setCommandHistory(prev => [...prev, command]);
        setHistoryIndex(-1);

        // Execute command
        executeCommand(command);
        setInput('');
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.ctrlKey && e.key === 'l') {
      e.preventDefault();
      executeCommand('clear');
    }
  };

  // Focus input when clicking on terminal
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={styles.terminalWrapper}>
      {/* Mac-style window header */}
      <div className={styles.terminalHeader}>
        <div className={styles.trafficLights}>
          <span className={`${styles.trafficLight} ${styles.red}`}></span>
          <span className={`${styles.trafficLight} ${styles.yellow}`}></span>
          <span className={`${styles.trafficLight} ${styles.green}`}></span>
        </div>
        <div className={styles.terminalTitle}>assitant@yuriodev: ~</div>
        <div className={styles.terminalActions}></div>
      </div>

      {/* Terminal content */}
      <div className={styles.agentTerminal} onClick={handleTerminalClick}>
        <div className={styles.terminalOutput} ref={terminalOutputRef}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`${styles.terminalLine} ${styles[message.type]}`}
            >
              {message.content}
            </div>
          ))}
        </div>
        <div className={styles.terminalInputLine}>
          <span className={styles.terminalPrompt}>{'assitant@yuriodev: ~'}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            className={styles.terminalInput}
            placeholder='Type a command... (try "help")'
            aria-label="Terminal command input"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};

export default AgentTerminal;
