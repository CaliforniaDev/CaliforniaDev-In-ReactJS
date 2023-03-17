import { useState, useEffect } from "react";
import { useMedia } from "use-media";

export const useTheme = () => {
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

  const toggleTheme = () =>
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  return [themeMode, toggleTheme];
};
