import axios from 'axios';
import { parseCookies } from 'nookies';

const { 'user-token': token } = parseCookies();

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL
});

if (token) {
  api.defaults.headers['Authorization'] = `${token}`;
}

export default api;
