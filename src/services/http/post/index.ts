import { setCookie } from 'nookies';
import api from 'services/api';

const TOKEN_EXPIRATION = 60 * 60 * 1; // 1 day

export async function userSign(username: string, password: string) {
  const response = await api.post('/auth/login', {
    username,
    password
  });

  if (!response.data) return;

  const { name } = response.data;
  const { authorization } = response.headers;

  setCookie(undefined, 'user-name', String(name), {
    maxAge: TOKEN_EXPIRATION
  });

  setCookie(undefined, 'user-token', authorization, {
    maxAge: TOKEN_EXPIRATION
  });
}
