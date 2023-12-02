// Header.js
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../hooks/LanguageContext.jsx';

const Header = () => {
  const { lang } = useLanguage();
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const response = await fetch(`./resume-${lang}.json`);
        console.log(response.json());
        const data = await response.json();
        setResumeData(data);
      } catch (error) {
        console.error('Error fetching resume data:', error);
      }
    };

    fetchResumeData();
  }, [lang]);

  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
};

export default Header;
