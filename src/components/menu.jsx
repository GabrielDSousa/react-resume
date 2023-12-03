import React from 'react';
import { Link } from "wouter";
import DarkModeToggle from "./darkModeToggle"
import LangToggle from "./langToggle"

const Menu = ({ isDarkMode, toggleDarkMode }) => {
  return (   
    <div className="bg-gray-800 text-white p-4 mb-4 print:hidden">
      <div className="flex justify-between items-center">
        <div>
          <LangToggle />
        </div>
        <div>
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
