import { ThemeProvider } from "styled-components";
import { lightTheme } from "./light/lightTheme";
import { darkTheme } from "./dark/darkTheme";
import { GlobalStyles, StylesReset } from "./GlobalStyles";
import { useEffect, useState } from "react";

export const ThemeContext = ({ children, themeMode }) => {
  const [stylesloaded, setStylesloaded] = useState(false);
  console.log(themeMode);
  useEffect(() => {
    setStylesloaded(true);
  }, []);
  return (
    <>
      {stylesloaded && (
        <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
          <GlobalStyles preferredColorScheme={themeMode} />
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
