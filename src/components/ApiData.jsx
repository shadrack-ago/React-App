import React, { useState } from 'react';
import { useApiData } from '../hooks/useApiData';
import Card from './Card';
import Button from './Button';

/**
 * ApiData component for displaying API data with search and pagination
 * @returns {JSX.Element} - ApiData component
 */
const ApiData = () => {
  const [dataType, setDataType] = useState('posts');
  const [searchInput, setSearchInput] = useState('');
  
  const {
    data,
    loading,
    error,
    page,
    total,
    searchQuery,
    isSearching,
    handleSearch,
    handlePageChange,
    refreshData,
    totalPages,
  } = useApiData(dataType);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchInput);
  };

  const handleDataTypeChange = (type) => {
    setDataType(type);
    setSearchInput('');
    setSearchQuery('');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          API Data
        </h2>
        <div className="flex gap-2">
          <Button
            variant={dataType === 'posts' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => handleDataTypeChange('posts')}
          >
            Posts
          </Button>
          <Button
            variant={dataType === 'users' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => handleDataTypeChange('users')}
          >
            Users
          </Button>
        </div>
      </div>

      {/* Search Form */}
      <Card>
        <form onSubmit={handleSearchSubmit} className="flex gap-2">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder={`Search ${dataType}...`}
            className="flex-grow input"
          />
          <Button type="submit" variant="primary">
            Search
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              setSearchInput('');
              handleSearch('');
            }}
          >
            Clear
          </Button>
        </form>
      </Card>

      {/* Loading State */}
      {loading && (
        <Card>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
            <span className="ml-2 text-gray-600 dark:text-gray-400">
              Loading {dataType}...
            </span>
          </div>
        </Card>
      )}

      {/* Error State */}
      {error && (
        <Card>
          <div className="text-center py-8">
            <div className="text-red-500 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Error Loading Data
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
            <Button onClick={refreshData} variant="primary">
              Try Again
            </Button>
          </div>
        </Card>
      )}

      {/* Data Display */}
      {!loading && !error && (
        <>
          {/* Results Info */}
          <div className="flex justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400">
              {isSearching ? (
                `Found ${total} results for "${searchQuery}"`
              ) : (
                `Showing ${data.length} of ${total} ${dataType}`
              )}
            </p>
            <Button onClick={refreshData} variant="secondary" size="sm">
              Refresh
            </Button>
          </div>

          {/* Data Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
                      {dataType === 'posts' ? item.title : item.name}
                    </h3>
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                      #{item.id}
                    </span>
                  </div>
                  
                  {dataType === 'posts' ? (
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                      {item.body}
                    </p>
                  ) : (
                    <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <p><strong>Email:</strong> {item.email}</p>
                      <p><strong>Phone:</strong> {item.phone}</p>
                      <p><strong>Website:</strong> {item.website}</p>
                    </div>
                  )}
                  
                  {dataType === 'posts' && (
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      User ID: {item.userId}
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {!isSearching && totalPages > 1 && (
            <Card>
              <div className="flex justify-center items-center gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page <= 1}
                >
                  Previous
                </Button>
                
                <span className="text-gray-600 dark:text-gray-400">
                  Page {page} of {totalPages}
                </span>
                
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page >= totalPages}
                >
                  Next
                </Button>
              </div>
            </Card>
          )}

          {/* No Results */}
          {data.length === 0 && !loading && (
            <Card>
              <div className="text-center py-8">
                <div className="text-gray-400 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  No {dataType} found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {isSearching 
                    ? `No ${dataType} match your search criteria.`
                    : `No ${dataType} available at the moment.`
                  }
                </p>
              </div>
            </Card>
          )}
        </>
      )}
    </div>
  );
};

export default ApiData; 