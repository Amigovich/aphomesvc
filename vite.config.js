import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "https://aphomesvc.com/",
  build: {
    rollupOptions: {
      external: [],
    },
  },
});

