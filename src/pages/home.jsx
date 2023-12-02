// App.js
import React from 'react';
import { useLanguage } from '../hooks/LanguageContext';
import ResumeHeader from '../components/resumeHeader';
import ProfessionalSummary from '../components/professionalSummary';
import WorkExperience from '../components/workExperience';
import English from '../resume-en.json'
import Portuguese from '../resume-pt.json'


const Home = () => {
  const { lang } = useLanguage();
  
  const translated = lang === 'pt' ? Portuguese : English;

  return (
      <section name="a4-resume" className="max-w-[210mm] mx-auto p-4 border border-solid border-gray-500 rounded">
        <ResumeHeader personalInfo={translated.personalInfo} />
        <ProfessionalSummary professionalSummary={translated.professionalSummary} />
        <WorkExperience experience={translated.workExperience} />
      </section>
  );
};

export default Home;
