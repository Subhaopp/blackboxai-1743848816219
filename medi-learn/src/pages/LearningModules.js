import React, { useState } from 'react';
import { FaSearch, FaFilter, FaBookMedical, FaClock, FaUserMd } from 'react-icons/fa';

const modules = [
  {
    id: 1,
    title: "Cardiology Basics",
    description: "Fundamentals of heart anatomy and common conditions",
    duration: "2 hours",
    category: "Cardiology",
    level: "Beginner"
  },
  {
    id: 2,
    title: "Neurology Advanced",
    description: "In-depth study of nervous system disorders",
    duration: "4 hours",
    category: "Neurology", 
    level: "Advanced"
  },
  {
    id: 3,
    title: "Pediatric Emergencies",
    description: "Managing critical situations in pediatric patients",
    duration: "3 hours",
    category: "Pediatrics",
    level: "Intermediate"
  },
  {
    id: 4,
    title: "Pharmacology Review",
    description: "Essential drug classes and their mechanisms",
    duration: "2.5 hours",
    category: "Pharmacology",
    level: "Beginner"
  }
];

const ModuleCard = ({ module }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-center mb-4">
      <FaBookMedical className="text-blue-600 text-2xl mr-3" />
      <h3 className="text-xl font-bold">{module.title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{module.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
        {module.category}
      </span>
      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
        {module.level}
      </span>
    </div>
    <div className="flex items-center text-gray-500">
      <FaClock className="mr-2" />
      <span>{module.duration}</span>
    </div>
  </div>
);

const LearningModules = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredModules = modules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         module.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || module.category === filter;
    return matchesSearch && matchesFilter;
  });

  const categories = ['All', ...new Set(modules.map(module => module.category))];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Learning Modules</h2>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search modules..."
            className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="relative">
          <FaFilter className="absolute left-3 top-3 text-gray-400" />
          <select
            className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {filteredModules.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map(module => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <FaUserMd className="mx-auto text-4xl text-gray-400 mb-4" />
          <p className="text-gray-500">No modules found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default LearningModules;
