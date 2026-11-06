import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
 
// Minimal config: just enables JSX support.
// No proxy needed since App.jsx calls the backend by full URL (CORS is on the backend).
export default defineConfig({
  plugins: [react()],
});
 