import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookMedical, FaChartLine, FaUserMd, FaCog } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <FaBookMedical className="text-2xl" />
            <span className="text-xl font-bold">MediLearn</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/dashboard" className="flex items-center space-x-1 hover:text-blue-200">
              <FaChartLine />
              <span>Dashboard</span>
            </Link>
            <Link to="/modules" className="flex items-center space-x-1 hover:text-blue-200">
              <FaBookMedical />
              <span>Learning Modules</span>
            </Link>
            <Link to="/resources" className="flex items-center space-x-1 hover:text-blue-200">
              <FaUserMd />
              <span>Resources</span>
            </Link>
            <Link to="/settings" className="flex items-center space-x-1 hover:text-blue-200">
              <FaCog />
              <span>Settings</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;