declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_PUBLIC_DOMAIN: string;
      NEXT_PUBLIC_USER_TOKEN: string;
      NEXT_PUBLIC_USER_NAME: string;
      NEXT_PUBLIC_USER_PASSWORD: string;
      NEXT_NODE_ENV: string;
    }
  }
}

export {};
