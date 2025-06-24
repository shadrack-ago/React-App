import { useState, useEffect, useCallback } from 'react';
import { fetchPosts, fetchUsers, searchPosts } from '../api/apiService';

/**
 * Custom hook for managing API data with pagination and search
 * @param {string} dataType - Type of data to fetch ('posts' or 'users')
 * @returns {Object} - API data state and functions
 */
export const useApiData = (dataType = 'posts') => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const limit = 10;

  // Fetch data function
  const fetchData = useCallback(async (pageNum = 1, search = '') => {
    setLoading(true);
    setError(null);
    
    try {
      let result;
      
      if (search && search.trim()) {
        // Search functionality
        setIsSearching(true);
        result = await searchPosts(search);
        setData(result);
        setTotal(result.length);
        setIsSearching(false);
      } else {
        // Regular pagination
        setIsSearching(false);
        if (dataType === 'posts') {
          result = await fetchPosts(pageNum, limit);
        } else {
          result = await fetchUsers(pageNum, limit);
        }
        setData(result.data);
        setTotal(result.total);
        setPage(result.page);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [dataType]);

  // Initial data fetch
  useEffect(() => {
    fetchData(1);
  }, [fetchData]);

  // Handle search
  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    if (query.trim()) {
      fetchData(1, query);
    } else {
      fetchData(1);
    }
  }, [fetchData]);

  // Handle pagination
  const handlePageChange = useCallback((newPage) => {
    if (!isSearching) {
      fetchData(newPage);
    }
  }, [fetchData, isSearching]);

  // Refresh data
  const refreshData = useCallback(() => {
    fetchData(1, searchQuery);
  }, [fetchData, searchQuery]);

  return {
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
    totalPages: Math.ceil(total / limit),
  };
}; 