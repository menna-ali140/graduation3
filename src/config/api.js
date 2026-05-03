const API_HOST = process.env.REACT_APP_API_HOST || 'http://207.180.209.101:5000';
export const API_BASE_URL = process.env.REACT_APP_API_URL || `${API_HOST}/api`;

export const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};

export const getJsonHeaders = () => ({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});