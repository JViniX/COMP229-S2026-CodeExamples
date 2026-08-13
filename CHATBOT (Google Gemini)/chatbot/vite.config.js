/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
*/

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/chat': {
                target: 'http://localhost:5000', // URL of your backend
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/chat/, ''),
            },
        },
    },
});
