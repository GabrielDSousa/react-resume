import React from 'react';
import { useLanguage } from '../hooks/LanguageContext';

const LangToggle = () => {
  const { lang, setLang } = useLanguage();

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'pt' : 'en';

    // Update language state
    setLang(newLang);

    // Update URL without a reload
    const newUrl = window.location.pathname + window.location.search + `?lang=${newLang}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
  };

  return (
    <button onClick={toggleLanguage}>
      {lang === 'pt' ? 'Trocar para Inglês'}
    </button>
  );
};

export default LangToggle;
