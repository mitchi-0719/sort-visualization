import { useEffect, useState } from "react";
import { Context } from "./context";

export const ContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const contextValue = {
    isDark,
    setIsDark,
  };

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleDarkModeChange = (event) => {
      setIsDark(event.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);
    setIsDark(darkModeMediaQuery.matches);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
