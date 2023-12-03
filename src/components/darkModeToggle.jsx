// DarkModeToggle.js
import React, { useState, useEffect } from 'react';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check user's preference from localStorage or system preference
    const prefersDarkMode =
      localStorage.getItem('darkMode') === 'true' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    setIsDarkMode(prefersDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
  };

  return (
    <button
      className={`p-2 rounded-full border border-gray-300 ${
        isDarkMode ? 'dark:border-white dark:bg-gray-800' : 'bg-white'
      }`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-yellow-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-yellow-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 12H4"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 20l-7-7 7-7"
          />
        </svg>
      )}
    </button>
  );
};

export default DarkModeToggle;


// DarkModeToggle.jsx
import React from 'react';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="dark-mode-toggle">
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
