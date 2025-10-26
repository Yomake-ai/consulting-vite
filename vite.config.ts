import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/assets': path.resolve(__dirname, './public/assets'),
      '@/data': path.resolve(__dirname, './src/data'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/utils': path.resolve(__dirname, './src/utils'),
    },
  },
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
