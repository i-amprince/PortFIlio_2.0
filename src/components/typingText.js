import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './typingText.css'; // for optional cursor styling

const TypingText = () => {
  const texts = ['Web Developer', 'Learner', 'Progammer', 'Curious Technologist'];
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const fullText = texts[textIndex];
    let timeout;

    if (!isDeleting) {
      if (charIndex < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayed(fullText.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 150);
      } else {
        // pause before deleting
        timeout = setTimeout(() => setIsDeleting(true), 1000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed(fullText.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 100);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <motion.div
      className="typing-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <span>{displayed}</span>
      <span className="cursor">|</span>
    </motion.div>
  );
};

export default TypingText;
