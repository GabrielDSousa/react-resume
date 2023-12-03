// Certifications.js
import React from 'react';

const Certifications = ({ certifications }) => {
  return (
    <div className="mb-8">
      <div className="text-2xl print:text-base font-bold mb-4 text-lime-950">Certifications</div>
      {certifications.map((cert, index) => (
        <div key={index} className="mb-6">
          <div className="text-lg print:text-sm font-bold mb-2">{cert.title}</div>
          <div className="text-lime-800">{cert.institution} | {cert.location} | {cert.date}</div>
          <p>{cert.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
