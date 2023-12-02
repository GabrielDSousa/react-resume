// Skills.js
import React from 'react';

const Skills = ({ skills }) => {
  const { languages, frameworks, databases, tools, languagesLevel, interests, achievements } = skills;

  return (
    <div className="mb-8">
      <div className="text-2xl font-bold mb-4">Skills</div>
      
      <div className="mb-6">
        <div className="text-lg font-bold mb-2">Languages</div>
        <ul className="list-disc pl-6">
          {languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <div className="text-lg font-bold mb-2">Frameworks</div>
        <ul className="list-disc pl-6">
          {frameworks.map((framework, index) => (
            <li key={index}>{framework}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <div className="text-lg font-bold mb-2">Databases</div>
        <ul className="list-disc pl-6">
          {databases.map((db, index) => (
            <li key={index}>{db}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <div className="text-lg font-bold mb-2">Tools</div>
        <ul className="list-disc pl-6">
          {tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <div className="text-lg font-bold mb-2">Languages Level</div>
        <ul className="list-disc pl-6">
          {Object.entries(languagesLevel).map(([lang, level], index) => (
            <li key={index}>{`${lang}: ${level}`}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <div className="text-lg font-bold mb-2">Interests</div>
        <ul className="list-disc pl-6">
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>

      <div>
        <div className="text-lg font-bold mb-2">Achievements</div>
        <ul className="list-disc pl-6">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
