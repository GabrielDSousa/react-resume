import React from 'react';
import { Link } from "wouter";
import DarkModeToggle from "./darkModeToggle"
import LanguageToggle from "./languageToggle"
import PrintButton from "./printButton"


const Menu = ({ isDarkMode, toggleDarkMode }) => {  
  return (   
    <div className="p-4 mb-4 print:hidden">
      <div className="flex justify-around items-center">
        <div>
          <LanguageToggle />
        </div>
        <div>
          <PrintButton isDarkMode={isDarkMode} />
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
