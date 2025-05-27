import { useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext.js";

const THEME_TYPES = {
  LIGHT: "light",
  DARK: "dark",
  COLOR_LIGHT: "color-light",
  COLOR_DARK: "color-dark",
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return savedTheme || (prefersDark ? THEME_TYPES.DARK : THEME_TYPES.LIGHT);
  });

  const toggleTheme = (themeType) => {
    setTheme((prev) => {
      if (themeType === "colored") {
        return prev === THEME_TYPES.COLOR_LIGHT
          ? THEME_TYPES.COLOR_DARK
          : THEME_TYPES.COLOR_LIGHT;
      }
      return prev === THEME_TYPES.LIGHT ? THEME_TYPES.DARK : THEME_TYPES.LIGHT;
    });
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e) => {
      // Only change theme if user hasn't set a preference
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? THEME_TYPES.DARK : THEME_TYPES.LIGHT);
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
