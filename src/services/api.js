import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: 'http://localhost:3333/api/v1',
});

api.interceptors.request.use(async (config) => {
  const token = getToken();

  const req = config;
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default api;
