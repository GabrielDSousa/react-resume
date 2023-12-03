// App.js
import React from "react";
import { useLanguage } from "../hooks/LanguageContext";
import ResumeHeader from "../components/resumeHeader";
import ProfessionalSummary from "../components/professionalSummary";
import WorkExperience from "../components/workExperience";
import Education from "../components/education";
import Certifications from "../components/certifications";
import Skills from "../components/skills";
import English from "../resume-en.json";
import Portuguese from "../resume-pt.json";

const Home = () => {
  const { lang } = useLanguage();

  const translated = lang === "pt" ? Portuguese : English;

  return (
    <section
      name="a4-resume"
      className="max-w-[210mm] mx-auto p-4 border border-solid border-gray-500 rounded"
    >
      <ResumeHeader personalInfo={translated.personalInfo} />
      <ProfessionalSummary
            professionalSummary={translated.professionalSummary}
          />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <WorkExperience experience={translated.workExperience} />
        </div>
        <div>
          <Education education={translated.education} />
          <Skills skills={translated.skills} />
        </div>
      </div>
      <Certifications certifications={translated.certifications} />
    </section>
  );
};

export default Home;
