import React from "react";
import { useLanguage } from "../hooks/LanguageContext";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "pt" : "en";

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
    <div className="flex rounded-full p-4 bg-lime-950">
      <button
        onClick={toggleLanguage}
        className={`mr-2 px-4 py-2 rounded-full ${
          lang === "en"
            ? "bg-lime-500 text-neutral-50"
            : "bg-gray-200 text-neutral-950"
        }`}
      >
        English
      </button>
      <button
        onClick={toggleLanguage}
        className={`px-4 py-2 rounded-full ${
          lang === "pt"
            ? "bg-lime-500 text-neutral-50"
            : "bg-gray-200 text-neutral-950"
        }`}
      >
        Portuguese
      </button>
    </div>
  );
};

export default LanguageToggle;
