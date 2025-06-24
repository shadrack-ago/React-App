import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer component with links and copyright information
 * @returns {JSX.Element} - Footer component
 */
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              PLP Task Manager
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              A modern task management application built with React and Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/tasks" 
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  Tasks
                </Link>
              </li>
              <li>
                <Link 
                  to="/api" 
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  API Data
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Contact
            </h4>
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <p>Email: info@plptaskmanager.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Task Street, React City</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="#" 
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 