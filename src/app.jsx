import React, { useState, useEffect } from "react";
import { Router } from "wouter";
import { LanguageProvider } from "./hooks/LanguageContext";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";
import Menu from "./components/menu.jsx";

// The component that adds our Meta tags to the page
import Seo from "./components/seo.jsx";

// Home function that is reflected across the site
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check user's preference from localStorage or system preference
    const prefersDarkMode =
      localStorage.getItem("darkMode") === "true" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Toggle the 'dark' class on the root html element
    document.documentElement.classList.toggle("dark", prefersDarkMode);
    setIsDarkMode(prefersDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));

    // Toggle the 'dark' class on the root html element
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  return (
    <Router>
      <Seo />
      <Menu isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex flex-col min-h-screen">
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
