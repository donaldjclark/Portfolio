import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// For GitHub Pages under /Portfolio/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(), tailwindcss()],
})
