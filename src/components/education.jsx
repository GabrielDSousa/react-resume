// Education.js
import React from 'react';

const Education = ({ education }) => {
  return (
    <div className="mb-8">
      <div className="text-2xl font-bold mb-4">Education</div>
      {education.map((edu, index) => (
        <div key={index} className="mb-6">
          <div className="text-lg font-bold mb-2">{edu.institution}</div>
          <div className="text-gray-600">{edu.location} | {edu.date}</div>
          <p className="mb-2">{edu.degree}</p>
          <p>{edu.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
