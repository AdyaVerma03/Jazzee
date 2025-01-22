import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h3 className="text-xl font-bold">{job.title}</h3>
      <p>{job.company}</p>
      <p className="text-sm text-gray-500">{job.location}</p>
      <button className="bg-blue-500 text-white py-1 px-3 rounded mt-2">Apply Now</button>
    </div>
  );
};

export default JobCard;