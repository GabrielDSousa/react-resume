import React from 'react';
import { useLanguage } from '../hooks/LanguageContext';

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'pt' : 'en';

    // Update language state
    setLang(newLang);

    // Get the current URL and search parameters
    const currentUrl = window.location.pathname + window.location.search;
    const searchParams = new URLSearchParams(window.location.search);

    // Remove any existing lang parameter
    searchParams.delete('lang');

    // Add the new lang parameter
    searchParams.set('lang', newLang);

    // Create the new URL
    const newUrl = currentUrl + (searchParams.toString() ? `?${searchParams.toString()}` : '');

    // Update URL without a reload
    window.history.pushState({ path: newUrl }, '', newUrl);
  };

  return (
    <button onClick={toggleLanguage}>
      {lang === 'en' ? 'Switch to Portuguese' : 'Trocar para Inglês'}
    </button>
  );
};

export default LanguageToggle;
