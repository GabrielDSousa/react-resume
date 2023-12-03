// Skills.js
import React from 'react';
import { useLanguage } from '../hooks/LanguageContext';

const Skills = ({ skills }) => {
  const { languages, frameworks, databases, tools, languagesLevel, interests, achievements } = skills;
  const { lang } = useLanguage();

  return (
    <div className="mb-8 print:mb-4 p-4">
      <div className="text-2xl print:text-base text-lime-950 font-bold mb-4 print:mb-2">{ lang === "pt" ? "Conhecimentos" : "Skills"}</div>
      
      <div className="mb-6 print:mb-3">
        <div className="text-lg print:text-sm text-lime-800 font-bold mb-2 print:mb-1">{ lang === "pt" ? "Linguagens de programação" : "Program Languages"}</div>
        <ul className="list-disc pl-6 print:pl-3">
          {languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6 print:mb-3">
        <div className="text-lg print:text-sm text-lime-800 font-bold mb-2 print:mb-1">Frameworks</div>
        <ul className="list-disc pl-6 print:pl-3">
          {frameworks.map((framework, index) => (
            <li key={index}>{framework}</li>
          ))}
        </ul>
      </div>
 
      <div className="mb-6 print:mb-3">
        <div className="text-lg print:text-sm text-lime-800 font-bold mb-2 print:mb-1">{ lang === "pt" ? "Banco de dados" : "Databases"}</div>
        <ul className="list-disc pl-6 print:pl-3">
          {databases.map((db, index) => (
            <li key={index}>{db}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6 print:mb-3">
        <div className="text-lg print:text-sm text-lime-800 font-bold mb-2 print:mb-1">{ lang === "pt" ? "Ferramentas" : "Tools"}</div>
        <ul className="list-disc pl-6 print:pl-3">
          {tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6 print:mb-3">
        <div className="text-lg print:text-sm text-lime-800 font-bold mb-2 print:mb-1">{ lang === "pt" ? "Proficiência em língua" : "Language proficiency"}</div>
        <ul className="list-disc pl-6 print:pl-3">
          {Object.entries(languagesLevel).map(([lang, level], index) => (
            <li key={index}>{`${lang}: ${level}`}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6 print:hidden">
        <div className="text-lg print:text-sm text-lime-800 font-bold mb-2 print:mb-1">{ lang === "pt" ? "Interesses" : "Interests"}</div>
        <ul className="list-disc pl-6 print:pl-3">
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>

      <div>
        <div className="text-lg print:text-sm text-lime-800 font-bold mb-2 print:mb-1">{ lang === "pt" ? "Conquistas" : "Achievements"}</div>
        <ul className="list-disc pl-6 print:pl-3">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
