import { parseCookies } from 'nookies';
import api from 'services/api';

const { 'user-token': token } = parseCookies();

export async function getProducts() {
  try {
    const response = await api.get('/product/list', {
      headers: {
        Authorization: `${token}`
      }
    });

    return response.data.content;
  } catch (error) {
    throw new Error('Ocorreu algum problema no servidor');
  }
}
