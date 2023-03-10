import { ThemeProvider } from "styled-components";
import { lightTheme } from "./light/lightTheme";
import { darkTheme } from "./dark/darkTheme";
import { GlobalStyles, StylesReset } from "./GlobalStyles";
import { useEffect, useState } from "react";

export const ThemeContext = ({ children, theme }) => {
  const [stylesloaded, setStylesloaded] = useState(false);
  useEffect(() => {
    setStylesloaded(true);
  }, []);
  return (
    <>
      {stylesloaded && (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles preferredColorScheme={theme} />
          <StylesReset />
          {children}
        </ThemeProvider>
      )}
    </>
  );
};

export const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};
