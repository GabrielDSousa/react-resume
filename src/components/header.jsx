// Header.js
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../hooks/LanguageContext.jsx';


const Header = () => {
  const { lang } = useLanguage();

  return (
    <div>
      <h1>OI</h1>
    </div>
  );
};

export default Header;
