// ProfessionalSummary.js
import React from 'react';

const ProfessionalSummary = ({ professionalSummary }) => {
  const { title, summary } = professionalSummary;

  return (
    <div className="mb-8">
      <div className="text-2xl font-bold mb-2">{title}</div>
      <p>{summary}</p>
    </div>
  );
};

export default ProfessionalSummary;