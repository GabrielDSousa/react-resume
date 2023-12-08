import React from "react";
import { useLanguage } from "../hooks/LanguageContext";

const ResumeEducation = ({ education }) => {
  const { lang } = useLanguage();

  return (
    <section name="education">
      <h1 className="text-2xl print:text-base text-lime-950 font-bold mb-4 print:mb-2 dark:text-lime-400">
        {lang === "pt" ? "Educação" : "Education"}
      </h1>
      {education.map((edu, index) => (
        <div key={index} className="mb-6 print:mb-3">
          <h2 className="text-lg print:text-sm font-bold mb-2 print:mb-1">
            {edu.institution}
          </h2>
          <div className="text-lime-800 dark:text-lime-300">{edu.location}</div>
          <div className="text-lime-800 dark:text-lime-300">{edu.date}</div>
          <p className="mb-2 print:mb-1">{edu.degree}</p>
          <p>{lang === "pt" ? "Matérias relevantes" : "Relevant classes"}</p>
          <ul className="list-disc pl-6 print:pl-3">
            {edu.classes &&
              edu.classes.map((educationClass, i) => (
                <li key={i}>{educationClass}</li>
              ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ResumeEducation;
