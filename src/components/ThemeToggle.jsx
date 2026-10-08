import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ theme, onToggle }) {
  const darkMode = theme === "dark";

  return (
    <button className="theme-toggle" type="button" onClick={onToggle} aria-pressed={darkMode} aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`}>
      <Sun size={14} aria-hidden="true" />
      <span className={darkMode ? "toggle-track is-dark" : "toggle-track"}><span /></span>
      <Moon size={14} aria-hidden="true" />
    </button>
  );
}
