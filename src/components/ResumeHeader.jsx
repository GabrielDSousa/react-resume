import React from "react";
import { useLanguage } from '../hooks/LanguageContext';

const ResumeHeader = ({ personalInfo }) => {
  const { name, title, location, email, phone, linkedin, github } = personalInfo;
  const { lang } = useLanguage();
  
  // Function to format phone number to international format without spaces and dashes
  const formatPhoneNumber = (phoneNumber) => {
    return phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
  };
  
  const formattedPhone = formatPhoneNumber(phone);

  return (
    <div className="mb-8 print:mb-4 flex items-center p-4 ">
      {/* Profile Picture with Shadow */}
      <img
        src="https://cdn.glitch.global/f314574e-92fa-4a70-b3ec-f94c4bb038fc/profile.jpg?v=1701548945275" // Update the path to your image
        alt="Profile"
        className="rounded-full object-cover h-20 w-20 md:h-32 md:w-32 print:h-32 print:w-32 mr-4 print:mr-2 shadow-md shadow-lime-500 drop-shadow-2xl print:drop-shadow-xl"
      />

      <div className="flex flex-col md:flex-row print:flex-row">
        {/* Text Block */}
        <div className="print:ml-4">
          <div className="text-3xl print:text-base font-bold pb-4 print:pb-2">
            {name}
          </div>
          <div className="text-lg print:text-sm">{title}</div>
          <div className="text-lg print:text-sm flex items-center">
            <i className="fa fa-map-marker pl-1 pr-3 print:pr-0.5 print:pr-1.5"></i>
            {location}
          </div>
          <div className="text-lg print:text-sm flex items-center">
            <i className="fa fa-envelope pr-2 print:pr-1"></i>
            <span className="inline print:hidden">
              <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">{email}</a>
            </span>
            <span className="hidden print:inline">{email}</span>
          </div>
          <div className="text-lg print:text-sm flex items-center">
            <i className="fa fa-phone pr-2 print:pr-1"></i>
            <span className="inline print:hidden">
              <a href={`https://wa.me/${formattedPhone}`} target="_blank" rel="noopener noreferrer">
                {phone}
              </a>
            </span>
            <span className="hidden print:inline">{phone}</span>
          </div>
        </div>

        {/* Social Links Grid */}
        <div className="flex flex-col md:self-end print:self-end print:ml-4">
          <div className="text-lg print:text-sm flex items-center">
            <i className="fa fa-linkedin pr-2 print:pr-1"></i>
            <span className="inline print:hidden">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </span>
            <span className="hidden print:inline">
              {`linkedin.com/in/GabrielDSousa${lang === 'pt' ? '' : '/?locale=en_US'}`}
            </span>
          </div>
          <div className="text-lg print:text-sm flex items-center">
            <i className="fa fa-github pr-2 print:pr-1"></i>
            <span className="inline print:hidden">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </span>
            <span className="hidden print:inline">
              github.com/GabrielDSousa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;
