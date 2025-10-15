import { useEffect, useRef, useState } from 'react';

interface UseTypewriterOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export const useTypewriter = (
  messages: string[],
  { typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000 }: UseTypewriterOptions = {},
) => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const indexRef = useRef(0);
  const deletingRef = useRef(false);
  const pauseRef = useRef(false);
  const timeoutRef = useRef<number>();

  useEffect(() => {
    if (!messages.length) {
      setText('');
      return undefined;
    }

    const tick = () => {
      const currentMessage = messages[indexRef.current % messages.length];

      if (pauseRef.current) {
        timeoutRef.current = window.setTimeout(() => {
          pauseRef.current = false;
          deletingRef.current = true;
          tick();
        }, pauseDuration);
        return;
      }

      setText(prev => {
        const nextLength = deletingRef.current ? prev.length - 1 : prev.length + 1;
        const nextText = currentMessage.slice(0, Math.max(0, nextLength));

        if (!deletingRef.current && nextText.length === currentMessage.length) {
          pauseRef.current = true;
        }

        if (deletingRef.current && nextText.length === 0) {
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % messages.length;
        }

        return nextText;
      });

      const delay = deletingRef.current ? deletingSpeed : typingSpeed;
      timeoutRef.current = window.setTimeout(tick, delay);
    };

    tick();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [messages, typingSpeed, deletingSpeed, pauseDuration]);

  useEffect(() => {
    indexRef.current = 0;
    deletingRef.current = false;
    pauseRef.current = false;
    setText('');
  }, [messages]);

  useEffect(() => {
    const cursorInterval = window.setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return showCursor ? `${text}|` : text;
};
