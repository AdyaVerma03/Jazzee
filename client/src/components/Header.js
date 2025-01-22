import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Job Portal Marketplace</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/employers">Employers</Link></li>
            <li><Link to="/universities">Universities</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;