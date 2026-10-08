import { useEffect, useState } from "react";

function getInitialTheme() {
  const saved = localStorage.getItem("portfolio-theme");

  if (saved) {
    return saved;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${
        theme === "dark" ? "light" : "dark"
      } mode`}
    >
      <span className="theme-icon">
        {theme === "dark" ? "☼" : "☾"}
      </span>

      <span className="theme-label">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
    </button>
  );
}

export default ThemeToggle;