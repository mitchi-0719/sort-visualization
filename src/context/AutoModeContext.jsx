import { useState } from "react";
import { createContext } from "react";

export const autoModeContext = createContext("");

export const AutoModeContextProvider = ({ children }) => {
  const [autoRunning, setAutoRunning] = useState(false);
  const [autoSpeed, setAutoSpeed] = useState(300);
  const contextValue = {
    autoRunning,
    setAutoRunning,
    autoSpeed,
    setAutoSpeed,
  };

  return (
    <autoModeContext.Provider value={contextValue}>
      {children}
    </autoModeContext.Provider>
  );
};
