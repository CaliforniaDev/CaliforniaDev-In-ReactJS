import { useState, useEffect } from 'react';
import { useMedia } from 'use-media';

/**
 * Custom hook that manages the theme mode state and provides a function to toggle it.
 * @returns {[string, () => void]} An array with the current theme mode and a function to toggle it.
 */
export const useTheme = () => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem('themeMode') === 'dark' ? 'dark' : 'light'
  );

  // Check if user's OS is set to dark mode and set theme mode accordingly
  const perfersDarkMode = useMedia('(prefers-color-scheme: dark)');
  useEffect(() => {
    setThemeMode(perfersDarkMode ? 'dark' : 'light');
  }, [perfersDarkMode]);
  // Save user's theme preference to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('themeMode', themeMode);
  }, [themeMode]);
  // Function to toggle the theme mode
  const toggleTheme = () =>
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
  return [themeMode, toggleTheme];
};
