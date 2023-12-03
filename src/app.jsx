import React, { useState, useEffect } from "react";
import { Router } from "wouter";
import { LanguageProvider } from './hooks/LanguageContext';

// Where all of our pages come from
import PageRouter from "./components/router.jsx";
import Menu from "./components/menu.jsx";

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';

// Home function that is reflected across the site
export default function App() {
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
    <Router>
      <Seo />
      <Menu isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50 print:text-sm font-sans print:tracking-tigh print:leading-tight">
          <div className="flex-grow">
             <LanguageProvider>
                <div>
                  <PageRouter />
                </div>
              </LanguageProvider>
          </div>
        </div>
    </Router>
    
    
  );
}
