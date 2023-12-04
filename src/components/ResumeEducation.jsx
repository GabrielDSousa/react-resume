// Education.js
import React from 'react';
import { useLanguage } from '../hooks/LanguageContext';

const ResumeEducation = ({ education }) => {
  const { lang } = useLanguage();
  
  return (
    <div className="mb-8 print:mb-4 p-4">
      <div className="text-2xl print:text-base text-lime-950 font-bold mb-4 print:mb-2 dark:text-lime-400">{lang === "pt" ? "Educação" : "Education"}</div>
      {education.map((edu, index) => (
        <div key={index} className="mb-6 print:mb-3">
          <div className="text-lg print:text-sm font-bold mb-2 print:mb-1">{edu.institution}</div>
          <div className="text-lime-800 dark:text-lime-300">{edu.location}</div>
          <div className="text-lime-800 dark:text-lime-300">{edu.date}</div>
          <p className="mb-2 print:mb-1">{edu.degree}</p>
          <p className="text-sm print:text-xs">{edu.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ResumeEducation;
