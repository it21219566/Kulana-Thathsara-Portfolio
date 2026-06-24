import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add this line below, wrapped in forward slashes:
  base: '/YOUR_REPO_NAME/', 
})