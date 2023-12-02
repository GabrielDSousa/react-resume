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
      <section name="a4-resume" className="max-w-[210mm] mx-auto p-4 border border-solid border-gray-500 rounded">
        <ResumeHeader lang={lang} personalInfo={translated.personalInfo} />
      <ProfessionalSummary lang={lang} summary={professionalSummary} />
      <WorkExperience lang={lang} experience={workExperience} />
      <Education lang={lang} education={education} />
      <Certifications lang={lang} certifications={certifications} />
      <Skills lang={lang} skills={skills} />
      </section>
  );
};

export default Home;
