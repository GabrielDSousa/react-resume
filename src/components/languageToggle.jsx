// Education.js
import React from 'react';
import { useLanguage } from '../hooks/LanguageContext';

const LanguageToggle = () => {
  const { lang } = useLanguage();
  
  return (
    <div className="mb-8 print:mb-4 p-4">
      <div className="text-2xl print:text-base text-lime-950 font-bold mb-4 print:mb-2 dark:text-lime-400">{lang === "pt" ? "Educação" : "Education"}</div>
    </div>
  );
};

export default LanguageToggle;
