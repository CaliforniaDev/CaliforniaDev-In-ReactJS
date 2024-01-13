import React, { createContext, useState, useEffect, useContext } from 'react';

// Context for managing loading state across the component tree.
export const LoadingContext = createContext();

// Custom hook to use the LoadingContext.
// Ensures that the context is used within a LoadingProvider.
export const useLoadingContext = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error(
      'useLoadingContext must be used within a LoadingProvider component'
    );
  }
  return context;
};

// Component that provides the loading state to its children.
// Accepts a 'delay' prop to simulate loading time.
export const LoadingProvider = ({ children, delay = 500 }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <LoadingContext.Provider value={isLoading}>
      {children}
    </LoadingContext.Provider>
  );
};
