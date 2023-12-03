import React from 'react';

const Certifications = ({ certifications }) => {
  return (
    <div className="mb-8 print:mb-4">
      <div className="text-2xl print:text-base font-bold mb-4 print:mb-2 text-lime-950">
        Certifications
      </div>
      {certifications.map((cert, index) => (
        <div key={index} className="mb-6 print:mb-3">
          <div className="text-lg print:text-sm font-bold mb-2 print:mb-1">{cert.title}</div>
          <div className="text-lime-800">
            {cert.issuer} | {cert.issue_date}
          </div>
          {cert.competencies && (
            <div className="text-lime-500">
              Competencies: {cert.competencies.join(', ')}
            </div>
          )}
          {cert.credential_code && (
            <div className="text-lime-500">Credential Code: {cert.credential_code}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Certifications;
