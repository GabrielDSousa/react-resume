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
      <div className="w-8 h-8 flex items-center justify-center">
        {isDarkMode ? (
          <i class="fa fa-map-marker text-white"></i>
        ) : (
          <i class="fa fa-map-marker text-yellow-300"></i>
        )}
      </div>
    </button>
  );
};

export default DarkModeToggle;
