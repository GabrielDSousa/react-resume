import React from "react";
import { useLanguage } from "../hooks/LanguageContext";

const WorkExperience = ({ experience }) => {
  const { lang } = useLanguage();

  const renderDescription = (description, hidden) => (
    <p className={`mb-2 print:mb-1 ${hidden && "print:hidden"}`}>
      {description}
    </p>
  );

  const renderMilestones = (milestones, hidden) => (
    <ul aria-label={`${lang === "pt" ? "Lista de marcos" : "Milestones List"}`} className={`list-disc pl-6 print:pl-3 ${hidden && "print:hidden"}`}>
      {milestones.map((milestone, index) => (
        <li key={index}>{milestone}</li>
      ))}
    </ul>
  );

  return (
    <section aria-labelledby="experience-heading" name="experience" className="mb-8 print:mb-4 p-4">
      <h2 id="experience-heading" className="text-2xl print:text-base font-bold mb-4 print:mb-2 text-lime-950 dark:text-lime-400">
        {lang === "pt" ? "Experiência profissional" : "Work Experience"}
      </h2>
      {experience.map((job, index) => (
        <article aria-labelledby={`experience-${index}-heading`} key={index} className="mb-6 print:mb-3">
          <h3 id={`experience-${index}-heading`} className="text-lg print:text-sm text-lime-800 dark:text-lime-500 font-bold mb-2 print:mb-1">
            {job.title}
          </h3>
          <div className="text-lime-600">
            {`${job.company} - ${job.location} | ${job.date}`}
          </div>
          {renderDescription(job.description, index >= 4)}
          {job.milestones && renderMilestones(job.milestones, index >= 4)}
        </article>
      ))}
    </section>
  );
};

export default WorkExperience;
