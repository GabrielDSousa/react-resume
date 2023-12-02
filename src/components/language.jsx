import React, { useState, useEffect } from 'react';

const LanguageComponent = () => {
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
  }, []); // Empty dependency array ensures the effect runs only once after the component mounts

  return (
    <div>
      <p>Current Language: {lang}</p>
      {/* Your component content goes here */}
    </div>
  );
};

export default LanguageComponent;