import React from "react";
import { useLanguage } from "../hooks/LanguageContext";

const ResumeHeader = ({ personalInfo }) => {
  const { name, location, email, phone, linkedin, github } =
    personalInfo;
  const { lang } = useLanguage();

  // Function to format phone number to international format without spaces and dashes
  const formatPhoneNumber = (phoneNumber) => {
    return phoneNumber.replace(/\D/g, ""); // Remove non-numeric characters
  };

  const formattedPhone = formatPhoneNumber(phone);

  return (
    <header className="mb-8 print:mb-4 flex items-center p-4">
      {/* Profile Picture with Shadow */}
      <img
        src="https://cdn.glitch.global/f314574e-92fa-4a70-b3ec-f94c4bb038fc/profile.jpg?v=1701548945275"
        alt="Profile"
        className="rounded-full object-cover h-20 w-20 md:h-32 md:w-32 print:h-32 print:w-32 mr-4 print:mr-2 shadow-md shadow-lime-500 drop-shadow-2xl print:drop-shadow-xl"
      />

      <div className="flex flex-col md:flex-row print:flex-row">
        {/* Text Block */}
        <div className="print:ml-4">
          <h1 className="text-xl md:text-3xl print:text-base font-bold pb-2 md:pb-4 print:pb-2">
            {name}
          </h1>
          {renderContactInfo("fa fa-map-marker", location)}
          {renderContactInfo("fa fa-envelope", email, true)}
          {renderContactInfo("fa fa-phone", phone, false, formattedPhone)}
        </div>

        {/* Social Links Grid */}
        <div className="flex flex-col md:self-end print:self-end print:ml-4">
          {renderSocialLink("fa fa-linkedin", linkedin, "LinkedIn")}
          {renderSocialLink("fa fa-github", github, "GitHub")}
        </div>
      </div>
    </header>
  );
};

const renderContactInfo = (iconClass, content, isEmail = false, formattedPhone = "") => (
  <div className="text-base md:text-lg print:text-sm flex items-center">
    <i className={`${iconClass} pr-2 print:pr-1`}></i>
    <span className={`inline print:hidden ${isEmail && "whitespace-nowrap"}`}>
      {isEmail ? (
        <a href={`mailto:${content}`} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <a href={`https://wa.me/${formattedPhone}`} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      )}
    </span>
    <span className="hidden print:inline">{content}</span>
  </div>
);

const renderSocialLink = (iconClass, link, text) => (
  <div className="text-base md:text-lg print:text-sm flex items-center">
    <i className={`${iconClass} pr-2 print:pr-1`}></i>
    <span className="inline print:hidden">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </span>
    <span className="hidden print:inline">{link}</span>
  </div>
);

export default ResumeHeader;
