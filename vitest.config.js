// vite.config.js ou vitest.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',  // Ambiente para testes em componentes React
  },
});