import { useState, useEffect } from 'react';

const useTypewriter = (messages: string[]) => {
  const [text, setText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentMessage = messages[messageIndex];

    const type = () => {
      if (isPaused) {
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, 2000);
        return;
      }

      if (isDeleting) {
        setText(currentMessage.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setMessageIndex((prev) => (prev + 1) % messages.length);
        }
      } else {
        setText(currentMessage.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentMessage.length) {
          setIsPaused(true);
        }
      }
    };

    const timeout = setTimeout(type, isDeleting ? 50 : isPaused ? 0 : 100);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, isPaused, charIndex, messageIndex, messages]);

  return text;
};

export default useTypewriter;
