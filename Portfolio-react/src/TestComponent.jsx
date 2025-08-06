import React from 'react';

const TestComponent = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary-400 mb-4">
          Portfolio Setup Complete!
        </h1>
        <p className="text-gray-300 mb-8">
          Tailwind CSS v3 is working correctly with your React portfolio.
        </p>
        <button className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default TestComponent;
