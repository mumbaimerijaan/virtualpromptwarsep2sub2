import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.js'],
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
        { find: /.*\.(png|jpg|jpeg|gif|svg)$/, replacement: path.resolve(__dirname, 'src/tests/mocks/fileMock.js') },
      ],
    },
    include: ['src/tests/**/*.test.{js,jsx,ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      // Enforced Production Quality Gates
      thresholds: {
        'src/services/**': 95,
        'server/**': 95,
        'src/utils/**': 95,
        branches: 85,
        functions: 95,
        lines: 90,
        statements: 90
      },
      exclude: [
        'node_modules/**',
        'src/tests/**',
        '**/*.d.ts',
        '**/*.config.js'
      ]
    },
  },
});
