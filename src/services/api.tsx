import axios from 'axios';

const api = axios.create({
  baseURL: 'https://prova.deploy.profranchising.com.br'
});

export default api;
