import React from 'react';

const Universities = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">University Dashboard</h2>
      <p>Highlight your programs and connect with top employers to ensure your students' success.</p>
      {/* Add buttons for showcasing programs, tracking placements */}
      <div className="mt-4">
        <button className="bg-yellow-500 text-white py-2 px-4 rounded mr-2">Showcase Programs</button>
        <button className="bg-green-500 text-white py-2 px-4 rounded">Track Placements</button>
      </div>
    </div>
  );
};

export default Universities;
