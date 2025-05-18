import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // 👈 Important for correct asset paths
  build: {
    outDir: 'dist', // default, but good to be explicit
  },
});
