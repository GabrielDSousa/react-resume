import React from 'react';

const WorkExperience = ({ experience }) => {
  return (
    <div className="mb-8">
      <div className="text-2xl font-bold mb-4">Work Experience</div>
      {experience.map((job, index) => (
        <div key={index} className="mb-6">
          <div className="text-lg font-bold mb-2">{job.title}</div>
          <div className="text-gray-600">{job.company} - {job.location} | {job.date}</div>
          <p className="mb-2">{job.description}</p>
          {job.milestones && (
            <ul className="list-disc pl-6">
              {job.milestones.map((milestone, i) => (
                <li key={i}>{milestone}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
