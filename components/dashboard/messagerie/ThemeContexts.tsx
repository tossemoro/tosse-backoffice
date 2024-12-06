"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContexts = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProviders = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContexts.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContexts.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContexts);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
