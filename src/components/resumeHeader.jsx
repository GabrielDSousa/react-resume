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
        className="rounded-full object-cover h-32 w-32 mr-4 shadow-md shadow-lime-500 drop-shadow-2xl"
      />

      {/* Text Block */}
      <div>
        <div className="text-3xl font-bold">{name}</div>
        <div className="text-lg">{title}</div>
        <div className="text-lg">{location}</div>
        <div className="text-lg">{email}</div>
        <div className="text-lg">{phone}</div>
      </div>
    </div>
  );
};

export default ResumeHeader;
