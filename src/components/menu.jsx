import React from 'react';
import { Link } from "wouter";
import DarkModeToggle from "./darkModeToggle"
import LanguageToggle from "./languageToggle"


const Menu = ({ isDarkMode, toggleDarkMode }) => {  
  return (   
    <div className="bg-gray-800 text-white p-4 mb-4 print:hidden">
      <div className="flex justify-between items-center">
        <div>
          <LanguageToggle />
        </div>
        <div>
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
