import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { parseCookies } from 'nookies';

import Dashboard from 'templates/Dashboard';

export default function Home() {
  const router = useRouter();

  const cookies = parseCookies();

  const token = cookies['user-token'];

  useEffect(() => {
    if (!token) {
      router.replace('/');
    }
  }, [router, token]);

  return (
    <>
      <Dashboard />
    </>
  );
}
