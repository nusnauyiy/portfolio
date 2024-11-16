// src/components/ThemeToggle.jsx
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/useTheme';
import { styles } from '../styles/styles';

export const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        ${styles.components.themeToggle.base}
        ${isDarkMode ? styles.components.themeToggle.dark : styles.components.themeToggle.light}
      `}
      aria-label="Toggle theme">
      {isDarkMode ? (
        <Sun className={styles.components.themeToggle.icon} />
      ) : (
        <Moon className={styles.components.themeToggle.icon} />
      )}
    </button>
  );
};
