import React from 'react';

const Employers = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Employer Dashboard</h2>
      <p>Post job openings, manage applicants, and find the best talent.</p>
      {/* Add buttons for posting jobs, managing applicants */}
      <div className="mt-4">
        <button className="bg-green-500 text-white py-2 px-4 rounded mr-2">Post a Job</button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">View Applicants</button>
      </div>
    </div>
  );
};

export default Employers;