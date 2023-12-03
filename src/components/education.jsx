// Education.js
import React from 'react';
import { useLanguage } from '../hooks/LanguageContext';

const Education = ({ education }) => {
  const { lang } = useLanguage();
  
  return (
    <div className="mb-8">
      <div className="text-2xl print:text-base text-lime-950 font-bold mb-4">{lang === "pt" ? "Educação" : "Education"}</div>
      {education.map((edu, index) => (
        <div key={index} className="mb-6">
          <div className="text-lg print:text-sm font-bold mb-2">{edu.institution}</div>
          <div className="text-lime-800">{edu.location}</div>
          <div className="text-lime-800">{edu.date}</div>
          <p className="mb-2">{edu.degree}</p>
          <p className="text-sm print:text-xs">{edu.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
