import React, { useState, useRef, useEffect } from 'react';
import styles from './AgentTerminal.module.css';
// Import the new simplified service function
import { sendMessage } from '../../../services/agentService'; 

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
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isProcessing, setIsProcessing] = useState(false);

  const terminalOutputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalOutputRef.current) {
      terminalOutputRef.current.scrollTop = terminalOutputRef.current.scrollHeight;
    }
  }, [messages]);

  const handleCommandSubmit = async (rawCommand: string) => {
    if (!rawCommand) return;
    
    setIsProcessing(true);

    // 1. Add user's command to the display
    setMessages(prev => [...prev, {
      id: crypto.randomUUID(),
      type: 'user',
      content: `> ${rawCommand}`,
      timestamp: new Date(),
    }]);

    // 2. Add a "processing" message
    const processingId = crypto.randomUUID();
    setMessages(prev => [...prev, {
      id: processingId,
      type: 'processing',
      content: '[PROCESSING] Forwarding to agent...',
      timestamp: new Date(),
    }]);

    // 3. Send the raw command to the backend
    const result = await sendMessage(rawCommand);

    // 4. Remove "processing" and display the backend's response
    setMessages(prev => {
      const newMessages = prev.filter(m => m.id !== processingId);
      const responseType = result.status === 'error' ? 'error' : 'assistant';
      
      return [
        ...newMessages,
        {
          id: crypto.randomUUID(),
          type: responseType,
          content: result.response, // Display the raw response from the backend
          timestamp: new Date(),
        }
      ];
    });

    setIsProcessing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isProcessing) {
      const command = input.trim();
      handleCommandSubmit(command);
      if (command) {
        setCommandHistory(prev => [command, ...prev]);
        setHistoryIndex(-1);
      }
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else if (historyIndex <= 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        setMessages([
          {
            id: crypto.randomUUID(),
            type: 'system',
            content: '[SYSTEM] Terminal cleared.',
            timestamp: new Date(),
          }
        ]);
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={styles.terminalWrapper}>
      <div className={styles.terminalHeader}>
        <div className={styles.trafficLights}>
          <span className={`${styles.trafficLight} ${styles.red}`}></span>
          <span className={`${styles.trafficLight} ${styles.yellow}`}></span>
          <span className={`${styles.trafficLight} ${styles.green}`}></span>
        </div>
        <div className={styles.terminalTitle}>assistant@yuriodev: ~</div>
        <div className={styles.terminalActions}></div>
      </div>
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
          <span className={styles.terminalPrompt}>{'assistant@yuriodev: ~'}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            className={styles.terminalInput}
            placeholder='Type a command... (e.g., "help")'
            aria-label="Terminal command input"
            autoComplete="off"
            disabled={isProcessing}
          />
        </div>
      </div>
    </div>
  );
};

export default AgentTerminal;