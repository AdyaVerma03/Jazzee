import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Job Portal Marketplace</h1>
      <p className="text-lg mb-8 text-center">Connecting students, universities, and employers to achieve career success.</p>
      <div className="flex space-x-4">
        <Link to="/students" className="bg-blue-500 text-white py-2 px-4 rounded">
          Students
        </Link>
        <Link to="/employers" className="bg-green-500 text-white py-2 px-4 rounded">
          Employers
        </Link>
        <Link to="/universities" className="bg-yellow-500 text-white py-2 px-4 rounded">
          Universities
        </Link>
      </div>
    </div>
  );
};

export default Home;