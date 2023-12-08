// ResumeCertifications.jsx
import React from "react";
import { useLanguage } from "../hooks/LanguageContext";

const ResumeCertifications = ({ certifications }) => {
  const { lang } = useLanguage();

  return (
    <div className="mb-8 print:mb-4 p-4">
      <div className="text-2xl print:text-base font-bold mb-4 print:mb-2 text-lime-950 dark:text-lime-400">
        {lang === "pt" ? "Certificados" : "Certifications"}
      </div>
      {certifications.map((cert, index) => (
        <div
          key={index}
          className={`mb-6 print:mb-3 ${index >= 5 && "print:hidden"}`}
        >
          <div className="text-lg print:text-sm font-bold mb-2 print:mb-1">
            {cert.title}
          </div>
          <div className="text-lime-800 dark:text-lime-300">
            {cert.issuer} | {cert.issue_date}
          </div>
          {cert.competencies && (
            <div>
              {lang === "pt" ? "Competências" : "Competencies"}:{" "}
              {cert.competencies.join(", ")}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ResumeCertifications;
