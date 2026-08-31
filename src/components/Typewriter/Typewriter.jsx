import { useEffect, useState } from 'react';
import './Typewriter.css';

export default function Typewriter({
  words,
  typeSpeed = 90,
  deleteSpeed = 45,
  pauseTime = 1500,
  className = '',
}) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
      const deleteTimer = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, deleteSpeed);
      return () => clearTimeout(deleteTimer);
    }

    if (text === currentWord) {
      setIsPaused(true);
      return;
    }

    const typeTimer = setTimeout(() => {
      setText((prev) => currentWord.slice(0, prev.length + 1));
    }, typeSpeed);
    return () => clearTimeout(typeTimer);
  }, [text, isDeleting, isPaused, wordIndex, words, typeSpeed, deleteSpeed, pauseTime]);

  return (
    <span className={`typewriter ${className}`}>
      <span className="typewriter-text">{text}</span>
      <span className="typewriter-cursor" aria-hidden="true"></span>
    </span>
  );
}
