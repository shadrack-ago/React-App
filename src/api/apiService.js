import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
});

/**
 * Fetch posts from JSONPlaceholder API
 * @param {number} page - Page number for pagination
 * @param {number} limit - Number of items per page
 * @returns {Promise} - Promise with posts data
 */
export const fetchPosts = async (page = 1, limit = 10) => {
  try {
    const response = await api.get(`/posts?_page=${page}&_limit=${limit}`);
    return {
      data: response.data,
      total: parseInt(response.headers['x-total-count'] || '0'),
      page,
      limit,
    };
  } catch (error) {
    throw new Error(`Failed to fetch posts: ${error.message}`);
  }
};

/**
 * Fetch users from JSONPlaceholder API
 * @param {number} page - Page number for pagination
 * @param {number} limit - Number of items per page
 * @returns {Promise} - Promise with users data
 */
export const fetchUsers = async (page = 1, limit = 10) => {
  try {
    const response = await api.get(`/users?_page=${page}&_limit=${limit}`);
    return {
      data: response.data,
      total: parseInt(response.headers['x-total-count'] || '0'),
      page,
      limit,
    };
  } catch (error) {
    throw new Error(`Failed to fetch users: ${error.message}`);
  }
};

/**
 * Search posts by title
 * @param {string} query - Search query
 * @returns {Promise} - Promise with filtered posts
 */
export const searchPosts = async (query) => {
  try {
    const response = await api.get(`/posts?title_like=${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to search posts: ${error.message}`);
  }
};

/**
 * Get a single post by ID
 * @param {number} id - Post ID
 * @returns {Promise} - Promise with post data
 */
export const getPost = async (id) => {
  try {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch post: ${error.message}`);
  }
};

export default api; 