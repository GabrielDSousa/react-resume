// App.js
import React from 'react';
import { useLanguage } from '../hooks/LanguageContext';
import ResumeHeader from '../components/resumeHeader';
import English from '../resume-en.json'
import Portuguese from '../resume-pt.json'


const Home = () => {
  const { lang } = useLanguage();
  
  const translated = lang === 'pt' ? Portuguese : English;

  return (
      <div <div className="max-w-[210mm] mx-auto p-4">
  {/* Your content goes here */}
</div>>
        <ResumeHeader lang={lang} personalInfo={translated.personalInfo} />
        {/* Content for the rest of the resume... */}
      </>
  );
};

export default Home;
