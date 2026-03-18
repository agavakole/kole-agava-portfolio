import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TypeWriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

export function TypeWriter({ 
  text, 
  delay = 0, 
  speed = 50, 
  className = '',
  showCursor = true,
  onComplete 
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentIndex === 0) {
      const delayTimeout = setTimeout(() => {
        setIsTyping(true);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }
  }, [delay, currentIndex]);

  useEffect(() => {
    if (!isTyping || currentIndex >= text.length) {
      if (currentIndex >= text.length && onComplete) {
        onComplete();
      }
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isTyping, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && currentIndex < text.length && (
        <span className="inline-block w-2 h-5 bg-primary ml-1 animate-pulse" />
      )}
    </span>
  );
}

interface TypeWriterOnViewProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  showCursor?: boolean;
}

export function TypeWriterOnView({ 
  text, 
  delay = 0, 
  speed = 50, 
  className = '',
  showCursor = false
}: TypeWriterOnViewProps) {
  const [shouldType, setShouldType] = useState(false);

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      onViewportEnter={() => setShouldType(true)}
    >
      {shouldType ? (
        <TypeWriter 
          text={text} 
          delay={delay} 
          speed={speed} 
          className={className}
          showCursor={showCursor}
        />
      ) : (
        <span className={className} style={{ opacity: 0 }}>{text}</span>
      )}
    </motion.span>
  );
}
