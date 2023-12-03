import React from 'react';
import { useLanguage } from '../hooks/LanguageContext';

const WorkExperience = ({ experience }) => {
  const { lang } = useLanguage();
  
  return (
    <div className="mb-8">
      <div className="text-2xl print:text-base font-bold mb-4 text-lime-950">{ lang === "pt" ? "Experiência profissional" : "Work Experience"}</div>
      {experience.map((job, index) => (
        <div key={index} className="mb-6">
          <div className="text-lg print:text-sm text-lime-800 font-bold mb-2">{job.title}</div>
          <div className="text-lime-600">{job.company} - {job.location} | {job.date}</div>
          <p className="mb-2">{job.description}</p>
          {job.milestones && (
            <ul className="list-disc pl-6">
              {job.milestones.map((milestone, i) => (
                <li key={i}>{milestone}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
