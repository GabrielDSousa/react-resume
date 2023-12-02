// ResumeHeader.js
import React from 'react';

const ResumeHeader = ({ personalInfo }) => {
  const { name, title, location, email, phone } = personalInfo;

  return (
    <div className="mb-8">
      <div className="text-3xl font-bold">{name}</div>
      <div className="text-lg">{title}</div>
      <div className="text-lg">{location}</div>
      <div className="text-lg">{email}</div>
      <div className="text-lg">{phone}</div>
    </div>
  );
};

export default ResumeHeader;
