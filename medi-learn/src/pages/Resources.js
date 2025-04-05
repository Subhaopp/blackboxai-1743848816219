import React, { useState } from 'react';
import { FaSearch, FaFilter, FaExternalLinkAlt } from 'react-icons/fa';

const resources = [
  {
    id: 1,
    title: "CDC Guidelines",
    description: "Latest public health guidelines from the CDC",
    category: "Guidelines",
    url: "https://www.cdc.gov"
  },
  {
    id: 2,
    title: "PubMed Central",
    description: "Free full-text medical journal articles",
    category: "Research",
    url: "https://www.ncbi.nlm.nih.gov/pmc/"
  },
  {
    id: 3,
    title: "MedlinePlus",
    description: "Patient-friendly health information",
    category: "Patient Education",
    url: "https://medlineplus.gov"
  },
  {
    id: 4,
    title: "UpToDate",
    description: "Evidence-based clinical decision support",
    category: "Clinical Reference",
    url: "https://www.uptodate.com"
  }
];

const ResourceCard = ({ resource }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
    <p className="text-gray-600 mb-4">{resource.description}</p>
    <div className="flex justify-between items-center">
      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
        {resource.category}
      </span>
      <a 
        href={resource.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 flex items-center"
      >
        Visit <FaExternalLinkAlt className="ml-1" />
      </a>
    </div>
  </div>
);

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || resource.category === filter;
    return matchesSearch && matchesFilter;
  });

  const categories = ['All', ...new Set(resources.map(resource => resource.category))];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800">Medical Resources</h2>
        <p className="text-gray-600">Access helpful medical references, guidelines, and tools.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search resources..."
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

      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources.map(resource => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500">No resources found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default Resources;
