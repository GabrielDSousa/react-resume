import React from "react";
import { useLanguage } from "../hooks/LanguageContext";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  const toggleLanguage = (newLang) => {
    // Update language state
    setLang(newLang);

    // Get the current URL and search parameters
    const currentUrl = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);

    // Remove any existing lang parameter
    searchParams.delete("lang");

    // Add the new lang parameter
    searchParams.set("lang", newLang);

    // Create the new URL
    const newUrl =
      currentUrl +
      (searchParams.toString() ? `?${searchParams.toString()}` : "");

    // Update URL without a reload
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  return (
    <nav aria-label="Language Selector" className="flex rounded-full p-4 bg-lime-950">
      <ToggleButton
        onClick={() => toggleLanguage("en")}
        isActive={lang === "en"}
        label={lang === "pt" ? "Inglês" : "English"}
        extraClass="mr-2"
      />
      <ToggleButton
        onClick={() => toggleLanguage("pt")}
        isActive={lang === "pt"}
        label={lang === "en" ? "Portuguese" : "Português"}
      />
    </nav>
  );
};

const ToggleButton = ({ onClick, isActive, label, extraClass }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full ${extraClass} ${
      isActive
        ? "bg-lime-500 text-neutral-50 transition-transform transform scale-105"
        : "bg-gray-200 text-neutral-950 transition-transform transform scale-100"
    }`}
    aria-pressed={isActive}
  >
    {label}
  </button>
);

export default LanguageToggle;
