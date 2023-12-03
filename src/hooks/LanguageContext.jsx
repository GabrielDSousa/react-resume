// LanguageContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('');

  useEffect(() => {
    // Get browser language
    const browserLanguage = navigator.language;

    // Check if the language is Portuguese (Brazil)
    if (browserLanguage.toLowerCase() === 'pt-br') {
      setLang('pt');
    } else {
      setLang('en');
    }

    // Check if there is a language query parameter in the URL
    const searchParams = new URLSearchParams(window.location.search);
    const urlLang = searchParams.get('lang');

    if (urlLang && (urlLang === 'en' || urlLang === 'pt')) {
      setLang(urlLang);
    }
  }, [location.search]);

  const value = {
    lang,
    setLang,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
