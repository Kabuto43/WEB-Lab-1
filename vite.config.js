import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/WEB-Lab-1/',
  plugins: [
    tailwindcss(),
    react(),
  ], 
})
