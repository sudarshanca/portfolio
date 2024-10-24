'use client'
import React, { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDark(true);
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 rounded-lg transition duration-300 ease-in-out bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
    >
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-900 dark:text-gray-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1M12 20v1M4.22 4.22l.707.707M19.07 19.07l.707.707M1 12h1M22 12h1M4.22 19.07l.707-.707M19.07 4.22l.707.707" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-900 dark:text-gray-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 00-10 10h20a10 10 0 00-10-10z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeSwitcher;
