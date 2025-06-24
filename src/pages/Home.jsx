import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

/**
 * Home page component
 * @returns {JSX.Element} - Home page component
 */
const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Welcome to{' '}
          <span className="text-primary-500">PLP Task Manager</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          A modern task management application built with React.js and Tailwind CSS. 
          Organize your tasks, manage your workflow, and stay productive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="secondary" size="lg">
            Learn More
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Card className="text-center hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Task Management
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Create, organize, and track your tasks with ease. Mark them as complete and filter by status.
          </p>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            API Integration
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Fetch and display data from external APIs with search functionality and pagination.
          </p>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Real-time Updates
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Experience real-time updates with React hooks and state management.
          </p>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Responsive Design
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Beautiful, responsive design that works perfectly on all devices and screen sizes.
          </p>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Dark Mode
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Toggle between light and dark themes for a comfortable viewing experience.
          </p>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Modern Tech Stack
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Built with React.js, Tailwind CSS, and modern web technologies for optimal performance.
          </p>
        </Card>
      </div>

      {/* Stats Section */}
      <Card className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Application Statistics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-3xl font-bold text-primary-500 mb-2">100+</div>
            <div className="text-gray-600 dark:text-gray-400">Tasks Managed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-500 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-400">API Calls</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-500 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-400">Availability</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home; 