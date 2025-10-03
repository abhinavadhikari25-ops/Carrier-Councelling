import axios from 'axios';

const api = axios.create({
  baseURL: 'https://carrier-councelling.onrender.com/api',
  withCredentials: true
});

export default api;