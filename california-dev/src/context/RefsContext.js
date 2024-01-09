import React, { createContext, useContext } from 'react';

const RefsContext = createContext();

export const useRefsContext = () => {
  const context = useContext(RefsContext);
  if (context === undefined) {
    throw new Error(
      'useRefsContext must be used within a RefsProvider component'
    );
  }
  return context;
};

export const RefsProvider = ({ children, refs }) => {
  return <RefsContext.Provider value={refs}>{children}</RefsContext.Provider>;
};
