import { ThemeProvider } from "styled-components";
import { lightTheme } from "./light";
import { darkTheme } from "./dark";
import { GlobalStyles, StylesReset } from "./GlobalStyles";



export const Theme = ({ children, theme }) => {
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