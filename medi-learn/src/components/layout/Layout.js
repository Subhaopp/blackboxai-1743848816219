import React from 'react';
import Navbar from '../navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} MediLearn - Simplifying Health Data</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;