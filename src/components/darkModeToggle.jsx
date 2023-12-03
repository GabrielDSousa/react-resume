// DarkModeToggle.js
import React from 'react';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button
      className={`p-2 rounded-full border border-gray-300 ${
        isDarkMode ? 'dark:border-white dark:bg-gray-800' : 'bg-white'
      }`}
      onClick={toggleDarkMode}
    >
      <div>
        {isDarkMode ? (
          <i class="fa-solid fa-moon p-3 text-white"></i>
        ) : (
          <i class="fa-solid fa-sun p-3 text-yellow-300"></i>
        )}
      </div>
    </button>
  );
};

export default DarkModeToggle;
