import React from "react";
import { useLanguage } from "../hooks/LanguageContext";

const ResumeCertifications = ({ certifications }) => {
  const { lang } = useLanguage();

  return (
    <section name="certifications" className="mb-8 print:mb-4 p-4">
      <h1 className="text-2xl print:text-base font-bold mb-4 print:mb-2 text-lime-950 dark:text-lime-400">
        {lang === "pt" ? "Certificados" : "Certifications"}
      </h1>
      {certifications.map((cert, index) => (
        <div
          key={index}
          className={`mb-6 print:mb-3 ${index >= 5 && "print:hidden"}`}
        >
          <h2 className="text-lg print:text-sm font-bold mb-2 print:mb-1">
            {cert.title}
          </h2>
          <div className="text-lime-800 dark:text-lime-300">
            {cert.issuer} | <time>{cert.issue_date}</time>
          </div>
          {cert.competencies && (
            <div>
              {lang === "pt" ? "Competências" : "Competencies"}:{" "}
              {cert.competencies.join(", ")}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default ResumeCertifications;
