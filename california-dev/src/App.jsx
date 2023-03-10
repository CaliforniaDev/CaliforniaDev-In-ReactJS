import { useState, useEffect } from "react";
import { ThemeContext, breakpoints } from "themes";
import { Body } from "components/Body";
import { Nav } from "components/Navigation/Nav";
import useMedia from "use-media";

function App() {
  // Set the initial theme preference based on the value stored in local storage
  // or default to 'light' if no preference is found.
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );
// Use the `useMedia` hook to listen to changes in the `prefers-color-scheme` media query value
  const perfersDarkMode = useMedia('(prefers-color-scheme: dark)');
  useEffect(() => {
    setTheme(perfersDarkMode ? 'dark' : 'light');
  }, [perfersDarkMode]);
  useEffect(() => {
    // Save the user's theme preference to local storage whenever the theme changes
    // to ensure that it persists across browser sessions.
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext theme={theme}>
      <Nav />
      {/* theme prop being passed is temporary test */}
      <Body theme={theme} />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </ThemeContext>
  );
}

export default App;
