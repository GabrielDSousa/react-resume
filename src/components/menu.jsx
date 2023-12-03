import React from 'react';
import { Link } from "wouter";
import DarkModeToggle from "./darkModeToggle"

const Menu = ({ isDarkMode, toggleDarkMode }) => {
  return (   
    <div className="bg-gray-800 text-white p-4 mb-4 print:hidden">
      <div className="flex justify-between items-center">
        <div>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-300">Portuguese</Link></li>
            <li><Link href="/en" className="hover:text-gray-300">English</Link></li>
          </ul>
        </div>
        <div>
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default Menu;