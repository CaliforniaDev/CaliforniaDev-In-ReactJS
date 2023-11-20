import React, { createContext, useContext, useRef } from 'react';
import { useScroll } from 'framer-motion';

const ScrollContext = createContext();

export const useScrollInfo = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollInfo must be used within a ScrollProvider');
  }
  return context;
};

export const ScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end start'],
  });

  return (
    <ScrollContext.Provider value={{ scrollYProgress, scrollRef }}>
      {children}
    </ScrollContext.Provider>
  );
};
