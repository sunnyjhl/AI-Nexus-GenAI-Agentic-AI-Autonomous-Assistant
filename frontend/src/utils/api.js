import axios from 'axios';

const api = axios.create({
  baseURL: '/api',  // Proxied to backend:5000 via package.json proxy
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;

