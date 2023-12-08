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

  const renderList = (title, list) => (
    <div className="mb-6 print:mb-3">
      <div className="text-lg print:text-sm text-lime-800 font-bold mb-2 print:mb-1 dark:text-lime-300">
        {lang === "pt" ? title.pt : title.en}
      </div>
      <ul className="list-disc pl-6 print:pl-3">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  const renderLanguageProficiency = () => (
    <div className="mb-6 print:mb-3">
      <div className="text-lg print:text-sm text-lime-800 font-bold mb-2 print:mb-1 dark:text-lime-300">
        {lang === "pt" ? "Proficiência em língua" : "Language proficiency"}
      </div>
      <ul className="list-disc pl-6 print:pl-3">
        {Object.entries(languagesLevel).map(([lang, level], index) => (
          <li key={index}>{`${lang}: ${level}`}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="flex flex-col justify-between">
      <div className="text-2xl print:text-base text-lime-950 font-bold mb-4 print:mb-2 dark:text-lime-400">
        {lang === "pt" ? "Conhecimentos" : "Skills"}
      </div>

      {renderList({ pt: "Linguagens de programação", en: "Program Languages" }, languages)}
      {renderList({ pt: "Frameworks", en: "Frameworks" }, frameworks)}
      {renderList({ pt: "Banco de dados", en: "Databases" }, databases)}
      {renderList({ pt: "Ferramentas", en: "Tools" }, tools)}
      {renderLanguageProficiency()}
      {lang !== "pt" && renderList({ pt: "Interesses", en: "Interests" }, interests)}
      {renderList({ pt: "Conquistas", en: "Achievements" }, achievements)}
    </div>
  );
};

export default ResumeSkills;
