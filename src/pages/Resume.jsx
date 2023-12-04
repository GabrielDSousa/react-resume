import React from "react";
import { useLanguage } from "../hooks/LanguageContext";
import ResumeHeader from "../components/ResumeHeader";
import ProfessionalSummary from "../components/ProfessionalSummary";
import WorkExperience from "../components/WorkExperience";
import ResumeEducation from "../components/ResumeEducation";
import ResumeCertifications from "../components/ResumeCertifications";
import ResumeSkills from "../components/ResumeSkills";
import English from "../resume-en.json";
import Portuguese from "../resume-pt.json";

const Resume = () => {
  const { lang } = useLanguage();

  const translated = lang === "pt" ? Portuguese : English;

  return (
    <section
      name="a4-resume"
      className="max-w-[210mm] mx-auto border border-solid border-none md:border-lime-950 md:dark:border-lime-600 rounded print:border-none"
    >
      <ResumeHeader personalInfo={translated.personalInfo} />
      <ProfessionalSummary
            professionalSummary={translated.professionalSummary}
          />
      <div className="flex flex-col print:md:grid print:md:grid-cols-3 print:md:gap-4 print:grid print:grid-cols-3 print:gap-4">
        <div className="col-span-2">
          <WorkExperience experience={translated.workExperience} />
        </div>
        <div className="h-full bg-lime-400 bg-opacity-20">
          <ResumeEducation education={translated.education} />
          <ResumeSkills skills={translated.skills} />
        </div>
      </div>
      
      <ResumeCertifications certifications={translated.certifications} />
    </section>
  );
};

export default Resume;
