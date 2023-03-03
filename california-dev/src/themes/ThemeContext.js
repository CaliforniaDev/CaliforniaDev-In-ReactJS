import { ThemeProvider } from "styled-components";
import { lightTheme } from "./light/lightTheme";
import { darkTheme } from "./dark/darkTheme";
import { GlobalStyles, StylesReset } from "./GlobalStyles";



export const ThemeContext = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StylesReset />
      {children}
    </ThemeProvider>
  );
};

export const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};