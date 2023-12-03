import React, { useState, useEffect } from "react";
import { Router } from "wouter";
import { LanguageProvider } from "./hooks/LanguageContext";
import PageRouter from "./components/router.jsx";
import Menu from "./components/menu.jsx";
import Seo from "./components/seo.jsx";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const prefersDarkMode =
    localStorage.getItem("darkMode") === "true" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  const handlePrint = () => {
    document.documentElement.classList.remove("dark");
  };

  const handleAfterPrint = () => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  };

  useEffect(() => {
    window.addEventListener("beforeprint", handlePrint);
    window.addEventListener("afterprint", handleAfterPrint);

    return () => {
      window.removeEventListener("beforeprint", handlePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, [isDarkMode]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", prefersDarkMode);
    setIsDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

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
