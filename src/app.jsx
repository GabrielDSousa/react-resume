import React, { useState, useEffect } from "react";
import { Router } from "wouter";
import { LanguageProvider } from "./hooks/LanguageContext";
import PageRouter from "./components/router.jsx";
import PageMenu from "./components/PageMenu.jsx";
import Seo from "./components/seo.jsx";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check user's dark mode preference
  const prefersDarkMode =
    localStorage.getItem("darkMode") === "true" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  // Handle dark mode before printing
  const handlePrint = () => {
    document.documentElement.classList.remove("dark");
  };

  // Handle dark mode after printing
  const handleAfterPrint = () => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  };

  const containerStyle = {
    backgroundImage: `url(https://cdn.glitch.global/f314574e-92fa-4a70-b3ec-f94c4bb038fc/endless-constellation.svg?v=1702071126869)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Set the height of the container
    // Add any additional styles as needed
  };

  useEffect(() => {
    // Add event listeners for print events
    window.addEventListener("beforeprint", handlePrint);
    window.addEventListener("afterprint", handleAfterPrint);

    // Remove event listeners on component unmount
    return () => {
      window.removeEventListener("beforeprint", handlePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, [isDarkMode]);

  useEffect(() => {
    // Apply user's dark mode preference
    document.documentElement.classList.toggle("dark", prefersDarkMode);
    setIsDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  return (
    <Router>
      <Seo />
      <main className="min-h-screen" style={containerStyle}>
        <LanguageProvider>
          <PageMenu isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <div className="flex flex-col flex-grow">
            <PageRouter />
          </div>
        </LanguageProvider>
      </main>
    </Router>
  );
};

export default App;
