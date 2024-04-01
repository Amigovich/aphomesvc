import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/APnetfirst-web",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [],
    },
  },
});
