import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

// Wraps children and provide them with the theme light or dark
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  //Here we toggle the theme to make the background light or dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Use useEffect to add or remove a class on the body when the theme changes
  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme === "dark");
  }, [theme]);

  //Wrap children in ThemeContext.Provider - and pass the value of theme and toggleTheme
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
