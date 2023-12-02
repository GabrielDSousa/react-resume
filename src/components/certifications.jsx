// Certifications.js
import React from 'react';

const Certifications = ({ certifications }) => {
  return (
    <div className="mb-8">
      <div className="text-2xl font-bold mb-4">Certifications</div>
      {certifications.map((cert, index) => (
        <div key={index} className="mb-6">
          <div className="text-lg font-bold mb-2">{cert.title}</div>
          <div className="text-gray-600">{cert.institution} | {cert.location} | {cert.date}</div>
          <p>{cert.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
