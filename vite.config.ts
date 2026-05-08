import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const rawBase = env.VITE_BASE_PATH || '/';
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

  return {
    plugins: [react()],
    base,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
