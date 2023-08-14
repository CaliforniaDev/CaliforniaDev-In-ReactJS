import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { useMedia } from "use-media";

import { GlobalStyles, StylesReset } from "../themes/GlobalStyles";
import { lightTheme } from "../themes/light/lightTheme";
import { darkTheme } from "../themes/dark/darkTheme";

/**
 * This context will be used to pass the current theme
 * and a function to toggle the theme to all components in the component tree
 * below this component.
 *
 * The themeMode is stored in local storage so that, when the user refreshes the
 * page, the theme will be persisted.
 */

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [stylesloaded, setStylesloaded] = useState(false);
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("themeMode") === "dark" ? "dark" : "light"
  );

  const perfersDarkMode = useMedia("(prefers-color-scheme: dark)");

  useEffect(() => {
    setThemeMode(perfersDarkMode ? "dark" : "light");
  }, [perfersDarkMode]);

  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
    return [themeMode, toggleTheme];
  };

  useEffect(() => {
    setStylesloaded(true);
  }, []);

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      {stylesloaded && (
        <StyledThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme} >
          <GlobalStyles preferredColorScheme={themeMode} />
          <StylesReset />
          {children}
        </StyledThemeProvider>
      )}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};
