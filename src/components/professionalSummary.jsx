// ProfessionalSummary.js
import React from 'react';

const ProfessionalSummary = ({ professionalSummary }) => {
  const { title, summary } = professionalSummary;

  return (
    <div className="mb-8 print:mb-4 p-4">
      <div className="text-2xl print:text-base font-bold mb-2 print:mb-1 text-lime-950">{title}</div>
      <p>{summary}</p>
    </div>
  );
};

export default ProfessionalSummary;
