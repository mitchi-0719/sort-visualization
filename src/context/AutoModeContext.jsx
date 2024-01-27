import { useState } from "react";
import { createContext } from "react";

export const autoModeContext = createContext("");

export const AutoModeContextProvider = ({ children }) => {
  const [autoRunning, setAutoRunning] = useState(false);
  const contextValue = {
    autoRunning,
    setAutoRunning,
  };

  return (
    <autoModeContext.Provider value={contextValue}>
      {children}
    </autoModeContext.Provider>
  );
};
