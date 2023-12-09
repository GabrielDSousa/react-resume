import React from "react";
import { useLanguage } from "../hooks/LanguageContext";

const ResumeHeader = ({ personalInfo }) => {
  const { name, location, email, phone, linkedin, github } = personalInfo;
  const { lang } = useLanguage();

  // Function to format phone number to international format without spaces and dashes
  const formatPhoneNumber = (phoneNumber) => {
    return phoneNumber.replace(/\D/g, ""); // Remove non-numeric characters
  };

  const formattedPhone = formatPhoneNumber(phone);

  const completeLink = (incompleteLink) => {
    // Check if the link starts with 'http://' or 'https://'
    if (
      incompleteLink.startsWith("http://") ||
      incompleteLink.startsWith("https://")
    ) {
      return incompleteLink; // Link is already complete
    } else {
      // Link is incomplete, add 'https://'
      return `https://${incompleteLink}`;
    }
  };

  return (
    <section aria-labelledby="header-heading" className="mb-8 print:mb-4 flex items-center p-4">
      {/* Profile Picture with Shadow */}
      <img
        src="https://cdn.glitch.global/f314574e-92fa-4a70-b3ec-f94c4bb038fc/profile.jpg?v=1701548945275"
        alt="Profile"
        className="rounded-full object-cover h-20 w-20 md:h-32 md:w-32 print:h-32 print:w-32 mr-4 print:mr-2 shadow-md shadow-lime-500 drop-shadow-2xl print:drop-shadow-xl"
      />

      <address className="flex flex-col md:flex-row print:flex-row">
        {/* Text Block */}
        <div className="print:ml-4">
          <h2 id="header-heading" className="text-xl md:text-3xl print:text-base font-bold pb-2 md:pb-4 print:pb-2">
            {name}
          </h2>
          {renderContactInfo("fa fa-map-marker", location, "location")}
          {renderContactInfo("fa fa-envelope", email, "email")}
          {renderContactInfo("fa fa-phone", phone, "phone", formattedPhone)}
        </div>

        {/* Social Links Grid */}
        <div className="flex flex-col md:self-end print:self-end print:ml-4">
          {renderSocialLink(
            "fa fa-linkedin",
            linkedin,
            "LinkedIn",
            completeLink(linkedin)
          )}
          {renderSocialLink(
            "fa fa-github",
            github,
            "GitHub",
            completeLink(github)
          )}
        </div>
      </address>
    </section>
  );
};

const renderContactInfo = (
  iconClass,
  content,
  linkType = "",
  formattedPhone = ""
) => (
  <div className="text-base md:text-lg print:text-sm flex items-center">
    <i aria-hidden="true" className={`${iconClass} pr-2 print:pr-1`}></i>
    <span
      className={`inline print:hidden ${
        linkType === "email" && "whitespace-nowrap"
      }`}
    >
      {linkType === "email" ? (
        <a href={`mailto:${content}`} target="_blank" rel="noopener noreferrer" aria-label={`Email: ${content}`}>
          {content}
        </a>
      ) : null}

      {linkType === "phone" ? (
        <a
          href={`https://wa.me/${formattedPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Phone: ${content}`}
        >
          {content}
        </a>
      ) : null}
      
      {linkType === "location" ? (
        <a
          href={`https://www.google.com/maps/place/21°45'50.8"S+43°21'01.8"W/@-21.7376401,-43.4402377,11.5z/data=!4m4!3m3!8m2!3d-21.7641!4d-43.3505?entry=ttu`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Location: ${content}`}
        >
          {content}
        </a>
      ) : null}

    </span>
    <span className="hidden print:inline">{content}</span>
  </div>
);

const renderSocialLink = (iconClass, link, text, completeLink) => (
  <div className="text-base md:text-lg print:text-sm flex items-center">
    <i aria-hidden="true" className={`${iconClass} pr-2 print:pr-1`}></i>
    <span className="inline print:hidden">
      <a href={completeLink} target="_blank" rel="noopener noreferrer" aria-label={`${text} Profile`}>
        {text}
      </a>
    </span>
    <span className="hidden print:inline">{link}</span>
  </div>
);

export default ResumeHeader;
