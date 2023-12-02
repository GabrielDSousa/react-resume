// ResumeHeader.js
import React from 'react';

const ResumeHeader = ({ lang, personalInfo }) => {
  const { name, title, location, email, phone } = personalInfo[lang];

  return (
    <div style={{ pageBreakBefore: 'always' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h1>{name}</h1>
          <p>{title}</p>
        </div>
        <div>
          <p>{location}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;
