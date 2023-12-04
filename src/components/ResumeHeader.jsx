// ResumeHeader.js
import React from "react";

const ResumeHeader = ({ personalInfo }) => {
  const { name, title, location, email, phone } = personalInfo;

  return (
    <div className="mb-8 print:mb-4 flex items-center p-4">
      {/* Profile Picture with Shadow */}
      <img
        src="https://cdn.glitch.global/f314574e-92fa-4a70-b3ec-f94c4bb038fc/profile.jpg?v=1701548945275" // Update the path to your image
        alt="Profile"
        className="rounded-full object-cover h-32 w-32 print:h-18 print:w-18 mr-4 print:mr-2 shadow-md shadow-lime-500 drop-shadow-2xl print:drop-shadow-xl"
      />

      <div className="flex-col md:flex-row">
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
            {email}
          </div>
          <div className="text-lg print:text-sm flex items-center">
            <i className="fa fa-phone pr-2 print:pr-1"></i>
            {phone}
          </div>
        </div>

        {/* Social Links Grid */}
        <div className="flex flex-col print:ml-4">
          <div className="text-lg print:text-sm flex items-center">
            <i className="fa fa-linkedin pr-2 print:pr-1"></i>
            <span className="inline print:hidden">
              <a
                href="https://www.linkedin.com/in/GabrielDSousa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </span>
            <span className="hidden print:inline">
              linkedin.com/in/GabrielDSousa
            </span>
          </div>
          <div className="text-lg print:text-sm flex items-center">
            <i className="fa fa-github pr-2 print:pr-1"></i>
            <span className="inline print:hidden">
              <a
                href="https://github.com/GabrielDSousa"
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
