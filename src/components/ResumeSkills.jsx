import React from "react";
import { useLanguage } from "../hooks/LanguageContext";

const ResumeSkills = ({ skills }) => {
  const {
    languages,
    frameworks,
    databases,
    tools,
    languagesLevel,
    interests,
    achievements,
  } = skills;
  const { lang } = useLanguage();

  const renderList = (title, list, listName) => (
    <section aria-labelledby={`skills-${listName}`} className="mb-6 print:mb-3">
      <h3 id={`skills-${listName}`} className="text-lg print:text-sm text-lime-800 font-bold mb-2 print:mb-1 dark:text-lime-300">
        {lang === "pt" ? title.pt : title.en}
      </h3>
      <ul aria-label={lang === "pt" ? `Lista de ${listName}` : `${listName} List`} className="list-disc pl-6 print:pl-3">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );

  const renderLanguageProficiency = () => (
    <section aria-labelledby="skills-proficiency" className="mb-6 print:mb-3">
      <h3 id="skills-proficiency" className="text-lg print:text-sm text-lime-800 font-bold mb-2 print:mb-1 dark:text-lime-300">
        {lang === "pt" ? "Proficiência em língua" : "Language proficiency"}
      </h3>
      <ul aria-label={lang === "pt" ? "Lista de proficiência em língua" : "Language Proficiency List"} className="list-disc pl-6 print:pl-3">
        {Object.entries(languagesLevel).map(([lang, level], index) => (
          <li key={index}>{`${lang}: ${level}`}</li>
        ))}
      </ul>
    </section>
  );

  return (
    <section aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="text-2xl print:text-base text-lime-950 font-bold mb-4 print:mb-2 dark:text-lime-400">
        {lang === "pt" ? "Conhecimentos" : "Skills"}
      </h2>

      {renderList({ pt: "Linguagens de programação", en: "Program Languages" }, languages, "programming-languages")}
      {renderList({ pt: "Frameworks", en: "Frameworks" }, frameworks, "frameworks")}
      {renderList({ pt: "Banco de dados", en: "Databases" }, databases, "databases")}
      {renderList({ pt: "Ferramentas", en: "Tools" }, tools, "tools")}
      {renderLanguageProficiency()}
      <span className="print:hidden">{renderList({ pt: "Interesses", en: "Interests" }, interests, "interests")}</span>
      {renderList({ pt: "Conquistas", en: "Achievements" }, achievements, "achievements")}
    </section>
  );
};

export default ResumeSkills;
