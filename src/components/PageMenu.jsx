import React from "react";
import { Link } from "wouter";
import DarkModeToggle from "./DarkModeToggle";
import LanguageToggle from "./LanguageToggle";
import PrintButton from "./PrintButton";

const PageMenu = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="p-4 mb-4 print:hidden">
      <div className="flex justify-between items-center">
        <div>
          <LanguageToggle />
        </div>
        <div className="flex space-x-4">
          <PrintButton isDarkMode={isDarkMode} />
          <DarkModeToggle
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </div>
      </div>
    </div>
  );
};

export default PageMenu;
