// ResumeHeader.js
import React from "react";

const ResumeHeader = ({ personalInfo }) => {
  const { name, title, location, email, phone } = personalInfo;

  return (
    <div className="mb-8 flex items-center">
      {/* Profile Picture with Shadow */}
      <img
        src="https://cdn.glitch.global/f314574e-92fa-4a70-b3ec-f94c4bb038fc/profile.jpg?v=1701548945275" // Update the path to your image
        alt="Profile"
        className="rounded-full object-cover h-32 w-32 mr-4 shadow-md shadow-lime-500 drop-shadow-2xl mr-4"
      />

      {/* Text Block */}
      <div>
        <div className="text-3xl font-bold pb-4">{name}</div>
        <div className="text-lg">{title}</div>
        <div className="text-lg flex items-center">
          <i className="fa fa-map-marker pr-3"></i>
          {location}
        </div>
        <div className="text-lg flex items-center">
          <i className="fa fa-envelope pr-2"></i>
          {email}
        </div>
        <div className="text-lg flex items-center">
          <i className="fa fa-phone pr-2"></i>
          {phone}
        </div>
      </div>

      {/* Social Links Grid */}
      <div className="flex flex-col">
        <div className="text-lg flex items-center">
          <i className="fa fa-linkedin pr-2"></i>
          <span className="inline print:hidden">
            <a href="https://www.linkedin.com/in/GabrielDSousa/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </span>
          <span className="hidden print:inline">https://www.linkedin.com/in/GabrielDSousa/</span>
        </div>
        <div className="text-lg flex items-center">
          <i className="fa fa-github pr-2"></i>
          <span className="inline print:hidden">
            <a href="https://github.com/GabrielDSousa" target="_blank" rel="noopener noreferrer">GitHub</a>
          </span>
          <span className="hidden print:inline">https://github.com/GabrielDSousa</span>
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;
