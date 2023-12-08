import React from "react";

const ProfessionalSummary = ({ professionalSummary }) => {
  const { title, summary } = professionalSummary;

  return (
    <section name="summary" className="mb-8 print:mb-4 p-4">
      <h2 className="text-2xl print:text-base font-bold mb-2 print:mb-1 text-lime-950 dark:text-lime-500">
        {title}
      </h2>
      <p>{summary}</p>
    </section>
  );
};

export default ProfessionalSummary;
