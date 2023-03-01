import { useState, useEffect } from "react";
import { Theme } from "themes";
import { Body } from "./components/Body";
function App() {
  // Set the initial theme preference based on the value stored in local storage
  // or default to 'light' if no preference is found.
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );

  useEffect(() => {
    // Save the user's theme preference to local storage whenever the theme changes
    // to ensure that it persists across browser sessions.
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <Theme theme={theme}>
      <Body theme={theme} />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </Theme>
  );
}

export default App;
