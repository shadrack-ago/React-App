import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import TaskManager from './components/TaskManager';
import ApiData from './components/ApiData';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <TaskManager />
              </div>
            } />
            <Route path="/api" element={
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <ApiData />
              </div>
            } />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App; 