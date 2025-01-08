import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Load theme from localStorage or default to light
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    // Add or remove the 'dark' class on the HTML element
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme); // Save theme preference
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
