import React, { useState, useEffect } from 'react';
import styles from './CommandPalette.module.css';

const commands = [
    { title: 'Go to About', action: () => scrollToSection('#about'), shortcut: 'about' },
    { title: 'Go to Projects', action: () => scrollToSection('#projects'), shortcut: 'projects' },
    { title: 'Go to Skills', action: () => scrollToSection('#skills'), shortcut: 'skills' },
    { title: 'Go to Terminal', action: () => scrollToSection('#terminal'), shortcut: 'terminal' },
    { title: 'Go to Contact', action: () => scrollToSection('#connect'), shortcut: 'contact' },
    { title: 'Toggle Theme', action: () => {/**/}, shortcut: 'theme' },
    { title: 'Show Help', action: () => {/**/}, shortcut: 'help' },
    { title: 'Send Email', action: () => window.location.href = 'mailto:contact@yuriodev.co.uk', shortcut: 'email' }
];

function scrollToSection(selector:string) {
    const element = document.querySelector(selector);
    if (element) {
        const header = document.querySelector('.terminal-header');
        const headerOffset = header ? header.offsetHeight : 70;
        const elementPosition = (element as HTMLElement).offsetTop - headerOffset;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
}


const CommandPalette: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [filteredCommands, setFilteredCommands] = useState(commands);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(!isOpen);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            setFilteredCommands(
                commands.filter(cmd =>
                    cmd.title.toLowerCase().includes(inputValue.toLowerCase()) ||
                    cmd.shortcut.toLowerCase().includes(inputValue.toLowerCase())
                )
            );
            setSelectedIndex(0);
        }
    }, [inputValue, isOpen]);


    const handleCommandClick = (command: { title: string; action: () => void; shortcut: string; }) => {
        command.action();
        setIsOpen(false);
        setInputValue('');
    };

    if (!isOpen) return null;

    return (
        <div className={styles.commandPalette} onClick={() => setIsOpen(false)}>
            <div className={styles.commandPaletteContent} onClick={(e) => e.stopPropagation()}>
                <input
                    type="text"
                    className={styles.commandInput}
                    placeholder="Type a command or search..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    autoFocus
                />
                <div className={styles.commandResults}>
                    {filteredCommands.map((cmd, index) => (
                        <div
                            key={cmd.title}
                            className={`${styles.commandItem} ${index === selectedIndex ? styles.selected : ''}`}
                            onClick={() => handleCommandClick(cmd)}
                        >
                            <span className={styles.commandTitle}>{cmd.title}</span>
                            <span className={styles.commandShortcut}>{cmd.shortcut}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CommandPalette;
