'use client';

import { useState, useEffect, useCallback } from 'react';

interface TypewriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  loop?: boolean;
}

export function useTypewriter({
  words,
  typeSpeed = 80,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
  loop = true,
}: TypewriterOptions) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (isPaused) return;

    if (!isDeleting) {
      setText(currentWord.substring(0, text.length + 1));

      if (text === currentWord) {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    } else {
      setText(currentWord.substring(0, text.length - 1));

      if (text === '') {
        setIsDeleting(false);
        const nextIndex = (wordIndex + 1) % words.length;
        if (!loop && nextIndex === 0) return;
        setWordIndex(nextIndex);
      }
    }
  }, [text, wordIndex, isDeleting, isPaused, words, delayBetweenWords, loop]);

  useEffect(() => {
    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typeSpeed, deleteSpeed]);

  return { text, isDeleting };
}
